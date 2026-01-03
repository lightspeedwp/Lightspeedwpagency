# Border Radius Presets

**Design System:** LSX Design  
**Category:** Design Tokens  
**Last Updated:** December 24, 2024

---

## Overview

The LSX Design system uses a **consistent border radius scale** to create cohesive, modern interfaces. This document defines all border radius presets available in the system.

---

## Border Radius Variables

All border radius variables are defined in `/src/styles/theme.css`.

### Core Radius Variables

```css
/* Default radius scale */
--radius: 4px;       /* Base radius - small components */
--radius-sm: 6px;    /* Small radius - compact elements */
--radius-md: 8px;    /* Medium radius - standard buttons */
--radius-lg: 12px;   /* Large radius - inputs, prominent buttons */
--radius-xl: 16px;   /* Extra large radius - cards, containers */
```

### Special Radius Values

```css
/* No radius */
border-radius: 0;

/* Full circle/pill */
border-radius: 50%;      /* Circles (avatars) */
border-radius: 9999px;   /* Pills (tags, badges) */
```

---

## Radius Presets by Component Type

### 1. Cards & Containers

**Use:** Card containers, panels, modals, popovers, sections

```tsx
// React/TSX - Default card
style={{
  borderRadius: 'var(--radius-xl)',  // 16px
  border: '1px solid var(--border-soft)',
  overflow: 'hidden'
}}

// CSS
.card {
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-soft);
  overflow: hidden;
}
```

**Why:** Extra large radius (16px) creates modern, friendly appearance for primary containers.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "radius": "var(--radius-xl)"
    }
  }
}
```

---

### 2. Buttons

**Use:** All button types (primary, secondary, outline, ghost)

```tsx
// React/TSX - Primary button
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  padding: '12px 24px',
  fontWeight: 'var(--font-weight-bold)'
}}

// React/TSX - Small button
style={{
  borderRadius: 'var(--radius-md)',  // 8px
  padding: '8px 16px',
  fontSize: 'var(--text-small)'
}}
```

**Variants:**
- **Large buttons:** `var(--radius-lg)` (12px)
- **Standard buttons:** `var(--radius-lg)` (12px)
- **Small buttons:** `var(--radius-md)` (8px)
- **Icon-only buttons:** `var(--radius-md)` (8px) or `50%` (circle)

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "radius": "var(--radius-lg)"
    }
  }
}
```

---

### 3. Form Inputs

**Use:** Text inputs, textareas, select dropdowns, search fields

```tsx
// React/TSX - Input field
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border)',
  padding: '12px 16px',
  fontSize: 'var(--text-base)'
}}

// React/TSX - Textarea
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border)',
  padding: '12px 16px',
  minHeight: '120px'
}}

// React/TSX - Select dropdown
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border)',
  padding: '12px 16px 12px 12px'
}}
```

**Why:** Large radius (12px) matches button radius for visual consistency in forms.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "radius": "var(--radius-lg)"
    }
  }
}
```

---

### 4. Tags & Badges

**Use:** Category tags, status badges, small labels

```tsx
// React/TSX - Pill-shaped tag (PREFERRED)
style={{
  borderRadius: '9999px',  // Full pill
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  backgroundColor: 'var(--muted)',
  border: '1px solid var(--border-soft)'
}}

// React/TSX - Rounded tag (alternative)
style={{
  borderRadius: 'var(--radius)',  // 4px
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  backgroundColor: 'var(--muted)',
  border: '1px solid var(--border-soft)'
}}
```

**Variants:**
- **Pill tags:** `9999px` (modern, friendly)
- **Rounded tags:** `var(--radius)` (4px) (traditional)

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "radius": "9999px"
    }
  }
}
```

---

### 5. Avatars & Profile Images

**Use:** User avatars, author photos, profile pictures

