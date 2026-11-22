import './GameScreen.css'
import GameCard from './GameCard'

/* Screen 1 of the Engage scroll-stack: "01 · The Game" */

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Gamepad = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" />
    <rect x="2" y="6" width="20" height="12" rx="6" />
  </svg>
)
export const Users = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="8.5" cy="7.5" r="3.5" /><path d="M2 20v-1.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5V20" />
    <circle cx="17.5" cy="8.5" r="2.8" /><path d="M17.5 13.5a4.5 4.5 0 0 1 4.5 4.5v2" />
  </svg>
)
export const Clock = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" />
  </svg>
)
export const Layers = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 12.5 9 5 9-5" /><path d="m3 17 9 5 9-5" />
  </svg>
)
export const Sliders = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="3" y1="8" x2="9" y2="8" /><line x1="15" y1="8" x2="21" y2="8" /><circle cx="12" cy="8" r="2.6" />
    <line x1="3" y1="16" x2="6" y2="16" /><line x1="12" y1="16" x2="21" y2="16" /><circle cx="9" cy="16" r="2.6" />
  </svg>
)

export const Chat = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12Z" /><line x1="8.5" y1="11" x2="15.5" y2="11" /><line x1="8.5" y1="14.5" x2="13" y2="14.5" />
  </svg>
)
export const Person = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
)

const FEATURES = [
  { Icon: Users, title: '12 – 100 participants', desc: 'Works for remote\nand in-person teams.' },
  { Icon: Clock, title: '45 minutes', desc: 'Online, fully facilitated.' },
  { Icon: Layers, title: 'Learn by doing', desc: 'Reveal your own\nbehavioural patterns through play.' },
  { Icon: Sliders, title: 'Customised', desc: 'Tailored to your team’s\nfocus areas.' },
]

