import React, { useEffect, useRef } from 'react'
import { useInView } from '../hooks'
import gamePanel from '../assets/play/game-panel.webp'
import reflectPanel from '../assets/play/reflect-v2.webp'
import { GameCard as NewGameCard, InsightCard as NewInsightCard } from './PlayCards'
import './Play.css'

/* "02 / Engage — the power of play" (mobile). Header on the top half of the screen, the stage cards in a slider below.
   Every block is laid out on the reference design's own pixel grid and scaled as one piece, so it is a close copy at any width.
   All words are live text; only the two artwork panels are images. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const Gamepad = (p) => (
  <svg viewBox="0 0 24 24" {...sv} {...p}>
    <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" />
    <path d="M17.3 5H6.7a4 4 0 0 0-3.97 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.4-1.4a2 2 0 0 1 1.4-.6h4.4a2 2 0 0 1 1.4.6L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.5-.6-6.6-.7-7.3A4 4 0 0 0 17.3 5z" />
  </svg>
)
const People = (p) => (
  <svg viewBox="0 0 24 24" {...sv} {...p}>
    <circle cx="12" cy="7.4" r="3.4" />
    <path d="M6.4 19.6v-1.2a4.6 4.6 0 0 1 4.6-4.6h2a4.6 4.6 0 0 1 4.6 4.6v1.2z" />
    <path d="M5.2 9.6a2.6 2.6 0 0 0 .4 5M18.8 9.6a2.6 2.6 0 0 1-.4 5M1.8 19v-.8c0-1.6 1.2-2.9 2.8-3.2M22.2 19v-.8c0-1.6-1.2-2.9-2.8-3.2" />
  </svg>
)
const PeopleFill = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="12" cy="7" r="3.5" /><path d="M5.8 19.2v-1.4A4.6 4.6 0 0 1 10.4 13.2h3.2a4.6 4.6 0 0 1 4.6 4.6v1.4z" />
    <circle cx="5" cy="9.4" r="2.5" /><circle cx="19" cy="9.4" r="2.5" />
    <path d="M1 18v-1.2a3.3 3.3 0 0 1 3.3-3.3h.5c-.9.9-1.4 2.1-1.4 3.4V18zM23 18v-1.2a3.3 3.3 0 0 0-3.3-3.3h-.5c.9.9 1.4 2.1 1.4 3.4V18z" />
  </svg>
)
const Clock = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="12" r="9.5" /><path d="M12 6.6V12l3.6 2.2" /></svg>)
const Layers = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 3 2.8 7.8 12 12.6l9.2-4.8z" /><path d="m2.8 12.4 9.2 4.8 9.2-4.8M2.8 16.8 12 21.6l9.2-4.8" /></svg>)
const Sliders = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M3 8h10.5M19.5 8H21M3 16h2M10.5 16H21" /><circle cx="16.5" cy="8" r="2.7" /><circle cx="7.8" cy="16" r="2.7" /></svg>)
const Chat = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M8 20.4A9.4 9.4 0 1 0 3.6 16L2.2 21.8z" /></svg>)

/* ───────── header (reference 1199 wide, shown from y = 50) ───────── */
function Header() {
  return (
    <div className="px-head">
      <div className="px-head-in">
        <h2 className="px-h rv" style={{ '--i': 1, left: 86, top: 36, whiteSpace: 'nowrap', width: 'auto' }}>
          Real team dynamics.<br /><em>Brought to life<br />through play.</em>
        </h2>
        <svg className="px-swoosh rv" style={{ '--i': 1, left: 92, top: 388 }} viewBox="0 0 560 26" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="px-sw" x1="0" x2="1"><stop offset="0" stopColor="#6a2ee8" stopOpacity=".25" /><stop offset=".25" stopColor="#6a2ee8" /><stop offset="1" stopColor="#6a2ee8" stopOpacity=".4" /></linearGradient></defs>
          <path d="M4 21 Q280 -4 556 12" fill="none" stroke="url(#px-sw)" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <p className="px-sub rv" style={{ '--i': 2, left: 90, top: 450, width: 1030 }}>
          An interactive online team game followed by a structured post-reflection, where participants explore their decisions, behaviours and how they work together.
        </p>
        <div className="px-stats rv" style={{ '--i': 3, top: 150 }}>
          <Gamepad className="px-sico" style={{ left: 100, top: 660 }} strokeWidth={1.8} />
          <b className="px-n" style={{ left: 265, top: 657 }}>45 min</b>
          <span className="px-l" style={{ left: 265, top: 727 }}>Team Game</span>
          <i className="px-div" style={{ left: 577, top: 668 }} />
          <People className="px-sico" style={{ left: 654, top: 660 }} strokeWidth={1.8} />
          <b className="px-n" style={{ left: 824, top: 657 }}>90 min</b>
          <span className="px-l" style={{ left: 824, top: 727, letterSpacing: '-.03em' }}>Post-Reflection</span>
        </div>
        <div className="px-how rv" style={{ '--i': 4 }}><i /><span>HOW IT WORKS</span><i /></div>
      </div>
    </div>
  )
}

