import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BootSequence from '../components/BootSequence'
import Neofetch from '../components/Neofetch'
import ProjectCard from '../components/ProjectCard'
import StatusBadge from '../components/StatusBadge'
import { BinaryClock } from '../components/Clock'
import { categories, featuredProjects, projects } from '../data/projects'
import { site, stats } from '../data/site'
import { hasBooted, markBooted } from '../lib/boot'

const BORDER = `+${'-'.repeat(34)}+${'-'.repeat(44)}+${'-'.repeat(23)}+`

function pad(text: string, width: number) {
  return text.length >= width ? text.slice(0, width - 3) + '...' : text + ' '.repeat(width - text.length)
}

const HEADER = `| ${pad('DIRECTORY NODE', 32)} | ${pad('STACK CORE', 42)} | ${pad('RECENT SYS STATUS', 21)} |`

export default function Home() {
  const [booted, setBooted] = useState(() => hasBooted())
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  const finishBoot = () => {
    markBooted()
    setBooted(true)
  }

  const rows = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  if (!booted) {
    return (
      <div className="container boot-container">
        <div className="boot-terminal">
          <div className="window-bar">
            <div className="window-dots">
              <span className="window-dot window-dot--red" />
              <span className="window-dot window-dot--amber" />
              <span className="window-dot window-dot--green" />
            </div>
            <span className="window-title">boot_sequence.log</span>
          </div>
          <BootSequence onComplete={finishBoot} />
        </div>
      </div>
    )
  }

  return (
    <div className="container home-page">
      {/* Hero */}
      <section className="hero-split">
        <div className="hero-text">
          <div className="hero-eyebrow mono">
            <StatusBadge status="active" label="active" /> {site.availability}
          </div>
          <h1 className="hero-title">
            {site.name}
            <span className="hero-cursor">_</span>
          </h1>
          <p className="hero-subtitle mono">
            {site.role} · {site.location} · CGPA {site.cgpa}
          </p>
          <p className="hero-tagline">{site.tagline}</p>
          <p className="hero-objective">{site.objective}</p>
          <div className="hero-actions">
            <a href="resume/Atta-Ullah-Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary mono">
              <span>↓</span> Download Resume
            </a>
            <Link to="/projects" className="btn btn-secondary mono">
              <span>→</span> View Projects
            </Link>
            <Link to="/contact" className="btn btn-ghost mono">
              <span>$</span> Contact Me
            </Link>
          </div>
        </div>

        {/* photo terminal */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-terminal">
            <div className="hero-photo-bar">
              <div className="hero-terminal-dots" style={{ display: 'flex', gap: 6 }}>
                <span className="nav-wb-dot nav-wb-dot--red" />
                <span className="nav-wb-dot nav-wb-dot--amber" />
                <span className="nav-wb-dot nav-wb-dot--green" />
              </div>
              <span className="mono hero-photo-title">profile_img.png — preview</span>
            </div>
            <div className="hero-photo-body">
              <img
                src="profile.jpg"
                alt={`${site.name} — ${site.role}`}
                className="hero-photo-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement?.classList.add('hero-photo-placeholder-active')
                }}
              />
              <div className="hero-photo-placeholder">
                <span>👤</span>
                <span>awaiting upload...</span>
                <span>place profile.jpg in /public</span>
              </div>
            </div>
            <div className="hero-photo-meta mono">
              <span>loc: {site.location}</span>
              <span>mail: {site.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="stats-bar-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-bar-card">
              <div className="stats-bar-value mono">{stat.value}</div>
              <div className="stats-bar-label mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="featured-projects-section">
        <div className="section-head">
          <h2 className="section-title mono">
            <span className="section-id">featured</span> Projects
          </h2>
          <Link to="/projects" className="view-all-link mono">
            View All →
          </Link>
        </div>
        <div className="project-cards-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Dashboard: neofetch + clock */}
      <section className="dashboard-grid">
        <div className="dashboard-col dashboard-col--wide">
          <div className="dashboard-panel">
            <div className="panel-header mono">sysinfo.fetch</div>
            <div className="panel-body">
              <Neofetch />
            </div>
          </div>
        </div>
        <div className="dashboard-col">
          <div className="dashboard-panel">
            <div className="panel-header mono">system_clock.exe</div>
            <div className="panel-body clock-panel-body">
              <BinaryClock />
            </div>
          </div>
        </div>
      </section>

      {/* Projects terminal table */}
      <section className="projects-terminal-section">
        <div className="section-head">
          <h2 className="section-title mono">
            <span className="section-id">ls -la</span> ~/projects
          </h2>
          <div className="mono text-dim font-sm">
            {projects.length} nodes registered. Click row to view details.
          </div>
        </div>

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

        <div className="ansi-table-container">
          <div className="overflow-x-auto">
            <pre className="ansi-border">{BORDER}</pre>
            <pre className="ansi-header">{HEADER}</pre>
            <pre className="ansi-border">{BORDER}</pre>
            <div className="ansi-rows-wrapper">
              {rows.map((project) => (
                <div
                  key={project.slug}
                  className="ansi-row"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') navigate(`/projects/${project.slug}`)
                  }}
                >
                  <span className="ansi-name">{pad(project.name, 32)}</span>
                  <span>{pad(project.stack.join(', '), 42)}</span>
                  <span>{pad(project.statusLabel, 21)}</span>
                </div>
              ))}
            </div>
            <pre className="ansi-border">{BORDER}</pre>
          </div>
        </div>
      </section>
    </div>
  )
}
