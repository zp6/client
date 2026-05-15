/**
 * Export trading history to CSV
 * Handles date range filtering and CSV formatting
 */

interface TradeRecord {
  id: string
  timestamp: string | Date
  type: 'long' | 'short'
  side: 'open' | 'close'
  asset: string
  size: number
  price: number
  pnl?: number
  fees?: number
}

function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toISOString().split('T')[0]
}

function escapeCSV(value: string | number | undefined): string {
  const str = String(value ?? '')
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export function generateCSV(trades: TradeRecord[]): string {
  const headers = ['Date', 'Type', 'Side', 'Asset', 'Size', 'Price', 'PnL', 'Fees']
  const rows = trades.map(t => [
    formatDate(t.timestamp),
    t.type.toUpperCase(),
    t.side.toUpperCase(),
    escapeCSV(t.asset),
    t.size.toString(),
    t.price.toString(),
    (t.pnl ?? 0).toFixed(2),
    (t.fees ?? 0).toFixed(4),
  ].map(escapeCSV).join(','))

  return [headers.join(','), ...rows].join('\n')
}

export function downloadCSV(trades: TradeRecord[], filename?: string): void {
  const csv = generateCSV(trades)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename || `trading-history-${new Date().toISOString().split('T')[0]}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

export function filterTradesByDateRange(
  trades: TradeRecord[],
  startDate: Date,
  endDate: Date
): TradeRecord[] {
  return trades.filter(t => {
    const d = new Date(t.timestamp)
    return d >= startDate && d <= endDate
  })
}
