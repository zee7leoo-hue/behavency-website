import React, { useEffect, useRef, useState } from 'react'
import './EngageCardsC.css'
import c00 from '../assets/engage/c/c00.jpg'
import c01 from '../assets/engage/c/c01.jpg'
import c02 from '../assets/engage/c/c02.jpg'
import c03 from '../assets/engage/c/c03.jpg'
import c04 from '../assets/engage/c/c04.jpg'
import c05 from '../assets/engage/c/c05.jpg'
import c06 from '../assets/engage/c/c06.jpg'
import c07 from '../assets/engage/c/c07.jpg'
import c08 from '../assets/engage/c/c08.jpg'
import c09 from '../assets/engage/c/c09.jpg'
import c10 from '../assets/engage/c/c10.jpg'

/* The three Engage cards (The Game, The Reflection, The Insight Report): content and design of the supplied page. */

const IMG = [c00, c01, c02, c03, c04, c05, c06, c07, c08, c09, c10]

const reduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* adds "xc-play" the first time the card is at least 30% on screen (the entrance animations hang off it) */
function usePlay(ref) {
  const [play, setPlay] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (reduced() || !('IntersectionObserver' in window)) { setPlay(true); return undefined }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting && e.intersectionRatio >= 0.3) { setPlay(true); io.disconnect() } })
    }, { threshold: [0.3] })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return play
}
function useLive(ref, threshold = 0.1) {
  const [live, setLive] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced() || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver((es) => es.forEach((e) => setLive(e.isIntersecting)), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, threshold])
  return live
}

