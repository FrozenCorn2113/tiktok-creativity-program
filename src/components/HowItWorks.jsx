import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Card from './ui/Card';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Check eligibility',
    description: 'Understand the follower, view, and content requirements before you apply.',
    link: '/guides/eligibility-requirements',
    linkText: 'See requirements',
  },
  {
    number: '02',
    title: 'Apply with confidence',
    description: 'Follow a simple, step-by-step walkthrough inside the app.',
    link: '/guides/how-to-apply',
    linkText: 'Follow the application steps',
  },
  {
    number: '03',
    title: 'Optimize earnings',
    description: 'Learn what counts as qualified views and how to improve RPM.',
    link: '/guides/maximize-earnings',
    linkText: 'Improve earnings',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="A simple path from eligibility to earnings"
          subtitle="We break the program down into three clear stages so you can move quickly and avoid surprises."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="p-6" isInteractive>
              <div className="text-xs font-semibold text-[var(--color-text-subtle)]">STEP {step.number}</div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              <Link
                to={step.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
              >
                {step.linkText}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/calculator">
            <Button variant="secondary">Try the earnings calculator</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
