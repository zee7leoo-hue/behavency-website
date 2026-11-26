import React from 'react'
import './ClientLogos.css'

/* Client logos strip, directly under the hero (before "Why now").
   A quiet line over a slowly moving row of logos: one dark grey, real colours on hover.
   The list is rendered twice so the row loops without a gap; the copy is hidden from screen readers. */

const LOGOS = [
  { file: 'nestle', name: 'Nestlé', h: 34 },
  { file: 'bayer', name: 'Bayer', h: 34 },
  { file: 'heineken', name: 'Heineken', h: 22 },
  { file: 'lego', name: 'LEGO', h: 34 },
  { file: 'cocacola', name: 'Coca-Cola', h: 34 },
  { file: 'ey', name: 'EY', h: 34 },
  { file: 'danone', name: 'Danone', h: 34 },
  { file: 'jnj', name: 'Johnson & Johnson', h: 25 },
  { file: 'ferrero', name: 'Ferrero', h: 21 },
  { file: 'telia', name: 'Telia', h: 25 },
  { file: 'metro', name: 'METRO', h: 34 },
  { file: 'gedeonrichter', name: 'Gedeon Richter', h: 34 },
  { file: 'ineos', name: 'INEOS', h: 31 },
  { file: 'nutricia', name: 'Nutricia', h: 21 },
  { file: 'hays', name: 'Hays', h: 30 },
  { file: 'bankofgeorgia', name: 'Bank of Georgia', h: 28 },
  { file: 'actavis', name: 'Actavis', h: 34 },
]

function Group({ copy = false }) {
  return (
    <ul className="bh-clients__group" aria-hidden={copy ? 'true' : undefined}>
      {LOGOS.map((l) => (
        <li key={l.file}>
          <img src={`/logos/${l.file}.png`} alt={copy ? '' : l.name} style={{ height: `${l.h}px` }} loading="lazy" />
        </li>
      ))}
    </ul>
  )
}

export default function ClientLogos() {
  return (
    <section className="bh-clients" aria-label="Clients">
      <p className="bh-clients__line">
        <span>Behavency is built by <b>OGI Europe</b>, which has trained managers at</span>
      </p>
      <div className="bh-clients__marquee">
        <div className="bh-clients__track">
          <Group />
          <Group copy />
        </div>
      </div>
    </section>
  )
}
