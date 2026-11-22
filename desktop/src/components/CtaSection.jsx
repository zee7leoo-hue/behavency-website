import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, CheckCircle2 } from 'lucide-react'
import './CtaSection.css'

export default function CtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', org:'', role:'', message:'' })
  const set = k => e => setForm(f => ({...f,[k]:e.target.value}))

  return (
    <section className="cta chapter chapter--ink" id="contact" ref={ref}>
      <div className="container">
        <div className="cta__inner">
          <motion.div className="cta__left"
            initial={{ opacity:0, x:-32 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
            <p className="caption" style={{ color:'rgba(255,255,255,0.3)', marginBottom:20 }}>Ready to start?</p>
            <h2 className="headline headline--white" style={{ marginBottom:24 }}>
              Let's talk about<br/><em>your people.</em>
            </h2>
            <p style={{ fontSize:18, color:'rgba(255,255,255,0.6)', lineHeight:1.6, maxWidth:420, marginBottom:48 }}>
              Tell us about your organization and where you want to start.
              We'll walk you through what Behavency would look like for your specific context.
            </p>
            <div className="cta__options">
              {[
                { t:'30-min overview', d:'See the full journey from assessment to measurement.' },
                { t:'Live demo', d:'Walk through the platform with real example data.' },
                { t:'Custom conversation', d:"If you have something specific in mind, we'll design the right starting point." },
              ].map((o,i) => (
                <div key={i} className="cta__option">
                  <div className="cta__option-dot"/>
                  <div>
                    <div style={{ color:'white', fontWeight:600, fontSize:15 }}>{o.t}</div>
                    <div style={{ color:'rgba(255,255,255,0.45)', fontSize:13, marginTop:2 }}>{o.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="cta__form-wrap"
            initial={{ opacity:0, x:32 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.1 }}>
            {done ? (
              <div className="cta__success">
                <CheckCircle2 size={52} style={{ color:'#4ADE80' }}/>
                <h3 className="headline headline--white" style={{ fontSize:28 }}>Message received.</h3>
                <p style={{ color:'rgba(255,255,255,0.55)', fontSize:15 }}>We'll be in touch within 2 business days.</p>
              </div>
            ) : (
              <form className="cta__form" onSubmit={e=>{e.preventDefault();setDone(true)}}>
                <h3 style={{ fontFamily:'var(--font-serif)', fontSize:24, color:'white', marginBottom:24 }}>Get in touch</h3>
                <div className="cta__row">
                  <div className="cta__field">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" value={form.name} onChange={set('name')} required/>
                  </div>
                  <div className="cta__field">
                    <label>Work email</label>
                    <input type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} required/>
                  </div>
                </div>
                <div className="cta__row">
                  <div className="cta__field">
                    <label>Organization</label>
                    <input type="text" placeholder="Company name" value={form.org} onChange={set('org')} required/>
                  </div>
                  <div className="cta__field">
                    <label>Your role</label>
                    <select value={form.role} onChange={set('role')} required>
                      <option value="">Select…</option>
                      <option>HR Director / CHRO</option>
                      <option>L&D / OD Professional</option>
                      <option>Recruiter / Talent Acquisition</option>
                      <option>CEO / Leadership</option>
                      <option>Consultant / Partner</option>
                    </select>
                  </div>
                </div>
                <div className="cta__field">
                  <label>What are you trying to achieve?</label>
                  <textarea rows={4} placeholder="Tell us what's going on in your organization and what you're hoping to solve…" value={form.message} onChange={set('message')}/>
                </div>
                <button type="submit" className="btn btn-outline-white" style={{ width:'100%', justifyContent:'center', padding:'16px' }}>
                  Send message <Send size={16}/>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
