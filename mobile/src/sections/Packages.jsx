import React, { useState } from 'react'
import './Packages.css'

/* "Assessment packages" (mobile): mint background, emerald accent. Three cards that open and close; Complete is open to start
   with and drawn as a solid emerald card. Each card shows how deep it goes: Individual, Team, Organisation. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const One = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="8" r="3.4" /><path d="M5 20v-.8A5.6 5.6 0 0 1 10.6 13.6h2.8A5.6 5.6 0 0 1 19 19.2v.8" /></svg>)
const Stack = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 2.8 2.6 7.6 12 12.4l9.4-4.8z" /><path d="m2.6 12 9.4 4.8 9.4-4.8M2.6 16.4l9.4 4.8 9.4-4.8" /></svg>)
const Mix = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2.2" /><circle cx="10" cy="17" r="2.2" /></svg>)
const Check = () => (<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8.4 3.2 3.1L13 4.6" /></svg>)
const Plus = () => (<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" /></svg>)

const LEVELS = ['Individual', 'Team', 'Organisation']
const PACKS = [
  {
    key: 'proficiency', name: 'Proficiency', Icon: One, lede: 'A focused assessment and individual insight', depth: [1, 0, 0],
    items: ['Managerial Profile (self-assessment)', '360 Feedback', 'Individual Manager Report', 'Optional: Structured Interview'],
    best: 'Organizations starting with manager self-awareness and stakeholder feedback.',
  },
  {
    key: 'complete', name: 'Complete', Icon: Stack, lede: 'The full diagnostic picture — individual, team, and organizational', depth: [1, 1, 1], badge: 'Most complete',
    items: ['Everything in Proficiency', 'Workplace Effectiveness Survey', 'Resilience to Change Assessment', 'Team Assessment (same model)', 'Individual + Executive Reports'],
    best: 'Organizations that want to understand people AND the conditions around them.',
  },
  {
    key: 'flex', name: 'Flex', Icon: Mix, lede: 'Choose the combination that fits your specific situation', depth: null,
    items: ['Any combination of the above assessments', 'Configurable by cohort or programme', 'Speak with us to design the right scope'],
    best: 'Organizations with a specific context or existing frameworks to work within.',
  },
]

export default function Packages() {
  const [open, setOpen] = useState(1)
  return (
    <section className="pk" id="packages">
      <p className="pk-eyebrow"><i aria-hidden="true" />Assessment packages</p>
      <h2 className="pk-title">Start at the depth <em>your context requires.</em></h2>
      <p className="pk-text">No invented pricing. The right package depends on what your organization needs.</p>

      <div className="pk-list">
        {PACKS.map((p, i) => {
          const on = open === i
          return (
            <article key={p.key} className={`pk-card pk-card--${p.key} ${on ? 'on' : ''}`}>
              {p.badge && <span className="pk-badge">{p.badge}</span>}
              <button type="button" className="pk-head" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
                <span className="pk-ico"><p.Icon /></span>
                <span className="pk-ht">
                  <strong>{p.name}</strong>
                  <small>{p.lede}</small>
                </span>
                <span className="pk-tog"><Plus /></span>
              </button>
              <div className="pk-depth" aria-label={p.depth ? `Covers: ${LEVELS.filter((_, k) => p.depth[k]).join(', ')}` : 'Your own mix'}>
                {p.depth
                  ? LEVELS.map((l, k) => <span key={l} className={p.depth[k] ? 'y' : ''}>{l}</span>)
                  : <span className="mix">Your own mix of levels</span>}
              </div>
              <div className="pk-more" hidden={!on}>
                <ul>{p.items.map((t) => <li key={t}><Check />{t}</li>)}</ul>
                <div className="pk-best"><small>Best for</small><p>{p.best}</p></div>
                <a className="pk-link" href="#contact">Explore {p.name} <span aria-hidden="true">→</span></a>
              </div>
            </article>
          )
        })}
      </div>

      <p className="pk-foot">Pricing is tailored to your organization’s size and programme scope. <a href="#contact">Speak with us</a> — no obligation.</p>
    </section>
  )
}
