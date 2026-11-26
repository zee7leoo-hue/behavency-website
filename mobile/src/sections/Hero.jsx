import React, { useCallback, useEffect, useRef, useState } from 'react'
import DemoModal from '../DemoModal'
import './Hero.css'

/* Hero (mobile): a 3-line headline, copy, a demo button, then the step cards on an emerald panel
   with Identify · Engage · Build · Measure tabs. The cards move on their own every 5 seconds while on
   screen, stop for good once the visitor touches, swipes or taps, and stay still for people who turn off motion. */

const CARDS = [
  {
    key: 'identify', title: 'Identify', tint: '#eaf1ff', ink: '#2f5bd3', lede: 'Найти сильные стороны и зоны роста.',
    icon: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>,
    badge: { n: '6', l: 'областей' },
    rows: [
      { t: 'Доверие и инклюзивность', v: 32, fill: '#e86a7d', bg: '#fde4e7', fg: '#c0283f' },
      { t: 'Ясность и согласованность', v: 62, fill: '#f5b84a', bg: '#fdf0d6', fg: '#c97c0a' },
      { t: 'Исполнение и ответственность', v: 78, fill: '#7fbf5c', bg: '#e4f4dc', fg: '#3f8a1f' },
    ],
  },
  {
    key: 'engage', title: 'Engage', tint: '#f1ebff', ink: '#7a3ff0', lede: 'Изучайте поведение команды в игре.',
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="11" rx="5" /><path d="M8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" /></svg>,
    rows: [{ t: 'Интерактивная командная игра', tag: '45 мин' }, { t: 'Разбор после игры с фасилитатором', tag: '90 мин' }, { t: 'Аналитический отчёт команды', tag: 'План действий' }],
  },
  {
    key: 'build', title: 'Build', tint: '#fff3e6', ink: '#d9821c', lede: 'От выводов — к реальному развитию.',
    icon: <svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3" /><circle cx="16.5" cy="10" r="2.4" /><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M14.5 15.2c2.6-.3 4.6 1.1 5.2 3.8" /></svg>,
    rows: [{ t: 'Учебные модули', tag: 'E-learning · с тренером' }, { t: 'Под каждого руководителя', tag: 'Его приоритеты' }, { t: 'Мастер-план', tag: 'Применение в работе' }],
  },
  {
    key: 'measure', title: 'Measure', tint: '#e7f6ef', ink: '#17905f', lede: 'Результаты программы и прогресс команды — на виду.',
    icon: <svg viewBox="0 0 24 24"><path d="M5 19V13M10 19V9M15 19v-6M20 19V5" /></svg>,
    rows: [{ t: 'Увидеть, что изменилось', tag: 'Поведение команды' }, { t: 'Отслеживать развитие', tag: 'Ключевые области' }, { t: 'Понять, что дальше', tag: 'Новые приоритеты' }],
  },
]

const EVERY_MS = 5000

