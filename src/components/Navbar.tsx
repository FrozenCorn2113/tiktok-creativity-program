'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/site'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { X, Menu, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-[var(--shadow-sm)]' : ''
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo — text only, Manrope 700 */}
          <Link href="/" className="cursor-pointer">
            <span className="font-bold text-[var(--color-ink-strong)] text-[0.9375rem]" style={{ fontFamily: 'var(--font-sans)' }}>
              TikTok Creativity Program
            </span>
          </Link>

          {/* Desktop nav — centered links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`nav-underline inline-flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'active text-[var(--color-ink)] '
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {item.label}
                    {'sections' in item && item.sections ? (
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    ) : null}
                  </Link>

                  {'sections' in item && item.sections ? (
                    <div className="pointer-events-none absolute left-0 top-full mt-1 w-[520px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-md)] opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="grid gap-6 md:grid-cols-2">
                        {item.sections.map((section) => (
                          <div key={section.title}>
                            <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
                              {section.title}
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {section.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="block rounded-[var(--radius-sm)] px-2 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-muted)]"
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
              )
            })}
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="/start-here" className="hidden sm:inline-flex">
              <Button size="sm">Start here</Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden cursor-pointer rounded-[var(--radius-md)] border border-[var(--color-border)] p-2 text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {isMobileMenuOpen ? (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {navigation.main.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <div key={item.label} className="space-y-1">
                    <Link
                      href={item.href}
                      className={`block rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[var(--color-surface-muted)] text-[var(--color-ink)]'
                          : 'text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {'sections' in item && item.sections ? (
                      <ul className="space-y-0.5 pl-3">
                        {item.sections.flatMap((section) => section.links).map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                )
              })}
              <div className="pt-2">
                <Link href="/start-here">
                  <Button className="w-full">Start here</Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
