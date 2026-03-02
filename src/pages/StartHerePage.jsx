import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const quickSteps = [
  {
    title: 'Check eligibility',
    description: 'Confirm follower, view, and content requirements before you apply.',
    link: '/guides/eligibility-requirements',
  },
  {
    title: 'Apply in the app',
    description: 'Follow a clear walkthrough to submit without missing a step.',
    link: '/guides/how-to-apply',
  },
  {
    title: 'Plan for earnings',
    description: 'Estimate potential earnings and learn what counts as qualified views.',
    link: '/calculator',
  },
];

const paths = [
  {
    title: 'Just checking if I qualify',
    description: 'Start with requirements, then the eligibility checklist.',
    link: '/guides/eligibility-requirements',
  },
  {
    title: 'I want to apply this week',
    description: 'Follow the application guide and avoid common mistakes.',
    link: '/guides/how-to-apply',
  },
  {
    title: 'I’m already approved',
    description: 'Focus on earnings, payouts, and optimization.',
    link: '/guides/maximize-earnings',
  },
];

export default function StartHerePage() {
  return (
    <div className="py-12 lg:py-16">
      <Container size="narrow">
        <div className="space-y-10">
          <div className="space-y-4">
            <Badge tone="accent">Start here</Badge>
            <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-[var(--color-text)]">
              A calm, complete path into the Creator Rewards Program.
            </h1>
            <p className="text-lg text-[var(--color-text-muted)]">
              Use this page as your onboarding checklist. It’s designed to help you move
              from “Do I qualify?” to “What should I do next?” without noise.
            </p>
          </div>

          <section className="space-y-6">
            <SectionHeader
              eyebrow="Quick start"
              title="Three fast steps"
              subtitle="Start with the essentials and build from there."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {quickSteps.map((step) => (
                <Card key={step.title} className="p-5" isInteractive>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.description}</p>
                  <Link
                    to={step.link}
                    className="mt-3 inline-flex text-xs font-medium text-[var(--color-accent)]"
                  >
                    Go to guide →
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeader
              eyebrow="Resource map"
              title="Know where to go next"
              subtitle="Each guide is short and focused. Start with eligibility and branch from there."
            />
            <Card className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <Badge>Eligibility</Badge>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Understand minimum thresholds, content rules, and exceptions.
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <Link to="/guides/eligibility-requirements" className="text-[var(--color-accent)]">
                      Eligibility requirements
                    </Link>
                    <Link to="/guides/content-rules" className="text-[var(--color-accent)]">
                      Content rules
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <Badge>Apply & earn</Badge>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Use the application guide, then plan payouts and earnings strategy.
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <Link to="/guides/how-to-apply" className="text-[var(--color-accent)]">
                      Application walkthrough
                    </Link>
                    <Link to="/guides/maximize-earnings" className="text-[var(--color-accent)]">
                      Maximize earnings
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="space-y-6">
            <SectionHeader
              eyebrow="Pick your path"
              title="Choose the path that fits"
              subtitle="Start here based on where you are today."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {paths.map((path) => (
                <Card key={path.title} className="p-5" isInteractive>
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">{path.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{path.description}</p>
                  <Link to={path.link} className="mt-3 inline-flex text-xs font-medium text-[var(--color-accent)]">
                    Start this path →
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <Card className="p-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-[var(--color-text)]">Trust & disclosures</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                We are an independent educational resource. We are not affiliated with TikTok or ByteDance.
                Program terms can change, so always confirm in-app.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/faq">
                  <Button variant="secondary">Read FAQs</Button>
                </Link>
                <Link to="/tools">
                  <Button variant="subtle">Explore creator tools</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
