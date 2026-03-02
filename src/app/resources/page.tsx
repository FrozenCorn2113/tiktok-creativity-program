import Container from '@/components/ui/Container'
import CalloutBox from '@/components/CalloutBox'
import AffiliateLink from '@/components/AffiliateLink'

export default function ResourcesPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">Creator resources</h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Templates, trackers, and tools that help you monetize faster.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <CalloutBox type="success">
                Download the TikTok Earnings Tracker to log views, RPM, and payouts in one place.
              </CalloutBox>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/resources/earnings-tracker"
                  className="inline-flex items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
                >
                  View the tracker
                </a>
                <a
                  href="/resources/index"
                  className="inline-flex items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
                >
                  Browse all resources
                </a>
              </div>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 text-sm">
              <h2 className="text-base font-semibold text-[var(--color-text)]">Recommended tools</h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>
                  Ring light: <AffiliateLink slug="amazonRingLight" label="Best starter kits" />
                </li>
                <li>
                  Creator microphone: <AffiliateLink slug="amazonMic" label="Top picks under $100" />
                </li>
                <li>
                  Affiliate marketplace: <AffiliateLink slug="mavely" label="Join Mavely" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
