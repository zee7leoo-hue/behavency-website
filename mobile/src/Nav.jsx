import React, { useState } from 'react'

const LINKS = [
  { href: '#how', label: 'How It Works' },
  { href: '#journey', label: 'The Journey' },
  { href: '#different', label: 'What’s Different' },
  { href: '#packages', label: 'Packages' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <a className="nav-logo" href="#top" aria-label="Behavency" onClick={() => setOpen(false)}>
        <span className="nav-logo-mark" aria-hidden="true">
          <svg viewBox="0 0 12 12"><circle cx="3.2" cy="3.2" r="1.7" /><circle cx="8.8" cy="3.2" r="1.7" /><circle cx="3.2" cy="8.8" r="1.7" /><circle cx="8.8" cy="8.8" r="1.7" /></svg>
        </span>
        <span className="nav-logo-word">Behavency</span>
      </a>
      <button type="button" className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
      <nav className="nav-menu" aria-label="Main">
        {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Request a Demo</a>
      </nav>
    </header>
  )
}
