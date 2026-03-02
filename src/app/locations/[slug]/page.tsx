import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import { buildMetadata } from '@/lib/seo'

const locationContent: Record<
  string,
  { title: string; description: string; focus: string[]; links: { label: string; href: string }[] }
> = {
  uk: {
    title: 'TikTok Monetization in the UK',
    description: 'UK-specific guidance for Creator Rewards, RPM, and monetization strategies.',
    focus: ['UK eligibility', 'RPM expectations', 'Best posting windows'],
    links: [
      { label: 'Creator Rewards UK Guide', href: '/guides/creator-rewards-uk' },
      { label: 'RPM by Country Estimator', href: '/calculators/rpm-by-country' },
      { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
    ],
  },
  canada: {
    title: 'TikTok Monetization in Canada',
    description: 'Alternatives for Canadian creators without Creator Rewards access.',
    focus: ['Affiliate stack', 'Digital products', 'Brand deals'],
    links: [
      { label: 'Canada Monetization Guide', href: '/guides/canada-without-rewards' },
      { label: 'Best Monetization Methods', href: '/guides/best-monetization-methods' },
      { label: 'Earnings Tracker', href: '/resources/earnings-tracker' },
    ],
  },
  australia: {
    title: 'TikTok Monetization in Australia',
    description: 'Strategies for Australian creators while waiting for eligibility expansion.',
    focus: ['Affiliate offers', 'Digital products', 'Community building'],
    links: [
      { label: 'Australia Eligibility Guide', href: '/guides/australia-eligibility' },
      { label: 'Best Monetization Methods', href: '/guides/best-monetization-methods' },
      { label: 'Resource Center', href: '/guides/monetization-resource-center' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(locationContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const content = locationContent[params.slug]
  if (!content) return {}

  return buildMetadata({
    title: content.title,
    description: content.description,
    path: `/locations/${params.slug}`,
  })
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const content = locationContent[params.slug]

  if (!content) {
    return (
      <section className="py-12">
        <Container>
          <CalloutBox type="warning">Location guide is coming soon.</CalloutBox>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12">
      <Container>
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">{content.title}</h1>
            <p className="text-sm text-[var(--color-text-muted)]">{content.description}</p>
          </header>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">Focus areas</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
              {content.focus.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-text)]">Next steps</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[var(--color-accent)] hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
