import { Card } from '@heroui/react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { profile, stats } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="About me"
        title="A little about how I work"
        description="The short version: I bridge design and engineering, and I sweat the details other people skip."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card
          variant="transparent"
          className="glass-strong rounded-3xl p-8 lg:col-span-2"
        >
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg">{profile.bio}</p>
          <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">{profile.bioSecondary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="glass-pill flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink">
              <Icon name="HiOutlineMapPin" className="h-4 w-4" />
              {profile.location}
            </div>
            <div className="glass-pill flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink">
              <Icon name="HiOutlineMail" className="h-4 w-4" />
              {profile.email}
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} variant="transparent" className="glass rounded-3xl p-6">
              <p className="text-3xl font-semibold text-ink">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
