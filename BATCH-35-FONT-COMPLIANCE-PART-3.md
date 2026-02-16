# Batch 35: Font Compliance Fixes (Part 3)

**Date:** January 28, 2026
**Status:** In Progress

## Overview
Replacing hardcoded font families with CSS variables in blocks/navigation, blocks/utility, blocks/layout, blocks/data-display, and blocks/theme.

## Files Updated

### Navigation Blocks
- `src/app/components/blocks/navigation/SocialLinks.tsx`
- `src/app/components/blocks/navigation/index.ts`

### Utility Blocks
- `src/app/components/blocks/utility/Badge.tsx`

### Layout Blocks
- `src/app/components/blocks/layout/ErrorBoundary.tsx`

### Data Display Blocks
- `src/app/components/blocks/data-display/Table.tsx`

### Theme Blocks
- `src/app/components/blocks/theme/SiteTitle.tsx`
- `src/app/components/blocks/theme/index.ts`

## Changes Made
- Replaced `fontFamily: 'Lexend, sans-serif'` → `fontFamily: 'var(--font-primary)'`
- Replaced `fontFamily: 'Manrope, sans-serif'` → `fontFamily: 'var(--font-secondary)'`

## Remaining Work
- Fix remaining violations in `src/app/components/templates/` (21 files)
- Fix remaining violations in `src/app/components/seo/` (4 files)
- Fix remaining violations in `src/app/components/common/` (3 files)
