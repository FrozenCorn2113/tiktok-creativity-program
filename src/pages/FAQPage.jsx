import React from 'react';
import Accordion from '../components/ui/Accordion';
import Badge from '../components/ui/Badge';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

const faqs = [
  {
    title: 'How do I know if my views are qualified?',
    content:
      'Qualified views depend on program rules and viewer behavior. Use conservative estimates and track changes in your analytics.',
  },
  {
    title: 'Does every video over one minute qualify?',
    content:
      'Length is required, but content must also be original and compliant with community guidelines.',
  },
  {
    title: 'Can I apply again if I was rejected?',
    content:
      'Yes. Review the requirements, correct issues, and reapply when your metrics and content align.',
  },
  {
    title: 'Is this site affiliated with TikTok?',
    content:
      'No. This is an independent educational resource. Always confirm details in the TikTok app.',
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container size="narrow">
        <Badge tone="accent">FAQ</Badge>
        <div className="mt-4">
          <SectionHeader
            title="Frequently asked questions"
            subtitle="Short answers to help you move forward with confidence."
          />
        </div>
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </Container>
    </div>
  );
}
