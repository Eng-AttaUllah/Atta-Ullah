import { FiDownload, FiMail, FiPhone } from 'react-icons/fi'
import {
  activities,
  bio,
  certifications,
  education,
  languages,
  skillFolders,
} from '../data/about'
import { projects } from '../data/projects'
import { site } from '../data/site'

/** Path of the resume PDF — public/resume/Atta-Ullah-Resume.pdf */
const RESUME_PDF = 'resume/Atta-Ullah-Resume.pdf'

export default function Resume() {
  return (
    <div className="container resume-page">
      <header className="resume-head">
        <div>
          <h1 className="page-title mono">
            <span className="page-id">cat</span> resume.pdf
          </h1>
          <p className="page-sub">
            {site.name} · {site.role} · {site.location}
          </p>
        </div>
        <div className="resume-actions">
          <a href={RESUME_PDF} download className="btn btn-primary mono">
            <FiDownload /> Download CV
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost mono">
            <FiMail /> Contact
          </a>
        </div>
      </header>

      {/* Profile */}
      <section className="resume-section">
        <h2>profile</h2>
        <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.75 }}>
          {bio[0]}
        </p>
        <div className="bio-meta" style={{ borderTop: 'none', paddingTop: 10 }}>
          <div className="bio-meta-row">
            <span className="bio-meta-label">phone:</span>
            <a className="meta-link" href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
              {site.phone}
            </a>
          </div>
          <div className="bio-meta-row">
            <span className="bio-meta-label">email:</span>
            <a className="meta-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="bio-meta-row">
            <span className="bio-meta-label">location:</span>
            <span className="bio-meta-val">{site.location}</span>
          </div>
          {site.socials
            .filter((s) => s.icon === 'linkedin' || s.icon === 'github')
            .map((s) => (
              <div className="bio-meta-row" key={s.label}>
                <span className="bio-meta-label">{s.label.toLowerCase()}:</span>
                <a className="meta-link" href={s.href} target="_blank" rel="noreferrer">
                  {s.href.replace(/^https?:\/\//, '')}
                </a>
              </div>
            ))}
        </div>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>skills</h2>
        <div className="resume-skills-grid">
          {skillFolders.map((group) => (
            <div key={group.label}>
              <h3 className="mono" style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--amber)' }}>
                {group.label}/
              </h3>
              <div className="project-card-stack">
                {group.items.map((item) => (
                  <span key={item} className="stack-pill mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>education</h2>
        <ul className="resume-list">
          {education.map((item) => (
            <li key={item.degree}>
              <h3>{item.degree}</h3>
              <span className="meta">
                {item.school} · {item.period}
              </span>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <h2>certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">
              <div className="cert-card-main">
                <div className="cert-card-issuer mono">[{cert.issuer}]</div>
                <h4 className="cert-card-name">
                  {cert.name}
                  {cert.honor && <span className="project-badge mono" style={{ marginLeft: 8 }}>Honors</span>}
                </h4>
                <div className="cert-card-date">{cert.period}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>experience</h2>
        <ul className="resume-list">
          <li>
            <h3>AI/ML Intern</h3>
            <span className="meta">ZyroInterns · Aug 2026 – Oct 2026</span>
            <p>{bio[4]}</p>
          </li>
          <li>
            <h3>Frontend Development Intern</h3>
            <span className="meta">ZyroInterns · Aug 2026 – Oct 2026</span>
            <p>Completed the frontend development internship programme at ZyroInterns.</p>
          </li>
        </ul>
      </section>

      {/* Extracurricular */}
      <section className="resume-section">
        <h2>extracurricular</h2>
        <ul className="resume-list">
          {activities.map((item) => (
            <li key={item.role}>
              <h3>{item.role}</h3>
              <span className="meta">
                {item.org} · {item.period}
              </span>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2>projects</h2>
        <ul className="resume-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <h3>
                {project.name}
                {project.repo && (
                  <>
                    {' '}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="meta"
                      style={{ color: 'var(--accent)' }}
                    >
                      ↗
                    </a>
                  </>
                )}
              </h3>
              <span className="meta">
                {project.category} · {project.year} · {project.stack.join(', ')}
              </span>
              <p>{project.tagline}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="resume-section">
        <h2>languages</h2>
        <div className="project-card-stack">
          {languages.map((lang) => (
            <span key={lang.name} className="skill-badge mono">
              <span className="badge-dot" />
              {lang.name} — {lang.level}
            </span>
          ))}
        </div>
      </section>

      {/* direct contact strip */}
      <section className="resume-section">
        <h2>contact</h2>
        <div className="bio-meta" style={{ borderTop: 'none', paddingTop: 0 }}>
          <div className="bio-meta-row">
            <span className="bio-meta-label">
              <FiPhone style={{ verticalAlign: -2 }} /> phone:
            </span>
            <a className="meta-link" href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
              {site.phone}
            </a>
          </div>
          <div className="bio-meta-row">
            <span className="bio-meta-label">
              <FiMail style={{ verticalAlign: -2 }} /> email:
            </span>
            <a className="meta-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
