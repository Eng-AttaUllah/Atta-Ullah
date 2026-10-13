import { Link } from 'react-router-dom'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'
import { site } from '../data/site'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        />
        <div className="container-page relative py-24 sm:py-32">
          <p className="section-label">Portfolio</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Hi, I'm <span className="gradient-text">{site.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {site.role} · {site.tagline}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View my work <FiArrowRight />
            </Link>
            <Link to="/resume" className="btn-ghost">
              <FiFileText /> Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-edge bg-surface/30 py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Featured</p>
              <h2 className="section-title mt-2">Selected projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              All projects <FiArrowRight />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page">
          <div className="card flex flex-col items-center gap-5 bg-gradient-to-br from-surface to-surface-2 p-10 text-center">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Looking for someone to build ML solutions?
            </h2>
            <p className="max-w-xl text-muted">
              I'm open to internships, freelance work, and collaborations in AI, machine learning,
              and web development.
            </p>
            <a href={`mailto:${site.email}`} className="btn-primary">
              Get in touch <FiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
