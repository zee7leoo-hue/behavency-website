import StagePill from './StagePill'
import React, { useState, useRef, useEffect } from 'react'
import './EngageExperienceSection.css'
import ReflectionCard from './ReflectionCard'
import InsightCard from './InsightCard'
import GameScreen, { StageScreen, Users, Clock, Layers, Chat, Person } from './GameScreen'
import reflectionVisual from '../assets/engage/reflection-visual.webp'
import gameAv1 from '../assets/engage/game-av-1.webp'
import gameAv2 from '../assets/engage/game-av-2.webp'
import gameAv3 from '../assets/engage/game-av-3.webp'
import gameAv4 from '../assets/engage/game-av-4.webp'
import gameAv5 from '../assets/engage/game-av-5.webp'

/* ── SVG Icons matching exact visual shapes from design ── */
const IconGamepad = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="4"/>
    <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
    <circle cx="16" cy="11" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="13" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
)

const IconUsersGroup = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconBarChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconFeatUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconFeatClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconFeatLayers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const IconFeatSliders = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
)

const IconFeatChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
  </svg>
)

const IconBadgeDots = () => (
  <svg width="22" height="16" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
    <circle cx="4.5" cy="9" r="2.6"/><circle cx="11.2" cy="9" r="2.1"/>
    <circle cx="17.8" cy="5.4" r="2.6"/><circle cx="18.6" cy="12.8" r="1.9"/>
  </svg>
)

const IconBadgeBars = () => (
  <svg width="20" height="18" viewBox="0 0 24 22" fill="currentColor" aria-hidden="true">
    <rect x="2" y="12" width="4.4" height="9" rx="1.2"/><rect x="9.8" y="6" width="4.4" height="15" rx="1.2"/><rect x="17.6" y="1" width="4.4" height="20" rx="1.2"/>
  </svg>
)

const IconReportBars = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
    <rect x="7" y="26" width="9" height="16" rx="2.6"/><rect x="19.5" y="16" width="9" height="26" rx="2.6"/><rect x="32" y="5" width="9" height="37" rx="2.6"/>
  </svg>
)

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 18v1.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V18"/>
  </svg>
)

const IconSparkle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.5c.7 4.9 2.6 7.8 9.5 9.5-6.9 1.7-8.8 4.6-9.5 9.5-.7-4.9-2.6-7.8-9.5-9.5 6.9-1.7 8.8-4.6 9.5-9.5Z"/>
  </svg>
)

