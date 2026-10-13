import { useState } from 'react'
import { skillGroups, site, timeline } from '../data/site'

function Avatar() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <div className="relative mx-auto h-40 w-40 shrink-0 sm:mx-0">
      {!photoFailed && (
        <img
          src="./profile.jpg"
          alt={site.name}
          className="h-40 w-40 rounded-full border border-edge object-cover"
          onError={() => setPhotoFailed(true)}
        />
      )}
      {photoFailed && (
        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-edge bg-gradient-to-br from-primary to-accent">
          <span className="font-display text-5xl font-bold text-white">{site.initials}</span>
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section className="container-page py-20">
      <p className="section-label">About</p>
      <h1 className="section-title mt-2">About me</h1>

      {/* Intro */}
      <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row">
        <Avatar />
        <div className="space-y-4">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <p className="font-display text-primary">"{site.tagline}"</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Journey so far</h2>
        <ol className="mt-6 space-y-6 border-l border-edge pl-6">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-base bg-primary"
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-muted">{item.org}</p>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
