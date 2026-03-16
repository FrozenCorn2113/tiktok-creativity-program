import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import FollowerIncomeEstimator from '@/components/FollowerIncomeEstimator'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Follower Income Estimator',
  description:
    'Estimate monthly TikTok Creator Rewards income based on your follower count, niche, and posting frequency.',
}

export default function FollowerIncomeEstimatorPage() {
  return (
    <>
      <ScrollReveal />
      {/* C1-C3: two-column header band with illustration */}
      <section className="bg-[#FFF7ED] py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
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
            <div className="relative hidden h-[320px] w-full md:block">
              <Image
                src="/assets/brand-images/landpress-marketing-hero.png"
                alt="Creator analyzing TikTok follower income with calculator"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </Container>
      </section>

    <section className="py-12">
      <Container>
        <div className="space-y-10">
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

          {/* C10: "What affects your results?" — required per BRAND.md */}
          <div className="max-w-prose space-y-4">
            <h2 className="text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
              What affects your results?
            </h2>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              Follower count is a starting point, not the outcome. Engagement rate has an outsized
              impact — a creator with 20K highly-engaged followers often earns more than one with 100K
              passive followers because qualified views depend on completion rate and organic reach.
            </p>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              Posting frequency increases your monthly view ceiling, but only if each video meets the
              1+ minute qualified content threshold. Posting more shorter videos doesn&apos;t help —
              those views don&apos;t count toward Creator Rewards earnings.
            </p>
            <p className="text-[var(--text-body)] leading-[1.7] text-[var(--color-text-muted)]">
              RPM varies significantly by country. If most of your followers are in lower-RPM regions,
              your effective earnings per qualified view will be lower even with strong engagement. The
              RPM by country tool can help you model your specific audience mix.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/calculators/earnings-calculator"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                Run the full earnings calculator &rarr;
              </Link>
              <Link
                href="/calculators/rpm-by-country"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                RPM by country estimator &rarr;
              </Link>
              <Link
                href="/guides/grow-5k-to-10k"
                className="text-sm font-[500] text-[#F4A261] hover:underline"
              >
                Growing from 5K to 10K followers &rarr;
              </Link>
            </div>
          </div>

          {/* C11: Related calculators — 2-col grid */}
          <div>
            <h2 className="mb-4 text-[var(--text-h2)] font-bold text-[var(--color-ink-strong)]">
              Related calculators
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/calculators/earnings-calculator"
                className="group flex flex-col rounded-2xl border border-[#EADFD3] bg-white p-6 transition-all duration-150 hover:border-[#F4A261] hover:shadow-sm"
              >
                <h3 className="text-[1.125rem] font-[600] text-[#0B0F1A]">Earnings Calculator</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[#475467]">
                  Estimate Creator Rewards payouts based on view count, RPM, and the Additional Reward bonus.
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-[600] text-[#F4A261] transition-transform duration-200 group-hover:translate-x-0.5">
                  Open calculator <span aria-hidden>&rarr;</span>
                </span>
              </Link>
              <Link
                href="/calculators/rpm-by-country"
                className="group flex flex-col rounded-2xl border border-[#EADFD3] bg-white p-6 transition-all duration-150 hover:border-[#F4A261] hover:shadow-sm"
              >
                <h3 className="text-[1.125rem] font-[600] text-[#0B0F1A]">RPM by Country</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.65] text-[#475467]">
                  Compare typical RPM ranges by country and model weighted earnings based on your audience mix.
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-[600] text-[#F4A261] transition-transform duration-200 group-hover:translate-x-0.5">
                  Open calculator <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}
