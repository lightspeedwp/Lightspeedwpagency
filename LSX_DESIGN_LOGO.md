# LSX Design Logo — Assets & Usage

This document describes the LSX Design logo system and how to use the logo assets.

---

## 🎨 Logo Overview

The LSX Design logo consists of:
1. **LSX Icon Mark** — Geometric representation of the letters L, S, and X
2. **"Design" Text** — Clean typography using Lexend font
3. **Gradient** — Dynamic gradient from primary to accent colors

---

## 📁 Logo Assets

### React Components

**Location:** `/src/app/components/common/Logo.tsx`

**Usage:**
```tsx
import { Logo } from './components/common/Logo';

// Full logo with "LSX Design" text
<Logo width={200} height={48} variant="full" />

// Compact logo with just "LSX" mark
<Logo width={60} height={48} variant="compact" />
```

**Props:**
- `width` — Logo width in pixels (default: 200)
- `height` — Logo height in pixels (default: 48)
- `variant` — `'full'` or `'compact'` (default: 'full')
- `className` — Optional CSS class

**Features:**
- ✅ Uses CSS variables for theme adaptation
- ✅ Automatically switches colors for light/dark mode
- ✅ Accessible with ARIA labels
- ✅ Responsive sizing

---

### Standalone SVG Files

**Location:** `/public/`

