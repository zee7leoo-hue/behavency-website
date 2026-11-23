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
   - Footer: the footer now comes from the design script `public/footer-site.js` (white `logo-behavency.png`, 30px in the
     link). Keep it 40px with `:root .bft-logo { height: 40px !important; }` at the end of `src/styles.css`.
     (The old `src/sections/Footer.jsx` is no longer on the page.)
2. **Menu bar height 58px, thin grey line under it, menu text 18px (Request a Demo 17px)** (`src/styles.css`): `.nav` height 58px, `.nav-space` height 58px, `.nav-menu` top 58px,
   `html` scroll-padding-top `calc(58px * var(--s, 1))`. The line: `.nav` box-shadow `0 1px 0 rgba(15, 27, 61, .08)`,
   repeated with `!important` at the end of `src/styles.css` because `public/sections-mobile.js` sets its own line.
3. **Gap above "See all 23 programmes"** (`public/programmes-mobile.js`): the line
   `.tm .tm-allbtn { margin-top: 22px; }` right after the `.tm-allbtn:active` rule. Without it, `.tm button { margin: 0 }`
   removes the gap.

The demo popup follows the link (since 23 Nov the user chose the link's own pop-up from `public/contact-modal.js`), so
it is not a kept setting any more.
