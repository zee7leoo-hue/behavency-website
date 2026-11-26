import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import './Packages.css'

const packages = [
  {
    name: 'Proficiency',
    tagline: 'Точечная оценка и личные выводы',
    color: '#1E3A5F',
    includes: ['Профиль управленческого поведения (самооценка)', 'Обратная связь 360°', 'Индивидуальный отчёт руководителя', 'Optional: Structured Interview, with Interview Studio practice for your HR team'],
    bestFor: 'Тем, кто начинает с самооценки руководителей и обратной связи стейкхолдеров.',
  },
  {
    name: 'Complete',
    tagline: 'Полная диагностика: люди, команды и организация',
    color: '#0F766E',
    featured: true,
    includes: ['Everything in Proficiency', 'Организационные барьеры', 'Устойчивость к изменениям', 'Оценка команды по тем же шести областям', 'Индивидуальные отчёты и отчёт для руководства'],
    bestFor: 'Тем, кто хочет понять не только людей, но и условия вокруг них.',
  },
  {
    name: 'Flex',
    tagline: 'Choose the combination that fits your specific situation',
    color: '#B45309',
    includes: ['Any combination of the above assessments', 'Настраивается под группу или программу', 'Обсудим с вами подходящий объём'],
    bestFor: 'Тем, у кого особый контекст или уже есть своя модель, с которой нужно работать.',
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
            Every organisation starts from a different place. Choose the depth that fits yours, or let us shape it with you.
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
          The team game, training and re-assessment are planned with you on top of any package. Pricing is tailored to your organisation's size and programme scope.{' '}
          <a href="#contact">Speak with us</a> — no obligation.
        </p>
      </div>
    </section>
  )
}
