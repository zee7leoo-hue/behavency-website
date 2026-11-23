import React, { useState } from 'react'
import { useInView } from '../hooks'
import './Different.css'

/* "What makes Behavency different" (mobile): seven points, each opens to show more. Drawn on the 400px canvas. */

const POINTS = [
  { title: 'One journey, start to finish.', line: 'Assessment, team game, training and re-assessment, built on one model and run by one team.', more: 'Often each piece lives somewhere else: a survey run in-house, an assessment from one provider, a workshop from another. Different methods, different reports, and nobody can say what changed. Here every step uses the same six areas, so results lead straight to the right development, and the re-assessment shows the difference.' },
  { title: 'Personal gaps and organisational barriers, kept apart.', line: 'We show what people need to develop, and what the organisation needs to fix around them.', more: 'Alongside the assessment, managers complete the Workplace Effectiveness Survey: around 40 typical obstacles across nine management processes. Each barrier is linked to the areas it holds back, so a low score shows whether it is a skill to develop, a condition to change, or both.' },
  { title: 'Managers and teams, on the same model.', line: 'Develop managers, teams or both. When a team and its manager both score low on Trust, you see the link.', more: 'Team and manager assessments use the same six areas, so the results can be read side by side: where they agree, and where the team sees something the manager does not.' },
  { title: 'People feel the gaps, not just read them.', line: 'A team game and a facilitated reflection turn scores into something people experience and commit to.', more: 'In a 2.5-hour session, the team sees the same behaviours show up live, talks through why, and then receives its Insight Report with practical tips.' },
  { title: 'Our own training, matched to the results.', line: 'Programmes for line managers, managers of managers and teams, each linked to the six areas.', more: 'Every result points to specific programmes, so nobody has to guess what to train next. They run in person, online or as e-learning, and each one comes with a Masterplan to practise it at work.' },
  { title: 'Your HR team trains to run the interview.', line: 'In our Interview Studio they practise with four AI characters before the real interviews.', more: 'A ready-made guide for every interview, AI suggestions on what to ask next during it, and a summary afterwards that the interviewer checks and decides on.' },
  { title: 'Proof of change, not just completion.', line: 'The same people answer the same questions again, 3 months after the training.', more: 'Results are compared with the starting point, area by area: behaviour from the self-assessment and 360, and whether the barriers have eased.' },
]

export default function Different() {
  const [ref, seen] = useInView(0.12)
  const [open, setOpen] = useState(-1)

  return (
    <section ref={ref} className={`df ${seen ? 'is-in' : ''}`} id="different">
      <div className="df-in">
        <p className="df-eyebrow rv" style={{ '--i': 0 }}>What makes Behavency different</p>
        <h2 className="df-title rv" style={{ '--i': 1 }}>Most providers do one piece. <em>We connect the whole journey.</em></h2>

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
