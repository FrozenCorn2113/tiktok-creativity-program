import Link from 'next/link'

type JourneyCardProps = {
  title: string
  description: string
  linkText: string
  linkHref: string
}

export default function JourneyCard({ title, description, linkText, linkHref }: JourneyCardProps) {
  return (
    <div className="callout-accent">
      <h3 className="text-base font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{description}</p>
      <Link
        href={linkHref}
        className="mt-3 inline-block text-sm font-semibold text-[var(--color-accent)] hover:underline"
      >
        {linkText} &rarr;
      </Link>
    </div>
  )
}
