interface PoolDepositInfoProps {
  poolName: string
  apy: number
  tvl: number
  minDeposit: number
  feePercent: number
  lockupPeriod?: string
  tokenSymbol: string
}

export function PoolDepositInfo({
  poolName, apy, tvl, minDeposit, feePercent, lockupPeriod, tokenSymbol
}: PoolDepositInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{poolName}</h3>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-xs text-gray-500">APY</div>
          <div className="text-lg font-bold text-green-500">{apy.toFixed(2)}%</div>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-xs text-gray-500">TVL</div>
          <div className="text-lg font-bold">{tvl.toLocaleString()} {tokenSymbol}</div>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-xs text-gray-500">Min Deposit</div>
          <div className="font-medium">{minDeposit} {tokenSymbol}</div>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-xs text-gray-500">Fee</div>
          <div className="font-medium">{feePercent}%</div>
        </div>
        {lockupPeriod && (
          <div className="col-span-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="text-xs text-yellow-600 dark:text-yellow-400">⚠️ Lockup Period</div>
            <div className="font-medium">{lockupPeriod}</div>
          </div>
        )}
      </div>
    </div>
  )
}
