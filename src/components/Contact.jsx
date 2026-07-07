import { useState } from 'react'
import { Button, Card, Input, TextArea, Link } from '@heroui/react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { profile, socials, gmailComposeUrl } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <Card variant="transparent" className="glass rounded-3xl p-8 lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">Email</p>
              <Link
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-ink no-underline"
              >
                <Icon name="HiOutlineMail" className="h-5 w-5" />
                {profile.email}
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">Location</p>
              <p className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-ink">
                <Icon name="HiOutlineMapPin" className="h-5 w-5" />
                {profile.location}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">Find me on</p>
              <div className="mt-3 flex items-center gap-3">
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
            </div>
          </div>
        </Card>

        <Card variant="transparent" className="glass-strong rounded-3xl p-8 lg:col-span-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                  fullWidth
                  className="rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                  fullWidth
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                required
                fullWidth
                className="rounded-2xl"
              />
            </div>

            <Button type="submit" variant="primary" className="w-fit rounded-full px-8">
              Send message
              <Icon name="HiOutlineArrowUpRight" className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
