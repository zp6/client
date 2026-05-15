interface ReferralFeeDiscountProps {
  baseFee: number
  discountPercent: number
  referralCode?: string
}

export function ReferralFeeDiscount({ baseFee, discountPercent, referralCode }: ReferralFeeDiscountProps) {
  const discount = baseFee * (discountPercent / 100)
  const finalFee = baseFee - discount

  return (
    <div className="space-y-1 text-sm">
      <div className="flex justify-between text-gray-500">
        <span>Trading Fee</span>
        <span>{baseFee.toFixed(4)}%</span>
      </div>
      {discountPercent > 0 && (
        <div className="flex justify-between text-green-500">
          <span>Referral Discount ({discountPercent}%)</span>
          <span>-{discount.toFixed(4)}%</span>
        </div>
      )}
      <div className="flex justify-between font-medium border-t border-gray-200 dark:border-gray-700 pt-1">
        <span>Effective Fee</span>
        <span>{finalFee.toFixed(4)}%</span>
      </div>
      {referralCode && (
        <div className="text-xs text-gray-400 mt-1">
          Referral: {referralCode}
        </div>
      )}
    </div>
  )
}
