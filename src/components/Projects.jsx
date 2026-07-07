import { Card, Link } from '@heroui/react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I'm proud of"
        description="A mix of product work, side projects, and open-source — each one taught me something new."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            variant="transparent"
            className="glass-strong flex flex-col overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div
                  className={`flex h-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <span className="text-4xl font-bold text-white/90">
                    {project.title
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill rounded-full px-3 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 pt-2">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink no-underline"
                >
                  Live demo
                  <Icon name="FiExternalLink" className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted no-underline hover:text-ink"
                >
                  <Icon name="FaGithub" className="h-4 w-4" />
                  Source
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
