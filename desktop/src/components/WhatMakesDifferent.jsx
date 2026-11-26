import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './WhatMakesDifferent.css'

const points = [
  {
    title: 'Весь путь — от старта до финиша.',
    line: 'Оценка, командная игра, обучение и повторная оценка — на одной модели, силами одной команды.',
    more: 'Обычно всё разбросано: опрос проводят своими силами, оценку делает один подрядчик, семинар — другой. Разные методики, разные отчёты — и никто не может сказать, что изменилось. У нас каждый шаг опирается на те же шесть областей: результаты сразу ведут к нужному развитию, а повторная оценка показывает разницу.',
  },
  {
    title: 'Личные пробелы и организационные барьеры — отдельно.',
    line: 'Показываем, что нужно развивать людям, а что — исправить организации вокруг них.',
    more: 'Вместе с оценкой руководители заполняют опросник «Организационные барьеры»: около 40 типичных препятствий в девяти управленческих процессах. Каждый барьер связан с областями, которые он тормозит. Поэтому по низкому баллу видно, в чём дело: в навыке, который надо развивать, в условиях, которые надо менять, или и в том, и в другом.',
  },
  {
    title: 'Руководители и команды — на одной модели.',
    line: 'Развивайте руководителей, команды или всех сразу. Если у команды и её руководителя низкие баллы по доверию, вы видите связь.',
    more: 'Команда и руководитель оцениваются по одним и тем же шести областям, поэтому результаты легко положить рядом: где мнения совпадают, а где команда видит то, чего не замечает руководитель.',
  },
  {
    title: 'Люди не просто читают о пробелах — они их чувствуют.',
    line: 'Командная игра и разбор с фасилитатором превращают баллы в личный опыт — и в готовность взяться за дело.',
    more: 'За 2,5 часа команда видит, как то же поведение проявляется вживую, обсуждает, почему так, и получает аналитический отчёт с практическими советами.',
  },
  {
    title: 'Своё обучение — точно по результатам.',
    line: 'Программы для линейных руководителей, руководителей руководителей и команд — каждая связана с шестью областями.',
    more: 'Каждый результат ведёт к конкретным программам — гадать, чему учить дальше, не придётся. Программы идут очно, онлайн или в формате e-learning, и к каждой есть мастер-план, чтобы отработать навык в работе.',
  },
  {
    title: 'Интервьюеры тренируются заранее.',
    line: 'До настоящих интервью они тренируются в нашей Интервью-студии с четырьмя AI-персонажами.',
    more: 'Готовый гайд для каждого интервью, подсказки AI по ходу беседы — что спросить дальше, и резюме после неё. Проверяет его и принимает решение сам интервьюер.',
  },
  {
    title: 'Не «курс пройден», а «изменения видны».',
    line: 'Результаты «до» и «после», которые можно показать руководству.',
    more: 'Результаты сравниваются с исходной точкой по каждой области: поведение по самооценке и 360°, а также ослабли ли барьеры.',
  },
]

export default function WhatMakesDifferent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [open, setOpen] = useState(-1)

  return (
    <section className="different chapter chapter--cream" id="different" ref={ref}>
      <div className="container">
        <motion.div className="different__header"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="different__caption">Чем отличается Behavency</p>
          <h2 className="different__headline">
            Каждый подрядчик делает свой кусок.<br />
            <em>А что изменилось в целом — не знает никто.</em>
          </h2>
        </motion.div>

        <div className="different__points">
          {points.map((p, i) => {
            const isOpen = open === i
            return (
              <motion.div key={p.title} className={`different__point ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}>
                <span className="different__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="different__body">
                  <h3 className="different__title">{p.title}</h3>
                  <p className="different__text">{p.line}</p>
                  {isOpen && <p className="different__more">{p.more}</p>}
                </div>
                <button type="button" className="different__toggle" onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen} aria-label={`${isOpen ? 'Свернуть:' : 'Подробнее:'}: ${p.title}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                  </svg>
                </button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
