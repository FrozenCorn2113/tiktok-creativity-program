import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import RpmByCountryCalculator from '@/components/RpmByCountryCalculator'

export default function RpmByCountryPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Interactive tool
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              RPM by country estimator
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Estimate typical RPM ranges by country and model earnings based on your audience mix.
            </p>
          </header>
          <RpmByCountryCalculator />

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-text)]">
            <h2 className="text-xl font-semibold">Calculator specifications</h2>
            <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <p>
                <strong>Purpose:</strong> Help creators estimate RPM range based on audience
                geography and project earnings by country mix.
              </p>
              <p>
                <strong>Target Keywords:</strong> TikTok RPM by country, Creator Rewards RPM
                estimator.
              </p>
              <p>
                <strong>User Intent:</strong> Understand which countries drive higher payouts and
                model earnings scenarios.
              </p>
              <p>
                <strong>Success Metrics:</strong> Calculator usage, guide CTR, email signups.
              </p>
              <p>
                <strong>Next Steps:</strong> Use the Earnings Calculator and download the earnings
                tracker.
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Inputs</h3>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>Country selector (8 eligible countries)</li>
                  <li>Audience mix percentages by country</li>
                  <li>Monthly view count</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Outputs</h3>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>RPM range by country</li>
                  <li>Weighted blended RPM</li>
                  <li>Estimated earnings by mix</li>
                </ul>
              </div>
            </div>
          </div>
          <CalloutBox type="tip">
            If your audience mix isn’t 100% yet, use your best estimate. Update monthly to track
            changes in RPM.
          </CalloutBox>
        </div>
      </Container>
    </section>
  )
}