```tsx
// React/TSX - Circle avatar (STANDARD)
style={{
  borderRadius: '50%',  // Perfect circle
  width: '40px',
  height: '40px',
  border: '2px solid var(--border-soft)',
  backgroundSize: 'cover'
}}

// React/TSX - Rounded square avatar (alternative)
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  width: '40px',
  height: '40px',
  border: '2px solid var(--border-soft)',
  backgroundSize: 'cover'
}}
```

**Variants:**
- **Circle:** `50%` (standard for avatars)
- **Rounded square:** `var(--radius-lg)` (alternative style)

**Sizes:**
- Small: 24px × 24px
- Medium: 40px × 40px
- Large: 64px × 64px
- Extra Large: 120px × 120px (profile pages)

---

### 6. Images in Cards

**Use:** Featured images, thumbnails, gallery images

```tsx
// React/TSX - Top-only radius (image in card)
style={{
  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',  // 16px top corners only
  width: '100%',
  height: '200px',
  objectFit: 'cover'
}}

// React/TSX - All corners (standalone image)
style={{
  borderRadius: 'var(--radius-xl)',  // 16px all corners
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  border: '1px solid var(--border-soft)'
}}
```

**Why:** Top-only radius when image is inside card container, full radius for standalone images.

**WordPress Blocks:**
```json
{
  "styles": {
    "border": {
      "radius": {
        "topLeft": "var(--radius-xl)",
        "topRight": "var(--radius-xl)",
        "bottomLeft": "0",
        "bottomRight": "0"
      }
    }
  }
}
```

---

### 7. Dropdown Menus & Popovers

**Use:** Dropdown menus, context menus, tooltips, popovers

```tsx
// React/TSX - Dropdown menu
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--popover)',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
  overflow: 'hidden'
}}

// React/TSX - Tooltip
style={{
  borderRadius: 'var(--radius-md)',  // 8px
  backgroundColor: 'var(--popover)',
  padding: '8px 12px',
  fontSize: 'var(--text-small)'
}}
```

**Variants:**
- **Large dropdown:** `var(--radius-lg)` (12px)
- **Small tooltip:** `var(--radius-md)` (8px)

---

### 8. Search Bars

**Use:** Search input fields, search forms

```tsx
// React/TSX - Search bar (pill-shaped)
style={{
  borderRadius: '9999px',  // Full pill
  border: '1px solid var(--border)',
  padding: '12px 48px 12px 20px',
  backgroundColor: 'var(--input-background)',
  fontSize: 'var(--text-base)'
}}

// React/TSX - Search bar (rounded)
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border)',
  padding: '12px 48px 12px 16px',
  backgroundColor: 'var(--input-background)'
}}
```

**Variants:**
- **Pill-shaped:** `9999px` (modern, friendly)
- **Rounded:** `var(--radius-lg)` (12px) (traditional)

---

### 9. Pagination Controls

**Use:** Pagination buttons, page number indicators

```tsx
// React/TSX - Page number button
style={{
  borderRadius: 'var(--radius)',  // 4px
  padding: '8px 12px',
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)',
  minWidth: '40px'
}}

// React/TSX - Arrow button (circle)
style={{
  borderRadius: '50%',  // Circle
  width: '40px',
  height: '40px',
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)'
}}
```

**Variants:**
- **Page numbers:** `var(--radius)` (4px)
- **Arrow buttons:** `50%` (circle) or `var(--radius-md)` (8px)

---

### 10. Notification Banners & Alerts

**Use:** Alert messages, notification banners, toast messages

```tsx
// React/TSX - Banner (top/bottom of page)
style={{
  borderRadius: 'var(--radius-lg)',  // 12px
  border: '1px solid var(--border-soft)',
  padding: '16px 24px',
  backgroundColor: 'var(--card)'
}}

// React/TSX - Toast (floating notification)
style={{
  borderRadius: 'var(--radius-xl)',  // 16px
  border: '1px solid var(--border-soft)',
  padding: '16px 24px',
  backgroundColor: 'var(--card)',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
}}
```

