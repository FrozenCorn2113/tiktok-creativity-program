import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import { buildMetadata } from '@/lib/seo'

const nicheContent: Record<
  string,
  { title: string; description: string; focus: string[]; next: string[] }
> = {
  musicians: {
    title: 'Monetization for musicians on TikTok',
    description:
      'Grow plays, drive streams, and stack revenue beyond Creator Rewards with music-friendly income streams.',
    focus: ['Promote music links', 'Sync licensing', 'Live gifts + tips', 'Brand deals'],
    next: [
      '/guides/creator-rewards-2026',
      '/guides/grow-5k-to-10k',
      '/calculators/earnings-calculator',
    ],
  },
  teachers: {
    title: 'Monetization for teachers and educators',
    description:
      'Build authority, sell lesson resources, and keep your account compliant with Creator Rewards.',
    focus: ['Course funnel', 'Affiliate tools', 'Community memberships', 'Lead magnets'],
    next: [
      '/guides/creator-rewards-2026',
      '/guides/additional-reward-criteria-2026',
      '/calculators/earnings-calculator',
    ],
  },
  'fitness-creators': {
    title: 'Monetization for fitness creators',
    description:
      'Earn from high-retention workout content, programs, and affiliate tools built for creators.',
    focus: ['Workout plans', 'Affiliate supplements', 'Program upsells', 'Live sessions'],
    next: [
      '/guides/grow-5k-to-10k',
      '/guides/additional-reward-criteria-2026',
      '/calculators/earnings-calculator',
    ],
  },
  artists: {
    title: 'Monetization for artists and illustrators',
    description:
      'Showcase process videos, sell prints, and turn engagement into predictable income.',
    focus: ['Print sales', 'Commissions', 'Process content', 'Behind-the-scenes'],
    next: [
      '/guides/creator-rewards-2026',
      '/guides/canada-without-rewards',
      '/calculators/earnings-calculator',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(nicheContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const content = nicheContent[params.slug]
  if (!content) return {}

  return buildMetadata({
    title: content.title,
    description: content.description,
    path: `/niche/${params.slug}`,
  })
}

export default function NichePage({ params }: { params: { slug: string } }) {
  const content = nicheContent[params.slug]

  if (!content) {
    return (
      <section className="py-12">
        <Container>
          <CalloutBox type="warning">This niche page is still being built.</CalloutBox>
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
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              What to focus on right now
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
              {content.focus.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <CalloutBox type="tip">
            We’re building a dedicated guide for this niche. Subscribe to get notified when it
            launches.
          </CalloutBox>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-text)]">Next steps</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
              {content.next.map((link) => (
                <li key={link}>
                  <a href={link} className="text-[var(--color-primary)] hover:underline">
                    {link}
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
