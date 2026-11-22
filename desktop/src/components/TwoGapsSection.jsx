import React from 'react'
import './TwoGapsSection.css'

/* "Two kinds of gaps" — Not every problem is the manager's. */

const MANAGER_ROWS = [
  { label: 'Focus & Prioritization', zone: 'Development zone', tone: 'dev' },
  { label: 'Execution & Accountability', zone: 'Medium zone', tone: 'med' },
  { label: 'Trust & Inclusion', zone: 'Medium zone', tone: 'med' },
]
const ORG_ROWS = [
  'Too many tasks running at the same time',
  'Lengthy approval procedures for decisions',
  'Decisions about the unit taken without its manager',
]

export default function TwoGapsSection() {
  return (
    <section className="tg-outer" id="two-gaps">
      <div className="tg">
        <div className="tg-eyebrow"><span className="tg-dash" aria-hidden="true" />TWO KINDS OF GAPS</div>
        <h2 className="tg-title">Not every problem <em>is the manager’s.</em></h2>
        <p className="tg-sub">
          Some gaps are the manager’s to close. Others are built into the organisation — and{' '}<br />
          no training will fix them. We show you which is which.
        </p>

        <div className="tg-cards">
          <article className="tg-card tg-card--mgr">
            <header className="tg-head">
              <span className="tg-ico tg-ico--mgr" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="7.6" r="4.3" /><path d="M3.9 21.2c0-4.7 3.4-7.5 8.1-7.5s8.1 2.8 8.1 7.5c0 .5-.4.8-.8.8H4.7c-.4 0-.8-.3-.8-.8z" /></svg>
              </span>
              <h3>For the manager to develop</h3>
            </header>
            <p className="tg-from">From the Managerial Profile, 360° and interview</p>
            <ul className="tg-rows">
              {MANAGER_ROWS.map((r) => (
                <li key={r.label} className="tg-row">
                  <span>{r.label}</span>
                  <span className={`tg-badge tg-badge--${r.tone}`}>{r.zone}</span>
                </li>
              ))}
            </ul>
            <p className="tg-link tg-link--blue">→ Targeted development in Build</p>
          </article>

          <article className="tg-card tg-card--org">
            <header className="tg-head">
              <span className="tg-ico tg-ico--org" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 21V4.6c0-.9.7-1.6 1.6-1.6h6.8c.9 0 1.6.7 1.6 1.6V21z" />
                  <path d="M15 9.4h2.9c.9 0 1.6.7 1.6 1.6v10H15z" opacity=".78" />
                  <g className="tg-win"><rect x="7.4" y="6" width="1.7" height="1.7" /><rect x="10.9" y="6" width="1.7" height="1.7" /><rect x="7.4" y="9.6" width="1.7" height="1.7" /><rect x="10.9" y="9.6" width="1.7" height="1.7" /><rect x="7.4" y="13.2" width="1.7" height="1.7" /><rect x="10.9" y="13.2" width="1.7" height="1.7" /></g>
                </svg>
              </span>
              <h3>For the organisation to fix</h3>
            </header>
            <p className="tg-from">From the barriers survey</p>
            <ul className="tg-rows">
              {ORG_ROWS.map((t) => <li key={t} className="tg-row"><span>{t}</span></li>)}
            </ul>
            <p className="tg-link tg-link--amber">→ A clear list for leadership and HR</p>
          </article>
        </div>

        <p className="tg-foot">
          So you invest where change is possible — and stop training people for problems the organisation{' '}<br />
          created.
        </p>
      </div>
    </section>
  )
}
