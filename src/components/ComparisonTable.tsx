import React from 'react'

type ComparisonTableProps = {
  columns: string[]
  rows: Array<string[]>
  caption?: string
}

export default function ComparisonTable({ columns, rows, caption }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white">
      <table className="w-full text-left text-sm">
        {caption ? (
          <caption className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-[var(--color-surface-muted)] text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
              className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
            >
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-[var(--color-text)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
