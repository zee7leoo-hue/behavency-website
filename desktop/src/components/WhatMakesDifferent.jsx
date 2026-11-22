import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './WhatMakesDifferent.css'

const points = [
  { title: 'We separate personal gaps from organisational barriers.', line: 'We show what the manager needs to develop, and what the organisation needs to fix around them.', more: 'Alongside the manager’s own assessment, the organisation completes a barriers survey: around 40 typical obstacles across nine management processes, such as decision-making, resources, priorities, approvals and work between departments. Each barrier is linked to the leadership areas it holds back. So when a manager scores low in an area, you can see whether it is a skill to develop, a condition to change, or both.' },
  { title: 'The manager and the conditions around them, in one picture.', line: 'A 360 shows how others see the manager. We add the workplace, resilience to change and, if needed, a structured interview.', more: 'The self-assessment and 360 feedback show the manager’s behaviour from two sides. The barriers survey describes the conditions they work in. The resilience assessment looks at how they handle change, across six elements such as realism, flexible thinking and initiative. An optional structured interview, run by a trained expert, adds the context questionnaires cannot capture. Everything is reported against the same six leadership areas, so the parts can be compared.' },
  { title: 'Managers and their teams, on the same model.', line: 'When a team and its manager both score low on Trust, you see the link and can talk about impact.', more: 'The team assessment uses the same six leadership areas as the manager’s profile. That makes it possible to read the two side by side: where they agree, where the team sees something the manager does not, and where a team result may reflect how the team is being led.' },
  { title: 'Our own training, matched to the results.', line: '40+ programmes linked to the six leadership areas. They are our own, so there is no content to source or bring.', more: 'The methodology links each leadership area to specific programmes, with separate options for line and mid-level managers, delivered face to face, online or as e-learning. Because the recommendations come from the same model as the assessment, the reasoning from result to training stays visible.' },
  { title: 'Training that turns into everyday practice.', line: 'Every training comes with a Masterplan: structure, tools, exercises and actions to use it at work.', more: 'Each training is followed by a Masterplan: a practical plan for applying what was learned. It sets out the structure of the follow-up period, the tools to use at work, exercises for specific situations, and concrete actions with dates. Managers have a way to keep working on the skill after the session ends, and HR has something to follow up on.' },
]

export default function WhatMakesDifferent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [open, setOpen] = useState(-1)

  return (
    <section className="different chapter chapter--cream" id="different" ref={ref}>
      <div className="container">
        <motion.div className="different__header"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="different__caption">What makes Behavency different</p>
          <h2 className="different__headline">
            Plenty of tools measure managers.<br />
            <em>Here’s what we do differently.</em>
          </h2>
        </motion.div>

        <div className="different__points">
          {points.map((p, i) => {
            const isOpen = open === i
            return (
              <motion.div key={p.title} className={`different__point ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}>
                <span className="different__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="different__body">
                  <h3 className="different__title">{p.title}</h3>
                  <p className="different__text">{p.line}</p>
                  {isOpen && <p className="different__more">{p.more}</p>}
                </div>
                <button type="button" className="different__toggle" onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen} aria-label={`${isOpen ? 'Show less about' : 'Show more about'}: ${p.title}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                  </svg>
                </button>
              </motion.div>
            )
          })}
        </div>

        <motion.p className="different__close"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
          <span aria-hidden="true" />
          Assessment, training and practice in one journey. Nothing gets lost between steps.
        </motion.p>
      </div>
    </section>
  )
}
