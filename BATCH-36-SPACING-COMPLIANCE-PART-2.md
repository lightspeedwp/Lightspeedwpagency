# Batch 36: Spacing Compliance (Templates)

**Date:** January 28, 2026
**Status:** In Progress

## Overview
Replacing hardcoded pixel values for spacing (padding, margin, gap) and sizing with CSS variables in Template components.

## Targets
- `src/app/components/templates/PortfolioArchiveTemplate.tsx`
- `src/app/components/templates/PortfolioSingleTemplate.tsx`
- `src/app/components/templates/ServiceDetailTemplate.tsx`

## Changes
- Replace `padding: '24px'`, `padding: '32px'`, `padding: '40px'` with `var(--spacing-*)`.
- Replace `gap: '8px'`, `gap: '12px'`, `gap: '20px'` with `var(--spacing-*)`.
- Replace `borderRadius: 'var(--radius-lg)'` (Ensure it's using variable, which it seems to be).

## Reference
- 8px = `var(--spacing-2)`
- 12px = `var(--spacing-3)`
- 16px = `var(--spacing-4)`
- 20px = `var(--spacing-5)`
- 24px = `var(--spacing-6)`
- 32px = `var(--spacing-8)`
- 40px = `var(--spacing-10)`
- 48px = `var(--spacing-12)`
