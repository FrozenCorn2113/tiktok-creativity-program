import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from './ui/Accordion';
import Button from './ui/Button';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const faqs = [
  {
    title: 'How much can I earn?',
    content:
      'Earnings vary by qualified views, audience region, and niche. Use the calculator for a conservative estimate.',
  },
  {
    title: 'What are the eligibility requirements?',
    content:
      'You’ll need minimum follower and view thresholds, be 18+, and publish original content over one minute.',
  },
  {
    title: 'How long does approval take?',
    content:
      'Most applications are reviewed within a few business days, but it can take longer during busy periods.',
  },
];

export default function FAQPreview() {
  return (
    <section className="py-16 lg:py-24">
      <Container size="narrow">
        <SectionHeader
          eyebrow="FAQ"
          title="Quick answers"
          subtitle="Short, honest answers to the most common questions."
          align="center"
        />

        <div className="mt-10">
          <Accordion items={faqs} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/faq">
            <Button variant="secondary">View all FAQs</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
