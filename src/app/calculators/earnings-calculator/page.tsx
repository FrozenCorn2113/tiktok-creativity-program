import Container from '@/components/ui/Container'
import EarningsCalculator from '@/components/EarningsCalculator'
import CalloutBox from '@/components/CalloutBox'
import ComparisonTable from '@/components/ComparisonTable'

const faqRows = [
  [
    'What RPM should I use?',
    'Start with $0.60 to $0.80 if you’re in the US, UK, or Germany and your content is consistently 1+ minute.',
  ],
  [
    'Why are qualified views lower than total views?',
    'TikTok only counts eligible For You Page views after you join the program. Duets, Stitches, and Photo Mode don’t count.',
  ],
  [
    'Does the Additional Reward always apply?',
    'No. It’s a bonus for content that meets quality and engagement thresholds. Use the toggle to model both outcomes.',
  ],
]

const comparisonRows = [
  ['10K', '$4 - $10', 'Good for testing RPM and content quality'],
  ['100K', '$40 - $100', 'Typical mid-tier month for a growing creator'],
  ['1M', '$400 - $1,000', 'High-performing creators with steady output'],
]

export default function EarningsCalculatorPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              Interactive tool
            </p>
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">
              TikTok Creator Rewards earnings calculator
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Estimate Creator Rewards payouts based on views, RPM, and the Additional Reward bonus.
              This model is designed for 1+ minute content posted after joining the program.
            </p>
          </header>

          <EarningsCalculator />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">How it works</h2>
              <p className="text-sm text-[var(--color-text-muted)]">
                We assume qualified views are roughly 82% of total views, based on average creator
                reports. RPM varies by country, content quality, and viewer behavior, so we let you
                choose a realistic range.
              </p>
              <CalloutBox type="tip" title="Improve your RPM">
                Focus on 1+ minute videos with high completion rates, clear audio, and a strong hook
                in the first 2 seconds.
              </CalloutBox>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">FAQ</h3>
              <ComparisonTable columns={['Question', 'Answer']} rows={faqRows} />
            </div>
          </div>

          <ComparisonTable
            caption="Earnings benchmarks by view count"
            columns={['Views', 'Typical earnings', 'Notes']}
            rows={comparisonRows}
          />
        </div>
      </Container>
    </section>
  )
}
