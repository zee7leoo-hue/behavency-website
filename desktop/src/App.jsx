import React from 'react'
import Navbar from './components/Navbar'
import HeroCarbon from './components/HeroCarbon'
import ClientLogos from './components/ClientLogos'
import SituationSection from './components/SituationSection'
import PlatformSection from './components/PlatformSection'
import StageIdentify from './components/StageIdentify'
import BehaviouralModel from './components/BehaviouralModel'
import WhyAreasMatter from './components/WhyAreasMatter'
import HoldsBackSection from './components/HoldsBackSection'
import EngageExperienceSection2 from './components/EngageExperienceSection2'
import BuildSection from './components/BuildSection'
import DeliverySectionV3 from './components/DeliverySectionV3'
import StageBuild from './components/StageBuild'
import MeasureSection from './components/MeasureSection'
import HowMeasureSection from './components/HowMeasureSection'
import HowItRuns from './components/HowItRuns'
import HiringSection from './components/HiringSection'
import WhatMakesDifferent from './components/WhatMakesDifferent'
import Packages from './components/Packages'
import ForWho from './components/ForWho'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import './components/SectionHeadings.css'
// Loaded last so it can adjust the hero, "Why now" and The Platform
import './styles/top-of-page.css'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroCarbon />
      <ClientLogos />
      <SituationSection />
      <PlatformSection />
      <StageIdentify />
      <BehaviouralModel />
      <WhyAreasMatter />
      <HoldsBackSection />
      <EngageExperienceSection2 />
      <BuildSection />
      <DeliverySectionV3 />
      {/* <StageBuild /> */}
      <MeasureSection />
      <HowMeasureSection />
      <HowItRuns />
      <HiringSection />
      <WhatMakesDifferent />
      <Packages />
      <ForWho />
      <CtaSection />
      <Footer />
    </>
  )
}