export default function Hero() {
  const carRef = useRef(null)
  const trkRef = useRef(null)
  const [active, setActive] = useState(0)
  const [demo, setDemo] = useState(false)
  const closeDemo = useCallback(() => setDemo(false), [])
  const [dragging, setDragging] = useState(false)

  const target = useCallback((i) => {
    const trk = trkRef.current
    return trk.children[i].offsetLeft - trk.offsetLeft - parseFloat(getComputedStyle(trk).paddingLeft)
  }, [])

  const current = useCallback(() => {
    const trk = trkRef.current
    if (!trk) return 0
    const x = trk.scrollLeft
    let best = 0, d = 1e9
    for (let i = 0; i < trk.children.length; i++) {
      const dd = Math.abs(target(i) - x)
      if (dd < d) { d = dd; best = i }
    }
    return best
  }, [target])

  const go = useCallback((i) => {
    const trk = trkRef.current
    if (!trk) return
    trk.scrollTo({ left: target(i), behavior: 'smooth' })
    setActive(i)
    setTimeout(() => {
      if (Math.abs(trk.scrollLeft - Math.min(target(i), trk.scrollWidth - trk.clientWidth)) > 4) trk.scrollLeft = target(i)
    }, 650)
  }, [target])

  // mouse drag for computers
  const drag = useRef({ down: false, sx: 0, sl: 0 })
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const trk = trkRef.current
    drag.current = { down: true, sx: e.clientX, sl: trk.scrollLeft }
    setDragging(true)
    trk.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.down) return
    trkRef.current.scrollLeft = drag.current.sl - (e.clientX - drag.current.sx)
  }
  const onPointerUp = () => {
    if (!drag.current.down) return
    drag.current.down = false
    setDragging(false)
    const trk = trkRef.current
    const i = current()
    const dir = trk.scrollLeft - drag.current.sl
    let t = i
    if (Math.abs(dir) > 40 && i === Math.round(drag.current.sl / trk.children[0].offsetWidth)) t = Math.max(0, Math.min(CARDS.length - 1, i + Math.sign(dir)))
    go(t)
  }

  // moves on its own while on screen; stops for good once the visitor touches, swipes or taps; never with reduced motion
  useEffect(() => {
    const car = carRef.current
    if (!car || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let timer = null, stopped = false, visible = false
    const tick = () => { timer = setTimeout(() => { if (stopped) return; go((current() + 1) % CARDS.length); tick() }, EVERY_MS) }
    const stop = () => { stopped = true; clearTimeout(timer) }
    const evs = ['pointerdown', 'touchstart', 'wheel', 'keydown']
    evs.forEach((ev) => car.addEventListener(ev, stop, { passive: true }))
    const io = new IntersectionObserver((es) => {
      const v = es[0].isIntersecting
      if (v && !visible && !stopped) tick()
      if (!v) clearTimeout(timer)
      visible = v
    }, { threshold: 0.5 })
    io.observe(car)
    return () => { stop(); io.disconnect(); evs.forEach((ev) => car.removeEventListener(ev, stop)) }
  }, [go, current])

  return (
    <section className="hr" id="hero">
      <div className="hr-phone">
        <div className="hr-hero">
          <div className="hr-pill"><span>МЕНЬШЕ РИСКОВ В УПРАВЛЕНИИ</span></div>
          <h1 className="hr-h">
            <span className="hr-l">Мало кто из руководителей понимает,</span>
            <span className="hr-l"><em>чего именно</em></span>
            <span className="hr-l"><em>им не хватает.</em></span>
          </h1>
          <p className="hr-s">Когда всё меняется, такой пробел — риск для бизнеса. Behavency замечает его вовремя, помогает руководителям его закрыть — и показывает вам, что изменилось.</p>
          <a className="hr-btn" href="#contact" onClick={(e) => { e.preventDefault(); setDemo(true) }}>Запросить демо</a>
        </div>

        <div className="hr-carousel" ref={carRef}>
          <div className="hr-panel">
            <div className="hr-tabs">
              {CARDS.map((c, i) => (
                <button key={c.key} type="button" className={active === i ? 'on' : ''} onClick={() => go(i)}>{c.title}</button>
              ))}
            </div>
            <div className={`hr-trk ${dragging ? 'drag' : ''}`} ref={trkRef} onScroll={() => setActive(current())}
              onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
              {CARDS.map((c) => (
                <div key={c.key} className="hr-card" style={{ '--tint': c.tint, '--ink': c.ink }}>
                  <div className="hr-ch">
                    <span className="hr-ci">{c.icon}</span>
                    <div className="hr-ct"><b className="lede">{c.lede}</b></div>
                    {c.badge && <span className="hr-badge"><b>{c.badge.n}</b>{c.badge.l}</span>}
                  </div>
                  {c.rows.map((r) => (r.v != null ? (
                    <div key={r.t} className="hr-row bar">
                      <span className="hr-rl">{r.t}</span>
                      <span className="hr-track"><i style={{ width: `${r.v}%`, background: r.fill }} /></span>
                      <span className="hr-pct" style={{ background: r.bg, color: r.fg }}>{r.v}%</span>
                    </div>
                  ) : (
                    <div key={r.t} className="hr-row">
                      <span className="hr-rl">{r.t}</span>
                      <span className="hr-tag">{r.tag}</span>
                    </div>
                  )))}
                </div>
              ))}
            </div>
            <div className="hr-dots">
              {CARDS.map((c, i) => (
                <button key={c.key} type="button" aria-label={c.title} className={active === i ? 'on' : ''} onClick={() => go(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <DemoModal open={demo} onClose={closeDemo} />
    </section>
  )
}
