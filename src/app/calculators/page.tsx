import Container from '@/components/ui/Container'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Creator Rewards Calculators',
  description:
    'Free TikTok Creator Rewards calculators: estimate earnings, compare RPM by country, and forecast income from your follower count.',
}

const calculators = [
  {
    title: 'Earnings Calculator',
    description:
      'Estimate your Creator Rewards payout based on view count, RPM, and the Additional Reward bonus.',
    href: '/calculators/earnings-calculator',
    hint: 'Most used',
  },
  {
    title: 'RPM by Country',
    description:
      'Compare typical RPM ranges by country and model weighted earnings based on your audience mix.',
    href: '/calculators/rpm-by-country',
    hint: null,
  },
  {
    title: 'Follower Income Estimator',
    description:
      'Project earnings based on follower count, engagement rate, and monthly posting frequency.',
    href: '/calculators/follower-income-estimator',
    hint: null,
  },
]

export default function CalculatorsPage() {
  return (
    <>
      <ScrollReveal />

      {/* Header band */}
      <section className="bg-[var(--color-surface-warm)] py-14">
        <Container>
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Calculators', href: '/calculators' },
            ]}
            title="Creator calculators"
            description="Use these tools to model earnings and make smarter content decisions."
          />
        </Container>
      </section>

      {/* Calculator cards */}
      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 transition-all duration-200 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-sm)]"
              >
                {calc.hint ? (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[0.75rem] font-semibold text-[var(--color-primary-hover)]">
                    {calc.hint}
                  </span>
                ) : null}
                <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                  {calc.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[var(--color-text-muted)]">
                  {calc.description}
                </p>
                <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                  Open calculator
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
