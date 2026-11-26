import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IconUser, IconUsers, IconBars, IconZap, IconChat, IconArrowRight, IconClose } from '../Icons'
import { useInView, useCountUp, useReducedMotion } from '../hooks'
import './Identify.css'

/* "Identify" (mobile): we start by listening. The five sources open as a bottom sheet, like the desktop pop-ups. */

const SOURCES = [
  {
    num: '01', name: 'Профиль управленческого поведения', tone: 'blue', icon: <IconUser />,
    modal: {
      intro: 'С него начинается каждая программа Behavency. На повседневных управленческих ситуациях профиль показывает, как руководитель на самом деле действует в шести областях модели Behavency.',
      examines: 'Как руководитель выбирает между двумя способами решить рабочую ситуацию — когда задаёт направление, выстраивает доверие, расставляет приоритеты, добивается результата, работает с другими и развивает людей.',
      reveals: 'Какие из шести областей — явные сильные стороны, какие пока в развитии и с чего руководителю стоит начать.',
      matters: 'Развитие работает, когда бьёт точно в цель. Профиль даёт первую ясную картину того, как работает руководитель, — ещё до мнений коллег.',
    },
  },
  {
    num: '02', name: 'Обратная связь 360°', tone: 'violet', icon: <IconUsers />,
    modal: {
      intro: 'Те, кто работает с руководителем ближе всего, — подчинённые, коллеги и его собственный руководитель — независимо друг от друга оценивают те же шесть областей поведения. Мнение каждой группы видно рядом с самооценкой.',
      examines: 'Как поведение руководителя видят окружающие — по тем же 30 проявлениям, по которым он оценивает себя сам.',
      reveals: 'Разница между тем, каким руководитель видит себя и каким его видят другие. Большая она или маленькая, именно с неё начинаются самые важные разговоры о развитии.',
      matters: 'Слепые зоны по определению не видны. Данные 360° их высвечивают — и у руководителя появляется конкретный материал для работы вместо смутных ощущений.',
    },
  },
  {
    num: '03', name: 'Организационные барьеры', tone: 'teal', icon: <IconBars />,
    modal: {
      intro: 'Опросник показывает, как организация в целом помогает или мешает руководителю работать эффективно. Руководитель описывает, что в его среде помогает работе, а что её тормозит: полномочия, ресурсы, приоритеты, информация, процедуры и взаимодействие с другими подразделениями.',
      examines: 'Как системы, процессы, ресурсы и условия работы в организации помогают руководителю работать эффективно — или мешают ему.',
      reveals: 'Закономерности и барьеры вне прямого влияния руководителя — важный контекст для развития и более полная картина его эффективности.',
      matters: 'Эффективность руководителя зависит не только от его поведения, но и от среды. Когда понятны организационные барьеры, развитие точнее, а результаты лучше и устойчивее.',
    },
  },
  {
    num: '04', name: 'Устойчивость к изменениям', tone: 'amber', icon: <IconZap />,
    modal: {
      intro: 'Психометрическая методика: как руководитель реагирует на перемены, давление и неопределённость. Единого высокого или низкого балла нет — результат складывается в профиль по шести элементам.',
      examines: 'Как человек обычно реагирует на изменения — по шести элементам: реализм, позитивный взгляд на себя, гибкость мышления, гибкость в общении, организованность и инициативность.',
      reveals: 'На какие качества руководитель опирается чаще, а какие использует реже. В спокойные времена такие склонности могут быть незаметны, но в периоды неопределённости и трансформации выходят на первый план.',
      matters: 'Стабильность в организациях — редкость. Профиль устойчивости показывает, как руководитель обычно реагирует, когда на кону больше всего, и где ему может понадобиться поддержка, чтобы эффективно вести людей через изменения.',
    },
  },
  {
    num: '05', name: 'Структурированное интервью', tone: 'lilac', icon: <IconChat />,
    modal: {
      intro: 'Разговор один на один с асессором Behavency или обученным HR-специалистом. Те же шесть областей — на реальных примерах из работы руководителя. На результаты опросников интервьюер не смотрит, поэтому интервью даёт независимый взгляд.',
      examines: 'Конкретные ситуации из повседневной работы руководителя: что он сделал, почему и что было дальше.',
      reveals: 'Контекст и намерения за поведением — на собственных примерах руководителя. С опросниками это сравнивают только потом.',
      matters: 'Цифры показывают, что происходит, а разговор — почему. Интервью проводится независимо, поэтому, сравнив потом одно с другим, вы получаете куда более надёжную картину.',
    },
  },
]

