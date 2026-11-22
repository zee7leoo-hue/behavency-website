import React from 'react'
import { Globe, Mail, Link2, Share2 } from 'lucide-react'
import './Footer.css'
import logoHead from '../assets/logo-head-white.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logoHead} alt="" aria-hidden="true" style={{ height: 28, width: 'auto', display: 'block' }} />
            Behavency
          </div>
          <p className="footer__tagline">
            Assess. Engage. Build. Measure.<br/>
            The end-to-end manager development journey.
          </p>
          <div className="footer__socials">
            <a href="https://behavency.me" target="_blank" rel="noopener noreferrer" className="footer__social"><Globe size={15}/></a>
            <a href="#" className="footer__social"><Link2 size={15}/></a>
            <a href="mailto:hello@behavency.me" className="footer__social"><Mail size={15}/></a>
            <a href="#" className="footer__social"><Share2 size={15}/></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">The Journey</h4>
          <a href="#identify" className="footer__link">01 — Identify</a>
          <a href="#engage" className="footer__link">02 — Engage</a>
          <a href="#build" className="footer__link">03 — Build</a>
          <a href="#measure" className="footer__link">04 — Measure</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Platform</h4>
          <a href="#different" className="footer__link">What's Different</a>
          <a href="#packages" className="footer__link">Packages</a>
          <a href="#who" className="footer__link">Who It's For</a>
          <a href="https://behavency.me/model" target="_blank" rel="noopener noreferrer" className="footer__link">Behavioural Model</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <a href="https://behavency.me" target="_blank" rel="noopener noreferrer" className="footer__link">behavency.me</a>
          <a href="#contact" className="footer__link">Request a Demo</a>
          <a href="#" className="footer__link">Privacy Policy</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 Behavency. All rights reserved.</span>
          <span className="footer__serif">Know your people. Develop what matters.</span>
        </div>
      </div>
    </footer>
  )
}
