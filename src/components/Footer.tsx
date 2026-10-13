import { site } from '../data/site'

const year = new Date().getFullYear()

export default function Footer() {
  const github = site.socials.find((s) => s.icon === 'github')
  const linkedin = site.socials.find((s) => s.icon === 'linkedin')
  const instagram = site.socials.find((s) => s.icon === 'instagram')

  return (
    <footer className="footer">
      <div className="container footer-inner mono">
        <span className="footer-line">
          <span className="footer-dot" />
          system_status: online
        </span>
        <span className="footer-line footer-center">
          © {year} {site.name.toLowerCase()} — {site.location.toLowerCase()}
        </span>
        <span className="footer-line">
          {github && (
            <a href={github.href} target="_blank" rel="noreferrer">
              github
            </a>
          )}
          <span className="footer-sep">/</span>
          {linkedin && (
            <a href={linkedin.href} target="_blank" rel="noreferrer">
              linkedin
            </a>
          )}
          {instagram && (
            <>
              <span className="footer-sep">/</span>
              <a href={instagram.href} target="_blank" rel="noreferrer">
                instagram
              </a>
            </>
          )}
        </span>
      </div>
    </footer>
  )
}
