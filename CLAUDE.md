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

## Branches

- **`dev`**: the working branch. Every change is saved here. Nothing deploys from it.
- **`main`**: the live branch. Netlify deploys `main` automatically on every push.
  **Only update `main` when the user explicitly asks to deploy.**

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
