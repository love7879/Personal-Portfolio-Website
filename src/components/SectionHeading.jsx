export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="glass-pill inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
      {description && <p className="text-muted text-base sm:text-lg leading-relaxed">{description}</p>}
    </div>
  )
}
