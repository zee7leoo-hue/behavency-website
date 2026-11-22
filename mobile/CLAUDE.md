# Behavency Mobile Website

This website is edited from two places: a Windows PC and a phone. Both use the
GitHub repo `tennispulse90/Behavency-Mobile-Website-V1`.

## Branches

- **`dev`**: the working branch. Every change is saved here. Nothing deploys
  from it.
- **`main`**: the live branch. If Netlify is connected, it deploys `main`
  automatically on every push. **Only update `main` when the user explicitly
  asks to deploy.**

## Sync rule (always follow)

**At the start of every session, before reading or editing anything:**
1. Run `git fetch origin` and `git status`.
2. Switch to `dev` (`git checkout dev`, or `git checkout -b dev origin/dev` if it
   isn't local yet) and run `git pull --ff-only origin dev`.
3. If the pull fails because of local changes or a conflict, stop and tell the
   user. Don't force anything or discard their work.
4. Tell the user in one line which latest commit you are starting from.

**At the end of every task that changed files (save only, do NOT deploy):**
1. Commit the changes to `dev` with a clear one-line message.
2. Push them with `git push origin dev`, so the other device starts from
   exactly this point.
3. If the push is rejected because the other device pushed first, run
   `git pull --rebase origin dev`, then push again. If that conflicts, stop and
   tell the user.
4. Tell the user it's saved to GitHub on `dev` and has **not** been deployed.

**Only when the user asks to deploy:**
1. Make sure `dev` is committed and pushed.
2. Run `git checkout main && git pull --ff-only origin main`, then
   `git merge --ff-only dev` (if fast-forward isn't possible, use
   `git merge --no-edit dev`; if that conflicts, stop and tell the user).
3. Run `git push origin main`. Netlify then deploys it.
4. Switch back with `git checkout dev` and tell the user it's deployed.

Never use `git push --force` or `git reset --hard` on `main` or `dev` unless the
user explicitly asks for it.
