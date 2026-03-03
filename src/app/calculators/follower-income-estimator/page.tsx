import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import FollowerIncomeEstimator from '@/components/FollowerIncomeEstimator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Follower Income Estimator',
  description: 'Estimate monthly TikTok Creator Rewards income based on your follower count, niche, and posting frequency.',
}

export default function FollowerIncomeEstimatorPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Interactive tool
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              Follower income estimator
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Model earnings based on follower count, engagement rate, and posting frequency.
            </p>
          </header>
          <FollowerIncomeEstimator />

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-text)]">
            <h2 className="text-xl font-semibold">Calculator specifications</h2>
            <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <p>
                <strong>Purpose:</strong> Project earnings based on follower count, engagement
                levels, and posting cadence.
              </p>
              <p>
                <strong>Target Keywords:</strong> TikTok follower income estimator, TikTok earnings
                by followers.
              </p>
              <p>
                <strong>User Intent:</strong> Forecast what different engagement rates could earn.
              </p>
              <p>
                <strong>Success Metrics:</strong> Calculator usage, newsletter signups, time on page.
              </p>
              <p>
                <strong>Next Steps:</strong> Compare results with the Earnings Calculator.
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Inputs</h3>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>Follower count</li>
                  <li>Engagement rate (low / medium / high)</li>
                  <li>Monthly posting frequency</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Outputs</h3>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>Estimated monthly earnings</li>
                  <li>Projected growth scenarios</li>
                  <li>Suggested next milestone</li>
                </ul>
              </div>
            </div>
          </div>
          <CalloutBox type="tip">
            Adjust engagement rate first. Small improvements in retention usually change outcomes
            more than follower count alone.
          </CalloutBox>
        </div>
      </Container>
    </section>
  )
}