#### 1. Full Logo (Light Mode)
**File:** `lsx-design-logo.svg`  
**Size:** 200×48px  
**Colors:** Primary blue (#1E6AFF) to Accent cyan (#7BE7FF) gradient + Dark text  
**Usage:** Light backgrounds

#### 2. Full Logo (Dark Mode)
**File:** `lsx-design-logo-dark.svg`  
**Size:** 200×48px  
**Colors:** Accent cyan to Primary blue gradient + White text  
**Usage:** Dark backgrounds

#### 3. Compact Logo (Icon Only)
**File:** `lsx-design-logo-compact.svg`  
**Size:** 60×48px  
**Colors:** Primary to Accent gradient  
**Usage:** Favicons, app icons, small spaces

---

### TypeScript/JavaScript Export

**Location:** `/src/imports/logo-lsx-design.ts`

**Exports:**
```typescript
import { 
  LSXDesignLogo,         // Full logo with CSS variables
  LSXDesignLogoCompact,  // Compact icon only
  LSXDesignLogoLight,    // Full logo for light backgrounds
  LSXDesignLogoDark      // Full logo for dark backgrounds
} from './imports/logo-lsx-design';
```

---

## 🎨 Design System Integration

### Colors

The logo uses design system colors from `theme.css`:

**Light Mode:**
- Gradient: `--primary` (#1E6AFF) → `--accent` (#7BE7FF)
- Text: `--foreground` (#090909)

**Dark Mode:**
- Gradient: `--accent` (#7BE7FF) → `--primary` (#1E6AFF) (reversed)
- Text: `--foreground` (#FFFFFF)

### Typography

**Font:** Lexend (primary design system font)  
**Weight:** 500 (medium)  
**Size:** 24px  
**Letter Spacing:** -0.02

---

## 📏 Logo Specifications

### Full Logo

**Dimensions:** 200×48px (aspect ratio 25:6)  
**Components:**
- LSX Mark: 60×24px (L, S, X geometric shapes)
- Gap: 8px
- "Design" Text: 132×24px

**Minimum Size:** 150px wide (maintain legibility)

### Compact Logo

**Dimensions:** 60×48px  
**Components:**
- LSX Mark only: 60×24px

**Minimum Size:** 40px wide

---

## 🎯 Usage Guidelines

### ✅ DO

- Use the React component for dynamic theme switching
- Maintain minimum sizes for legibility
- Use on backgrounds with sufficient contrast
- Use compact version in small spaces (mobile menu, favicon)
- Link logo to homepage in navigation

### ❌ DON'T

- Distort the aspect ratio (maintain proportions)
- Change the gradient colors
- Add effects or filters
- Use on busy backgrounds without proper contrast
- Recreate the logo (use provided assets)

---

## 📱 Responsive Usage

### Desktop Header
```tsx
<Logo width={200} height={48} variant="full" />
```

### Mobile Header
```tsx
<Logo width={150} height={36} variant="full" />
// OR
<Logo width={60} height={48} variant="compact" />
```

### Footer
```tsx
<Logo width={150} height={36} variant="full" />
```

### Favicon
Use the compact SVG: `lsx-design-logo-compact.svg`

---

## 🔄 Theme Adaptation

The React Logo component automatically adapts to light/dark themes:

```tsx
// Automatically uses correct colors based on theme
<Logo variant="full" />

// The gradient and text color switch automatically:
// Light: Primary → Accent gradient + Dark text
// Dark: Accent → Primary gradient + White text
```

Manual theme selection:
```html
<!-- Light mode -->
<img src="/lsx-design-logo.svg" alt="LSX Design" />

<!-- Dark mode -->
<img src="/lsx-design-logo-dark.svg" alt="LSX Design" />
```

---

## 🎨 Logo Construction

### LSX Icon Mark

The geometric mark is constructed from three letterforms:

**L Shape:**
- Vertical line from top to bottom
- Horizontal line at bottom
- 4px stroke weight

**S Shape:**
- Top horizontal segment
- Middle vertical segment (left)
- Middle horizontal segment (right)
- Bottom vertical segment (right)
- Bottom horizontal segment
- 4px stroke weight throughout

**X Shape:**
- Two diagonal lines crossing at center
- Creates dynamic visual tension
- 5px width at crossing point

**Gradient Application:**
- Linear gradient from 0% (top-left) to 100% (bottom-right)
- Creates depth and modern look
- Unifies the three letterforms

---

## 🖼️ Logo Variations

### 1. Full Logo
**When to use:** Primary logo usage everywhere possible  
**Best for:** Headers, footers, marketing materials  
**Minimum width:** 150px

### 2. Compact Logo
**When to use:** Space-constrained situations  
**Best for:** Mobile menus, favicons, app icons, badges  
**Minimum width:** 40px

### 3. Light Background Version
**When to use:** Light mode / light backgrounds  
**Colors:** Blue gradient + Dark text

### 4. Dark Background Version
**When to use:** Dark mode / dark backgrounds  
**Colors:** Cyan gradient + White text

---

## ♿ Accessibility

All logo variations include:
- ✅ Descriptive `<title>` elements
- ✅ `role="img"` attributes
- ✅ `aria-labelledby` references
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Scalable vector format (crisp at any size)

---

## 📦 Export Formats

### For Web
- ✅ SVG (preferred) — Scalable, small file size
- ✅ React Component — Dynamic theme switching

### For Print
Export SVG at required size, or use these guidelines:
- Small (business card): 1 inch width minimum
- Medium (letterhead): 2-3 inch width
- Large (poster): 6+ inch width

### For Social Media
Export compact logo at:
- Profile picture: 400×400px (centered)
- Cover image: Use full logo at appropriate size

---

## 🔧 Implementation Examples

### WordPress Header
```php
<!-- In parts/header.html -->
<div class="site-branding">
  <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
    <?php echo file_get_contents( get_template_directory() . '/assets/images/lsx-design-logo.svg' ); ?>
  </a>
</div>
```

### React Navigation
```tsx
import { Logo } from './components/common/Logo';

<header>
  <nav>
    <a href="/">
      <Logo width={200} height={48} variant="full" />
    </a>
  </nav>
</header>
```

### HTML Static Site
```html
<header>
  <a href="/">
    <img 
      src="/lsx-design-logo.svg" 
      alt="LSX Design" 
      width="200" 
      height="48"
    />
  </a>
</header>
```

---

## 🎨 Color Values Reference

### Light Mode
- **Gradient Start:** `rgba(30, 106, 255, 1)` — Primary blue
- **Gradient End:** `rgba(123, 231, 255, 1)` — Accent cyan
- **Text Color:** `rgba(9, 9, 9, 1)` — Dark gray

### Dark Mode
- **Gradient Start:** `rgba(123, 231, 255, 1)` — Accent cyan
- **Gradient End:** `rgba(30, 106, 255, 1)` — Primary blue
- **Text Color:** `rgba(255, 255, 255, 1)` — White

---

## 📝 File Inventory

| File | Type | Purpose | Size |
|------|------|---------|------|
| `Logo.tsx` | React Component | Dynamic logo with theme switching | — |
| `logo-lsx-design.ts` | TypeScript Export | SVG string exports | — |
| `lsx-design-logo.svg` | SVG | Light mode full logo | 200×48 |
| `lsx-design-logo-dark.svg` | SVG | Dark mode full logo | 200×48 |
| `lsx-design-logo-compact.svg` | SVG | Icon only (any theme) | 60×48 |

---

## ✅ Logo Checklist

Before deploying:
- [ ] Logo displays correctly on light backgrounds
- [ ] Logo displays correctly on dark backgrounds
- [ ] Logo is linked to homepage
- [ ] Logo has appropriate alt text
- [ ] Logo meets minimum size requirements
- [ ] Logo maintains aspect ratio on all devices
- [ ] Compact logo used appropriately in tight spaces
- [ ] Logo is accessible (ARIA labels, contrast)

---

**Logo Created:** December 24, 2024  
**Design System:** LSX Design v1.0  
**Designer:** LSX Design System  
**License:** Internal use for LSX projects
