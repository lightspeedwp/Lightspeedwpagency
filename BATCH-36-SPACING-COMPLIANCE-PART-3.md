# Batch 36: Spacing Compliance (Part 3)

**Date:** January 28, 2026
**Status:** In Progress

## Overview
Replacing hardcoded pixel values for spacing (padding, margin, gap) and sizing with CSS variables in remaining Template components.

## Targets
- `src/app/components/templates/DevelopmentServiceTemplate.tsx`
- `src/app/components/templates/SolutionDetailTemplate.tsx`
- `src/app/components/templates/AboutProcessTemplate.tsx`

## Changes
- Replace `padding: '24px'`, `padding: '32px'`, `padding: '40px'` with `var(--spacing-*)`.
- Replace `gap: '6px'`, `gap: '8px'` with `var(--spacing-*)`.

## Reference
- 6px = `var(--spacing-1)` (approx, or use spacing-1 which is 4px or spacing-2 which is 8px. 6px is spacing-1.5 but let's stick to system. maybe spacing-2) -> Use `var(--spacing-1)` (4px) or `var(--spacing-2)` (8px). 6px is often `gap-1.5`. I'll use `var(--spacing-2)` (8px) for better spacing or `var(--spacing-1)` if it needs to be tight.
- 8px = `var(--spacing-2)`
- 12px = `var(--spacing-3)`
- 24px = `var(--spacing-6)`
- 32px = `var(--spacing-8)`
- 40px = `var(--spacing-10)`
