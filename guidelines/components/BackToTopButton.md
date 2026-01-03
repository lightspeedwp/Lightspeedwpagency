# BackToTopButton Component

**Component Type:** UI Utility (Non-WordPress Block)  
**WordPress Mapping:** Theme JavaScript utility  
**Location:** `/src/app/components/ui/BackToTopButton.tsx`

---

## Purpose

Provides quick return to top of page for long-scrolling content. Appears after user scrolls down, disappears at top. Improves navigation UX on content-heavy pages.

---

## Design System Requirements

### Typography
- **No text** (icon only)
- Uses Lucide React `ChevronUp` icon

### Colors
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

**Hover State:**
```tsx
backgroundColor: 'var(--primary)' // slightly darker via opacity
boxShadow: 'var(--elevation-md)'
```

### Spacing
- **Size:** 48px × 48px (fixed)
- **Position:** Fixed, bottom-right
- **Bottom:** `32px` from viewport edge
- **Right:** `32px` from viewport edge
- **Z-index:** 100 (above content, below modals)

### Border Radius
```tsx
borderRadius: 'var(--radius-lg)' // 8px (rounded square)
```

### Behavior
- **Hidden** when scrollY < 300px
- **Visible** when scrollY ≥ 300px
- **Smooth scroll** to top on click
- **Fade transition** on show/hide

---

## Usage

### Standard Implementation
```tsx
import { BackToTopButton } from '../ui/BackToTopButton';

export function Template() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content">
        {/* Page content */}
      </main>
      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
```

**Note:** Place after all content, before closing body tag.

---

## Props

This component has no props. All behavior is self-contained.

---

## WordPress Implementation

In WordPress themes, this is added via JavaScript in `assets/js/back-to-top.js`:

```javascript
// Show/hide button on scroll
window.addEventListener('scroll', () => {
  const button = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
});

// Scroll to top on click
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

Enqueued in `functions.php`:
```php
wp_enqueue_script(
  'back-to-top',
  get_template_directory_uri() . '/assets/js/back-to-top.js',
  array(),
  '1.0.0',
  true
);
```

---

## Token Enforcement

✅ **REQUIRED:**
- CSS variables for colors (`var(--primary)`)
- CSS variables for border radius (`var(--radius-lg)`)
- CSS variables for shadows (`var(--elevation-md)`)
- Fixed pixel positioning (not percentages)
- Smooth scroll behavior

❌ **FORBIDDEN:**
- Hard-coded colors (hex codes)
- Hard-coded border radius
- Text labels (icon only)
- Always visible (must show/hide on scroll)
- Blocking page content (z-index too high)

---

## Accessibility

### Keyboard Support
- **Tab key** can focus button
- **Enter/Space** activates scroll
- Focus state visible

### Screen Readers
```tsx
<button 
  aria-label="Scroll back to top"
  onClick={scrollToTop}
>
  <ChevronUp aria-hidden="true" />
</button>
```

- `aria-label` describes action
- Icon has `aria-hidden="true"` (decorative)

### Reduced Motion
```tsx
// Respect prefers-reduced-motion
const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
};
```

### Focus Management
- Button receives focus when clicked
- Focus doesn't move to top of page (just scroll)
- User can continue from button position

---

## Examples

### Basic Implementation
```tsx
export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-8 right-8 z-100"
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        borderRadius: 'var(--radius-lg)',
        width: '48px',
        height: '48px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: 'var(--elevation-sm)'
      }}
    >
      <ChevronUp size={24} />
    </button>
  );
}
```

### With Hover Effects
```tsx
<button
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--elevation-md)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--elevation-sm)';
  }}
  // ... other props
>
  <ChevronUp size={24} />
</button>
```

---

## Behavior Details

### Show Threshold
- **Default:** 300px scroll
- **Rationale:** Users have left "hero" area
- **Customizable:** Adjust in component if needed

### Hide Conditions
- When scrollY < 300px
- User hasn't scrolled enough to need it
- Reduces visual clutter at top

### Scroll Animation
- **Smooth:** `behavior: 'smooth'` (default)
- **Instant:** If user prefers reduced motion
- **Duration:** Browser-controlled (~300ms)

### Z-index Layer
- **100:** Above page content
- **Below:** Modals (1000+), notifications (500+)
- **Above:** Cards, sections, footer

---

## Mobile Behavior

### Responsive Positioning
```tsx
// Desktop: bottom-8 right-8 (32px)
// Mobile: bottom-4 right-4 (16px)

className="fixed bottom-4 right-4 md:bottom-8 md:right-8"
```

### Touch Targets
- **Size:** 48px × 48px minimum (WCAG guideline)
- **Tap area:** Entire button (no text to miss)
- **Spacing:** Far enough from edges for comfortable reach

---

## Common Issues

### ❌ Button Not Appearing
**Problem:** Scroll listener not working  
**Solution:** Check useEffect cleanup, verify scroll threshold

### ❌ Button Always Visible
**Problem:** Visibility logic broken  
**Solution:** Ensure `isVisible` state updates on scroll

### ❌ Scroll Not Smooth
**Problem:** Browser doesn't support smooth scroll  
**Solution:** Add polyfill or use instant scroll fallback

### ❌ Button Blocks Content
**Problem:** Z-index too high or bad positioning  
**Solution:** Use z-100, ensure bottom-right position

---

## When to Use

✅ **Use on:**
- Long-scrolling pages (> 2 viewports)
- Archive pages with many cards
- Single detail pages with long content
- Blog post pages

❌ **Don't use on:**
- Short pages (< 1 viewport)
- Modals or overlays
- Error pages (404)
- Login/register pages

---

## Alternative Implementations

### Text + Icon Version
```tsx
<button /* ... */>
  <span style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-small)',
    marginRight: '8px'
  }}>
    Top
  </span>
  <ChevronUp size={16} />
</button>
```

### Circle Button (Fully Rounded)
```tsx
style={{
  borderRadius: '50%', // Full circle
  width: '48px',
  height: '48px'
}}
```

---

## Design System Integration

This component enforces:
1. **CSS variable colors** (primary/primary-foreground)
2. **CSS variable border radius** (radius-lg)
3. **CSS variable shadows** (elevation-sm/md)
4. **Accessibility** (keyboard, screen readers, reduced motion)
5. **Progressive enhancement** (JavaScript-dependent)
6. **WordPress theme script** pattern (not a block)

---

**Last Updated:** December 24, 2024
