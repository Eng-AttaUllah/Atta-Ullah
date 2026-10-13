import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import type { SocialLink } from '../data/site'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: FiMail,
}

interface Props {
  link: SocialLink
  className?: string
}

export default function SocialIcon({ link, className = 'text-lg' }: Props) {
  const Icon = icons[link.icon]
  return (
    <a
      href={link.href}
      target={link.icon === 'email' ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={link.label}
      className={`text-muted transition-colors duration-200 hover:text-primary ${className}`}
    >
      <Icon />
    </a>
  )
}
