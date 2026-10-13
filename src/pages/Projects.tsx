import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import { categories, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  const rows = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div className="container projects-page">
      <header className="projects-head">
        <h1 className="page-title mono">
          <span className="page-id">ls -la</span> ~/projects
        </h1>
        <p className="page-sub">{projects.length} entries — selected work & repositories.</p>
      </header>

      <div className="filter-row mono">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip${filter === category ? ' active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category === 'all' ? 'all' : category.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="plist">
        <div className="plist-header mono">
          <span className="col-pid">PID</span>
          <span className="col-name">NAME</span>
          <span className="col-cat">CATEGORY</span>
          <span className="col-status">STATUS</span>
          <span className="col-year">YEAR</span>
        </div>
        {rows.map((project) => (
          <div
            key={project.slug}
            className="plist-row"
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/projects/${project.slug}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate(`/projects/${project.slug}`)
            }}
          >
            <span className="col-pid mono">{project.pid}</span>
            <span className="col-name">
              <span className="plist-name">{project.name}</span>
              <span className="plist-tagline">{project.tagline}</span>
            </span>
            <span className="col-cat mono">{project.category}</span>
            <span className="col-status">
              <StatusBadge status={project.status} label={project.statusLabel} />
            </span>
            <span className="col-year mono">{project.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
