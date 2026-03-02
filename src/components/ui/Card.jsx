import React from 'react';

export default function Card({
  as: Component = 'div',
  children,
  className = '',
  isInteractive = false,
  ...props
}) {
  return (
    <Component
      className={`rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] ${isInteractive ? 'transition hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
