# Non-Block Components (UI Utilities)

**Category:** Components  
**Last Updated:** March 11, 2026  
**Status:** Active

---

## Purpose

**What:** List of UI utility components that do NOT map to WordPress blocks

**Why:** Clarify which components are behavioral enhancements outside the block system

**Who:** Developers working on UI utilities and progressive enhancements

---

## Philosophy

These are valid UI utilities but live **outside** Gutenberg composition.

**Characteristics:**
- Not editor-placeable
- JavaScript-driven (usually)
- Progressive enhancement
- Enhance UX but not required
- Outside WordPress block system

**WordPress Implementation:** `assets/js/*.js` theme enhancement scripts

---

## Complete List

### 1. ScrollBackToTop (Back to Top Button)

**Purpose:** Smooth scroll back to top of page

**Component:** `/src/app/components/ui/ScrollBackToTop.tsx`

**CSS:** `/src/styles/ui/scroll-back-to-top.css`

**Documentation:** [ScrollBackToTop.md](./ScrollBackToTop.md)

**Features:**
- Appears after scrolling down
- Smooth scroll animation
- Keyboard accessible
- Reduced motion support

**WordPress Implementation:**
```js
// assets/js/scroll-to-top.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize back to top button
});
```

---

### 2. ScrollDownArrow (Scroll Indicator)

**Purpose:** Indicates more content below fold on fullscreen heroes

**Component:** `/src/app/components/ui/ScrollDownArrow.tsx`

**CSS:** `/src/styles/ui/scroll-down-arrow.css`

**Documentation:** [ScrollDownArrow.md](./ScrollDownArrow.md)

**Features:**
- Animated arrow/chevron
- Smooth scroll to next section
- Auto-hides after scroll
- Reduced motion support

**WordPress Implementation:**
```js
// assets/js/scroll-indicator.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll indicators
});
```

---

### 3. StyleSwitcher (Theme Switcher)

**Purpose:** Toggle between light/dark mode

**Component:** `/src/app/components/ui/StyleSwitcher.tsx`

**CSS:** `/src/styles/ui/style-switcher.css`

**Documentation:** [StyleSwitcher.md](./StyleSwitcher.md)

**Features:**
- Light/dark mode toggle
- Respects system preference
- Saves user preference (localStorage)
- Smooth transition

**WordPress Implementation:**
```js
// assets/js/theme-switcher.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme switcher
});
```

---

### 4. LayoutSwitcher (Grid/List View Toggle)

**Purpose:** Toggle between grid and list layouts for archives

**Component:** `/src/app/components/ui/LayoutSwitcher.tsx`

**CSS:** `/src/styles/ui/layout-switcher.css`

**Documentation:** [LayoutSwitcher.md](./LayoutSwitcher.md)

**Features:**
- Grid vs list view toggle
- Saves user preference
- Keyboard accessible
- Smooth layout transition

**WordPress Implementation:**
```js
// assets/js/layout-switcher.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize layout switcher
});
```

---

### 5. Skip Link (Accessibility Utility)

**Purpose:** Allow keyboard users to skip to main content

**Component:** Typically inline in template, not separate component

**Implementation:**
```tsx
<a 
  href="#main-content"
  className="skip-link"
  style={{
    position: 'absolute',
    left: '-9999px',
    zIndex: 9999
  }}
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

**CSS:**
```css
.skip-link:focus {
  left: 0;
  top: 0;
  padding: var(--spacing-3);
  background: var(--primary);
  color: var(--primary-foreground);
}
```

**WordPress Implementation:**
- Built into theme header
- No JavaScript required

---

### 6. Focus Ring / Focus-Visible Utilities

**Purpose:** Enhanced focus indicators for keyboard navigation

**Implementation:** CSS-only, applied globally

**CSS:**
```css
/* Focus-visible for better keyboard navigation */
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Remove focus outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

**WordPress Implementation:**
- CSS in theme stylesheet
- No JavaScript required

---

### 7. Typography/Token Enforcement Wrappers

**Purpose:** Enforce design system tokens

**Components:**
- `Container.tsx` - Max-width container with fluid padding
- `Section.tsx` - Section wrapper with spacing
- `Heading.tsx` - Headings with design system typography
- `Button.tsx` - Buttons with variants and states

**Location:** `/src/app/components/common/`

**WordPress Implementation:**
- CSS classes and utilities
- No JavaScript required

**Usage:**
```tsx
<Container>
  <Section>
    <Heading level={1}>Title</Heading>
  </Section>
</Container>
```

