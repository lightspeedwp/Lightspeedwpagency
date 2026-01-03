# Shadow Presets

**Design System:** LSX Design  
**Category:** Design Tokens  
**Last Updated:** December 24, 2024

---

## Overview

The LSX Design system uses **soft, subtle shadows** to create elevation and depth without harshness. Shadows should suggest layering, not distract from content. This document defines all shadow presets available in the system.

---

## Shadow Philosophy

**Modern shadow approach:**
- Use low opacity (0.05-0.15) for soft, natural feel
- Increase blur and spread for modern, diffused look
- Avoid hard edges and dark shadows
- Use colored shadows for interactive elements (buttons)
- Shadows should reinforce hierarchy, not create visual noise

---

## Shadow Variables

Shadows are NOT defined as CSS variables (except legacy `--elevation-sm`). Instead, use these standardized values directly in your components.

### Why No CSS Variables for Shadows?

Shadows need to be context-specific and often change on interaction (hover, focus). Defining them inline gives developers precise control over elevation hierarchy.

---

## Shadow Presets by Elevation Level

### Level 0: No Shadow (Flat)

**Use:** Background elements, base layer, non-interactive text

```tsx
// React/TSX
style={{
  boxShadow: 'none'
}}
```

**When to use:**
- Page backgrounds
- Text content
- Inline elements
- Elements that shouldn't appear elevated

---

### Level 1: Minimal Shadow (Subtle Elevation)

**Use:** Headers, navigation, subtle separation

```tsx
// React/TSX
style={{
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
}}

// CSS
.header {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

**Elevation:** 1-3px  
**Opacity:** 5%  
**Use for:**
- Site header (sticky navigation)
- Footer separation
- Subtle section dividers

**WordPress Blocks:**
```json
{
  "styles": {
    "shadow": "0 1px 3px rgba(0, 0, 0, 0.05)"
  }
}
```

---

### Level 2: Default Shadow (Cards at Rest)

**Use:** Cards, containers, panels at default state

```tsx
// React/TSX
style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
}}

// CSS
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```

**Elevation:** 4-6px  
**Opacity:** 5%  
**Use for:**
- Card containers (default state)
- Panels
- Simple modals
- Dropdown menus (closed)

**WordPress Blocks:**
```json
{
  "styles": {
    "shadow": "0 4px 6px rgba(0, 0, 0, 0.05)"
  }
}
```

---

### Level 3: Medium Shadow (Interactive Hover)

**Use:** Cards on hover, elevated panels, active dropdowns

```tsx
// React/TSX - Default state
style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}}

// React/TSX - Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
  e.currentTarget.style.transform = 'translateY(-12px)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
  e.currentTarget.style.transform = 'translateY(0)';
}}
```

**Elevation:** 20-40px  
**Opacity:** 12%  
**Use for:**
- Cards on hover (dramatic elevation)
- Dropdowns (open state)
- Popovers
- Tooltips
- Context menus

**CSS:**
```css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-12px);
}
```

---

### Level 4: Strong Shadow (Modals, Dialogs)

**Use:** Modals, dialogs, overlays, floating UI

```tsx
// React/TSX
style={{
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
}}

// CSS
.modal {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
```

**Elevation:** 10-30px  
**Opacity:** 15%  
**Use for:**
- Modal dialogs
- Large dropdowns
- Floating panels
- Toast notifications
- High-priority overlays

**WordPress Blocks:**
```json
{
  "styles": {
    "shadow": "0 10px 30px rgba(0, 0, 0, 0.15)"
  }
}
```

---

### Level 5: Colored Shadow (Interactive Buttons)

**Use:** Primary buttons, CTA buttons, interactive elements with brand color

```tsx
// React/TSX - Primary button
style={{
  boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)',  // Primary color shadow
  backgroundColor: 'var(--primary)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}}

// Hover state - Stronger colored shadow
onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 106, 255, 0.4)';
  e.currentTarget.style.transform = 'translateY(-2px)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 106, 255, 0.3)';
  e.currentTarget.style.transform = 'translateY(0)';
}}
```

**Elevation:** 4-20px  
**Opacity:** 30-40%  
**Color:** Matches button background  
**Use for:**
- Primary buttons (uses primary color)
- Accent buttons (uses accent color)
- CTA sections with gradient backgrounds
- Interactive badges

**Color variations:**
```tsx
// Primary button shadow
boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)'   // var(--primary)

// Secondary button shadow
boxShadow: '0 4px 12px rgba(123, 231, 255, 0.3)'  // var(--secondary)

// Destructive button shadow
boxShadow: '0 4px 12px rgba(204, 0, 0, 0.3)'      // var(--destructive)
```

---

### Level 6: Legacy Shadow (Avoid for New Components)

**DO NOT USE FOR NEW COMPONENTS**

```css
/* Legacy variable in theme.css */
--elevation-sm: 4px 4px 0px 0px rgba(9, 9, 9, 1);
```

**Why avoid:**
- Hard-edged shadow (not modern)
- 100% opacity (too harsh)
- No blur (dated appearance)
- Doesn't match modern design patterns

**Use instead:**
```tsx
// Modern equivalent
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'  // Soft and modern
```

---

## Shadow Presets by Component Type

### 1. Cards

```tsx
// Default state
style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-xl)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}}

// Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
  e.currentTarget.style.transform = 'translateY(-12px)';
  e.currentTarget.style.borderColor = 'var(--primary)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.borderColor = 'var(--border-soft)';
}}
```

**Pattern:** Subtle default → Dramatic hover elevation

---

### 2. Buttons

#### Primary Button (with colored shadow)

```tsx
style={{
  boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: 'none',
  borderRadius: 'var(--radius-lg)',
  padding: '12px 24px',
  fontWeight: 'var(--font-weight-bold)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}}

onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 106, 255, 0.4)';
  e.currentTarget.style.transform = 'translateY(-2px)';
}}
```

#### Secondary/Outline Button (subtle shadow)

```tsx
style={{
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  backgroundColor: 'transparent',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '12px 24px',
  transition: 'all 0.2s ease'
}}

onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.08)';
}}
```

---

### 3. Navigation Header

```tsx
// Sticky header
style={{
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  borderBottom: '1px solid var(--border-soft)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(12px)'
}}
```

**Pattern:** Minimal shadow for subtle separation

---

### 4. Dropdown Menus

```tsx
// Dropdown container
style={{
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  backgroundColor: 'var(--popover)',
  overflow: 'hidden'
}}
```

**Pattern:** Strong shadow for clear hierarchy over page content

---

### 5. Modals & Dialogs

```tsx
// Modal container
style={{
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-xl)',
  backgroundColor: 'var(--background)',
  maxWidth: '600px',
  padding: '32px'
}}

// Modal backdrop
style={{
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(4px)'
}}
```

**Pattern:** Strong shadow + backdrop for focus

---

### 6. Toast Notifications

```tsx
// Toast container
style={{
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-xl)',
  backgroundColor: 'var(--card)',
  padding: '16px 24px'
}}
```

**Pattern:** Strong shadow for floating appearance

---

### 7. Images (Optional Enhancement)

```tsx
// Featured image with subtle depth
style={{
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  borderRadius: 'var(--radius-xl)',
  overflow: 'hidden'
}}
```

**Note:** Only use on standalone images, not images within cards

---

### 8. Form Inputs (Focus State)

```tsx
// Default state - no shadow
style={{
  border: '1px solid var(--border)',
  boxShadow: 'none'
}}

// Focus state - subtle shadow + ring
onFocus={(e) => {
  e.currentTarget.style.borderColor = 'var(--ring)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 106, 255, 0.2)';
}}

onBlur={(e) => {
  e.currentTarget.style.borderColor = 'var(--border)';
  e.currentTarget.style.boxShadow = 'none';
}}
```

**Pattern:** No shadow by default, colored ring shadow on focus

---

### 9. Pagination Controls

```tsx
// Page button
style={{
  boxShadow: 'none',  // No shadow by default
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)'
}}

// Active page
style={{
  boxShadow: '0 2px 6px rgba(30, 106, 255, 0.3)',
  border: '1px solid var(--primary)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}
```

**Pattern:** No shadow by default, colored shadow on active

---

### 10. Glassmorphism Cards (Modern)

```tsx
style={{
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(16px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: 'var(--radius-xl)'
}}
```

**Pattern:** Soft shadow + backdrop blur for frosted glass effect

---

## Shadow + Transform Combinations

Shadows work best when combined with transforms:

### Hover Lift Pattern

```tsx
// Default state
style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  transform: 'translateY(0)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}}

// Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
  e.currentTarget.style.transform = 'translateY(-12px)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
  e.currentTarget.style.transform = 'translateY(0)';
}}
```

**Pattern:** Increase shadow AND lift element for dramatic effect

### Button Press Pattern

```tsx
// Default
style={{
  boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)',
  transform: 'translateY(0)'
}}

// Hover
onMouseEnter={(e) => {
  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 106, 255, 0.4)';
  e.currentTarget.style.transform = 'translateY(-2px)';
}}

// Active (click)
onMouseDown={(e) => {
  e.currentTarget.style.boxShadow = '0 2px 6px rgba(30, 106, 255, 0.3)';
  e.currentTarget.style.transform = 'translateY(0)';
}}

onMouseUp={(e) => {
  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 106, 255, 0.4)';
  e.currentTarget.style.transform = 'translateY(-2px)';
}}
```

**Pattern:** Lift on hover, press down on click

---

## Shadow Layering (Multiple Elements)

When stacking elements, use different shadow levels:

```
Page Background (Level 0: no shadow)
  └─ Card Container (Level 2: 0 4px 6px rgba(0,0,0,0.05))
      └─ Dropdown inside card (Level 4: 0 10px 30px rgba(0,0,0,0.15))
          └─ Modal over everything (Level 4: 0 10px 30px rgba(0,0,0,0.15) + backdrop)
