export const bio = [
  'Computer Science undergraduate (5th semester) specializing in Artificial Intelligence at Abdul Wali Khan University Mardan, with a CGPA of 3.26/4.00 (76.2%). Strong foundation in programming, data structures, databases, and web development, complemented by professional certifications in AI and web technologies. Eager to apply software and problem-solving skills to real-world AI challenges.',
  "I'm Atta Ullah, an Artificial Intelligence undergraduate focused on machine learning, data-driven problem solving, and building practical AI projects.",
  'My stack includes Python, Jupyter, scikit-learn, Pandas, NumPy, and Matplotlib, along with Git and GitHub for collaboration and version control — plus TypeScript and JavaScript for the web side.',
  "I enjoy working with datasets, models, and code — turning raw data into predictions and ideas into working projects. Recently I've been building classifiers and prediction models, and I'm always exploring something new in AI.",
  'Between August and October 2026 I completed two internships at ZyroInterns, one in AI/ML and one in Frontend Development.',
]

export const skillFolders = [
  {
    label: 'programming',
    items: ['C/C++ (OOP)', 'Data Structures', 'Algorithms'],
  },
  {
    label: 'web_database',
    items: ['HTML & CSS', 'Web Technologies', 'SQL'],
  },
  {
    label: 'core_cs',
    items: ['Operating Systems', 'Computer Networks', 'Software Engineering'],
  },
  {
    label: 'tools_ai',
    items: ['Artificial Intelligence', 'MS PowerPoint (Advanced)', 'MS Office'],
  },
  {
    label: 'analytical',
    items: ['Calculus', 'Linear Algebra', 'Probability & Statistics'],
  },
  {
    label: 'professional',
    items: ['Event Organization', 'Teamwork', 'Communication'],
  },
  {
    label: 'spoken',
    items: ['Pashto — Native', 'Urdu — Fluent', 'English — Professional Working Proficiency'],
  },
]

export interface EducationEntry {
  degree: string
  school: string
  period: string
  detail: string
  extra?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'BS Computer Science (Artificial Intelligence)',
    school: 'Abdul Wali Khan University Mardan (AWKUM)',
    period: '2023 – Present',
    detail: 'CGPA: 3.26 / 4.00 (76.2%) · 5th semester (84 credit hours) completed',
    extra: 'Coursework: Programming Fundamentals, OOP, Data Structures, Algorithms, Database Systems, Operating Systems, Web Technologies, Computer Networks, AI',
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    school: 'The Quaid International Model College, Panjpir, Swabi — BISE Mardan',
    period: '2023',
    detail: 'Secured 948 / 1100 marks (A1 Grade)',
  },
  {
    degree: 'Matriculation (Science)',
    school: 'Al-Muslim Public School, Dobian, Swabi — BISE Mardan',
    period: '2021',
    detail: 'Secured 946 / 1100 marks (A1 Grade)',
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
    name: 'HTML & CSS Crash Course',
    issuer: 'Scrimba',
    period: 'Coursera, Mar 2025',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    period: 'Coursera, Mar 2025',
  },
  {
    name: 'Work Smarter with Microsoft PowerPoint',
    issuer: 'Microsoft',
    period: 'Coursera, Feb 2025',
    honor: true,
  },
  {
    name: 'Marketing Analytics Foundation',
    issuer: 'Meta',
    period: 'Coursera, Jan 2025',
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
