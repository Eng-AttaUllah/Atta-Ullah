import { Link, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container notfound-page">
        <p className="notfound-code">404</p>
        <p className="notfound-msg">project not found: {slug}</p>
        <Link to="/projects" className="btn btn-ghost mono">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="container detail-page">
      <div className="detail-back-nav">
        <Link to="/projects" className="back-btn mono">
          ← Back to Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="detail-header-top">
          <h1 className="detail-title">{project.name}</h1>
          <div className="detail-header-meta">
            <StatusBadge status={project.status} label={project.statusLabel} />
            <span className="detail-year mono">{project.year}</span>
          </div>
        </div>
        <p className="detail-tagline">{project.tagline}</p>
        {project.badge && (
          <div className="detail-badges">
            <span className="detail-badge mono">{project.badge}</span>
          </div>
        )}
      </header>

      {/* spec sheet */}
      <div className="editor-window">
        <div className="editor-titlebar">
          <div className="editor-dots">
            <span className="editor-dot editor-dot--red" />
            <span className="editor-dot editor-dot--amber" />
            <span className="editor-dot editor-dot--green" />
          </div>
          <span className="editor-title mono">~/projects/{project.name}/spec_sheet.log</span>
        </div>
        <div className="editor-body">
          <div className="info-matrix mono">
            <div className="matrix-row">
              <span className="matrix-label">Project:</span>
              <span className="matrix-value text-accent">{project.name}</span>
            </div>
            <div className="matrix-row">
              <span className="matrix-label">Status:</span>
              <span className="matrix-value text-amber">{project.statusLabel}</span>
            </div>
            <div className="matrix-row">
              <span className="matrix-label">Category:</span>
              <span className="matrix-value">{project.category}</span>
            </div>
            <div className="matrix-row">
              <span className="matrix-label">Tech Stack:</span>
              <span className="matrix-value">{project.stack.join(', ')}</span>
            </div>
            <div className="matrix-row">
              <span className="matrix-label">Year:</span>
              <span className="matrix-value">{project.year}</span>
            </div>
          </div>

          <div className="spec-h2 mono">Overview</div>
          <p className="spec-line mono">{project.description}</p>

          <div className="spec-h2 mono">Key Highlights</div>
          <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none' }}>
            {project.highlights.map((item) => (
              <li key={item} className="spec-line mono">
                • {item}
              </li>
            ))}
          </ul>

          <div className="action-links-box">
            <div className="action-header mono">Links</div>
            <div className="action-buttons mono">
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noreferrer" className="action-trigger-btn">
                  View Source Code <span className="arrow">↗</span>
                </a>
              ) : (
                <span className="action-trigger-btn" style={{ opacity: 0.5, cursor: 'default' }}>
                  Source coming soon <span className="arrow">·</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
