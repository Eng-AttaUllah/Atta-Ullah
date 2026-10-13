export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'email'
}

export const site = {
  name: 'Atta Ullah',
  initials: 'AU',
  role: 'Artificial Intelligence Undergraduate',
  tagline: 'Exploring AI, one project at a time.',
  email: 'realattaullah461@gmail.com',
  location: 'Pakistan',
  intro:
    'I build practical machine learning projects — turning raw data into predictions and ideas into working software.',
  about: [
    "I'm Atta Ullah, an Artificial Intelligence undergraduate focused on machine learning, data-driven problem solving, and building practical AI projects.",
    'My stack includes Python, Jupyter, scikit-learn, Pandas, NumPy, and Matplotlib, along with Git and GitHub for collaboration and version control.',
    'I enjoy working with datasets, models, and code — turning raw data into predictions and ideas into working projects. Recently I\'ve been building classifiers and prediction models, and I\'m always exploring something new in AI.',
  ],
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Resume', to: '/resume' },
  ] satisfies NavLink[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Eng-AttaUllah', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/attaullah', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/realattaullahkhan/', icon: 'instagram' },
    { label: 'Email', href: 'mailto:realattaullah461@gmail.com', icon: 'email' },
  ] satisfies SocialLink[],
}

export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Data',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Linux', 'Vite', 'React'],
  },
]

export interface TimelineItem {
  period: string
  title: string
  org: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    period: '2023 — Present',
    title: 'BS Computer Science',
    org: 'Abdul Wali Khan University Mardan (AWKUM)',
    description:
      'Semester 7. Focus on artificial intelligence, machine learning, and data-driven problem solving.',
  },
  {
    period: '2025 — Present',
    title: 'Final Year Project — AdVeto',
    org: 'Supervised by Mrs. Sawera Qureshi',
    description:
      'Ad-region detection and age-aware risk classification for Android advertisements, with an on-device multimodal (image + OCR text) classifier.',
  },
]
