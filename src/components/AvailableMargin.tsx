interface AvailableMarginProps {
  availableMargin: number
  usedMargin: number
  totalBalance: number
  onAddMargin?: () => void
  onRemoveMargin?: () => void
}

export function AvailableMargin({ availableMargin, usedMargin, totalBalance, onAddMargin, onRemoveMargin }: AvailableMarginProps) {
  const usedPercent = totalBalance > 0 ? (usedMargin / totalBalance) * 100 : 0
  
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Available Margin</span>
        <span className="font-medium">{availableMargin.toFixed(2)} USDC</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${Math.min(usedPercent, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>Used: {usedMargin.toFixed(2)}</span>
        <span>Total: {totalBalance.toFixed(2)}</span>
      </div>
      <div className="flex gap-2">
        {onAddMargin && (
          <button onClick={onAddMargin} className="flex-1 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700">
            + Add Margin
          </button>
        )}
        {onRemoveMargin && (
          <button onClick={onRemoveMargin} className="flex-1 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            − Remove Margin
          </button>
        )}
      </div>
    </div>
  )
}
