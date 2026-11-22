import React, { useState, useCallback } from 'react'
import DemoModal from '../DemoModal'
import './Footer.css'
import logoHead from '../assets/logo-full-white.png'

/* Footer (mobile): logo and line, two short link groups, copyright. */

const GROUPS = [
  { t: 'Platform', links: [['What’s Different', '#different'], ['Packages', '#packages'], ['Who It’s For', '#who-its-for'], ['Behavioural Model', '#behavioural-model']] },
  { t: 'Company', links: [['behavency.me', 'https://behavency.me'], ['Request a Demo', '#contact'], ['Privacy Policy', '#']] },
]

export default function Footer() {
  const [demo, setDemo] = useState(false)
  const closeDemo = useCallback(() => setDemo(false), [])
  return (
    <footer className="ft">
      <a className="ft-logo" href="#top" aria-label="Behavency, back to top">
        <img className="ft-mark" src={logoHead} alt="" aria-hidden="true" />
        <span className="ft-word">Behavency</span>
      </a>
      <p className="ft-line">Assess. Engage. Build. Measure.<br />The end-to-end manager development journey.</p>

      <nav className="ft-groups" aria-label="Footer">
        {GROUPS.map((g) => (
          <div key={g.t} className="ft-group">
            <p>{g.t}</p>
            <ul>
              {g.links.map(([l, h]) => (
                <li key={l}><a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                  {...(l === 'Request a Demo' ? { onClick: (e) => { e.preventDefault(); setDemo(true) } } : {})}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="ft-bottom">
        <span>© 2026 Behavency. All rights reserved.</span>
        <em>Know your people. Develop what matters.</em>
      </div>
      <DemoModal open={demo} onClose={closeDemo} />
    </footer>
  )
}
