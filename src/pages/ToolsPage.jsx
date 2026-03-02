import React from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const toolSections = [
  {
    title: 'Editing & production',
    tools: [
      {
        name: 'CapCut',
        description: 'Fast edits, templates, and captions that keep quality consistent.',
        pros: ['Great templates', 'Free tier', 'Fast exports'],
        cons: ['Desktop features vary by region'],
      },
      {
        name: 'Descript',
        description: 'Edit by text and build clean clips for longer videos.',
        pros: ['Easy trimming', 'Good transcription'],
        cons: ['Best features are paid'],
      },
    ],
  },
  {
    title: 'Planning & workflow',
    tools: [
      {
        name: 'Notion',
        description: 'Organize ideas, scripts, and content calendars in one place.',
        pros: ['Flexible templates', 'Great for teams'],
        cons: ['Can feel complex'],
      },
      {
        name: 'Google Sheets',
        description: 'Lightweight tracking for content, metrics, and RPM notes.',
        pros: ['Simple', 'Shareable'],
        cons: ['Manual upkeep'],
      },
    ],
  },
  {
    title: 'Analytics',
    tools: [
      {
        name: 'Metricool',
        description: 'Track performance across posts with a single dashboard.',
        pros: ['Clean reports', 'Cross-platform'],
        cons: ['Paid plan for depth'],
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        <SectionHeader
          eyebrow="Tools"
          title="Curated creator tools"
          subtitle="Only tools we’d use ourselves. No clutter, no hype."
        />

        <div className="mt-10 space-y-10">
          {toolSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[var(--color-text)]">{section.title}</h2>
                <Badge>Curated</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {section.tools.map((tool) => (
                  <Card key={tool.name} className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-[var(--color-text)]">{tool.name}</h3>
                      <Badge tone="neutral">Affiliate</Badge>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
                    <div className="mt-4 grid gap-3 text-xs text-[var(--color-text-muted)] sm:grid-cols-2">
                      <div>
                        <p className="font-semibold text-[var(--color-text)]">Pros</p>
                        <ul className="mt-1 space-y-1">
                          {tool.pros.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-text)]">Cons</p>
                        <ul className="mt-1 space-y-1">
                          {tool.cons.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
