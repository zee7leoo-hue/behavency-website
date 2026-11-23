import React from 'react'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import WhyNow from './sections/WhyNow'
import Platform from './sections/Platform'
import Identify from './sections/Identify'
import Engage from './sections/Engage'
import Play from './sections/Play'
import Journey from './sections/Journey'
import Build from './sections/Build'
import Measure from './sections/Measure'
import HowMeasure from './sections/HowMeasure'
import Results from './sections/Results'
import HoldsBack from './sections/HoldsBack'
import Packages from './sections/Packages'

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
        <Results />
        <HoldsBack variant="focus" />
        <Engage />
        <Play />
        <Build />
        <Journey />
        <Measure />
        <HowMeasure />
        <Packages />
      </main>
    </>
  )
}
