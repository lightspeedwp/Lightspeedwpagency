# Border Presets

**Design System:** LSX Design  
**Category:** Design Tokens  
**Last Updated:** December 24, 2024

---

## Overview

The LSX Design system uses a **soft border approach** for modern, clean aesthetics. Borders should define space without demanding attention. This document defines all border presets available in the system.

---

## Border Variables

All border variables are defined in `/src/styles/theme.css` and support both light and dark modes.

### Primary Border Variables

```css
/* Light Mode */
--border: rgba(117, 117, 117, 1);           /* High-contrast border (forms only) */
--border-soft: rgba(0, 0, 0, 0.08);         /* Soft border (cards, containers) */
--border-extra-soft: rgba(0, 0, 0, 0.04);   /* Extra soft (internal dividers) */

/* Dark Mode */
--border: rgba(117, 117, 117, 1);           /* High-contrast border (forms only) */
--border-soft: rgba(255, 255, 255, 0.08);   /* Soft border (cards, containers) */
--border-extra-soft: rgba(255, 255, 255, 0.04); /* Extra soft (internal dividers) */
```

---

## Border Presets by Use Case

### 1. Card Borders

**Use:** Card containers, panels, modals, popovers

```tsx
// React/TSX
style={{
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-xl)'
}}

// CSS
.card {
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-xl);
}
```

**Why:** Soft borders (8% opacity) provide subtle definition without competing with content.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "color": "var(--border-soft)",
      "width": "1px"
    }
  }
}
```

---

### 2. Internal Dividers

**Use:** Dividers within cards, section separators, list item borders, table rows

```tsx
// React/TSX - Top border
style={{
  borderTop: '1px solid var(--border-extra-soft)',
  paddingTop: '12px'
}}

// React/TSX - Bottom border
style={{
  borderBottom: '1px solid var(--border-extra-soft)',
  paddingBottom: '12px'
}}

// CSS
.divider {
  border-top: 1px solid var(--border-extra-soft);
  padding-top: 12px;
}
```

**Why:** Extra soft borders (4% opacity) create subtle separation without visual weight.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "top": {
        "color": "var(--border-extra-soft)",
        "width": "1px"
      }
    }
  }
}
```

---

### 3. Form Input Borders

**Use:** Text inputs, textareas, select dropdowns, searchbars

```tsx
// React/TSX
style={{
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '12px 16px',
  backgroundColor: 'var(--input-background)'
}}

// Focus state
onFocus={(e) => {
  e.currentTarget.style.borderColor = 'var(--ring)';
}}

onBlur={(e) => {
  e.currentTarget.style.borderColor = 'var(--border)';
}}
```

**Why:** Form inputs need high-contrast borders for accessibility (WCAG 2.1 AA requirement).

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "color": "var(--border)",
      "width": "1px"
    }
  }
}
```

---

### 4. Navigation Borders

**Use:** Header bottom border, footer top border, sidebar borders

```tsx
// React/TSX - Header
<header style={{
  borderBottom: '1px solid var(--border-soft)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(12px)'
}}>

// React/TSX - Footer
<footer style={{
  borderTop: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)'
}}>
```

**Why:** Soft borders create elegant separation without harsh lines.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "bottom": {
        "color": "var(--border-soft)",
        "width": "1px"
      }
    }
  }
}
```

---

### 5. Button Borders (Outline/Ghost Variants)

**Use:** Secondary buttons, ghost buttons, outline buttons

```tsx
// React/TSX - Outline button
style={{
  border: '1px solid var(--border)',
  backgroundColor: 'transparent',
  color: 'var(--foreground)',
  borderRadius: 'var(--radius-lg)',
  padding: '12px 24px'
}}

// Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = 'var(--primary)';
  e.currentTarget.style.color = 'var(--primary)';
}}
```

