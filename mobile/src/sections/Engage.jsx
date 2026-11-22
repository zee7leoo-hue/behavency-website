import React from 'react'
import { useInView } from '../hooks'
import avA from '../assets/engage/av-a.webp'
import avB from '../assets/engage/av-b.webp'
import avC from '../assets/engage/av-c.webp'
import './Engage.css'

/* "02 / Engage" (mobile): they've seen the score, now let them experience it.
   The two cards are drawn as vector art on a 920 × 700 canvas (the supplied design's pixel grid), so they scale as one piece. */

const NAVY = '#0c1240'
const GREEN = '#6a2fd8'   // the Engage violet of the hero card

export default function Engage() {
  const [ref, seen] = useInView(0.2)

  return (
    <section ref={ref} className={`eg ${seen ? 'is-in' : ''}`} id="engage">
      <div className="eg-in">
        <h2 className="eg-title rv" style={{ '--i': 0 }}>
          They’ve seen the score. Now let them <em>experience it.
          <svg className="eg-swoosh" viewBox="0 0 470 22" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="eg-sw" x1="0" x2="1"><stop offset="0" stopColor={GREEN} stopOpacity=".2" /><stop offset=".25" stopColor={GREEN} /><stop offset=".85" stopColor={GREEN} /><stop offset="1" stopColor={GREEN} stopOpacity=".35" /></linearGradient></defs>
            <path d="M4 17 Q230 -2 466 11" fill="none" stroke="url(#eg-sw)" strokeWidth="3.4" strokeLinecap="round" />
          </svg></em>
        </h2>

        <div className="eg-eyebrow rv" style={{ '--i': 1 }}>
          <b>02</b><i aria-hidden="true">—</i><strong>Engage</strong><u aria-hidden="true" /><span>Experience how your team works together</span>
        </div>

        <p className="eg-sub eg-lead rv" style={{ '--i': 2 }}>Through team challenges and decisions, participants experience the same behavioural areas they assessed, seeing how they shape the way people work together.</p>
        <p className="eg-sub rv" style={{ '--i': 2 }}>A score can be read and forgotten.<br />An experience stays.</p>

        <svg className="eg-art rv" style={{ '--i': 3 }} viewBox="0 0 467 467" role="img" aria-label="An assessment result card (Communication 82%, Cross-team Collaboration 46%) leading to a Team Game card with a 45 minute timer.">
          <defs>
            <filter id="eg-sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="11" stdDeviation="11" floodColor="#46508f" floodOpacity="0.17" /></filter>
            <linearGradient id="eg-panel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a4fc2" /><stop offset=".6" stopColor="#6552d6" /><stop offset="1" stopColor="#7a5df0" /></linearGradient>
            <clipPath id="eg-clip-a"><circle cx="270" cy="255.5" r="17.5" /></clipPath>
            <clipPath id="eg-clip-b"><circle cx="270" cy="305.5" r="17.5" /></clipPath>
            <clipPath id="eg-clip-c"><circle cx="270" cy="355.5" r="17.5" /></clipPath>
            <clipPath id="eg-panel-clip"><rect x="225" y="203" width="227" height="205" rx="22" /></clipPath>
          </defs>

          <g fontFamily="Inter, system-ui, sans-serif">
            {/* Assessment result: one group that follows the card's perspective (text lines rise -7.8 deg, the left edge leans 0.085 to the right
                per unit down). Everything inside is laid out on plain coordinates, in pixels of the supplied reference (scale .53 to the artwork). */}
            <g transform="translate(43.5 128.2) matrix(0.9907 -0.1357 0.085 1 0 0) scale(.53)">
              <rect x="-65" y="-137" width="446" height="521" rx="46" fill="#fff" filter="url(#eg-sh)" />

              {/* header */}
              <g fill="none" stroke="#6a3de8" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-4 -78V-94H4V-78M9 -78V-108H18V-78M23 -78V-98H31V-78M-12 -75H36" />
              </g>
              <text x="50" y="-82" fontSize="22.6" fontWeight="700" fill={NAVY} letterSpacing="-0.4">Assessment result</text>

              {/* Communication 82% */}
              <rect x="-30" y="-48" width="378" height="153" rx="28" fill="#e9f8ea" />
              <text x="0" y="0" fontSize="28" fontWeight="700" fill={NAVY} letterSpacing="-0.4">Communication</text>
              <text x="-2" y="53" fontSize="52" fontWeight="800" fill={NAVY} letterSpacing="-1.4">82%</text>
              <circle cx="301" cy="8" r="18" fill="#17b33c" />
              <path d="M292 8.5l7 7 12-13.5" fill="none" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="1" y="78" width="317" height="19" rx="9.5" fill="#e1e4ea" />
              <rect x="1" y="78" width="244" height="19" rx="9.5" fill="#19b53c" />

              {/* Cross-team Collaboration 46% */}
              <rect x="-27" y="116" width="360" height="206" rx="28" fill="#fdeeed" />
              <text x="1" y="165" fontSize="23.6" fontWeight="700" fill={NAVY} letterSpacing="-0.3">Cross-team</text>
              <text x="1" y="199" fontSize="23.6" fontWeight="700" fill={NAVY} letterSpacing="-0.3">Collaboration</text>
              <text x="0" y="247" fontSize="52" fontWeight="800" fill={NAVY} letterSpacing="-1.4">46%</text>
              <circle cx="248" cy="184" r="18" fill="#ef4444" />
              <path d="M248 175v11" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" /><circle cx="248" cy="193.5" r="2.6" fill="#fff" />
              <rect x="0" y="270" width="255" height="19" rx="9.5" fill="#e4e6ea" />
              <rect x="0" y="270" width="125" height="19" rx="9.5" fill="#ee4a3f" />
            </g>

            {/* spark lines */}
            <g stroke={GREEN} strokeWidth="3.8" strokeLinecap="round" fill="none">
              <path d="M407 92l4 19" /><path d="M421 120l16-16" /><path d="M435 131l17-8" />
            </g>

            {/* Team Game: tilted a little to the right */}
            <g transform="rotate(4.2 340 288)">
            <rect x="213" y="140" width="254" height="295" rx="26" fill="#fff" filter="url(#eg-sh)" />
            <g transform="translate(270 168) scale(.43)">
              <path d="M12 6h30c12 0 20 9 24 22l5 20c2 9-5 12-12 8l-10-6c-3-2-6-3-9-3H22c-3 0-6 1-9 3l-10 6c-7 4-14 1-12-8l5-20C0 15 6 6 12 6z" fill={NAVY} />
              <path d="M16 20h12M22 14v12" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" /><circle cx="42" cy="17" r="3.2" fill="#fff" /><circle cx="50" cy="23" r="3.2" fill="#fff" />
            </g>
            <text x="310" y="191" fontSize="15.4" fontWeight="700" fill={NAVY} letterSpacing="-0.25">Team Game</text>

            {/* purple panel */}
            <g clipPath="url(#eg-panel-clip)">
              <rect x="225" y="203" width="227" height="205" fill="url(#eg-panel)" />
              <path d="M225 366c42-15 90-10 138-2s60 11 89 5v39H225z" fill="#7b64f3" opacity=".55" />
            </g>

            {/* participants: one column, equal pitch, clear of the white card */}
            {[[255.5, avA, 'a', '#f4c43c'], [305.5, avB, 'b', '#e9c548'], [355.5, avC, 'c', '#f08aa0']].map(([cy, src, k, ring]) => (
              <g key={k}>
                <circle cx="270" cy={cy} r="20" fill="#fff" />
                <circle cx="270" cy={cy} r="17.5" fill={ring} />
                <image href={src} x="252.5" y={cy - 17.5} width="35" height="35" preserveAspectRatio="xMidYMid slice" clipPath={`url(#eg-clip-${k})`} />
                <circle cx="270" cy={cy} r="18.6" fill="none" stroke={ring} strokeWidth="2" />
              </g>
            ))}

            {/* inner card */}
            <rect x="306" y="240" width="134" height="156" rx="14" fill="#fff" />
            <g fill="none" stroke="#6a45e0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="373" cy="266" r="5.6" /><circle cx="361" cy="271" r="4.2" /><circle cx="385" cy="271" r="4.2" />
              <path d="M365 287c0-5 3.5-8.4 8-8.4s8 3.4 8 8.4M356 284c-5 0.6-7.4 3.4-7.4 7M390 284c5 0.6 7.4 3.4 7.4 7" />
            </g>
            <rect x="322" y="298" width="102" height="4" rx="2" fill="#dcdce6" />
            <rect x="330" y="308" width="86" height="4" rx="2" fill="#e3e3ec" />
            <rect x="341" y="318" width="64" height="4" rx="2" fill="#e7e7ef" />
            <rect x="316" y="333" width="29" height="39" rx="7" fill="#eef0f8" />
            <path d="M322 348h17M322 355h17" stroke="#8e94ba" strokeWidth="3" strokeLinecap="round" />
            <rect x="354" y="331" width="33" height="41" rx="7" fill="#e4e0fb" stroke="#7a62d8" strokeWidth="1.6" />
            <path d="M363.5 351l5.2 5.2 10-11" fill="none" stroke="#4b3bb4" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="396" y="333" width="29" height="39" rx="7" fill="#eef0f8" />
            <path d="M402 348h17M402 355h17" stroke="#8e94ba" strokeWidth="3" strokeLinecap="round" />

            {/* timer */}
            <rect x="380" y="224" width="66" height="29" rx="14.5" fill="#fff" stroke="#f3d9e4" strokeWidth="1.2" />
            <g fill="none" stroke="#6a45e0" strokeWidth="1.9" strokeLinecap="round"><circle cx="393" cy="238.5" r="5.2" /><path d="M393 236v3l1.8 1.2M390.6 231.6h4.8" /></g>
            <text x="402" y="243.5" fontSize="12.6" fontWeight="700" fill={NAVY}>45:00</text>

            </g>

            {/* arrow from the result to the game */}
            <path d="M135 304C134 328 170 343 204 333" fill="none" stroke={GREEN} strokeWidth="5" strokeLinecap="round" />
            <path d="M199 320l16 12-17 11" fill="none" stroke={GREEN} strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </section>
  )
}
