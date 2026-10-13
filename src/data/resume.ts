import { site, skillGroups, timeline } from './site'
import { projects } from './projects'

/** Path of the resume PDF — drop your file at public/resume/Atta-Ullah-Resume.pdf */
export const resumePdf = 'resume/Atta-Ullah-Resume.pdf'

export const resume = {
  name: site.name,
  role: site.role,
  email: site.email,
  location: site.location,
  summary: site.intro,
  links: [
    { label: 'github.com/Eng-AttaUllah', href: 'https://github.com/Eng-AttaUllah' },
    { label: 'linkedin.com/in/attaullah', href: 'https://www.linkedin.com/in/attaullah' },
  ],
  education: timeline,
  skills: skillGroups,
  projects: projects.map((p) => ({
    title: p.title,
    description: p.description,
    tags: p.tags,
    repo: p.repo,
  })),
}
