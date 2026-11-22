import React, { useCallback, useEffect, useRef } from 'react'
import { useInView } from '../hooks'
import showcaseHtml from '../assets/showcase-square.html?raw'
import './Build.css'

/* "03 Build" (mobile): turn insights into targeted development. The animated app window is the supplied showcase page,
   played unchanged inside its own frame (so its styles and script cannot touch the rest of the page). It starts when the section comes into view.
   The frame measures where the animation's band sits and scales/crops it to the container, so it fits the same on every browser (including iPhone). */

const W = 340   // container width on the 400px canvas

export default function Build() {
  const [ref, seen] = useInView(0.2)
  const frame = useRef(null)

  const fit = useCallback(() => {
    const f = frame.current
    if (!f) return
    try {
      const w = f.contentWindow
      const band = w && w.document && w.document.getElementById('sc-band')
      if (!band || !f.clientWidth) return
      const ratio = (w.innerWidth / f.clientWidth) || 1      // inner px per outer px (1 unless the browser zooms the frame)
      const r = band.getBoundingClientRect()
      if (!r.width) return
      const bw = r.width / ratio
      const s = W / bw
      f.style.transformOrigin = '0 0'
      f.style.transform = `scale(${s})`
      f.style.left = `${(-r.left / ratio) * s}px`
      f.style.top = `${(-r.top / ratio) * s}px`
      f.style.opacity = 1
    } catch (e) { /* frame not ready */ }
  }, [])

  useEffect(() => {
    if (!seen) return undefined
    const t = [60, 300, 900, 2000].map((ms) => setTimeout(fit, ms))
    window.addEventListener('resize', fit)
    return () => { t.forEach(clearTimeout); window.removeEventListener('resize', fit) }
  }, [seen, fit])

  return (
    <section ref={ref} className={`bd ${seen ? 'is-in' : ''}`} id="build">
      <div className="bd-in">
        <h2 className="bd-title rv" style={{ '--i': 0 }}>Turn insights into <em>targeted development</em></h2>
        <div className="bd-eyebrow rv" style={{ '--i': 1 }}><em>03</em><i aria-hidden="true" /><b>Build</b><u aria-hidden="true" /><span>Build the right capabilities</span></div>
        <p className="bd-text rv" style={{ '--i': 2 }}>We match each manager’s priorities to programmes from our library, and every programme comes with a Masterplan to apply it at work.</p>
      </div>

      <div className="bd-show rv" style={{ '--i': 3 }}>
        <div className="bd-clip">
          {seen && <iframe ref={frame} onLoad={fit} className="bd-frame" title="How a priority becomes a programme and a Masterplan" srcDoc={showcaseHtml} scrolling="no" tabIndex={-1} />}
        </div>
      </div>
    </section>
  )
}