/* ---------- 1. The Game ---------- */
export function GameCardC() {
  const card = useRef(null)
  const pic = useRef(null)
  const play = usePlay(card)
  const live = useLive(pic)
  const [hl, setHl] = useState(null)
  useEffect(() => {
    if (reduced()) { setHl('1'); return undefined }
    if (!play) { setHl(null); return undefined }
    const timers = []
    const at = (ms, fn) => timers.push(setTimeout(fn, ms))
    at(900, () => setHl('0'))
    at(1700, () => setHl('1'))
    let loop = null
    at(3000, () => {
      let n = 0
      loop = setInterval(() => {
        const other = (n++ % 2) ? '2' : '0'
        setHl(other)
        at(1500, () => setHl('1'))
      }, 4200)
    })
    return () => { timers.forEach(clearTimeout); if (loop) clearInterval(loop) }
  }, [play])
  return (
    <article ref={card} className={`xc-ecard xc-game${play ? ' xc-play' : ''}`} aria-label="01 – The Game">

        <div className="xc-txt">
          <span className="xc-label xc-small"><i>01</i><span className="xc-ln"></span><b>The Game</b></span>
          <h3>A game that makes participants <em>feel their own blind spots.</em></h3>
          <p>Numbers on a report don’t always convince people. In the game, participants meet some of the same areas from their assessment, this time in action, in a real group situation.</p><ul className="xc-ticks"><li>Fully facilitated, learning by doing</li><li>Works for remote and in-person teams</li><li>Tailored to your team’s focus areas</li></ul>
        </div>
        <div className="xc-panel">
          <span className="xc-tag" style={{ left: '22px', top: '22px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>45 min</span><span className="xc-tag" style={{ left: '22px', bottom: '22px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>12–100 people</span><span className="xc-tag" style={{ right: '22px', bottom: '22px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Online</span><svg className="tc-bg" aria-hidden="true" viewBox="0 0 886 620" preserveAspectRatio="none">
              <path d="M470 0C650 70 720 250 886 300V0Z" fill="rgba(178,128,255,.30)"/>
              <path d="M600 0C720 120 760 220 886 240V0Z" fill="rgba(200,160,255,.18)"/>
              <path d="M886 330C760 400 640 540 520 620H886Z" fill="rgba(170,120,255,.26)"/>
              <path d="M0 400C110 470 230 560 290 620H0Z" fill="rgba(60,10,160,.22)"/>
            </svg><div className={`tcpic${live ? ' xc-live' : ''}`} ref={pic} aria-hidden="true">
            
            <svg className="tc-orbit" viewBox="0 0 886 620">
              <g transform="rotate(-11 380 352)">
                <ellipse cx="380" cy="352" rx="346" ry="160" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="9" filter="url(#tcblur)"/>
                <ellipse cx="380" cy="352" rx="346" ry="160" fill="none" stroke="#fff" strokeWidth="2.6"/>
                <ellipse className="tc-glint" cx="380" cy="352" rx="346" ry="160" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" pathLength="1000" strokeDasharray="26 974" filter="url(#tcblur2)"/>
              </g>
              <defs><filter id="tcblur" x="-10%" y="-20%" width="120%" height="140%"><feGaussianBlur stdDeviation="5"/></filter><filter id="tcblur2" x="-10%" y="-20%" width="120%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter></defs>
            </svg>
            <div className="tc-float"><div className="tc-stack">
              <div className="tc-ghost g2"></div><div className="tc-ghost g1"></div>
              <div className="tc-card">
                <div className="tc-brand"><svg className="tc-logo" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#6a2be0"/><path d="M13.6 4.8 7.4 13.2h4.3l-1.3 6 6.2-8.4h-4.3z" fill="#fff"/></svg><span>Behavency</span></div>
                <span className="tc-pill">Various tasks</span>
                <div className="tc-title">Team Challenge</div>
                <div className="tc-tiles" data-hl={hl}><span className="tc-hl"></span>
                  <span className="tc-t t1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="8.2" r="3.3"/><path d="M6.2 20.2a5.8 5.8 0 0 1 11.6 0z"/><circle cx="5.4" cy="9.8" r="2.4"/><path d="M1.6 18.6a4.2 4.2 0 0 1 4.9-4"/><circle cx="18.6" cy="9.8" r="2.4"/><path d="M22.4 18.6a4.2 4.2 0 0 0-4.9-4"/></svg></span><span className="tc-t t2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="13" r="8.2"/><circle cx="11" cy="13" r="4.4"/><circle cx="11" cy="13" r="1" fill="currentColor"/><path d="M11 13 19 5M16.2 4.6l-.2 3.4 3.4-.2M19 5l2.2-2.2"/></svg><svg className="tc-chk" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span><span className="tc-t t3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.1V16.5h5v-.6c0-.8.4-1.5 1.1-2.1A6 6 0 0 0 12 3z"/></svg></span>
                </div>
                <div className="tc-bar"><i></i></div>
              </div>
            </div></div>
            <div className="tc-alpha"><b>Team Alpha</b><div className="tc-avs"><span className="tc-av" style={{ '--k': 0 }}><img alt="" src={IMG[0]} /></span><span className="tc-av" style={{ '--k': 1 }}><img alt="" src={IMG[1]} /></span><span className="tc-av" style={{ '--k': 2 }}><img alt="" src={IMG[2]} /></span><span className="tc-av" style={{ '--k': 3 }}><img alt="" src={IMG[3]} /></span><span className="tc-av" style={{ '--k': 4 }}><img alt="" src={IMG[4]} /></span><span className="tc-av" style={{ '--k': 5 }}><img alt="" src={IMG[5]} /></span></div></div>
          </div>
        </div>
      
    </article>
  )
}

/* ---------- 2. The Reflection ---------- */
export function ReflectCardC() {
  const card = useRef(null)
  const call = useRef(null)
  const play = usePlay(card)
  const live = useLive(call, 0.15)
  const [speak, setSpeak] = useState(4)
  useEffect(() => {
    if (!live || reduced()) return undefined
    const order = [4, 0, 4, 1, 2, 4, 3]   // the facilitator speaks between participants
    let k = 0
    setSpeak(order[0])
    const t = setInterval(() => { k = (k + 1) % order.length; setSpeak(order[k]) }, 3500)
    return () => clearInterval(t)
  }, [live])
  return (
    <article ref={card} className={`xc-ecard xc-refl${play ? ' xc-play' : ''}`} aria-label="02 – The Reflection">

        <div className="xc-txt">
          <span className="xc-label xc-small"><i>02</i><span className="xc-ln"></span><b>The Reflection</b></span>
          <h3>The game is only <em>the beginning.</em></h3>
          <p>In a facilitated conversation, the team looks back at what happened, and the facilitator helps turn those moments into insights they recognise in themselves and in how they work together.</p><ul className="xc-ticks"><li>Facilitator-led — yours or a Behavency expert</li><li>Structured, guided reflection</li><li>Linked to your results</li></ul>
        </div>
        <div className="xc-panel">
          <span className="xc-tag" style={{ left: '22px', top: '22px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>~90 min</span><div className={`vcall${live ? ' xc-live' : ''}`} ref={call} aria-hidden="true">
            
            <div className="vwin">
              <div className="vgrid">
                <span className={`vt${speak === 0 ? ' xc-speaking' : ''}`}><img alt="" src={IMG[6]} style={{ objectPosition: '50% 40%' }} /><i className="xc-wave"><i></i><i></i><i></i><i></i><i></i></i></span>
                <span className={`vt${speak === 1 ? ' xc-speaking' : ''}`}><img alt="" src={IMG[7]} style={{ objectPosition: '50% 40%' }} /><i className="xc-wave"><i></i><i></i><i></i><i></i><i></i></i></span>
                <span className={`vt${speak === 2 ? ' xc-speaking' : ''}`}><img alt="" src={IMG[8]} style={{ objectPosition: '50% 40%' }} /><i className="xc-wave"><i></i><i></i><i></i><i></i><i></i></i></span>
                <span className={`vt${speak === 3 ? ' xc-speaking' : ''}`}><img alt="" src={IMG[9]} style={{ objectPosition: '50% 40%' }} /><i className="xc-wave"><i></i><i></i><i></i><i></i><i></i></i></span>
              </div>
              <span className={`vt xc-fac${speak === 4 ? ' xc-speaking' : ''}`}><img alt="" src={IMG[10]} style={{ objectPosition: '50% 25%' }} /><b className="xc-pill"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7.5" r="4.5"/><path d="M3.5 21a8.5 8.5 0 0 1 17 0z"/></svg>Facilitator</b><i className="xc-wave"><i></i><i></i><i></i><i></i><i></i></i></span>
              <div className="vctrl"><span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></span><span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="12" height="10" rx="2"/><path d="m15 11 6-3v8l-6-3"/></svg></span><span className="xc-end"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9c-3.4 0-6.6.9-9 2.6-.6.4-.8 1.2-.5 1.9l1 2c.3.6 1 .9 1.7.7l3-1c.6-.2 1-.8 1-1.4v-1.6c1.8-.5 3.8-.5 5.6 0v1.6c0 .6.4 1.2 1 1.4l3 1c.7.2 1.4-.1 1.7-.7l1-2c.3-.7.1-1.5-.5-1.9C18.6 9.9 15.4 9 12 9z"/></svg></span><span className="xc-ppl"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/></svg></span></div>
            </div>
            <div className="gcard xc-ins"><b>Team insights</b><div className="ibars"><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="gcard xc-top"><b>Key topics</b><span className="xc-on"></span><span className="xc-on"></span><span></span></div>
          </div>
        </div>
      
    </article>
  )
}

/* ---------- 3. The Insight Report ---------- */
export function ReportCardC() {
  const card = useRef(null)
  const pic = useRef(null)
  const play = usePlay(card)
  const live = useLive(pic)
  const rows = [64, 78, 41]
  const [vals, setVals] = useState(rows)
  useEffect(() => {
    if (reduced()) { setVals(rows); return undefined }
    if (!play) { setVals([0, 0, 0]); return undefined }
    const timers = []
    const raf = []
    rows.forEach((v, i) => {
      timers.push(setTimeout(() => {
        const t0 = performance.now()
        const step = (t) => {
          const p = Math.min(1, (t - t0) / 1000)
          setVals((old) => { const n = old.slice(); n[i] = Math.round(v * (1 - (1 - p) ** 3)); return n })
          if (p < 1) raf.push(requestAnimationFrame(step))
        }
        raf.push(requestAnimationFrame(step))
      }, 300 + i * 300))
    })
    return () => { timers.forEach(clearTimeout); raf.forEach(cancelAnimationFrame) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])
  return (
    <article ref={card} className={`xc-ecard xc-rep${play ? ' xc-play' : ''}`} aria-label="03 – Insight Report">

        <div className="xc-txt">
          <span className="xc-label xc-small"><i>03</i><span className="xc-ln"></span><b>Insight Report</b></span>
          <h3>Turn the experience into <em>actionable insight.</em></h3>
          <p>After the game, the team receives a concise report showing how they played, along with practical tips for strengthening the behaviours explored in the game, in their everyday work.</p><ul className="xc-ticks"><li>Results for each behaviour explored</li><li>Practical tips for everyday work</li><li>Easy to talk through as a team</li></ul>
        </div>
        <div className="xc-panel trp" aria-hidden="true">
          
          <svg className="trp-bg" viewBox="0 0 600 450" preserveAspectRatio="none">
            <path d="M380 0C470 60 520 150 600 170V0Z" fill="rgba(255,255,255,.55)"/>
            <path d="M600 300C520 340 450 410 400 450H600Z" fill="rgba(150,215,185,.28)"/>
            <path d="M0 330C70 370 130 420 160 450H0Z" fill="rgba(255,255,255,.45)"/>
          </svg>
          <div className={`trpic${live ? ' xc-live' : ''}`} ref={pic}>
            <div className="tr-float"><div className="tr-stack">
              <div className="tr-ghost"></div>
              <div className="tr-card">
                <div className="tr-left">
                  <span className="tr-blob b1"></span><span className="tr-blob b2"></span><span className="tr-blob b3"></span>
                  <span className="tr-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M6 18v-3M11.5 18v-6.5M17 18V7"/></svg></span>
                  <strong>Team<br />Insight Report</strong><small>Team Alpha · 12 participants</small>
                </div>
                <div className="tr-right">
                  <span className="tr-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>Download PDF</span>
                  <div className="tr-row metric"><span>Focus &amp; Prioritization</span><i style={{ '--v': '64%', '--col': 'linear-gradient(90deg,#f4a21c,#f8c544)' }}></i><em>{vals[0]}%</em></div>
                  <div className="tr-row metric"><span>Trust &amp; Inclusion</span><i style={{ '--v': '78%', '--col': 'linear-gradient(90deg,#1ea14a,#38c46c)' }}></i><em>{vals[1]}%</em></div>
                  <div className="tr-row metric"><span>Collaboration &amp; Influence</span><i style={{ '--v': '41%', '--col': 'linear-gradient(90deg,#e8554f,#f2706b)' }}></i><em>{vals[2]}%</em></div>
                </div>
                <div className="tr-take">
                  <svg className="tr-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.1V16.5h5v-.6c0-.8.4-1.5 1.1-2.1A6 6 0 0 0 12 3z"/></svg>
                  <i></i><b>Practice tip</b><i></i>
                  <p>Before you start, agree who does what and how you’ll keep each other updated.</p>
                </div>
              </div>
            </div></div>
          </div>
        </div>
      
    </article>
  )
}
