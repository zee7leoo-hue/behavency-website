import React from 'react'
import './Results.css'

/* "Почему эти области важны" (mobile): one evidence stat per area, then a highlighted AI stat. */

const STATS = [
  { area: 'Ясность и согласованность', n: '4,9×', p: 'Команды, чья работа привязана к чётким и видимым всем целям, в 4,9 раза чаще укладываются в сроки.', src: 'Atlassian, State of Teams 2025', href: 'https://www.atlassian.com/blog/state-of-teams-2025' },
  { area: 'Доверие и инклюзивность', n: '3%', vs: 'против 12%', p: 'Из тех, кто не боится говорить открыто, за год, скорее всего, уйдут 3%, а из тех, кто боится больше всего, — 12%.', src: 'BCG, 2024', href: 'https://www.bcg.com/publications/2024/psychological-safety-levels-playing-field-for-employees' },
  { area: 'Фокус и приоритеты', n: '4,6×', p: 'Команды, у которых есть способ выделять главные задачи, в 4,6 раза чаще работают продуктивно.', src: 'Atlassian, State of Teams 2024', href: 'https://www.atlassian.com/blog/state-of-teams-2024' },
  { area: 'Исполнение и ответственность', n: '3×', p: 'Руководители, чьи начальники спрашивают со всех за высокие результаты, в 3 раза чаще вовлечены в работу (51% против 17%).', src: 'Gallup, 2026', href: 'https://www.gallup.com/workplace/703379/accountability-leadership-greatest-weakness.aspx' },
  { area: 'Сотрудничество и влияние', n: '39%', p: 'Если улучшить совместную работу, продуктивность команд может вырасти в среднем на 39%.', src: 'i4cp, 2024', href: 'https://www.i4cp.com/press-releases/rethinking-teams-can-lead-to-a-39-productivity-improvement-according-to-new-i4cp-research' },
  { area: 'Обучение и адаптивность', n: '2×', p: 'Организации, где развитие людей — приоритет, в 2 раза чаще показывают лучшие финансовые и бизнес-результаты.', src: 'Deloitte, Global Human Capital Trends 2025', href: 'https://www.deloitte.com/content/dam/insights/articles/2025/glob187692_global-human-capital-trends/DI_2025-Global-Human-Capital-Trends.pdf' },
]

export default function Results() {
  return (
    <section className="rs" id="results">
      <div className="rs-head">
        <div className="rs-eyebrow"><span className="rs-dash" aria-hidden="true" /><span>Почему эти области важны</span></div>
        <h2 className="rs-title">Исследования связывают эти области <em>с результатами бизнеса.</em></h2>
        <p className="rs-lead">Исследования связывают такое поведение с тем, что бизнес видит в цифрах: результативностью, производительностью и прибылью.</p>
      </div>

      <div className="rs-list">
        {STATS.map((s) => (
          <div key={s.area} className="rs-item">
            <span className="rs-area">{s.area}</span>
            {s.vs ? (
              <div className="rs-pair"><span className="rs-n">{s.n}</span><span className="rs-vs">{s.vs}</span></div>
            ) : (
              <div className="rs-n">{s.n}</div>
            )}
            <p className="rs-p">{s.p}</p>
            <a className="rs-src" href={s.href} target="_blank" rel="noopener noreferrer">{s.src} ↗</a>
          </div>
        ))}
      </div>

      <div className="rs-ai">
        <span className="rs-ai-k">И AI не разовьёт их за вас</span>
        <div className="rs-ai-n">42%</div>
        <p className="rs-ai-p">тех, кому коллега присылал небрежную работу, сделанную AI, говорят, что стали меньше ему доверять.</p>
        <div className="rs-ai-rule" />
        <a className="rs-ai-src" href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity" target="_blank" rel="noopener noreferrer">BetterUp Labs &amp; Stanford Social Media Lab, Harvard Business Review, 2025 ↗</a>
      </div>
    </section>
  )
}
