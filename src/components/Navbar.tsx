'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navigation } from '@/lib/site'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-xs font-semibold">
              TC
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[var(--color-text)]">
                TikTok Creativity Program
              </span>
              <span className="text-xs text-[var(--color-text-subtle)]">
                Practical creator monetization
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.main.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-text-subtle)] transition hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
                {'sections' in item && item.sections ? (
                  <div className="absolute left-0 top-full hidden w-[520px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-lg group-hover:block">
                    <div className="grid gap-6 md:grid-cols-2">
                      {item.sections.map((section) => (
                        <div key={section.title}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
                            {section.title}
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md px-2 py-1 transition hover:bg-[var(--color-surface-muted)]"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/guides/creator-rewards-2026" className="hidden sm:inline-flex">
              <Button size="sm">Start here</Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-[var(--radius-md)] border border-[var(--color-border)] p-2 text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4">
            <div className="flex flex-col gap-4">
              {navigation.main.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-[var(--color-text)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {'sections' in item && item.sections ? (
                    <ul className="space-y-1 text-sm text-[var(--color-text-subtle)]">
                      {item.sections.flatMap((section) => section.links).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block rounded-md px-2 py-1 transition hover:bg-[var(--color-surface-muted)]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <Link href="/guides/creator-rewards-2026" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Start here</Button>
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
