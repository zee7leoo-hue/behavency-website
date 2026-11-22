import React from 'react'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import WhyNow from './sections/WhyNow'
import Platform from './sections/Platform'
import Identify from './sections/Identify'
import Model from './sections/Model'
import Engage from './sections/Engage'
import Play from './sections/Play'
import Journey from './sections/Journey'
import Build from './sections/Build'
import Measure from './sections/Measure'
import HowMeasure from './sections/HowMeasure'
import Different from './sections/Different'
import Hiring from './sections/Hiring'
import Results from './sections/Results'
import HoldsBack from './sections/HoldsBack'
import HowRuns from './sections/HowRuns'
import Packages from './sections/Packages'
import WhoFor from './sections/WhoFor'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import './typography.css'
import './stages.css'
import './stage-headers.css'
import './spacing.css'

export default function App() {
  return (
    <>
      <div className="nav-space" aria-hidden="true" />
      <main id="top">
        <Hero />
        <Clients />
        <WhyNow />
        <Platform />
        <Identify />
        <Model single />
        <Engage />
        <Play />
        <Build />
        <Journey />
        <Measure />
        <HowMeasure />
        <Different />
        <Hiring />
        <Results />
        <HoldsBack variant="split" />
        <HoldsBack variant="focus" />
        <HowRuns />
        <Packages />
        <WhoFor />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
