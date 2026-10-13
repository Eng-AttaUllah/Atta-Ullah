export interface NavLink {
  label: string
  to: string
  cmd: string
}

export interface SocialLink {
  label: string
  handle?: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email'
}

export const site = {
  name: 'Atta Ullah',
  handle: 'attaullah',
  host: 'portfolio',
  role: 'AI Undergraduate & Developer',
  location: 'Pakistan',
  email: 'realattaullah461@gmail.com',
  tagline: 'Turning raw data into predictions, and ideas into working projects.',
  objective:
    'Artificial Intelligence undergraduate focused on machine learning, data-driven problem solving, and practical AI projects — with hands-on internship experience in AI/ML and frontend development.',
  availability: 'available for internships & entry-level roles',
  gradYear: '2027',
  resumePage: '/resume',
  socials: [
    { label: 'GitHub', handle: 'Eng-AttaUllah', href: 'https://github.com/Eng-AttaUllah', icon: 'github' },
    {
      label: 'LinkedIn',
      handle: 'attaullah',
      href: 'https://www.linkedin.com/in/attaullah',
      icon: 'linkedin',
    },
    {
      label: 'Instagram',
      handle: 'realattaullahkhan',
      href: 'https://www.instagram.com/realattaullahkhan/',
      icon: 'instagram',
    },
    { label: 'Email', handle: 'realattaullah461', href: 'mailto:realattaullah461@gmail.com', icon: 'email' },
  ] satisfies SocialLink[],
}

export const nav: NavLink[] = [
  { to: '/', label: 'Home', cmd: '~' },
  { to: '/projects', label: 'Projects', cmd: 'ls' },
  { to: '/about', label: 'About', cmd: 'man' },
  { to: '/contact', label: 'Contact', cmd: 'ping' },
]

/** Stats bar under the hero */
export const stats = [
  { value: '7+', label: 'GitHub Projects' },
  { value: '2', label: 'Internships' },
  { value: '3', label: 'Featured Projects' },
  { value: '2027', label: 'Graduating' },
]

/** Boot sequence lines (shown once per session) */
export const bootLines = [
  { text: 'booting attaullah.sys ...', delay: 0 },
  { text: 'loading modules: ai_ml, data_science, web_dev', delay: 150 },
  { text: 'fetching GitHub telemetry...', delay: 300 },
  { text: 'mounting /education ... AWKUM — BS CS, semester 7', delay: 450 },
  { text: 'mounting /experience ... ZyroInterns × 2', delay: 575 },
  { text: 'system check: OK', delay: 675 },
  { text: 'status: READY', delay: 775 },
]

/** neofetch-style system info panel */
export const neofetch = [
  { label: 'OS:', value: 'PortfolioOS v2.6 (Web System)' },
  { label: 'Host:', value: 'eng-attaullah.github.io' },
  { label: 'Kernel:', value: 'React 19 + Vite 8' },
  { label: 'Shell:', value: 'bash / react-router-dom' },
  { label: 'Repos:', value: '7 public sources' },
  { label: 'Education:', value: 'BS CS — AWKUM (Semester 7)' },
  { label: 'Focus:', value: 'Machine Learning / AI' },
  { label: 'Theme:', value: 'CRT / Phosphor Green' },
]
