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
3. **Gap above "See all programmes"** (`public/programmes-mobile.js`): the line
   `.tm .tm-allbtn { margin-top: 22px; }` right after the `.tm-allbtn:active` rule. Without it, `.tm button { margin: 0 }`
   removes the gap.

4. **The demo pop-up sends to Netlify Forms.** The pop-up itself follows the link (`public/contact-modal.js`, the
   user's choice on 23 Nov), but that script sends nothing. `src/netlifyContact.js` (imported in `src/main.jsx`) catches
   its submit and posts it as the Netlify "contact" form (the pop-up's `org` field is sent as `organization`; `phone`, `managers`,
   and the ticked `interest` boxes joined with commas, are sent too and are listed in the hidden form). Keep it,
   and keep the hidden `<form name="contact">` in `index.html`. If a new link changes the pop-up's form (class
   `cm-form`, field names, `.cm-body`/`.cm-send`), update `src/netlifyContact.js` to match.
5. **The demo pop-up is full screen on the phone**: the `.cm-ov` / `.cm` / `.cm-x` rules at the end of
   `src/styles.css` (white, no rounded card, close button fixed top right, slides up).

## Fonts come from the site itself, never from Google (always keep)

Some visitors' networks or browsers block Google Fonts, and then the site falls back to other fonts. So every Google
Fonts stylesheet the site uses is copied 1:1 into `public/fonts/`: `gf-<id>.css` (the CSS Google sends to a current
Chrome, `<id>` = first 8 hex characters of the SHA-1 of the Google URL) with its font files in `public/fonts/files/`
(linked by relative paths). Pages link the copies instead of `fonts.googleapis.com`, and there are no preconnect links
to Google. If a design update brings a new `https://fonts.googleapis.com/css2?...` link (in `index.html`, a CSS
`@import`, a script in `public/` or a page in `public/`), download it the same way and point it at the local copy.
On the phone site, links inside `public/` scripts and `src/assets/*.html` use `/m/fonts/...` (the site sits in `/m/`);
`index.html` uses `/fonts/...` and Vite adds the `/m/`.
`index.html` also preloads the first screen's font files (`/fonts/files/...`, Vite adds the `/m/`); keep that list to
files the page itself uses. Font files are cached for a year by the `/m/fonts/files/*` rule in the shared `netlify.toml`.
