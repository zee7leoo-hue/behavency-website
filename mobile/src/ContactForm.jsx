import React, { useState } from 'react'
import './sections/Contact.css'

/* The "Get in touch" card: used in the contact section at the bottom and in the hero's "Request a Demo" popup,
   so both always show exactly the same form. It is sent with Netlify Forms as "contact"
   (a matching hidden form sits in index.html so Netlify can find it). */

const ROLES = ['HR / People', 'Learning & Development', 'Leadership / Executive', 'Manager', 'Other']

const Send = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 2.5 10.6 13.4M21.5 2.5l-6.8 19-4.1-8.1-8.1-4.1z" /></svg>)

export default function ContactForm({ firstRef }) {
  const [state, setState] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setState('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <div className="ct-card">
      <h3>Get in touch</h3>
      {state === 'sent' ? (
        <p className="ct-done" role="status">Thank you. We’ll be in touch shortly.</p>
      ) : (
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p className="ct-hp" aria-hidden="true"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
          <label className="ct-f"><span>Name</span><input ref={firstRef} name="name" placeholder="Your name" autoComplete="name" required /></label>
          <label className="ct-f"><span>Work email</span><input type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
          <label className="ct-f"><span>Organization</span><input name="organization" placeholder="Company name" autoComplete="organization" /></label>
          <label className="ct-f"><span>Your role</span>
            <select name="role" defaultValue="">
              <option value="" disabled>Select…</option>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </select>
          </label>
          <label className="ct-f"><span>What are you trying to achieve?</span><textarea name="message" rows={4} placeholder="Tell us what’s going on in your organization and what you’re hoping to solve…" /></label>
          <button className="ct-btn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}<Send /></button>
          {state === 'error' && <p className="ct-err" role="alert">Something went wrong. Please try again.</p>}
        </form>
      )}
    </div>
  )
}