const STAGES_DATA = [
  {
    id: 1,
    num: '01',
    accent: 'purple',
    stageLabel: 'STAGE 01',
    tabTitle: '01 · The Game',
    tabSub: 'Experience the patterns',
    icon: IconGamepad,
    heading: 'The Game',
    game: true,
    subheading: 'A game that makes participants feel their own blind spots.',
    description: "Numbers on a report don't always convince people. It's easy to see a low score and move on. What's harder is encountering the same behavioural gap yourself — in a real group situation, in real time.",
    cardTitle: 'Choose a response',
    scoreTitle: 'Team balance',
    scorePercent: '76%',
    featuresTitle: 'Game at a glance',
    features: [
      {
        icon: IconFeatUsers,
        title: '12 – 100 participants',
        desc: 'Remote and in-person teams'
      },
      {
        icon: IconFeatClock,
        title: '45 minutes',
        desc: 'Online, fully facilitated'
      },
      {
        icon: IconFeatLayers,
        title: 'Learn by doing',
        desc: 'Reveal your own behavioural patterns through play.'
      },
      {
        icon: IconFeatSliders,
        title: 'Customised',
        desc: "Tailored to your team's focus areas."
      }
    ]
  },
  {
    id: 2,
    num: '02',
    accent: 'blue',
    stageLabel: 'STAGE 02',
    tabTitle: '02 · Post-Reflection',
    tabSub: 'Make the connection',
    icon: IconUsersGroup,
    heading: 'The Reflection',
    subheading: 'The game is only the beginning.',
    paragraphs: [
      'In a facilitated conversation, the team looks back at what happened — the decisions they made, the patterns that emerged, and how they worked together.',
      'The facilitator helps turn those moments into insights they can recognise in themselves and in the way their team works.',
    ],
    theme: 'blue',
    badgeIcon: IconBadgeDots,
    photo: reflectionVisual,
    cardTitle: 'Key observations',
    scoreTitle: 'Team Alignment',
    scorePercent: '88%',
    features: [
      {
        icon: IconFeatClock,
        title: 'Typically 90 minutes',
        desc: 'Flexible to your needs.'
      },
      {
        icon: IconFeatUsers,
        title: 'Facilitator-led',
        desc: 'Run by your facilitator or a Behavency expert.'
      },
      {
        icon: IconFeatChat,
        title: 'Guided reflection',
        desc: 'A structured methodology using questions, discussion and facilitator input.'
      },
      {
        icon: IconFeatLayers,
        title: 'Linked to your results',
        desc: 'Brings to life the key areas from the assessment in real team situations.'
      }
    ]
  },
  {
    id: 3,
    num: '03',
    accent: 'indigo',
    stageLabel: 'STAGE 03',
    tabTitle: '03 · Insight Report',
    tabSub: 'See what it reveals',
    icon: IconBarChart,
    heading: 'Insight Report',
    subheading: 'Turn the experience into actionable insight.',
    badgeCombo: true,
    badgeIcon: IconBadgeBars,
    audiences: [
      {
        title: 'For HR & facilitators',
        desc: 'Greater participant self-awareness, engagement and stronger buy-in for subsequent development.'
      },
      {
        title: 'For participants',
        desc: 'An engaging experience that makes their assessment tangible and helps them understand their own behaviour.'
      }
    ],
    report: {
      title: ['Team', 'Insight Report'],
      meta: '5 teams · 60 participants',
      download: 'Download PDF',
      metrics: [
        { label: 'Trust', value: 78, tone: 'green' },
        { label: 'Prioritisation', value: 64, tone: 'yellow' },
        { label: 'Collaboration', value: 68, tone: 'purple', sub: 'Internal & Cross-Functional' }
      ],
      takeawayTitle: 'Key takeaway',
      takeaway: 'Team collaboration showed strong engagement and involvement, while cross-functional collaboration can be further strengthened.'
    }
  }
]

/* ── The Game tab illustration: one crisp SVG (blob, card, checklist, score ring, sparks and five avatars).
      Drawn on a 485 × 480 canvas that matches the supplied design; everything but the faces is vector. ── */
const GAME_AVATARS = [
  { src: gameAv1, cx: 123, cy: 123, size: 84 },
  { src: gameAv2, cx: 324, cy: 124, size: 86 },
  { src: gameAv3, cx: 71, cy: 292, size: 82 },
  { src: gameAv4, cx: 197, cy: 398, size: 86 },
  { src: gameAv5, cx: 383, cy: 350, size: 84 },
]