/* The illustration: a stack of game cards, three coloured cards and a dice, all drawn as crisp vectors */
function GameArt() {
  // isometric axes of the purple card: origin O, X along the top-right edge, Y along the top-left edge
  const O = [292, 128], X = [124, 64], Y = [-196, 88]
  const P = (x, y, dz = 0) => `${O[0] + x * X[0] + y * Y[0]},${O[1] + x * X[1] + y * Y[1] + dz}`
  const face = (dz = 0) => `${P(0, 0, dz)} ${P(1, 0, dz)} ${P(1, 1, dz)} ${P(0, 1, dz)}`
  return (
    <svg className="gs-art" viewBox="0 0 640 400" role="img" aria-label="A stack of game cards and a dice">
      <defs>
        <radialGradient id="gs-blob" cx="0.55" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#f1eafd" /><stop offset="1" stopColor="#f6f1fe" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id="gs-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a876f4" /><stop offset="1" stopColor="#8b55ea" />
        </linearGradient>
        <filter id="gs-soft" x="-20%" y="-20%" width="140%" height="150%"><feGaussianBlur stdDeviation="10" /></filter>
      </defs>

      {/* soft blob */}
      <path d="M118 150C150 70 290 40 420 60C540 78 618 160 600 260C584 350 470 392 340 388C210 386 80 350 70 270C66 220 92 190 118 150Z" fill="url(#gs-blob)" />
      <ellipse cx="300" cy="352" rx="200" ry="22" fill="#bba2f0" opacity="0.35" filter="url(#gs-soft)" />

      {/* sparks */}
      <g stroke="#7c3aed" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M190 52l22 10" /><path d="M222 22l14 26" /><path d="M262 16l-3 30" />
      </g>

      {/* coloured cards (behind) */}
      {[
        { c: '#6aaeee', pts: '330,126 416,84 454,106 372,152', e: '#e9eef9' },
        { c: '#f6cc42', pts: '404,146 492,100 536,128 448,186', e: '#f3ecd6' },
        { c: '#f59a8a', pts: '478,204 560,176 604,204 520,244', e: '#f6e3df' },
      ].map((k, i) => (
        <g key={i} strokeLinejoin="round">
          <polygon points={k.pts} fill={k.e} stroke={k.e} strokeWidth="9" transform="translate(0 6)" />
          <polygon points={k.pts} fill={k.c} stroke={k.c} strokeWidth="9" />
        </g>
      ))}

      {/* purple stack: three thin layers */}
      <g strokeLinejoin="round">
        <polygon points={face(42)} fill="#e9e2fa" stroke="#e9e2fa" strokeWidth="10" />
        <polygon points={face(29)} fill="#c9b3f6" stroke="#c9b3f6" strokeWidth="10" />
        <polygon points={face(16)} fill="#f6f3fd" stroke="#f6f3fd" strokeWidth="10" />
        <polygon points={face(0)} fill="url(#gs-purple)" stroke="#9a66ee" strokeWidth="10" />
      </g>
      {/* game-controller glyph lying on the card */}
      <g transform={`matrix(${X[0]} ${X[1]} ${Y[0]} ${Y[1]} ${O[0]} ${O[1]})`}>
        <g transform="translate(0.2 0.2) scale(0.0250)" fill="none" stroke="#f4eeff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
          <line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" />
          <path d="M6 18h.8c1 0 1.6-.5 2.2-1.3.4-.5.8-.7 1.4-.7h3.2c.6 0 1 .2 1.4.7.6.8 1.2 1.3 2.2 1.3H18a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4Z" />
        </g>
      </g>

      {/* dice */}
      <g strokeLinejoin="round">
        <polygon points="470,300 470,360 420,334 420,276" fill="#f1eef8" stroke="#f1eef8" strokeWidth="14" />
        <polygon points="470,300 470,360 524,330 524,270" fill="#e4e0ee" stroke="#e4e0ee" strokeWidth="14" />
        <polygon points="420,276 470,300 524,270 474,246" fill="#ffffff" stroke="#ffffff" strokeWidth="14" />
      </g>
      <g fill="#241f3d">
        <ellipse cx="474" cy="270" rx="5.5" ry="4" /><ellipse cx="488" cy="262" rx="5.5" ry="4" transform="rotate(-6 488 262)" />
        <ellipse cx="436" cy="302" rx="4.6" ry="6.5" /><ellipse cx="445" cy="322" rx="4.6" ry="6.5" /><ellipse cx="454" cy="296" rx="4.6" ry="6.5" />
        <ellipse cx="490" cy="316" rx="4.6" ry="6.5" /><ellipse cx="506" cy="300" rx="4.6" ry="6.5" /><ellipse cx="506" cy="326" rx="4.6" ry="6.5" />
      </g>
    </svg>
  )
}

/* One screen of the Engage scroll-stack. `theme` recolours it (purple / blue / indigo). */
export function StageScreen({ theme = 'purple', badgeIcon, badgeText, title, sub, paragraphs, art, features }) {
  return (
    <div className={`gs-card gs-card--${theme}`} data-accent={theme}>
      <div className="gs-top">
        <div className="gs-copy">
          <div className="gs-badge">
            <span className="gs-badge-icon">{badgeIcon}</span>
            <span className="gs-badge-pill"><b>{badgeText[0]}</b> · {badgeText[1]}</span>
          </div>
          <h3 className="gs-title">{title}</h3>
          <p className="gs-sub">{sub}</p>
          {paragraphs.map((t, i) => <p className="gs-text" key={i}>{t}</p>)}
        </div>
        <div className="gs-art-wrap">{art}</div>
      </div>

      <div className="gs-features" style={{ '--gs-cols': features.length }}>
        {features.map(({ Icon, title: t, desc }) => (
          <div className="gs-feat" key={t}>
            <span className="gs-feat-icon"><Icon /></span>
            <div>
              <div className="gs-feat-title">{t}</div>
              <div className="gs-feat-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GameScreen() {
  return <GameCard />
}
