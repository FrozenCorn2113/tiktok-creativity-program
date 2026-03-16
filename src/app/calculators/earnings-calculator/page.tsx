// Earnings Calculator page — Phase 3 v3 rebuild
// PAGE_SPECS.md: hero image, CalculatorPanel, "What affects your results?", FAQ accordion, NO affiliate CTAs
// checklist items 69-78

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Calculator, BarChart2, Users, BookOpen, TrendingUp, Zap } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { CalculatorPanel } from '@/components/sections/calculator-panel'

export const metadata: Metadata = {
  title: 'TikTok Earnings Calculator',
  description:
    'Estimate your TikTok Creator Rewards payout based on qualified views and RPM. Uses the actual view-based payout model — not follower count.',
  openGraph: {
    images: [{ url: `/og?title=${encodeURIComponent('TikTok Earnings Calculator')}`, width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: 'What RPM should I use?',
    a: 'Start with $0.60–$0.80 if you\'re in the US, UK, or Germany and your content is consistently 1+ minute. Creators in other eligible countries often see $0.20–$0.50. Niche matters — finance and educational content earns more than trends.',
  },
  {
    q: 'Why are qualified views lower than total views?',
    a: 'TikTok only counts organic FYP views on videos 1 minute or longer after you join the program. Duets, Stitches, and Photo Mode don\'t count. Most creators see 70–90% of total views qualify.',
  },
  {
    q: 'What is the Additional Reward?',
    a: 'A bonus of up to 20% on top of base earnings for content that meets quality and engagement thresholds. It\'s not guaranteed — consistent 1+ minute videos with high completion rates earn it most reliably.',
  },
  {
    q: 'How often does TikTok pay out?',
    a: 'Earnings accumulate monthly and become available for withdrawal around the 15th of the following month, once your balance exceeds $50. You can request a withdrawal to PayPal or direct deposit.',
  },
  {
    q: 'Does my follower count affect earnings?',
    a: 'No. The Creator Rewards Program pays based on qualified views and your RPM — not follower count. A creator with 20K followers posting 1-minute videos can earn more than a creator with 500K followers posting short clips.',
  },
  {
    q: 'Why does my RPM change month to month?',
    a: 'RPM fluctuates based on advertiser demand (higher in Q4), your content niche, audience geography, and TikTok\'s internal quality scoring. Track RPM over 3+ months to get a reliable baseline.',
  },
  {
    q: 'Are these estimates guaranteed?',
    a: 'No. This calculator uses average RPM ranges and typical qualified view ratios based on creator-reported data. Your actual earnings will vary. Use it to model scenarios, not to predict exact payouts.',
  },
]

export default function EarningsCalculatorPage() {
  return (
    <>
      {/* Breadcrumb — pt-20 clears fixed floating nav (~64px) */}
      <div className="max-w-container mx-auto px-6 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-sm text-text-muted hover:text-text-primary">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight className="h-3 w-3" aria-hidden /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/calculators" className="text-sm text-text-muted hover:text-text-primary">Calculators</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight className="h-3 w-3" aria-hidden /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm text-text-primary font-medium">Earnings Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Calculator header — warm background */}
      <section className="bg-background-warm pt-6 pb-12">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-brand-ink leading-tight mb-4">
            TikTok Earnings Calculator
          </h1>
          <p className="text-[1.125rem] text-text-secondary max-w-2xl leading-[1.7]">
            Estimate Creator Rewards payouts based on qualified views and RPM. Built on the actual view-based model —
            not follower count, not total views.
          </p>
        </div>
      </section>

      {/* Hero image — item 69, unique per calculator */}
      <div className="max-w-container mx-auto px-6 mb-12">
        <Image
          src="/images/calculators/hero-earnings.webp"
          alt="TikTok earnings calculator — phone showing earnings dashboard with dollar symbol"
          width={1200}
          height={630}
          className="w-full rounded-2xl mb-2"
          priority
          loading="eager"
        />
      </div>

      {/* Calculator tool — item 71-74 */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <CalculatorPanel />
        </div>
      </section>

      {/* Inline illustration — item 78 */}
      <div className="max-w-container mx-auto px-6 mb-16">
        <img
          src="/images/illustrations/calculator-results.min.svg"
          alt="Calculator showing earnings results with bar charts"
          width={800}
          height={500}
          className="w-full max-h-[400px] object-contain mx-auto"
          loading="lazy"
        />
      </div>

      {/* What affects your results? — item 75, REQUIRED on every calculator page */}
      <section className="bg-white pb-16">
        <div className="max-w-container mx-auto px-6">
          <h3 className="text-[1.5rem] font-bold text-brand-ink mb-6">What affects your results?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-background-surface p-5 rounded-xl border border-border-default">
              <div className="flex items-center gap-2 mb-3">
                <BarChart2 className="h-5 w-5 text-brand-primary" aria-hidden />
                <h4 className="font-bold text-brand-ink text-sm">Your RPM</h4>
              </div>
              <p className="text-sm text-text-secondary leading-[1.65] mb-3">
                RPM varies by country, niche, content length, and viewer behavior. US, UK, and Germany see the highest
                rates ($0.50–$1.20). Finance and educational content consistently earns more than trends.
              </p>
              <Link href="/guides/optimize-rpm" className="text-xs font-semibold text-brand-primaryDeep hover:underline">
                How to improve your RPM &rarr;
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-background-surface p-5 rounded-xl border border-border-default">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-brand-primary" aria-hidden />
                <h4 className="font-bold text-brand-ink text-sm">Qualified view rate</h4>
              </div>
              <p className="text-sm text-text-secondary leading-[1.65] mb-3">
                TikTok only counts organic FYP views on 1+ minute videos. Duets, Stitches, and Photo Mode don&apos;t
                count. Most creators qualify 70–90% of total views.
              </p>
              <Link href="/guides/no-qualified-views" className="text-xs font-semibold text-brand-primaryDeep hover:underline">
                Why views aren&apos;t counting &rarr;
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-background-surface p-5 rounded-xl border border-border-default">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-brand-primary" aria-hidden />
                <h4 className="font-bold text-brand-ink text-sm">Additional Reward bonus</h4>
              </div>
              <p className="text-sm text-text-secondary leading-[1.65] mb-3">
                Up to 20% bonus for content that meets TikTok&apos;s quality and engagement thresholds. Not guaranteed —
                but consistently earns with high-completion 1+ minute content.
              </p>
              <Link href="/guides/additional-reward-criteria-2025" className="text-xs font-semibold text-brand-primaryDeep hover:underline">
                Additional Reward criteria &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion — item 77, no affiliate links */}
      <section className="bg-background-warm py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-[1.5rem] font-bold text-brand-ink mb-8">Frequently Asked Questions</h3>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border border-border-default rounded-xl px-5 shadow-sm bg-white"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-ink text-sm py-4 hover:no-underline min-h-[48px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-secondary leading-[1.7] pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related calculators — item 75 spec: "related calculators grid" — NO affiliate CTAs (item 76) */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-6">
          <h3 className="text-[1.5rem] font-bold text-brand-ink mb-6">Related calculators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            <Link
              href="/calculators/rpm-by-country"
              className="group flex flex-col rounded-2xl border border-border-default bg-white p-6 hover:border-brand-primary hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <BarChart2 className="h-5 w-5 text-brand-primary" aria-hidden />
                <h4 className="font-bold text-brand-ink">RPM by Country</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                Compare typical RPM ranges by country and model weighted earnings based on your audience mix.
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Open calculator <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
            <Link
              href="/calculators/follower-income-estimator"
              className="group flex flex-col rounded-2xl border border-border-default bg-white p-6 hover:border-brand-primary hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-brand-primary" aria-hidden />
                <h4 className="font-bold text-brand-ink">Follower Income Estimator</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                Project earnings based on follower count, engagement rate, and monthly posting frequency.
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Open calculator <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
