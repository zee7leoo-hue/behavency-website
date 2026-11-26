/* Sends the "Request a demo" pop-up form (built by public/contact-modal.js) to Netlify Forms.
   The pop-up's own script only shows "Thank you" and sends nothing, so this catches the submit first, posts it as the
   "contact" form (registered by the hidden form in index.html), and then shows the same "Thank you" message.
   If sending fails, the form stays filled in and an error line appears under the button. */

const DONE = '<div class="cm-done"><b>Thank you.</b><p>We’ll be in touch soon.</p></div>'

window.addEventListener('submit', async (e) => {
  const form = e.target
  if (!form || !form.matches || !form.matches('form.cm-form')) return
  e.preventDefault()
  e.stopPropagation()
  if (form.dataset.sending) return
  form.dataset.sending = '1'

  const btn = form.querySelector('.cm-send')
  const label = btn ? btn.textContent : ''
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…' }
  const old = form.querySelector('.cm-err')
  if (old) old.remove()

  const fd = new FormData(form)
  const body = new URLSearchParams({
    'form-name': 'contact',
    name: fd.get('name') || '',
    email: fd.get('email') || '',
    phone: fd.get('phone') || '',
    organization: fd.get('org') || '',
    role: fd.get('role') || '',
    managers: fd.get('managers') || '',
    interest: fd.getAll('interest').join(', '),
    message: fd.get('message') || '',
  })

  try {
    const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
    if (!res.ok) throw new Error(String(res.status))
    const box = form.closest('.cm-body')
    if (box) box.innerHTML = DONE
  } catch {
    delete form.dataset.sending
    if (btn) { btn.disabled = false; btn.textContent = label }
    const p = document.createElement('p')
    p.className = 'cm-note cm-err'
    p.style.color = '#c0392b'
    p.textContent = 'Something went wrong. Please try again, or e-mail us at info@behavency.com'
    if (btn) btn.after(p)
  }
}, true)
