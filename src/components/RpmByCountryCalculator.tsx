'use client'

import { useMemo, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type CountryConfig = {
  code: string
  name: string
  rpmMin: number
  rpmMax: number
}

const countries: CountryConfig[] = [
  { code: 'US', name: 'United States', rpmMin: 0.7, rpmMax: 1.0 },
  { code: 'UK', name: 'United Kingdom', rpmMin: 0.6, rpmMax: 0.9 },
  { code: 'DE', name: 'Germany', rpmMin: 0.55, rpmMax: 0.85 },
  { code: 'FR', name: 'France', rpmMin: 0.5, rpmMax: 0.8 },
  { code: 'JP', name: 'Japan', rpmMin: 0.6, rpmMax: 0.95 },
  { code: 'KR', name: 'South Korea', rpmMin: 0.55, rpmMax: 0.9 },
  { code: 'MX', name: 'Mexico', rpmMin: 0.35, rpmMax: 0.6 },
  { code: 'BR', name: 'Brazil', rpmMin: 0.3, rpmMax: 0.55 },
]

const defaultMix: Record<string, number> = {
  US: 35,
  UK: 10,
  DE: 10,
  FR: 8,
  JP: 10,
  KR: 7,
  MX: 10,
  BR: 10,
}

export default function RpmByCountryCalculator() {
  const [views, setViews] = useState(250000)
  const [includeBonus, setIncludeBonus] = useState(false)
  const [mix, setMix] = useState<Record<string, number>>(defaultMix)
  const [lastCalculated, setLastCalculated] = useState<Date | null>(null)

  const totalPercent = useMemo(
    () => Object.values(mix).reduce((sum, value) => sum + value, 0),
    [mix],
  )

  const qualifiedViews = useMemo(() => Math.round(views * 0.82), [views])
  const bonusMultiplier = includeBonus ? 1.2 : 1

  const blended = useMemo(() => {
    const weightedMin = countries.reduce(
      (sum, country) => sum + (country.rpmMin * (mix[country.code] ?? 0)) / 100,
      0,
    )
    const weightedMax = countries.reduce(
      (sum, country) => sum + (country.rpmMax * (mix[country.code] ?? 0)) / 100,
      0,
    )
    return { min: weightedMin, max: weightedMax }
  }, [mix])

  const earningsRange = useMemo(() => {
    const min = (qualifiedViews / 1000) * blended.min * bonusMultiplier
    const max = (qualifiedViews / 1000) * blended.max * bonusMultiplier
    return { min, max }
  }, [qualifiedViews, blended, bonusMultiplier])

  const handleMixChange = (code: string, value: number) => {
    setMix((prev) => ({ ...prev, [code]: value }))
  }

  const handleCalculate = (event: React.FormEvent) => {
    event.preventDefault()
    setLastCalculated(new Date())
    trackEvent({
      action: 'calculator_use',
      category: 'tools',
      label: 'rpm_by_country',
      value: views,
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
              Monthly views
            </label>
            <input
              type="number"
              min={0}
              value={views}
              onChange={(event) => setViews(Number(event.target.value))}
              className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
            />
            <p className="mt-2 text-xs text-[var(--color-text-subtle)]">
              We assume 82% of views are qualified after eligibility.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Audience mix (%)</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {countries.map((country) => (
                <label key={country.code} className="flex items-center justify-between text-sm">
                  <span>{country.name}</span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={mix[country.code] ?? 0}
                    onChange={(event) => handleMixChange(country.code, Number(event.target.value))}
                    className="h-9 w-20 rounded-[var(--radius-md)] border border-[var(--color-border)] px-2 text-sm text-right"
                  />
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-[var(--color-text-subtle)]">
              Total: {totalPercent}% {totalPercent !== 100 ? '(Adjust to 100%)' : null}
            </p>
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
            Calculate blended RPM
          </button>
          {lastCalculated ? (
            <p className="text-xs text-[var(--color-text-subtle)]">
              Last updated {lastCalculated.toLocaleTimeString()}
            </p>
          ) : null}
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            Estimated RPM range
          </p>
          <p className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
            ${blended.min.toFixed(2)} – ${blended.max.toFixed(2)}
          </p>
          <div className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
            <div className="flex items-center justify-between">
              <span>Qualified views</span>
              <span className="font-semibold">{qualifiedViews.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated earnings</span>
              <span className="font-semibold">
                ${earningsRange.min.toFixed(2)} – ${earningsRange.max.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bonus applied</span>
              <span className="font-semibold">{includeBonus ? 'Yes (+20%)' : 'No'}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-subtle)]">
            Blended RPM is weighted by your audience mix and typical country ranges.
          </p>
        </div>
      </div>
    </form>
  )
}
