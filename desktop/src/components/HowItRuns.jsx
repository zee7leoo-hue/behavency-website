import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './HowItRuns.css'

/* "How it runs": a five-step timeline from kick-off to measurable change. */

const STEPS = [
  { who: 'You and Behavency', title: 'Kick-off', text: 'We agree the goals, the group of managers and the timeline. Participants get their invitations.', dur: '≈ 1 week' },
  { who: 'Managers and their teams', title: 'Assessment', text: 'Self-assessment, 360 feedback, the barriers survey and resilience, with optional interviews.', dur: '≈ 2–3 weeks' },
  { who: 'Participants and facilitator', title: 'Results and game', text: 'Individual and group reports. The team game and reflection turn results into commitment.', dur: '≈ 1–2 weeks' },
  { who: 'Managers', title: 'Training and Masterplans', text: 'Programmes matched to each manager’s priorities, each with a Masterplan for practice at work.', dur: '≈ 2–3 months' },
  { who: 'You and Behavency', title: 'Measure', text: 'A follow-up check shows what changed in behaviour and in the conditions around the managers.', dur: 'After 3–6 months' },
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
          <p className="hir__lead">You always know what happens next, who is involved and roughly how long it takes.</p>
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
        <p className="hir__foot">Timings are placeholders to confirm.</p>
      </div>
    </section>
  )
}
