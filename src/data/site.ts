export interface NavLink {
  label: string
  to: string
  cmd: string
}

export interface SocialLink {
  label: string
  handle?: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email' | 'phone'
}

export const site = {
  name: 'Atta Ullah',
  handle: 'attaullah',
  host: 'portfolio',
  role: 'BS Computer Science (AI) Student',
  location: 'Anarbaig, Gumbat, Dist. Mardan, Khyber Pakhtunkhwa, Pakistan',
  email: 'attikhan0344@gmail.com',
  phone: '+92 319-2527926',
  dob: '28 March 2005',
  tagline: 'Turning raw data into predictions, and ideas into working projects.',
  objective:
    'Computer Science undergraduate (5th semester) specializing in Artificial Intelligence at Abdul Wali Khan University Mardan, with a CGPA of 3.26/4.00 (76.2%). Strong foundation in programming, data structures, databases, and web development, complemented by professional certifications in AI and web technologies. Eager to apply software and problem-solving skills to real-world AI challenges.',
  availability: 'available for internships & entry-level roles',
  cgpa: '3.26 / 4.00',
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
    { label: 'Email', handle: 'attikhan0344', href: 'mailto:attikhan0344@gmail.com', icon: 'email' },
    { label: 'Phone', handle: '+92 319-2527926', href: 'tel:+923192527926', icon: 'phone' },
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
  { value: '7', label: 'Certifications' },
  { value: '3.26', label: 'CGPA / 4.00' },
]

/** Boot sequence lines (shown once per session) */
export const bootLines = [
  { text: 'booting attaullah.sys ...', delay: 0 },
  { text: 'loading modules: ai_ml, data_science, web_dev', delay: 150 },
  { text: 'fetching GitHub telemetry...', delay: 300 },
  { text: 'mounting /education ... AWKUM — BS CS (AI), 5th semester', delay: 450 },
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
  { label: 'Education:', value: 'BS CS (AI) — AWKUM · CGPA 3.26' },
  { label: 'Focus:', value: 'Machine Learning / AI' },
  { label: 'Theme:', value: 'CRT / Phosphor Green' },
]
