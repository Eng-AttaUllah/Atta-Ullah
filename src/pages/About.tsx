import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WindowBar from '../components/WindowBar'
import { activities, bio, certifications, education, skillFolders } from '../data/about'
import { site } from '../data/site'

type TabId = 'bio' | 'skills' | 'education' | 'certs' | 'activities'

const TABS: { id: TabId; command: string; label: string }[] = [
  { id: 'bio', command: 'cat bio.md', label: 'Biography' },
  { id: 'skills', command: 'ls -l skills/', label: 'Skills & Stack' },
  { id: 'education', command: 'cat education.log', label: 'Education' },
  { id: 'certs', command: 'cat certs.json', label: 'Certifications' },
  { id: 'activities', command: 'cat activities.log', label: 'Activities' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className="copy-btn mono" onClick={copy} title="Copy to clipboard">
      {copied ? '✓ Copied!' : '⧉ Copy'}
    </button>
  )
}

function BioPane() {
  return (
    <div className="bio-pane">
      <div className="bio-tag mono"># {site.name.toLowerCase().replace(/\s+/g, '_')}.md</div>
      {bio.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="bio-meta">
        <div className="bio-meta-row">
          <span className="bio-meta-label">name:</span>
          <span className="bio-meta-val">{site.name}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">role:</span>
          <span className="bio-meta-val">{site.role}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">location:</span>
          <span className="bio-meta-val">{site.location}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">phone:</span>
          <a className="meta-link" href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
            {site.phone}
          </a>
          <CopyButton text={site.phone} />
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">email:</span>
          <a className="meta-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <CopyButton text={site.email} />
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">github:</span>
          <a
            className="meta-link"
            href="https://github.com/Eng-AttaUllah"
            target="_blank"
            rel="noreferrer"
          >
            Eng-AttaUllah
          </a>
          <CopyButton text="https://github.com/Eng-AttaUllah" />
        </div>
      </div>
    </div>
  )
}

function SkillsPane() {
  return (
    <div>
      <div className="skills-intro mono">
        Total categories: {skillFolders.length}
        <br />
        Permissions: drwxr-xr-x (read-only reference)
      </div>
      <div className="skills-folders">
        {skillFolders.map((folder) => (
          <div key={folder.label} className="skill-folder-card">
            <div className="skill-folder-header mono">
              <span className="folder-icon">📁</span>
              <span className="folder-name">{folder.label}/</span>
            </div>
            <div className="skill-folder-body">
              {folder.items.map((item) => (
                <span key={item} className="skill-badge mono">
                  <span className="badge-dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EducationPane() {
  return (
    <div className="timeline">
      {education.map((item, i) => (
        <div key={item.degree} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot" />
            {i < education.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4 className="timeline-degree">{item.degree}</h4>
              <span className="timeline-period mono">{item.period}</span>
            </div>
            <div className="timeline-school mono">{item.school}</div>
            <div className="timeline-detail mono">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CertsPane() {
  return (
    <div className="certs-grid">
      {certifications.map((cert) => (
        <div key={cert.name} className="cert-card">
          <div className="cert-card-main">
            <div className="cert-card-issuer mono">[{cert.issuer}]</div>
            <h4 className="cert-card-name">
              {cert.name}
              {cert.honor && (
                <span className="project-badge mono" style={{ marginLeft: 8 }}>
                  Honors
                </span>
              )}
            </h4>
            <div className="cert-card-date">{cert.period}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ActivitiesPane() {
  return (
    <div className="timeline">
      {activities.map((item) => (
        <div key={item.role} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot" />
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4 className="timeline-degree">{item.role}</h4>
              <span className="timeline-period mono">{item.period}</span>
            </div>
            <div className="timeline-school mono">{item.org}</div>
            <div className="timeline-detail mono">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const [tab, setTab] = useState<TabId>('bio')
  const [typed, setTyped] = useState(TABS[0].command)
  const [typing, setTyping] = useState(false)

  const switchTab = (id: TabId) => {
    if (id === tab || typing) return
    setTyped('')
    setTyping(true)
    setTab(id)
  }

  // typewriter effect: types the active command one character at a time
  useEffect(() => {
    if (!typing) return
    const command = TABS.find((t) => t.id === tab)!.command
    let i = 0
    const id = setInterval(() => {
      i += 1
      if (i >= command.length) {
        clearInterval(id)
        setTyped(command)
        setTyping(false)
      } else {
        setTyped(command.slice(0, i))
      }
    }, 25)
    return () => clearInterval(id)
  }, [tab, typing])

  return (
    <div className="container about-page">
      <header className="about-head">
        <h1 className="page-title mono">
          <span className="page-id">man</span> {site.handle}
        </h1>
        <p className="page-sub">NAME, EDUCATION, SKILLS, CERTIFICATIONS — section 1</p>
      </header>

      <div className="tframe about-frame">
        <WindowBar title={`man ${site.handle}(1)`} variant="tframe" />

        <div className="terminal-tabs-row">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`terminal-tab-btn mono${tab === t.id ? ' active' : ''}`}
              onClick={() => switchTab(t.id)}
              disabled={typing}
            >
              <span className="tab-cmd">{t.command}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="terminal-active-prompt mono">
          <span className="prompt-dollar">$</span>
          {typed}
          <span className="prompt-cursor">▊</span>
        </div>

        <div className="tab-pane-content">
          {tab === 'bio' && <BioPane />}
          {tab === 'skills' && <SkillsPane />}
          {tab === 'education' && <EducationPane />}
          {tab === 'certs' && <CertsPane />}
          {tab === 'activities' && <ActivitiesPane />}
        </div>

        <div className="see-also-footer mono">
          <h4>SEE ALSO</h4>
          <p style={{ margin: 0 }}>
            <Link to="/projects" className="see-also-link">
              projects(1)
            </Link>
            ,{' '}
            <Link to="/contact" className="see-also-link">
              contact(1)
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
