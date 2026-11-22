import React from 'react'

/* Line icons for the six areas and for their practices. They take their colour from the surrounding text colour. */
const base = { viewBox: '0 0 28 28', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

const ICONS = {
  target: <><circle cx="13" cy="15" r="10" /><circle cx="13" cy="15" r="6" /><circle cx="13" cy="15" r="2.2" /><path d="M13 15L23.5 4.5M20.5 3.5v5h5M20.5 3.5l1 1.5" /></>,
  people: <><circle cx="14" cy="6.5" r="3.4" /><circle cx="6" cy="11.5" r="2.7" /><circle cx="22" cy="11.5" r="2.7" /><path d="M7.5 24c0-4.4 2.9-7 6.5-7s6.5 2.6 6.5 7M1.5 22.5c0-3.4 1.8-5.4 4.5-5.4M26.5 22.5c0-3.4-1.8-5.4-4.5-5.4" /></>,
  chat: <><path d="M13 4.5c-5.5 0-10 3.4-10 7.7 0 2.2 1.2 4.2 3.1 5.6L4.8 22l4.6-2.3c1.1.3 2.4.5 3.6.5 5.5 0 10-3.4 10-7.7s-4.5-7.7-10-7.7z" /><path d="M20 21c.8.2 1.6.3 2.4.3l3 1.7-.9-3.3c1.2-1 1.9-2.4 1.9-3.9" /></>,
  gear: <><circle cx="14" cy="14" r="4.4" /><path d="M11.6 3.5h4.8l.8 3.2 2.2 1.2 3.1-1 2.4 4.2-2.4 2.3v2.4l2.4 2.3-2.4 4.2-3.1-1-2.2 1.2-.8 3.2h-4.8l-.8-3.2-2.2-1.2-3.1 1-2.4-4.2 2.4-2.3v-2.4L3.1 11.9l2.4-4.2 3.1 1 2.2-1.2z" /></>,
  chart: <><rect x="3" y="19" width="5" height="5.5" /><rect x="10.5" y="14" width="5" height="10.5" /><rect x="18" y="9" width="5" height="15.5" /><path d="M3 14.5l7-5.5 4 3L25 3.5M20 3.5h5v5" /></>,
  heart: <path d="M14 24.5S3 17.6 3 10.2C3 6.6 5.7 4 8.8 4c2.2 0 4.2 1.2 5.2 3.2C15 5.2 17 4 19.2 4 22.3 4 25 6.6 25 10.2 25 17.6 14 24.5 14 24.5z" />,
  handshake: <><path d="M2 12.5l4.2-4.2 5 1.3 3-2.2 5.2 3.4 4.4-2.6" /><path d="M2 12.5l5.2 6.2 2.2.6M6.6 16.2l3.2 3.6 2.3.2M10 14l3.4 3.8 2.5.1M13 11.6l3 3.2 4.2-2.6 5.8-.3" /></>,
  org: <><rect x="10" y="3" width="8" height="6.5" rx=".8" /><rect x="2.5" y="18.5" width="8" height="6.5" rx=".8" /><rect x="17.5" y="18.5" width="8" height="6.5" rx=".8" /><path d="M14 9.5V14M6.5 18.5V14h15v4.5" /></>,
  megaphone: <><path d="M3.5 11v6.2h4.6l10.4 5.3V5.7L8.1 11H3.5z" /><path d="M22 10.5c1 .9 1.6 2.1 1.6 3.5s-.6 2.6-1.6 3.5M7 17.2l1.2 6h3.4l-.9-4.6" /></>,
}

export function AreaIcon({ name, ...rest }) {
  return <svg {...base} {...rest}>{ICONS[name] || ICONS.target}</svg>
}

/* practices get a rotating set of icons (the Collaboration area uses the same ones as the design) */
const PRACTICE = ['handshake', 'org', 'megaphone', 'target', 'chat', 'chart']
export const practiceIcon = (areaIndex, i) => PRACTICE[(areaIndex === 4 ? i : areaIndex * 2 + i + 3) % PRACTICE.length]
