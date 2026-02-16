# Batch 36: Spacing Compliance (Blocks)

**Date:** January 28, 2026
**Status:** In Progress

## Overview
Replacing hardcoded pixel values for spacing (padding, margin, gap) and sizing with CSS variables in Block components.

## Targets
- `src/app/components/blocks/theme/Navigation.tsx`
- `src/app/components/blocks/theme/Search.tsx`
- `src/app/components/blocks/layout/ErrorBoundary.tsx`

## Changes
- Replace `px` values with `var(--spacing-*)` variables.
- Ensure touch targets (44px) use consistent tokens or remain explicit if tokens don't exist (but prefer `var(--spacing-11)` if available).

## Reference
- 4px = `var(--spacing-1)`
- 8px = `var(--spacing-2)`
- 12px = `var(--spacing-3)`
- 16px = `var(--spacing-4)`
- 20px = `var(--spacing-5)`
- 24px = `var(--spacing-6)`
- 32px = `var(--spacing-8)`
- 40px = `var(--spacing-10)`
- 44px = `var(--spacing-11)`
- 48px = `var(--spacing-12)`
- 80px = `var(--spacing-20)`
