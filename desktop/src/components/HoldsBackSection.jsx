import React, { useEffect, useRef } from 'react'
import './HoldsBackSection.css'

/* "What holds managers back" — replaces the old "Not every problem is the manager's" section.
   Keeps id="two-gaps" so the menu link still works.
   A flow chart: managers answer → split into what is in their hands (left) and what holds them back (right).
   When it scrolls into view it builds row by row, top to bottom, both sides together;
   without JavaScript, or with reduced motion, it is simply shown complete.
   The counts on the right ("28 of 42" etc.) are an example and stay labelled "example". */

const Ico = ({ id }) => <svg aria-hidden="true"><use href={`#${id}`} /></svg>

export default function HoldsBackSection() {
  const flowRef = useRef(null)

  // One-by-one entrance for the flow: start card, line, split, then each side's cards in order.
  useEffect(() => {
    const flow = flowRef.current
    if (!flow || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const STEP = 480 // a new row about every half second, both sides together
    const mark = (el, k, cls) => { if (!el) return; el.classList.add(cls); el.style.setProperty('--d', `${k * STEP}ms`) }
    let k = 0
    mark(flow.querySelector('.hb-start'), k++, 'rv')
    flow.querySelectorAll(':scope > .hb-line-v, :scope > .hb-diamond').forEach((el) => mark(el, k++, el.classList.contains('hb-diamond') ? 'rv' : 'grow'))
    const split = flow.querySelector('.hb-split'); if (split) split.style.setProperty('--d', `${k++ * STEP}ms`)
    const base = k
    flow.querySelectorAll('.hb-chain').forEach((chain) => {
      chain.style.setProperty('--d', `${base * STEP}ms`);
      [...chain.children].forEach((el, i) => mark(el, base + i, 'rv'))
    })
    flow.classList.add('pre')
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) { requestAnimationFrame(() => flow.classList.remove('pre')); obs.disconnect() }
    }, { threshold: 0.2 })
    io.observe(flow)
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* shared icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="i-list" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" /></symbol>
        <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></symbol>
        <symbol id="i-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></symbol>
        <symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></symbol>
        <symbol id="i-hourglass" viewBox="0 0 24 24"><path d="M5 22h14M5 2h14M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2" /></symbol>
        <symbol id="i-lock" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></symbol>
        <symbol id="i-sprout" viewBox="0 0 24 24"><path d="M7 20h10" /><path d="M12 20v-8" /><path d="M12 12c0-3.5 2.5-6 7-6 0 4-2.5 6-7 6Z" /><path d="M12 14c0-3-2-5-6-5 0 3.5 2 5 6 5Z" /></symbol>
        <symbol id="i-file" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h5" /></symbol>
      </svg>

      <section className="hb" id="two-gaps" aria-label="What holds managers back">
        <div className="hb-wrap">
          <p className="hb-eyebrow">What holds managers back</p>
          <h2 className="hb-h2">Your managers know what slows them down. <em>Now you will too.</em></h2>
          <p className="hb-sub">Not everything is in a manager’s hands. Managers tell us what gets in the way of doing their job well. Seen across all of them, it gives you a picture your organisation doesn’t have today.</p>

          <div className="hb-flow" ref={flowRef} style={{ marginTop: 56 }}>
            <div className="hb-start">
              <span className="hb-hex"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><use href="#i-list" /></svg></span>
              <span style={{ textAlign: 'left' }}><b>Your managers answer</b><small>with their teams and the organisation</small></span>
              <span className="hb-faces"><span className="hb-face f1">AK</span><span className="hb-face f2">MP</span><span className="hb-face f3">LS</span><span className="hb-face f4">DT</span><span className="hb-face more">+38</span></span>
            </div>
            <div className="hb-line-v live" style={{ height: 40 }} />
            <div className="hb-diamond" aria-hidden="true"><i /></div>
            <div className="hb-line-v" style={{ height: 14 }} />
            <div className="hb-split" aria-hidden="true" />
            <div className="hb-branches">
              <div className="hb-branch">
                <div className="hb-chain">
                  <span className="hb-flag hb-flag--blue">In their hands</span>
                  <div className="hb-item"><span className="hb-ico hb-ico--blue"><Ico id="i-target" /></span>Setting priorities</div>
                  <div className="hb-item"><span className="hb-ico hb-ico--blue"><Ico id="i-check" /></span>Following through</div>
                  <div className="hb-item"><span className="hb-ico hb-ico--blue"><Ico id="i-chat" /></span>A team that speaks up</div>
                  <div className="hb-result"><div className="hb-card"><span className="hb-ico hb-ico--blue"><Ico id="i-sprout" /></span><span>Targeted development<small>in Build</small></span></div></div>
                </div>
                <div className="hb-line-v hb-m-line" style={{ height: 44, marginTop: 18 }} />
              </div>
              <div className="hb-branch">
                <div className="hb-chain">
                  <span className="hb-flag hb-flag--amber">What holds them back<em>· example</em></span>
                  <div className="hb-item"><span className="hb-ico hb-ico--amber"><Ico id="i-layers" /></span>Too many priorities<span className="hb-count"><span className="hb-faces sm"><span className="hb-face f2" /><span className="hb-face f3" /><span className="hb-face f5" /></span>28 of 42</span></div>
                  <div className="hb-item"><span className="hb-ico hb-ico--amber"><Ico id="i-hourglass" /></span>Slow approvals<span className="hb-count"><span className="hb-faces sm"><span className="hb-face f1" /><span className="hb-face f4" /><span className="hb-face f2" /></span>22 of 42</span></div>
                  <div className="hb-item"><span className="hb-ico hb-ico--amber"><Ico id="i-lock" /></span>Decided without them<span className="hb-count"><span className="hb-faces sm"><span className="hb-face f5" /><span className="hb-face f1" /></span>17 of 42</span></div>
                  <div className="hb-result"><div className="hb-card"><span className="hb-ico hb-ico--amber"><Ico id="i-file" /></span><span>A report for leadership and HR<small>what most managers run into</small></span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
