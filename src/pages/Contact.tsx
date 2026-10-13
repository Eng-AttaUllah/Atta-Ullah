import { useState, type FormEvent } from 'react'
import { site } from '../data/site'

const icons = {
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact — ${form.name || 'no name'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="container contact-page">
      <header className="contact-head">
        <h1 className="page-title mono">
          <span className="page-id">ping</span> {site.handle}
        </h1>
        <p className="page-sub">Open to internships and entry-level AI/ML roles.</p>
      </header>

      <div className="quick-connect">
        {site.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.icon === 'email' || social.icon === 'phone' ? undefined : '_blank'}
            rel="noreferrer"
            className="quick-connect-btn"
          >
            {icons[social.icon]}
            <span>
              {social.label}
              <span className="quick-connect-detail mono">{social.handle}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <div className="contact-row">
            <label className="contact-label mono" htmlFor="contact-name">
              --name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="your name"
            />
          </div>
          <div className="contact-row">
            <label className="contact-label mono" htmlFor="contact-email">
              --email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="contact-row">
            <label className="contact-label mono" htmlFor="contact-message">
              --message
            </label>
            <textarea
              id="contact-message"
              required
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder="say hello..."
            />
          </div>
          <button type="submit" className="btn btn-primary mono">
            $ send --via-mail
          </button>
          {sent && <p className="contact-sent mono">✓ mail client opened — message ready to send</p>}
        </form>

        <div className="contact-side">
          <div className="dashboard-panel">
            <div className="panel-header mono">direct_contact.cfg</div>
            <div className="panel-body">
              <div className="contact-value-group">
                <span className="contact-label mono">email</span>
                <a className="contact-value meta-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              {site.socials
                .filter((s) => s.icon !== 'email')
                .map((social) => (
                  <div className="contact-value-group" key={social.label}>
                    <span className="contact-label mono">{social.label.toLowerCase()}</span>
                    <a
                      className="contact-value meta-link"
                      href={social.href}
                      target={social.icon === 'phone' ? undefined : '_blank'}
                      rel="noreferrer"
                    >
                      {social.icon === 'phone' ? social.handle : social.href.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                ))}
            </div>
          </div>
          <div className="contact-fallback mono">
            [ i ] Prefer email? The form opens your mail client — no server, no tracking.
          </div>
        </div>
      </div>
    </div>
  )
}
