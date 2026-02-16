# Batch 40: Developer & Landing Templates Migration

**Date:** February 9, 2026
**Status:** In Progress

## Overview
This batch focuses on migrating developer tools and landing page templates to the WordPress Block System. These templates currently use forbidden Tailwind classes (especially grid) and extensive inline styles that must be replaced with standardized blocks and utility classes.

## Scope
1. **DevToolsTemplate.tsx**
   - Remove `grid grid-cols-*` and replace with `wp-grid-*-cols`.
   - Replace inline styles with `Heading` and `Paragraph` blocks.
   - Use `wp-block-group` and `wp-block-columns` where appropriate.

2. **IndexTemplate.tsx**
   - Fix grid layouts to use WordPress utilities.
   - Standardize typography and spacing.

3. **ServicesLandingTemplate.tsx**
   - Migrate service grids to proper block patterns.
   - Remove inline styles.

4. **SolutionDetailTemplate.tsx**
   - Fix layout and typography.
   - Ensure consistent design token usage.

## Implementation Plan
- [ ] Migrate `DevToolsTemplate.tsx`
- [ ] Migrate `IndexTemplate.tsx`
- [ ] Migrate `ServicesLandingTemplate.tsx`
- [ ] Migrate `SolutionDetailTemplate.tsx`