**Why:** Outline buttons need clear borders for visibility. Use standard `--border` for better contrast.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "color": "var(--border)",
      "width": "1px"
    }
  }
}
```

---

### 6. Hover State Borders (Interactive Cards)

**Use:** Cards that change border on hover

```tsx
// React/TSX - Default state
style={{
  border: '1px solid var(--border-soft)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}}

// Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = 'var(--primary)';
  e.currentTarget.style.transform = 'translateY(-12px)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.borderColor = 'var(--border-soft)';
  e.currentTarget.style.transform = 'translateY(0)';
}}
```

**Why:** Border changes to primary color on hover creates clear interaction feedback.

---

### 7. Focus State Borders

**Use:** Focus indicators for keyboard navigation

```tsx
// React/TSX
style={{
  outline: '2px solid var(--ring)',
  outlineOffset: '2px'
}}

// Or as border
onFocus={(e) => {
  e.currentTarget.style.borderColor = 'var(--ring)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 106, 255, 0.2)';
}}
```

**Why:** High-contrast focus indicators are required for accessibility (WCAG 2.1 AA).

**WordPress Blocks:**
```json
{
  "styles": {
    "outline": {
      "color": "var(--ring)",
      "width": "2px",
      "offset": "2px"
    }
  }
}
```

---

### 8. Avatar/Image Borders

**Use:** User avatars, profile images, featured images (optional)

```tsx
// React/TSX - Subtle border
style={{
  border: '2px solid var(--border-soft)',
  borderRadius: '50%'
}}

// React/TSX - Prominent border (author pages, profiles)
style={{
  border: '4px solid var(--border)',
  borderRadius: '50%'
}}
```

**Why:** Subtle borders for general use, prominent borders for emphasis (e.g., author archive pages).

---

### 9. Table Borders

**Use:** Table cells, table rows

```tsx
// React/TSX - Row borders
<tr style={{
  borderBottom: '1px solid var(--border-extra-soft)'
}}>

// React/TSX - Cell borders (if needed)
<td style={{
  borderRight: '1px solid var(--border-extra-soft)',
  padding: '12px 16px'
}}>
```

**Why:** Extra soft borders keep tables clean and readable.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "bottom": {
        "color": "var(--border-extra-soft)",
        "width": "1px"
      }
    }
  }
}
```

---

### 10. Decorative Borders (CTA Sections)

**Use:** CTA containers, highlighted sections (non-gradient variants)

```tsx
// React/TSX
style={{
  border: '2px solid var(--border-soft)',
  borderRadius: 'var(--radius-xl)',
  padding: '48px 32px'
}}
```

**Why:** Slightly thicker (2px) soft border adds subtle emphasis while maintaining modern feel.

---

## Border Width Scale

```css
/* Standard widths */
border-width: 1px;  /* DEFAULT - Use for 95% of borders */
border-width: 2px;  /* Emphasis - CTA containers, decorative borders */
border-width: 4px;  /* Strong emphasis - Avatars on profile pages */
```

**Rule:** Always use 1px unless you need visual emphasis.

---

## Usage Decision Tree

```
Need a border?
│
├─ Is it a form input?
│  └─ YES → Use var(--border) [High contrast for accessibility]
│
├─ Is it a button outline?
│  └─ YES → Use var(--border) [Clear visibility needed]
│
├─ Is it a card/container/panel?
│  └─ YES → Use var(--border-soft) [Soft, modern]
│
├─ Is it an internal divider/separator?
│  └─ YES → Use var(--border-extra-soft) [Very subtle]
│
├─ Is it a focus indicator?
│  └─ YES → Use var(--ring) [Accessibility requirement]
│
└─ Is it decorative emphasis?
   └─ YES → Use var(--border-soft) with 2px width [Subtle emphasis]
```

---

## Border + Border Radius Combinations

Common patterns that work well together:

