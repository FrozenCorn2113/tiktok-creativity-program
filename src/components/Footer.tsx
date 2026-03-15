import Link from 'next/link'
import Container from '@/components/ui/Container'

const footerLinks = {
  guides: [
    { label: 'All Guides', href: '/guides' },
    { label: 'Creator Rewards 2026', href: '/guides/creator-rewards-2026' },
    { label: 'Additional Reward Criteria', href: '/guides/additional-reward-criteria-2026' },
    { label: 'Grow from 5K to 10K', href: '/guides/grow-5k-to-10k' },
  ],
  tools: [
    { label: 'Earnings Calculator', href: '/calculators/earnings-calculator' },
    { label: 'RPM by Country', href: '/calculators/rpm-by-country' },
    { label: 'Follower Income Estimator', href: '/calculators/follower-income-estimator' },
    { label: 'Earnings Database', href: '/earnings-database' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="cursor-pointer">
              <span className="font-bold text-[var(--color-ink-strong)] text-[0.9375rem]" style={{ fontFamily: 'var(--font-sans)' }}>
                TikTok Creativity Program
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs leading-[1.7]">
              Clear, practical guidance for creators navigating eligibility, applications, and earnings.
            </p>
            <div className="flex gap-3">
              <Link
                href="/newsletter"
                className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                Newsletter
              </Link>
              <span className="text-[var(--color-border-strong)]">·</span>
              <Link
                href="/sponsor"
                className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                Sponsor
              </Link>
              <span className="text-[var(--color-border-strong)]">·</span>
              <Link
                href="/about"
                className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Guides column */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-ink)]">Guides</h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools column */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-ink)]">Free Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-ink)]">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar — affiliate disclosure mandatory */}
        <div className="mt-10 border-t border-[var(--color-border)] pt-6">
          <p className="text-xs text-[var(--color-text-subtle)] leading-[1.6] max-w-2xl">
            <strong className="font-semibold text-[var(--color-text-muted)]">Affiliate disclosure:</strong>{' '}
            This site contains affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
            This site is an independent educational resource and is not affiliated with, endorsed by,
            or sponsored by TikTok or ByteDance Ltd. Program terms can change at any time.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-[var(--color-text-subtle)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} TikTok Creativity Program. All rights reserved.</p>
            <p>Independent. Not affiliated with TikTok or ByteDance.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
