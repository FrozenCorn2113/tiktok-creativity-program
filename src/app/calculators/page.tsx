import Container from '@/components/ui/Container'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Earnings Calculators',
  description: 'Free TikTok Creator Rewards calculators: estimate earnings, compare RPM by country, and forecast income from your follower count.',
}

const calculators = [
  {
    title: 'Earnings Calculator',
    excerpt: 'Estimate payouts with RPM and Additional Reward bonus.',
    href: '/calculators/earnings-calculator',
  },
  {
    title: 'RPM by Country',
    excerpt: 'Compare RPM ranges by country and audience mix.',
    href: '/calculators/rpm-by-country',
  },
  {
    title: 'Follower Income Estimator',
    excerpt: 'Model earnings by follower count and engagement.',
    href: '/calculators/follower-income-estimator',
  },
]

export default function CalculatorsPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">Creator calculators</h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Use these tools to model earnings and make smarter content decisions.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => (
              <ArticleCard
                key={calc.href}
                title={calc.title}
                excerpt={calc.excerpt}
                href={calc.href}
                tag="Calculator"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
