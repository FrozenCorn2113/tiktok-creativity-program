import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const highlights = [
  {
    title: 'Start Here',
    description: 'The fastest way to understand eligibility and next steps.',
    link: '/start-here',
    cta: 'Open Start Here',
  },
  {
    title: 'Guides',
    description: 'Short, focused articles on eligibility, applying, and earnings.',
    link: '/guides',
    cta: 'Browse guides',
  },
  {
    title: 'Tools',
    description: 'Curated tools to plan, edit, and track creator growth.',
    link: '/tools',
    cta: 'View tools',
  },
];

export default function HomeHighlights() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionHeader
          eyebrow="Start here"
          title="Choose a starting point"
          subtitle="Move in order or jump to the section that fits your stage."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6 h-full" isInteractive>
              <Badge tone="accent">{item.title}</Badge>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{item.description}</p>
              <Link to={item.link} className="mt-5 inline-flex">
                <Button variant="secondary" size="sm">
                  {item.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
