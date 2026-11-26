import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Search, Users, Leaf } from 'lucide-react'
import Hero from './Hero'
import journeyCardsImg from '../assets/hero-v2-cards.webp'

/* ────────────────────────────────────────────────────────────
   Alternative hero visuals (versions 2–3).
   Each SVG uses the pixel coordinates of its reference mock-up,
   so positions can be compared 1:1 against the design.
   ──────────────────────────────────────────────────────────── */

const C = {
  navy: '#0d1838',
  text: '#1c2440',
  blue: '#1a6bf0',
  green: '#22b83a',
  orange: '#f0730f',
  purple: '#8a35e0',
}

const SANS = "'Inter', system-ui, sans-serif"

function Icon({ as: I, cx, cy, size, color, sw = 2.3 }) {
  return <I x={cx - size / 2} y={cy - size / 2} width={size} height={size} color={color} strokeWidth={sw} />
}

/* Multi-line text helper */
function Lines({ x, y, lines, step, size, weight = 500, fill = C.text, anchor = 'start', ls = '-0.02em' }) {
  return (
    <text x={x} y={y} fontFamily={SANS} fontSize={size} fontWeight={weight} fill={fill}
      textAnchor={anchor} letterSpacing={ls}>
      {lines.map((l, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : step}>{l}</tspan>)}
    </text>
  )
}

function Title({ x, y, children, size = 30, anchor = 'start' }) {
  return (
    <text x={x} y={y} fontFamily={SANS} fontSize={size} fontWeight="800" fill={C.navy}
      textAnchor={anchor} letterSpacing="-0.035em">{children}</text>
  )
}


/* ═════════════════ VERSION 2 — journey cards ═════════════════ */

/* Uses the exact artwork from the approved mock-up */
export function JourneyCards() {
  return (
    <img className="hero__ref-img" src={journeyCardsImg} width="950" height="427"
      alt="Identify: найти сильные стороны и зоны роста. Engage: build shared commitment. Develop: build the right capabilities. Measure: prove the impact." />
  )
}

/* ═════════════════ VERSION 3 — puzzle pieces ═════════════════ */

/* All puzzle geometry is authored in the reference mock-up's pixel space (1625 × 1227),
   so the lean, knob shapes, wall height and colours can be compared 1:1. */

const sg = {
  L: (x, y) => ['L', x, y],
  C: (a, b, c, d, e, f) => ['C', a, b, c, d, e, f],
  Q: (a, b, c, d) => ['Q', a, b, c, d],
}
const endOf = s => (s.length === 3 ? [s[1], s[2]] : s.length === 5 ? [s[3], s[4]] : [s[5], s[6]])
const shiftSegs = (segs, dx, dy) => segs.map(([t, ...n]) => [t, ...n.map((v, i) => v + (i % 2 ? dy : dx))])
function reverseSegs(start, segs) {
  const pts = [start, ...segs.map(endOf)]
  const out = []
  for (let i = segs.length - 1; i >= 0; i--) {
    const s = segs[i], p0 = pts[i]
    if (s[0] === 'L') out.push(['L', p0[0], p0[1]])
    else if (s[0] === 'Q') out.push(['Q', s[1], s[2], p0[0], p0[1]])
    else out.push(['C', s[3], s[4], s[1], s[2], p0[0], p0[1]])
  }
  return out
}
const toPath = (start, segs) => `M${start.join(' ')} ${segs.map(s => s[0] + s.slice(1).join(' ')).join(' ')} Z`

/* Seams (each traced once; the neighbouring piece uses the same curve nudged a few px,
   which leaves the narrow groove you see between pieces in the mock-up). */

