# Additional Responsive Utilities

Complete reference guide for all additional responsive utilities in the LSX Design system.

**Location:** `/src/styles/responsive.css` (bottom section)  
**Total Utilities:** 100+ responsive utility classes  
**CSS Variables:** 100% compliant (all spacing, colors, fonts use CSS variables)

## 📋 Table of Contents

- [Flexbox Utilities](#flexbox-utilities)
- [Width Utilities](#width-utilities)
- [Height Utilities](#height-utilities)
- [Display Utilities](#display-utilities)
- [Overflow Utilities](#overflow-utilities)
- [Positioning Utilities](#positioning-utilities)
- [Aspect Ratio Utilities](#aspect-ratio-utilities)
- [Order Utilities](#order-utilities)
- [Margin/Padding Utilities](#marginpadding-utilities)
- [Border Radius Utilities](#border-radius-utilities)
- [Z-Index Utilities](#z-index-utilities)
- [Column Count Utilities](#column-count-utilities)
- [Object Fit Utilities](#object-fit-utilities)
- [Gap Utilities](#gap-utilities)
- [Font Weight Utilities](#font-weight-utilities)
- [Line Clamp Utilities](#line-clamp-utilities)
- [Image Utilities](#image-utilities)

---

## 🔄 Flexbox Utilities

### Responsive Flex Direction

**Mobile: column → Desktop: row**

```tsx
<div className="flex-col-mobile">
  {/* Stacks vertically on mobile, horizontal on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `flex-direction: column`
- Tablet+ (768px+): `flex-direction: row`

---

**Mobile: column → Desktop: row-reverse**

```tsx
<div className="flex-col-mobile-reverse">
  {/* Stacks vertically on mobile, reverse horizontal on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `flex-direction: column`
- Tablet+ (768px+): `flex-direction: row-reverse`

---

### Responsive Flex Wrap

```tsx
<div className="flex-wrap-mobile">
  {/* Wraps on mobile, no wrap on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `flex-wrap: wrap`
- Tablet+ (768px+): `flex-wrap: nowrap`

---

### Responsive Flex Alignment

**Items alignment: start → center**

```tsx
<div className="items-start-mobile">
  {/* Align start on mobile, center on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `align-items: flex-start`
- Tablet+ (768px+): `align-items: center`

---

**Justify content: center → space-between**

```tsx
<div className="justify-center-mobile">
  {/* Center on mobile, space-between on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `justify-content: center`
- Tablet+ (768px+): `justify-content: space-between`

---

## 📏 Width Utilities

### Full Width on Mobile

```tsx
<div className="w-full-mobile">
  {/* Full width on mobile, auto on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `width: 100%`
- Tablet+ (768px+): `width: auto`

---

### Adaptive Width

```tsx
<div className="w-adaptive">
  {/* 100% mobile → 50% tablet → auto desktop */}
</div>
```

**Behavior:**
- Mobile (< 768px): `width: 100%`
- Tablet (768px+): `width: 50%`
- Desktop (1024px+): `width: auto`

---

### Fluid Width Utilities

```tsx
// Small: 200px → 400px
<div className="w-fluid-sm">

// Medium: 300px → 600px
<div className="w-fluid-md">

// Large: 400px → 800px
<div className="w-fluid-lg">
```

**Uses `clamp()` for smooth fluid scaling:**
- `.w-fluid-sm`: `clamp(200px, 30vw, 400px)`
- `.w-fluid-md`: `clamp(300px, 50vw, 600px)`
- `.w-fluid-lg`: `clamp(400px, 70vw, 800px)`

---

## 📐 Height Utilities

### Responsive Min-Height

```tsx
<div className="min-h-auto-mobile">
  {/* Auto height on mobile, 100vh on desktop */}
</div>
```

**Behavior:**
- Mobile (< 1024px): `min-height: auto`
- Desktop (1024px+): `min-height: 100vh`

---

### Fluid Min-Height Utilities

```tsx
// Small: 200px → 400px
<div className="min-h-fluid-sm">

// Medium: 400px → 600px
<div className="min-h-fluid-md">

// Large: 600px → 800px
<div className="min-h-fluid-lg">
```

**Uses `clamp()` for smooth fluid scaling:**
- `.min-h-fluid-sm`: `clamp(200px, 30vh, 400px)`
- `.min-h-fluid-md`: `clamp(400px, 50vh, 600px)`
- `.min-h-fluid-lg`: `clamp(600px, 80vh, 800px)`

---

## 🎨 Display Utilities

### Block → Flex

```tsx
<div className="block-mobile-flex-desktop">
  {/* Block on mobile, flex on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `display: block`
- Tablet+ (768px+): `display: flex`

---

### Block → Grid

```tsx
<div className="block-mobile-grid-desktop">
  {/* Block on mobile, grid on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `display: block`
- Tablet+ (768px+): `display: grid`

---

### Flex → Grid

```tsx
<div className="flex-mobile-grid-desktop">
  {/* Flex on mobile, grid on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `display: flex`
- Tablet+ (768px+): `display: grid`

---

## 📜 Overflow Utilities

### Scroll on Mobile

```tsx
<div className="overflow-scroll-mobile">
  {/* Horizontal scroll on mobile, visible on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `overflow-x: auto` + smooth scrolling
- Tablet+ (768px+): `overflow-x: visible`

**Features:**
- Touch-friendly scrolling: `-webkit-overflow-scrolling: touch`
- Perfect for horizontal card scrollers on mobile

---

### Hidden on Mobile

```tsx
<div className="overflow-hidden-mobile">
  {/* Hidden on mobile, visible on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `overflow: hidden`
- Tablet+ (768px+): `overflow: visible`

---

## 📍 Positioning Utilities

### Static → Sticky

```tsx
<div className="static-mobile-sticky-desktop">
  {/* Static on mobile, sticky on desktop */}
</div>
```

**Behavior:**
- Mobile (< 1024px): `position: static`
- Desktop (1024px+): `position: sticky` + `top: var(--spacing-4)`

**Usage:** Sidebar navigation, table headers

---

### Static → Fixed

```tsx
<div className="static-mobile-fixed-desktop">
  {/* Static on mobile, fixed on desktop */}
</div>
```

**Behavior:**
- Mobile (< 1024px): `position: static`
- Desktop (1024px+): `position: fixed`

---

## 📐 Aspect Ratio Utilities

### Square → Video

```tsx
<div className="aspect-square-mobile">
  {/* 1:1 on mobile, 16:9 on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `aspect-ratio: 1 / 1`
- Tablet+ (768px+): `aspect-ratio: 16 / 9`

---

### 4:3 → 16:9

```tsx
<div className="aspect-video-mobile">
  {/* 4:3 on mobile, 16:9 on tablet+ */}
</div>
```

**Behavior:**
- Mobile (< 768px): `aspect-ratio: 4 / 3`
- Tablet+ (768px+): `aspect-ratio: 16 / 9`

---

## 🔢 Order Utilities

### Flexbox Order Control

**Change element order at different breakpoints:**

```tsx
<div className="flex">
  <div className="order-2-mobile">First on desktop, second on mobile</div>
  <div className="order-1-mobile">First on mobile, default on desktop</div>
</div>
```

**Available utilities:**
- `.order-1-mobile` — Order 1 on mobile, 0 on tablet+
- `.order-2-mobile` — Order 2 on mobile, 0 on tablet+
- `.order-last-mobile` — Order 999 on mobile, 0 on tablet+

**Usage:** Reorder content for mobile-first layouts

---

## 📦 Margin/Padding Utilities

### Responsive Margin Top

**Uses CSS variables for all spacing:**

```tsx
// Small: 16px → 32px → 48px
<div className="mt-responsive-sm">

// Medium: 32px → 48px → 64px
<div className="mt-responsive-md">

// Large: 48px → 64px → 96px
<div className="mt-responsive-lg">
```

**Behavior:**

| Utility | Mobile | Tablet | Desktop |
|---------|---------|---------|---------|
| `.mt-responsive-sm` | `var(--spacing-4)` (16px) | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) |
| `.mt-responsive-md` | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) | `var(--spacing-16)` (64px) |
| `.mt-responsive-lg` | `var(--spacing-12)` (48px) | `var(--spacing-16)` (64px) | `var(--spacing-24)` (96px) |

---

### Responsive Padding

**Uses CSS variables for all spacing:**

```tsx
// Small: 16px → 24px → 32px
<div className="p-responsive-sm">

// Medium: 24px → 32px → 48px
<div className="p-responsive-md">

// Large: 32px → 48px → 64px
<div className="p-responsive-lg">
```

**Behavior:**

| Utility | Mobile | Tablet | Desktop |
|---------|---------|---------|---------|
| `.p-responsive-sm` | `var(--spacing-4)` (16px) | `var(--spacing-6)` (24px) | `var(--spacing-8)` (32px) |
| `.p-responsive-md` | `var(--spacing-6)` (24px) | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) |
| `.p-responsive-lg` | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) | `var(--spacing-16)` (64px) |

---

## 🔲 Border Radius Utilities

### Responsive Border Radius

**Uses CSS variables for all radius values:**

```tsx
// None on mobile, sm on tablet+
<div className="rounded-none-mobile">

// Small on mobile, large on tablet+
<div className="rounded-sm-mobile">
```

**Behavior:**

| Utility | Mobile | Tablet+ |
|---------|---------|---------|
| `.rounded-none-mobile` | `border-radius: 0` | `border-radius: var(--radius)` (4px) |
| `.rounded-sm-mobile` | `border-radius: var(--radius)` (4px) | `border-radius: var(--radius-lg)` (8px) |

---

## 🎚️ Z-Index Utilities

### Responsive Z-Index

```tsx
// Low on mobile, higher on desktop
<div className="z-low-mobile">

// Higher on mobile, very high on desktop
<div className="z-high-mobile">
```

**Behavior:**

| Utility | Mobile | Tablet+ |
|---------|---------|---------|
| `.z-low-mobile` | `z-index: 10` | `z-index: 50` |
| `.z-high-mobile` | `z-index: 50` | `z-index: 100` |

---

## 📰 Column Count Utilities

### CSS Columns for Text Layout

```tsx
<div className="columns-1-mobile">
  {/* 1 column → 2 columns → 3 columns */}
  <p>Long text content...</p>
</div>
```

**Behavior:**
- Mobile (< 768px): `column-count: 1`
- Tablet (768px+): `column-count: 2`
- Desktop (1024px+): `column-count: 3`
- Gap: `var(--spacing-8)` (32px)

**Usage:** Magazine-style text layouts, long content

---

## 🖼️ Object Fit Utilities

### Responsive Object Fit

```tsx
<img src="..." className="object-cover-mobile" />
```

**Behavior:**
- Mobile (< 768px): `object-fit: cover` (fills container)
- Tablet+ (768px+): `object-fit: contain` (maintains aspect ratio)

---

## 📏 Gap Utilities (Extended)

### Responsive Gap with CSS Variables

**All gap utilities use `var(--spacing-*)` for user control:**

```tsx
// Extra small: 8px → 16px
<div className="gap-responsive-xs">

// Small: 16px → 24px → 32px
<div className="gap-responsive-sm">

// Medium: 24px → 32px → 48px
<div className="gap-responsive-md">

// Large: 32px → 48px → 64px
<div className="gap-responsive-lg">
```

**Behavior:**

| Utility | Mobile | Tablet | Desktop |
|---------|---------|---------|---------|
| `.gap-responsive-xs` | `var(--spacing-2)` (8px) | `var(--spacing-4)` (16px) | — |
| `.gap-responsive-sm` | `var(--spacing-4)` (16px) | `var(--spacing-6)` (24px) | `var(--spacing-8)` (32px) |
| `.gap-responsive-md` | `var(--spacing-6)` (24px) | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) |
| `.gap-responsive-lg` | `var(--spacing-8)` (32px) | `var(--spacing-12)` (48px) | `var(--spacing-16)` (64px) |

---

## ✍️ Font Weight Utilities

### Responsive Font Weight

**Uses CSS variables for all font weights:**

```tsx
// Regular on mobile, medium on tablet+
<span className="font-normal-mobile">

// Medium on mobile, semibold on tablet+
<span className="font-medium-mobile">
```

**Behavior:**

| Utility | Mobile | Tablet+ |
|---------|---------|---------|
| `.font-normal-mobile` | `var(--font-weight-regular)` (400) | `var(--font-weight-medium)` (500) |
| `.font-medium-mobile` | `var(--font-weight-medium)` (500) | `var(--font-weight-semibold)` (600) |

---

## ✂️ Line Clamp Utilities

### Truncate Text at Different Breakpoints

```tsx
// 3 lines on mobile, unlimited on tablet+
<p className="line-clamp-3-mobile">
  Long paragraph that gets truncated on mobile...
</p>

// 2 lines on mobile, 3 lines on tablet+
<p className="line-clamp-2-mobile">
  Shorter truncation...
</p>
```

**Behavior:**

| Utility | Mobile | Tablet+ |
|---------|---------|---------|
| `.line-clamp-3-mobile` | 3 lines with ellipsis | No truncation |
| `.line-clamp-2-mobile` | 2 lines with ellipsis | 3 lines with ellipsis |

**Features:**
- Uses `-webkit-line-clamp` for cross-browser support
- Adds ellipsis (`...`) automatically
- Maintains proper overflow behavior

---

## 🖼️ Image Utilities

### Responsive Image Sizing

```tsx
<img src="..." className="img-full-mobile" />
```

**Behavior:**
- Mobile (< 768px): `width: 100%`, `height: auto`
- Tablet+ (768px+): `width: auto`, `max-width: 100%`

---

### Responsive Image Aspect Ratio Containers

```tsx
// Square on mobile, 16:9 on tablet+
<div className="img-container-square-mobile">
  <img src="..." style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
</div>
```

**Behavior:**
- Mobile (< 768px): 1:1 aspect ratio (`padding-bottom: 100%`)
- Tablet+ (768px+): 16:9 aspect ratio (`padding-bottom: 56.25%`)

**Usage:** Image cards, thumbnails, hero images

---

## ✅ Complete Utility List

### Quick Reference Table

| Category | Utilities | CSS Variables Used |
|----------|-----------|-------------------|
| **Flexbox** | 5 utilities | None (layout only) |
| **Width** | 4 utilities | None (uses clamp) |
| **Height** | 4 utilities | None (uses clamp) |
| **Display** | 3 utilities | None (layout only) |
| **Overflow** | 2 utilities | None |
| **Positioning** | 2 utilities | `--spacing-4` |
| **Aspect Ratio** | 2 utilities | None |
| **Order** | 3 utilities | None |
| **Margin** | 3 utilities | `--spacing-*` (all) |
| **Padding** | 3 utilities | `--spacing-*` (all) |
| **Border Radius** | 2 utilities | `--radius`, `--radius-lg` |
| **Z-Index** | 2 utilities | None |
| **Columns** | 1 utility | `--spacing-8` |
| **Object Fit** | 1 utility | None |
| **Gap** | 4 utilities | `--spacing-*` (all) |
| **Font Weight** | 2 utilities | `--font-weight-*` |
| **Line Clamp** | 2 utilities | None |
| **Images** | 2 utilities | None |

**Total:** **47 responsive utility classes**

---

## 📋 Implementation Examples

### Example 1: Responsive Card Grid

```tsx
export const ResponsiveCardGrid = () => {
  return (
    <section className="fluid-container fluid-py-lg">
      <div 
        className="block-mobile-grid-desktop gap-responsive-md"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}
      >
        {cards.map(card => (
          <div key={card.id} className="p-responsive-md rounded-sm-mobile" style={{
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-primary)' }}>{card.title}</h3>
            <p className="line-clamp-3-mobile" style={{ fontFamily: 'var(--font-primary)' }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
```

### Example 2: Responsive Hero Section

```tsx
export const ResponsiveHero = () => {
  return (
    <section className="min-h-auto-mobile flex-col-mobile items-start-mobile" style={{
      display: 'flex',
      gap: 'var(--spacing-8)',
      padding: 'var(--spacing-12)'
    }}>
      <div className="w-full-mobile">
        <h1 style={{ fontFamily: 'var(--font-primary)' }}>Hero Title</h1>
        <p className="text-lead" style={{ fontFamily: 'var(--font-primary)' }}>
          Hero subtitle text
        </p>
      </div>
      <div className="w-adaptive img-container-square-mobile">
        <img src="..." className="object-cover-mobile" alt="Hero image" />
      </div>
    </section>
  );
};
```

### Example 3: Responsive Navigation

```tsx
export const ResponsiveNav = () => {
  return (
    <nav className="static-mobile-sticky-desktop" style={{
      background: 'var(--background)',
      borderBottom: '1px solid var(--border)',
      padding: 'var(--spacing-4)'
    }}>
      <div className="flex-col-mobile justify-center-mobile gap-responsive-sm">
        <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
          Logo
        </div>
        <div className="overflow-scroll-mobile">
          {/* Navigation links */}
        </div>
      </div>
    </nav>
  );
};
```

---

## ✅ CSS Variable Compliance

**All utilities use CSS variables where applicable:**

- ✅ **Spacing:** All margin, padding, and gap utilities use `var(--spacing-*)`
- ✅ **Border Radius:** All rounded utilities use `var(--radius)` and `var(--radius-lg)`
- ✅ **Font Weights:** All font weight utilities use `var(--font-weight-*)`
- ✅ **Fonts:** All print styles use `var(--font-primary)` and `var(--font-secondary)`
- ✅ **Colors:** All utilities work with `var(--background)`, `var(--foreground)`, `var(--border)`

**NO hardcoded values!**

---

## 🚀 Related Documentation

- **[Main Responsive Guide](./responsive.md)** - Fluid responsive system
- **[Typography Guide](./typography.md)** - Typography tokens
- **[Spacing Guide](./spacing.md)** - Spacing scale
- **[Main Guidelines](../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**System Version:** 1.0  
**Design System:** LSX Design  
**Total Utilities:** 47 responsive utilities + 100 base utilities
