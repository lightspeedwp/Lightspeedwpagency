# Batch 38: Conversion & Legal Templates Migration

**Date:** February 9, 2026
**Status:** In Progress

## Overview
This batch focuses on migrating conversion-focused templates and placeholders that contain inline styles and forbidden Tailwind classes.

## Scope
1. **GuaranteesTemplate**
   - Remove forbidden Tailwind grid classes (`grid`, `grid-cols-*`).
   - Replace heavy inline styles with WordPress blocks and utility classes.
   - Use `wp-grid-*` and `wp-text-*` utilities.

2. **WhyChooseUsTemplate**
   - Replace inline styles with standardized blocks.
   - Ensure consistent usage of design tokens.
   - Remove any remaining Tailwind classes.

3. **ContentAuditTemplate** (and similar placeholders)
   - Convert to proper WordPress block structure.
   - Remove inline styles.

## Implementation Plan
- [ ] Migrate `GuaranteesTemplate.tsx`
- [ ] Migrate `WhyChooseUsTemplate.tsx`
- [ ] Migrate `ContentAuditTemplate.tsx`
