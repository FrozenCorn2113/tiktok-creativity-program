import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  actions,
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-text-subtle)]">
          {eyebrow}
        </span>
      ) : null}
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
          {title ? (
            <h2 className="text-[clamp(1.9rem,2.2vw+1.2rem,2.6rem)] font-semibold text-[var(--color-text)]">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] max-w-2xl">
              {subtitle}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
      </div>
    </div>
  );
}
