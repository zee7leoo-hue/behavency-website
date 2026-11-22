import React, { useState } from 'react'
import { useInView } from '../hooks'
import './Different.css'

/* "What makes Behavency different" (mobile): five points, each opens to show more. Drawn on the 400px canvas. */

const POINTS = [
  { title: 'We separate personal gaps from organisational barriers.', line: 'We show what the manager needs to develop, and what the organisation needs to fix around them.', more: 'Alongside the manager’s own assessment, the organisation completes a barriers survey: around 40 typical obstacles across nine management processes, such as decision-making, resources, priorities, approvals and work between departments. Each barrier is linked to the leadership areas it holds back. So when a manager scores low in an area, you can see whether it is a skill to develop, a condition to change, or both.' },
  { title: 'The manager and the conditions around them, in one picture.', line: 'A 360 shows how others see the manager. We add the workplace, resilience to change and, if needed, a structured interview.', more: 'The self-assessment and 360 feedback show the manager’s behaviour from two sides. The barriers survey describes the conditions they work in. The resilience assessment looks at how they handle change, across six elements such as realism, flexible thinking and initiative. An optional structured interview, run by a trained expert, adds the context questionnaires cannot capture. Everything is reported against the same six leadership areas, so the parts can be compared.' },
  { title: 'Managers and their teams, on the same model.', line: 'When a team and its manager both score low on Trust, you see the link and can talk about impact.', more: 'The team assessment uses the same six leadership areas as the manager’s profile. That makes it possible to read the two side by side: where they agree, where the team sees something the manager does not, and where a team result may reflect how the team is being led.' },
  { title: 'Our own training, matched to the results.', line: '40+ programmes linked to the six leadership areas. They are our own, so there is no content to source or bring.', more: 'The methodology links each leadership area to specific programmes, with separate options for line and mid-level managers, delivered face to face, online or as e-learning. Because the recommendations come from the same model as the assessment, the reasoning from result to training stays visible.' },
  { title: 'Training that turns into everyday practice.', line: 'Every training comes with a Masterplan: structure, tools, exercises and actions to use it at work.', more: 'Each training is followed by a Masterplan: a practical plan for applying what was learned. It sets out the structure of the follow-up period, the tools to use at work, exercises for specific situations, and concrete actions with dates. Managers have a way to keep working on the skill after the session ends, and HR has something to follow up on.' },
]

export default function Different() {
  const [ref, seen] = useInView(0.12)
  const [open, setOpen] = useState(-1)

  return (
    <section ref={ref} className={`df ${seen ? 'is-in' : ''}`} id="different">
      <div className="df-in">
        <p className="df-eyebrow rv" style={{ '--i': 0 }}>What makes Behavency different</p>
        <h2 className="df-title rv" style={{ '--i': 1 }}>Plenty of tools measure managers. <em>Here’s what we do differently.</em></h2>

        <ul className="df-list rv" style={{ '--i': 2 }}>
          {POINTS.map((p, i) => {
            const on = open === i
            return (
              <li key={p.title} className={`df-item ${on ? 'on' : ''}`}>
                <div className="df-row">
                  <span className="df-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <button type="button" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}
                    aria-label={`${on ? 'Show less about' : 'Show more about'}: ${p.title}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      {on ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                    </svg>
                  </button>
                </div>
                {on && (
                  <>
                    <p className="df-line">{p.line}</p>
                    <p className="df-more">{p.more}</p>
                  </>
                )}
              </li>
            )
          })}
        </ul>

        <p className="df-close rv" style={{ '--i': 3 }}><i aria-hidden="true" /><span>Assessment, training and practice in one journey. Nothing gets lost between steps.</span></p>
      </div>
    </section>
  )
}
