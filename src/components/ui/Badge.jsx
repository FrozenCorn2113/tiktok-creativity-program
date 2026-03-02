import React from 'react';

export default function Badge({ children, className = '', tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-slate-100 text-slate-600',
    accent: 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]',
    cyan: 'bg-[var(--color-cyan-soft)] text-teal-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
  };

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-md)] px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
