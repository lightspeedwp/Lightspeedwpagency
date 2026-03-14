# Button Sizes — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Overview

This document defines the **3 standard button sizes** for the LSX Design system. All button implementations must use these exact specifications to ensure consistency, accessibility, and proper visual hierarchy.

## 🎯 Three Standard Button Sizes

### Size: Small (`sm`)
**Usage:** Tertiary actions, compact spaces, filter buttons, tags  
**Minimum Touch Target:** 44×44px (WCAG AAA compliant)

```css
/* CSS Variables */
.btn--sm {
  font-size: var(--text-sm);        /* 14px (0.875rem) */
  font-weight: var(--font-weight-medium);
  padding: 10px 20px;
  border-radius: var(--radius);
  line-height: var(--line-height-normal);
}
```

### Size: Medium (`md`) — DEFAULT
**Usage:** Primary and secondary CTAs, form submissions, standard interactions  
**Minimum Touch Target:** 48×48px (WCAG AAA compliant)

```css
/* CSS Variables */
.btn--md {
  font-size: var(--text-base);      /* 16px (1rem) */
  font-weight: var(--font-weight-medium);
  padding: 12px 24px;
  border-radius: var(--radius);
  line-height: var(--line-height-normal);
}
```

### Size: Large (`lg`)
**Usage:** Hero CTAs, prominent landing page actions, major conversions  
**Minimum Touch Target:** 56×56px (exceeds WCAG AAA)

```css
/* CSS Variables */
.btn--lg {
  font-size: var(--text-lg);        /* 18px (1.125rem) */
  font-weight: var(--font-weight-medium);
  padding: 16px 32px;
  border-radius: var(--radius-lg);
  line-height: var(--line-height-normal);
}
```

## 🎨 Button Variants

All three sizes work with these standard variants:

1. **Primary** — `.btn--primary`
   - Background: `var(--primary)`
   - Text: `var(--primary-foreground)`
   - Use: Main CTAs, form submissions

2. **Secondary** — `.btn--secondary`
   - Background: `var(--secondary)`
   - Text: `var(--secondary-foreground)`
   - Use: Secondary actions, alternative paths

3. **Outline** — `.btn--outline`
   - Background: `transparent`
   - Border: `1px solid var(--border)`
   - Text: `var(--foreground)`
   - Use: Secondary CTAs, cancel actions

4. **Destructive** — `.btn--destructive`
   - Background: `var(--destructive)`
   - Text: `var(--destructive-foreground)`
   - Use: Delete, remove, dangerous actions

## 💡 Usage Guidelines

**Small (`sm`):**
- ✅ Filter buttons in archive pages
- ✅ Tag buttons
- ❌ Primary CTAs (use medium or large)

**Medium (`md`) — DEFAULT:**
- ✅ Standard form submissions
- ✅ Primary CTAs in content
- ✅ Most interactive buttons

**Large (`lg`):**
- ✅ Hero section CTAs
- ✅ Landing page primary actions

## ♿ Accessibility Requirements

All button sizes meet WCAG 2.1 Level AAA requirements:
1. **Minimum Touch Target:** 48×48px (all sizes meet or exceed)
2. **Color Contrast:** 4.5:1 minimum (enforced by CSS variables)
3. **Focus Indicators:** 2px outline ring (all variants)

## 🚫 Common Mistakes

### ❌ DON'T Do This:

```tsx
// Custom padding that breaks the size system
<button style={{ padding: '15px 30px' }}>Bad</button>

// Hard-coded font sizes or Tailwind classes
<button className="text-[20px] bg-blue-500">Bad</button>
```

### ✅ DO This Instead:

```tsx
// Use standard CSS/BEM classes
<button className="btn btn--primary btn--md">Good</button>
```