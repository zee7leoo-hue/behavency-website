import React from 'react'
import './EngageVariantCards.css'
import { Gamepad, Users, Clock, Layers, Sliders, Chat } from './GameScreen'
import gameDarkPanel from '../assets/engage/v2/game-dark-panel.webp'
import gameLightBg from '../assets/engage/v2/game-light-bg.webp'
import reflBluePanel from '../assets/engage/v2/refl-blue-panel.webp'

/* Three card variants for the second Engage section (test versions), drawn as exact copies of the supplied designs.
   Every card is laid out on its design canvas (W × H design pixels) and scales as one piece:
   all positions and sizes are written in design pixels via u(n) = n × (card width / W). */

const u = (n) => `calc(${n} * var(--u))`
const at = (x, y, w, extra = {}) => ({ left: u(x), top: u(y), ...(w ? { width: u(w) } : null), ...extra })
const fs = (size, lh, extra = {}) => ({ fontSize: u(size), lineHeight: lh ? u(lh) : 1, ...extra })

/* a block of text lines that never re-wraps, so it breaks exactly like the design */
const Lines = ({ lines }) => lines.map((l, i) => <React.Fragment key={i}>{l}{i < lines.length - 1 && <br />}</React.Fragment>)

function Feature({ x, y, w, title, lines, tsize, dsize, dlh, gap, cls = '' }) {
  return (
    <div className={`vc-feat ${cls}`} style={at(x, y, w)}>
      <div className="vc-feat-t" style={fs(tsize, tsize * 1.1)}>{title}</div>
      <div className="vc-feat-d" style={fs(dsize, dlh, { marginTop: u(gap) })}><Lines lines={lines} /></div>
    </div>
  )
}
function Tile({ x, y, w, h, r, children, isize }) {
  return <span className="vc-tile" style={at(x, y, w, { height: u(h), borderRadius: u(r) })}><span style={{ width: u(isize), height: u(isize), display: 'grid', placeItems: 'center' }}>{children}</span></span>
}

/* ───────── 1 · The Game — white card, dark purple panel ───────── */
export function GameDarkCard() {
  const W = 1540, H = 771
  return (
    <article className="vc vc--dark" style={{ '--u': `min(calc(100cqw / ${W}), calc(100cqh / ${H}))` }} aria-label="01 — Игра">
      <div className="vc-stage" style={{ width: u(W), height: u(H) }}>
      <span className="vc-panel" style={at(530, 68, 975, { height: u(645), borderRadius: u(60), backgroundImage: `url(${gameDarkPanel})` })} />

      <span className="vc-badge vc-badge--purple" style={at(61, 75, 66, { height: u(63), borderRadius: u(18) })}><span style={{ width: u(38), height: u(38) }}><Gamepad size="100%" /></span></span>
      <span className="vc-pill" style={at(140, 82, 181, { height: u(48), borderRadius: u(24), ...fs(21.5, 48) })}>01 — Игра</span>

      <h3 className="vc-title" style={at(65, 173.4, null, fs(75.2, 75.2))}>Игра</h3>
      <span className="vc-rule vc-rule--purple" style={at(64, 280, 145, { height: u(10), borderRadius: u(5) })} />
      <p className="vc-sub" style={at(66, 322, null, fs(34, 41))}><Lines lines={['A game that makes', 'participants feel their', 'own blind spots.']} /></p>
      <p className="vc-para" style={at(68, 480, null, fs(22, 30.6))}>
        <Lines lines={['Numbers on a report don’t always', 'convince people. It’s easy to see a low', 'score and move on. What’s harder is', 'encountering the same behavioural', 'gap yourself — in a real group', 'situation, in real time.']} />
      </p>

      <span className="vc-line vc-line--h" style={at(597, 543, 838)} />
      <span className="vc-line vc-line--v" style={at(1027, 435, null, { height: u(222) })} />
      <Tile x={597} y={434} w={81} h={76} r={20} isize={46}><Users /></Tile>
      <Tile x={1063} y={434} w={82} h={76} r={20} isize={46}><Clock /></Tile>
      <Tile x={597} y={569} w={81} h={79} r={20} isize={46}><Layers /></Tile>
      <Tile x={1063} y={569} w={83} h={79} r={20} isize={46}><Sliders /></Tile>
      <Feature x={710} y={433} w={330} title="12–100 participants" lines={['Works for remote and', 'in-person teams.']} tsize={25} dsize={20.4} dlh={26.5} gap={7} />
      <Feature x={1177} y={433} w={330} title="45 minutes" lines={['Online, fully facilitated.']} tsize={25} dsize={20.4} dlh={26.5} gap={7} />
      <Feature x={710} y={570} w={330} title="Learn by doing" lines={['Discover your behavioural', 'patterns through play.']} tsize={25} dsize={20.4} dlh={26.5} gap={7} />
      <Feature x={1178} y={569} w={330} title="Customised" lines={['Tailored to your team’s', 'focus areas.']} tsize={25} dsize={20.4} dlh={26.5} gap={7} />
      </div>
    </article>
  )
}

