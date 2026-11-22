# Behavency-Desktop

This website is edited from two places: a Windows PC and a phone. Both use the
GitHub repo `tennispulse90/Behavency-Desktop` (branch `main`). Netlify deploys
`main` automatically on every push.

## Sync rule (always follow)

**At the start of every session, before reading or editing anything:**
1. Run `git fetch origin` and `git status`.
2. If the branch is behind `origin/main`, run `git pull --ff-only origin main`.
3. If the pull fails because of local changes or a conflict, stop and tell the
   user. Don't force anything or discard their work.
4. Tell the user in one line which latest commit you are starting from.

**At the end of every task that changed files:**
1. Commit the changes to `main` with a clear one-line message.
2. Push them with `git push origin main`, so the other device starts from
   exactly this point.
3. If the push is rejected because the other device pushed first, run
   `git pull --rebase origin main`, then push again. If that conflicts, stop and
   tell the user.
4. Tell the user it's pushed and that Netlify will deploy it.

Never use `git push --force` or `git reset --hard` on `main` unless the user
explicitly asks for it.
