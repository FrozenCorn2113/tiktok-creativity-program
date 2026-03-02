import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import Badge from './ui/Badge';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-xs font-semibold">
                TR
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--color-text)]">
                  TikTok Creator Program Guide
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
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">Get started</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link to="/start-here" className="hover:text-[var(--color-text)]">
                  Start Here
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-[var(--color-text)]">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-[var(--color-text)]">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-[var(--color-text)]">
                  Earnings Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">Popular guides</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link to="/guides/eligibility-requirements" className="hover:text-[var(--color-text)]">
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link to="/guides/how-to-apply" className="hover:text-[var(--color-text)]">
                  How to Apply
                </Link>
              </li>
              <li>
                <Link to="/guides/maximize-earnings" className="hover:text-[var(--color-text)]">
                  Maximize Earnings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href="#" className="hover:text-[var(--color-text)]">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-text)]">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-text)]">Affiliate Disclosure</a>
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
            <p>© {new Date().getFullYear()} TikTok Creator Program Guide. All rights reserved.</p>
            <p>Built with care for creators.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
