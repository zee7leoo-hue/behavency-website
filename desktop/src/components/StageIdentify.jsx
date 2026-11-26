import StagePill from './StagePill'
import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ArrowRight } from 'lucide-react'
import './StageIdentify.css'

/* ── Assessment data — each row opens a modal ── */
const sources = [
  {
    num: '01',
    name: 'Профиль управленческого поведения',
    desc: 'Показывает, как руководитель обычно действует в шести областях.',
    modal: {
      title: 'Профиль управленческого поведения',
      intro: 'С него начинается каждая программа Behavency. На повседневных управленческих ситуациях профиль показывает, как руководитель на самом деле действует в шести областях модели Behavency.',
      examines: 'Как руководитель выбирает между двумя способами решить рабочую ситуацию — когда задаёт направление, выстраивает доверие, расставляет приоритеты, добивается результата, работает с другими и развивает людей.',
      reveals: 'Какие из шести областей — явные сильные стороны, какие пока в развитии и с чего руководителю стоит начать.',
      matters: 'Развитие работает, когда бьёт точно в цель. Профиль даёт первую ясную картину того, как работает руководитель, — ещё до мнений коллег.',
    },
  },
  {
    num: '02',
    name: 'Обратная связь 360°',
    desc: 'Окружение руководителя рассказывает, каким видит его в тех же шести областях. Самооценка встречается со взглядом со стороны.',
    modal: {
      title: 'Обратная связь 360°',
      intro: 'Те, кто работает с руководителем ближе всего, — подчинённые, коллеги и его собственный руководитель — независимо друг от друга оценивают те же шесть областей поведения. Мнение каждой группы видно рядом с самооценкой.',
      examines: 'Как поведение руководителя видят окружающие — по тем же 30 проявлениям, по которым он оценивает себя сам.',
      reveals: 'Разница между тем, каким руководитель видит себя и каким его видят другие. Большая она или маленькая, именно с неё начинаются самые важные разговоры о развитии.',
      matters: 'Слепые зоны по определению не видны. Данные 360° их высвечивают — и у руководителя появляется конкретный материал для работы вместо смутных ощущений.',
    },
  },
  {
    num: '03',
    name: 'Организационные барьеры',
    desc: 'Что в организации помогает руководителю работать, а что мешает? Опросник находит ключевые условия и барьеры, а мы связываем их с областями, на которые они могут влиять.',
    modal: {
      title: 'Организационные барьеры',
      intro: 'Опросник показывает, как организация в целом помогает или мешает руководителю работать эффективно. Руководитель описывает, что в его среде помогает работе, а что её тормозит: полномочия, ресурсы, приоритеты, информация, процедуры и взаимодействие с другими подразделениями.',
      examines: 'Как системы, процессы, ресурсы и условия работы в организации помогают руководителю работать эффективно — или мешают ему.',
      reveals: 'Закономерности и барьеры вне прямого влияния руководителя — важный контекст для развития и более полная картина его эффективности.',
      matters: 'Эффективность руководителя зависит не только от его поведения, но и от среды. Когда понятны организационные барьеры, развитие точнее, а результаты лучше и устойчивее.',
    },
  },
  {
    num: '04',
    name: 'Устойчивость к изменениям',
    desc: "Как человек реагирует, когда всё меняется? Методика показывает, на какие качества устойчивости он опирается чаще, а какие использует реже.",
    modal: {
      title: 'Устойчивость к изменениям',
      intro: 'Психометрическая методика: как руководитель реагирует на перемены, давление и неопределённость. Единого высокого или низкого балла нет — результат складывается в профиль по шести элементам.',
      examines: 'Как человек обычно реагирует на изменения — по шести элементам: реализм, позитивный взгляд на себя, гибкость мышления, гибкость в общении, организованность и инициативность.',
      reveals: 'На какие качества руководитель опирается чаще, а какие использует реже. В спокойные времена такие склонности могут быть незаметны, но в периоды неопределённости и трансформации выходят на первый план.',
      matters: 'Стабильность в организациях — редкость. Профиль устойчивости показывает, как руководитель обычно реагирует, когда на кону больше всего, и где ему может понадобиться поддержка, чтобы эффективно вести людей через изменения.',
    },
  },
  {
    num: '05',
    name: 'Структурированное интервью',
    desc: 'Живой разговор о тех же шести областях. Руководитель разбирает ситуации из своей работы — и всплывают детали и логика решений, которых опросник не покажет.',
    modal: {
      title: 'Структурированное интервью',
      intro: 'Разговор один на один с асессором Behavency или обученным HR-специалистом. Те же шесть областей — на реальных примерах из работы руководителя. На результаты опросников интервьюер не смотрит, поэтому интервью даёт независимый взгляд.',
      examines: 'Конкретные ситуации из повседневной работы руководителя: что он сделал, почему и что было дальше.',
      reveals: 'Контекст и намерения за поведением — на собственных примерах руководителя. С опросниками это сравнивают только потом.',
      matters: 'Цифры показывают, что происходит, а разговор — почему. Интервью проводится независимо, поэтому, сравнив потом одно с другим, вы получаете куда более надёжную картину.',
    },
  },
]

