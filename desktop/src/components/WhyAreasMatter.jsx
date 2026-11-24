import React from 'react'
import './WhyAreasMatter.css'

/* "Why these areas matter" — six research figures in a 3 × 2 grid, with the AI callout as a column on the right. */

const CARDS = [
  { label: 'Clarity & Alignment', stat: '4.9×', body: 'Teams that line their work up with clear, visible goals are 4.9 times more likely to meet deadlines.', src: 'Atlassian, State of Teams 2025', href: 'https://www.atlassian.com/blog/state-of-teams-2025' },
  { label: 'Trust & Inclusion', stat: '3%', post: 'vs 12%', body: 'Where people feel safe to speak up, 3% are likely to quit within a year. Where they feel least safe, 12% are.', src: 'BCG, 2024', href: 'https://www.bcg.com/publications/2024/psychological-safety-levels-playing-field-for-employees' },
  { label: 'Focus & Prioritization', stat: '4.6×', body: 'Teams that have a way to identify their top-priority work are 4.6 times more likely to be productive.', src: 'Atlassian, State of Teams 2024', href: 'https://www.atlassian.com/blog/state-of-teams-2024' },
  { label: 'Execution & Accountability', stat: '3×', body: 'Managers whose leaders hold everyone responsible for great performance are three times as likely to be engaged (51% vs 17%).', src: 'Gallup, 2026', href: 'https://www.gallup.com/workplace/703379/accountability-leadership-greatest-weakness.aspx' },
  { label: 'Collaboration & Influence', stat: '39%', body: 'Teams could raise their productivity by 39% on average if they improved how they collaborate.', src: 'i4cp, 2024', href: 'https://www.i4cp.com/press-releases/rethinking-teams-can-lead-to-a-39-productivity-improvement-according-to-new-i4cp-research' },
  { label: 'Learning & Adaptability', stat: '2×', body: 'Organisations that prioritise developing people’s capabilities are twice as likely to have better financial and business results.', src: 'Deloitte, Global Human Capital Trends 2025', href: 'https://www.deloitte.com/content/dam/insights/articles/2025/glob187692_global-human-capital-trends/DI_2025-Global-Human-Capital-Trends.pdf' },
]

export default function WhyAreasMatter() {
  return (
    <section className="wm" id="why-areas-matter" aria-label="Why these areas matter">
      <div className="wm-wrap">
        <div className="wm-eye">WHY THESE AREAS MATTER</div>
        <h2 className="wm-h2">Research links these areas to <i>business results.</i></h2>
        <p className="wm-sub">Each area in our model is linked to results a business can see: performance, productivity and profit.</p>
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
            <div className="wm-ai-lead">And AI won’t build them for you</div>
            <div className="wm-ai-row">
              <div className="wm-n">42%</div>
              <div>
                <p>of people who received low-effort, AI-generated work from a colleague said they trust that colleague less.</p>
                <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity" target="_blank" rel="noopener">BetterUp Labs &amp; Stanford Social Media Lab, Harvard Business Review, 2025</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
