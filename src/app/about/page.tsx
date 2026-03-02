import Container from '@/components/ui/Container'

export default function AboutPage() {
  return (
    <section className="py-12">
      <Container size="narrow">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">About this site</h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              TikTok Creator Rewards can feel like a moving target. We built this site to make it
              easier to understand what counts, what pays, and how to grow consistently.
            </p>
          </header>
          <div className="space-y-4 text-sm text-[var(--color-text)]">
            <p>
              I’ve helped creators map out their first payouts, troubleshoot qualified view issues,
              and build stronger content systems. That’s why we focus on practical guidance, clear
              calculators, and honest updates when TikTok changes the rules.
            </p>
            <p>
              You’ll see a friendly big-sibling voice throughout the guides. We give you the
              upside and the downsides, plus data-informed recommendations so you can choose the
              right path for your account.
            </p>
            <p>
              If you have feedback or want a topic covered, reach out any time. We publish weekly
              updates and prioritize topics that creators ask for most.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
