import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// Real addresses for the pop-up pages (from the 26 Nov upload folder): /about, /recruitment, /privacy, /programmes.
// After the build, each one is written as a copy of the home page with its own title, Google description, address and
// share texts. The address script in index.html then opens the matching page. Change the texts here.
const HOME = { title: "Behavency — Manager assessment and development", description: "Manager assessment and development: 360° feedback, a team game and tailored training for managers and teams, then re-assessment to show what changed." }
const PAGES = {
  about: { title: "About Behavency — who we are", description: "Behavency is made by OGI Europe. Since 2007 we have trained managers and their teams in more than 30 countries. Our vision: managers and teams, pulling the same way." },
  recruitment: { title: "Recruitment — Behavency", description: "A short online questionnaire for candidates in any role. It shows five competencies that help people do well at work, and what to explore in the interview." },
  privacy: { title: "Privacy Policy — Behavency", description: "How OGI Europe Kft. collects and uses personal data on the Behavency website, under the GDPR." },
  programmes: { title: "Programmes for managers and teams — Behavency", description: "Programmes for managers and teams. Each participant gets the programmes that match their priority areas, with a plan to apply them at work." },
}

function addressPages() {
  let outDir, base
  const swap = (s, from, to, times) => {
    const n = s.split(from).length - 1
    if (n !== times) throw new Error(`address pages: expected ${times} × ${from} in index.html, found ${n}`)
    return s.split(from).join(to)
  }
  return {
    name: 'address-pages',
    apply: 'build',
    configResolved(c) { outDir = path.resolve(c.root, c.build.outDir); base = c.base },
    closeBundle() {
      const home = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const [slug, p] of Object.entries(PAGES)) {
        let s = home
        s = swap(s, `<title>${HOME.title}</title>`, `<title>${p.title}</title>`, 1)
        s = swap(s, `content="${HOME.title}"`, `content="${p.title}"`, 1)
        s = swap(s, `content="${HOME.description}"`, `content="${p.description}"`, 2)
        s = swap(s, 'href="https://behavency.com/"', `href="https://behavency.com/${slug}"`, 1)
        s = swap(s, 'content="https://behavency.com/"', `content="https://behavency.com/${slug}"`, 1)
        // the phone site sits in its own folder: scripts linked by a bare name load from that folder at any address
        if (base !== '/') s = s.replace(/src="([\w.-]+\.js)"/g, (m, n) => (fs.existsSync(path.join(outDir, n)) ? `src="${base}${n}"` : m))
        fs.writeFileSync(path.join(outDir, `${slug}.html`), s)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), addressPages()],
  server: { host: true, port: 5174 },
})