**WordPress Equivalent:**
```html
<!-- wp:group {"className":"container"} -->
<div class="wp-block-group container">
  <!-- wp:group {"className":"section"} -->
  <div class="wp-block-group section">
    <!-- wp:heading {"level":1} -->
    <h1>Title</h1>
    <!-- /wp:heading -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

---

### 8. Smooth Scroll Behavior

**Purpose:** Enable smooth scrolling for anchor links

**Implementation:** CSS + optional JavaScript enhancement

**CSS:**
```css
html {
  scroll-behavior: smooth;
}

/* Disable for reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

**JavaScript Enhancement:**
```js
// Optional: More control over smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

---

### 9. Loading States

**Purpose:** Show loading indicators during async operations

**Component:** Can be pattern or UI component depending on use case

**Simple Spinner:**
```tsx
<div className="loading-spinner" role="status">
  <span className="sr-only">Loading...</span>
</div>
```

**CSS:**
```css
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .loading-spinner {
    animation: none;
    /* Show static loading state */
  }
}
```

---

### 10. Modal/Dialog Management

**Purpose:** Manage modal focus trapping and keyboard behavior

**Implementation:** JavaScript utility for focus management

**Features:**
- Focus trap within modal
- Close on Escape key
- Return focus to trigger
- Lock body scroll

**Usage:**
```js
// Focus management utility
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.previousFocus = document.activeElement;
  }
  
  activate() {
    // Trap focus within element
  }
  
  deactivate() {
    // Return focus to previous element
  }
}
```

---

## Implementation Guidelines

### Progressive Enhancement

All UI components should follow progressive enhancement:

1. **Base functionality works without JavaScript**
2. **JavaScript enhances the experience**
3. **Fails gracefully if JavaScript disabled**

**Example: Back to Top**
```tsx
// ✅ Progressive enhancement
<a href="#top" className="back-to-top">
  Back to Top
</a>
// Works as link without JS, enhanced with smooth scroll

// ❌ Requires JavaScript
<button onClick={scrollToTop} className="back-to-top">
  Back to Top
</button>
// Broken without JS
```

---

### Accessibility Requirements

**All UI components MUST:**
- ✅ Be keyboard accessible
- ✅ Have visible focus states
- ✅ Include ARIA labels where needed
- ✅ Support reduced motion
- ✅ Work without JavaScript (where possible)

**See:** [accessibility.md](../accessibility.md)

---

### Design System Compliance

**All UI components MUST:**
- ✅ Use CSS variables for all styling
- ✅ Use design system fonts (`var(--font-primary)` or `var(--font-secondary)`)
- ✅ Use WordPress utility classes
- ✅ Follow BEM naming conventions
- ✅ Support dark mode

**See:** [design-tokens/css-variables-overview.md](../design-tokens/css-variables-overview.md)

---

## WordPress Integration

### Theme Script Registration

```php
<?php
// functions.php

function lsx_design_enqueue_scripts() {
  // UI utilities
  wp_enqueue_script(
    'lsx-scroll-to-top',
    get_template_directory_uri() . '/assets/js/scroll-to-top.js',
    array(),
    '1.0.0',
    true
  );
  
  wp_enqueue_script(
    'lsx-theme-switcher',
    get_template_directory_uri() . '/assets/js/theme-switcher.js',
    array(),
    '1.0.0',
    true
  );
  
  wp_enqueue_script(
    'lsx-layout-switcher',
    get_template_directory_uri() . '/assets/js/layout-switcher.js',
    array(),
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'lsx_design_enqueue_scripts');
```

---

## Checklist

**Before creating a UI component:**
- [ ] Is it truly a utility (not a pattern)?
- [ ] Does it enhance but not require?
- [ ] Can base functionality work without JS?
- [ ] Is it keyboard accessible?
- [ ] Does it support reduced motion?
- [ ] Does it use design system tokens?

**After creating:**
- [ ] Component documented
- [ ] CSS file created
- [ ] JavaScript file created (if needed)
- [ ] Accessibility tested
- [ ] Reduced motion tested
- [ ] WordPress integration planned

---

## Related Guidelines

**See Also:**
- [components-vs-patterns.md](./components-vs-patterns.md) - When to use components vs patterns
- [accessibility.md](../accessibility.md) - Accessibility requirements
- [ScrollBackToTop.md](./ScrollBackToTop.md) - Specific component doc
- [ScrollDownArrow.md](./ScrollDownArrow.md) - Specific component doc
- [StyleSwitcher.md](./StyleSwitcher.md) - Specific component doc
- [LayoutSwitcher.md](./LayoutSwitcher.md) - Specific component doc

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Components  
**Type:** UI Utilities  
**WordPress Mapping:** `assets/js/*.js`  
**Last Updated:** March 11, 2026
