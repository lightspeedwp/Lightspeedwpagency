# CSS Variables System — Design Tokens

**Category:** Design Tokens  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Overview

Complete CSS variable system for the LSX Design prototype. **All UI generation MUST use CSS variables.** Split into 3 focused sub-files.

**Total Variables:** 80 (33 LSX-specific + 47 WordPress-compatible)

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [token-reference.md](./css-variables-overview/token-reference.md) | Purpose, system overview, design system fonts, WordPress-compatible variables | ~200 |
| [token-categories.md](./css-variables-overview/token-categories.md) | All 5 token categories (typography, spacing, colors, radius, shadows) | ~varies |
| [usage-examples.md](./css-variables-overview/usage-examples.md) | Token reference syntax, complete component example, user control examples (fonts, colors), anti-patterns, verification checklist | ~200 |

---

## Quick Reference

```tsx
// Typography
fontFamily: 'var(--font-primary)'
fontSize: 'var(--text-h1)'
fontWeight: 'var(--font-weight-bold)'

// Spacing
padding: 'var(--spacing-6)'

// Colors
color: 'var(--foreground)'
backgroundColor: 'var(--background)'

// Borders
borderRadius: 'var(--radius-lg)'
borderColor: 'var(--border)'

// Shadows
boxShadow: 'var(--shadow)'
```

---

**Last Updated:** March 15, 2026  
**User Control:** 100% via CSS files
