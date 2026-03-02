import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SubNav from '@/components/SubNav'
import JourneyCard from '@/components/JourneyCard'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Start Here Orientation',
  description:
    'Your starting point for the TikTok Creator Rewards program. Learn eligibility, apply successfully, and maximize your earnings.',
  path: '/start-here',
})

const subNavItems = [
  { label: 'Program Overview', href: '/guides/creator-rewards-2026' },
  { label: 'Eligibility', href: '/guides/creator-rewards-2026#eligibility' },
  { label: 'Apply', href: '/guides/appeal-rejection' },
  { label: 'Earnings', href: '/guides/optimize-rpm' },
  { label: 'Resources', href: '/resources' },
]

export default function StartHerePage() {
  return (
    <>
      <ScrollReveal />
      <SubNav items={subNavItems} />

      {/* Title Section */}
      <section className="bg-white py-16">
        <Container size="narrow">
          <div className="reveal" data-reveal>
            <h1 className="text-4xl font-extrabold text-[var(--color-text)]">
              Start Here Orientation
            </h1>
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              Welcome to the TikTok Creator Rewards program. Your journey to earning
              starts with understanding the basics. Explore our guides to get qualified,
              apply successfully, and maximize your potential.
            </p>
          </div>
        </Container>
      </section>

      {/* New to the Program? */}
      <section className="bg-[var(--color-surface-warm)] py-14">
        <Container size="narrow">
          <div className="reveal" data-reveal>
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              New to the Program?
            </h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
              Get a complete overview of the program, including requirements, benefits, and how to get started.
              Download our free checklist to track your progress.
            </p>
            <div className="mt-6">
              <Link href="/guides/creator-rewards-2026">
                <Button size="lg">Get the Creator Guide</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Where are you in your journey? */}
      <section className="bg-white py-14">
        <Container size="narrow">
          <div className="reveal" data-reveal>
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              Where are you in your journey?
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="reveal" data-reveal>
              <JourneyCard
                title="Just Starting Out"
                description="Learn the fundamental eligibility requirements and how to build your profile to join. Step-by-step guides for beginners."
                linkText="Read Eligibility Requirements"
                linkHref="/guides/creator-rewards-2026"
              />
            </div>
            <div className="reveal" data-reveal>
              <JourneyCard
                title="Ready to Apply"
                description="Understand the application process in detail to avoid common pitfalls and rejections. Application walkthrough and tips."
                linkText="Application Walkthrough"
                linkHref="/guides/appeal-rejection"
              />
            </div>
            <div className="reveal" data-reveal>
              <JourneyCard
                title="Growing & Earning"
                description="Discover strategies to increase engagement, hit 100% views, and unlock higher earnings. Content creation and optimization tips."
                linkText="Earning Tips"
                linkHref="/guides/optimize-rpm"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
