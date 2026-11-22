import React, { useEffect, useRef } from 'react'
import './HoldsBack.css'

/* "What holds managers back" (mobile), in two versions of the same section:
     variant="split"  — version 1: the flow splits into two columns side by side ("In their hands" | "What holds them back")
     variant="focus"  — version 2: one focused column, only what holds managers back, with bars; "In their hands" is a note
   The flow builds row by row as it scrolls into view (nothing moves for people who turn off motion). */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }
const I = {
  list: <svg viewBox="0 0 24 24" {...sv}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" /></svg>,
  target: <svg viewBox="0 0 24 24" {...sv}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  check: <svg viewBox="0 0 24 24" {...sv}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>,
  chat: <svg viewBox="0 0 24 24" {...sv}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>,
  layers: <svg viewBox="0 0 24 24" {...sv}><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>,
  hourglass: <svg viewBox="0 0 24 24" {...sv}><path d="M5 22h14M5 2h14M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2" /></svg>,
  lock: <svg viewBox="0 0 24 24" {...sv}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  sprout: <svg viewBox="0 0 24 24" {...sv}><path d="M7 20h10" /><path d="M12 20v-8" /><path d="M12 12c0-3.5 2.5-6 7-6 0 4-2.5 6-7 6Z" /><path d="M12 14c0-3-2-5-6-5 0 3.5 2 5 6 5Z" /></svg>,
  file: <svg viewBox="0 0 24 24" {...sv}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h5" /></svg>,
}

const HANDS = [['target', 'Setting priorities'], ['check', 'Following through'], ['chat', 'A team that speaks up']]
const BACK = [['layers', 'Too many priorities', 28], ['hourglass', 'Slow approvals', 22], ['lock', 'Decided without them', 17]]
const OF = 42

export default function HoldsBack({ variant = 'split' }) {
  const flow = useRef(null)
  const focus = variant === 'focus'

  // row-by-row entrance (ported from the design): each part gets a delay, then everything is revealed when the flow scrolls in
  useEffect(() => {
    const root = flow.current
    if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined
    const STEP = 340
    const els = []
    let k = 0
    const mark = (el, cls, at) => {
      if (!el) return
      if (cls) el.classList.add(cls)
      el.classList.add('hb-hide')
      el.style.setProperty('--d', `${(at ?? k++) * STEP}ms`)
      els.push(el)
    }
    mark(root.querySelector('.hb-start'), 'hb-rv')
    root.querySelectorAll('.hb-start .hb-face').forEach((f, i) => { f.classList.add('hb-pop', 'hb-hide'); f.style.setProperty('--d', `${220 + i * 90}ms`); els.push(f) })
    k++
    root.querySelectorAll(':scope > .hb-line, :scope > .hb-diamond').forEach((el) => mark(el, el.classList.contains('hb-diamond') ? 'hb-pop' : 'hb-grow'))
    if (!focus) mark(root.querySelector('.hb-split'), null)
    if (!focus) mark(root.querySelector('.hb-branches'), null, k)
    const base = k
    root.querySelectorAll('.hb-chain').forEach((chain) => {
      if (getComputedStyle(chain.parentElement).display === 'none') return
      mark(chain, null, base);
      [...chain.children].forEach((el, i) => mark(el, 'hb-rv', base + i))
    })
    if (focus) mark(root.parentElement.querySelector('.hb-note'), 'hb-rv', base + 6)

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { requestAnimationFrame(() => els.forEach((el) => el.classList.remove('hb-hide'))); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(root)
    return () => io.disconnect()
  }, [focus])

  return (
    <section className={`hb hb--${variant}`} id={focus ? 'holds-back-2' : 'holds-back'} aria-label="What holds managers back">
      <p className="hb-eyebrow">What holds managers back</p>
      <h2 className="hb-title">Your managers know what slows them down. <em>Now you will too.</em></h2>
      <p className="hb-sub">Not everything is in a manager’s hands. Managers tell us what gets in the way of doing their job well. Seen across all of them, it gives you a picture your organisation doesn’t have today.</p>

      <div className="hb-flow" ref={flow}>
        <div className="hb-start">
          <span className="hb-hex">{I.list}</span>
          <span className="hb-start-t"><b>Your managers answer</b><small>with their teams and the organisation</small></span>
          <span className="hb-faces">
            <span className="hb-face f1">AK</span><span className="hb-face f2">MP</span><span className="hb-face f3">LS</span><span className="hb-face f4">DT</span><span className="hb-face more">+38</span>
          </span>
        </div>
        <div className="hb-line live" style={{ height: 40 }} />
        <div className="hb-diamond" aria-hidden="true"><i /></div>
        <div className="hb-line" style={{ height: 14 }} />
        {!focus && <div className="hb-split" aria-hidden="true" />}

        <div className="hb-branches">
          {!focus && (
            <div className="hb-branch">
              <div className="hb-chain">
                <span className="hb-flag hb-flag--blue">In their hands</span>
                {HANDS.map(([ic, t]) => <div key={t} className="hb-item"><span className="hb-ico hb-ico--blue">{I[ic]}</span>{t}</div>)}
                <div className="hb-result"><div className="hb-card"><span className="hb-ico hb-ico--blue">{I.sprout}</span><span>Targeted development<small>in Build</small></span></div></div>
              </div>
            </div>
          )}
          <div className="hb-branch">
            <div className="hb-chain">
              <span className="hb-flag hb-flag--amber">What holds them back{focus && <em>· example</em>}</span>
              {BACK.map(([ic, t, n]) => (
                <div key={t} className="hb-item">
                  <span className="hb-ico hb-ico--amber">{I[ic]}</span>{t}
                  <span className="hb-count">{n} of {OF}</span>
                  {focus && <span className="hb-bar" style={{ '--p': `${((n / OF) * 100).toFixed(1)}%` }} aria-hidden="true"><i /></span>}
                </div>
              ))}
              <div className="hb-result"><div className="hb-card"><span className="hb-ico hb-ico--amber">{I.file}</span><span>A report for leadership and HR<small>what most managers run into</small></span></div></div>
            </div>
          </div>
        </div>
      </div>
      {focus && <p className="hb-note"><span className="hb-ico hb-ico--blue">{I.sprout}</span><span>What is in their hands feeds targeted development in <b>Build</b>.</span></p>}
    </section>
  )
}
