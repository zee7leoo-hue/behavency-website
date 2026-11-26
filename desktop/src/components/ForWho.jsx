import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './ForWho.css'

const roles = [
  {
    title: 'HR & L&D Teams',
    body: "You need evidence. You've run programmes before and had no way to prove they worked. Behavency gives you before-and-after data, participant-level reporting, and an organisational view that speaks the language of a board.",
    detail: 'Facilitators, HR Directors, L&D Managers, Organisational Development',
    color: '#1E3A5F',
  },
  {
    title: 'Managers & Participants',
    body: "Это не очередной опрос, результатов которого вы так и не увидите. Оценка сразу превращается в ваш личный отчёт, ваши приоритеты развития и вашу программу. Это про вас, а не для галочки.",
    detail: 'Линейные руководители, руководители среднего звена, руководители групп',
    color: '#0F766E',
  },
  {
    title: 'Leadership & Boards',
    body: 'Вам нужно понять, готово ли управленческое звено к тому, куда движется компания. И дали ли что-нибудь деньги, вложенные в развитие в прошлом году. Behavency показывает картину по всей организации — и на оба вопроса появляется ответ.',
    detail: 'Генеральные директора, HR-директора, топ-менеджмент, инвесторы',
    color: '#6D28D9',
  },
]

export default function ForWho() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })

  return (
    <section className="forwho chapter chapter--cream2" id="who" ref={ref}>
      <div className="container">
        <motion.div className="forwho__header"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="caption" style={{ marginBottom: 16 }}>Who it's for</p>
          <h2 className="headline">
            Три разных человека.<br/>
            <em>One connected system.</em>
          </h2>
        </motion.div>

        <div className="forwho__grid">
          {roles.map((r, i) => (
            <motion.div key={r.title} className="forwho__card"
              style={{ '--rc': r.color }}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12 }}>
              <div className="forwho__accent" style={{ background: r.color }}/>
              <div className="forwho__content">
                <h3 className="forwho__title" style={{ color: r.color }}>{r.title}</h3>
                <p className="forwho__body">{r.body}</p>
                <div className="forwho__detail">
                  <span className="forwho__detail-label">Includes</span>
                  <span>{r.detail}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
