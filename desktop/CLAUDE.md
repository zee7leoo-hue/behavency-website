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

## The demo pop-up sends to Netlify Forms (always keep)

`public/contact-modal.js` (the "Request a demo" pop-up) only shows "Thank you" and sends nothing. `src/netlifyContact.js`
(imported in `src/main.jsx`) catches its submit and posts it as the Netlify "contact" form (`org` is sent as
`organization`; `phone`, `managers` and the ticked `interest` boxes too). Keep it and the hidden `<form name="contact">` in
`index.html`. If a design update changes the pop-up's form (class `cm-form`, field names, `.cm-body`/`.cm-send`),
update `src/netlifyContact.js` to match. The mobile site has its own copy of the same file.

## Fonts come from the site itself, never from Google (always keep)

Some visitors' networks or browsers block Google Fonts, and then the site falls back to other fonts. So every Google
Fonts stylesheet the site uses is copied 1:1 into `public/fonts/`: `gf-<id>.css` (the CSS Google sends to a current
Chrome, `<id>` = first 8 hex characters of the SHA-1 of the Google URL) with its font files in `public/fonts/files/`
(linked by relative paths). Pages link the copies instead of `fonts.googleapis.com`, and there are no preconnect links
to Google. If a design update brings a new `https://fonts.googleapis.com/css2?...` link (in `index.html`, a CSS
`@import`, a script in `public/` or a page in `public/`), download it the same way and point it at the local copy.
The four section font sets that section styles used to `@import` (HeroCarbon, SituationSection, StageIdentify,
EngageExperienceSection) are linked in `index.html` instead, right after the main font link and in that order, so every
section uses the same shared font files (a bundled `@import` made Vite copy the files a second time). `index.html` also
preloads the first screen's font files; keep that list to files the page itself uses (no warnings in the console).
Font files are cached for a year by the `/fonts/files/*` rule in the shared `netlify.toml`.

## Page addresses, titles and share preview (always keep)

From the 26 Nov upload folder: `index.html` has the page title, Google description, canonical address, tab icon
(`/logo-behavency.png`, our full logo); the canonical address, share address and share picture use https://www.behavency.com/ (the primary domain in Netlify) and the share preview (`public/social-preview.jpg`, 1200×630), plus the address
script (`window.BHV_TITLES`) that gives the pop-up pages real addresses: `/about`, `/recruitment`, `/privacy`,
`/programmes`. The build writes those four pages (`about.html` etc.) from `index.html` with their own title and
description: the texts are in `vite.config.js` (`addressPages`). A design update that brings a new `index.html` head
must keep these. The folder's own phone/desktop switch (by screen width, with `/m/` addresses) is NOT used: phones get
the phone site at the same address through `netlify/edge-functions/device.js`, which also knows the four pages.
