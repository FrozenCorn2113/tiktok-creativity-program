import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './ui/Button';
import Container from './ui/Container';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? 'text-[var(--color-accent)]'
        : 'text-[var(--color-text-subtle)] hover:text-[var(--color-text)]'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-xs font-semibold">
              TR
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[var(--color-text)]">
                TikTok Creator Program Guide
              </span>
              <span className="text-xs text-[var(--color-text-subtle)]">
                Independent resource
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/start-here" className={navLinkClass}>
              Start Here
            </NavLink>
            <NavLink to="/guides" className={navLinkClass}>
              Guides
            </NavLink>
            <NavLink to="/tools" className={navLinkClass}>
              Tools
            </NavLink>
            <NavLink to="/calculator" className={navLinkClass}>
              Calculator
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/start-here" className="hidden sm:inline-flex">
              <Button size="sm">Start here</Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-[var(--radius-md)] border border-[var(--color-border)] p-2 text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="md:hidden border-t border-[var(--color-border)] py-4">
            <div className="flex flex-col gap-2">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)} end>
                Home
              </NavLink>
              <NavLink to="/start-here" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Start Here
              </NavLink>
              <NavLink to="/guides" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Guides
              </NavLink>
              <NavLink to="/tools" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Tools
              </NavLink>
              <NavLink to="/calculator" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                Calculator
              </NavLink>
              <NavLink to="/faq" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </NavLink>
              <Link to="/start-here" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Start here</Button>
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
