import React from 'react'
import { motion } from 'framer-motion'
import { Search, Users, Leaf, ArrowRight } from 'lucide-react'
import teamPhoto from '../assets/hero-team.jpg'
import './Hero.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }
})

/* Wheel geometry (SVG units, viewBox 870 x 540) */
const CX = 407
const CY = 257
const R_OUT = 247
const R_IN = 150
const GAP = 3 /* half of the gap between segments */
const ROUND = 14 /* corner rounding (stroke width) */

const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)]
}

/* Annular quadrant between two angles (0deg = right, clockwise) */
function sector(a0, a1) {
  const ro = R_OUT - ROUND / 2
  const ri = R_IN + ROUND / 2
  const off = GAP + ROUND / 2
  const dOut = (off / ro) * (180 / Math.PI)
  const dIn = (off / ri) * (180 / Math.PI)
  const [x1, y1] = pt(ro, a0 + dOut)
  const [x2, y2] = pt(ro, a1 - dOut)
  const [x3, y3] = pt(ri, a1 - dIn)
  const [x4, y4] = pt(ri, a0 + dIn)
  return `M${x1},${y1} A${ro},${ro} 0 0 1 ${x2},${y2} L${x3},${y3} A${ri},${ri} 0 0 0 ${x4},${y4} Z`
}

const SEGMENTS = [
  { id: 'blue',   a0: 180, a1: 270, from: '#d9ecfd', to: '#86bff6', x1: 170, y1: 260, x2: 400, y2: 20 },
  { id: 'green',  a0: 270, a1: 360, from: '#9fe7a4', to: '#dcf8dc', x1: 410, y1: 20,  x2: 650, y2: 260 },
  { id: 'orange', a0: 0,   a1: 90,  from: '#fde6cf', to: '#fbc188', x1: 650, y1: 260, x2: 410, y2: 500 },
  { id: 'purple', a0: 90,  a1: 180, from: '#c8b1f6', to: '#ece4fc', x1: 400, y1: 500, x2: 170, y2: 260 },
]

const BADGES = [
  { cx: 230, cy: 103, Icon: Search,    color: '#1a6bf0' },
  { cx: 583, cy: 103, Icon: Users,     color: '#22c33a' },
  { cx: 226, cy: 402, Icon: null, color: '#8a2be2' },
  { cx: 587, cy: 402, Icon: Leaf,      color: '#f26d12' },
]

const LABELS = [
  { x: 4,   y: 58,  title: 'Identify', lines: ['Understand', 'the gaps.'] },
  { x: 680, y: 56,  title: 'Engage',   lines: ['Build shared', 'understanding.'] },
  { x: 2,   y: 400, title: 'Measure',  lines: ['Prove', 'the impact.'] },
  { x: 690, y: 400, title: 'Develop',  lines: ['Build the right', 'capabilities.'] },
]

const CONNECTORS = [
  { d: 'M150,46 Q180,26 206,62',  dot: [150, 46],  color: '#3b8df5' },
  { d: 'M608,62 Q632,36 660,46',  dot: [660, 46],  color: '#34c759' },
  { d: 'M152,466 Q190,470 204,442', dot: [152, 466], color: '#9b5cf0' },
  { d: 'M614,442 Q630,476 672,466', dot: [672, 466], color: '#f59a3c' },
]

function BarsIcon({ color }) {
  /* Ascending signal bars, as in the reference */
  return (
    <g fill={color}>
      <rect x="-21" y="2"   width="7" height="12" rx="3.5" />
      <rect x="-10" y="-6"  width="7" height="20" rx="3.5" />
      <rect x="1"   y="-14" width="7" height="28" rx="3.5" />
      <rect x="12"  y="-22" width="7" height="36" rx="3.5" />
    </g>
  )
}

