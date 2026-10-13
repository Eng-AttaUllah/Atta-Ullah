import { FaGithub } from 'react-icons/fa6'
import { FiExternalLink, FiLock } from 'react-icons/fi'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="section-label">{project.kicker}</p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{project.title}</h3>
        </div>

        {/* GitHub link (or a hint that the repo is not public yet) */}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="mt-1 text-xl text-muted transition-colors hover:text-primary"
          >
            <FaGithub />
          </a>
        ) : (
          <span
            title="Repository not public yet"
            aria-label="Repository not public yet"
            className="mt-1 text-xl text-edge"
          >
            <FiLock />
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 border-t border-edge pt-4 text-sm">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-primary"
          >
            <FaGithub /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-primary"
          >
            <FiExternalLink /> Live demo
          </a>
        )}
        {!project.repo && !project.demo && (
          <span className="text-xs text-muted">Source coming soon</span>
        )}
      </div>
    </article>
  )
}