```

**Rule:** Each layer should have progressively stronger shadow

---

## Responsive Considerations

Shadows should remain consistent across breakpoints:

```tsx
// ✅ CORRECT - Same shadow at all sizes
<div style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',  // Consistent
  padding: 'clamp(16px, 4vw, 32px)'  // Padding scales, shadow doesn't
}}>
```

**Exception:** Very small screens may benefit from reduced shadow intensity, but this is rare.

---

## Dark Mode Considerations

Shadows in dark mode should be more subtle:

```tsx
// Light mode
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'

// Dark mode (if needed)
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'  // Higher opacity for visibility
```

**Note:** The provided shadow values work well in both light and dark modes. Only adjust if shadows are invisible in dark mode.

---

## Accessibility Considerations

1. **Shadows are decorative:**
   - Never rely solely on shadows to convey information
   - Always provide other visual cues (borders, color changes)

2. **Focus indicators:**
   - Use colored box-shadow for focus rings
   - Must be perceivable (3:1 contrast minimum)

3. **Reduced motion:**
   - Shadow changes are fine for reduced motion
   - Avoid animating shadows if transforms are also animating

---

## WordPress Implementation

### theme.json

```json
{
  "settings": {
    "shadow": {
      "defaultPresets": false,
      "presets": [
        {
          "name": "Minimal",
          "slug": "minimal",
          "shadow": "0 1px 3px rgba(0, 0, 0, 0.05)"
        },
        {
          "name": "Default",
          "slug": "default",
          "shadow": "0 4px 6px rgba(0, 0, 0, 0.05)"
        },
        {
          "name": "Medium",
          "slug": "medium",
          "shadow": "0 20px 40px rgba(0, 0, 0, 0.12)"
        },
        {
          "name": "Strong",
          "slug": "strong",
          "shadow": "0 10px 30px rgba(0, 0, 0, 0.15)"
        },
        {
          "name": "Primary Button",
          "slug": "primary-button",
          "shadow": "0 4px 12px rgba(30, 106, 255, 0.3)"
        }
      ]
    }
  }
}
```

### Block Styles

```php
// Card with hover shadow
register_block_style(
  'core/group',
  array(
    'name'  => 'card-hover',
    'label' => 'Card (Hover Effect)',
    'inline_style' => '
      .wp-block-group.is-style-card-hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .wp-block-group.is-style-card-hover:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        transform: translateY(-12px);
      }
    '
  )
);
```

---

## Common Mistakes to Avoid

### ❌ NEVER Do This

```tsx
// Hard, dark shadow (dated)
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'  // WRONG - too dark

// Using legacy elevation variable
boxShadow: 'var(--elevation-sm)'  // WRONG - not modern

// Same shadow for all components
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'  // WRONG - cards and modals need different levels

// Colored shadow on non-interactive elements
boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)'  // WRONG on static content
```

### ✅ ALWAYS Do This

```tsx
// Soft, subtle shadow
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'  // CORRECT

// Appropriate shadow for context
// Cards:
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
// Modals:
boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'

// Colored shadow ONLY on interactive buttons
<button style={{ boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)' }}>
```

---

## Testing Checklist

Before shipping, verify:

- [ ] Cards use `0 4px 6px rgba(0, 0, 0, 0.05)` at rest
- [ ] Cards use `0 20px 40px rgba(0, 0, 0, 0.12)` on hover
- [ ] Primary buttons use colored shadow matching background
- [ ] Headers use minimal shadow `0 1px 3px rgba(0, 0, 0, 0.05)`
- [ ] Modals use strong shadow `0 10px 30px rgba(0, 0, 0, 0.15)`
- [ ] No legacy `var(--elevation-sm)` usage
- [ ] Shadows are subtle (5-15% opacity)
- [ ] Shadow transitions are smooth (0.3-0.4s)
- [ ] Shadows work in both light and dark modes

---

## Quick Reference Table

| Component | Default Shadow | Hover Shadow | Notes |
|-----------|---------------|--------------|-------|
| **Cards** | `0 4px 6px rgba(0,0,0,0.05)` | `0 20px 40px rgba(0,0,0,0.12)` | Dramatic lift |
| **Primary Button** | `0 4px 12px rgba(30,106,255,0.3)` | `0 8px 20px rgba(30,106,255,0.4)` | Colored shadow |
| **Secondary Button** | `0 2px 4px rgba(0,0,0,0.05)` | `0 4px 8px rgba(0,0,0,0.08)` | Subtle |
| **Header** | `0 1px 3px rgba(0,0,0,0.05)` | N/A | Minimal |
| **Dropdown** | `0 10px 40px rgba(0,0,0,0.15)` | N/A | Strong |
| **Modal** | `0 10px 30px rgba(0,0,0,0.15)` | N/A | Strong + backdrop |
| **Toast** | `0 10px 40px rgba(0,0,0,0.15)` | N/A | Floating |
| **Form Input** | `none` | `0 0 0 3px rgba(30,106,255,0.2)` | Focus ring only |

---

**Remember:** Shadows should suggest elevation, not create visual weight. Use the softest shadow possible for the context while maintaining clear hierarchy.
