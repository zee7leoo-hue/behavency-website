import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Users } from 'lucide-react'
import './StageEngage.css'

export default function StageEngage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="engage-new chapter" id="engage" ref={ref}>
      {/* Background decoration */}
      <div className="engage-new__bg engage-new__bg--left" />
      <div className="engage-new__bg engage-new__bg--right" />

      <div className="container engage-new__inner">
        <div className="engage-new__split">
          
          {/* LEFT CONTENT */}
          <motion.div className="engage-new__content"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            
            <div className="engage-new__eyebrow">
              <span className="engage-new__ey-num">02</span>
              <span className="engage-new__ey-line"></span>
              <span className="engage-new__ey-text">ENGAGE</span>
            </div>

            <h2 className="headline engage-new__headline">
              They've seen the score.<br />
              Now let them<br />
              <em>experience</em> it.
            </h2>

            <p className="engage-new__sub">
              A 45-minute team game puts the same behavioural areas to the test — without looking or feeling like work.
            </p>

            <div className="engage-new__play-action">
              <button className="engage-new__play-btn">
                <Play size={22} fill="white" color="white" />
              </button>
              <span className="engage-new__play-text">Watch how it works</span>
              <span className="engage-new__play-dash"></span>
              <span className="engage-new__play-time">2 min</span>
            </div>

          </motion.div>

          {/* RIGHT VISUAL - Video Mockup */}
          <motion.div className="engage-new__visual"
            initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            
            <div className="engage-vid">
              {/* Top Bar */}
              <div className="engage-vid__header">
                <div className="engage-vid__header-left">
                  <div className="engage-vid__rec-dot"></div>
                  <span className="engage-vid__title">THE BEHAVIOENCY GAME</span>
                </div>
                <div className="engage-vid__timer">00:43:12</div>
              </div>

              {/* Video Grid */}
              <div className="engage-vid__grid">
                <div className="engage-vid__cell">
                  <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400" alt="Screen sharing" className="engage-vid__img" />
                </div>
                <div className="engage-vid__cell">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Participant" className="engage-vid__img" />
                </div>
                <div className="engage-vid__cell">
                  <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400" alt="Participant" className="engage-vid__img" />
                  
                  {/* Team Synergy Chip */}
                  <div className="engage-vid__chip">
                    <Users size={12} color="#F97316" />
                    <span>TEAM SYNERGY</span>
                  </div>
                </div>
                <div className="engage-vid__cell">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400" alt="Typing" className="engage-vid__img" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="engage-vid__center-play">
                <Play size={28} fill="#0A192F" color="#0A192F" className="engage-vid__center-icon" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
