// Same address for both sites: phones get the mobile site (/m/index.html), everything else the desktop site.
// To look at the other version on purpose, add ?view=mobile or ?view=desktop to the address (remembered for 30 days);
// ?view=auto goes back to automatic.
export default async (request, context) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') return context.next() // form posts pass straight through

  const url = new URL(request.url)
  // behavency.me (domain alias) goes to the same page on www.behavency.com, permanently; netlify.toml does the other pages
  if (/(^|\.)behavency\.me$/i.test(url.hostname)) return Response.redirect(`https://www.behavency.com${url.pathname}${url.search}`, 301)
  const asked = url.searchParams.get('view')
  let choice = asked || context.cookies.get('bhv_view') || 'auto'
  if (asked === 'mobile' || asked === 'desktop') {
    context.cookies.set({ name: 'bhv_view', value: asked, path: '/', maxAge: 60 * 60 * 24 * 30, sameSite: 'Lax' })
  } else if (asked === 'auto') {
    context.cookies.delete({ name: 'bhv_view', path: '/' })
    choice = 'auto'
  }

  const ua = request.headers.get('user-agent') || ''
  const isPhone = /iPhone|iPod|Android.+Mobile|Windows Phone|BlackBerry|Opera Mini|IEMobile|Mobile Safari/i.test(ua) && !/iPad|Tablet/i.test(ua)
  const mobile = choice === 'mobile' || (choice === 'auto' && isPhone)

  // returning a URL serves that page at the same address (no redirect): the home page, or one of the pages with
  // their own address (/about, /recruitment, /privacy, /programmes), each built for both sites
  const page = url.pathname.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '')
  const file = PAGES.includes(page) ? `${page}.html` : 'index.html'
  return mobile ? new URL(`/m/${file}`, request.url) : context.next()
}

const PAGES = ['about', 'recruitment', 'privacy', 'programmes']

export const config = {
  path: ['/', '/index.html', '/about', '/about.html', '/recruitment', '/recruitment.html', '/privacy', '/privacy.html', '/programmes', '/programmes.html'],
}