/* the stage tag in a card's top-left corner and its counter: one design, sized the same on every card (f = this card's scale relative to card 1) */
function Tag({ f, n, label, Icon, grad, iconSize = 54 }) {
  const p = (v) => v * f
  return (
    <>
      <div className="pc-pill" style={{ left: p(56), top: p(60), height: p(64), borderRadius: p(32), paddingRight: p(28) }}>
        <span className="pc-ico" style={{ width: p(95), borderRadius: p(32), background: grad }}><Icon style={{ color: '#fff', width: p(iconSize), height: p(iconSize) }} strokeWidth={1.9} /></span>
        <span className="pc-pt" style={{ marginLeft: p(20), fontSize: p(28) }}>{label}</span>
      </div>
      <span className="pc-num" style={{ right: p(62), top: p(70), fontSize: p(37), lineHeight: `${p(44)}px` }}>{n} / 03</span>
    </>
  )
}

/* ───────── card 1 : the game (reference 991 × 1388, origin 37,27) ───────── */
function GameCard() {
  const X = (v) => v - 37
  const Y = (v) => v - 27 + 32 + (v >= 580 ? 202 : 0)
  const stat = (x, y, Icon, title, lines, tx, dt = 0, dd = 0) => (
    <>
      <span className="pc-tile" style={{ left: X(x), top: Y(y), width: 78, height: 71 }}><Icon /></span>
      <b className="pc-st" style={{ left: X(tx), top: Y(y + 2 + dt) }}>{title}</b>
      <p className="pc-sd" style={{ left: X(tx), top: Y(y + 40 + dd) }}>{lines.map((l, i) => <React.Fragment key={l}>{l}{i < lines.length - 1 && <br />}</React.Fragment>)}</p>
    </>
  )
  return (
    <div className="pc" style={{ width: 991, height: 1595, '--k': 352 / 991 }}>
      <div className="pc-back" style={{ left: X(75), top: Y(675), width: 915, height: 568, background: 'linear-gradient(180deg,#d6caf8,#cfc3f7)' }} />
      <Tag f={1} n="01" label="01 – The Game" Icon={Gamepad} grad="linear-gradient(135deg,#8a52f2,#6a2fe0)" />
      <h3 className="pc-h" style={{ left: X(101), top: Y(142) }}>A game that makes<br />participants feel their<br />own blind spots.</h3>
      <i className="pc-hl" style={{ left: X(252), top: Y(361), width: 372, height: 15 }} />
      <p className="pc-p" style={{ left: X(103), top: Y(418), width: 880, fontSize: 47, lineHeight: '56px' }}>It brings some of the same behavioural areas from the assessment to life — in a safe environment where mistakes are part of the play and nobody is judged.</p>

      <div className="pc-panel" style={{ left: X(160), top: Y(591), width: 745, height: 738, backgroundImage: `url(${gamePanel})` }} />
      {stat(202, 971, PeopleFill, '12–100 people', ['Remote & in-person'], 302, -1, 3)}
      {stat(577, 969, Clock, '45 minutes', ['Online & facilitated'], 676, 0, 3)}
      <i className="pc-line" style={{ left: X(555), top: Y(968), width: 2, height: 278 }} />
      <i className="pc-line" style={{ left: X(203), top: Y(1093), width: 659, height: 2 }} />
      {stat(202, 1116, Layers, 'Learn by doing', ['Discover behavioural', 'patterns through', 'play.'], 307, -7, 0)}
      {stat(577, 1116, Sliders, 'Customised', ['Tailored to your', 'team’s focus', 'areas.'], 682, -7, 0)}
    </div>
  )
}

