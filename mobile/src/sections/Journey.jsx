import React, { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks'
import elearningBg from '../assets/journey/elearning.webp'
import inpersonBg from '../assets/journey/inperson.webp'
import liveBg from '../assets/journey/live.webp'
import blendedBg from '../assets/journey/blended.webp'
import './Journey.css'

/* "The development journey" (mobile): how the team learns, as a row of four cards you swipe through.
   Every card is the same size and is laid out on one 980 × 1210 grid, then scaled as one piece, so it looks the same on every phone.
   The artwork behind each card is an image; every word and icon on top of it is live. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Laptop = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="4.5" y="4.5" width="15" height="10.5" rx="1.8" /><path d="M2 19.2h20M2 19.2c0 1 .6 1.3 1.5 1.3h17c.9 0 1.5-.3 1.5-1.3" /></svg>)
const LaptopPlay = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="4.5" y="4.5" width="15" height="10.5" rx="1.8" /><path d="M2 19.2h20M10.5 7.6v4.8l4-2.4z" fill="currentColor" /></svg>)
const Chat = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M8 20.4A9.4 9.4 0 1 0 3.6 16L2.2 21.8z" /></svg>)
const Users = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="9" cy="7.5" r="3.6" /><path d="M2.4 20.5v-1.2a5.4 5.4 0 0 1 5.4-5.4h2.4a5.4 5.4 0 0 1 5.4 5.4v1.2M16 4.1a3.6 3.6 0 0 1 0 6.8M18.2 14.2a5.4 5.4 0 0 1 3.4 5v1.3" /></svg>)
const Group = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="7" r="3.2" /><circle cx="4.8" cy="9.4" r="2.4" /><circle cx="19.2" cy="9.4" r="2.4" /><path d="M6.2 20.5v-1a5 5 0 0 1 5-5h1.6a5 5 0 0 1 5 5v1M1.6 18.4v-.6a3.3 3.3 0 0 1 3.1-3.3M22.4 18.4v-.6a3.3 3.3 0 0 0-3.1-3.3" /></svg>)
const Layers = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 2.8 2.6 7.6 12 12.4l9.4-4.8z" /><path d="m2.6 12 9.4 4.8 9.4-4.8M2.6 16.4l9.4 4.8 9.4-4.8" /></svg>)
const PlayBox = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="2.5" y="5" width="19" height="14" rx="2.6" /><path d="M10 9v6l5-3z" fill="currentColor" /></svg>)
const Globe = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5c2.6 2.6 3.9 5.8 3.9 9.5S14.6 18.9 12 21.5c-2.6-2.6-3.9-5.8-3.9-9.5S9.4 5.1 12 2.5z" /></svg>)
const Calendar = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="3" y="4.5" width="18" height="16.5" rx="2.6" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01M7.5 17h.01M12 17h.01M16.5 17h.01" /></svg>)
const Pin = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 21.5c-4-4.4-6.6-7.8-6.6-11.2a6.6 6.6 0 0 1 13.2 0c0 3.4-2.6 6.8-6.6 11.2z" /><circle cx="12" cy="10.2" r="2.5" /></svg>)
const Bars = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="2.8" y="12" width="4.4" height="8" rx="1.2" /><rect x="9.8" y="7" width="4.4" height="13" rx="1.2" /><rect x="16.8" y="2.8" width="4.4" height="17.2" rx="1.2" /></svg>)

const CARDS = [
  { key: 'e', bg: elearningBg, Icon: Laptop, title: 'E-learning', desc: 'Flexible and self-paced, so teams can learn anytime, anywhere.',
    feats: [{ Icon: PlayBox, t: ['Practical,', 'real-world', 'learning'] }, { Icon: Layers, t: ['Flexible', 'and', 'self-paced'] }, { Icon: Group, t: ['For individuals', 'and teams'] }] },
  { key: 'i', bg: inpersonBg, Icon: Chat, title: 'In-person', desc: 'Hands-on, expert-led sessions that build stronger team dynamics.',
    feats: [{ Icon: Users, t: ['On-site', 'with your team'] }, { Icon: Globe, t: ['Multiple', 'languages'] }, { Icon: Pin, t: ['Flexible', 'location'] }] },
  { key: 'l', bg: liveBg, Icon: Users, title: 'Live online', desc: 'Interactive, expert-led sessions with your team, anywhere.',
    feats: [{ Icon: Globe, t: ['Multiple', 'languages'] }, { Icon: Calendar, t: ['Flexible', 'scheduling'] }, { Icon: Users, t: ['Teams of', '12–25'] }] },
  { key: 'b', bg: blendedBg, Icon: Layers, title: 'Blended', desc: 'A powerful mix of digital learning and live sessions for lasting impact.', blend: true,
    feats: [{ Icon: Laptop, t: ['Digital', 'learning'] }, { Icon: Users, t: ['Expert-led', 'sessions'] }, { Icon: Bars, t: ['Higher', 'real-world', 'impact'] }] },
]

const COLS = [193, 495, 795]   // centres of the three feature columns

function Card({ c }) {
  return (
    <div className="jc" style={{ '--k': 336 / 980 }}>
      <img className="jc-bg" src={c.bg} alt="" draggable="false" />
      <span className="jc-tile" style={{ left: 46, top: 64 }}><c.Icon /></span>
      <h3 className="jc-t" style={{ left: 262, top: 56 }}>{c.title}</h3>
      <p className="jc-d" style={{ left: 262, top: 170, width: 690 }}>{c.desc}</p>

      {c.blend && (
        <>
          <div className="jc-pane" style={{ left: 40, top: 356, width: 514, height: 232 }}>
            <LaptopPlay className="jc-pico" style={{ left: 46, top: 74, width: 112, height: 92 }} />
            <b style={{ left: 178, top: 32 }}>Digital learning</b>
            <span style={{ left: 194, top: 84 }}>Build knowledge and skills at your own pace.</span>
          </div>
          <div className="jc-pane" style={{ left: 40, top: 628, width: 496, height: 232 }}>
            <Group className="jc-pico" style={{ left: 46, top: 76, width: 112, height: 88 }} />
            <b style={{ left: 178, top: 32 }}>Live sessions</b>
            <span style={{ left: 190, top: 84 }}>Apply, discuss, and solve real team challenges.</span>
          </div>
        </>
      )}

      {[341, 649].map((x) => <i className="jc-line" key={x} style={{ left: x, top: 1005, height: 235 }} />)}
      {c.feats.map((f, i) => (
        <div className="jc-f" key={f.t.join('')} style={{ left: COLS[i] - 150, top: 1015 }}>
          <f.Icon className="jc-fi" />
          <p>{f.t.map((l, k) => <React.Fragment key={l}>{l}{k < f.t.length - 1 && <br />}</React.Fragment>)}</p>
        </div>
      ))}
    </div>
  )
}

/* the wreath beside "20+ years" */
function Laurel() {
  const leaves = []
  for (let side = 0; side < 2; side += 1) {
    for (let i = 0; i < 8; i += 1) {
      const a = (108 + i * 17) * (Math.PI / 180)
      const x = 44 + (side ? 1 : -1) * Math.cos(Math.PI - a) * -1 * 27
      const y = 40 + Math.sin(a - Math.PI) * -1 * 27
      const rot = (side ? 1 : -1) * (i * 17 - 18) + (side ? 0 : 0)
      leaves.push(<ellipse key={`${side}-${i}`} cx={x} cy={y} rx="3.4" ry="7.2" transform={`rotate(${rot} ${x} ${y})`} />)
    }
  }
  return (
    <svg viewBox="0 0 88 80" className="jn-laurel" aria-hidden="true">
      <g fill="none" stroke="#6a2ee8" strokeWidth="2.2">{leaves}</g>
      <path d="M44 27.5l3.3 6.9 7.6 1-5.5 5.3 1.4 7.5-6.8-3.7-6.8 3.7 1.4-7.5-5.5-5.3 7.6-1z" fill="#6a2ee8" />
    </svg>
  )
}

const N = CARDS.length
const UNIT = 150      // finger travel (px) for one card
const PEEK = 77       // how far a neighbour sits from the centre card
const wrap = (o) => ((((o + N / 2) % N) + N) % N) - N / 2

export default function Journey() {
  const [ref, seen] = useInView(0.15)
  const rail = useRef(null)
  const [at, setAt] = useState(0)
  const st = useRef({ pos: 0, target: null, raf: 0, last: 0, drag: null, shown: 0 })

  const paint = () => {
    const el = rail.current
    if (!el) return
    const { pos } = st.current
    ;[...el.children].forEach((card, i) => {
      const o = wrap(i - pos)
      const a = Math.abs(o)
      const d = Math.min(a, 1)
      const x = Math.sign(o) * (d * PEEK + Math.max(0, a - 1) * 40)
      const vis = a <= 1 ? 1 : Math.max(0, 1 - (a - 1) * 2.2)
      card.style.transform = `translate3d(${x.toFixed(2)}px, ${(-6 * d).toFixed(2)}px, 0) scale(${(1 - 0.34 * d).toFixed(4)})`
      card.style.opacity = ((1 - 0.58 * d) * vis).toFixed(3)
      card.style.filter = `blur(${(d * 2.2).toFixed(2)}px) drop-shadow(0 14px 18px rgba(86, 28, 128, ${(0.28 - 0.16 * d).toFixed(3)}))`
      card.style.zIndex = String(Math.round(100 - a * 20))
      card.style.visibility = vis === 0 ? 'hidden' : 'visible'
    })
    const cur = ((Math.round(pos) % N) + N) % N
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
    s.target = to
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
      v = 0.8 * v + 0.2 * (-(e.clientX - lastX) / (UNIT * k) / dt)
      lastX = e.clientX; lastT = e.timeStamp
      s.pos = Math.max(p0 - 1, Math.min(p0 + 1, p0 - (e.clientX - sx) / (UNIT * k)))
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
      to = Math.max(start - 1, Math.min(start + 1, to))
      glide(to)
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

  const go = (i) => {
    const s = st.current
    const from = s.target === null ? s.pos : s.target
    glide(Math.round(from) + wrap(i - Math.round(from)))
  }

  return (
    <section ref={ref} className={`jn ${seen ? 'is-in' : ''}`} id="journey">
      <div className="jn-in">
        <div className="jn-eyebrow rv" style={{ '--i': 0 }}><i aria-hidden="true" /><span>THE DEVELOPMENT JOURNEY</span></div>
        <h2 className="jn-title rv" style={{ '--i': 1 }}>You choose how your <em>people</em> learn.</h2>
        <p className="jn-sub rv" style={{ '--i': 2 }}>Flexible team development combining expert-led sessions and digital learning, tailored to your organisation.</p>
        <div className="jn-years rv" style={{ '--i': 3 }}>
          <Laurel />
          <i className="jn-vl" aria-hidden="true" />
          <p><b>20+ years</b> developing teams and leaders across Europe.</p>
        </div>
      </div>

      <div className="jn-rail rv" style={{ '--i': 4 }} ref={rail}>
        {CARDS.map((c) => (
          <article className="jn-card" key={c.key} aria-label={c.title}><Card c={c} /></article>
        ))}
      </div>
      <div className="jn-dots" role="tablist" aria-label="Learning formats">
        {CARDS.map((c, i) => <button type="button" key={c.key} role="tab" aria-selected={i === at} aria-label={c.title} className={i === at ? 'on' : ''} onClick={() => go(i)} />)}
      </div>
    </section>
  )
}
