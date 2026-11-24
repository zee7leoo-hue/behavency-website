import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './WhatMakesDifferent.css'

const points = [
  {
    title: 'One journey, start to finish.',
    line: 'Assessment, team game, training and re-assessment, built on one model and run by one team.',
    more: 'Often each piece lives somewhere else: a survey run in-house, an assessment from one provider, a workshop from another. Different methods, different reports, and nobody can say what changed. Here every step uses the same six areas, so results lead straight to the right development, and the re-assessment shows the difference.',
  },
  {
    title: 'Personal gaps and organisational barriers, kept apart.',
    line: 'We show what people need to develop, and what the organisation needs to fix around them.',
    more: 'Alongside the assessment, managers complete the Workplace Effectiveness Survey: around 40 typical obstacles across nine management processes. Each barrier is linked to the areas it holds back, so a low score shows whether it is a skill to develop, a condition to change, or both.',
  },
  {
    title: 'Managers and teams, on the same model.',
    line: 'Develop managers, teams or both. When a team and its manager both score low on Trust, you see the link.',
    more: 'Team and manager assessments use the same six areas, so the results can be read side by side: where they agree, and where the team sees something the manager does not.',
  },
  {
    title: 'People feel the gaps, not just read them.',
    line: 'A team game and a facilitated reflection turn scores into something people experience and commit to.',
    more: 'In a 2.5-hour session, the team sees the same behaviours show up live, talks through why, and then receives its Insight Report with practical tips.',
  },
  {
    title: 'Our own training, matched to the results.',
    line: 'Programmes for line managers, managers of managers and teams, each linked to the six areas.',
    more: 'Every result points to specific programmes, so nobody has to guess what to train next. They run in person, online or as e-learning, and each one comes with a Masterplan to practise it at work.',
  },
  {
    title: 'Interviewers practise before the real thing.',
    line: 'In our Interview Studio they practise with four AI characters before the real interviews.',
    more: 'A ready-made guide for every interview, AI suggestions on what to ask next during it, and a summary afterwards that the interviewer checks and decides on.',
  },
  {
    title: 'Proof of change, not just completion.',
    line: 'Before-and-after results you can show leadership.',
    more: 'Results are compared with the starting point, area by area: behaviour from the self-assessment and 360, and whether the barriers have eased.',
  },
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
            Most providers do one piece.<br />
            <em>So nobody can say what changed.</em>
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

      </div>
    </section>
  )
}