/* ───────── card 2 : the reflection (reference 925 × 1367, origin 70,30) ───────── */
function ReflectCard() {
  const X = (v) => v - 70
  const Y = (v) => v - 30 + 30 + (v >= 560 ? 110 : 0)
  const row = (y, Icon, title, lines, dt = 0, dd = 0) => (
    <>
      <span className="pc-tile pc-tile--b" style={{ left: X(235), top: Y(y), width: 95, height: 93 }}><Icon /></span>
      <i className="pc-vline" style={{ left: X(362), top: Y(y + 2), height: 90 }} />
      <b className="pc-st pc-st--b" style={{ left: X(402), top: Y(y + 3 + dt) }}>{title}</b>
      <p className="pc-sd pc-sd--b" style={{ left: X(402), top: Y(y + 50 + dd) }}>{lines.map((l, i) => <React.Fragment key={l}>{l}{i < lines.length - 1 && <br />}</React.Fragment>)}</p>
    </>
  )
  return (
    <div className="pc" style={{ width: 967, height: 1492, '--k': 352 / 925 }}>
      <Tag f={925 / 991} n="02" label="02 – The Reflection" Icon={Chat} grad="linear-gradient(145deg,#27b0ff,#1580f0)" />
      <h3 className="pc-h" style={{ left: X(118), top: Y(149), lineHeight: '84px', fontSize: 69.4 }}>The game is only<br />the beginning.</h3>
      <i className="pc-sw" style={{ left: X(118), top: Y(322), width: 262, height: 20 }} />
      <p className="pc-p" style={{ left: X(118), top: Y(383), width: 790, fontSize: 44, lineHeight: '52px' }}>A guided conversation where participants discuss what happened, why they acted as they did, and how similar behaviours appear in everyday work.</p>

      <div className="pc-panel pc-r2" style={{ left: X(137) + 21, top: Y(569), width: 790, height: 761, backgroundImage: `url(${reflectPanel})` }}>
        <Clock className="pc-r2-ic" style={{ left: '8.4%', top: '5.6%', width: '6.6%' }} strokeWidth={1.9} />
        <i className="pc-r2-v" style={{ left: '17.2%', top: '5.2%', height: '10%' }} />
        <b className="pc-r2-t" style={{ left: '19.4%', top: '4.9%' }}>90-minute<br />session</b>
        <PeopleFill className="pc-r2-ic" style={{ left: '8%', top: '84.2%', width: '8.8%' }} />
        <b className="pc-r2-t pc-r2-t--b" style={{ left: '19.8%', top: '88.4%' }}>Facilitator-led</b>
        <i className="pc-r2-v" style={{ left: '51%', top: '83.6%', height: '10.4%' }} />
        <Layers className="pc-r2-ic" style={{ left: '57.6%', top: '84.4%', width: '7.6%' }} strokeWidth={1.9} />
        <b className="pc-r2-t pc-r2-t--b" style={{ left: '68.6%', top: '88.4%' }}>Connected to<br />assessment</b>
      </div>
    </div>
  )
}

const Bars = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="2.5" y="12" width="5" height="9" rx="2" /><rect x="9.5" y="7" width="5" height="14" rx="2" /><rect x="16.5" y="2" width="5" height="19" rx="2" /></svg>)
const Download = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 3v12M7 10.5l5 5 5-5M3.5 15v4.5h17V15" /></svg>)
const Spark = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M12 1.5c.7 5.6 3.7 9.3 10.5 10.5-6.8 1.2-9.8 4.9-10.5 10.5-.7-5.6-3.7-9.3-10.5-10.5C8.3 10.8 11.3 7.1 12 1.5z" /></svg>)

