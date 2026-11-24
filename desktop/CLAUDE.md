# Behavency desktop site

This folder is the desktop site, part of the `zee7leoo-hue/behavency-website` repo. The git, branch and deploy rules
are in the repo root's `CLAUDE.md`; follow those (not the old repo's rules).

A change asked for the desktop site touches files in this folder only.

## Keep the full logo (always follow)

The logo is the full logo image (head icon, line, "B") followed by the word "Behavency", on both sites.
- Menu: `src/components/Navbar.jsx` uses `src/assets/logo-full.png` (shown 25px tall by the `nav-wide` style in `index.html`).
- Footer, hiring report, dashboard mock-up, programmes page, model pop-up: they load `public/logo-behavency.png`
  (and `public/showcase-desktop/logo-behavency.png`). Both must be the full logo, the same file as
  `mobile/public/logo-behavency.png`. A design update that brings a head-only `logo-behavency.png` must not replace them.
- Footer logo height: `:root .bft-logo { height: 38px !important; }` at the end of `src/index.css`.

Desktop changes are saved here, in `zee7leoo-hue/behavency-website`, folder `desktop/` (the old
`tennispulse90/behavency-desktop` repo is only a backup and is not published).
