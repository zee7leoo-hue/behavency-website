import React, { useState } from 'react'
import logoHead from './assets/logo-full.png'

const LINKS = [
  { href: '#how', label: 'Как это работает' },
  { href: '#journey', label: 'The Journey' },
  { href: '#different', label: 'What’s Different' },
  { href: '#packages', label: 'Пакеты' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <a className="nav-logo" href="#top" aria-label="Behavency" onClick={() => setOpen(false)}>
        <img className="nav-logo-mark" src={logoHead} alt="" aria-hidden="true" />
        <span className="nav-logo-word">Behavency</span>
      </a>
      <button type="button" className="nav-burger" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
      <nav className="nav-menu" aria-label="Главная">
        {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Запросить демо</a>
      </nav>
    </header>
  )
}