/* ───────── 2 · The Game — light lilac container ───────── */
export function GameLightCard() {
  const W = 1544, H = 762
  return (
    <article className="vc vc--light" style={{ '--u': `min(calc(100cqw / ${W}), calc(100cqh / ${H}))`, backgroundImage: `url(${gameLightBg})` }} aria-label="01 — Игра">
      <div className="vc-stage" style={{ width: u(W), height: u(H) }}>
      <span className="vc-badge vc-badge--purple" style={at(75, 75, 63, { height: u(60), borderRadius: u(17) })}><span style={{ width: u(36), height: u(36) }}><Gamepad size="100%" /></span></span>
      <span className="vc-pill vc-pill--light" style={at(150, 82, 171, { height: u(45), borderRadius: u(23), ...fs(20, 45) })}>01 — Игра</span>

      <h3 className="vc-title" style={at(77, 170.2, null, fs(72, 72))}>Игра</h3>
      <span className="vc-rule vc-rule--purple" style={at(77, 269, 139, { height: u(10), borderRadius: u(5) })} />
      <p className="vc-sub" style={at(77, 305, null, fs(34, 41))}><Lines lines={['A game that makes', 'participants feel their', 'own blind spots.']} /></p>
      <p className="vc-para" style={at(77, 462, null, fs(22.4, 29.6))}>
        <Lines lines={['Numbers on a report don’t always', 'convince people. It’s easy to see a low', 'score and move on. What’s harder is', 'encountering the same behavioural', 'gap yourself — in a real group', 'situation, in real time.']} />
      </p>

      <span className="vc-line vc-line--h vc-line--soft" style={at(617, 576, 865)} />
      <span className="vc-line vc-line--v vc-line--soft" style={at(1047, 477, null, { height: u(210) })} />
      <Tile x={615} y={477} w={73} h={68} r={19} isize={43}><Users /></Tile>
      <Tile x={1088} y={477} w={73} h={68} r={19} isize={43}><Clock /></Tile>
      <Tile x={615} y={600} w={73} h={70} r={19} isize={43}><Layers /></Tile>
      <Tile x={1088} y={600} w={73} h={70} r={19} isize={43}><Sliders /></Tile>
      <Feature x={714} y={476.5} w={330} title="12–100 participants" lines={['Works for remote and', 'in-person teams.']} tsize={24} dsize={19.4} dlh={25} gap={6} />
      <Feature x={1190} y={476.5} w={330} title="45 minutes" lines={['Online, fully facilitated.']} tsize={24} dsize={19.4} dlh={25} gap={6} />
      <Feature x={714} y={600.5} w={340} title="Learn by doing" lines={['Discover your own', 'behavioural patterns through play.']} tsize={24} dsize={19.4} dlh={25} gap={6} />
      <Feature x={1190} y={600.5} w={330} title="Customised" lines={['Tailored to your team’s', 'focus areas.']} tsize={24} dsize={19.4} dlh={25} gap={6} />
      </div>
    </article>
  )
}

