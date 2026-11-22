// Same address for both sites: phones get the mobile site (/m/index.html), everything else the desktop site.
// To look at the other version on purpose, add ?view=mobile or ?view=desktop to the address (remembered for 30 days);
// ?view=auto goes back to automatic.
export default async (request, context) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') return context.next() // form posts pass straight through

  const url = new URL(request.url)
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

  // returning a URL serves that page at the same address (no redirect)
  return mobile ? new URL('/m/index.html', request.url) : context.next()
}

export const config = { path: ['/', '/index.html'] }
