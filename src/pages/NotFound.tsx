import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-32 text-center">
      <p className="gradient-text font-display text-7xl font-bold">404</p>
      <p className="mt-4 text-lg text-muted">This page doesn't exist.</p>
      <Link to="/" className="btn-ghost mt-8">
        <FiArrowLeft /> Back home
      </Link>
    </section>
  )
}
