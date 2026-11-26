import React from 'react'
import './WhyAreasMatter.css'

/* "Почему эти области важны" — six research figures in a 3 × 2 grid, with the AI callout as a column on the right. */

const CARDS = [
  { label: 'Ясность и согласованность', stat: '4,9×', body: 'Команды, у которых работа выстроена вокруг чётких и видимых всем целей, в 4,9 раза чаще укладываются в сроки.', src: 'Atlassian, State of Teams 2025', href: 'https://www.atlassian.com/blog/state-of-teams-2025' },
  { label: 'Доверие и инклюзивность', stat: '3%', post: 'против 12%', body: 'Там, где люди не боятся говорить открыто, за год, скорее всего, уйдут 3%. Там, где боятся больше всего, — 12%.', src: 'BCG, 2024', href: 'https://www.bcg.com/publications/2024/psychological-safety-levels-playing-field-for-employees' },
  { label: 'Фокус и приоритеты', stat: '4,6×', body: 'Команды, у которых есть способ выделять главные задачи, в 4,6 раза чаще работают продуктивно.', src: 'Atlassian, State of Teams 2024', href: 'https://www.atlassian.com/blog/state-of-teams-2024' },
  { label: 'Исполнение и ответственность', stat: '3×', body: 'Руководители, чьи начальники спрашивают со всех за высокие результаты, втрое чаще вовлечены в работу (51% против 17%).', src: 'Gallup, 2026', href: 'https://www.gallup.com/workplace/703379/accountability-leadership-greatest-weakness.aspx' },
  { label: 'Сотрудничество и влияние', stat: '39%', body: 'Если команды наладят совместную работу, их продуктивность может вырасти в среднем на 39%.', src: 'i4cp, 2024', href: 'https://www.i4cp.com/press-releases/rethinking-teams-can-lead-to-a-39-productivity-improvement-according-to-new-i4cp-research' },
  { label: 'Обучение и адаптивность', stat: '2×', body: 'Организации, где развивать навыки людей — приоритет, вдвое чаще показывают лучшие финансовые и бизнес-результаты.', src: 'Deloitte, Global Human Capital Trends 2025', href: 'https://www.deloitte.com/content/dam/insights/articles/2025/glob187692_global-human-capital-trends/DI_2025-Global-Human-Capital-Trends.pdf' },
]

export default function WhyAreasMatter() {
  return (
    <section className="wm" id="why-areas-matter" aria-label="Почему эти области важны">
      <div className="wm-wrap">
        <div className="wm-eye">ПОЧЕМУ ЭТИ ОБЛАСТИ ВАЖНЫ</div>
        <h2 className="wm-h2">Исследования связывают эти области <i>с результатами бизнеса.</i></h2>
        <p className="wm-sub">Исследования связывают такое поведение с тем, что бизнес видит в цифрах: результативностью, производительностью и прибылью.</p>
        <div className="wm-layout">
          <div className="wm-grid">
            {CARDS.map((k) => (
              <div className="wm-pc" key={k.label}>
                <div className="wm-area">{k.label}</div>
                <div className="wm-n">{k.stat}{k.post && <u>{k.post}</u>}</div>
                <p>{k.body}</p>
                <a href={k.href} target="_blank" rel="noopener">{k.src}</a>
              </div>
            ))}
          </div>
          <aside className="wm-ai">
            <div className="wm-ai-lead">И AI не разовьёт их за вас</div>
            <div className="wm-ai-row">
              <div className="wm-n">42%</div>
              <div>
                <p>тех, кому коллега присылал небрежную работу, сделанную AI, говорят, что стали меньше ему доверять.</p>
                <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity" target="_blank" rel="noopener">BetterUp Labs &amp; Stanford Social Media Lab, Harvard Business Review, 2025</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
