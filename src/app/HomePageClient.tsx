// Homepage — Phase 2 rebuild per PAGE_SPECS.md v3
// All new section components with brand tokens and Framer Motion

'use client'

import { HeroSpotlight } from '@/components/sections/hero-spotlight'
import { TrustBarV3 } from '@/components/sections/trust-bar'
import { FeatureSpotlight } from '@/components/sections/feature-spotlight'
import { ThreePath } from '@/components/sections/three-path'
import { GuideCards } from '@/components/sections/guide-cards'
import type { GuideCardData } from '@/components/sections/guide-cards'
import { CalculatorsPreview } from '@/components/sections/calculators-preview'
import { EmailCapture } from '@/components/sections/email-capture'
import { SocialProofMarquee } from '@/components/sections/social-proof-marquee'

const featuredGuides: GuideCardData[] = [
  {
    slug: 'creator-rewards-2026',
    title: 'TikTok Creator Rewards Program 2026: Complete Guide',
    excerpt:
      'Eligibility requirements, how the program works, what qualified views actually means, and how payouts are calculated.',
    href: '/guides/creator-rewards-2026',
    category: 'Getting Started',
    readTime: '12 min',
  },
  {
    slug: 'maximize-qualified-views',
    title: 'How to Maximize Qualified Views',
    excerpt:
      'Why your qualified view count is lower than your total views, and what to do about it.',
    href: '/guides/maximize-qualified-views',
    category: 'Maximize Earnings',
    readTime: '8 min',
  },
  {
    slug: 'qualified-content-types',
    title: 'TikTok Creator Rewards: What Counts as Qualified Content',
    excerpt:
      'The specific content types and formats that earn — and the ones TikTok quietly excludes.',
    href: '/guides/qualified-content-types',
    category: 'Getting Started',
    readTime: '6 min',
  },
  {
    slug: 'optimize-rpm',
    title: 'How to Improve Your RPM',
    excerpt:
      'Country mix, niche, content length, completion rate — everything that moves the RPM needle.',
    href: '/guides/optimize-rpm',
    category: 'Maximize Earnings',
    readTime: '10 min',
  },
  {
    slug: 'appeal-rejection',
    title: 'What to Do If Your Application Is Rejected',
    excerpt:
      'The real reasons applications fail and the exact steps to appeal or reapply successfully.',
    href: '/guides/appeal-rejection',
    category: 'Troubleshooting',
    readTime: '7 min',
  },
  {
    slug: 'grow-5k-to-10k',
    title: 'Growing from 5K to 10K Followers',
    excerpt:
      'The specific content and engagement strategies that get creators to the 10K threshold without burning out.',
    href: '/guides/grow-5k-to-10k',
    category: 'Getting Started',
    readTime: '9 min',
  },
]

export default function HomePageClient() {
  return (
    <>
      {/* Section 2: Hero — Aceternity Spotlight, staggered word reveal, 2-col grid */}
      <HeroSpotlight />

      {/* Section 3: Trust Bar — Magic UI NumberTicker, 3 stats */}
      <TrustBarV3 />

      {/* Section 4: What Is the Creator Rewards Program — 21st.dev Feature Spotlight */}
      <FeatureSpotlight />

      {/* Section 5: Three-Path Entry — Magic UI Bento Grid */}
      <ThreePath />

      {/* Section 6: Featured Guides — 21st.dev Blog Cards with category tabs */}
      <GuideCards
        guides={featuredGuides}
        headline="Guides Worth Reading First"
        showTabs={true}
        showViewAll={true}
      />

      {/* Section 7: Calculators Preview — dark bg-brand-ink split section */}
      <CalculatorsPreview />

      {/* Section 8: Email Capture — 21st.dev Newsletter Form (v4: new illustration) */}
      <EmailCapture
        headline="Get the Free Eligibility Checklist"
        subheadline="Every requirement in plain language, the most common rejection reasons, and what to do if your qualified views aren't counting. Updated for 2026."
        cta="Send Me the Checklist"
        showImage={true}
        imageSrc="/images/brand/email-capture-illustration.webp"
        imageAlt="Creator checking inbox with checklist lead magnet"
      />

      {/* Section 9: Social Proof — Magic UI Marquee logo strip */}
      <SocialProofMarquee />
    </>
  )
}
