import React, { useState, useCallback, useEffect } from 'react'
import DemoModal from './DemoModal'
import logoHead from './assets/logo-full.png'

const LINKS = [
  { href: '#how', label: 'How It Works' },
  { href: '#journey', label: 'The Journey' },
  { href: '#different', label: 'What’s Different' },
  { href: '#packages', label: 'Packages' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [demo, setDemo] = useState(false)
  const closeDemo = useCallback(() => setDemo(false), [])

  // Every "Request a demo" button or link to #contact on the page (hero, menu, the closing line, the footer, the About
  // page...) opens the full-screen demo popup below. It runs before the design scripts' own pop-up (contact-modal.js),
  // so the form that is sent is always the Netlify "contact" form.
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest && e.target.closest('a, button')
      if (!el || el.closest('.dm')) return
      const isDemo = el.hasAttribute('data-cm-open') || el.getAttribute('href') === '#contact' || el.getAttribute('data-bf') === 'contact' || /^request a demo$/i.test(el.textContent.trim())
      if (!isDemo) return
      e.preventDefault(); e.stopPropagation()
      setOpen(false)
      setDemo(true)
    }
    window.addEventListener('click', onClick, true)
    return () => window.removeEventListener('click', onClick, true)
  }, [])
  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <a className="nav-logo" href="#top" aria-label="Behavency" onClick={() => setOpen(false)}>
        <img className="nav-logo-mark" src={logoHead} alt="" aria-hidden="true" />
        <span className="nav-logo-word">Behavency</span>
      </a>
      <button type="button" className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
      <nav className="nav-menu" aria-label="Main">
        {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); setOpen(false); setDemo(true) }}>Request a demo</a>
      </nav>
      <DemoModal open={demo} onClose={closeDemo} />
    </header>
  )
}
