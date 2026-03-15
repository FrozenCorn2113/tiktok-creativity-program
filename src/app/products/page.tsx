import Container from '@/components/ui/Container'
import PageHeader from '@/components/PageHeader'
import EmailSignupForm from '@/components/EmailSignupForm'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Products — TikTok Creator Rewards',
  description:
    'Practical resources for TikTok Creator Rewards — checklists, templates, and tools built for the way the program actually works. Coming soon.',
}

const products = [
  {
    title: 'TikTok Creator Rewards Checklist Pack',
    description:
      'A set of four checklists covering the complete Creator Rewards journey: eligibility requirements, application steps, qualified view audit, and payout troubleshooting. PDF format. Designed to work alongside the free guides — these are the reference documents you open when you\'re in the middle of the process and need to check something fast.',
    included: [
      'Eligibility checklist — every requirement, verified for 2026',
      'Application checklist — step-by-step, nothing skipped',
      'Qualified view audit checklist — diagnose why views might not be counting',
      'Payout troubleshooting checklist — what to check when a payment is late or lower than expected',
    ],
    price: 'Starting at $9',
    ctaLabel: 'Get notified when it\'s available',
    tag: 'waitlist-checklist-pack',
  },
  {
    title: '30-Day Creator Rewards Content Calendar',
    description:
      'A Notion template and PDF calendar built around the Creator Rewards Program\'s requirements — specifically the 1-minute-minimum video length rule and the content types that tend to generate higher qualified view rates. Includes daily prompts, a hook formula reference, and a tracking section for qualified views and RPM.',
    included: [
      '30-day content calendar with posting prompts',
      'Hook formula reference card',
      'Qualified views and RPM weekly tracking section',
      'Notes on content types that tend to perform best for CRP earnings',
    ],
    price: 'Starting at $15',
    ctaLabel: 'Get notified when it\'s available',
    tag: 'waitlist-content-calendar',
  },
  {
    title: 'TikTok RPM and Earnings Tracker',
    description:
      'A Google Sheets template for tracking your Creator Rewards earnings over time — qualified views per video, RPM by week, cumulative monthly earnings, and payout history. Gives you a cleaner picture of your earnings trends than TikTok\'s built-in analytics, which doesn\'t retain long-term data.',
    included: [
      'Monthly earnings dashboard',
      'Per-video qualified view tracker',
      'RPM trend chart (auto-generates from your data)',
      'Payout history log',
      'Region breakdown input (to track where your qualified views come from)',
    ],
    price: 'Starting at $9',
    ctaLabel: 'Get notified when it\'s available',
    tag: 'waitlist-rpm-tracker',
  },
]

export default function ProductsPage() {
  return (
    <>
      <ScrollReveal />

      {/* Header */}
      <section className="bg-[var(--color-surface-warm)] py-14">
        <Container>
          <div className="reveal" data-reveal>
            <PageHeader
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
              ]}
              title="Creator tools for TikTok. Built for the way the program actually works."
              description="Practical resources — not generic templates. Coming soon."
            />
          </div>
        </Container>
      </section>

      {/* Product list */}
      <section className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-2xl space-y-12">
            {products.map((product, i) => (
              <div
                key={product.tag}
                className="reveal rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8"
                data-reveal
              >
                {/* Product number */}
                <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-[var(--color-text-subtle)]">
                  Product {String(i + 1).padStart(2, '0')}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
                  {product.title}
                </h2>

                {/* Price */}
                <p className="mt-1 text-[0.75rem] text-[var(--color-text-subtle)]">
                  Planned price: {product.price} (to be confirmed at launch)
                </p>

                {/* Description */}
                <p className="mt-4 text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
                  {product.description}
                </p>

                {/* What's included */}
                <div className="mt-6">
                  <h3 className="text-[0.75rem] font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
                    What's included
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {product.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                        <span className="mt-0.5 flex-shrink-0 text-[var(--color-success)]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Waitlist form */}
                <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                  <EmailSignupForm
                    variant="inline"
                    title={product.ctaLabel}
                    description=""
                    ctaLabel="Notify me"
                    className="bg-[var(--color-surface-muted)]"
                  />
                </div>
              </div>
            ))}

            {/* Page footer note */}
            <p className="text-[var(--text-small)] text-[var(--color-text-subtle)]">
              All products are in development. Signing up notifies you when they launch — no spam in
              the meantime. If you have a specific tool or resource that would be genuinely useful,{' '}
              <a href="/contact" className="font-semibold text-[var(--color-primary)] hover:underline">
                get in touch
              </a>{' '}
              — early requests shape what gets built first.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
