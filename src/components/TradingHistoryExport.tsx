import { downloadCSV, filterTradesByDateRange, type TradeRecord } from '../utils/export-trading-history'

interface TradingHistoryExportProps {
  trades: TradeRecord[]
}

export function TradingHistoryExport({ trades }: TradingHistoryExportProps) {
  const handleExportAll = () => {
    downloadCSV(trades)
  }

  const handleExportRange = () => {
    const start = new Date()
    start.setDate(start.getDate() - 30)
    const end = new Date()
    const filtered = filterTradesByDateRange(trades, start, end)
    downloadCSV(filtered, `trades-last-30d-${end.toISOString().split('T')[0]}.csv`)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleExportAll}
        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        📥 Export All (CSV)
      </button>
      <button
        onClick={handleExportRange}
        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        📥 Last 30 Days
      </button>
    </div>
  )
}
