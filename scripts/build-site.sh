#!/usr/bin/env bash
# Builds the one site Netlify publishes (folder "site"): desktop/ at the root, mobile/ in /m/.
# Run by Netlify (netlify.toml). Locally, from the repo root: bash scripts/build-site.sh
set -euo pipefail
cd "$(dirname "$0")/.."

# 1) desktop site, at the root
(cd desktop && npm ci && npx vite build --outDir ../site --emptyOutDir)

# 2) mobile site, built for the /m/ folder
(cd mobile && npm ci && npx vite build --base /m/ --outDir ../site/m --emptyOutDir)

# 3) the phone page is also shown at "/" (same address as desktop), so its files must not depend on the folder it sits in:
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
if [ -d site/m/team ]; then
  for f in site/m/team/*; do [ -e "site/team/$(basename "$f")" ] || cp "$f" site/team/; done
fi

echo "Built: desktop at /, mobile at /m/ (served at / to phones by netlify/edge-functions/device.js)"
