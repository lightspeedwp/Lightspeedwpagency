# Header Patterns

**Category:** Layout Patterns  
**WordPress Concept:** Template parts (`parts/header.html`)  
**Component Location:** `/src/app/components/parts/SiteHeader.tsx`

---

## Overview

The LSX Design system provides **two interchangeable header patterns** that can be used across all page templates. Both patterns use design system tokens and follow WordPress block theme architecture.

---

## Pattern Variants

### 1. Default Header Pattern

**Slug:** `lsx-design/layout/header-default`  
**Usage:** Primary header with navigation and CTA button

#### Features
- Logo (left-aligned)
- Horizontal navigation links
- Primary CTA button ("Book Now")
- Sticky positioning
- Hover states on navigation items

#### Structure
```tsx
<SiteHeader variant="default" />
// or simply:
<SiteHeader />
```

#### Visual Hierarchy
```
┌─────────────────────────────────────────────────────┐
│ [Logo]            [Nav] [Nav] [Nav] [Nav] [Button] │
└─────────────────────────────────────────────────────┘
```

#### Design Tokens Used
- **Background:** `var(--background)`
- **Border:** `var(--border)`
- **Text:** `var(--foreground)`
- **Hover:** `var(--primary)`
- **Font:** Lexend (base, regular/bold)
- **Spacing:** Tailwind classes (`py-6`, `gap-8`)
- **Radius:** `var(--radius)` for button

---

### 2. Simple Header Pattern

**Slug:** `lsx-design/layout/header-simple`  
**Usage:** Minimal header with dropdown indicators

#### Features
- Logo (left-aligned)
- Horizontal navigation with dropdown indicators
- Active state on current page
- Underline on active link
- ChevronDown icons for dropdown menus

#### Structure
```tsx
<SiteHeader variant="simple" />
```

#### Visual Hierarchy
```
┌──────────────────────────────────────────────────────────┐
│ [Logo]     [Nav Item*] [Nav Item] [Nav Item ▼] [Nav ▼] │
└──────────────────────────────────────────────────────────┘
            * = Active (underlined)
            ▼ = Has dropdown
```

#### Design Tokens Used
- **Background:** `var(--background)`
- **Border:** `var(--border)`
- **Text (inactive):** `var(--foreground)`
- **Text (active):** `var(--primary)` + underline
- **Font:** Lexend (base, bold)
- **Spacing:** Tailwind classes (`py-2`, `gap-2`)
- **Radius:** `var(--radius)` for hover states

---

## Implementation

### In Template Parts

```tsx
// Default header (used by most templates)
import { SiteHeader } from '../parts/SiteHeader';

export function FrontPageTemplate() {
  return (
    <>
      <SiteHeader />
      {/* Rest of template */}
    </>
  );
}
```

```tsx
// Simple header (for minimal layouts)
import { SiteHeader } from '../parts/SiteHeader';

export function BlogTemplate() {
  return (
    <>
      <SiteHeader variant="simple" />
      {/* Rest of template */}
    </>
  );
}
```

---

## Navigation Items

### Default Header
```tsx
const navItems = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
```

### Simple Header
```tsx
const navItems = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences', hasDropdown: true },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact', hasDropdown: true },
];
```

---

## Design System Compliance

### Typography
- ✅ **Font family:** Lexend only (no Manrope in header)
- ✅ **Font size:** `var(--text-base)` (16px)
- ✅ **Font weight:**
  - Default: `var(--font-weight-regular)` (400)
  - Simple: `var(--font-weight-bold)` (700)

### Colors
- ✅ **Background:** `var(--background)` (white)
- ✅ **Foreground:** `var(--foreground)` (near black)
- ✅ **Primary:** `var(--primary)` (blue) for hover/active
- ✅ **Border:** `var(--border)` (gray) for bottom border

### Spacing
- ✅ **Default padding:** `py-6` (24px vertical)
- ✅ **Simple padding:** `py-2` (8px vertical)
- ✅ **Nav gap (default):** `gap-8` (32px)
- ✅ **Nav gap (simple):** `gap-2` (8px)

### Accessibility
- ✅ `role="banner"` on header
- ✅ `role="navigation"` on nav
- ✅ `aria-label="Primary navigation"`
- ✅ Keyboard accessible (Tab navigation)
- ✅ Focus states on all interactive elements
- ✅ Hover states for visual feedback
- ✅ Semantic HTML (`<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`)

---

## WordPress Mapping

### Default Header → `parts/header.html`

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:site-logo /-->
  
  <!-- wp:navigation {"layout":{"type":"flex"}} -->
  <nav>
    <!-- wp:navigation-link {"label":"Destinations","url":"#destinations"} /-->
    <!-- wp:navigation-link {"label":"Experiences","url":"#experiences"} /-->
    <!-- wp:navigation-link {"label":"About","url":"#about"} /-->
    <!-- wp:navigation-link {"label":"Contact","url":"#contact"} /-->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button {"className":"is-style-primary"} -->
      <div class="wp-block-button is-style-primary">
        <a class="wp-block-button__link" href="#book">Book Now</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </nav>
  <!-- /wp:navigation -->
