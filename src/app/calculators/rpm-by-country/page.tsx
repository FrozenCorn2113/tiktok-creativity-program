import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import RpmByCountryCalculator from '@/components/RpmByCountryCalculator'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok RPM by Country Estimator',
  description:
    'Compare TikTok Creator Rewards RPM rates by country to understand how your audience location affects earnings.',
}

export default function RpmByCountryPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-10">
          {/* Page header */}
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Calculators', href: '/calculators' },
              { label: 'RPM by Country', href: '/calculators/rpm-by-country' },
            ]}
            category="Interactive tool"
            title="RPM by country estimator"
            description="Estimate typical RPM ranges by country and model earnings based on your audience mix."
          />

          {/* Calculator */}
          <RpmByCountryCalculator />

          {/* Guidance */}
          <CalloutBox type="tip">
            If your audience mix isn't 100% yet, use your best estimate. Update monthly to track
            changes in RPM.
          </CalloutBox>

          {/* How to use */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                Inputs
              </h2>
              <ul className="mt-3 space-y-1.5 text-[var(--text-small)] text-[var(--color-text-muted)]">
                <li>Country selector (8 eligible countries)</li>
                <li>Audience mix percentages by country</li>
                <li>Monthly view count</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                Outputs
              </h2>
              <ul className="mt-3 space-y-1.5 text-[var(--text-small)] text-[var(--color-text-muted)]">
                <li>RPM range by country</li>
                <li>Weighted blended RPM</li>
                <li>Estimated earnings by audience mix</li>
              </ul>
            </div>
          </div>

          {/* Contextual guide links */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
            <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
              Next steps
            </h3>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link
                href="/calculators/earnings-calculator"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Use the earnings calculator &rarr;
              </Link>
              <Link
                href="/guides/optimize-rpm"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                How to improve your RPM &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
