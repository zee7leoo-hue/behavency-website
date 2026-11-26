import React, { useState } from 'react'
import { Laptop, Users, MessageCircle, Layers, CalendarDays, MapPin, ChevronRight } from 'lucide-react'
import './DeliverySectionV3.css'
import bgElearning from '../assets/delivery/elearning.webp'
import bgLive from '../assets/delivery/live.webp'
import bgInperson from '../assets/delivery/inperson.webp'
import bgBlended from '../assets/delivery/blended.webp'

/* "You choose how your people learn." — four delivery formats, drawn as an exact copy of the supplied designs.
   The artwork (laptops, photos, glass cards) is the supplied picture with its text removed; everything that is text is live.
   The section is laid out on a 1600 × 820 design canvas and scales as one piece: u(n) = n × (section width / 1600). */

const u = (n) => `calc(${n} * var(--u))`
const box = (x, y, w, h, extra = {}) => ({ left: u(x), top: u(y), ...(w != null ? { width: u(w) } : null), ...(h != null ? { height: u(h) } : null), ...extra })
const fs = (size, lh, extra = {}) => ({ fontSize: u(size), lineHeight: lh ? u(lh) : 1, ...extra })

const CARDS = [
  { id: 'elearning', label: 'E-learning', x: 110, w: 147, icon: Laptop },
  { id: 'live', label: 'Live online', x: 270, w: 141, icon: Users },
  { id: 'inperson', label: 'In-person', x: 424, w: 140, icon: MessageCircle },
  { id: 'blended', label: 'Blended', x: 578, w: 140, icon: Layers },
]

/* the glass card on the right: icon tile, title, description and (for three of the stages) three small facts */
const STAGES = {
  elearning: {
    bg: bgElearning, icon: Laptop, iconPos: [1140, 551, 78, 75], textX: 1240, titleY: 563, descY: [595, 620],
    tfs: 25.4, dfs: 16.6, title: 'E-learning', desc: ['Flexible and self-paced, so teams', 'can learn anytime, anywhere.'], pills: [],
  },
  live: {
    bg: bgLive, icon: Users, iconPos: [1102, 556, 83, 76], textX: 1206, titleY: 567, descY: [600, 626],
    tfs: 27.8, dfs: 18.5, title: 'Live online', desc: ['Interactive, expert-led sessions', 'with your team, anywhere.'],
    pills: [
      { x: 1098, w: 132, icon: CalendarDays, a: 'Flexible', b: 'scheduling', tx: 1151 },
      { x: 1236, w: 142, icon: Users, a: 'Teams', b: '12–25', tx: 1289 },
    ],
    pillY: 655,
  },
  inperson: {
    bg: bgInperson, icon: MessageCircle, iconPos: [1079, 548, 84, 80], textX: 1186, titleY: 561, descY: [592, 617],
    tfs: 26.9, dfs: 17, title: 'In-person', desc: ['Hands-on, expert-led sessions', 'that build stronger team dynamics.'],
    pills: [
      { x: 1076, w: 164, icon: Users, a: 'On-site', b: 'with your team', tx: 1136 },
      { x: 1250, w: 140, icon: MapPin, a: 'Flexible', b: 'location', tx: 1309 },
    ],
    pillY: 655,
  },
  blended: {
    bg: bgBlended, icon: Layers, iconPos: [1013, 548, 94, 84], textX: 1137, titleY: 561, descY: [593, 619],
    tfs: 27.8, dfs: 18.5, title: 'Blended', desc: ['Digital learning and live sessions, combined.', ''],
    pills: [
      { x: 1010, w: 120, icon: Laptop, a: 'Digital', b: 'learning', tx: 1069 },
      { x: 1160, w: 140, icon: Users, a: 'Expert-led', b: 'sessions', tx: 1224 },
    ],
    pillY: 660,
  },
}

