# Color Tokens — Core (Surfaces & Interactive)

**Category:** Design Tokens  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [colors.md](../colors.md)  

---

## Overview

All colors in the LSX Design System use **semantic CSS variables** defined in `/src/styles/theme-light.css` and `/src/styles/theme-dark.css`. Colors automatically adapt between light and dark modes through CSS variable remapping.

### Core Principles

1. **Semantic Naming:** Color names describe purpose, not appearance
2. **Automatic Adaptation:** CSS variables switch values between themes
3. **Contrast Compliance:** All combinations meet WCAG 2.1 AA minimum
4. **Zero Hard-coding:** Never use hex codes or RGB values directly
5. **Token-First:** Every color comes from the design system

### Critical Rules

**Always:**
- Use CSS variables: `backgroundColor: 'var(--card)'`
- Pair backgrounds with correct foregrounds
- Test contrast in both light and dark modes
- Use semantic names that describe purpose

**Never:**
- Hard-code colors: `backgroundColor: '#1E6AFF'`
- Use RGB/HSL values directly
- Create custom color tokens
- Use Tailwind color classes (use CSS vars instead)
- Override system colors in components

---

## Color System Architecture

### Hierarchy & Relationships

```
SURFACE LAYERS
  --background          (Page level)
    └── --foreground    (Main text)
  --card                (Containers)
    └── --card-foreground (Card text)
  --muted               (Subtle areas)
    └── --muted-foreground (Muted text)

INTERACTIVE ELEMENTS
  --primary             (Main actions)
    └── --primary-foreground
  --secondary           (Supporting actions)
    └── --secondary-foreground
  --accent              (Highlights)
    └── --accent-foreground
  --destructive         (Dangerous actions)
    └── --destructive-foreground

BORDERS & DIVIDERS
  --border              (Standard)
  --border-soft         (Subtle)
  --border-extra-soft   (Very subtle)
```

---

## Surface Colors

### Page Background & Text

**`--background` / `--foreground`**

Use for: Main page background and primary body text

```tsx
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>
  <h1 style={{ color: 'var(--foreground)' }}>Page Title</h1>
  <p style={{ color: 'var(--muted-foreground)' }}>Body text</p>
</div>
```

**Values:**
```css
/* Light Mode */
--background: rgba(255, 255, 255, 1);    /* #FFFFFF - Pure white */
--foreground: rgba(9, 9, 9, 1);          /* #090909 - Nearly black */

/* Dark Mode */
--background: rgba(9, 9, 9, 1);          /* #090909 - Nearly black */
--foreground: rgba(255, 255, 255, 1);    /* #FFFFFF - Pure white */
```

**Contrast Ratio:** 21:1 WCAG AAA

---

### Card Background & Text

**`--card` / `--card-foreground`**

Use for: Card containers, sections, modals, elevated surfaces

```tsx
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border-soft)',
  padding: '24px'
}}>
  <h2 style={{ color: 'var(--card-foreground)' }}>Card Title</h2>
  <p style={{ color: 'var(--muted-foreground)' }}>Card description</p>
</div>
```

**Values:**
```css
/* Light Mode */
--card: rgba(255, 255, 255, 1);          /* #FFFFFF - Pure white */
--card-foreground: rgba(9, 9, 9, 1);     /* #090909 - Nearly black */

/* Dark Mode */
--card: rgba(30, 30, 30, 1);             /* #1E1E1E - Dark gray */
--card-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - Pure white */
```

**Contrast Ratio:** Light: 21:1 AAA | Dark: 17.4:1 AAA

**Best Practice:** `--card` is the recommended background for all section content areas.

---

### Muted Background & Text

**`--muted` / `--muted-foreground`**

Use for: Subtle backgrounds, disabled states, less prominent areas, secondary text

```tsx
<div style={{
  backgroundColor: 'var(--muted)',
  padding: '16px',
  borderRadius: 'var(--radius)'
}}>
  <p style={{ color: 'var(--muted-foreground)' }}>
    Subtle information or secondary text
  </p>
</div>
```

**Values:**
```css
/* Light Mode */
--muted: rgba(225, 225, 225, 1);         /* #E1E1E1 - Light gray */
--muted-foreground: rgba(86, 86, 86, 1); /* #565656 - Medium gray */

/* Dark Mode */
--muted: rgba(86, 86, 86, 1);            /* #565656 - Medium gray */
--muted-foreground: rgba(225, 225, 225, 1); /* #E1E1E1 - Light gray */
```

**Contrast Ratio:** 7.2:1 WCAG AAA

**Common Uses:**
- `backgroundColor: 'var(--muted)'` — Alternating section backgrounds
- `color: 'var(--muted-foreground)'` — Body text, descriptions, metadata

---

### Popover Background & Text

**`--popover` / `--popover-foreground`**

Use for: Dropdown menus, tooltips, floating UI elements

```tsx
<div style={{
  backgroundColor: 'var(--popover)',
  color: 'var(--popover-foreground)',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-lg)',
  padding: '12px'
}}>
  Dropdown content
</div>
```

---

## Interactive Colors

### Primary Color (Main Actions)

**`--primary` / `--primary-foreground`**

Use for: Primary buttons, main CTAs, icon backgrounds (small), badges

**CRITICAL:** Do NOT use for large section backgrounds (readability issues in light mode)

**Values:**
```css
/* Light Mode */
--primary: rgba(30, 106, 255, 1);        /* #1E6AFF - Bright blue */
--primary-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - White */

/* Dark Mode */
--primary: rgba(123, 231, 255, 1);       /* #7BE7FF - Light cyan */
--primary-foreground: rgba(14, 50, 120, 1); /* #0E3278 - Dark blue */
```

**Contrast Ratio:** 4.8:1 WCAG AA

**When to Use:**
- Primary buttons and CTAs
- Icon backgrounds (small areas < 100px)
- Badges and tags
- Active states on filters/tabs
- Accent highlights (text color for numbers)
- Links (text color)

**When NOT to Use:**
- Section backgrounds (use `--card` instead)
- Large content areas, card backgrounds, page backgrounds

---

### Secondary Color (Supporting Actions)

**`--secondary` / `--secondary-foreground`**

Use for: Secondary buttons, less prominent actions, hover states

**Values:**
```css
/* Light Mode */
--secondary: rgba(123, 231, 255, 1);     /* #7BE7FF - Light cyan */
--secondary-foreground: rgba(14, 50, 120, 1); /* #0E3278 - Dark blue */

/* Dark Mode */
--secondary: rgba(14, 50, 120, 1);       /* #0E3278 - Dark blue */
--secondary-foreground: rgba(123, 231, 255, 1); /* #7BE7FF - Light cyan */
```

**Contrast Ratio:** 5.2:1 WCAG AA

---

### Accent Color (Highlights & Links)

**`--accent` / `--accent-foreground`**

Use for: Inline links, highlighted text, decorative accents

**Values:**
```css
/* Light Mode */
--accent: rgba(123, 231, 255, 1);        /* #7BE7FF - Light cyan */
--accent-foreground: rgba(14, 50, 120, 1); /* #0E3278 - Dark blue */

/* Dark Mode */
--accent: rgba(30, 106, 255, 1);         /* #1E6AFF - Blue */
--accent-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - White */
```

---

**See also:** [colors-states-borders.md](./colors-states-borders.md) | [colors-patterns.md](./colors-patterns.md) | [colors-reference.md](./colors-reference.md)
