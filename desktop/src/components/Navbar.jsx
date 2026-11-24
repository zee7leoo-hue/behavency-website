import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'
import logoHead from '../assets/logo-full.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'How It Works', href: '#identify' },
    { label: 'The Journey', href: '#engage' },
    { label: 'What\'s Different', href: '#different' },
    { label: 'Packages', href: '#packages' },
  ]

  return (
    <>
      <motion.header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
        <div className="nav__inner container">
          <a href="#" className="nav__logo">
            <img src={logoHead} alt="" aria-hidden="true" className="bhv-logo" style={{ height: 38, width: 'auto', display: 'block' }} />
            Behavency
          </a>

          <nav className="nav__links">
            {links.map(l => <a key={l.label} href={l.href} className="nav__link">{l.label}</a>)}
          </nav>

          <div className="nav__actions">
            <a href="#contact" className="btn btn-navy" style={{ padding: '8px 18px', fontSize: 13 }}>Request a demo</a>
            <button className="nav__burger" onClick={() => setOpen(o => !o)}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="nav__mobile"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} className="nav__mobile-link"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }} onClick={() => setOpen(false)}>
                {l.label}
              </motion.a>
            ))}
            <a href="#contact" className="btn btn-navy" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>Request a demo</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
