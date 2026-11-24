import React from 'react'
import { Download, Users, MessageCircle, Settings, UsersRound } from 'lucide-react'
import plate from '../assets/hero-carbon/plate.jpg'
import cards from '../assets/hero-carbon/cards-clean.webp'
import './HeroCarbon.css'

/* Hero — carbon copy of the supplied design.
   • Background plate: the design's own background, with the text and cards removed.
   • Cards: the design's card artwork (four cards, the line, the dots and the arrow), cut out of the
     design so that plate + cards reproduce it exactly.
   • Headline, copy and buttons: live text, positioned and sized to the design (1600 × 900 frame). */
/* Live text laid over the card artwork (the artwork itself carries no text).
   x / y are in artwork pixels (950 x 440), measured from the original artwork: y is the text baseline,
   x is the left edge / centre / right edge depending on align. size is the font size in the same units. */
const NAVY = '#0b1a4d'
const GREEN = '#17a34a'
const SUB = '#12214f'
const SKILL = '#16386b'
const CARD_TEXT = [
  { kind: 'title', text: 'Identify', x: 153.0, y: 300.8, size: 25, color: NAVY, align: 'center' },
  { kind: 'title', text: 'Engage', x: 373.5, y: 298.8, size: 25, color: NAVY, align: 'center' },
  { kind: 'title', text: 'Build', x: 589.5, y: 298.8, size: 25, color: NAVY, align: 'center' },
  { kind: 'title', text: 'Measure', x: 809.0, y: 299, size: 25, color: NAVY, align: 'center' },
  { kind: 'sub', text: 'Reveal strengths', x: 152.0, y: 328.4, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'and gaps', x: 150.5, y: 349.4, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'Create shared', x: 371.0, y: 329, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'commitment', x: 371.0, y: 349, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'Develop the right', x: 588.0, y: 327.4, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'capabilities', x: 588.0, y: 347.4, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'Show what', x: 807.5, y: 323.4, size: 17, color: SUB, align: 'center' },
  { kind: 'sub', text: 'changed', x: 807.5, y: 348.4, size: 17, color: SUB, align: 'center' },
  { kind: 'ui', text: 'Managerial Profile', x: 152, y: 118.5, size: 12.6, color: NAVY, rot: -5, desc: true },
  { kind: 'ui', text: '+17 pp', x: 874.8, y: 85, size: 13.3, color: GREEN, rot: -3, desc: true },
  { kind: 'ui', text: 'Team Effectiveness', x: 781.3, y: 107.5, size: 10.0, color: NAVY, rot: -5.1, desc: false },
]

/* Rows drawn on a grid, one set per card.
   x is the shared left edge of the rows and y the centre line of the first row (artwork units, 950 x 440),
   pitch is the equal distance between rows and rot the tilt of the card. Inside a row everything is laid out on plain
   horizontal coordinates, so icons, labels, bars and numbers share the same left edge, gaps and baselines. */
const GROUPS = {
  // Training / Team activities / 30-day plan: label with a grey line under it, centred between icon and check
  build: { x: 557, y: 106.9, rot: -4.8, pitch: 44.7 },
  // Team Effectiveness: label above bar, percentage centred on the bar
  measure: { x: 735, y: 150, rot: -4.5, pitch: 36 },
}
const PROFILE = { x: 100.5, y: 141, a: 0.998, b: -0.061, c: -0.18, pitch: 20.5, track: 84, fill: 62, bar: 3.6, barY: 3.4 }
const PROFILE_ROWS = [
  { label: 'Clarity & Alignment', icon: MessageCircle, g: 'hb-blue' },
  { label: 'Collaboration & Influence', icon: Users, g: 'hb-teal' },
  { label: 'Learning & Adaptability', icon: Settings, g: 'hb-teal2' },
  { label: 'Trust & Inclusion', icon: UsersRound, g: 'hb-teal2' },
]
const BUILD_ROWS = ['Training', 'Team activities', 'Masterplan']
const MEASURE_ROWS = [
  { label: 'Initial', w: 83, g: 'hb-purple', pct: '64%', c: NAVY },
  { label: 'Follow-up', w: 113.5, g: 'hb-green', pct: '81%', c: GREEN },
]

