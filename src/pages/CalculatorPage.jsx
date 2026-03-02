import React, { useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import SectionHeader from '../components/ui/SectionHeader';

export default function CalculatorPage() {
  const [views, setViews] = useState('250000');
  const [rpm, setRpm] = useState('0.6');

  const estimate = useMemo(() => {
    const viewCount = Number(views);
    const rpmValue = Number(rpm);
    if (!viewCount || !rpmValue) return 0;
    return (viewCount / 1000) * rpmValue;
  }, [views, rpm]);

  return (
    <div className="py-12 lg:py-16">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Calculator"
          title="Earnings estimator"
          subtitle="Use a conservative RPM and adjust as you learn more about your audience."
        />

        <div className="mt-10 grid gap-6">
          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Monthly qualified views"
                type="number"
                min="0"
                value={views}
                onChange={(e) => setViews(e.target.value)}
                helperText="Use your recent 30-day total for a realistic estimate."
              />
              <Input
                label="Estimated RPM (USD)"
                type="number"
                step="0.1"
                min="0"
                value={rpm}
                onChange={(e) => setRpm(e.target.value)}
                helperText="Start with $0.30–$0.80 unless you have data."
              />
            </div>
          </Card>

          <Card className="p-6 bg-[var(--color-surface-inset)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--color-text-subtle)]">Estimated monthly earnings</p>
                <p className="mt-2 text-3xl font-semibold text-[var(--color-text)]">
                  ${estimate.toFixed(2)}
                </p>
              </div>
              <Badge tone="accent">Estimate</Badge>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              This is a directional estimate. Actual earnings depend on qualified views, region,
              content quality, and program changes.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">What affects RPM?</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Audience region, session duration, and content category can influence RPM. Use this tool
              to compare scenarios and plan content experiments.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