/* ───────── card 3 : the insight report (reference 952 × 1390, origin 37,67) ───────── */
function InsightCard() {
  const X = (v) => v - 37
  const Y = (v) => v - 67 + 31 + (v >= 660 ? 70 : 0)
  const rows = [
    { y: 190, label: 'Trust', pct: '78%', w: 166, c: 'linear-gradient(90deg,#74dc1c,#62d41e)' },
    { y: 280, label: 'Prioritisation', pct: '64%', w: 124, c: 'linear-gradient(90deg,#ff9a22,#fd8419)' },
    { y: 370, label: 'Collaboration', pct: '42%', w: 87, c: 'linear-gradient(90deg,#f9574f,#f2484a)' },
  ]
  return (
    <div className="pc" style={{ width: 952, height: 1534, '--k': 352 / 952 }}>
      <Tag f={952 / 991} n="03" label="03 – Insight Report" Icon={Bars} grad="linear-gradient(145deg,#1d56b8,#163f93)" iconSize={46} />
      <h3 className="pc-h" style={{ left: X(104), top: Y(178), color: '#0e1d52', lineHeight: '82px' }}>Turn the team experience<br />into a clear takeaway.</h3>
      <i className="pc-hl" style={{ left: X(298), top: Y(350), width: 468, height: 13 }} />
      <p className="pc-p" style={{ left: X(106), top: Y(402), width: 800, fontSize: 45, lineHeight: '54px', color: '#202a52' }}>A concise report that captures how the team played, highlights key patterns and explains what was behind some of the lower scores.</p>

      <div className="pc-dark" style={{ left: X(71), top: Y(678) - 30, width: 886, height: 794 }}>
        <div className="pc-doc" style={{ left: 40, top: 50, width: 283, height: 372 }}>
          <span className="pc-docico"><Bars style={{ color: '#fff', width: 44, height: 44 }} /></span>
          <b className="pc-doct" style={{ top: 126 }}>Team<br />Insight<br />Report</b>
          <span className="pc-docs" style={{ top: 288 }}>5 teams · 60 participants</span>
          <svg className="pc-wave" viewBox="0 0 283 60" preserveAspectRatio="none"><path d="M0 22C60 4 110 40 170 24 220 10 255 14 283 22V60H0z" fill="#dfe5f8" /></svg>
        </div>
        <i className="pc-vl" style={{ left: 343, top: 50, height: 372 }} />
        <span className="pc-dl" style={{ left: 571, top: 40, width: 283, height: 64 }}><Download style={{ width: 34, height: 34 }} />Download PDF</span>
        {rows.map((r, i) => (
          <React.Fragment key={r.label}>
            <b className="pc-rl" style={{ left: 371, top: r.y - 17 }}>{r.label}</b>
            <i className="pc-bt" style={{ left: 549, top: r.y - 13, width: 211, height: 26 }}><u style={{ width: r.w + 2, background: r.c }} /></i>
            <b className="pc-rp" style={{ right: 32, top: r.y - 24 }}>{r.pct}</b>
            {i < 2 && <i className="pc-rs" style={{ left: 371, top: r.y + 45, width: 483 }} />}
          </React.Fragment>
        ))}
        <i className="pc-hr" style={{ left: 40, top: 458, width: 806 }} />
        <div className="pc-key" style={{ left: 28, top: 492, width: 830, height: 264 }}>
          <svg className="pc-wave pc-wave--k" viewBox="0 0 830 70" preserveAspectRatio="none"><path d="M0 40C140 14 260 58 420 38 580 18 700 24 830 36V70H0z" fill="#dce4f7" /></svg>
          <Spark className="pc-spark" style={{ left: 36, top: 98, width: 62, height: 64 }} />
          <i className="pc-kline" style={{ left: 116, top: 98, height: 64 }} />
          <b className="pc-kt" style={{ left: 134, top: 105, fontSize: 31 }}>Key takeaway</b>
          <i className="pc-kline" style={{ left: 372, top: 46, height: 172 }} />
          <p className="pc-ktx" style={{ left: 396, top: 42, width: 420 }}>Team engagement is strong, while cross-functional collaboration offers room to improve.</p>
        </div>
      </div>
    </div>
  )
}


const Group = (p) => (
  <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="32" cy="10" r="7" /><circle cx="12" cy="18" r="5.6" /><circle cx="52" cy="18" r="5.6" />
    <path d="M18 44v-3a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v3M2 38v-1.5C2 31.8 5 28.6 9.6 28M62 38v-1.5C62 31.8 59 28.6 54.4 28" />
  </svg>
)
const Person = (p) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="32" cy="17" r="11" /><path d="M6 61v-3c0-10 8-17 18-17h16c10 0 18 7 18 17v3" />
  </svg>
)

