import { Users, Person } from './GameScreen'
import reportCard from '../assets/engage/insight-report-card.webp'
import './InsightCard.css'

/* "03 · Insight Report" card (Engage scroll-stack, screen 3) */
export default function InsightCard() {
  const AUDIENCES = [
    { Icon: Users, title: 'For HR & facilitators', desc: 'Greater participant self-awareness, engagement and stronger buy-in for subsequent development.' },
    { Icon: Person, title: 'For participants', desc: 'An engaging experience that makes their assessment tangible and helps them understand their own behaviour.' },
  ]
  return (
    <div className="ic-card">
      <div className="ic-copy">
        <div className="ic-badge">
          <span className="ic-badge-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4.5" y="11" width="4" height="9" rx="1.4" fill="#fff" />
              <rect x="10" y="4" width="4" height="16" rx="1.4" fill="#5ab7ff" />
              <rect x="15.5" y="8" width="4" height="12" rx="1.4" fill="#fff" />
            </svg>
          </span>
          <span className="ic-badge-pill">03 · Insight Report</span>
        </div>
        <h3 className="ic-title">Insight Report</h3>
        <span className="ic-underline" aria-hidden="true" />
        <p className="ic-sub">Turn the experience into actionable insight.</p>
        <div className="ic-rows">
          {AUDIENCES.map(({ Icon, title, desc }) => (
            <div className="ic-row" key={title}>
              <span className="ic-row-icon"><Icon /></span>
              <div>
                <div className="ic-row-title">{title}</div>
                <div className="ic-row-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ic-art">
        <img className="ic-report" src={reportCard} alt="Team Insight Report: Trust 78%, Prioritisation 64%, Collaboration 68%, with a key takeaway" />
      </div>
    </div>
  )
}
