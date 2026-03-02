import React, { useState } from 'react';

export default function Accordion({ items, defaultOpen = 0, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState(
    allowMultiple ? [defaultOpen] : [defaultOpen]
  );

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev[0] === index ? [-1] : [index]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div
            key={item.title}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-surface-muted)]"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
            >
              <span>{item.title}</span>
              <span className={`text-[var(--color-text-subtle)] transition ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <div
                id={`accordion-panel-${index}`}
                className="px-6 pb-5 text-sm text-[var(--color-text-muted)]"
              >
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
