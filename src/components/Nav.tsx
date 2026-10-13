import { NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { CompactClock } from './Clock'

function pathFor(pathname: string) {
  if (pathname === '/') return '~'
  if (pathname === '/projects') return '~/projects'
  if (pathname.startsWith('/projects/')) return `~/projects/${pathname.split('/projects/')[1]}`
  if (pathname === '/about') return '~/about'
  if (pathname === '/contact') return '~/contact'
  if (pathname === '/resume') return '~/resume'
  return pathname
}

export default function Nav() {
  const { pathname } = useLocation()
  const path = pathFor(pathname)

  return (
    <header className="nav">
      {/* window title bar */}
      <div className="nav-titlebar">
        <div className="nav-wb-dots" aria-hidden="true">
          <span className="nav-wb-dot nav-wb-dot--red" />
          <span className="nav-wb-dot nav-wb-dot--amber" />
          <span className="nav-wb-dot nav-wb-dot--green" />
        </div>
        <span className="nav-title-text mono">
          {site.handle}@{site.host} — bash
        </span>
        <div className="nav-clock-wrap">
          <CompactClock />
        </div>
      </div>

      {/* shell prompt row */}
      <div className="nav-prompt-row">
        <div className="container nav-prompt-inner">
          <span className="nav-prompt mono">
            <span className="nav-prompt-user">{site.handle}</span>
            <span className="nav-prompt-at">@</span>
            <span className="nav-prompt-host">{site.host}</span>
            <span className="nav-prompt-colon">:</span>
            <span className="nav-prompt-path">{path}</span>
            <span className="nav-prompt-dollar">$</span>
          </span>

          <nav className="nav-links mono" aria-label="Primary">
            {nav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                <span className="nav-link-cmd">{link.cmd}</span>
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to={site.resumePage}
              className={({ isActive }) =>
                `nav-link nav-resume-link${isActive ? ' active' : ''}`
              }
            >
              Resume
            </NavLink>
          </nav>
        </div>
      </div>

      {/* mobile nav */}
      <nav className="nav-mobile mono" aria-label="Mobile nav">
        {nav.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to={site.resumePage}
          className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
        >
          Resume
        </NavLink>
      </nav>
    </header>
  )
}