</div>
<!-- /wp:group -->
```

### Simple Header → `parts/header-simple.html`

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:site-logo /-->
  
  <!-- wp:navigation {"layout":{"type":"flex"},"style":{"spacing":{"blockGap":"0.5rem"}}} -->
  <nav>
    <!-- wp:navigation-link {"label":"Home","url":"/","className":"is-active"} /-->
    <!-- wp:navigation-link {"label":"Destinations","url":"#destinations"} /-->
    <!-- wp:navigation-submenu {"label":"Experiences","url":"#experiences"} /-->
    <!-- wp:navigation-link {"label":"About","url":"#about"} /-->
    <!-- wp:navigation-submenu {"label":"Contact","url":"#contact"} /-->
  </nav>
  <!-- /wp:navigation -->
</div>
<!-- /wp:group -->
```

---

## Responsive Behavior

### Mobile (< 768px)
- **Default:** Consider hamburger menu
- **Simple:** Stack navigation or use mobile menu

### Tablet (768px - 1024px)
- Both patterns work well
- May need to reduce spacing

### Desktop (> 1024px)
- Full horizontal layout
- All items visible

---

## Usage Guidelines

### When to Use Default Header
- ✅ Marketing pages (front page, landing pages)
- ✅ When you need a prominent CTA button
- ✅ When branding should be emphasized
- ✅ Standard WordPress site layouts

### When to Use Simple Header
- ✅ Blog/editorial layouts
- ✅ Archive pages with filters
- ✅ When navigation needs dropdown menus
- ✅ Minimal, content-focused designs
- ✅ When you want to indicate active page

---

## Customization

### Changing Navigation Items

```tsx
// In SiteHeader.tsx, modify the navItems array:
const navItems = [
  { label: 'Your Label', href: '#your-link' },
  // Add more items
];
```

### Changing CTA Button

```tsx
// In default header pattern:
<Button variant="primary" href="#your-cta">
  Your CTA Text
</Button>
```

### Adding Dropdown Menus (Simple Header)

```tsx
// Set hasDropdown: true on nav items:
{ 
  label: 'Your Menu', 
  href: '#menu', 
  hasDropdown: true 
}
```

---

## Pattern Switching Example

```tsx
// App.tsx or template file
import { SiteHeader } from './components/parts/SiteHeader';

function App() {
  const [headerVariant, setHeaderVariant] = useState('default');
  
  return (
    <div>
      <SiteHeader variant={headerVariant} />
      {/* Rest of app */}
    </div>
  );
}
```

---

## Comparison Table

| Feature | Default Header | Simple Header |
|---------|---------------|---------------|
| **Logo** | ✅ Yes | ✅ Yes |
| **Navigation Links** | ✅ Yes | ✅ Yes |
| **CTA Button** | ✅ Yes | ❌ No |
| **Dropdown Indicators** | ❌ No | ✅ Yes (ChevronDown) |
| **Active State** | ❌ No | ✅ Yes (underline) |
| **Padding** | Larger (`py-6`) | Smaller (`py-2`) |
| **Font Weight** | Regular | Bold |
| **Gap Between Items** | Larger (`gap-8`) | Smaller (`gap-2`) |
| **Best For** | Marketing pages | Editorial/blog pages |

---

## Performance Notes

- Both patterns use **inline SVG for ChevronDown** (no icon library dependency for simple header)
- Logo uses **inline SVG** (zero HTTP requests)
- Sticky positioning may affect scroll performance on very long pages
- Consider `position: static` for non-sticky variant if needed

---

## Accessibility Checklist

### Default Header
- [x] Logo has `aria-label`
- [x] Navigation has `role="navigation"` and `aria-label`
- [x] All links are keyboard accessible
- [x] Focus states visible (`:focus-visible`)
- [x] Hover states don't hide information
- [x] Color contrast meets WCAG AA

### Simple Header
- [x] Logo has `aria-label`
- [x] Navigation has `role="navigation"` and `aria-label`
- [x] Active state indicated (not just color)
- [x] Dropdown indicators are semantic (not decorative)
- [x] All links are keyboard accessible
- [x] Focus states visible
- [x] Color contrast meets WCAG AA

---

## Related Documentation

- **Logo Component:** `/guidelines/components/Logo.md`
- **Button Component:** `/guidelines/components/Button.md`
- **Container Component:** `/guidelines/components/Container.md`
- **Footer Patterns:** `/guidelines/patterns/footer-patterns.md`
- **Template Parts:** `/guidelines/parts/overview-parts.md`

---

**Last Updated:** December 24, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
