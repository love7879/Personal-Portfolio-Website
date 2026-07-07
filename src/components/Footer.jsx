import { Link } from '@heroui/react'
import Icon from './Icon'
import { profile, socials } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <div className="glass flex flex-col items-center gap-4 rounded-3xl px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with React &amp; HeroUI.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted no-underline transition-colors hover:bg-black/5 hover:text-ink dark:hover:bg-white/10"
            >
              <Icon name={social.icon} className="h-4 w-4" />
            </Link>
          ))}
          <Link
            href="#top"
            className="ml-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-ink no-underline hover:bg-black/5 dark:hover:bg-white/10"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
