export const bio = [
  'Motivated and detail-oriented undergraduate specializing in Artificial Intelligence, with a strong analytical foundation from a Pre-Engineering background (A1 grade, 948/1100 marks). Committed to continuous learning through professional coursework in AI, Marketing Analytics, and productivity tools from leading global institutions. Eager to apply technical and problem-solving skills to real-world AI and software challenges.',
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
  {
    label: 'office',
    items: ['MS PowerPoint (Advanced)', 'MS Office'],
  },
  {
    label: 'professional',
    items: ['Event Organization', 'Teamwork', 'Communication'],
  },
  {
    label: 'spoken',
    items: ['Pashto — Native', 'Urdu — Fluent', 'English — Professional'],
  },
]

export const education = [
  {
    degree: 'BS Computer Science (Artificial Intelligence)',
    school: 'Abdul Wali Khan University Mardan (AWKUM)',
    period: 'In Progress',
    detail: 'Final year project: AdVeto — ad-region detection & age-aware risk classification',
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    school: 'The Quaid International Model College, Panjpir, Swabi — BISE Mardan',
    period: '2023',
    detail: 'Secured 948 / 1100 marks (A1 Grade)',
  },
]

export interface Certification {
  name: string
  issuer: string
  period: string
  honor?: boolean
  file?: string
}

export const certifications: Certification[] = [
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    period: 'Coursera, Mar 2025',
  },
  {
    name: 'Marketing Analytics Foundation',
    issuer: 'Meta',
    period: 'Coursera, Jan 2025',
  },
  {
    name: 'Work Smarter with Microsoft PowerPoint',
    issuer: 'Microsoft',
    period: 'Coursera, Feb 2025',
    honor: true,
  },
  {
    name: 'Word Forms and Simple Present Tense',
    issuer: 'University of California, Irvine',
    period: 'Coursera, Feb 2025',
  },
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

export interface Activity {
  role: string
  org: string
  period: string
  detail: string
}

export const activities: Activity[] = [
  {
    role: "Organizer — 'Youtube Automation' Event",
    org: 'Technology & Innovation Society, AWKUM',
    period: 'January 2026',
    detail:
      'Under the supervision of the AWKUM Student Council and the Office of the Provost, Abdul Wali Khan University Mardan.',
  },
]

export const languages = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Professional Working Proficiency' },
]
