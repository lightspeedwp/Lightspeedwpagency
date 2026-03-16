# CSS Variables System — Token Categories

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [css-variables-overview.md](../css-variables-overview.md)  

---

## CRITICAL REQUIREMENT

**All UI generation MUST use CSS variables.**

This gives users complete control over styling by editing CSS files alone — no React component changes needed.

**Time Savings:** 99%+ (60 minutes to 30 seconds for design changes)

---

## System Overview

**Total Variables:** 80 CSS variables
- 33 LSX-specific variables
- 47 WordPress-compatible variables

**Location:** `/src/styles/`
- `/src/styles/theme-base.css` — Base tokens (spacing, typography, borders)
- `/src/styles/theme-light.css` — Light mode colors
- `/src/styles/theme-dark.css` — Dark mode colors

---

## Design System Fonts

**Primary Font:** Lexend (headings, body, UI)  
**Secondary Font:** Manrope (small text only)

```tsx
// ALWAYS use CSS variables
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope

// NEVER hardcode font names
fontFamily: 'Lexend, sans-serif'       // DON'T
```

**Why:** Users change fonts by editing one line in CSS — entire site updates.

---

## 1. Typography Tokens

**Font Families:**
```tsx
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope
```

**Font Sizes:**
```tsx
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
```

**Font Weights:**
```tsx
fontWeight: 'var(--font-weight-regular)'    // 400
fontWeight: 'var(--font-weight-medium)'     // 500
fontWeight: 'var(--font-weight-semibold)'   // 600
fontWeight: 'var(--font-weight-bold)'       // 700
```

**See:** [typography.md](../typography.md)

---

## 2. Spacing Tokens

```tsx
padding: 'var(--spacing-0)'            // 0
padding: 'var(--spacing-1)'            // 4px
padding: 'var(--spacing-2)'            // 8px
padding: 'var(--spacing-3)'            // 12px
padding: 'var(--spacing-4)'            // 16px
padding: 'var(--spacing-6)'            // 24px
padding: 'var(--spacing-8)'            // 32px
padding: 'var(--spacing-12)'           // 48px
padding: 'var(--spacing-16)'           // 64px
padding: 'var(--spacing-20)'           // 80px
padding: 'var(--spacing-24)'           // 96px
// ... up to --spacing-64 (256px)
```

**Rules:** ALWAYS use CSS variables, NEVER hardcode px, NEVER use Tailwind classes, use `.wp-*` utilities instead

**See:** [spacing.md](../spacing.md)

---

## 3. Color Tokens

**Semantic Colors:**
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'
backgroundColor: 'var(--muted)'
color: 'var(--muted-foreground)'
backgroundColor: 'var(--accent)'
color: 'var(--accent-foreground)'
borderColor: 'var(--border)'
```

**State Colors:**
```tsx
backgroundColor: 'var(--destructive)'
color: 'var(--destructive-foreground)'
```

**Rules:** ALWAYS use semantic color variables, NEVER hardcode hex, NEVER use rgb()/hsl() directly

**See:** [colors.md](../colors.md)

---

## 4. Border Radius Tokens

```tsx
borderRadius: 'var(--radius)'          // 4px (default)
borderRadius: 'var(--radius-sm)'       // 2px
borderRadius: 'var(--radius-lg)'       // 8px
borderRadius: 'var(--radius-xl)'       // 12px
borderRadius: 'var(--radius-full)'     // 9999px (pill shape)
```

---

## 5. Shadow Tokens

```tsx
boxShadow: 'var(--shadow-sm)'          // Small shadow
boxShadow: 'var(--shadow)'             // Default shadow
boxShadow: 'var(--shadow-md)'          // Medium shadow
boxShadow: 'var(--shadow-lg)'          // Large shadow
```

---

## WordPress-Compatible Variables

**WordPress Presets:** 47 `--wp--preset--*` variables

```tsx
padding: 'var(--wp--preset--spacing--6)'
fontSize: 'var(--wp--preset--font-size--h1)'
color: 'var(--wp--preset--color--primary)'
```

**See:** [spacing.md](../spacing.md) for WordPress preset mapping

---

**See also:** [usage-examples.md](./usage-examples.md)
