import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import ContactForm from './ContactForm'
import './DemoModal.css'

/* "Request a Demo" popup (from the hero): full screen, close button top right, Escape also closes it.
   It shows the same "Get in touch" form as the contact section at the bottom of the page.
   It is drawn outside the scaled page (in document.body) so it always fills the real screen. */

export default function DemoModal({ open, onClose }) {
  const first = useRef(null)
  const closeBtn = useRef(null)

  // lock the page behind, put the cursor in the first field, close on Escape
  useEffect(() => {
    if (!open) return undefined
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    const t = setTimeout(() => (first.current || closeBtn.current)?.focus(), 60)
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { html.style.overflow = prev; clearTimeout(t); window.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="dm" role="dialog" aria-modal="true" aria-label="Get in touch">
      <div className="dm-top">
        <span className="dm-logo" aria-hidden="true">
          <span className="dm-mark"><svg viewBox="0 0 12 12"><circle cx="3.2" cy="3.2" r="1.7" /><circle cx="8.8" cy="3.2" r="1.7" /><circle cx="3.2" cy="8.8" r="1.7" /><circle cx="8.8" cy="8.8" r="1.7" /></svg></span>
          Behavency
        </span>
        <button ref={closeBtn} type="button" className="dm-close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>
      <div className="dm-scroll">
        <div className="dm-in ct">
          <ContactForm firstRef={first} />
        </div>
      </div>
    </div>,
    document.body,
  )
}