export default function HeroCarbon() {
  return (
    <section className="hc-outer" id="hero">
      <div className="hc" style={{ backgroundImage: `url(${plate})` }}>
        <div className="hc-content">
          <div className="hc-text">
            <span className="hc-dash" aria-hidden="true" />
            <div className="hc-eyebrow">LOWER YOUR MANAGEMENT RISK</div>

            <h1 className="hc-title">
              <span className="hc-title-main">Your managers<br />want to lead well.</span>
              <em className="hc-title-em">Most don’t know<br />where they’re<br />falling short.</em>
            </h1>

            <p className="hc-sub">
              When things keep changing, that gap is<br />{' '}
              a business risk. Behavency finds it early,<br />{' '}
              helps managers close it — and shows you<br />{' '}
              what changed.
            </p>

            <a className="hc-btn" href="#contact">Request a demo</a>
            <a className="hc-link" href="/Behavency-Overview.pdf" download>
              Download overview <Download strokeWidth={2.75} aria-hidden="true" />
            </a>
          </div>

          <div className="hc-cards" role="img"
            aria-label="Identify: reveal strengths and gaps. Engage: create shared commitment. Build: develop the right capabilities. Measure: show what changed.">
            <img className="hc-cards-art" src={cards} alt="" draggable="false" />
            <svg className="hc-cards-ui" viewBox="0 0 950 440" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="hb-blue" x1="0" x2="1"><stop offset="0" stopColor="#2aa9ef" /><stop offset=".78" stopColor="#1f9fe8" /><stop offset="1" stopColor="#1fb768" /></linearGradient>
                <linearGradient id="hb-teal" x1="0" x2="1"><stop offset="0" stopColor="#25a8ec" /><stop offset=".55" stopColor="#1fb7c4" /><stop offset="1" stopColor="#1eb85c" /></linearGradient>
                <linearGradient id="hb-teal2" x1="0" x2="1"><stop offset="0" stopColor="#1fb2d2" /><stop offset=".6" stopColor="#1cb9ae" /><stop offset="1" stopColor="#1db858" /></linearGradient>
                <linearGradient id="hb-purple" x1="0" x2="1"><stop offset="0" stopColor="#c9a0fa" /><stop offset=".45" stopColor="#a966f2" /><stop offset="1" stopColor="#8f48e8" /></linearGradient>
                <linearGradient id="hb-green" x1="0" x2="1"><stop offset="0" stopColor="#c4ecdc" /><stop offset=".32" stopColor="#1ac8b2" /><stop offset=".72" stopColor="#17b93f" /><stop offset="1" stopColor="#10b43a" /></linearGradient>
              </defs>

              {/* Managerial Profile: ONE group that follows the perspective of the tilted laptop screen.
                  matrix(a b c d e f): the x axis follows the tilt of the text lines (-3.5 deg) and the y axis follows the lean of the
                  screen's left edge (it falls 0.18 left per unit down, measured on the artwork), so every row, icon, label and bar is
                  laid out on plain coordinates and inherits the same perspective. Row i is at v = i x pitch. */}
              <g transform={`matrix(${PROFILE.a} ${PROFILE.b} ${PROFILE.c} 1 ${PROFILE.x} ${PROFILE.y})`}>
                {PROFILE_ROWS.map((r, i) => {
                  const v = i * PROFILE.pitch
                  const Icon = r.icon
                  return (
                    <g key={r.label} transform={`translate(0 ${v})`}>
                      <Icon x={-5.5} y={-4.75} width={11} height={11} stroke="#1d3f91" strokeWidth={1.8} />
                      <text x={10} y={-2.2} fontSize="6.6" fontWeight="700" fill={SKILL} letterSpacing="0">{r.label}</text>
                      <rect x={10} y={PROFILE.barY} width={PROFILE.track} height={PROFILE.bar} rx={PROFILE.bar / 2} fill="rgba(198,205,224,0.42)" />
                      <rect x={10} y={PROFILE.barY} width={PROFILE.fill} height={PROFILE.bar} rx={PROFILE.bar / 2} fill={`url(#${r.g})`} />
                    </g>
                  )
                })}
              </g>

              {/* Training / Team activities / 30-day plan: the text and its grey line are centred on the row's centre line */}
              <g>
                {BUILD_ROWS.map((t, i) => {
                  const y = 0
                  return (
                    <g key={t} transform={`translate(${GROUPS.build.x} ${GROUPS.build.y + i * GROUPS.build.pitch}) rotate(${GROUPS.build.rot})`}>
                      <text x={0} y={y - 4.6} fontSize="12" fontWeight="700" fill={NAVY} dominantBaseline="central" letterSpacing="-0.2">{t}</text>
                      <rect x={0} y={y + 7} width={91} height={4.5} rx={2.25} fill="rgba(200,206,222,0.5)" />
                    </g>
                  )
                })}
              </g>

              {/* Team Effectiveness: label above the bar, percentage centred on the bar and right-aligned */}
              <g>
                {MEASURE_ROWS.map((r, i) => {
                  const y = 0
                  return (
                    <g key={r.label} transform={`translate(${GROUPS.measure.x} ${GROUPS.measure.y + i * GROUPS.measure.pitch}) rotate(${GROUPS.measure.rot})`}>
                      <text x={0} y={y - 8} fontSize="12" fontWeight="700" fill={NAVY} letterSpacing="-0.2">{r.label}</text>
                      <rect x={0} y={y - 3.5} width={114} height={7} rx={3.5} fill="rgba(198,205,224,0.4)" />
                      <rect x={0} y={y - 3.5} width={r.w} height={7} rx={3.5} fill={`url(#${r.g})`} />
                      <text x={160} y={y} fontSize="15.2" fontWeight="800" fill={r.c} textAnchor="end" dominantBaseline="central" letterSpacing="-0.3">{r.pct}</text>
                    </g>
                  )
                })}
              </g>
            </svg>
            {CARD_TEXT.map((t) => (
              <span
                key={t.text}
                className={`hc-ct hc-ct--${t.kind} ${t.rot ? 'hc-ct--rot' : ''}`}
                style={{ left: `${t.x / 9.5}%`, top: `${t.y / 4.4}%`, '--s': t.size, '--c': t.color, '--r': `${t.rot || 0}deg`, '--dy': t.desc ? '-0.1em' : '0em', textAlign: t.align }}
                aria-hidden="true"
              >{t.text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
