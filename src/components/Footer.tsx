import Link from 'next/link'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-xs font-semibold">
                TC
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--color-text)]">
                  TikTok Creativity Program
                </div>
                <div className="text-xs text-[var(--color-text-subtle)]">Independent resource</div>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm">
              Clear, practical guidance for creators navigating eligibility, applications, and earnings.
            </p>
            <Badge tone="accent">Not affiliated with TikTok or ByteDance</Badge>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-text)]">Get started</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/guides" className="hover:text-[var(--color-text)]">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/calculators/earnings-calculator" className="hover:text-[var(--color-text)]">
                  Earnings Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--color-text)]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/earnings-database" className="hover:text-[var(--color-text)]">
                  Earnings Database
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[var(--color-text)]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-[var(--color-text)]">
                  Premium Newsletter
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:text-[var(--color-text)]">
                  Sponsor
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-text)]">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-text)]">Popular guides</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/guides/creator-rewards-2026" className="hover:text-[var(--color-text)]">
                  Creator Rewards 2026
                </Link>
              </li>
              <li>
                <Link href="/guides/additional-reward-criteria-2026" className="hover:text-[var(--color-text)]">
                  Additional Reward Criteria
                </Link>
              </li>
              <li>
                <Link href="/guides/grow-5k-to-10k" className="hover:text-[var(--color-text)]">
                  Grow from 5K to 10K
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-text)]">Legal</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-text)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--color-text)]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-[var(--color-text)]">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-text)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-subtle)]">
          <p>
            This site is an independent educational resource and is not affiliated with, endorsed by,
            or sponsored by TikTok or ByteDance Ltd. Program terms can change at any time.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} TikTok Creativity Program. All rights reserved.</p>
            <p>Built with care for creators.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