/* ───────── 3 · The Reflection — white card, blue panel ───────── */
export function ReflectionBlueCard() {
  const W = 1556, H = 722
  const rows = [
    { y: 107, h: 76, tile: <Clock />, title: 'Typically 90 minutes', lines: ['Flexible to your needs.'], ty: 111, tx: 740 },
    { y: 227, h: 76, tile: <Users />, title: 'Facilitator-led', lines: ['Run by your facilitator', 'or a Behavency expert.'], ty: 224, tx: 745 },
    { y: 362, h: 76, tile: <Chat />, title: 'Guided reflection', lines: ['A structured conversation', 'with targeted questions.'], ty: 361, tx: 747 },
    { y: 505, h: 84, tile: <Layers />, title: 'Опирается на ваши результаты', lines: ['Brings key assessment', 'insights to real team situations.'], ty: 504, tx: 748 },
  ]
  return (
    <>
      <article className="vc vc--blue" style={{ '--u': `min(calc(100cqw / ${W}), calc(100cqh / ${H}))` }} aria-label="02 – Post-Reflection">
        <div className="vc-stage" style={{ width: u(W), height: u(H) }}>
        <span className="vc-panel" style={at(578, 50, 952, { height: u(620), borderRadius: u(62), backgroundImage: `url(${reflBluePanel})` })} />

        <span className="vc-badge vc-badge--blue" style={at(48, 50, 75, { height: u(68), borderRadius: u(20) })}><span style={{ width: u(40), height: u(40) }}><Users /></span></span>
        <span className="vc-pill" style={at(140, 56, 261, { height: u(56), borderRadius: u(28), ...fs(23, 56), padding: `0 ${u(15)}` })}>02 – Post-Reflection</span>

        <h3 className="vc-title" style={at(47, 170.6, null, fs(71.4, 71.4))}>Разбор</h3>
        <svg className="vc-curve" viewBox="0 0 210 12" style={at(49, 262, 208, { height: u(12) })} preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="vc-blue-ul" x1="0" x2="1"><stop offset="0" stopColor="#1f6cf2" /><stop offset=".7" stopColor="#1f6cf2" /><stop offset="1" stopColor="#1f6cf2" stopOpacity=".35" /></linearGradient></defs>
          <path d="M1 10 Q60 3 120 2.5 Q175 2 209 1.4" fill="none" stroke="url(#vc-blue-ul)" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
        <p className="vc-sub vc-sub--one" style={at(48, 306, null, fs(28.5, 40))}>The game is only the beginning.</p>
        <p className="vc-para" style={at(48, 372, null, fs(22.6, 31))}>
          <Lines lines={['Команда вместе с фасилитатором вспоминает, the team looks', 'back at what happened — the decisions they', 'made, the patterns that emerged, and how', 'they worked together.']} />
        </p>
        <p className="vc-para" style={at(48, 517, null, fs(22.6, 31))}>
          <Lines lines={['The facilitator helps turn those moments', 'into insights they can recognise in themselves', 'and in the way their team works.']} />
        </p>

        <span className="vc-line vc-line--h" style={at(633, 205, 415)} />
        <span className="vc-line vc-line--h" style={at(633, 341, 415)} />
        <span className="vc-line vc-line--h" style={at(633, 478, 415)} />
        {rows.map((r, i) => (
          <React.Fragment key={r.title}>
            <Tile x={i === 3 ? 636 : 633 + (i === 0 ? 0 : 0)} y={r.y} w={i === 3 ? 83 : 78} h={r.h} r={22} isize={48}>{r.tile}</Tile>
            <Feature x={r.tx} y={r.ty} w={340} title={r.title} lines={r.lines} tsize={25} dsize={20.6} dlh={28.9} gap={7} />
          </React.Fragment>
        ))}
        </div>
    </article>
    </>
  )
}
