#!/usr/bin/env bash
# Builds the one site Netlify publishes (folder "site"): the desktop site at the root, the mobile site in /m/.
# Run by Netlify (netlify.toml). Locally: bash scripts/build-site.sh
set -euo pipefail

DESKTOP_REPO="${DESKTOP_REPO:-https://github.com/tennispulse90/Behavency-Desktop.git}"
DESKTOP_BRANCH="${DESKTOP_BRANCH:-main}"

rm -rf site desktop-src

# 1) mobile site (this repo), built for the /m/ folder
[ -d node_modules ] || npm ci
npx vite build --base /m/ --outDir site/m --emptyOutDir

# 2) desktop site, fetched from its own repo and built at the root
git clone --depth 1 --branch "$DESKTOP_BRANCH" "$DESKTOP_REPO" desktop-src
(cd desktop-src && npm ci && npx vite build --outDir ../site-desktop --emptyOutDir)
cp -R site-desktop/. site/
rm -rf site-desktop desktop-src

# 3) the mobile page is also shown at "/" (same address as desktop), so its files must not depend on the folder it sits in:
#    - the extra scripts it loads by a relative name get the /m/ prefix
#    - images those scripts load by a relative path ("assets/…", "team/…") are also copied to the root
for f in site/m/*.js; do
  name="$(basename "$f")"
  sed -i "s#src=\"$name\"#src=\"/m/$name\"#g" site/m/index.html
done
mkdir -p site/assets site/team
for f in site/m/assets/*; do
  case "$f" in *.js|*.css) continue ;; esac
  [ -e "site/assets/$(basename "$f")" ] || cp "$f" site/assets/
done
for f in site/m/team/*; do [ -e "site/team/$(basename "$f")" ] || cp "$f" site/team/; done

echo "Built: desktop at /, mobile at /m/ (served at / to phones by the edge function)"
