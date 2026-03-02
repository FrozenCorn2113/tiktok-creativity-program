import React from 'react';

const sizes = {
  default: 'max-w-[var(--container-max)]',
  narrow: 'max-w-[var(--container-narrow)]',
  wide: 'max-w-[80rem]',
};

export default function Container({ children, size = 'default', className = '' }) {
  return (
    <div className={`${sizes[size]} mx-auto w-full px-[var(--gutter)] ${className}`}>
      {children}
    </div>
  );
}
