# Behavency website (desktop + mobile)

This repo holds both Behavency websites, published together by Netlify on one address:

- **`desktop/`**: the desktop site (Vite + React). Served at the root.
- **`mobile/`**: the phone site (Vite + React, plus the design scripts in `mobile/public/`). Built into `/m/`.
- **`netlify/edge-functions/device.js`**: on the home page and on `/about`, `/recruitment`, `/privacy`, `/programmes`, phones get
  the mobile site and everything else the desktop site, on the same address. `?view=mobile` / `?view=desktop` / `?view=auto` override it for 30 days.
- **`scripts/build-site.sh`** + **`netlify.toml`**: the build Netlify runs (desktop at `/`, mobile in `/m/`); `netlify.toml` also
  caches the font files and sends `/login` to `app.behavency.com/login`.

It is edited from two places: a Windows PC and a phone.

## Keep the two sites separate (always follow)

- A change asked for the **mobile** site touches files in `mobile/` only. A change asked for the **desktop** site touches
  files in `desktop/` only. Never edit the other folder as a side effect.
- `netlify.toml`, `scripts/build-site.sh` and `netlify/edge-functions/device.js` are shared: change them only when the
  user asks about the build, the deploy or how visitors are sent to each site.
- After a change, tell the user which files changed, so they can see the other site was not touched.

## Heading fonts (always follow, both sites, every language)

The user is standardising the heading fonts (English first; Georgian and Russian follow the same rules). Use these
rules for any heading you create or change:

1. **Section titles** (the big heading of each section, page titles, pop-up titles): `"Source Serif 4"`, weight 600,
   letter-spacing about `-0.02em`, dark navy. The highlighted key words: `"Source Serif 4"` italic, weight 400, in the
   section's colour. No decorative underlines or swooshes under titles.
2. **Phone**: section titles 40px; a long title is made slightly smaller so it never takes more than 4 lines.
3. **Card titles** (cards, steps): `"Source Serif 4"`, weight 600.
4. **List items, small labels, buttons and normal text**: `"Inter"`. Small labels: Inter 600, capitals, wide spacing.
5. **`"Playfair Display"` stays only for**: the logo, the phone top headline ("Most managers don't know where they're
   falling short."), and the "Stage 1 of 4 · Identify" stage openers.
6. **No other fonts** (no Plus Jakarta Sans, no Arial). In new font stacks use only the generic fallbacks:
   `"Source Serif 4", serif` and `"Inter", sans-serif`.

Where the rules live (27 Nov): the upload folder's "heading style C" files, copied as they are:
`desktop/public/type-c.css`, `mobile/public/type-c.css` + `mobile/public/type-c.js` (linked last in each `index.html`;
the script fits long phone titles into 4 lines, down to 34px). The few rules style C does not cover are in
`desktop/public/font-standard.css` ("What's at stake" title and cards). A new upload with a newer style C replaces those files.

All three fonts are already self-hosted (see "Fonts come from the site itself" in `desktop/CLAUDE.md` / `mobile/CLAUDE.md`).
When a design link is copied "exactly", the link's own fonts are copied as they are unless the user asks to apply
these rules to it; say so in the summary if the link uses fonts these rules don't allow.

## Branches

- **`dev`**: the working branch. Every change is saved here. Nothing deploys from it.
- **`main`**: the live branch. Netlify deploys `main` automatically on every push.
  **Only update `main` when the user explicitly asks to deploy.**

## Russian test site: branch `ru` (from 27 Nov)

- **`ru`**: the Russian desktop + mobile site, for testing only. Netlify builds it as a branch deploy at
  `https://ru--behavency-website.netlify.app` (branch deploys for `ru` are switched on in Netlify). It never touches
  behavency.com. "Deploy" still means `main` (English); Russian work is committed and pushed to `ru` only
  (`git push origin ru`), never merged into `dev` or `main` until the user asks to bring Russian to the main site
  (then it gets a language switcher).
- It was made from the user's Russian design links (desktop `TmkqwPqscv2F3QUm6rVoAU`, mobile `7AwiuFdUycRwQpoJrudsrA`): the
  texts were carried into our own source (`desktop/src`, `mobile/src`) and the Russian design scripts copied into
  `public/`, so every kept setting (logo, menu bar, demo form to Netlify, fonts, addresses, phone/desktop switch, style C)
  still applies. Russian-only files: `public/ru-fixes.css` (linked last) and `public/ru-headings.js` on both sites.
- On `ru` only: `<html lang="ru">`, the Russian page title (also in each `vite.config.js` `addressPages`), a
  `noindex` robots tag (take it out when Russian goes to the main site), and the Russian "Спасибо" message in
  `src/netlifyContact.js`. The interest options of the demo form arrive in Netlify in Russian.

## Sync rule (always follow)

**At the start of every session, before reading or editing anything:**
1. Run `git fetch origin` and `git status`.
2. Switch to `dev` (`git checkout dev`, or `git checkout -b dev origin/dev` if it isn't local yet) and run
   `git pull --ff-only origin dev`.
3. If the pull fails because of local changes or a conflict, stop and tell the user. Don't force anything or discard
   their work.
4. Tell the user in one line which latest commit you are starting from.

**At the end of every task that changed files (save only, do NOT deploy):**
1. Commit the changes to `dev` with a clear one-line message.
2. Push them with `git push origin dev`, so the other device starts from exactly this point.
3. If the push is rejected because the other device pushed first, run `git pull --rebase origin dev`, then push again.
   If that conflicts, stop and tell the user.
4. Tell the user it's saved to GitHub on `dev` and has **not** been deployed.

**Only when the user asks to deploy:**
1. Make sure `dev` is committed and pushed.
2. Run `git checkout main && git pull --ff-only origin main`, then `git merge --ff-only dev` (if fast-forward isn't
   possible, use `git merge --no-edit dev`; if that conflicts, stop and tell the user).
3. Run `git push origin main`. Netlify then deploys it.
4. Switch back with `git checkout dev` and tell the user it's deployed.

Never use `git push --force` or `git reset --hard` on `main` or `dev` unless the user explicitly asks for it.

## History

Both folders were moved in with their full history from the old repos `tennispulse90/Behavency-Mobile-Website-V1`
(branch `dev`) and `tennispulse90/Behavency-Desktop` (branch `main`). Those old repos are kept as a backup and are no
longer worked on.