/* ── Pop-up motion: soft overlay fade, the card eases up and settles, then its content
      follows one piece at a time. Exit is quicker so closing feels light. ── */
const SOFT = [0.22, 1, 0.36, 1] /* gentle ease-out */
const overlayMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn', delay: 0.04 } },
}
const cardMotion = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: SOFT, delay: 0.06, delayChildren: 0.22, staggerChildren: 0.075 },
  },
  exit: { opacity: 0, y: 12, scale: 0.985, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
}
const partMotion = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SOFT } },
}
/* for visitors who prefer reduced motion: plain, quick fades only */
const calmOverlay = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } }
const calmCard = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } }
const calmPart = { hidden: { opacity: 1 }, show: { opacity: 1 } }

export default function StageIdentify() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [activeModal, setActiveModal] = useState(null)
  const reduce = useReducedMotion()
  const ov = reduce ? calmOverlay : overlayMotion
  const card = reduce ? calmCard : cardMotion
  const part = reduce ? calmPart : partMotion

  const openModal = (source) => setActiveModal(source)
  const closeModal = () => setActiveModal(null)

  return (
    <>
      <section className="identify chapter chapter--white" id="identify" ref={ref}>
        <div className="container">

          {/* Chapter label */}
          <motion.div className="identify__chapter-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            <StagePill num="01" title="Identify" sub="Найти сильные стороны и зоны роста" tone="blue" />
          </motion.div>

          {/* Two-column split */}
          <div className="identify__split">

            {/* LEFT — wider, ~5-line headline */}
            <motion.div className="identify__left"
              initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>

              <h2 className="identify__headline">
                Сначала мы<br />
                <em>слушаем</em> —<br />
                руководителей, их<br />
                команды и<br />
                организацию вокруг них.
              </h2>

              <p className="body-copy identify__intro">
                Обычно оценка сводится к самооценке.<br />{' '}
                Мы идём дальше и сводим вместе до пяти источников —<br />{' '}
                <strong>так картина эффективности руководителя становится полнее.</strong>
              </p>

              {/* Only 5 + 6 metrics */}
              <div className="identify__stats">
                <div className="stat">
                  <div className="stat__val"><span className="stat__upto" style={{ fontSize: '20px', fontWeight: 600, marginRight: '7px', letterSpacing: 0 }}>До</span>5</div>
                  <div className="stat__label">источников данных</div>
                  <div className="stat__sub">на руководителя</div>
                </div>
                <div className="stat">
                  <div className="stat__val">6</div>
                  <div className="stat__label">поведенческих областей</div>
                  <div className="stat__sub">в «Профиле управленческого поведения», 360° и интервью</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — clickable assessment rows */}
            <motion.div className="identify__right"
              initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }}>

              <div className="identify__sources">
                {sources.map((s, i) => (
                  <motion.button
                    key={s.num}
                    className="identify__source"
                    onClick={() => openModal(s)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08 }}>

                    <span className="identify__source-num">{s.num}</span>

                    <div className="identify__source-body">
                      <span className="identify__source-name">{s.name}</span>
                      <p className="identify__source-desc">{s.desc}</p>
                    </div>

                    <span className="identify__source-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </motion.button>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="id-modal-overlay"
            variants={ov} initial="hidden" animate="show" exit="exit"
            onClick={closeModal}>

            <motion.div
              className="id-modal"
              role="dialog"
              aria-modal="true"
              variants={card} initial="hidden" animate="show" exit="exit"
              onClick={e => e.stopPropagation()}>

              <button className="id-modal__close" onClick={closeModal} aria-label="Закрыть">
                <X size={20} />
              </button>

              <motion.div className="id-modal__num" variants={part}>{activeModal.num}</motion.div>
              <motion.h3 className="id-modal__title" variants={part}>{activeModal.modal.title}</motion.h3>
              <motion.p className="id-modal__intro" variants={part}>{activeModal.modal.intro}</motion.p>

              <div className="id-modal__rows">
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">Что изучает</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.examines}</dd>
                </motion.div>
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">Что показывает</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.reveals}</dd>
                </motion.div>
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">Почему это важно</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.matters}</dd>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
