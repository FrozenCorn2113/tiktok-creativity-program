import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';

const guides = {
  'eligibility-requirements': {
    title: 'Eligibility requirements',
    summary:
      'Understand the minimum thresholds and the content rules that determine approval.',
    toc: ['Minimum thresholds', 'Content rules', 'Account standing', 'Common edge cases'],
    keyTakeaways: [
      'You need follower and view thresholds within a recent window.',
      'Original content over one minute is required.',
      'Accounts must be in good standing at the time of review.',
    ],
    sections: [
      {
        heading: 'Minimum thresholds',
        body:
          'Eligibility is based on recent follower and view counts. If you are close, focus on consistency and original content.',
      },
      {
        heading: 'Content rules',
        body:
          'Short clips, reused content, and heavily edited reposts can reduce approval chances. Keep sources clear and original.',
      },
      {
        heading: 'Account standing',
        body:
          'Your account must follow community guidelines. Content violations can pause or block eligibility.',
      },
    ],
  },
  'how-to-apply': {
    title: 'How to apply (step-by-step)',
    summary:
      'A simple walkthrough to complete the application in-app without missing a requirement.',
    toc: ['Before you start', 'Application steps', 'What happens after'],
    keyTakeaways: [
      'Confirm requirements first to avoid rejections.',
      'Application is completed directly inside the TikTok app.',
      'Approval times vary based on volume.',
    ],
    sections: [
      {
        heading: 'Before you start',
        body:
          'Check your follower and view metrics, and confirm content length across recent posts.',
      },
      {
        heading: 'Application steps',
        body:
          'Navigate to Creator Tools in the app, locate the Rewards Program, and submit the required confirmations.',
      },
      {
        heading: 'What happens after',
        body:
          'You will receive a notification when reviewed. Use that time to prepare content that meets the guidelines.',
      },
    ],
  },
};

const fallbackGuide = {
  title: 'Guide',
  summary: 'This guide will be published soon. Check back for updates.',
  toc: [],
  keyTakeaways: [],
  sections: [],
};

const relatedGuides = [
  { slug: 'eligibility-requirements', title: 'Eligibility requirements' },
  { slug: 'content-rules', title: 'Content rules & guidelines' },
  { slug: 'maximize-earnings', title: 'Maximize earnings' },
];

const recommendedTools = [
  { name: 'CapCut', description: 'Clean edits with templates that save time.' },
  { name: 'Notion', description: 'Plan topics, track ideas, and build a content calendar.' },
  { name: 'Metricool', description: 'Track performance and reporting in one place.' },
];

export default function GuidePage() {
  const { slug } = useParams();
  const guide = guides[slug] || fallbackGuide;

  return (
    <div className="py-12 lg:py-16">
      <Container size="narrow">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge tone="accent">Guide</Badge>
            <h1 className="text-[clamp(2rem,3vw,3rem)] font-semibold text-[var(--color-text)]">
              {guide.title}
            </h1>
            <p className="text-lg text-[var(--color-text-muted)]">{guide.summary}</p>
          </div>

          {guide.toc.length ? (
            <Card className="p-5">
              <h2 className="text-sm font-semibold text-[var(--color-text)]">Table of contents</h2>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-text-muted)]">
                {guide.toc.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ) : null}

          {guide.keyTakeaways.length ? (
            <Card className="p-5 bg-[var(--color-surface-inset)]">
              <h2 className="text-sm font-semibold text-[var(--color-text)]">Key takeaways</h2>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-text-muted)]">
                {guide.keyTakeaways.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ) : null}

          <div className="space-y-6">
            {guide.sections.map((section) => (
              <div key={section.heading} className="space-y-2">
                <h2 className="text-lg font-semibold text-[var(--color-text)]">{section.heading}</h2>
                <p className="text-sm text-[var(--color-text-muted)]">{section.body}</p>
              </div>
            ))}
          </div>

          <Card className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Need a quick estimate?</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Use the calculator for a conservative earnings range.
                </p>
              </div>
              <Link to="/calculator">
                <Button size="sm">Open calculator</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Recommended tools</h3>
            <div className="mt-4 grid gap-4">
              {recommendedTools.map((tool) => (
                <div key={tool.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{tool.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{tool.description}</p>
                  </div>
                  <Badge>Curated</Badge>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Related guides</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedGuides.map((related) => (
                <Link key={related.slug} to={`/guides/${related.slug}`}>
                  <Card className="p-4" isInteractive>
                    <p className="text-sm font-medium text-[var(--color-text)]">{related.title}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
