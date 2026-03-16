# Color Tokens — Design Tokens

**Category:** Design Tokens  
**Version:** 1.4.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Overview

All colors in the LSX Design System use **semantic CSS variables** defined in `/src/styles/theme-light.css` and `/src/styles/theme-dark.css`. Colors automatically adapt between light and dark modes through CSS variable remapping.

This guideline has been split into 4 focused sub-files for maintainability. The `colors-patterns` hub is further split into 2 sub-files.

---

## Sub-Files

| File | Contents | Lines |
|---|---|---|
| [colors-core.md](./colors/colors-core.md) | Overview, architecture, surface colors (background/card/muted/popover), interactive colors (primary/secondary/accent) | ~275 |
| [colors-states-borders.md](./colors/colors-states-borders.md) | Destructive/state colors, border tokens (standard/soft/extra-soft), semantic usage decision matrix | ~220 |
| [colors-patterns.md](./colors/colors-patterns.md) | Hub for section patterns + modes/contrast. Sub-files: [colors-section-patterns.md](./colors/colors-section-patterns.md) (4 patterns + page example), [colors-modes-contrast.md](./colors/colors-modes-contrast.md) (WCAG contrast, light/dark mode, glassmorphism) | hub ~35 |
| [colors-reference.md](./colors/colors-reference.md) | WordPress theme.json integration, quick reference decision tree, common mistakes, summary checklist | ~175 |

---

## Reading Order

1. **Start with [colors-core.md](./colors/colors-core.md)** — Understand the color architecture and token hierarchy
2. **Then [colors-states-borders.md](./colors/colors-states-borders.md)** — Learn state and border tokens, semantic usage rules
3. **Then [colors-patterns.md](./colors/colors-patterns.md)** — Apply section patterns, verify accessibility, understand modes
4. **Keep [colors-reference.md](./colors/colors-reference.md) handy** — Quick lookups, WordPress mapping, mistake avoidance

---

## Quick Reference (Summary)

**Section backgrounds:** `var(--card)` (recommended), `var(--background)`, `var(--muted)`  
**Headings:** `var(--foreground)` or `var(--card-foreground)`  
**Body text:** `var(--muted-foreground)`  
**Links:** `var(--accent)`  
**Buttons:** `var(--primary)`, `var(--secondary)`, `var(--destructive)`  
**Borders:** `var(--border-soft)` (recommended), `var(--border)`, `var(--border-extra-soft)`  
**Glass effects:** `var(--glass-bg)`, `var(--glass-border)`, `var(--glass-text)`

---

**Last Updated:** March 15, 2026  
**Color Variables:** 40+  
**Modes Supported:** Light, Dark  
**WCAG Compliance:** 100% AA, 97% AAA