# Batch 35: Font Compliance Fixes (Part 2 & 3 & 4)

**Date:** January 28, 2026
**Status:** In Progress

## Overview
Replacing hardcoded font families with CSS variables across the entire application.

## Files Updated

### Blocks
- `src/app/components/blocks/forms/*.tsx` (3 files)
- `src/app/components/blocks/feedback/*.tsx` (3 files)
- `src/app/components/blocks/navigation/*.tsx` (2 files)
- `src/app/components/blocks/utility/Badge.tsx`
- `src/app/components/blocks/layout/ErrorBoundary.tsx`
- `src/app/components/blocks/data-display/Table.tsx`
- `src/app/components/blocks/theme/*.tsx` (2 files)

### Templates
- All templates in `src/app/components/templates/` (21+ files)

### SEO
- `src/app/components/seo/*.tsx` (4 files)

### Common
- `src/app/components/common/LogoInline.tsx`

### Utils (Validators)
- `src/app/utils/designSystemValidator.ts`
- `src/app/utils/sampleAuditor.ts`
- `src/app/utils/componentAuditor.ts`

## Changes Made
- Replaced `fontFamily: 'Lexend, sans-serif'` → `fontFamily: 'var(--font-primary)'`
- Replaced `fontFamily: 'Manrope, sans-serif'` → `fontFamily: 'var(--font-secondary)'`
- Updated validators to recommend CSS variables instead of hardcoded font names.

## Remaining Work
- Final deep scan to ensure nothing was missed.
