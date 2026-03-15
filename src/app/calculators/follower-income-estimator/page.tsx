import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import FollowerIncomeEstimator from '@/components/FollowerIncomeEstimator'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Follower Income Estimator',
  description:
    'Estimate monthly TikTok Creator Rewards income based on your follower count, niche, and posting frequency.',
}

export default function FollowerIncomeEstimatorPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-10">
          {/* Page header */}
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Calculators', href: '/calculators' },
              { label: 'Follower Income Estimator', href: '/calculators/follower-income-estimator' },
            ]}
            category="Interactive tool"
            title="Follower income estimator"
            description="Model earnings based on follower count, engagement rate, and posting frequency."
          />

          {/* Calculator */}
          <FollowerIncomeEstimator />

          {/* Guidance */}
          <CalloutBox type="tip">
            Adjust engagement rate first. Small improvements in retention usually change outcomes
            more than follower count alone.
          </CalloutBox>

          {/* How to use */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                Inputs
              </h2>
              <ul className="mt-3 space-y-1.5 text-[var(--text-small)] text-[var(--color-text-muted)]">
                <li>Follower count</li>
                <li>Engagement rate (low / medium / high)</li>
                <li>Monthly posting frequency</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
                Outputs
              </h2>
              <ul className="mt-3 space-y-1.5 text-[var(--text-small)] text-[var(--color-text-muted)]">
                <li>Estimated monthly earnings</li>
                <li>Projected growth scenarios</li>
                <li>Suggested next milestone</li>
              </ul>
            </div>
          </div>

          {/* Contextual guide links */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
            <h3 className="text-[var(--text-h3)] font-semibold text-[var(--color-ink-strong)]">
              Compare results
            </h3>
            <p className="mt-2 text-[var(--text-small)] text-[var(--color-text-muted)]">
              Cross-reference with the earnings calculator for a fuller picture.
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link
                href="/calculators/earnings-calculator"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Earnings calculator &rarr;
              </Link>
              <Link
                href="/guides/grow-5k-to-10k"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Growing from 5K to 10K followers &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