/* Identify's right edge, top → bottom: a blue knob pushes right, a green knob pushes left */
const AB0 = [870, 126]
const AB = [
  sg.L(851, 206),
  sg.C(892, 206, 946, 222, 946, 262), sg.C(946, 293, 902, 303, 858, 301),
  sg.L(800, 300),
  sg.C(742, 298, 703, 314, 703, 346), sg.C(703, 380, 735, 394, 778, 394),
  sg.L(812, 398), sg.L(805, 468), sg.L(796, 517),
]
/* Identify's bottom edge, right → left: a peach knob pushes up, a blue knob pushes down */
const BD0 = [796, 517]
const BD = [
  sg.L(742, 512), sg.L(726, 508),
  sg.C(750, 497, 752, 452, 706, 443), sg.C(676, 437, 634, 436, 612, 452), sg.C(585, 470, 590, 500, 608, 508),
  sg.C(604, 540, 570, 587, 516, 587), sg.C(470, 587, 445, 566, 447, 538), sg.C(449, 520, 462, 504, 448, 497),
]
/* Develop's right edge, top → bottom, with the socket for Measure's lavender knob */
const DM0 = [796, 526]
const DM = [
  sg.L(786, 536), sg.L(746, 684), sg.L(740, 690),
  sg.C(700, 686, 650, 688, 628, 696), sg.C(600, 708, 595, 745, 603, 765), sg.C(612, 790, 645, 800, 690, 799),
  sg.L(716, 802), sg.L(704, 870), sg.L(686, 935),
]
/* Engage's bottom edge, right → left, with its green knob pushing down into Measure */
const CD0 = [1458, 508]
const CD = [
  sg.L(1312, 508),
  sg.C(1306, 525, 1308, 548, 1306, 562), sg.C(1306, 596, 1278, 618, 1226, 618),
  sg.C(1175, 618, 1148, 592, 1147, 556), sg.C(1147, 530, 1146, 512, 1130, 505),
  sg.L(1060, 500), sg.L(960, 500), sg.L(830, 503), sg.L(806, 510),
]

const SHAPES = {
  identify: {
    start: [338, 97],
    segs: [
      sg.L(836, 94), sg.Q(872, 93, 870, 126), ...AB, ...BD,
      sg.L(168, 497), sg.Q(118, 497, 126, 456),
      sg.L(153, 396), sg.L(207, 290), sg.L(258, 195), sg.L(292, 128), sg.Q(302, 97, 338, 97),
    ],
  },
  engage: {
    start: [912, 96],
    segs: [
      sg.L(1432, 97), sg.Q(1500, 100, 1503, 165), sg.L(1509, 300), sg.L(1511, 440), sg.Q(1511, 506, 1458, 508),
      ...CD, sg.L(803, 522),
      ...reverseSegs([AB0[0] + 7, AB0[1] + 5], shiftSegs(AB, 7, 5)),
      sg.Q(880, 97, 912, 96),
    ],
  },
  develop: {
    start: [212, 506],
    segs: [
      sg.L(448, 506),
      ...reverseSegs([BD0[0], BD0[1] + 9], shiftSegs(BD, 0, 9)),
      ...DM,
      sg.Q(680, 962, 642, 968), sg.L(146, 950), sg.Q(50, 944, 48, 893), sg.L(178, 520), sg.Q(186, 506, 212, 506),
    ],
  },
  measure: {
    start: [806, 532],
    segs: [
      ...reverseSegs([CD0[0], CD0[1] + 22], shiftSegs(CD, 0, 22)),
      sg.Q(1466, 532, 1468, 566), sg.L(1477, 655), sg.L(1471, 775), sg.L(1452, 890),
      sg.Q(1440, 975, 1370, 990), sg.L(722, 962), sg.Q(696, 957, 695, 939),
      ...reverseSegs([DM0[0] + 9, DM0[1] + 4], shiftSegs(DM, 9, 4)),
    ],
  },
}

const WALL = [14, 84] /* extrusion vector: the visible "wall" height */
const WALL_STEPS = 38

