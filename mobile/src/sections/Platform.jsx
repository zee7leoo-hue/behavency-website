import React from 'react'
import { IconUsers, IconBarsFilled, IconTrend, IconChevronDown, IconArrowRight } from '../Icons'
import { useInView, useCountUp } from '../hooks'
import './Platform.css'

/* "From insight to action" (mobile): the platform dashboard.
   Same walk-through as the desktop section: the pieces ease in one after another, numbers count up,
   the progress bar fills. */

const MANAGERS = [
  { ini: 'FK', name: 'Frederick K.', line: 'Training in progress · 75%', chip: 'Build', tone: 'green', pct: 75 },
  { ini: 'SL', name: 'Sofia L.', line: 'Assessment completed · Results ready', chip: 'Identify', tone: 'blue', pct: 100 },
  { ini: 'HN', name: 'Hanna N.', line: 'Development action overdue', chip: 'Needs attention', tone: 'red' },
]

export default function Platform() {
  const [ref, seen] = useInView(0.3)
  const managers = useCountUp(35, seen, { delay: 900 })
  const journeys = useCountUp(24, seen, { delay: 1050 })
  const improved = useCountUp(63, seen, { delay: 1200 })

  return (
    <section ref={ref} className={`pf ${seen ? 'is-in' : ''}`} id="platform">
      <div className="pf-eyebrow rv" style={{ '--i': 0 }}>
        <span>THE PLATFORM</span><i aria-hidden="true" />
      </div>
      <h2 className="pf-title rv" style={{ '--i': 1 }}>From insight to action.<br /><em>All in one place.</em></h2>
      <p className="pf-sub rv" style={{ '--i': 2 }}>See where the risk is, close the gaps that matter, and prove the change — on one connected platform.</p>

      <div className="pf-card rv" style={{ '--i': 3 }}>
        <div className="pf-card-head">
          <div>
            <h3>Leadership Development Programme <IconChevronDown /></h3>
            <p>35 managers · Jan – Dec 2026</p>
          </div>
          <span className="pf-live"><i aria-hidden="true" />Live</span>
        </div>

        <div className="pf-kpis">
          <div className="pf-kpi pf-k" style={{ '--k': 0 }}>
            <span className="pf-kpi-ico pf-kpi-ico--blue"><IconUsers /></span>
            <div><strong>{managers}</strong><span>Managers</span></div>
          </div>
          <div className="pf-kpi pf-k" style={{ '--k': 1 }}>
            <span className="pf-kpi-ico pf-kpi-ico--violet"><IconBarsFilled /></span>
            <div><strong>{journeys}</strong><span>Journeys</span></div>
          </div>
          <div className="pf-kpi pf-k" style={{ '--k': 2 }}>
            <span className="pf-kpi-ico pf-kpi-ico--green"><IconTrend /></span>
            <div><strong>{improved}%</strong><span className="pf-small">Improved<br />at re-assessment</span></div>
          </div>
        </div>

        <div className="pf-list-head pf-k" style={{ '--k': 3 }}>
          <h4>Manager development</h4>
          <a href="#platform">View all <IconArrowRight /></a>
        </div>

        <ul className="pf-rows">
          {MANAGERS.map((m, i) => (
            <li key={m.ini} className={`pf-row pf-k${m.pct ? ' pf-row--bar' : ''}`} style={{ '--k': 4 + i }}>
              <span className="pf-ini">{m.ini}</span>
              <div className="pf-who">
                <strong>{m.name}</strong>
                <span>{m.line}</span>
              </div>
              <span className={`pf-chip pf-chip--${m.tone}`}>{m.tone === 'green' && <i aria-hidden="true" />}{m.chip}</span>
              {m.pct && <span className="pf-track"><i style={{ '--w': `${m.pct}%` }} /></span>}
            </li>
          ))}
        </ul>
      </div>

      <svg className="pf-wave" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 24 C80 8 150 10 220 26 C290 42 350 34 400 14 L400 60 L0 60 Z" fill="#eceefb" />
        <path d="M0 40 C90 26 170 30 240 42 C300 52 360 46 400 34 L400 60 L0 60 Z" fill="#f1f2fc" />
      </svg>
    </section>
  )
}
