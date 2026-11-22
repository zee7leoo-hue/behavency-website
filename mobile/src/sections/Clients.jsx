import React from 'react'
import nestle from '../assets/logos/nestle.png'
import lego from '../assets/logos/lego.png'
import cocacola from '../assets/logos/cocacola.png'
import ey from '../assets/logos/ey.png'
import danone from '../assets/logos/danone.png'
import jnj from '../assets/logos/jnj.png'
import ferrero from '../assets/logos/ferrero.png'
import telia from '../assets/logos/telia.png'
import metro from '../assets/logos/metro.png'
import gedeonrichter from '../assets/logos/gedeonrichter.png'
import ineos from '../assets/logos/ineos.png'
import nutricia from '../assets/logos/nutricia.png'
import hays from '../assets/logos/hays.png'
import bankofgeorgia from '../assets/logos/bankofgeorgia.png'
import actavis from '../assets/logos/actavis.png'
import './Clients.css'

/* Client logos strip, directly under the hero (logo heights: 24px for compact logos, 17px for the long ones,
   so they look equally heavy; all load straight away, not when scrolled near): "A product of OGI Europe | Trusted by teams at" over a row of
   logos that slowly drifts left. Stops on hover and keyboard focus; still for people who turn off motion. */

const LOGOS = [
  { src: nestle, alt: 'Nestlé', h: 24 },
  { src: lego, alt: 'LEGO', h: 24 },
  { src: cocacola, alt: 'Coca-Cola', h: 24 },
  { src: ey, alt: 'EY', h: 24 },
  { src: danone, alt: 'Danone', h: 24 },
  { src: jnj, alt: 'Johnson & Johnson', h: 17 },
  { src: ferrero, alt: 'Ferrero', h: 17 },
  { src: telia, alt: 'Telia', h: 17 },
  { src: metro, alt: 'METRO', h: 24 },
  { src: gedeonrichter, alt: 'Gedeon Richter', h: 24 },
  { src: ineos, alt: 'INEOS', h: 24 },
  { src: nutricia, alt: 'Nutricia', h: 17 },
  { src: hays, alt: 'Hays', h: 24 },
  { src: bankofgeorgia, alt: 'Bank of Georgia', h: 24 },
  { src: actavis, alt: 'Actavis', h: 24 },
]

export default function Clients() {
  return (
    <section className="bh-clients" aria-label="Clients">
      <p className="bh-clients__line"><span>A product of <b>OGI Europe</b></span><span className="bh-clients__sep" aria-hidden="true" /><span>Trusted by teams at</span></p>
      <div className="bh-clients__marquee">
        <div className="bh-clients__track">
          <ul className="bh-clients__group">
            {LOGOS.map((l) => <li key={l.alt}><img src={l.src} alt={l.alt} style={{ height: `${l.h}px` }} loading="eager" decoding="async" /></li>)}
          </ul>
          {/* the same list again, so the row loops without a gap; hidden from screen readers */}
          <ul className="bh-clients__group" aria-hidden="true">
            {LOGOS.map((l) => <li key={l.alt}><img src={l.src} alt="" style={{ height: `${l.h}px` }} loading="eager" decoding="async" /></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