/* ───────── "The results" ───────── */
function Results() {
  const [ref, seen] = useInView(0.2)
  return (
    <div ref={ref} className={`px-res ${seen ? 'in' : ''}`}>
      <div className="px-res-top"><i /><span>THE RESULTS</span><i /></div>
      <div className="px-res-row">
        <Group className="px-res-ico" />
        <i className="px-res-line" />
        <div><h4>For HR &amp; organisations</h4><p>Greater participant self-awareness, engagement and stronger buy-in for subsequent development.</p></div>
      </div>
      <div className="px-res-row">
        <Person className="px-res-ico px-res-ico--p" />
        <i className="px-res-line" />
        <div><h4>For participants</h4><p>They see for themselves what works and what is missing, making behavioural patterns more tangible.</p></div>
      </div>
    </div>
  )
}

const CARDS = [
  { key: 'game', node: <NewGameCard />, w: 368, h: 567 },
  { key: 'reflect', node: <ReflectCard />, w: 368, h: 567 },
  { key: 'insight', node: <NewInsightCard />, w: 368, h: 567 },
]

function Slide({ c, z }) {
  return (
    <div className="px-slot" style={{ zIndex: z }}>
      <div className="px-slide" style={{ width: c.w, height: c.h }}>{c.node}</div>
    </div>
  )
}

export default function Play() {
  const [ref, seen] = useInView(0.12)
  const stack = useRef(null)

  /* Scroll stack (like the desktop site): the heading stays pinned and each card slides up over it, then over the card before it.
     The page is drawn on a scaled 400px stage, where CSS "sticky" can't line up with the real scroll position, so the pinning is
     a scroll-linked animation instead (it runs on the compositor, so it is smooth). Here we only measure where each pin starts and
     ends. Browsers without scroll-linked animations get the same movement from a scroll handler. */
  useEffect(() => {
    const root = stack.current
    if (!root) return undefined
    const slots = [...root.querySelectorAll('.px-slot')]
    /* with the page laid out at real size (zoom mode) plain CSS sticky does all the pinning, nothing to measure */
    if (document.documentElement.classList.contains('zoom-mode')) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const native = !!(window.CSS && CSS.supports && CSS.supports('animation-timeline: scroll()'))
    const scale = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--s')) || 1
    const measure = () => {
      const sc = scale()
      /* where the stack starts in the page, worked out from layout only (never from the scroll position), so a phone's
         address bar sliding in and out can't shift the pin points while you scroll */
      const section = root.offsetParent
      const wrap = section && section.offsetParent
      const base = (wrap ? wrap.offsetTop : 0) + (root.offsetTop + (section ? section.offsetTop : 0)) * sc
      slots.forEach((slot) => {
        const limit = Math.max(0, root.offsetHeight - (slot.offsetTop + slot.offsetHeight))
        const a = base + slot.offsetTop * sc
        slot.style.setProperty('--a', `${a.toFixed(2)}px`)
        slot.style.setProperty('--b', `${(a + limit * sc).toFixed(2)}px`)
        slot.style.setProperty('--x', `${limit.toFixed(2)}px`)
        slot._limit = limit
      })
    }
    const follow = () => {
      const sc = scale()
      const top = root.getBoundingClientRect().top
      slots.forEach((slot) => {
        const want = Math.max(0, -(top + slot.offsetTop * sc)) / sc
        slot.style.transform = `translate3d(0, ${Math.min(want, slot._limit || 0).toFixed(2)}px, 0)`
      })
    }
    let lastW = 0
    const refresh = () => { measure(); if (!native && !reduce) follow() }
    const onResize = () => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; refresh() } }
    lastW = window.innerWidth
    refresh()
    window.addEventListener('resize', onResize)
    if (!native && !reduce) window.addEventListener('scroll', follow, { passive: true })
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh)
    const t = setTimeout(refresh, 600)
    return () => { clearTimeout(t); window.removeEventListener('resize', onResize); window.removeEventListener('scroll', follow) }
  }, [])

  return (
    <section ref={ref} className={`px ${seen ? 'is-in' : ''}`} id="play">
      <div className="px-stack" ref={stack}>
        <div className="px-slot px-slot--head" style={{ zIndex: 1 }}><Header /></div>
        {CARDS.map((c, i) => <Slide c={c} z={i + 2} key={c.key} />)}
      </div>
      <Results />
    </section>
  )
}
