import { Card } from '@heroui/react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Skills & tools"
        title="What I build with"
        description="A toolkit assembled from years of shipping product — from prototyping to production."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            variant="transparent"
            className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-transform hover:-translate-y-1"
          >
            <Icon name={skill.icon} className="h-8 w-8 text-ink" />
            <p className="text-sm font-medium text-ink">{skill.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
