# CSS Variables System — Token Reference

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [css-variables-overview.md](../css-variables-overview.md)  

---

## Purpose

**What:** Complete overview of the CSS variable system for the LSX Design prototype

**Why:** Centralized token management gives users complete control over styling

**Who:** All developers generating UI

---

## CRITICAL REQUIREMENT

**All UI generation MUST use CSS variables.**

This gives users complete control over styling by editing CSS files alone — no React component changes needed.

---

## System Overview

**Total Variables:** 80 CSS variables (33 LSX-specific + 47 WordPress-compatible)

**Location:**
- `/src/styles/theme-base.css` — Base tokens (spacing, typography, borders)
- `/src/styles/theme-light.css` — Light mode colors
- `/src/styles/theme-dark.css` — Dark mode colors

---

## Design System Fonts

**CRITICAL:** Only use fonts defined in the design system via CSS variables.

**Primary Font:** Lexend (headings, body, UI)  
**Secondary Font:** Manrope (small text only)

```tsx
// ALWAYS use CSS variables
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope

// NEVER hardcode font names
fontFamily: 'Lexend, sans-serif'       // DON'T
```

---

## Token Categories

### 1. Typography Tokens

```tsx
// Font Families
fontFamily: 'var(--font-primary)'
fontFamily: 'var(--font-secondary)'

// Font Sizes
fontSize: 'var(--text-h1)'             // 60px (clamp 32px-64px)
fontSize: 'var(--text-h2)'             // 48px (clamp 28px-48px)
fontSize: 'var(--text-h3)'             // 36px (clamp 24px-36px)
fontSize: 'var(--text-h4)'             // 28px (clamp 20px-28px)
fontSize: 'var(--text-h5)'             // 24px (clamp 18px-24px)
fontSize: 'var(--text-h6)'             // 20px (clamp 16px-20px)
fontSize: 'var(--text-base)'           // 18px (clamp 15px-18px)
fontSize: 'var(--text-lead)'           // 22px (clamp 18px-22px)
fontSize: 'var(--text-sm)'             // 14px
fontSize: 'var(--text-xs)'             // 12px

// Font Weights
fontWeight: 'var(--font-weight-regular)'    // 400
fontWeight: 'var(--font-weight-medium)'     // 500
fontWeight: 'var(--font-weight-semibold)'   // 600
fontWeight: 'var(--font-weight-bold)'       // 700
```

**See:** [typography.md](../typography.md)

---

### 2. Spacing Tokens

```tsx
padding: 'var(--spacing-0)'            // 0
padding: 'var(--spacing-1)'            // 4px
padding: 'var(--spacing-2)'            // 8px
padding: 'var(--spacing-4)'            // 16px
padding: 'var(--spacing-6)'            // 24px
padding: 'var(--spacing-8)'            // 32px
padding: 'var(--spacing-12)'           // 48px
padding: 'var(--spacing-16)'           // 64px
padding: 'var(--spacing-20)'           // 80px
padding: 'var(--spacing-24)'           // 96px
// ... up to --spacing-64 (256px)
```

**See:** [spacing.md](../spacing.md)

---

### 3. Color Tokens

```tsx
// Primary
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Background/Foreground
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Card
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'

// Muted
backgroundColor: 'var(--muted)'
color: 'var(--muted-foreground)'

// Accent
backgroundColor: 'var(--accent)'
color: 'var(--accent-foreground)'

// Borders
borderColor: 'var(--border)'
borderColor: 'var(--input)'

// State
backgroundColor: 'var(--destructive)'
color: 'var(--destructive-foreground)'
```

**See:** [colors.md](../colors.md)

---

### 4. Border Radius Tokens

```tsx
borderRadius: 'var(--radius)'          // 4px
borderRadius: 'var(--radius-sm)'       // 2px
borderRadius: 'var(--radius-lg)'       // 8px
borderRadius: 'var(--radius-xl)'       // 12px
borderRadius: 'var(--radius-full)'     // 9999px (pill)
```

---

### 5. Shadow Tokens

```tsx
boxShadow: 'var(--shadow-sm)'          // Small
boxShadow: 'var(--shadow)'             // Default
boxShadow: 'var(--shadow-md)'          // Medium
boxShadow: 'var(--shadow-lg)'          // Large
```

---

## WordPress-Compatible Variables

**47 `--wp--preset--*` variables** mapping to theme.json presets:

```tsx
padding: 'var(--wp--preset--spacing--6)'
fontSize: 'var(--wp--preset--font-size--h1)'
color: 'var(--wp--preset--color--primary)'
```

---

**See also:** [usage-examples.md](./usage-examples.md)
