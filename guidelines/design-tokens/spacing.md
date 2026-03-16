# Spacing Tokens — Design Tokens

**Category:** Design Tokens  
**Version:** 2.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Overview

All spacing uses CSS variables defined in `/src/styles/theme-base.css`. Two scales are available:

1. **Primary Scale** (`--spacing-*`) — Used throughout the prototype codebase
2. **WordPress Scale** (`--wp--preset--spacing--*`) — WordPress theme.json compatible

This guideline has been split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [spacing-tokens.md](./spacing/spacing-tokens.md) | Primary scale, semantic aliases, fluid tokens, WordPress scale, CSS usage, component guidelines, layout spacing, responsive spacing | ~290 |
| [spacing-patterns.md](./spacing/spacing-patterns.md) | Section patterns, best practices, spacing matrix, vertical rhythm, theme.json, WordPress utility classes, migration guide | ~290 |

---

## Quick Reference

**Primary scale:** `var(--spacing-1)` (4px) through `var(--spacing-64)` (256px)  
**Semantic aliases:** `var(--spacing-xs)` through `var(--spacing-4xl)`  
**WordPress scale:** `var(--wp--preset--spacing--10)` through `--100`  
**Grid utilities:** `.wp-grid-2-cols`, `.wp-grid-3-cols`, `.wp-grid-4-cols`  
**Max-width utilities:** `.wp-max-w-3xl`, `.wp-max-w-4xl`, `.wp-max-w-6xl`  
**Text alignment:** `.wp-text-center`, `.wp-text-left`, `.wp-text-right`

---

**Base Unit:** 4px (0.25rem)  
**Last Updated:** March 15, 2026
