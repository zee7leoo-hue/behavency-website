import React from 'react'
import profile from '../assets/hiring/recruiter-profile.webp'
import './HiringSection.css'

/* "Also for hiring" — Hiring a manager? Lower the risk.
   .d = desktop text, .m = shorter phone text. */

const STEPS = [
  { title: 'See how they manage, not how they interview', text: 'Как кандидат обычно работает с целями, обратной связью, приоритетами и людьми — в шести областях повседневного управления.' },
  { title: 'Что проверить на интервью', text: 'Отчёт показывает сильные области и те, что стоит проверить, — так вы спрашиваете именно там, где есть сомнения.' },
  { title: 'Сравнить с вашими руководителями', text: 'Кандидаты проходят тот же профиль, что и ваши руководители, — сразу видно, как они впишутся.' },
]

export default function HiringSection() {
  return (
    <section className="hr-outer" id="hiring">
      <div className="hr">
        <div className="hr-left">
          <div className="hr-eyebrow"><span className="hr-dash" aria-hidden="true" />И ДЛЯ ПОДБОРА</div>
          <h2 className="hr-title">Hiring a manager? <br /><em>Lower the risk.</em></h2>
          <p className="hr-lead">
            <span className="d">An interview shows how a candidate presents themselves. The Managerial Profile shows how they are likely to manage: one input next to interviews and references, not a verdict.</span>
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
              <span className="d">Not a pass/fail test. Используйте его, чтобы точнее задавать вопросы, а не как единственное основание для ранжирования, отказа или повышения.</span>
              <span className="m">Not a pass/fail test: one input to your decision.</span>
            </span>
          </p>
        </div>

        <div className="hr-right hr-labelled">
          <img className="hr-doc" src={profile} alt="Candidate profile: Elias T., Managerial Profile results for six areas of everyday management practice" />
          <span className="hr-pin" style={{ top: '46%', left: '-5%' }}><b>1</b>Шесть областей</span>
          <span className="hr-pin" style={{ top: '63%', right: '-7%' }}><b>2</b>Стоит проверить</span>
          <span className="hr-pin" style={{ top: '80%', left: '-6%' }}><b>3</b>Strong areas</span>
        </div>
      </div>
    </section>
  )
}
