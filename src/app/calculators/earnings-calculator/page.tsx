import Container from '@/components/ui/Container'
import EarningsCalculator from '@/components/EarningsCalculator'
import CalloutBox from '@/components/CalloutBox'
import ComparisonTable from '@/components/ComparisonTable'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Earnings Calculator',
  description:
    'Estimate your TikTok Creator Rewards payout based on qualified views, RPM, and the Additional Reward bonus.',
}

const faqRows = [
  {
    cells: [
      'What RPM should I use?',
      "Start with $0.60 to $0.80 if you're in the US, UK, or Germany and your content is consistently 1+ minute.",
    ],
  },
  {
    cells: [
      'Why are qualified views lower than total views?',
      "TikTok only counts eligible For You Page views after you join the program. Duets, Stitches, and Photo Mode don't count.",
    ],
  },
  {
    cells: [
      'Does the Additional Reward always apply?',
      "No. It's a bonus for content that meets quality and engagement thresholds. Use the toggle to model both outcomes.",
    ],
  },
]

const benchmarkRows = [
  { cells: ['10K', '$4 – $10', 'Good for testing RPM and content quality'] },
  { cells: ['100K', '$40 – $100', 'Typical mid-tier month for a growing creator'] },
  { cells: ['1M', '$400 – $1,000', 'High-performing creators with steady output'] },
]

export default function EarningsCalculatorPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-10">
          {/* Page header */}
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Calculators', href: '/calculators' },
              { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
            ]}
            category="Interactive tool"
            title="TikTok Creator Rewards earnings calculator"
            description="Estimate Creator Rewards payouts based on views, RPM, and the Additional Reward bonus. Designed for 1+ minute content posted after joining the program."
          />

          {/* Calculator component */}
          <EarningsCalculator />

          {/* Contextual guidance — two column */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
                How it works
              </h2>
              <p className="text-[var(--text-small)] leading-[1.7] text-[var(--color-text-muted)]">
                We assume qualified views are roughly 82% of total views, based on average creator
                reports. RPM varies by country, content quality, and viewer behavior — so we let you
                choose a realistic range.
              </p>
              <CalloutBox type="tip" title="Improve your RPM">
                Focus on 1+ minute videos with high completion rates, clear audio, and a strong hook
                in the first 2 seconds.
              </CalloutBox>
              <p className="text-[var(--text-small)] text-[var(--color-text-muted)]">
                Want a deeper breakdown?{' '}
                <Link
                  href="/guides/optimize-rpm"
                  className="font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Read the RPM optimization guide &rarr;
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                FAQ
              </h3>
              <ComparisonTable columns={['Question', 'Answer']} rows={faqRows} />
            </div>
          </div>

          {/* Benchmark table */}
          <ComparisonTable
            caption="Earnings benchmarks by view count"
            columns={['Views', 'Typical earnings', 'Notes']}
            rows={benchmarkRows}
          />

          {/* Guide link — contextual, no affiliate */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
            <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
              Understand your numbers
            </h3>
            <p className="mt-2 text-[var(--text-small)] text-[var(--color-text-muted)]">
              The calculator models the math — the guide explains why your qualified view rate might
              be lower than expected.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/guides/maximize-qualified-views"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                How to maximize qualified views &rarr;
              </Link>
              <Link
                href="/guides/optimize-rpm"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                How to improve RPM &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
