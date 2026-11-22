import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import './StageBuild.css'

const modules = [
  { area: 'Clarity & Alignment', module: 'Effective Goal Setting', format: 'E-learning · 4h', color: '#1E3A5F' },
  { area: 'Clarity & Alignment', module: 'Situational Leadership', format: 'In-Person · 1 day', color: '#1E3A5F' },
  { area: 'Execution & Accountability', module: 'Effective Delegation', format: 'Blended · 3h', color: '#B45309' },
  { area: 'Collaboration & Influence', module: 'Influencing Without Authority', format: 'Live Online · 6h', color: '#0F766E' },
]

export default function StageBuild() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })

  return (
    <section className="build chapter chapter--white" id="build" ref={ref}>
      <div className="container">
        <motion.div className="chapter-label"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          <span className="chapter-label__num">03</span>
          <div className="chapter-label__line"/>
          <span className="chapter-label__text" style={{ color: 'var(--s3)' }}>Build</span>
        </motion.div>

        <div className="split">
          <motion.div className="split__text"
            initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <h2 className="headline" style={{ marginBottom: 24 }}>
              Training that targets<br/>
              <em>the actual gaps</em> —<br/>
              not a generic catalogue.
            </h2>
            <p className="body-copy" style={{ marginBottom: 24 }}>
              After assessment and the game, we know exactly what each person needs to work on.
              Behavency maps that directly to a set of recommended development modules —
              personal to each participant.
            </p>
            <p className="body-copy" style={{ marginBottom: 36 }}>
              Modules are available as e-learning, live online, in-person, and blended formats.
              The facilitator sets the delivery approach at programme level — and makes
              individual exceptions only when genuinely needed.
            </p>
            <div className="build__principle">
              <span className="build__principle-icon">→</span>
              <p>
                <strong>The recommendation comes from the data.</strong> The delivery format is a separate decision —
                and it doesn't change what a person needs.
              </p>
            </div>
          </motion.div>

          {/* Recommendation visual */}
          <motion.div className="build__visual"
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>

            {/* Participant card */}
            <div className="build__participant">
              <div className="build__p-avatar">SM</div>
              <div>
                <div className="build__p-name">Sarah Mitchell</div>
                <div className="build__p-role">Regional Manager</div>
              </div>
              <div className="build__p-tag">3 priorities identified</div>
            </div>

            {/* Arrow */}
            <div className="build__arrow">
              <div className="build__arrow-line"/>
              <div className="build__arrow-label">Behavency recommends</div>
            </div>

            {/* Module recommendations */}
            <div className="build__modules">
              {modules.map((m, i) => (
                <motion.div key={i} className="build__module"
                  style={{ borderLeftColor: m.color }}
                  initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="build__module-area" style={{ color: m.color }}>{m.area}</div>
                  <div className="build__module-name">{m.module}</div>
                  <div className="build__module-format">{m.format}</div>
                </motion.div>
              ))}
            </div>

            {/* Masterplan note */}
            <div className="build__masterplan">
              <div className="build__masterplan-icon">✦</div>
              <div>
                <div className="build__masterplan-title">Masterplan included</div>
                <div className="build__masterplan-desc">
                  Each module has practical follow-up activities — behavioural nudges, reflection prompts,
                  and job-specific tools — to embed the learning on the job.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
