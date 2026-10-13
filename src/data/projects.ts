export interface Project {
  slug: string
  title: string
  kicker: string
  description: string
  tags: string[]
  /** GitHub repository URL — undefined until the repo is public */
  repo?: string
  /** Live demo URL, if any */
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'adveto',
    title: 'AdVeto',
    kicker: 'Final Year Project',
    description:
      'Ad-region detection and age-aware risk classification for Android (API 29–35). Captures the screen via MediaProjection, localises the ad region, then classifies it along two paths — an image model over the pixels and a text model over on-device OCR — fusing both scores into an age-aware policy that returns allow, cover, or abstain.',
    tags: ['Machine Learning', 'Android', 'OCR', 'Multimodal'],
    featured: true,
  },
  {
    slug: 'theft-detection',
    title: 'Shop Theft Detection',
    kicker: 'Computer Vision',
    description:
      'Offline CCTV surveillance that raises alerts on restricted-zone entry, loitering, item removal, snatching, crowd distraction, and camera tampering. ByteTrack/BoT-SORT tracking feeds a fused theft-confidence score — OpenCV + NumPy only, no cloud or GPU required.',
    tags: ['Python', 'OpenCV', 'Object Tracking', 'NumPy'],
    repo: 'https://github.com/Eng-AttaUllah/Theft-Detection',
    featured: true,
  },
  {
    slug: 'daymark',
    title: 'Daymark',
    kicker: 'Personal Task Manager',
    description:
      'Dependency-free task manager in plain HTML, CSS, and JavaScript. localStorage persistence, dark mode, search, filters, drag-and-drop, image attachments with client-side compression, undo toasts, and multi-tab sync — backed by a 163-assertion jsdom test suite.',
    tags: ['JavaScript', 'HTML/CSS', 'localStorage', 'Testing'],
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