---

### 11. Icon Buttons

**Use:** Icon-only buttons, toolbar buttons, action buttons

```tsx
// React/TSX - Circle icon button (PREFERRED)
style={{
  borderRadius: '50%',  // Circle
  width: '40px',
  height: '40px',
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}

// React/TSX - Rounded icon button (alternative)
style={{
  borderRadius: 'var(--radius-md)',  // 8px
  width: '40px',
  height: '40px',
  border: '1px solid var(--border-soft)',
  backgroundColor: 'var(--background)'
}}
```

**Variants:**
- **Circle:** `50%` (modern, friendly)
- **Rounded square:** `var(--radius-md)` (8px)

---

### 12. Tabs

**Use:** Tab navigation, segmented controls

```tsx
// React/TSX - Active tab (top border radius only)
style={{
  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',  // 12px top only
  padding: '12px 24px',
  backgroundColor: 'var(--background)',
  borderBottom: '2px solid var(--primary)'
}}

// React/TSX - Inactive tab
style={{
  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',  // 12px top only
  padding: '12px 24px',
  backgroundColor: 'transparent',
  borderBottom: '2px solid transparent'
}}
```

---

## Radius Scale Reference

Visual representation of the radius scale:

```
┌─────────────────────────────────────────────────┐
│ --radius: 4px        [████]                     │
│ --radius-sm: 6px     [█████]                    │
│ --radius-md: 8px     [██████]                   │
│ --radius-lg: 12px    [█████████]                │
│ --radius-xl: 16px    [████████████]             │
│ 9999px (pill)        [●●●●●●●●●●●●●]            │
│ 50% (circle)         [●]                        │
└─────────────────────────────────────────────────┘
```

---

## Usage Decision Tree

```
Need border radius?
│
├─ Is it a card/container/modal?
│  └─ YES → Use var(--radius-xl) [16px]
│
├─ Is it a button/input?
│  └─ YES → Use var(--radius-lg) [12px]
│
├─ Is it a tag/badge?
│  └─ YES → Use 9999px [Pill shape]
│
├─ Is it an avatar?
│  └─ YES → Use 50% [Circle]
│
├─ Is it an icon button?
│  └─ YES → Use 50% [Circle] or var(--radius-md) [8px]
│
├─ Is it a dropdown/popover?
│  └─ YES → Use var(--radius-lg) [12px]
│
└─ Is it a small component?
   └─ YES → Use var(--radius) [4px] or var(--radius-md) [8px]
```

---

## Common Combinations

Patterns that work well together:

```tsx
// Large card with image
<div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
  <img style={{ borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0' }} />
  <div style={{ padding: '24px' }}>Content</div>
</div>

// Button group
<div style={{ display: 'flex', gap: '8px' }}>
  <button style={{ borderRadius: 'var(--radius-lg)' }}>Primary</button>
  <button style={{ borderRadius: 'var(--radius-lg)' }}>Secondary</button>
</div>

// Search with button
<div style={{ display: 'flex' }}>
  <input style={{ borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)' }} />
  <button style={{ borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>Search</button>
</div>

// Avatar with name
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <div style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
  <span>John Doe</span>
</div>
```

---

## Responsive Considerations

Border radius should remain consistent across breakpoints:

```tsx
// ✅ CORRECT - Same radius at all sizes
<div style={{
  borderRadius: 'var(--radius-xl)',  // Always 16px
  padding: 'clamp(16px, 4vw, 32px)'  // Padding scales, radius doesn't
}}>

// ❌ AVOID - Don't change radius by breakpoint
<div style={{
  borderRadius: window.innerWidth < 768 ? 'var(--radius-md)' : 'var(--radius-xl)'
}}>
```

**Exception:** Very small screens may benefit from slightly reduced radius on large containers, but this should be rare.

---

