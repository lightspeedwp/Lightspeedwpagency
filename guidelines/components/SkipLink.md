# SkipLink Component

**Component Type:** Accessibility Utility  
**WordPress Mapping:** Custom theme utility (not a block)  
**Location:** `/src/app/components/common/SkipLink.tsx`

---

## Purpose

Provides keyboard users a way to skip repetitive navigation and jump directly to main content. Required for WCAG 2.1 AA compliance.

---

## Design System Requirements

### Typography
- **Font Family:** `var(--font-primary)`
- **Font Size:** `var(--text-base)` (16px)
- **Font Weight:** `var(--font-weight-medium)` (500)

### Colors
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

### Behavior
- **Hidden by default** (positioned off-screen using clip/clipPath)
- **Visible on keyboard focus** (Tab key)
- **Positioned at top-left** when focused (16px, 16px)
- **High z-index** to appear above all content
- **Pure CSS implementation** (no JavaScript event handlers)

### Spacing
- **Padding:** `px-4 py-2` (16px horizontal, 8px vertical)
- **Position:** Absolute, top: 8px, left: 8px
- **Z-index:** 9999

---

## Usage

### Standard Implementation
```tsx
import { SkipLink } from '../common/SkipLink';

export function Template() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content">
        {/* Page content */}
      </main>
    </>
  );
}
```

**CRITICAL:** Main content must have `id="main-content"` for skip link to work.

---

## Props

This component has no props. It always links to `#main-content`.

---

## WordPress Implementation

In WordPress themes, this is added to `header.php`:

```php
<a class="skip-link screen-reader-text" href="#main-content">
  <?php esc_html_e('Skip to content', 'theme-textdomain'); ?>
</a>
```

With CSS:
```css
.skip-link {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
  z-index: 9999;
}

.skip-link:focus {
  left: 16px;
  top: 16px;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  clip-path: none;
  white-space: nowrap;
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  box-shadow: var(--shadow-lg);
}
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend font (`fontFamily: var(--font-primary)`)
- CSS variables for colors (`var(--primary)`, `var(--primary-foreground)`)
- Absolute positioning with transform off-screen
- High z-index when focused
- Keyboard focus visible

❌ **FORBIDDEN:**
- `display: none` (makes it inaccessible to screen readers)
- `visibility: hidden` (same issue)
- Hard-coded colors
- Omitting from templates

---

## Accessibility

### Why It's Required
- **Keyboard users** navigate via Tab key
- **Skip repetitive content** (navigation, headers)
- **WCAG 2.1 AA** requires bypass blocks
- **Screen reader users** can still access it when hidden

### Implementation Rules
1. **Must be first focusable element** on page
2. **Target must exist** (`#main-content`)
3. **Must be keyboard accessible** (Tab key)
4. **Must be visible when focused**

### Screen Reader Support
- Link is always in the DOM (not removed)
- Screen readers announce it as "Skip to content, link"
- Hidden visually but available to assistive tech

---

## Examples

### Complete Page Structure
```tsx
export function FrontPageTemplate() {
  return (
    <>
      {/* Skip link is first */}
      <SkipLink />
      
      {/* Global header */}
      <SiteHeader />
      
      {/* Main content with required ID */}
      <main id="main-content" role="main">
        <HeroHome />
        <CardGrid items={destinations} />
        <CTASection {...ctaProps} />
      </main>
      
      {/* Global footer */}
      <SiteFooter />
    </>
  );
}
```

### Testing
1. Load page in browser
2. Press Tab key (should focus skip link)
3. Skip link appears at top-left
4. Press Enter (jumps to main content)
5. Focus is on main content area

---

## Visual States

### Hidden (Default) — Pure CSS
```css
.skip-link {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
  z-index: 9999;
}
```

### Visible (Focused) — Pure CSS
```css
.skip-link:focus {
  left: 16px;
  top: 16px;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  clip-path: none;
  white-space: nowrap;
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  box-shadow: var(--shadow-lg);
}
```

**Benefits of Pure CSS:**
- No JavaScript event handlers needed
- Browser handles focus state automatically
- Better performance (no runtime listeners)
- Simpler to maintain

---

## Common Issues

### ❌ Skip Link Not Working
**Problem:** `#main-content` ID doesn't exist  
**Solution:** Ensure `<main id="main-content">` exists

### ❌ Skip Link Not Visible
**Problem:** Using `display: none`  
**Solution:** Use off-screen positioning with transform

### ❌ Can't Tab to Skip Link
**Problem:** Not first element in DOM  
**Solution:** Place `<SkipLink />` before `<SiteHeader />`

---

## Design System Integration

This component enforces:
1. **WCAG 2.1 AA compliance** (Bypass Blocks criterion)
2. **Keyboard accessibility** for all users
3. **Design system colors** (primary background)
4. **Lexend typography** for consistency
5. **Proper focus management**

---

## Required on Every Template

✅ **Include on:**
- Front page template
- Archive templates
- Single templates
- Page templates
- All public-facing pages

❌ **Not needed on:**
- Admin screens
- Error pages (404)
- Login/register pages

---

**Last Updated:** December 26, 2024  
**Component Status:** ✅ Implemented (Pure CSS)  
**Documentation Status:** ✅ Complete