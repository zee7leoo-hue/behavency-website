import React, { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Nav from './Nav'
import './styles.css'

/* The mobile site is designed on a 400px-wide screen. Everything is drawn at that size and the whole
   page is scaled to the real screen width, so every section fits the screen on any phone.
   (A transform is used instead of CSS zoom so it behaves the same in every mobile browser.) */
const DESIGN_W = 400
const MAX_W = 520
/* CSS zoom is used where the browser supports it (all current Chrome, Safari and Firefox); older browsers fall back to a transform */
const USE_ZOOM = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('zoom', '1') && !/[?&]t=1/.test(window.location.search)
if (USE_ZOOM) document.documentElement.classList.add('zoom-mode')

function Scaler({ children }) {
  const wrap = useRef(null)
  const stage = useRef(null)
  const nav = useRef(null)

  useLayoutEffect(() => {
    let lastW = 0
    const fit = () => {
      const w = Math.min(document.documentElement.clientWidth || window.innerWidth, MAX_W)
      const s = w / DESIGN_W
      // screen height in design pixels, so the first section can fill exactly one screen (kept steady while the browser bar shows/hides)
      if (w !== lastW) { lastW = w; const vh = window.innerHeight / s
        document.documentElement.style.setProperty('--screen-h', `${Math.round(vh)}px`)
        // on taller screens the last section is drawn a little larger so it fills the screen
        // one spacing factor for every section: 1 on short phones, up to 1.6 on tall ones
        document.documentElement.style.setProperty('--f', String(Math.min(1.6, Math.max(1, 1 + (vh - 641) / 320))))
        document.documentElement.style.setProperty('--bm-k', String(Math.min(1.1, Math.max(1, (vh - 100) / 533))))
      }
      document.documentElement.style.setProperty('--s', String(s))
      nav.current.style.transform = `translateX(-50%) scale(${s})`
      wrap.current.style.width = `${w}px`
      if (USE_ZOOM) {
        /* the page itself is laid out at the real size, so everything (including "sticky" pinning) lines up with the real scroll */
        stage.current.style.transform = 'none'
        stage.current.style.zoom = String(s)
        wrap.current.style.height = ''
      } else {
        stage.current.style.transform = `scale(${s})`
        wrap.current.style.height = `${Math.ceil(stage.current.offsetHeight * s)}px`
      }
    }
    fit()
    window.addEventListener('resize', fit)
    window.addEventListener('orientationchange', fit)
    if (window.visualViewport) window.visualViewport.addEventListener('resize', fit)
    const ro = 'ResizeObserver' in window ? new ResizeObserver(fit) : null
    if (ro) { ro.observe(stage.current); ro.observe(document.documentElement) }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
    return () => {
      window.removeEventListener('resize', fit)
      window.removeEventListener('orientationchange', fit)
      if (window.visualViewport) window.visualViewport.removeEventListener('resize', fit)
      if (ro) ro.disconnect()
    }
  }, [])

  return (
    <>
      {/* the top bar sits outside the scaled page so it stays fixed to the top of the screen at the right size */}
      <div className="nav-fixed" ref={nav}><Nav /></div>
      <div className="scale-wrap" ref={wrap}>
        <div className="scale-stage" ref={stage}>{children}</div>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Scaler><App /></Scaler>)