const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16))
const mixHex = (a, b, t) => {
  const A = hex2rgb(a), B = hex2rgb(b)
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`
}

/* Bounding box of a shape (control points included) + room for wall and glow.
   Every layer of a piece carries the same invisible rect so they all pivot identically. */
function markerBox(shape) {
  const nums = [shape.start, ...shape.segs.map(s => s.slice(1))].flat()
  const xs = nums.filter((_, i) => i % 2 === 0), ys = nums.filter((_, i) => i % 2 === 1)
  const x0 = Math.min(...xs) - 40, y0 = Math.min(...ys) - 40
  return { x: x0, y: y0, width: Math.max(...xs) + 60 - x0, height: Math.max(...ys) + 130 - y0 }
}

/* `from` = where each piece starts before it slides in and snaps into place */
const PUZZLE = [
  { key: 'identify', face: ['#f1f8ff', '#c3dcfc', '#92bdf7'], g1: [330, 100], g2: [800, 490],
    wall: ['#a8c7f8', '#86abe6'], glow: '#8cb2f6', dark: '#8fb4ee', from: { x: -130, y: -95, rotate: -9 } },
  { key: 'engage', face: ['#ebfff5', '#b6f0d9', '#86dfcb'], g1: [900, 100], g2: [1500, 510],
    wall: ['#9fe3d3', '#68bcb1'], glow: '#86d6cc', dark: '#78c4b8', from: { x: 140, y: -100, rotate: 8 } },
  { key: 'develop', face: ['#fff7ec', '#fdd5bb', '#fbab92'], g1: [200, 520], g2: [700, 965],
    wall: ['#f7b88e', '#dd9889'], glow: '#f0a08e', dark: '#e8a78c', from: { x: -150, y: 100, rotate: 7 } },
  { key: 'measure', face: ['#eeedfd', '#d0c0ff', '#a6aaf8'], g1: [800, 540], g2: [1450, 990],
    wall: ['#b4a2f6', '#968ae8'], glow: '#9890ee', dark: '#a597ee', from: { x: 150, y: 110, rotate: -7 } },
].map(p => ({ ...p, d: toPath(SHAPES[p.key].start, SHAPES[p.key].segs), box: markerBox(SHAPES[p.key]) }))

/* Where the knobs meet (for the little "snap" flash) */
const JOINTS = [[905, 262], [740, 346], [522, 548], [1226, 566], [655, 745]]

const LOOP = 7 /* seconds per connect / separate cycle */
const TIMES = [0, 0.1, 0.4, 0.86, 1]

export function PuzzlePieces() {
  const reduce = useReducedMotion()

  /* same keyframes for every layer of a piece, so wall / face / glow stay locked together */
  const animFor = (p, i) => (reduce ? {} : {
    initial: p.from,
    animate: {
      x: [p.from.x, p.from.x, 0, 0, p.from.x],
      y: [p.from.y, p.from.y, 0, 0, p.from.y],
      rotate: [p.from.rotate, p.from.rotate, 0, 0, p.from.rotate],
    },
    transition: {
      duration: LOOP, times: TIMES, repeat: Infinity, delay: i * 0.12,
      ease: ['linear', [0.34, 1.56, 0.64, 1], 'linear', [0.65, 0, 0.35, 1]],
    },
  })
  const layerStyle = { transformBox: 'fill-box', transformOrigin: 'center' }
  const Marker = ({ p }) => <rect {...p.box} fill="none" />

  return (
    <svg className="hero__wheel" viewBox="0 55 1625 1115" role="img"
      aria-label="Identify, Engage, Develop, Measure — four pieces that fit together">
      <defs>
        {PUZZLE.map(p => (
          <React.Fragment key={p.key}>
            <linearGradient id={`v3-face-${p.key}`} gradientUnits="userSpaceOnUse"
              x1={p.g1[0]} y1={p.g1[1]} x2={p.g2[0]} y2={p.g2[1]}>
              <stop offset="0" stopColor={p.face[0]} />
              <stop offset="0.55" stopColor={p.face[1]} />
              <stop offset="1" stopColor={p.face[2]} />
            </linearGradient>
            <linearGradient id={`v3-shade-${p.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.72" stopColor={p.dark} stopOpacity="0" />
              <stop offset="1" stopColor={p.dark} stopOpacity="0.3" />
            </linearGradient>
            <clipPath id={`v3-clip-${p.key}`}><path d={p.d} /></clipPath>
          </React.Fragment>
        ))}
        <linearGradient id="v3-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.36" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="v3-bars" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8b4ff2" /><stop offset="1" stopColor="#6c33e0" />
        </linearGradient>
        <filter id="v3-soft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.4" /></filter>
        <filter id="v3-bevel" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="7" /></filter>
        <filter id="v3-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="30" /></filter>
      </defs>

      {/* 1 · coloured glow / shadow under each piece */}
      {PUZZLE.map((p, i) => (
        <motion.g key={p.key} style={layerStyle} {...animFor(p, i)}>
          <Marker p={p} />
          <g filter="url(#v3-glow)" opacity="0.95">
            <path d={p.d} transform={`translate(${WALL[0] + 10},${WALL[1] + 30})`} fill={p.glow} />
          </g>
        </motion.g>
      ))}

      {/* 2 · extruded walls for all pieces (drawn before any top face so neighbours cover them) */}
      {PUZZLE.map((p, i) => (
        <motion.g key={p.key} style={layerStyle} {...animFor(p, i)}>
          <Marker p={p} />
          <g filter="url(#v3-soft)">
          {Array.from({ length: WALL_STEPS }, (_, k) => {
            const t = 1 - k / WALL_STEPS /* 1 = bottom of the wall */
            return (
              <path key={k} d={p.d}
                transform={`translate(${(WALL[0] * t).toFixed(1)},${(WALL[1] * t).toFixed(1)})`}
                fill={mixHex(p.wall[0], p.wall[1], Math.pow(t, 0.8))} />
            )
          })}
          </g>
        </motion.g>
      ))}

      {/* 3 · top faces, bevels and the artwork on them */}
      {PUZZLE.map((p, i) => (
        <motion.g key={p.key} style={layerStyle} {...animFor(p, i)}>
          <Marker p={p} />
          <path d={p.d} fill={`url(#v3-face-${p.key})`} />
          <path d={p.d} fill="url(#v3-gloss)" />
          <path d={p.d} fill={`url(#v3-shade-${p.key})`} />
          <g clipPath={`url(#v3-clip-${p.key})`}>
            <g filter="url(#v3-bevel)" fill="none" strokeLinejoin="round">
              <path d={p.d} transform="translate(-9,-16)" stroke={p.dark} strokeWidth="34" strokeOpacity="0.3" />
              <path d={p.d} transform="translate(8,14)" stroke="#ffffff" strokeWidth="26" strokeOpacity="0.4" />
            </g>
          </g>
          <path d={p.d} fill="none" stroke={p.dark} strokeOpacity="0.14" strokeWidth="4" strokeLinejoin="round" />
          <path d={p.d} fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.6" strokeLinejoin="round" />
          {p.key === 'identify' && (<>
            <Icon as={Search} cx={392} cy={172} size={120} color="#1569f2" sw={2.4} />
            <Title x={291} y={296} size={72}>Identify</Title>
            <Lines x={291} y={357} lines={['Discover strengths', 'and gaps']} step={55} size={44} fill="#17224a" ls="-0.015em" weight={550} />
          </>)}
          {p.key === 'engage' && (<>
            <Icon as={Users} cx={1152} cy={166} size={136} color="#19bf3b" sw={2.2} />
            <Title x={1062} y={287} size={72}>Engage</Title>
            <Lines x={1062} y={347} lines={['Align and build', 'commitment']} step={55} size={44} fill="#17224a" ls="-0.015em" weight={550} />
          </>)}
          {p.key === 'develop' && (<>
            <Icon as={Leaf} cx={338} cy={612} size={142} color="#f47a0c" sw={2.3} />
            <Title x={239} y={747} size={72}>Develop</Title>
            <Lines x={239} y={808} lines={['Build the right', 'capabilities']} step={56} size={44} fill="#17224a" ls="-0.015em" weight={550} />
          </>)}
          {p.key === 'measure' && (<>
            <g fill="url(#v3-bars)">
              <rect x="961" y="615" width="16" height="33" rx="8" />
              <rect x="989" y="593" width="16" height="55" rx="8" />
              <rect x="1017" y="565" width="16" height="83" rx="8" />
              <rect x="1045" y="552" width="16" height="96" rx="8" />
            </g>
            <Title x={910} y={738} size={72}>Measure</Title>
            <Lines x={910} y={800} lines={['Turn progress', 'into impact']} step={57} size={44} fill="#17224a" ls="-0.015em" weight={550} />
          </>)}
        </motion.g>
      ))}

      {/* snap flash where the pieces lock together */}
      {!reduce && JOINTS.map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="62" fill="none" stroke="#ffffff" strokeWidth="9"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0, 0.95, 0, 0], scale: [0.5, 0.5, 1, 1.7, 1.7] }}
          transition={{ duration: LOOP, times: [0, 0.45, 0.48, 0.58, 1], repeat: Infinity, delay: 0.36 }} />
      ))}
    </svg>
  )
}

/* ═════════════════ Hero sections 2–5 ═════════════════ */

export function HeroV2() { return <Hero id="hero-v2" visual={<JourneyCards />} wide bleed /> }
export function HeroV3() { return <Hero id="hero-v3" visual={<PuzzlePieces />} wide /> }
