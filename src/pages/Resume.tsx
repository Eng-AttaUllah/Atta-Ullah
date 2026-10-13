import { FiDownload, FiMail } from 'react-icons/fi'
import { resume, resumePdf } from '../data/resume'

export default function Resume() {
  return (
    <section className="container-page py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label">Resume</p>
          <h1 className="section-title mt-2">{resume.name}</h1>
          <p className="mt-2 text-muted">
            {resume.role} · {resume.location}
          </p>
        </div>

        <div className="flex gap-3">
          <a href={resumePdf} download className="btn-primary">
            <FiDownload /> Download PDF
          </a>
          <a href={`mailto:${resume.email}`} className="btn-ghost">
            <FiMail /> Contact
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="card mt-10">
        <h2 className="font-display text-lg font-semibold">Summary</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{resume.summary}</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          {resume.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {resume.skills.map((group) => (
          <div key={group.title} className="card">
            <h2 className="font-display text-base font-semibold">{group.title}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="card mt-8">
        <h2 className="font-display text-lg font-semibold">Education</h2>
        <ul className="mt-4 space-y-5">
          {resume.education.map((item) => (
            <li key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <span className="text-xs font-medium text-primary">{item.period}</span>
              </div>
              <p className="text-sm text-muted">{item.org}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="card mt-8">
        <h2 className="font-display text-lg font-semibold">Selected projects</h2>
        <ul className="mt-4 space-y-5">
          {resume.projects.map((project) => (
            <li key={project.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-ink">{project.title}</h3>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    Repository
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
