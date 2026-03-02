import React, { useState } from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';
import Container from './ui/Container';
import Input from './ui/Input';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // TODO: Integrate with email provider (ConvertKit, Beehiiv, etc.)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-24">
      <Container size="narrow">
        <Card className="p-6 md:p-10">
          <div className="flex flex-col gap-6">
            <Badge tone="accent">Free checklist</Badge>
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                Get the eligibility checklist
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                We’ll send the checklist and occasional updates when the program changes.
              </p>
            </div>

            {status === 'success' ? (
              <div className="rounded-[var(--radius-md)] border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm text-emerald-800">
                Success. Check your inbox for the checklist.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  label="Email address"
                  helperText="No spam. Unsubscribe any time."
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={status === 'loading'} className="h-[46px]">
                  {status === 'loading' ? 'Sending…' : 'Send checklist'}
                </Button>
              </form>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
}
