import React, { useCallback, useEffect, useRef } from 'react'

/* "From insight to action. All in one place." — the supplied section, used exactly as delivered.
   Its HTML/CSS/JS lives untouched in /public/platform-section.html. It is shown in a frame so its
   generic class names (.nav, .section, .row, …) and page-level styles can't clash with this site,
   and the frame is sized to the section's own height so it reads as part of the page. */
export default function PlatformSection() {
  const frame = useRef(null)
  const stop = useRef(null)

  const fit = useCallback(() => {
    const f = frame.current
    const doc = f && f.contentDocument
    if (!doc || !doc.documentElement) return
    const h = Math.ceil(doc.documentElement.getBoundingClientRect().height)
    if (h > 0) f.style.height = `${h}px`
  }, [])

  const onLoad = useCallback(() => {
    const f = frame.current
    const doc = f && f.contentDocument
    if (!doc) return
    if (stop.current) stop.current()
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(doc.documentElement)
    if (doc.body) ro.observe(doc.body)
    f.contentWindow.addEventListener('resize', fit)
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(fit)
    stop.current = () => { ro.disconnect(); f.contentWindow?.removeEventListener('resize', fit) }
  }, [fit])

  useEffect(() => () => { if (stop.current) stop.current() }, [])

  return (
    <iframe
      ref={frame}
      className="platform-frame"
      title="Три вопроса, которые задаст руководство: платформа Behavency"
      src={`${import.meta.env.BASE_URL}platform-section.html`}
      onLoad={onLoad}
      scrolling="no"
      style={{ display: 'block', width: '100%', height: 900, border: 0, background: '#f0f3fa' }}
    />
  )
}
