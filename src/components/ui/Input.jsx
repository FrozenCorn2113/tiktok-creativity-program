import React from 'react';

export default function Input({
  label,
  helperText,
  error,
  className = '',
  id,
  ...props
}) {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  const describedBy = helperText || error ? `${inputId}-help` : undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-text)]">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        aria-describedby={describedBy}
        className={`w-full rounded-[var(--radius-lg)] border px-4 py-3 text-sm transition focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] ${
          error
            ? 'border-red-300 bg-red-50/30 text-red-900 placeholder:text-red-300'
            : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] hover:border-[var(--color-border-strong)]'
        }`}
        {...props}
      />
      {helperText || error ? (
        <p
          id={`${inputId}-help`}
          className={`text-xs ${error ? 'text-red-600' : 'text-[var(--color-text-subtle)]'}`}
        >
          {error || helperText}
        </p>
      ) : null}
    </div>
  );
}