/* text inside the laptop screens, redrawn as live vector text (x, y = left end of the baseline, w = width, r = tilt of the baseline and k = lean of the letters, in degrees; all in design pixels) */
const SCREEN_TEXT = {
  elearning: [
    { t: 'Behavency', x: 994, y: 219.4, w: 55, r: -3.7, k: 13, s: 15, wt: 700, c: '#0d1740' },
    { t: 'My Programme', x: 1104, y: 212.7, w: 52, r: -4.6, k: 13, s: 13.5, wt: 600, c: '#0d1740' },
    { t: 'Modules', x: 1180, y: 207.3, w: 37, r: -3.9, k: 13, s: 13.5, wt: 600, c: '#0d1740' },
    { t: 'Progress', x: 1243, y: 203.2, w: 38, r: -3.2, k: 13, s: 13.5, wt: 600, c: '#0d1740' },
    { t: 'Psychological Safety', x: 969, y: 293.2, w: 211, r: -2.1, k: 4, s: 30, wt: 800, c: '#0d1740', serif: true, stroke: 0.7 },
    { t: 'Build a team environment where people', x: 965, y: 323.3, w: 231, r: -1.8, k: 6, s: 14.2, wt: 500, c: '#1a2244' },
    { t: 'speak up, share ideas and learn together.', x: 962, y: 344.8, w: 242, r: -1.5, k: 6, s: 14.2, wt: 500, c: '#1a2244' },
    { t: 'Module progress', x: 1297, y: 280.0, w: 80, r: -2.7, k: 6, s: 12.4, wt: 700, c: '#0d1740' },
    { t: '60%', x: 1421, y: 297.1, w: 20, r: -2.3, k: 6, s: 12, wt: 700, c: '#0d1740' },
    { t: 'Understand the concept', x: 1319, y: 351.0, w: 109, r: -1.0, k: 6, s: 12.4, wt: 600, c: '#0d1740' },
    { t: 'Apply in your team', x: 1315, y: 387.1, w: 85, r: -0.5, k: 6, s: 12.4, wt: 600, c: '#0d1740' },
    { t: 'Team practice', x: 1313, y: 423.8, w: 67, r: -0.1, k: 6, s: 12.4, wt: 600, c: '#0d1740' },
    { t: 'Reflection & next steps', x: 1309, y: 460.7, w: 109, r: 0.5, k: 6, s: 12.4, wt: 600, c: '#0d1740' },
  ],
  live: [
    { t: 'Behavency', x: 992, y: 218.4, w: 59, r: -3.7, k: 13, s: 15, wt: 700, c: '#fff' },
    { t: 'Live Online Session', x: 1111, y: 209.3, w: 110, r: -4.4, k: 13, s: 14.5, wt: 500, c: '#fff' },
    { t: 'Team Development', x: 1315, y: 246.6, w: 137, r: -3.1, k: 5, s: 17, wt: 800, c: '#0d1740' },
    { t: 'Discussion', x: 1346, y: 281.8, w: 59, r: -2.5, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
    { t: 'Team exercise', x: 1343, y: 309.0, w: 79, r: -2.1, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
    { t: 'Group reflection', x: 1341, y: 336.8, w: 89, r: -1.7, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
    { t: 'Next steps', x: 1338, y: 363.7, w: 59, r: -1.1, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
    { t: 'Flexible scheduling', x: 1334, y: 407.9, w: 108, r: -0.3, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
    { t: 'Teams 12–25', x: 1331, y: 437.7, w: 75, r: 0.1, k: 6, s: 13.2, wt: 600, c: '#0d1740' },
  ],
}

export default function DeliverySectionV3() {
  const [active, setActive] = useState('elearning')

  return (
    <section className="dv3" id="delivery-v2" aria-label="Training goes where the results point">
      <div className="dv3-canvas" style={{ '--u': 'calc(100cqw / 1600)' }}>
        {/* artwork for each stage, cross-fading */}
        {Object.entries(STAGES).map(([id, s]) => (
          <img key={id} className={`dv3-bg${active === id ? ' is-on' : ''}`} src={s.bg} alt="" aria-hidden="true" draggable="false" />
        ))}

        {/* sharp live text inside the laptop screens */}
        <svg className="dv3-svg" viewBox="0 0 1600 820" preserveAspectRatio="none" aria-hidden="true">
          {Object.entries(SCREEN_TEXT).map(([id, items]) => (
            <g key={id} className={`dv3-svg-stage${active === id ? ' is-on' : ''}`}>
              {id === 'live' && [[CalendarDays, 1311.5, 403.5], [Users, 1308.5, 433.5]].map(([Ic, cx, cy]) => (
                <Ic key={cy} x={cx - 9.5} y={cy - 9.5} width={19} height={19} stroke="#5a3fc8" strokeWidth={1.8} />
              ))}
              {items.map((it) => (
                <text key={it.t} x={0} y={0} fontSize={it.s} fontWeight={it.serif ? 600 : it.wt} fill={it.c}
                  fontFamily={it.serif ? "'Source Serif 4', serif" : 'Inter, system-ui, sans-serif'}
                  stroke={it.stroke ? it.c : undefined} strokeWidth={it.stroke} textLength={it.w} lengthAdjust="spacingAndGlyphs"
                  transform={`translate(${it.x} ${it.y}) rotate(${it.r}) skewX(${-it.k})`}>{it.t}</text>
              ))}
            </g>
          ))}
        </svg>

        {/* left column */}
        <div className="dv3-eyebrow" style={box(121, 66, 340, 20)}>
          <i style={{ width: u(44) }} />
          <span style={fs(15, 20)}>THE DEVELOPMENT JOURNEY</span>
        </div>
        <h2 className="dv3-title" style={box(120, 111, null, null, fs(68.4, 70))}>
          Training goes where<br />the <em>results</em> point.
        </h2>
        <p className="dv3-copy" style={box(121, 292, 600, null, fs(23, 32))}>
          Each person works on their own priorities,<br />not a course for everyone. Choose e-learning,<br />live online, in person or a mix.
        </p>
        <p className="dv3-years" style={box(207, 456, 500, null, fs(19.2, 29))}>
          <b style={fs(23.5, 29)}>20+ years</b> <span style={fs(19.3, 29)}>of experience in team and leadership</span><br />
          development across Europe.
        </p>

        {/* the four format cards (the raster draws the card; icons, labels and the round chevron are live) */}
        {CARDS.map((c) => {
          const Icon = c.icon
          const on = active === c.id
          return (
            <button
              key={c.id}
              type="button"
              className={`dv3-card${on ? ' is-on' : ''}`}
              style={box(c.x, 570, c.w, 133, { borderRadius: u(22) })}
              aria-pressed={on}
              onClick={() => setActive(c.id)}
            >
              <span className={`dv3-card-ico dv3-card-ico--${c.id}`} style={box((c.w - 46) / 2, 17, 46, 46)}><Icon strokeWidth={1.9} /></span>
              <span className="dv3-card-label" style={{ top: u(62), ...fs(18.7, 26) }}>{c.label}</span>
              <span className="dv3-card-go" style={box(c.w - 40, 96, 26, 26)}><ChevronRight strokeWidth={2.6} /></span>
            </button>
          )
        })}

        {/* the glass card of the chosen format */}
        {Object.entries(STAGES).map(([id, s]) => {
          const Icon = s.icon
          const on = active === id
          return (
            <div key={id} className={`dv3-info${on ? ' is-on' : ''}`} aria-hidden={!on}>
              <span className={`dv3-info-ico dv3-info-ico--${id}`} style={box(s.iconPos[0] + (s.iconPos[2] - 46) / 2, s.iconPos[1] + (s.iconPos[3] - 46) / 2, 46, 46)}><Icon strokeWidth={1.9} /></span>
              <h3 className="dv3-info-title" style={box(s.textX, s.titleY - 18, null, null, fs(s.tfs, 36))}>{s.title}</h3>
              <p className="dv3-info-desc" style={box(s.textX, s.descY[0] - 14, 520, null, fs(s.dfs, 25))}>
                {s.desc[0]}<br />{s.desc[1]}
              </p>
              {s.pills.map((p) => {
                const PI = p.icon
                return (
                  <span key={p.a + p.b} className="dv3-pill" style={box(p.x, s.pillY, p.w, 52)}>
                    <span className="dv3-pill-ico" style={box(p.tx - p.x - 40, 12, 28, 28)}><PI strokeWidth={1.9} /></span>
                    <span className="dv3-pill-text" style={box(p.tx - p.x, 7, null, null, fs(14.2, 18))}>{p.a}<br />{p.b}</span>
                  </span>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
