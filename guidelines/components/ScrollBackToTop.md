# Scroll Back to Top Button

**Purpose:** Floating button that appears after scrolling, allowing users to quickly return to the top of the page.

**WordPress concept:** Progressive enhancement script (not a WordPress block)

**Location:** `src/app/components/ui/BackToTopButton.tsx`

---

## When to Use

- **Long pages** (>2 viewport heights)
- **Single detail pages** with extensive content
- **Archive pages** with many results
- **Any page** where scrolling back to top would be tedious

**Do not use** on short pages (< 2 viewport heights) where scrolling back manually is easy.

---

## Component API

```tsx
// No props — behavior is automatic
<BackToTopButton />
```

The button:
- Appears when user scrolls >300px from top
- Disappears when near top of page
- Scrolls smoothly to top on click
- Positioned fixed in bottom-left corner

---

## Basic Usage

### In Templates

```tsx
import { BackToTopButton } from '../ui/BackToTopButton';

export function SingleTemplate() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Long content */}
      </main>
      <SiteFooter />
      
      {/* Add at end of template */}
      <BackToTopButton />
    </>
  );
}
```

**Rule:** Add `<BackToTopButton />` once per template, at the very end (after footer).

---

## WordPress Mapping

In WordPress, this is implemented as a **progressive enhancement script**:

### File: `assets/js/back-to-top.js`

```javascript
(function() {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Back to top');
  
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 300);
  });
  
  document.body.appendChild(button);
})();
```

### File: `assets/css/back-to-top.css`

```css
.back-to-top {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  cursor: pointer;
  box-shadow: var(--elevation-sm);
  display: none;
  align-items: center;
  justify-content: center;
  font-size: var(--text-h4);
  transition: opacity 0.3s ease;
}

.back-to-top.visible {
  display: flex;
}

.back-to-top:hover {
  opacity: 0.9;
}

.back-to-top:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Enqueue in `functions.php`

```php
function lsx_design_enqueue_scripts() {
  wp_enqueue_script(
    'lsx-back-to-top',
    get_template_directory_uri() . '/assets/js/back-to-top.js',
    array(),
    '1.0.0',
    true
  );
  
  wp_enqueue_style(
    'lsx-back-to-top',
    get_template_directory_uri() . '/assets/css/back-to-top.css',
    array(),
    '1.0.0'
  );
}
add_action( 'wp_enqueue_scripts', 'lsx_design_enqueue_scripts' );
```

---

## Behavior

### Show/Hide Logic

```tsx
// Shows when scrollY > 300px
setIsVisible(window.scrollY > 300);

// Hides when scrollY <= 300px
setIsVisible(window.scrollY <= 300);
```

**Why 300px?** This is about 1.5 viewport heights—enough scrolling that returning to top is useful.

### Scroll Behavior

```tsx
// Smooth scroll to top
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
```

**Note:** Respects `prefers-reduced-motion` setting automatically in modern browsers.

---

## Accessibility

### ARIA Label

```tsx
<button 
  aria-label="Back to top"
  onClick={scrollToTop}
>
  ↑
</button>
```

**Required:** `aria-label` provides context for screen readers.

### Keyboard Access

```tsx
// Button is keyboard-focusable by default
<button>  // Native button element
  ↑
