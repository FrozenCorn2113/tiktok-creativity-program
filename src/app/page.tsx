import Container from '@/components/ui/Container'
import EmailSignupForm from '@/components/EmailSignupForm'
import ScrollReveal from '@/components/ScrollReveal'
import StepCard from '@/components/StepCard'
import CollaborationIllustration from '@/components/illustrations/CollaborationIllustration'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Creator Rewards Program — Guides, Calculators & Strategies',
  description: 'Everything you need to succeed in the TikTok Creator Rewards Program. Eligibility guides, earnings calculators, and monetization strategies.',
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal" data-reveal>
              <h1 className="text-4xl font-extrabold leading-tight text-[var(--color-text)] lg:text-5xl">
                Everything you need to succeed in the TikTok Creator Rewards Program
              </h1>
              <p className="mt-5 text-base text-[var(--color-text-muted)] lg:text-lg">
                Access the essential strategies, eligibility criteria, and growth tips to
                monetize your content.
              </p>
              <div className="mt-8">
                <EmailSignupForm
                  variant="inline"
                  title=""
                  description=""
                  ctaLabel="Get the free guide"
                />
              </div>
            </div>
            <div className="reveal flex justify-center" data-reveal>
              <CollaborationIllustration className="w-full max-w-md" />
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="bg-[var(--color-surface-warm)] py-20">
        <Container>
          <div className="text-center reveal" data-reveal>
            <h2 className="text-3xl font-extrabold text-[var(--color-text)]">How it works</h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="reveal" data-reveal>
              <StepCard
                number={1}
                title="Check Eligibility"
                description="Review the latest TikTok program requirements and see if you qualify."
              />
            </div>
            <div className="reveal" data-reveal>
              <StepCard
                number={2}
                title="Apply with Confidence"
                description="Follow our step-by-step application process to avoid rejections."
              />
            </div>
            <div className="reveal" data-reveal>
              <StepCard
                number={3}
                title="Grow & Monetize"
                description="Learn strategies to hit rewarding milestones and maximize earnings."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
