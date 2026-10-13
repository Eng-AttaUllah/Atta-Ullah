import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="container-page py-20">
      <p className="section-label">Work</p>
      <h1 className="section-title mt-2">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted">
        A selection of things I've built — from computer vision and Android ML to dependency-free
        web apps.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
