import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const categories = [
  {
    title: 'Eligibility',
    description: 'Requirements, thresholds, and content rules.',
    link: '/guides/eligibility-requirements',
  },
  {
    title: 'Apply',
    description: 'Step-by-step application guidance.',
    link: '/guides/how-to-apply',
  },
  {
    title: 'Earnings',
    description: 'RPM basics, payouts, and optimization.',
    link: '/guides/maximize-earnings',
  },
  {
    title: 'Tools',
    description: 'Tools and workflows that save time.',
    link: '/tools',
  },
];

const popularGuides = [
  {
    slug: 'eligibility-requirements',
    title: 'Eligibility requirements',
    description: 'The exact thresholds and the edge cases that matter.',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-apply',
    title: 'How to apply (step-by-step)',
    description: 'A simple, in-app walkthrough with no guesswork.',
    readTime: '8 min read',
  },
  {
    slug: 'maximize-earnings',
    title: 'Maximize earnings',
    description: 'What counts as qualified views and how to improve RPM.',
    readTime: '10 min read',
  },
  {
    slug: 'common-mistakes',
    title: 'Common mistakes to avoid',
    description: 'Issues that slow approvals or reduce payouts.',
    readTime: '7 min read',
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <SectionHeader
          eyebrow="Guides"
          title="Everything you need, without the noise"
          subtitle="Focused guides for eligibility, application, earnings, and tools."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.title} to={category.link}>
              <Card className="p-5 h-full" isInteractive>
                <Badge tone="accent">{category.title}</Badge>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{category.description}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeader
            eyebrow="Popular"
            title="Popular guides"
            subtitle="Start with these to build a reliable foundation."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {popularGuides.map((guide) => (
              <Link key={guide.slug} to={`/guides/${guide.slug}`}>
                <Card className="p-6 h-full" isInteractive>
                  <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)]">
                    <span>{guide.readTime}</span>
                    <span>Guide</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">{guide.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{guide.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