</button>
```

### Focus State

```tsx
// Visible focus indicator
*:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
}
```

### Reduced Motion

The `smooth` scroll behavior is automatically disabled if user has `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
  }
}
```

---

## Positioning

### Default Position

```tsx
style={{
  position: 'fixed',
  bottom: 'var(--wp--preset--spacing--30)',  // 16px from bottom
  left: 'var(--wp--preset--spacing--30)',    // 16px from left
  zIndex: 1000,
}}
```

**Why bottom-left?**
- Avoids conflict with PageSwitcher (bottom-right in prototype)
- Common position for assistive UI
- Accessible on mobile with thumb reach

### Alternative: Bottom-Right

```tsx
style={{
  position: 'fixed',
  bottom: 'var(--wp--preset--spacing--30)',
  right: 'var(--wp--preset--spacing--30)',  // Right instead of left
  zIndex: 1000,
}}
```

**Note:** In production WordPress theme, bottom-right is more common. We use bottom-left in prototype to avoid overlap with PageSwitcher.

---

## Styling

### Size and Shape

```tsx
style={{
  width: '48px',          // Minimum touch target size
  height: '48px',         // Meets WCAG AA (44×44px minimum)
  borderRadius: '50%',    // Circular button
}}
```

**Rule:** Touch targets must be at least 44×44px for accessibility.

### Colors

```tsx
style={{
  backgroundColor: 'var(--wp--preset--color--primary)',
  color: 'var(--wp--preset--color--primary-foreground)',
}}
```

Uses brand primary color for consistency with other primary actions.

### Shadow and Elevation

```tsx
style={{
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}}
```

Subtle shadow indicates the button "floats" above content.

---

## Common Patterns

### Single Page Template

```tsx
export function SingleTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Long article content */}
        <Section spacing="72">
          <Container>
            <article>
              {/* Many paragraphs */}
            </article>
          </Container>
        </Section>
        
        {/* Related content */}
        <CardGrid items={related} />
        
        {/* CTA */}
        <CTASection />
      </main>

      <SiteFooter />
      
      {/* Back to top appears after scrolling */}
      <BackToTopButton />
    </>
  );
}
```

### Archive Template

```tsx
export function ArchiveTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        <ArchiveHeader />
        <CardGrid items={destinations} />
        <PaginationNav />
      </main>

      <SiteFooter />
      <BackToTopButton />  {/* Useful for long archives */}
    </>
  );
}
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Multiple BackToTopButton instances
<BackToTopButton />
{/* ... */}
<BackToTopButton />  // Don't duplicate

// Button in wrong position
<SiteHeader />
<BackToTopButton />  // Don't put in middle of page
<main>...</main>

// Missing on long pages
export function SingleTemplate() {
  return (
    <>
      <main>{/* 10,000 words of content */}</main>
      {/* No BackToTopButton — hard to scroll back! */}
    </>
  );
}
```

### ✅ DO

```tsx
// Single instance at end of template
<SiteHeader />
<main>...</main>
<SiteFooter />
<BackToTopButton />  // One instance, at the end

// Only on pages where it's needed
export function SingleTemplate() {
  // Long content = use BackToTopButton
  return (
    <>
      <main>{/* Long content */}</main>
      <BackToTopButton />
    </>
  );
}

export function UtilityPageTemplate() {
  // Short page = skip BackToTopButton
  return (
    <>
      <main>{/* Brief content */}</main>
      {/* No BackToTopButton needed */}
    </>
  );
}
```

---

## Testing Checklist

- [ ] Button appears after scrolling >300px
- [ ] Button disappears when near top
- [ ] Clicking button scrolls smoothly to top
- [ ] Button is keyboard accessible (Tab to focus)
- [ ] Focus state is visible (2px accent outline)
- [ ] `aria-label` provides context
- [ ] Button meets 44×44px minimum touch target
- [ ] Button doesn't overlap other UI elements
- [ ] Smooth scroll respects `prefers-reduced-motion`

---

## Performance Considerations

### Debounce Scroll Listener (Optional)

For better performance on scroll:

```tsx
useEffect(() => {
  let timeout: NodeJS.Timeout;
  
  const toggleVisibility = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsVisible(window.scrollY > 300);
    }, 100);  // Debounce scroll events
  };

  window.addEventListener('scroll', toggleVisibility);
  return () => {
    clearTimeout(timeout);
    window.removeEventListener('scroll', toggleVisibility);
  };
}, []);
```

**Note:** Modern browsers handle scroll events efficiently, so debouncing is optional unless experiencing performance issues.

---

## Related Components

- **PageSwitcher** — Another fixed position UI element (prototype only)
- **SkipLink** — Another accessibility enhancement

---

## Related Documentation

- [ScrollDownArrow.md](./ScrollDownArrow.md) — Scroll indicator component
- [../overview-components.md](../overview-components.md) — Component system
- [../../WORDPRESS-IMPLEMENTATION-CHECKLIST.md](../../WORDPRESS-IMPLEMENTATION-CHECKLIST.md) — WordPress conversion guide

---

**Last Updated:** December 24, 2024