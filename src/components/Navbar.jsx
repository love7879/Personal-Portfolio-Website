import { useEffect, useState } from 'react'
import { Link } from '@heroui/react'
import Icon from './Icon'
import useTheme from '../hooks/useTheme'
import { navLinks, profile } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav
        className={`glass-pill mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6 transition-shadow ${
          scrolled ? 'shadow-lg shadow-ink/10' : ''
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neutral-700 to-black text-sm font-bold text-white dark:from-neutral-300 dark:to-white dark:text-black">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-black/5 hover:text-ink dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'HiOutlineSun' : 'HiOutlineMoon'} className="h-5 w-5" />
          </button>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground no-underline transition-opacity hover:opacity-90"
          >
            Let's talk
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'HiOutlineSun' : 'HiOutlineMoon'} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'HiX' : 'HiMenuAlt4'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl p-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink no-underline hover:bg-black/5 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground no-underline"
          >
            Let's talk
          </a>
        </div>
      )}
    </header>
  )
}
