import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container notfound-page">
      <p className="notfound-code">404</p>
      <p className="notfound-msg">bash: command not found — this page doesn't exist</p>
      <Link to="/" className="btn btn-ghost mono">
        ← cd ~
      </Link>
    </div>
  )
}
