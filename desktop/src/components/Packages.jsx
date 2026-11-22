import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import './Packages.css'

const packages = [
  {
    name: 'Proficiency',
    tagline: 'A focused assessment and individual insight',
    color: '#1E3A5F',
    includes: ['Managerial Profile (self-assessment)', '360 Feedback', 'Individual Manager Report', 'Optional: Structured Interview'],
    bestFor: 'Organizations starting with manager self-awareness and stakeholder feedback.',
  },
  {
    name: 'Complete',
    tagline: 'The full diagnostic picture — individual, team, and organizational',
    color: '#0F766E',
    featured: true,
    includes: ['Everything in Proficiency', 'Workplace Effectiveness Survey', 'Resilience to Change Assessment', 'Team Assessment (same model)', 'Individual + Executive Reports'],
    bestFor: 'Organizations that want to understand people AND the conditions around them.',
  },
  {
    name: 'Flex',
    tagline: 'Choose the combination that fits your specific situation',
    color: '#B45309',
    includes: ['Any combination of the above assessments', 'Configurable by cohort or programme', 'Speak with us to design the right scope'],
    bestFor: 'Organizations with a specific context or existing frameworks to work within.',
  },
]

export default function Packages() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })

  return (
    <section className="packages chapter chapter--white" id="packages" ref={ref}>
      <div className="container">
        <motion.div className="packages__header"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="caption" style={{ marginBottom: 16 }}>Assessment packages</p>
          <h2 className="headline" style={{ marginBottom: 16 }}>
            Start at the depth<br/><em>your context requires.</em>
          </h2>
          <p className="subhead">
            No invented pricing. The right package depends on what your organization needs.
          </p>
        </motion.div>

        <div className="packages__grid">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name}
              className={`packages__card ${pkg.featured ? 'packages__card--featured' : ''}`}
              style={{ '--pc': pkg.color }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.13 }}>

              {pkg.featured && <div className="packages__badge" style={{ background: pkg.color }}>Most complete</div>}

              <div className="packages__top">
                <h3 className="packages__name" style={{ color: pkg.color }}>{pkg.name}</h3>
                <p className="packages__tagline">{pkg.tagline}</p>
              </div>

              <ul className="packages__list">
                {pkg.includes.map(item => (
                  <li key={item} className="packages__item">
                    <Check size={14} style={{ color: pkg.color, flexShrink: 0 }}/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="packages__best-for">
                <span className="packages__bf-label">Best for</span>
                <p className="packages__bf-text">{pkg.bestFor}</p>
              </div>

              <a href="#contact" className="packages__cta" style={{ color: pkg.color, borderColor: pkg.color + '40' }}>
                Explore {pkg.name} →
              </a>

              <div className="packages__bar" style={{ background: pkg.color }}/>
            </motion.div>
          ))}
        </div>

        <p className="packages__note">
          Pricing is tailored to your organization's size and programme scope.{' '}
          <a href="#contact">Speak with us</a> — no obligation.
        </p>
      </div>
    </section>
  )
}
