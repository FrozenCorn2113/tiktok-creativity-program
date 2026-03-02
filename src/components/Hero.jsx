import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';
import Container from './ui/Container';

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <Badge tone="accent">Independent resource</Badge>
            <div className="space-y-4">
              <h1 className="text-[clamp(2.5rem,3.5vw,3.75rem)] font-semibold tracking-tight text-[var(--color-text)]">
                TikTok Creator Rewards, explained in plain language.
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] max-w-xl">
                Learn if you qualify, how the application works, and what earnings can look like.
                No hype. Just clean, current guidance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/start-here">
                <Button size="lg">Start here</Button>
              </Link>
              <Link to="/calculator">
                <Button variant="secondary" size="lg">
                  Estimate earnings
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-subtle)]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Clear steps and checklists
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Updated when terms change
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Always free
              </div>
            </div>
          </div>

          <Card className="p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">Eligibility snapshot</h3>
                <p className="text-sm text-[var(--color-text-subtle)]">
                  A quick scan before you apply.
                </p>
              </div>
              <Badge>Checklist</Badge>
            </div>

            <div className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
              {[
                '10,000+ followers',
                '100,000+ views in the last 30 days',
                '18+ years old',
                'Original content over 1 minute',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-cyan-soft)] text-teal-600">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="text-xs text-[var(--color-text-subtle)]">
                Full list, edge cases, and exceptions inside the guide.
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/start-here" className="w-full sm:w-auto">
                <Button className="w-full">Get the full checklist</Button>
              </Link>
              <span className="text-xs text-[var(--color-text-subtle)]">
                No email required.
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
