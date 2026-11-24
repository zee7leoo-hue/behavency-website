import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './HowItRuns.css'

/* "How it runs": a five-step timeline from kick-off to measurable change. */

const STEPS = [
  { who: 'Week 1', title: 'Kick-off', text: 'We agree the goals, the group and the timeline. Participants get their invitations.', dur: 'You and Behavency' },
  { who: 'Weeks 2–4', title: 'Assessment', text: 'About 1.5 hours per person, done at their own pace.', dur: 'Participants' },
  { who: 'Weeks 4–6', title: 'Team game and reflection', text: 'A 2.5-hour session, then the team’s Insight Report.', dur: 'Participants and facilitator' },
  { who: 'From week 6', title: 'Training and Masterplans', text: 'Programmes matched to each person’s priorities. Length depends on the programmes chosen.', dur: 'Participants' },
  { who: '3 months after training', title: 'Re-assessment', text: 'The same questionnaires, the same people, compared with the starting point.', dur: 'Participants' },
]

export default function HowItRuns() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="hir" id="how-it-runs" ref={ref}>
      <div className="container">
        <motion.div className="hir__head"
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="hir__label"><i>→</i><span className="hir__ln" /><b>How it runs</b><span className="hir__sep" /><span className="hir__t">From kick-off to measurable change</span></span>
          <h2 className="headline hir__headline">One programme, <em>five clear steps.</em></h2>
          <p className="hir__lead">You always know what happens when, and who is involved.</p>
        </motion.div>

        <ol className="hir__tl">
          {STEPS.map((s, i) => (
            <motion.li key={s.title} className="hir__step"
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}>
              <span className="hir__node">{i + 1}</span>
              <div className="hir__box">
                <span className="hir__who">{s.who}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="hir__dur">{s.dur}</span>
              </div>
            </motion.li>
          ))}
        </ol>
        <p className="hir__foot"></p>
      </div>
    </section>
  )
}
