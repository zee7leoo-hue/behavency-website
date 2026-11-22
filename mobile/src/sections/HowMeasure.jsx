import React, { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks'
import './HowMeasure.css'

/* "How we measure" (mobile): three cards you swipe through, one at a time. Drawn on the 400px canvas. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Bubble = () => (<svg viewBox="0 0 32 32" {...sv}><path d="M7 5.5h18a3.5 3.5 0 0 1 3.5 3.5v10a3.5 3.5 0 0 1-3.5 3.5H15l-6.5 5v-5H7A3.5 3.5 0 0 1 3.5 19V9A3.5 3.5 0 0 1 7 5.5z" /><path d="M10.5 14h.01M16 14h.01M21.5 14h.01" strokeWidth="3" /></svg>)
const Clipboard = () => (<svg viewBox="0 0 32 32" {...sv}><rect x="6" y="6" width="20" height="23" rx="3.4" /><rect x="11" y="3" width="10" height="6" rx="2.2" /><path d="M10.5 15l1.7 1.7 3-3.2M18.5 15.5h4M10.5 22l1.7 1.7 3-3.2M18.5 22.5h4" /></svg>)
const User = () => (<svg viewBox="0 0 32 32" {...sv}><circle cx="16" cy="10" r="5" /><path d="M6.5 27v-1.2A6.8 6.8 0 0 1 13.3 19h5.4a6.8 6.8 0 0 1 6.8 6.8V27" /></svg>)
const Users = () => (<svg viewBox="0 0 32 32" {...sv}><circle cx="12" cy="10.5" r="4.6" /><path d="M3.5 27v-1a6.6 6.6 0 0 1 6.6-6.6h3.8a6.6 6.6 0 0 1 6.6 6.6v1M21 6.2a4.6 4.6 0 0 1 0 8.6M25.4 19.6a6.4 6.4 0 0 1 3.4 5.6V27" /></svg>)
const Layers = () => (<svg viewBox="0 0 32 32" {...sv}><path d="M16 4 4 10.2 16 16.4l12-6.2z" /><path d="m4 15.8 12 6.2 12-6.2M4 21.4l12 6.2 12-6.2" /></svg>)

const CARDS = [
  { n: '01', tag: 'During development', cap: false, q: 'Was it useful?', d: 'After each module, participants rate how relevant and practical it was for their work.', Icon: Bubble, label: ['Short participant feedback'] },
  { n: '02', tag: 'After 3 months', cap: true, q: 'Is it being used?', d: 'Participants check in on their plan: which actions they have tried at work, and what got in the way.', Icon: Clipboard, label: ['Development', 'plan check-in'] },
  { n: '03', tag: 'After 6 months', cap: true, q: 'Has behaviour changed?', d: 'The same questionnaires, the same people. Results are compared with the starting point, area by area, from three angles:',
    rows: [
      { t: 'The manager’s view', s: 'How they now see their own behaviour.', chip: ['Managerial', 'Profile'], tone: 'blue', Icon: User },
      { t: 'The team’s view', s: 'Whether colleagues see a difference day to day.', chip: ['360°', 'Feedback'], tone: 'violet', Icon: Users },
      { t: 'The working conditions', s: 'Whether the barriers that were raised have eased.', chip: ['Organisational', 'Barriers'], tone: 'green', Icon: Layers },
    ] },
]

const N = CARDS.length
const PITCH = 351   // card width 340 + gap 11

export default function HowMeasure() {
  const [ref, seen] = useInView(0.15)
  const rail = useRef(null)
  const [at, setAt] = useState(0)
  const st = useRef({ pos: 0, target: null, raf: 0, last: 0, shown: 0 })

  const paint = () => {
    const el = rail.current
    if (!el) return
    const { pos } = st.current
    ;[...el.children].forEach((card, i) => {
      const o = i - pos
      const d = Math.min(1, Math.abs(o))
      card.style.transform = `translate3d(${(o * PITCH).toFixed(2)}px, 0, 0) scale(${(1 - 0.045 * d).toFixed(4)})`
      card.style.opacity = (1 - 0.35 * d).toFixed(3)
    })
    const cur = Math.max(0, Math.min(N - 1, Math.round(pos)))
    if (cur !== st.current.shown) { st.current.shown = cur; setAt(cur) }
  }
  const tick = (t) => {
    const s = st.current
    s.raf = 0
    if (s.target === null) return
    const dt = Math.min(48, t - (s.last || t))
    s.last = t
    s.pos += (s.target - s.pos) * (1 - Math.exp(-dt / 85))
    if (Math.abs(s.target - s.pos) < 0.0015) { s.pos = s.target; s.target = null; s.last = 0 }
    paint()
    if (s.target !== null) s.raf = requestAnimationFrame(tick)
  }
  const glide = (to) => {
    const s = st.current
    s.target = Math.max(0, Math.min(N - 1, to))
    if (!s.raf) { s.last = 0; s.raf = requestAnimationFrame(tick) }
  }

  useEffect(() => {
    const el = rail.current
    if (!el) return undefined
    paint()
    const s = st.current
    let id = null
    let sx = 0
    let sy = 0
    let p0 = 0
    let lastX = 0
    let lastT = 0
    let v = 0
    let on = false
    const down = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      id = e.pointerId; sx = lastX = e.clientX; sy = e.clientY; lastT = e.timeStamp; v = 0; on = false
      p0 = s.pos; s.target = null
    }
    const move = (e) => {
      if (e.pointerId !== id) return
      const k = el.getBoundingClientRect().width / 400 || 1
      if (!on) {
        if (Math.abs(e.clientX - sx) < 6 * k || Math.abs(e.clientX - sx) < Math.abs(e.clientY - sy)) return
        on = true
        try { el.setPointerCapture(id) } catch (err) { /* ignore */ }
      }
      const dt = Math.max(1, e.timeStamp - lastT)
      v = 0.8 * v + 0.2 * (-(e.clientX - lastX) / (PITCH * 0.5 * k) / dt)
      lastX = e.clientX; lastT = e.timeStamp
      let p = p0 - (e.clientX - sx) / (PITCH * 0.5 * k)
      p = Math.max(p0 - 1, Math.min(p0 + 1, p))
      if (p < 0) p *= 0.3
      if (p > N - 1) p = N - 1 + (p - (N - 1)) * 0.3
      s.pos = p
      paint()
    }
    const up = (e) => {
      if (e.pointerId !== id) return
      id = null
      if (!on) return
      on = false
      const start = Math.round(p0)
      let to = Math.round(s.pos + v * 220)
      if (to === start && Math.abs(s.pos - p0) > 0.14) to = start + Math.sign(s.pos - p0)
      glide(Math.max(start - 1, Math.min(start + 1, to)))
    }
    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)
    return () => {
      el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up)
      if (s.raf) cancelAnimationFrame(s.raf)
    }
  }, [])

  return (
    <section ref={ref} className={`hm ${seen ? 'is-in' : ''}`} id="how-we-measure">
      <div className="hm-in">
        <div className="hm-eyebrow rv" style={{ '--i': 0 }}><i aria-hidden="true" /><span>HOW WE MEASURE</span></div>
        <h2 className="hm-title rv" style={{ '--i': 1 }}>We measure whether <span>development actually happens.</span></h2>
        <p className="hm-text rv" style={{ '--i': 2 }}>Not just whether people completed the training — but whether their behaviour changed. We check along the way, and then ask the same people the same questions again.</p>
      </div>

      <div className="hm-rail rv" style={{ '--i': 3 }} ref={rail}>
        {CARDS.map((c) => (
          <article className="hm-card" key={c.n} aria-label={c.q}>
            <div className="hm-head"><b>{c.n}</b><span className={c.cap ? 'cap' : ''}>{c.tag}</span></div>
            <h3>{c.q}</h3>
            <p className="hm-d">{c.d}</p>
            {c.rows ? (
              <div className="hm-rows">
                {c.rows.map((r) => (
                  <div className="hm-row" key={r.t}>
                    <span className={`hm-ri hm-ri--${r.tone}`}><r.Icon /></span>
                    <div><strong>{r.t}</strong><span>{r.s}</span></div>
                    <em className={`hm-chip hm-chip--${r.tone}`}>{r.chip[0]}<br />{r.chip[1]}</em>
                  </div>
                ))}
              </div>
            ) : (
              <div className="hm-foot">
                <span className="hm-fi"><c.Icon /></span>
                <i aria-hidden="true" />
                <p>{c.label.map((l, k) => <React.Fragment key={l}>{l}{k < c.label.length - 1 && <br />}</React.Fragment>)}</p>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="hm-dots" role="tablist" aria-label="How we measure">
        {CARDS.map((c, i) => <button type="button" key={c.n} role="tab" aria-selected={i === at} aria-label={c.q} className={i === at ? 'on' : ''} onClick={() => glide(i)} />)}
      </div>
    </section>
  )
}
