'use client'

import { useMemo, useState } from 'react'
import ComparisonTable from '@/components/ComparisonTable'
import EmailSignupForm from '@/components/EmailSignupForm'
import { trackEvent } from '@/lib/analytics'

const comparisonRows = [
  ['10,000', '$4 - $10', 'Needs 100K views in last 30 days'],
  ['100,000', '$40 - $100', 'Typical first payout range'],
  ['1,000,000', '$400 - $1,000', 'Average RPM baseline'],
]

export default function EarningsCalculator() {
  const [views, setViews] = useState(100000)
  const [rpm, setRpm] = useState(0.7)
  const [includeBonus, setIncludeBonus] = useState(false)
  const [lastCalculated, setLastCalculated] = useState<Date | null>(null)

  const qualifiedViews = useMemo(() => Math.round(views * 0.82), [views])
  const baseEarnings = useMemo(() => (qualifiedViews / 1000) * rpm, [qualifiedViews, rpm])
  const bonusMultiplier = includeBonus ? 1.2 : 1
  const totalEarnings = baseEarnings * bonusMultiplier

  const handleCalculate = () => {
    setLastCalculated(new Date())
    trackEvent({
      action: 'calculator_use',
      category: 'tools',
      label: 'earnings_calculator',
      value: views,
    })
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-[var(--color-text)]">
                Video views
              </label>
              <input
                type="number"
                min={0}
                value={views}
                onChange={(event) => setViews(Number(event.target.value))}
                className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
              />
              <p className="mt-2 text-xs text-[var(--color-text-subtle)]">
                We estimate qualified views at 82% of total based on typical Creator Rewards reports.
              </p>
            </div>
            <div>
              <label className="text-sm font-semibold text-[var(--color-text)]">
                Estimated RPM (${rpm.toFixed(2)})
              </label>
              <input
                type="range"
                min={0.4}
                max={1}
                step={0.01}
                value={rpm}
                onChange={(event) => setRpm(Number(event.target.value))}
                className="mt-3 w-full"
              />
              <div className="mt-2 flex justify-between text-xs text-[var(--color-text-subtle)]">
                <span>$0.40</span>
                <span>$1.00+</span>
              </div>
            </div>
            <label className="flex items-center gap-3 text-sm text-[var(--color-text)]">
              <input
                type="checkbox"
                checked={includeBonus}
                onChange={(event) => setIncludeBonus(event.target.checked)}
                className="h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-accent)]"
              />
              Include Additional Reward bonus (+20%)
            </label>
            <button
              type="button"
              onClick={handleCalculate}
              className="inline-flex w-full items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
            >
              Update estimate
            </button>
            {lastCalculated ? (
              <p className="text-xs text-[var(--color-text-subtle)]">
                Last updated {lastCalculated.toLocaleTimeString()}
              </p>
            ) : null}
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Estimated earnings
            </p>
            <p className="mt-3 text-3xl font-semibold text-[var(--color-text)]">
              ${totalEarnings.toFixed(2)}
            </p>
            <div className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
              <div className="flex items-center justify-between">
                <span>Qualified views</span>
                <span className="font-semibold">{qualifiedViews.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Base earnings</span>
                <span className="font-semibold">${baseEarnings.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bonus applied</span>
                <span className="font-semibold">{includeBonus ? 'Yes (+20%)' : 'No'}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-[var(--color-text-subtle)]">
              This is an estimate based on typical RPM ranges. Actual payouts vary by country,
              content quality, and engagement.
            </p>
          </div>
        </div>
      </div>

      <EmailSignupForm
        variant="inline"
        title="Get the free TikTok Earnings Tracker"
        description="Track views, qualified views, RPM, and payouts so you know what’s working."
        ctaLabel="Send the tracker"
      />

      <ComparisonTable
        caption="Estimated earnings by view count"
        columns={['Views', 'Estimated earnings', 'Notes']}
        rows={comparisonRows}
      />
    </div>
  )
}
