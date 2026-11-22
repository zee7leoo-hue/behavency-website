import React from 'react'

/* small stroke icons (24 × 24) */
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const IconUser = (p) => <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4.5 21v-1.2a5.8 5.8 0 0 1 5.8-5.8h3.4a5.8 5.8 0 0 1 5.8 5.8V21" /></svg>
export const IconUsers = (p) => <svg {...base} {...p}><circle cx="9" cy="7.5" r="3.6" /><path d="M2.5 20.5v-1a5.2 5.2 0 0 1 5.2-5.2h2.6a5.2 5.2 0 0 1 5.2 5.2v1" /><path d="M16 3.9a3.6 3.6 0 0 1 0 7.2" /><path d="M18.3 14.5a5.2 5.2 0 0 1 3.2 4.8v1.2" /></svg>
export const IconBars = (p) => <svg {...base} {...p} strokeWidth={p.strokeWidth || 2.6}><path d="M6 20v-6" /><path d="M12 20V6" /><path d="M18 20v-10" /></svg>
export const IconBarsFilled = (p) => <svg viewBox="0 0 24 24" aria-hidden="true" {...p}><rect x="3.5" y="12" width="4.6" height="9" rx="1.4" fill="currentColor" /><rect x="9.7" y="6" width="4.6" height="15" rx="1.4" fill="currentColor" /><rect x="15.9" y="9" width="4.6" height="12" rx="1.4" fill="currentColor" /></svg>
export const IconTrend = (p) => <svg {...base} {...p}><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
export const IconZap = (p) => <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
export const IconChat = (p) => <svg {...base} {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.6" /></svg>
export const IconArrowRight = (p) => <svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
export const IconArrowLeft = (p) => <svg {...base} {...p}><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></svg>
export const IconArrowUpRight = (p) => <svg {...base} {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
export const IconChevronDown = (p) => <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
export const IconClose = (p) => <svg {...base} {...p}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
export const IconSearch = (p) => <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