## Accessibility Considerations

1. **Touch Targets:**
   - Border radius doesn't affect touch target size
   - Ensure minimum 44×44px touch areas regardless of radius

2. **Visual Clarity:**
   - Border radius should not obscure content
   - Use `overflow: hidden` on containers when needed

3. **Focus Indicators:**
   - Focus rings should match or slightly exceed border radius
   - Use `outline-offset: 2px` for clear separation

---

## WordPress Implementation

### theme.json

```json
{
  "settings": {
    "border": {
      "radius": true
    },
    "custom": {
      "radius": {
        "default": "4px",
        "sm": "6px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "pill": "9999px",
        "circle": "50%"
      }
    }
  },
  "styles": {
    "border": {
      "radius": "var(--radius-xl)"
    },
    "blocks": {
      "core/button": {
        "border": {
          "radius": "var(--radius-lg)"
        }
      },
      "core/group": {
        "border": {
          "radius": "var(--radius-xl)"
        }
      }
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
        border-radius: var(--radius-xl);
      }
    '
  )
);

// Pill button
register_block_style(
  'core/button',
  array(
    'name'  => 'pill',
    'label' => 'Pill',
    'inline_style' => '
      .wp-block-button.is-style-pill .wp-block-button__link {
        border-radius: 9999px;
      }
    '
  )
);
```

---

## Common Mistakes to Avoid

### ❌ NEVER Do This

```tsx
// Hard-coded radius
borderRadius: '16px'  // WRONG - use CSS variable

// Inconsistent radius on related elements
<button style={{ borderRadius: '12px' }}>Primary</button>
<button style={{ borderRadius: '8px' }}>Secondary</button>  // WRONG - should match

// Using different radius for image and container
<div style={{ borderRadius: '16px' }}>
  <img style={{ borderRadius: '12px' }} />  // WRONG - creates gap
</div>
```

### ✅ ALWAYS Do This

```tsx
// Use CSS variables
borderRadius: 'var(--radius-xl)'  // CORRECT

// Consistent radius on related elements
<button style={{ borderRadius: 'var(--radius-lg)' }}>Primary</button>
<button style={{ borderRadius: 'var(--radius-lg)' }}>Secondary</button>  // CORRECT

// Matching radius for image and container
<div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
  <img />  // CORRECT - container handles radius
</div>
```

---

## Testing Checklist

Before shipping, verify:

- [ ] All cards use `var(--radius-xl)`
- [ ] All buttons use `var(--radius-lg)`
- [ ] All inputs use `var(--radius-lg)`
- [ ] All tags use `9999px` or `var(--radius)`
- [ ] All avatars use `50%`
- [ ] No hard-coded radius values exist
- [ ] Related elements use consistent radius
- [ ] Images in cards use proper corner radius
- [ ] `overflow: hidden` is used where needed

---

## Quick Reference Table

| Component Type | Radius Variable | Value | Notes |
|----------------|-----------------|-------|-------|
| Cards, Containers | `var(--radius-xl)` | 16px | Large, modern |
| Buttons | `var(--radius-lg)` | 12px | Standard size |
| Inputs, Forms | `var(--radius-lg)` | 12px | Matches buttons |
| Tags (pill) | `9999px` | Full pill | Modern, friendly |
| Tags (rounded) | `var(--radius)` | 4px | Traditional |
| Avatars | `50%` | Circle | Standard |
| Icon buttons | `50%` or `var(--radius-md)` | Circle or 8px | Context-dependent |
| Dropdowns | `var(--radius-lg)` | 12px | Standard |
| Tooltips | `var(--radius-md)` | 8px | Compact |
| Pagination | `var(--radius)` | 4px | Small controls |
| Search bars | `9999px` or `var(--radius-lg)` | Pill or 12px | Style preference |

---

**Remember:** Border radius should be consistent within component types and create a cohesive visual rhythm throughout the interface.
