import { Gamepad, Users, Clock, Layers, Sliders } from './GameScreen'
import laptop from '../assets/engage/game-laptop.webp'
import './GameCard.css'

/* "01 · The Game" card (Engage scroll-stack, screen 1) */

export default function GameCard() {
  const FEATURES = [
    { Icon: Users, title: '12–100 participants', desc: 'Works for remote and in-person teams.' },
    { Icon: Clock, title: '45 minutes', desc: 'Online, fully facilitated.' },
    { Icon: Layers, title: 'Learn by doing', desc: 'Reveal your own behavioural patterns\nthrough play.' },
    { Icon: Sliders, title: 'Customised', desc: 'Tailored to your team’s focus areas.' },
  ]
  return (
    <div className="gc-card">
      <div className="gc-copy">
        <div className="gc-badge">
          <span className="gc-badge-icon"><Gamepad size={28} /></span>
          <span className="gc-badge-pill">01 – The Game</span>
        </div>
        <h3 className="gc-title">The Game</h3>
        <span className="gc-underline" aria-hidden="true" />
        <p className="gc-sub">A game that makes participants<br />feel their own blind spots.</p>
        <p className="gc-text">Numbers on a report don’t always convince people. It’s easy to see a low score and move on. What’s harder is encountering the same behavioural gap yourself — in a real group situation, in real time.</p>
      </div>

      <div className="gc-panel">
        <div className="gc-feats">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div className="gc-feat" key={title}>
              <span className="gc-feat-icon"><Icon /></span>
              <div className="gc-feat-body">
                <div className="gc-feat-title">{title}</div>
                <div className="gc-feat-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <img className="gc-laptop" src={laptop} alt="The Behavency team challenge game on a laptop" />
      </div>
    </div>
  )
}