function GameVisual({ stage }) {
  const pct = parseInt(stage.scorePercent, 10) || 0
  const circ = 2 * Math.PI * 43
  return (
    <svg className="ees-game-svg" viewBox="0 0 485 480" role="img"
      aria-label={`${stage.cardTitle}. ${stage.scoreTitle} ${stage.scorePercent}.`}>
      <defs>
        <linearGradient id="eg-blob" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#f0e8fe" /><stop offset="0.55" stopColor="#e4d7fb" /><stop offset="1" stopColor="#d3bff8" />
        </linearGradient>
        <linearGradient id="eg-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a65cf7" /><stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="eg-spark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f5cf7" /><stop offset="1" stopColor="#a96ff9" />
        </linearGradient>
        <filter id="eg-blur-lg" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="16" /></filter>
        <filter id="eg-blur-md" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="9" /></filter>
        <filter id="eg-card-shadow" x="-15%" y="-20%" width="130%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="13" floodColor="#7c4ddf" floodOpacity="0.26" />
        </filter>
        <filter id="eg-av-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#6d4bd8" floodOpacity="0.24" />
        </filter>
        {GAME_AVATARS.map((a, i) => (
          <clipPath id={`eg-clip-${i}`} key={i}>
            <rect x={a.cx - a.size / 2} y={a.cy - a.size / 2} width={a.size} height={a.size} rx="23" />
          </clipPath>
        ))}
      </defs>

      {/* soft halo, blob and the purple glow under the card */}
      <ellipse cx="245" cy="255" rx="205" ry="190" fill="#efe8fd" opacity="0.7" filter="url(#eg-blur-lg)" />
      <path d="M230 112C300 104 390 108 420 140C445 168 444 235 430 285C418 330 380 372 320 390C250 408 140 404 100 380C62 356 66 300 78 255C92 205 120 150 170 128C190 118 208 114 230 112Z" fill="url(#eg-blob)" />
      <ellipse cx="225" cy="372" rx="150" ry="26" fill="#b99af2" opacity="0.6" filter="url(#eg-blur-md)" />

      {/* the card */}
      <g transform="rotate(-1.4 246 265)">
        <rect x="100" y="183" width="292" height="164" rx="22" fill="#ffffff" filter="url(#eg-card-shadow)" />

        <text x="123" y="228" fontSize="19" fontWeight="800" fill="#16164a" letterSpacing="-0.4">{stage.cardTitle}</text>

        {[262, 283, 303].map((y, i) => (
          <g key={y} opacity={i === 1 ? 0.5 : 1}>
            <rect x="125" y={y - 8} width="17" height="17" rx="5" fill="#ebe1fd" stroke="#c7b0f4" strokeWidth="1.2" />
            <path d={`M129 ${y + 0.5}l3.2 3.3 6-6.5`} fill="none" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
        <rect x="150" y="259" width="92" height="7" rx="3.5" fill="#ddd2f7" />
        <rect x="150" y="280" width="64" height="7" rx="3.5" fill="#ece6fa" />
        <rect x="150" y="300.5" width="98" height="5.5" rx="2.75" fill="#c9b6f3" />
        <rect x="231" y="293" width="25" height="19" rx="9.5" fill="#6d28d9" />
        <path d="M238 302.5l3.6 3.6 7-7.4" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

        {/* score */}
        <text x="279" y="205" fontSize="10.5" fontWeight="700" fill="#b0a6d6">{stage.scoreTitle}</text>
        <circle cx="368" cy="200.5" r="7" fill="none" stroke="#7c3aed" strokeWidth="2.6" />
        <circle cx="368" cy="200.5" r="2.1" fill="#7c3aed" />
        <g transform="translate(325 263)">
          <circle r="43" fill="none" stroke="#e6dcfa" strokeWidth="12" />
          <circle r="43" fill="none" stroke="url(#eg-ring)" strokeWidth="12" strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * circ} ${circ}`} transform="rotate(-90)" />
          <g transform="translate(-11 -29) scale(0.69)" aria-hidden="true">
            <circle cx="16" cy="6" r="4.5" fill="#7c3aed" />
            <path d="M8 18C8 12 12 11 16 11C20 11 24 12 24 18Z" fill="#7c3aed" />
            <circle cx="7" cy="8" r="3.5" fill="#a78bfa" />
            <path d="M1 18C1 14 4 13 8 13C9.5 13 11 13.5 12 14.5" fill="#a78bfa" />
            <circle cx="25" cy="8" r="3.5" fill="#a78bfa" />
            <path d="M20 14.5C21 13.5 22.5 13 24 13C28 13 31 14 31 18" fill="#a78bfa" />
          </g>
          <text y="12" fontSize="25" fontWeight="800" fill="#6d28d9" textAnchor="middle" letterSpacing="-0.5">{stage.scorePercent}</text>
        </g>
      </g>

      {/* joyful spark lines */}
      <g fill="none" strokeLinecap="round" strokeWidth="9" stroke="url(#eg-spark)" aria-hidden="true">
        <path d="M366 34L363 64" />
        <path d="M406 46L384 70" />
        <path d="M395 89L423 88" stroke="#a78bfa" />
      </g>

      {/* participants */}
      {GAME_AVATARS.map((a, i) => (
        <g key={i} filter="url(#eg-av-shadow)">
          <image href={a.src} x={a.cx - a.size / 2} y={a.cy - a.size / 2} width={a.size} height={a.size}
            preserveAspectRatio="xMidYMid slice" clipPath={`url(#eg-clip-${i})`} />
        </g>
      ))}
    </svg>
  )
}

