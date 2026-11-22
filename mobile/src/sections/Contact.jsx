import React from 'react'
import ContactForm from '../ContactForm'
import './Contact.css'

/* Contact (mobile): short intro, three ways to start, and the "Get in touch" form (shared with the hero's popup). */

const WAYS = [
  { t: '30-min overview', p: 'See the full journey from assessment to measurement.' },
  { t: 'Live demo', p: 'Walk through the platform with real example data.' },
  { t: 'Custom conversation', p: 'If you have something specific in mind, we’ll design the right starting point.' },
]

export default function Contact() {
  return (
    <section className="ct" id="contact">
      <p className="ct-eyebrow">Ready to start?</p>
      <h2 className="ct-h">Let’s talk about <em>your people.</em></h2>
      <p className="ct-sub">Tell us about your organization and where you want to start. We’ll walk you through what Behavency would look like for your specific context.</p>

      <ul className="ct-ways">
        {WAYS.map((w) => <li key={w.t}><b>{w.t}</b><span>{w.p}</span></li>)}
      </ul>

      <ContactForm />
    </section>
  )
}
