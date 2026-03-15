import React from 'react'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

export type CellValue = string | boolean | null | 'partial'

type ComparisonTableRow = {
  cells: CellValue[]
  isWinner?: boolean
}

type ComparisonTableProps = {
  columns: string[]
  rows: ComparisonTableRow[] | Array<string[]>
  caption?: string
  winnerIndex?: number
}

function renderCell(value: CellValue, colIndex: number) {
  if (value === true) {
    return <CheckCircle2 className="h-5 w-5 text-[var(--color-success)]" aria-label="Yes" />
  }
  if (value === false) {
    return <XCircle className="h-5 w-5 text-[var(--color-error)]" aria-label="No" />
  }
  if (value === 'partial') {
    return <Minus className="h-5 w-5 text-[var(--color-text-muted)]" aria-label="Partial" />
  }
  if (value === null) {
    return <Minus className="h-5 w-5 text-[var(--color-text-muted)]" aria-label="N/A" />
  }
  return <span className={colIndex === 0 ? 'font-semibold text-[var(--color-ink)]' : ''}>{value}</span>
}

function normalizeRows(rows: ComparisonTableProps['rows'], winnerIndex?: number): Array<{ cells: CellValue[]; isWinner: boolean }> {
  return rows.map((row, i) => {
    if (Array.isArray(row)) {
      return { cells: row as CellValue[], isWinner: i === winnerIndex }
    }
    return { cells: (row as ComparisonTableRow).cells, isWinner: (row as ComparisonTableRow).isWinner ?? i === winnerIndex }
  })
}

export default function ComparisonTable({ columns, rows, caption, winnerIndex }: ComparisonTableProps) {
  const normalizedRows = normalizeRows(rows, winnerIndex)

  return (
    <div className="scroll-fade-right overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        {caption ? (
          <caption className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="bg-[var(--color-surface-muted)]">
            {columns.map((col, i) => (
              <th
                key={col}
                className={`px-4 py-3.5 text-left text-sm font-semibold text-[var(--color-ink)] ${
                  i === 0 ? 'sticky left-0 z-10 bg-[var(--color-surface-muted)]' : ''
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {normalizedRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`transition-colors duration-150 hover:bg-[var(--color-surface-muted)] ${
                row.isWinner
                  ? 'border-l-[3px] border-l-[var(--color-primary)] bg-[var(--color-surface-warm)] font-semibold'
                  : rowIndex % 2 === 0
                  ? 'bg-white'
                  : 'bg-[#FAFAF9]'
              }`}
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border-t border-[var(--color-border)] px-4 py-3.5 text-[var(--color-text)] ${
                    cellIndex === 0
                      ? `sticky left-0 z-10 ${
                          row.isWinner ? 'bg-[var(--color-surface-warm)]' : rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF9]'
                        }`
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-1.5">{renderCell(cell, cellIndex)}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
