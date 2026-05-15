# Fix: Pool metrics are wrong / weird

## Problem (Issue #6)
Pool performance metrics display incorrect or unexpected values. Common issues:
- Return percentage showing negative when pool is profitable
- APR calculation using wrong time period
- Total value locked not accounting for pending withdrawals

## Root Cause
Pool metrics likely use inconsistent data sources:
- Historical returns calculated from spot prices vs TWAP
- APR annualized from short timeframes causing extreme values
- TVL not reflecting pending transactions

## Solution
1. Use consistent price feeds for all calculations
2. Annualize APR using minimum 7-day average
3. Exclude pending withdrawals from TVL
4. Add null/loading states for missing data

## Implementation
- Review pool metric calculation functions
- Ensure consistent data fetching (same API endpoint)
- Add proper number formatting (toLocaleString, toFixed)
- Handle edge cases (division by zero, null values)
