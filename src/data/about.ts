export const bio = [
  "I'm Atta Ullah, an Artificial Intelligence undergraduate focused on machine learning, data-driven problem solving, and building practical AI projects.",
  'My stack includes Python, Jupyter, scikit-learn, Pandas, NumPy, and Matplotlib, along with Git and GitHub for collaboration and version control — plus TypeScript and JavaScript for the web side.',
  "I enjoy working with datasets, models, and code — turning raw data into predictions and ideas into working projects. Recently I've been building classifiers and prediction models, and I'm always exploring something new in AI.",
  'Between August and October 2026 I completed two internships at ZyroInterns, one in AI/ML and one in Frontend Development.',
]

export const skillFolders = [
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'ai_ml',
    items: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    label: 'web',
    items: ['React', 'Vite', 'HTML/CSS', 'Git', 'GitHub'],
  },
]

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'Abdul Wali Khan University Mardan (AWKUM)',
    period: '2023 — Present',
    detail: 'Semester 7 · Final year project: AdVeto (ad-region detection & age-aware risk classification)',
  },
]

export interface Certification {
  name: string
  issuer: string
  period: string
  file?: string
}

export const certifications: Certification[] = [
  {
    name: 'Frontend Development Internship',
    issuer: 'ZyroInterns',
    period: 'Aug 2026 – Oct 2026',
  },
  {
    name: 'AI/ML Internship',
    issuer: 'ZyroInterns',
    period: 'Aug 2026 – Oct 2026',
  },
]
