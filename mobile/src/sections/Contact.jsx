import React from 'react'
import ContactForm from '../ContactForm'
import './Contact.css'

/* Contact (mobile): short intro, three ways to start, and the "Get in touch" form (shared with the hero's popup). */

const WAYS = [
  { t: '30-min overview', p: 'Покажем весь путь — от оценки до измерения результатов.' },
  { t: 'Live demo', p: 'Покажем платформу на реальных примерах данных.' },
  { t: 'Custom conversation', p: 'Если у вас конкретная задача, подберём подходящую точку старта.' },
]

export default function Contact() {
  return (
    <section className="ct" id="contact">
      <p className="ct-eyebrow">Готовы начать?</p>
      <h2 className="ct-h">Поговорим <em>о ваших людях.</em></h2>
      <p className="ct-sub">Tell us about your organisation and where you want to start. We’ll walk you through what Behavency would look like for your specific context.</p>

      <ul className="ct-ways">
        {WAYS.map((w) => <li key={w.t}><b>{w.t}</b><span>{w.p}</span></li>)}
      </ul>

      <ContactForm />
    </section>
  )
}
