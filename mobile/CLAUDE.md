# Behavency mobile site

This folder is the phone site, part of the `zee7leoo-hue/behavency-website` repo. The git, branch and deploy rules
are in the repo root's `CLAUDE.md`; follow those (not the old repo's rules).

A change asked for the mobile site touches files in this folder only.

## Keep these when updating from a design link (always follow)

When the user gives a new version of the mobile design (a claude.ai artifact link) and asks to make the site "exactly
the same as the link", copy the link's changes, but keep these settings the user chose afterwards (re-apply them if
the link's files would undo them), and tell the user they were kept:

1. **Logo**: the full logo image (head icon, line, "B") followed by the word "Behavency".
   - Menu: `src/Nav.jsx` uses `src/assets/logo-full.png` as `.nav-logo-mark` (34px tall, in `src/styles.css`).
   - Footer: `src/sections/Footer.jsx` uses `src/assets/logo-full-white.png` as `.ft-mark` (40px tall, in
     `src/sections/Footer.css`).
2. **Menu bar height 56px** (`src/styles.css`): `.nav` height 56px, `.nav-space` height 56px, `.nav-menu` top 56px,
   `html` scroll-padding-top `calc(56px * var(--s, 1))`.
3. **Gap above "See all 23 programmes"** (`public/programmes-mobile.js`): the line
   `.tm .tm-allbtn { margin-top: 22px; }` right after the `.tm-allbtn:active` rule. Without it, `.tm button { margin: 0 }`
   removes the gap.
