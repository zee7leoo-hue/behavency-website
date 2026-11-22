import React from 'react'
import profile from '../assets/hiring/recruiter-profile.webp'
import './HiringSection.css'

/* "Also for hiring" — Hiring a manager? Lower the risk.
   .d = desktop text, .m = shorter phone text. */

const STEPS = [
  { title: 'See how they manage, not how they interview', text: 'How the candidate typically handles goals, feedback, priorities and people, across six areas of everyday management.' },
  { title: 'Know what to check in the interview', text: 'The report shows their strong areas and the ones to probe, so your questions go where the doubts are.' },
  { title: 'Compare them with the managers you have', text: 'Candidates answer the same profile as your current managers, so you can see how they would fit in.' },
]

export default function HiringSection() {
  return (
    <section className="hr-outer" id="hiring">
      <div className="hr">
        <div className="hr-left">
          <div className="hr-eyebrow"><span className="hr-dash" aria-hidden="true" />ALSO FOR HIRING</div>
          <h2 className="hr-title">Hiring a manager? <br /><em>Lower the risk.</em></h2>
          <p className="hr-lead">
            <span className="d">An interview shows how a candidate presents themselves. The Managerial Behaviour Profile shows how they are likely to manage: one input next to interviews and references, not a verdict.</span>
            <span className="m">Before you decide, see how a candidate is likely to manage people.</span>
          </p>
          <ol className="hr-steps">
            {STEPS.map((s) => (
              <li key={s.title} className="hr-step">
                <span className="hr-num" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="hr-how">
            <span className="d">Simple to run: add a name and e-mail, the candidate gives consent and answers online, and you get a 4-page report.</span>
            <span className="m">Add a name and e-mail. They consent and answer online. You get a 4-page report.</span>
          </p>
          <p className="hr-note">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
            <span>
              <span className="d">Not a pass/fail test. Use it to ask better questions, not to rank, reject or promote on its own.</span>
              <span className="m">Not a pass/fail test: one input to your decision.</span>
            </span>
          </p>
        </div>

        <div className="hr-right">
          <img className="hr-doc" src={profile} alt="Candidate profile: Elias T., Managerial Behaviour Profile results for six areas of everyday management practice" />
        </div>
      </div>
    </section>
  )
}
