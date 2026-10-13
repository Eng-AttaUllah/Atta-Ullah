export type ProjectStatus = 'active' | 'shipped' | 'in_progress'

export interface Project {
  slug: string
  pid: string
  name: string
  tagline: string
  category: string
  status: ProjectStatus
  statusLabel: string
  year: string
  stack: string[]
  /** GitHub repository URL — undefined until the repo is public */
  repo?: string
  /** Short description shown on the detail page */
  description: string
  /** Bullet highlights rendered on the detail page */
  highlights: string[]
  badge?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'adveto',
    pid: '01',
    name: 'AdVeto',
    tagline: 'Age-aware ad risk classification for Android — final year project.',
    category: 'ai_ml',
    status: 'in_progress',
    statusLabel: 'in_progress',
    year: '2026',
    stack: ['Python', 'Android', 'ML', 'OCR'],
    description:
      'AdVeto performs ad-region detection and age-aware risk classification on Android (API 29–35). The screen is captured through MediaProjection with explicit user consent, the advertisement region is localised, and classified along two paths — an image model over the pixels and a text model over strings recovered by on-device OCR. The two score vectors are fused and passed to an age-aware policy that returns allow, cover, or abstain for a configured age band.',
    highlights: [
      'Multimodal pipeline: image model + OCR text model with score-level fusion',
      'On-device int8-quantised classifier benchmarked against its floating-point counterpart',
      'MediaProjection capture with capture-denial handled as a first-class state',
      'Evaluated on per-class recall, macro-F1, decision latency, and peak memory',
    ],
    badge: '🎓 Capstone',
    featured: true,
  },
  {
    slug: 'theft-detection',
    pid: '02',
    name: 'Shop Theft Detection',
    tagline: 'Offline CCTV surveillance that flags suspicious behaviour in real time.',
    category: 'computer_vision',
    status: 'active',
    statusLabel: 'active',
    year: '2026',
    stack: ['Python', 'OpenCV', 'NumPy', 'ByteTrack'],
    repo: 'https://github.com/Eng-AttaUllah/Theft-Detection',
    description:
      'A Python surveillance system that watches a shop camera (or a recorded video) and raises alerts when someone is stealing — walking behind the counter, taking an item off a shelf, loitering, snatching, gathering a crowd as a distraction, or tampering with the camera. Detection, ByteTrack/BoT-SORT tracking, behaviour rules, and a fused theft-confidence score all run offline with OpenCV + NumPy: no cloud, no GPU, no model downloads required.',
    highlights: [
      'Eight behaviour rules: restricted zone, loitering, item removal, crowd, tamper, and more',
      'Kalman-filter ByteTrack tracker with low-score association and optional appearance re-ID',
      'Rule hits fused into a single 0–1 theft-confidence score per camera',
      'Alerts to console, events.jsonl, and snapshot images — works headless over a browser preview',
    ],
    featured: true,
  },
  {
    slug: 'daymark',
    pid: '03',
    name: 'Daymark',
    tagline: 'Dependency-free personal task manager with local-first storage.',
    category: 'web',
    status: 'shipped',
    statusLabel: 'shipped',
    year: '2026',
    stack: ['JavaScript', 'HTML/CSS', 'localStorage', 'Testing'],
    description:
      'A small, dependency-free task manager built with plain HTML, CSS, and JavaScript. Tasks are stored in localStorage, so everything you add stays put after a refresh and never leaves your device. Includes dark mode, search, filters, inline editing, drag-and-drop reordering, image attachments with client-side compression, undo toasts, and multi-tab sync — all backed by a 163-assertion jsdom test suite.',
    highlights: [
      'Zero runtime dependencies — plain HTML, CSS, and JavaScript',
      'Image attachments compressed client-side with a live localStorage quota meter',
      'Accessible: ARIA labels and live regions, keyboard-operable controls, reduced-motion support',
      '163-assertion jsdom test suite driving the real UI end to end',
    ],
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))]