```tsx
// Card (default)
border: '1px solid var(--border-soft)'
borderRadius: 'var(--radius-xl)'  // 16px

// Button (outline)
border: '1px solid var(--border)'
borderRadius: 'var(--radius-lg)'  // 12px

// Input field
border: '1px solid var(--border)'
borderRadius: 'var(--radius-lg)'  // 12px

// Small component (tag, badge)
border: '1px solid var(--border-soft)'
borderRadius: 'var(--radius)'     // 4px

// Avatar
border: '2px solid var(--border-soft)'
borderRadius: '50%'               // Circle
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

1. **Form Inputs:**
   - MUST use `var(--border)` for clear boundary definition
   - MUST have visible focus state with `var(--ring)`
   - Border color must have 3:1 contrast ratio against background

2. **Focus Indicators:**
   - MUST use `var(--ring)` or equivalent high-contrast color
   - MUST be at least 2px wide
   - MUST have 2px offset or visible gap

3. **Interactive Elements:**
   - Border changes on hover MUST be perceivable (color change to `var(--primary)`)
   - Border changes MUST not be the only indicator of state

---

## WordPress Implementation

### theme.json

```json
{
  "settings": {
    "border": {
      "color": true,
      "width": true,
      "style": true
    },
    "custom": {
      "border": {
        "default": "var(--border)",
        "soft": "var(--border-soft)",
        "extraSoft": "var(--border-extra-soft)"
      }
    }
  },
  "styles": {
    "border": {
      "color": "var(--border-soft)",
      "width": "1px",
      "style": "solid"
    }
  }
}
```

### Block Styles

```php
// Card style
register_block_style(
  'core/group',
  array(
    'name'  => 'card',
    'label' => 'Card',
    'inline_style' => '
      .wp-block-group.is-style-card {
        border: 1px solid var(--border-soft);
        border-radius: var(--radius-xl);
      }
    '
  )
);

// Divider style
register_block_style(
  'core/separator',
  array(
    'name'  => 'extra-soft',
    'label' => 'Extra Soft',
    'inline_style' => '
      .wp-block-separator.is-style-extra-soft {
        border-color: var(--border-extra-soft);
      }
    '
  )
);
```

---

## Common Mistakes to Avoid

### ❌ NEVER Do This

```tsx
// Hard-coded color
border: '1px solid #757575'  // WRONG - not themeable

// Hard-coded opacity
border: '1px solid rgba(0, 0, 0, 0.1)'  // WRONG - use CSS variable

// Using hard border on cards
border: '1px solid var(--border)'  // WRONG for cards - too harsh

// Using soft border on inputs
border: '1px solid var(--border-soft)'  // WRONG for inputs - accessibility issue
```

### ✅ ALWAYS Do This

```tsx
// Use CSS variables
border: '1px solid var(--border-soft)'  // CORRECT

// Use appropriate border for context
// Cards:
border: '1px solid var(--border-soft)'  // CORRECT
// Inputs:
border: '1px solid var(--border)'       // CORRECT
```

---

## Testing Checklist

Before shipping, verify:

- [ ] All card borders use `var(--border-soft)`
- [ ] All internal dividers use `var(--border-extra-soft)`
- [ ] All form inputs use `var(--border)`
- [ ] All focus states use `var(--ring)`
- [ ] No hard-coded border colors exist
- [ ] Dark mode borders are visible and appropriate
- [ ] Border contrast ratios meet WCAG 2.1 AA
- [ ] Hover states are perceivable

---

## Quick Reference

| Use Case | Variable | Width | Notes |
|----------|----------|-------|-------|
| Cards | `var(--border-soft)` | 1px | Soft, modern |
| Internal dividers | `var(--border-extra-soft)` | 1px | Very subtle |
| Form inputs | `var(--border)` | 1px | High contrast |
| Buttons (outline) | `var(--border)` | 1px | Clear visibility |
| Navigation | `var(--border-soft)` | 1px | Elegant separation |
| Focus states | `var(--ring)` | 2px | Accessibility |
| Avatars (subtle) | `var(--border-soft)` | 2px | Soft emphasis |
| Avatars (prominent) | `var(--border)` | 4px | Strong emphasis |
| Hover states | `var(--primary)` | 1px | Interaction feedback |
| CTA containers | `var(--border-soft)` | 2px | Decorative emphasis |

---

**Remember:** Borders should define space, not demand attention. Use the softest border possible for the context while maintaining accessibility.
