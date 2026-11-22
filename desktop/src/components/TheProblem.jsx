import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './TheProblem.css'

const pains = [
  { q: 'Why is this team not performing?', a: "Is it the manager's behaviour — or the organization around them?" },
  { q: 'We ran a training programme last year.', a: 'Did it actually change anything? Nobody knows.' },
  { q: 'We have survey data from last quarter.', a: "But it's sitting in a spreadsheet. Nothing happened." },
  { q: 'Our managers say the right things.', a: 'Their teams experience something different.' },
]

export default function TheProblem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="problem chapter chapter--ink" id="problem" ref={ref}>
      <div className="problem__container">

        {/* Eyebrow + Headline */}
        <motion.div className="problem__top"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <p className="problem__eyebrow">The reality in most organizations</p>
          <h2 className="problem__headline">
            Most HR teams have data.<br/>
            <em>Very few know what to do with it.</em>
          </h2>
        </motion.div>

        {/* 2×2 Card grid */}
        <div className="problem__grid">
          {pains.map((p, i) => (
            <motion.div key={i} className="problem__card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.09 }}>
              <p className="problem__q">{p.q}</p>
              <div className="problem__divider" />
              <p className="problem__a">{p.a}</p>
            </motion.div>
          ))}
        </div>

        {/* Concluding statement — larger, stronger, section conclusion */}
        <motion.div className="problem__footer"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}>
          <p className="problem__conclusion">
            Behavency connects the dots — from data to development to measurable results.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