const SOFT = [0.22, 1, 0.36, 1]

export default function Identify() {
  const [ref, seen] = useInView(0.2)
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(null)
  const sources = useCountUp(5, seen, { delay: 700, duration: 900 })
  const areas = useCountUp(6, seen, { delay: 850, duration: 900 })

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <section ref={ref} className={`id ${seen ? 'is-in' : ''}`} id="identify">
      <h2 className="id-title rv" style={{ '--i': 0 }}>Сначала мы <em>слушаем</em> — руководителей, их команды и организацию вокруг них.</h2>

      <p className="id-stage rv" style={{ '--i': 1 }}><b>01</b><i aria-hidden="true">—</i><strong>Identify</strong><u aria-hidden="true" /><span>Найти сильные стороны и зоны роста</span></p>
      <p className="id-text rv" style={{ '--i': 2 }}>Обычно оценка опирается на самовосприятие. Мы сводим вместе до пяти источников данных, и картина эффективности руководителя получается полнее.</p>

      <div className="id-stats rv" style={{ '--i': 3 }}>
        <div className="id-stat"><b className="id-b5"><small className="id-upto">До</small>{sources}</b><div><strong>источников данных</strong><span>на руководителя</span></div></div>
        <i aria-hidden="true" />
        <div className="id-stat id-stat--b"><b>{areas}</b><div><strong>поведенческих областей</strong><span>в «Профиле управленческого поведения», 360° и интервью</span></div></div>
      </div>

      <h3 className="id-explore rv" style={{ '--i': 4 }}>Изучите пять источников</h3>
      <ul className="id-list rv" style={{ '--i': 5 }}>
        {SOURCES.map((s, i) => (
          <li key={s.num} className="id-item" style={{ '--k': i }}>
            <button type="button" onClick={() => setOpen(s)} aria-haspopup="dialog">
              <span className={`id-ico id-ico--${s.tone}`}>{s.icon}</span>
              <span className="id-name">{s.name}</span>
              <span className="id-go" aria-hidden="true"><IconArrowRight /></span>
            </button>
          </li>
        ))}
      </ul>

      {createPortal(<AnimatePresence>
        {open && (
          <motion.div className="id-overlay" key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: reduced ? .1 : .4 } }} exit={{ opacity: 0, transition: { duration: .25 } }} onClick={() => setOpen(null)}>
            <motion.div className="id-sheet" role="dialog" aria-modal="true" aria-label={open.name}
              variants={reduced ? calmSheet : sheet} initial="hidden" animate="show" exit="exit"
              onClick={(e) => e.stopPropagation()}>
              <div className="id-fit">
                <div className="id-top">
                  <button type="button" className="id-close" aria-label="Закрыть" onClick={() => setOpen(null)}><IconClose /></button>
                </div>
                <div className="id-body">
                  <motion.span className="id-sheet-num" variants={part}>{open.num}</motion.span>
                  <motion.h3 variants={part}>{open.name}</motion.h3>
                  <motion.p className="id-sheet-intro" variants={part}>{open.modal.intro}</motion.p>
                  <motion.div className="id-sheet-row" variants={part}><h4>Что изучает</h4><p>{open.modal.examines}</p></motion.div>
                  <motion.div className="id-sheet-row" variants={part}><h4>Что показывает</h4><p>{open.modal.reveals}</p></motion.div>
                  <motion.div className="id-sheet-row" variants={part}><h4>Почему это важно</h4><p>{open.modal.matters}</p></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </section>
  )
}

const sheet = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: .6, ease: SOFT, delayChildren: .22, staggerChildren: .07 } },
  exit: { y: '100%', transition: { duration: .35, ease: [0.4, 0, 1, 1] } },
}
const calmSheet = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: .15 } }, exit: { opacity: 0, transition: { duration: .1 } } }
const part = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: .5, ease: SOFT } } }
