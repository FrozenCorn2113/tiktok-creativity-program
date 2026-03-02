'use client'

import { useMemo, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

const engagementOptions = [
  { label: 'Low (2%)', value: 0.02, reach: 2.5 },
  { label: 'Medium (5%)', value: 0.05, reach: 3 },
  { label: 'High (8%)', value: 0.08, reach: 3.5 },
]

export default function FollowerIncomeEstimator() {
  const [followers, setFollowers] = useState(12000)
  const [postsPerMonth, setPostsPerMonth] = useState(12)
  const [rpm, setRpm] = useState(0.7)
  const [engagement, setEngagement] = useState(engagementOptions[1])
  const [includeBonus, setIncludeBonus] = useState(false)
  const [lastCalculated, setLastCalculated] = useState<Date | null>(null)

  const projectedViews = useMemo(() => {
    const viewsPerPost = followers * engagement.value * engagement.reach
    return Math.round(viewsPerPost * postsPerMonth)
  }, [followers, engagement, postsPerMonth])

  const qualifiedViews = useMemo(() => Math.round(projectedViews * 0.82), [projectedViews])
  const bonusMultiplier = includeBonus ? 1.2 : 1
  const earnings = useMemo(
    () => (qualifiedViews / 1000) * rpm * bonusMultiplier,
    [qualifiedViews, rpm, bonusMultiplier],
  )

  const handleCalculate = (event: React.FormEvent) => {
    event.preventDefault()
    setLastCalculated(new Date())
    trackEvent({
      action: 'calculator_use',
      category: 'tools',
      label: 'follower_income_estimator',
      value: followers,
    })
  }

  return (
    <form
      onSubmit={handleCalculate}
      className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-sm"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-[var(--color-text)]">
              Current followers
            </label>
            <input
              type="number"
              min={0}
              value={followers}
              onChange={(event) => setFollowers(Number(event.target.value))}
              className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-[var(--color-text)]">
              Engagement rate
            </label>
            <select
              value={engagement.value}
              onChange={(event) =>
                setEngagement(
                  engagementOptions.find((option) => option.value === Number(event.target.value)) ??
                    engagementOptions[1],
                )
              }
              className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm"
            >
              {engagementOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-[var(--color-text)]">
              Posts per month
            </label>
            <input
              type="number"
              min={1}
              value={postsPerMonth}
              onChange={(event) => setPostsPerMonth(Number(event.target.value))}
              className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
            />
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
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
          >
            Calculate earnings
          </button>
          {lastCalculated ? (
            <p className="text-xs text-[var(--color-text-subtle)]">
              Last updated {lastCalculated.toLocaleTimeString()}
            </p>
          ) : null}
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            Estimated monthly earnings
          </p>
          <p className="mt-3 text-3xl font-semibold text-[var(--color-text)]">
            ${earnings.toFixed(2)}
          </p>
          <div className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
            <div className="flex items-center justify-between">
              <span>Projected views</span>
              <span className="font-semibold">{projectedViews.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Qualified views</span>
              <span className="font-semibold">{qualifiedViews.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bonus applied</span>
              <span className="font-semibold">{includeBonus ? 'Yes (+20%)' : 'No'}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-subtle)]">
            Assumes each post reaches {engagement.reach}× your engaged audience.
          </p>
        </div>
      </div>
    </form>
  )
}
