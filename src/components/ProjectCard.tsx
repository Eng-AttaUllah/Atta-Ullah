import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-bar">
        <div className="project-card-dots">
          <span className="card-dot card-dot--red" />
          <span className="card-dot card-dot--amber" />
          <span className="card-dot card-dot--green" />
        </div>
        <span className="project-card-title mono">{project.name.toLowerCase().replace(/\s+/g, '_')}</span>
        <span className="project-card-year mono">{project.year}</span>
      </div>

      <div className="project-card-body">
        {project.badge && <span className="project-badge mono">{project.badge}</span>}
        <p className="project-card-tagline">{project.tagline}</p>
        <div className="project-card-meta">
          <StatusBadge status={project.status} label={project.statusLabel} />
          <div className="project-card-stack">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="stack-pill mono">
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="stack-pill stack-pill--more mono">+{project.stack.length - 3}</span>
            )}
          </div>
        </div>
        <span className={`project-card-repo mono${project.repo ? '' : ' disabled'}`}>
          {project.repo ? 'view source ↗' : 'source coming soon'}
        </span>
      </div>
    </Link>
  )
}