/* The "Team Insight Report" card of the Insight Report tab (sized in container units so it scales as one piece) */
function ReportCard({ report }) {
  return (
    <div className="ees-report-card">
      <div className="ees-report-top">
        <div className="ees-report-dark">
          <span className="ees-report-dark-icon"><IconReportBars /></span>
          <div className="ees-report-dark-title">
            {report.title.map((line, i) => <span key={i}>{line}</span>)}
          </div>
          <div className="ees-report-dark-meta">{report.meta}</div>
        </div>

        <div className="ees-report-metrics">
          <div className="ees-report-download">
            <span className="ees-report-download-icon"><IconDownload /></span>
            {report.download}
          </div>
          {report.metrics.map((m) => (
            <div className="ees-report-row" key={m.label}>
              <div className="ees-report-label">
                {m.label}
                {m.sub && <small>{m.sub}</small>}
              </div>
              <div className="ees-report-track">
                <span className={`ees-report-fill ees-fill-${m.tone}`} style={{ width: `${m.value}%` }} />
              </div>
              <div className="ees-report-pct">{m.value}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ees-report-takeaway">
        <span className="ees-report-sparkle"><IconSparkle /></span>
        <div className="ees-report-takeaway-title">{report.takeawayTitle}</div>
        <p className="ees-report-takeaway-text">{report.takeaway}</p>
      </div>
    </div>
  )
}

/* One tab's content. Every tab renders its own panel and all panels share the same grid cell, so the card
   is always as tall as the tallest tab and nothing moves when you switch (inactive panels are just hidden). */
function StagePanel({ stage, active }) {
  return (
    <div
      id={`ees-panel-${stage.id}`}
      className={`ees-panel${active ? ' is-active' : ''}${stage.theme ? ` ees-theme-${stage.theme}` : ''}${stage.report ? ' ees-layout-report' : ''}`}
      role="tabpanel"
      aria-hidden={!active}
      inert={!active}
    >
      <div className="ees-stages-center-area">
        <div className={`ees-stages-center-inner${stage.photo ? ' ees-has-photo' : ''}${stage.report ? ' ees-report-layout' : ''}${stage.game ? ' ees-game-layout' : ''}`}>
          {/* Left Story Text */}
          <div className="ees-stages-story-wrap">
            <div className="ees-stage-badge-row">
              {stage.badgeCombo ? (
                <span className="ees-stage-badge-combo">
                  <span className="ees-stage-badge-combo-icon" aria-hidden="true"><stage.badgeIcon /></span>
                  {stage.stageLabel}
                </span>
              ) : stage.badgeIcon ? (
                <span className="ees-stage-badge-icon" aria-hidden="true"><stage.badgeIcon /></span>
              ) : (
                <span className="ees-stage-badge-dash" />
              )}
              {!stage.badgeCombo && <span className="ees-stage-badge-pill">{stage.stageLabel}</span>}
            </div>
            <h4 className="ees-stages-story-heading">{stage.heading}</h4>
            <p className="ees-stages-story-subheading">{stage.subheading}</p>
            {(stage.paragraphs || (stage.description ? [stage.description] : [])).map((para, i) => (
              <p key={i} className="ees-stages-story-desc">{para}</p>
            ))}
            {stage.audiences && (
              <div className="ees-audiences">
                {stage.audiences.map((aud) => (
                  <div className="ees-audience" key={aud.title}>
                    <span className="ees-audience-icon" aria-hidden="true"><IconFeatUsers /></span>
                    <span className="ees-audience-rule" aria-hidden="true" />
                    <div className="ees-audience-text">
                      <h5 className="ees-audience-title">{aud.title}</h5>
                      <p className="ees-audience-desc">{aud.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right visual: a photo for the Reflection, the floating game illustration for the other stages */}
          {stage.report ? (
            <ReportCard report={stage.report} />
          ) : stage.photo ? (
            <div className="ees-stage-photo">
              <img src={stage.photo} alt="A facilitator leading a team conversation around a table" width="655" height="641" />
            </div>
          ) : (
            <div className="ees-stage-game">
              <GameVisual stage={stage} />
            </div>
          )}
        </div>
      </div>

      {stage.features && (
        <div className="ees-stages-features-card">
          <div className="ees-stages-features-inner">
            {stage.featuresTitle && <h4 className="ees-stages-features-title">{stage.featuresTitle}</h4>}
            {stage.features.map((feat, idx) => {
              const FeatIcon = feat.icon
              return (
                <div key={idx} className="ees-stage-feat-row">
                  <span className="ees-stage-feat-icon-box">
                    <FeatIcon />
                  </span>
                  <div className="ees-stage-feat-text">
                    <h5 className="ees-stage-feat-title">{feat.title}</h5>
                    <p className="ees-stage-feat-desc">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function EngageExperienceSection() {
  const [activeStage, setActiveStage] = useState(1)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const stackRef = useRef(null)
  const topRef = useRef(null)

  // Scroll-stack: each layer eases back (smaller + softer) while the next one slides over it
  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return
    const layers = [...stack.querySelectorAll('.be-top-layer, .be-slot')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      layers.forEach((el, i) => {
        const next = layers[i + 1]
        const p = !next || reduce ? 0 : Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / vh))
        el.style.setProperty('--stack-p', p.toFixed(4))
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])


  return (
    <section className="behavency-engage" id="engage" aria-label="Behavency Engage Experience">
     <div className="be-stack" ref={stackRef}>
      {/* LAYER 1 — stays pinned while the next screen slides up over it */}
      <div className="be-top-layer" ref={topRef}>
      {/* Background ambient wave and swooshes */}
      <svg className="be-bg" viewBox="0 0 2048 610" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="be-surface-wave" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".67"/>
            <stop offset=".65" stopColor="#fff" stopOpacity=".30"/>
            <stop offset="1" stopColor="#fff" stopOpacity=".65"/>
          </linearGradient>
        </defs>
        <path d="M0 0H2048V444C1883 495 1758 552 1572 520C1429 495 1354 447 1199 443C1040 443 972 515 801 548C467 611 231 544 0 373Z"/>
      </svg>
      <div className="be-swoosh be-swoosh--left" aria-hidden="true" />
      <div className="be-swoosh be-swoosh--right" aria-hidden="true" />

      {/* TOP: hero, matching the user reference screenshot */}
      <div className="be-hero2">
        <div className="be-h2-left">
          <StagePill num="02" title="Engage" sub="Build shared commitment" tone="green" />
          
          <h1 className="be-h2-title">
            <span className="be-h2-l1">They’ve seen<svg className="be-h2-sparks" viewBox="0 0 80 74" aria-hidden="true">            <path d="M10.6 5 9.6 40M52.8 14.8 29 47.8M76.1 50.3 40.7 62.2" fill="none" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" />          </svg></span> the score.<br />
            Now let them<br />
            <span className="be-h2-em">experience it.</span>
          </h1>
          <svg className="be-h2-underline" viewBox="0 0 700 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M6 34 Q300 4 690 30" fill="none" stroke="url(#be-h2-ul)" strokeWidth="5" strokeLinecap="round" />
            <defs><linearGradient id="be-h2-ul" x1="0" x2="1"><stop offset="0" stopColor="#8be29a" stopOpacity=".25" /><stop offset=".35" stopColor="#1fae3c" /><stop offset=".8" stopColor="#1fae3c" /><stop offset="1" stopColor="#8be29a" stopOpacity=".3" /></linearGradient></defs>
          </svg>
        </div>
        <div className="be-h2-divider" aria-hidden="true" />
        <div className="be-h2-right">
          <p className="be-h2-copy">A 45-minute team game puts the same behavioural areas to the test — without looking or feeling like work.</p>
          <div className="be-h2-actions">
          <button className="be-h2-btn" id="be-watch-cta" type="button" aria-label="See the video" onClick={() => setIsVideoOpen(true)}>
            <span className="be-h2-btn-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 6.5v11l9-5.5z" /></svg>
            </span>
            See video <span aria-hidden="true">→</span>
          </button>
          <a className="be-h2-btn be-h2-btn--ghost" href="#contact">Request a Demo</a>
          </div>
        </div>
      </div>
      </div>

      {/* LAYER 2 — slides up from the bottom over layer 1 */}
      <div className="be-slot be-slot--game">
        <GameScreen />
      </div>

      {/* LAYER 3 — Reflection, same size as the Game card */}
      <div className="be-slot be-slot--r">
        <ReflectionCard />
      </div>

      {/* LAYER 4 — Insight Report, same size */}
      <div className="be-slot be-slot--i">
        <InsightCard />
      </div>

     </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="be-modal"
          id="be-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Behavency game video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="be-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="be-modal-close"
              id="be-close-modal"
              aria-label="Close video"
              onClick={() => setIsVideoOpen(false)}
            >
              ×
            </button>
            <div className="be-modal-video" id="be-modal-video">
              <p>The video is not yet connected.<br />Set your video URL in the project configuration.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
