# Touch Targets — Design Tokens

**Category:** Design Tokens  
**Version:** 1.0.0  
**Last Updated:** 2026-03-13  
**Status:** Active  
**Template Used:** _templates/design-token-template.md

---

## Overview

**Purpose:** Define minimum touch/click target sizes for all interactive elements to meet WCAG 2.1 AA accessibility requirements.

**Scope:** All buttons, links, form controls, navigation items, filter chips, pagination, toggles, and any other clickable/tappable elements.

**Design System Principle:** Every interactive element must be comfortably usable on touch devices and by users with motor impairments.

---

## WCAG 2.1 Requirements

### Minimum Sizes (Non-Negotiable)

| Target Type | Minimum Size | CSS Implementation |
|---|---|---|
| **Buttons** | 44x44px | `min-height: 44px; min-width: 44px;` |
| **Links (inline)** | 44px tall | `min-height: 44px; display: inline-flex; align-items: center;` |
| **Form inputs** | 44px tall | `min-height: 44px;` |
| **Navigation items** | 44x44px | `min-height: 44px; min-width: 44px;` |
| **Icon buttons** | 44x44px | `min-width: 44px; height: 44px;` |
| **Filter chips** | 44px tall | `min-height: 44px; display: inline-flex; align-items: center;` |
| **Pagination links** | 44x44px | `min-width: 44px; height: 44px;` |

### Touch Target Spacing

Targets must have adequate spacing to prevent accidental taps:

```css
/* Minimum gap between adjacent targets */
gap: var(--spacing-2); /* 8px minimum */

/* Recommended gap for navigation items */
gap: var(--spacing-3); /* 12px */
```

---

## CSS Implementation

### Location

Touch target styles are enforced globally in `/src/styles/responsive.css`:

```css
/* Global touch target enforcement */
button,
[role="button"],
input,
select,
textarea,
.wp-block-button__link {
  min-height: 44px;
  min-width: 44px;
}
```

### Component-Level Examples

#### Buttons

```css
.wp-block-button__link {
  min-height: 44px;
  min-width: 44px;
  padding: 0 var(--spacing-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

#### Navigation Items

```css
.site-header__nav-link {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-4);
}
```

#### Mobile Menu Links

```css
.site-header__mobile-link {
  min-height: 44px;
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
}
```

#### Filter/Tag Chips

```css
.taxonomy-filter__button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-4);
  cursor: pointer;
}
```

#### Pagination

```css
.wp-block-query-pagination__link {
  min-width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

---

## Usage in React/TSX

### Correct

```tsx
{/* Button with adequate touch target */}
<button
  style={{
    minHeight: '44px',
    minWidth: '44px',
    padding: '0 var(--spacing-4)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  Click me
</button>

{/* Icon-only button */}
<button
  aria-label="Close menu"
  style={{
    minWidth: '44px',
    height: '44px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <X size={20} />
</button>
```

### Incorrect

```tsx
{/* TOO SMALL - fails WCAG */}
<button style={{ padding: '4px 8px', fontSize: '12px' }}>
  Tiny button
</button>

{/* NO min-height - may fail on mobile */}
<a href="/page" style={{ padding: '2px 4px' }}>
  Link text
</a>
```

---

## Checklist

Use this before every component review:

- [ ] All buttons have `min-height: 44px` and `min-width: 44px`
- [ ] All navigation links have `min-height: 44px`
- [ ] All form inputs have `min-height: 44px`
- [ ] Icon-only buttons have `min-width: 44px; height: 44px`
- [ ] Adjacent targets have minimum `var(--spacing-2)` gap
- [ ] Touch targets use `display: inline-flex` for proper alignment
- [ ] Mobile menu items have adequate padding for fat-finger tapping

---

## Related Guidelines

- [accessibility.md](../accessibility.md) — Full WCAG 2.1 AA checklist
- [buttons.md](./buttons.md) — Button tokens and styling
- [forms.md](./forms.md) — Form element tokens
- [navigation.md](./navigation.md) — Navigation tokens
- [responsive.md](./responsive.md) — Responsive breakpoints and mobile-first rules
- [spacing.md](./spacing.md) — Spacing scale for gaps between targets

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-13 | Initial creation — WCAG 2.1 AA touch target requirements |

---

**Maintainer:** LSX Design  
**Category:** Design Tokens  
**Status:** Active
