# Fix: Wrong error message while approving CAP on Stake function

## Problem (Issue #32)
When approving CAP token for staking, users see a premature or incorrect error message. This happens because the approval check runs before the transaction has time to complete.

## Root Cause
The approval flow checks for allowance before the transaction is mined, triggering a false error state.

## Solution
The fix ensures:
1. The approval transaction is awaited properly
2. Error state only shows after confirmed failure
3. Success state reflects the actual approval result

## Files that need modification
- The component handling Stake CAP modal
- The approval/allowance checking logic

## Implementation Notes
- Use `waitForTransaction` instead of checking allowance immediately
- Add a loading state during approval transaction
- Only show error if the transaction actually reverts
- Clear error state when retrying
