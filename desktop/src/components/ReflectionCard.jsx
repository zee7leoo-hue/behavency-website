import { Clock, Chat, Layers, Users } from './GameScreen'
import photo from '../assets/engage/reflection-photo.webp'
import './ReflectionCard.css'

/* "02 · Post-Reflection" card (Engage scroll-stack, screen 2) */
export default function ReflectionCard() {
  const FEATURES = [
    { Icon: Clock, title: 'Typically 90 minutes', desc: 'Flexible to your needs.' },
    { Icon: Users, title: 'Facilitator-led', desc: 'Run by your facilitator or a\nBehavency expert.' },
    { Icon: Chat, title: 'Guided reflection', desc: 'A structured methodology\nusing questions, discussion\nand facilitator input.' },
    { Icon: Layers, title: 'Опирается на ваши результаты', desc: 'Brings to life the key areas\nfrom the assessment in\nreal team situations.' },
  ]
  return (
    <div className="rc-card">
      <div className="rc-copy">
        <div className="rc-badge">
          <span className="rc-badge-icon"><Users /></span>
          <span className="rc-badge-pill">02 – Post-Reflection</span>
        </div>
        <h3 className="rc-title">Разбор</h3>
        <svg className="rc-underline" viewBox="0 0 180 14" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rc-ul" x1="0" x2="1">
              <stop offset="0" stopColor="#0a7cf5" />
              <stop offset="1" stopColor="#3f93f7" stopOpacity=".55" />
            </linearGradient>
          </defs>
          <path d="M3 10.5 C45 4 110 3 177 5.2 C120 6.6 70 9 8 12.2 C4 12.4 1.5 11.6 3 10.5Z" fill="url(#rc-ul)" />
        </svg>
        <p className="rc-sub">The game is only the beginning.</p>
        <p className="rc-text">Команда вместе с фасилитатором вспоминает, the team looks back at what happened — the decisions they made, the patterns that emerged, and how they worked together.</p>
        <p className="rc-text">The facilitator helps turn those moments into insights they can recognise in themselves and in the way their team works.</p>
      </div>

      <div className="rc-panel">
        <div className="rc-feats">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div className="rc-feat" key={title}>
              <span className="rc-feat-icon"><Icon /></span>
              <div>
                <div className="rc-feat-title">{title}</div>
                <div className="rc-feat-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <img className="rc-photo" src={photo} alt="A facilitator leading a team conversation around a table" />
      </div>
    </div>
  )
}
