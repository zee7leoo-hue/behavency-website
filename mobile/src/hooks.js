import { useEffect, useRef, useState } from 'react'

/* true once the element has been on screen (stays true) */
export function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) { setSeen(true); return undefined }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setSeen(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

/* true while the element is on screen */
export function useOnScreen(threshold = 0.3) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver((entries) => entries.forEach((e) => setOn(e.isIntersecting)), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, on]
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync)
    return () => { mq.removeEventListener ? mq.removeEventListener('change', sync) : mq.removeListener(sync) }
  }, [])
  return reduced
}

/* counts from 0 to `to` once `run` becomes true */
export function useCountUp(to, run, { duration = 1500, delay = 0 } = {}) {
  const [v, setV] = useState(0)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (!run) return undefined
    if (reduced) { setV(to); return undefined }
    let raf
    const t = setTimeout(() => {
      const start = performance.now()
      const step = (now) => {
        const k = Math.min(1, (now - start) / duration)
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, delay)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [run, to, duration, delay, reduced])
  return v
}
