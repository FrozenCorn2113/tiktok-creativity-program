import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './ui/Badge';
import Card from './ui/Card';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const guides = [
  {
    slug: 'eligibility-requirements',
    title: 'Eligibility requirements',
    description: 'Know the exact thresholds and edge cases before you apply.',
    category: 'Eligibility',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-apply',
    title: 'How to apply (step-by-step)',
    description: 'A calm walkthrough you can follow in the app without guessing.',
    category: 'Apply',
    readTime: '8 min read',
  },
  {
    slug: 'content-rules',
    title: 'Content rules & guidelines',
    description: 'What qualifies as original content and what gets rejected.',
    category: 'Eligibility',
    readTime: '6 min read',
  },
  {
    slug: 'maximize-earnings',
    title: 'Maximize earnings',
    description: 'Understand qualified views and RPM drivers.',
    category: 'Earnings',
    readTime: '10 min read',
  },
  {
    slug: 'payment-setup',
    title: 'Payment setup & withdrawals',
    description: 'Set up payouts and understand timing and thresholds.',
    category: 'Earnings',
    readTime: '4 min read',
  },
  {
    slug: 'common-mistakes',
    title: 'Common mistakes to avoid',
    description: 'The most frequent issues that slow approvals and payouts.',
    category: 'Troubleshooting',
    readTime: '7 min read',
  },
];

export default function FeaturedGuides() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured guides"
          title="Short, clear, and practical"
          subtitle="Start with the essentials. Each guide is structured for quick scanning."
          actions={
            <Link to="/guides" className="text-sm font-medium text-[var(--color-accent)]">
              View all guides
            </Link>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} to={`/guides/${guide.slug}`}>
              <Card className="h-full p-6" isInteractive>
                <div className="flex items-center justify-between">
                  <Badge>{guide.category}</Badge>
                  <span className="text-xs text-[var(--color-text-subtle)]">{guide.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">{guide.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{guide.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
