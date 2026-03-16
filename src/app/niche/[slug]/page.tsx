import Container from '@/components/ui/Container'
import PageHeader from '@/components/PageHeader'
import CalloutBox from '@/components/CalloutBox'
import EmailSignupForm from '@/components/EmailSignupForm'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'

const nicheContent: Record<
  string,
  { title: string; description: string; focus: string[]; next: { label: string; href: string }[] }
> = {
  musicians: {
    title: 'Monetization for musicians on TikTok',
    description:
      'Grow plays, drive streams, and stack revenue beyond Creator Rewards with music-friendly income streams.',
    focus: ['Promote music links', 'Sync licensing', 'Live gifts + tips', 'Brand deals'],
    next: [
      { label: 'TikTok Creator Rewards 2026 Guide', href: '/guides/creator-rewards-2026' },
      { label: 'Growing from 5K to 10K', href: '/guides/grow-5k-to-10k' },
      { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
    ],
  },
  teachers: {
    title: 'Monetization for teachers and educators',
    description:
      'Build authority, sell lesson resources, and keep your account compliant with Creator Rewards.',
    focus: ['Course funnel', 'Affiliate tools', 'Community memberships', 'Lead magnets'],
    next: [
      { label: 'TikTok Creator Rewards 2026 Guide', href: '/guides/creator-rewards-2026' },
      { label: 'Additional Reward Criteria', href: '/guides/additional-reward-criteria-2026' },
      { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
    ],
  },
  'fitness-creators': {
    title: 'Monetization for fitness creators',
    description:
      'Earn from high-retention workout content, programs, and affiliate tools built for creators.',
    focus: ['Workout plans', 'Affiliate supplements', 'Program upsells', 'Live sessions'],
    next: [
      { label: 'Growing from 5K to 10K', href: '/guides/grow-5k-to-10k' },
      { label: 'Additional Reward Criteria', href: '/guides/additional-reward-criteria-2026' },
      { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
    ],
  },
  artists: {
    title: 'Monetization for artists and illustrators',
    description:
      'Showcase process videos, sell prints, and turn engagement into predictable income.',
    focus: ['Print sales', 'Commissions', 'Process content', 'Behind-the-scenes'],
    next: [
      { label: 'TikTok Creator Rewards 2026 Guide', href: '/guides/creator-rewards-2026' },
      { label: 'Canada Monetization Without Rewards', href: '/guides/canada-without-rewards' },
      { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
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

  if (!content) notFound()

  return (
    <>
      {/* Header band */}
      <section className="bg-[var(--color-surface-warm)] py-12">
        <Container>
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: content.title, href: `/niche/${params.slug}` },
            ]}
            title={content.title}
            description={content.description}
          />
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-2xl space-y-8">
            {/* Focus areas */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                What to focus on right now
              </h2>
              <ul className="mt-4 space-y-2">
                {content.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Callout */}
            <CalloutBox type="tip">
              We&apos;re building a dedicated guide for this niche. Subscribe below to get notified when
              it launches.
            </CalloutBox>

            {/* Email capture */}
            <EmailSignupForm variant="inline" />

            {/* Next steps */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
              <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                Next steps
              </h3>
              <ul className="mt-4 space-y-2">
                {content.next.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
