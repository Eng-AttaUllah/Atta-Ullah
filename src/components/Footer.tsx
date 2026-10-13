import { site } from '../data/site'
import SocialIcon from './SocialIcon'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-edge bg-surface/40">
      <div className="container-page flex flex-col items-center gap-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display font-semibold">
            {site.name} <span className="text-muted">— {site.role}</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              {site.email}
            </a>
          </p>
        </div>

        <div className="flex items-center gap-5">
          {site.socials.map((link) => (
            <SocialIcon key={link.label} link={link} className="text-xl" />
          ))}
        </div>

        <p className="text-xs text-muted">
          © {year} {site.name}
          {' · '}
          <span>{site.tagline}</span>
        </p>
      </div>
    </footer>
  )
}
