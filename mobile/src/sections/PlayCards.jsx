import React from 'react'
import avA from '../assets/engage/av-a.webp'
import avB from '../assets/engage/av-b.webp'
import avC from '../assets/engage/av-c.webp'
import './PlayCards.css'

/* The first and third stage cards of "the power of play" (mobile). Live text and vector art on a 352 × 567 card. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Gamepad = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" /><path d="M17.3 5H6.7a4 4 0 0 0-3.97 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.4-1.4a2 2 0 0 1 1.4-.6h4.4a2 2 0 0 1 1.4.6L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.5-.6-6.6-.7-7.3A4 4 0 0 0 17.3 5z" /></svg>)
const Clock = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="12" r="9.5" /><path d="M12 6.6V12l3.6 2.2" /></svg>)
const Users = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="9" cy="8" r="3.4" /><path d="M2.6 20v-.8a5.2 5.2 0 0 1 5.2-5.2h2.4a5.2 5.2 0 0 1 5.2 5.2v.8M16 4.8a3.4 3.4 0 0 1 0 6.4M18.4 14.4a5.2 5.2 0 0 1 3 4.8v.8" /></svg>)
const Group3 = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="7" r="3.2" /><circle cx="4.8" cy="9.4" r="2.4" /><circle cx="19.2" cy="9.4" r="2.4" /><path d="M6.2 20.5v-1a5 5 0 0 1 5-5h1.6a5 5 0 0 1 5 5v1M1.6 18.4v-.6a3.3 3.3 0 0 1 3.1-3.3M22.4 18.4v-.6a3.3 3.3 0 0 0-3.1-3.3" /></svg>)
const Monitor = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="2.5" y="3.5" width="19" height="13" rx="2" /><path d="M8 21h8M12 16.5V21" /></svg>)
const Target = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="11" cy="13" r="8" /><circle cx="11" cy="13" r="4.2" /><path d="M11 13 20 4M16.5 3.5v4h4" /></svg>)
const Bulb = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M9 18h6M10 21.5h4M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /></svg>)
const Net = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="5" r="2.6" /><circle cx="5" cy="19" r="2.6" /><circle cx="19" cy="19" r="2.6" /><path d="M12 7.6v4.2M12 11.8 6.4 17M12 11.8l5.6 5.2" /></svg>)
const Bars = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="2.5" y="12" width="5" height="9" rx="2" /><rect x="9.5" y="7" width="5" height="14" rx="2" /><rect x="16.5" y="2" width="5" height="19" rx="2" /></svg>)
const Download = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 3v12M7 10.5l5 5 5-5M3.5 15v4.5h17V15" /></svg>)

/* ───────── card 1: the game ───────── */
export function GameCard() {
  const faces = [avA, avB, avC, avB, avA, avC]
  return (
    <div className="nc nc--game">
      <span className="nc-tag"><b><Gamepad /></b><i>01 – The Game</i></span>
      <h3 className="nc-h">A game that makes<br />participants feel their<br />own <u>blind spots.</u></h3>
      <p className="nc-p">Participants try different approaches, see what works and what doesn’t, and discover new things about how they collaborate. Every outcome is an opportunity to learn.</p>

      <div className="nc-art">
        <svg className="nc-wave" viewBox="0 0 312 254" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="ncg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a1fb8" /><stop offset=".6" stopColor="#6f2fd6" /><stop offset="1" stopColor="#8d45ee" /></linearGradient>
            <radialGradient id="ncg2" cx=".9" cy=".1" r=".7"><stop offset="0" stopColor="#c07bff" stopOpacity=".7" /><stop offset="1" stopColor="#c07bff" stopOpacity="0" /></radialGradient>
          </defs>
          <rect width="312" height="254" fill="url(#ncg1)" />
          <rect width="312" height="254" fill="url(#ncg2)" />
          <path d="M150 0C190 30 230 8 312 60V0z" fill="#7b36e0" opacity=".55" />
          <path d="M0 214C80 170 160 232 312 196V254H0z" fill="#4a14a8" opacity=".45" />
          <ellipse cx="156" cy="130" rx="146" ry="52" fill="none" stroke="#e8d8ff" strokeWidth="1.6" opacity=".85" transform="rotate(-6 156 130)" />
          <ellipse cx="156" cy="130" rx="146" ry="52" fill="none" stroke="#c9a5ff" strokeWidth="5" opacity=".18" transform="rotate(-6 156 130)" />
        </svg>
        <span className="nc-chip nc-chip--tl"><Clock />45 min</span>
        <div className="nc-back nc-back--1" /><div className="nc-back nc-back--2" />
        <div className="nc-chal">
          <div className="nc-chal-top"><span><i />Behavency</span><em>Various tasks</em></div>
          <strong>Team Challenge</strong>
          <div className="nc-tiles">
            <span><Users /></span><span className="on"><Target /><s>✓</s></span><span><Bulb /></span>
          </div>
          <div className="nc-prog"><i /></div>
        </div>
        <div className="nc-alpha">
          <strong>Team Alpha</strong>
          <div className="nc-faces">{faces.map((f, i) => <img key={i} src={f} alt="" />)}</div>
        </div>
        <span className="nc-chip nc-chip--bl"><Users />12–100 people</span>
        <span className="nc-chip nc-chip--br"><Monitor />Online</span>
      </div>
    </div>
  )
}

/* ───────── card 3: the insight report ───────── */
export function InsightCard() {
  const rows = [
    { l: 'Focus & prioritisation', v: 78, c: 'g', Icon: Target },
    { l: 'Trust', v: 64, c: 'o', Icon: Users },
    { l: 'Collaboration', v: 42, c: 'r', Icon: Net },
  ]
  return (
    <div className="nc nc--rep">
      <span className="nc-tag nc-tag--g"><b><Bars /></b><i>03 – Insight Report</i></span>
      <h3 className="nc-h nc-h--s">Turn the team experience<br />into a <u>clear takeaway.</u></h3>
      <p className="nc-p">After the game, the team receives a concise report showing how they performed, along with practical tips for strengthening the behaviours explored during the game.</p>

      <div className="nc-rep">
        <div className="nc-rep-top"><span><Bars />Behavency</span><em><Download />Download PDF</em></div>
        <div className="nc-sheet">
          <div className="nc-sheet-h"><span className="nc-ti"><Bars /></span><div><strong>Team Report</strong><small>5 teams · 60 participants</small></div></div>
          <ul>
            {rows.map(({ l, v, c, Icon }) => (
              <li key={l}>
                <span className={`nc-ri nc-ri--${c}`}><Icon /></span>
                <b>{l}</b>
                <span className="nc-bar"><i className={`nc-f--${c}`} style={{ width: `${v}%` }} /></span>
                <em>{v}%</em>
              </li>
            ))}
          </ul>
          <div className="nc-best">
            <Bulb />
            <i />
            <div><strong>Best practices</strong><p>Practical tips to strengthen collaboration and the other key behaviours from the game.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