function HeroWheel() {
  return (
    <svg className="hero__wheel" viewBox="0 0 870 540" role="img"
      aria-label="Identify, Engage, Develop, Measure — the Behavency cycle">
      <defs>
        {SEGMENTS.map(s => (
          <linearGradient key={s.id} id={`hw-${s.id}`} gradientUnits="userSpaceOnUse"
            x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}>
            <stop offset="0" stopColor={s.from} />
            <stop offset="1" stopColor={s.to} />
          </linearGradient>
        ))}
        <radialGradient id="hw-sheen" gradientUnits="userSpaceOnUse" cx={CX} cy={CY} r={R_OUT}>
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.72" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.93" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.45" />
        </radialGradient>
        <filter id="hw-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="hw-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#5b5f9a" floodOpacity="0.16" />
        </filter>
        <filter id="hw-photo-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3a3f6b" floodOpacity="0.22" />
        </filter>
        <clipPath id="hw-photo-clip">
          <circle cx={CX} cy={CY} r={R_IN} />
        </clipPath>
      </defs>

      {/* soft colour glow behind the ring */}
      <g filter="url(#hw-glow)" opacity="0.8">
        {SEGMENTS.map(s => (
          <path key={s.id} d={sector(s.a0, s.a1)} fill={`url(#hw-${s.id})`}
            stroke={`url(#hw-${s.id})`} strokeWidth={ROUND + 14} strokeLinejoin="round" />
        ))}
      </g>

      {/* ring segments */}
      {SEGMENTS.map(s => (
        <g key={s.id} filter="url(#hw-shadow)">
          <path d={sector(s.a0, s.a1)} fill={`url(#hw-${s.id})`}
            stroke={`url(#hw-${s.id})`} strokeWidth={ROUND} strokeLinejoin="round" />
          <path d={sector(s.a0, s.a1)} fill="url(#hw-sheen)"
            stroke="#ffffff" strokeOpacity="0" strokeWidth={ROUND} strokeLinejoin="round" />
        </g>
      ))}

      {/* centre photo */}
      <circle cx={CX} cy={CY} r={R_IN + 7} fill="#ffffff" filter="url(#hw-photo-shadow)" />
      <image href={teamPhoto} x={CX - R_IN} y={CY - R_IN} width={R_IN * 2} height={R_IN * 2}
        preserveAspectRatio="xMidYMid slice" clipPath="url(#hw-photo-clip)" />

      {/* connectors */}
      {CONNECTORS.map((c, i) => (
        <g key={i}>
          <path d={c.d} fill="none" stroke={c.color} strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
          <circle cx={c.dot[0]} cy={c.dot[1]} r="4" fill={c.color} />
        </g>
      ))}

      {/* icon badges */}
      {BADGES.map(({ cx, cy, Icon, color }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="47" fill="#ffffff" fillOpacity="0.92" filter="url(#hw-shadow)" />
          <circle cx={cx} cy={cy} r="46" fill="none" stroke="#ffffff" strokeWidth="2" />
          {!Icon ? (
            <g transform={`translate(${cx},${cy})`}><BarsIcon color={color} /></g>
          ) : (
            <Icon x={cx - 26} y={cy - 26} width={52} height={52} color={color} strokeWidth={2.4} />
          )}
        </g>
      ))}

      {/* labels */}
      {LABELS.map(l => (
        <text key={l.title} className="hero__wheel-label" x={l.x} y={l.y}>
          <tspan className="hero__wheel-title" x={l.x} dy="0">{l.title}</tspan>
          {l.lines.map((line, i) => (
            <tspan key={i} className="hero__wheel-desc" x={l.x} dy={i === 0 ? 42 : 33}>{line}</tspan>
          ))}
        </text>
      ))}
    </svg>
  )
}

/* `visual` swaps the right-hand graphic (default: the cycle wheel).
   `wide` lets wider graphics use more of the row. */
export default function Hero({ id, visual, wide = false, bleed = false }) {
  return (
    <section className="hero" id={id}>
      <div className="hero__inner">

        <div className="hero__copy">
          <motion.div className="hero__eyebrow" {...fade(0.1)}>
            FOR PEOPLE WHO BUILD BETTER TEAMS
          </motion.div>

          <motion.h1 className="hero__title" {...fade(0.2)}>
            <span className="hero__title-main">Your managers<br />want to lead well.</span>
            <em className="hero__title-em">Most don’t know<br />where they’re<br />falling short.</em>
          </motion.h1>

          <motion.p className="hero__subhead" {...fade(0.3)}>
            Behavency finds out. Then shows them.<br />
            Then helps them improve. And proves<br />
            it worked.
          </motion.p>

          <motion.div className="hero__ctas" {...fade(0.4)}>
            <a href="#contact" className="hero__btn">Request a Demo</a>
            <a href="#identify" className="hero__link">
              See how it works <ArrowRight size={24} strokeWidth={2.75} />
            </a>
          </motion.div>
        </div>

        <motion.div className={`hero__visual${wide ? ' hero__visual--wide' : ''}${visual ? '' : ' hero__visual--large'}${bleed ? ' hero__visual--bleed' : ''}`} {...fade(0.3)}>
          {visual ?? <HeroWheel />}
        </motion.div>

      </div>
    </section>
  )
}
