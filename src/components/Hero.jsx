import { motion } from 'framer-motion'
import { Link } from '@heroui/react'
import Icon from './Icon'
import { profile, socials, stats } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:flex-row lg:items-center lg:gap-8 lg:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-1 flex-col items-start gap-6 text-left"
      >
        <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-ink">
          <span className="h-2 w-2 rounded-full bg-black dark:bg-white" />
          {profile.availability}
        </span>

        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Hi, I'm {profile.name.split(' ')[0]} —{' '}
          <span className="bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-transparent dark:from-neutral-400 dark:to-white">
            {profile.title}
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground no-underline transition-transform hover:-translate-y-0.5"
          >
            View my work
            <Icon name="HiOutlineArrowUpRight" className="h-4 w-4" />
          </Link>
          <Link
            href={profile.resumeUrl}
            className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink no-underline transition-transform hover:-translate-y-0.5"
          >
            Download resume
          </Link>
        </div>

        <div className="flex items-center gap-3 pt-2">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
              className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-ink no-underline transition-transform hover:-translate-y-0.5"
            >
              <Icon name={social.icon} className="h-[18px] w-[18px]" />
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative flex flex-1 items-center justify-center py-8 lg:py-0"
      >
        <div className="mesh-blob-center" />

        <div className="glass-strong relative z-10 flex w-72 flex-col items-center gap-4 rounded-3xl p-8 text-center sm:w-80">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neutral-700 to-black text-3xl font-bold text-white shadow-lg dark:from-neutral-300 dark:to-white dark:text-black">
            {profile.initials}
          </div>
          <div>
            <p className="text-lg font-semibold text-ink">{profile.name}</p>
            <p className="text-sm text-muted">{profile.title}</p>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <Icon name="HiOutlineMapPin" className="h-4 w-4" />
            {profile.location}
          </div>
        </div>

        <div className="glass absolute -left-2 top-2 z-20 hidden w-44 rounded-2xl p-4 sm:-left-6 sm:block">
          <p className="text-2xl font-semibold text-ink">{stats[0].value}</p>
          <p className="text-xs text-muted">{stats[0].label}</p>
        </div>

        <div className="glass absolute -right-2 bottom-4 z-20 hidden w-48 rounded-2xl p-4 sm:-right-8 sm:block">
          <p className="text-2xl font-semibold text-ink">{stats[1].value}</p>
          <p className="text-xs text-muted">{stats[1].label}</p>
        </div>
      </motion.div>
    </section>
  )
}
