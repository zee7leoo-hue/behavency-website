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
    body: "This isn't another survey you'll never see the results of. The assessment feeds directly into your own report, your own development priorities, and your own programme. It's about you — not about ticking a box.",
    detail: 'Line Managers, Mid Managers, Team Leads',
    color: '#0F766E',
  },
  {
    title: 'Leadership & Boards',
    body: 'You need to know whether your management layer is fit for where the organisation is going. And whether the money spent on development last year made any difference. Behavency gives you an organisational view that makes both questions answerable.',
    detail: 'CEOs, CHROs, Executive Teams, Investors',
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
            Three different people.<br/>
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
