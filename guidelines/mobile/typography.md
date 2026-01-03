# Mobile Typography Guidelines

**Purpose:** Define typography rules and adjustments for mobile devices to ensure readability, accessibility, and performance.

**System:** LSX Design token-driven typography system  
**Minimum Target:** WCAG 2.1 AA compliance on mobile devices

---

## Mobile Typography Principles

1. **16px Minimum:** Never use font sizes smaller than 16px for body text and interactive elements to prevent browser zoom on iOS
2. **Readable Line Heights:** Increase line heights on mobile for better readability in smaller viewports
3. **Appropriate Scaling:** Scale heading sizes down proportionally on mobile while maintaining hierarchy
4. **Touch-Friendly:** All interactive text elements must meet minimum touch target sizes (44×44px)

---

## Font Size Adjustments for Mobile

### Desktop vs Mobile Scale

| Element | Desktop Size | Mobile Size | CSS Variable | Mobile Adjustment |
|---------|-------------|-------------|--------------|-------------------|
| h1 | 60px | 40px | `--text-h1` | Scale down 33% |
| h2 | 32px | 28px | `--text-h2` | Scale down 12.5% |
| h3 | 24px | 22px | `--text-h3` | Scale down 8% |
| h4 | 20px | 20px | `--text-h4` | No change |
| p, button, label, input | 16px | 16px | `--text-base` | **Never smaller** |
| small | 12px | 14px | `--text-small` | **Increase to 14px** |

**CRITICAL:** Small text (`<small>`) should be **14px on mobile** instead of 12px for better readability.

---

## Mobile Typography Implementation

### Responsive Heading Scales

```tsx
// H1 — Hero Title (Mobile-First)
<h1 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: '40px',  // Mobile size
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: '1.3'  // Increased from desktop 1.25
}}>
  @media (min-width: 768px) {
    font-size: var(--text-h1);  // 60px on desktop
    line-height: 1.25;
  }
</h1>

// H2 — Section Heading
<h2 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: '28px',  // Mobile size
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: '1.3'
}}>
  @media (min-width: 768px) {
    font-size: var(--text-h2);  // 32px on desktop
    line-height: 1.25;
  }
</h2>

// H3 — Subsection Heading
<h3 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: '22px',  // Mobile size
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: '1.4'
}}>
  @media (min-width: 768px) {
    font-size: var(--text-h3);  // 24px on desktop
    line-height: 1.25;
  }
</h3>
```

---

## Line Height Adjustments

### Desktop vs Mobile Line Heights

Mobile devices benefit from increased line height for better readability:

| Element | Desktop Line Height | Mobile Line Height | Reason |
|---------|-------------------|-------------------|---------|
| h1, h2, h3 | 1.25 | 1.3-1.4 | Better readability on small screens |
| h4 | 1.5 | 1.5 | No change needed |
| p, button | 1.5 | 1.6 | Improved touch spacing |
| small | 1.5 | 1.6 | Better metadata readability |

```tsx
// Example: Mobile-optimized paragraph
<p style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',  // Always 16px
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: '1.6'  // Increased for mobile
}}>
  This is body text with improved line spacing for mobile readability.
</p>

@media (min-width: 768px) {
  p {
    line-height: 1.5;  // Desktop line height
  }
}
```

---

## Small Text on Mobile

**CRITICAL:** Small text must be **at least 14px on mobile** for accessibility.

### Before (Desktop)

```tsx
<small style={{
  fontFamily: 'Manrope, sans-serif',
  fontSize: 'var(--text-small)',  // 12px
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: '1.5'
}}>
  Published Dec 24, 2024
</small>
```

### After (Mobile-First)

```tsx
<small style={{
  fontFamily: 'Manrope, sans-serif',
  fontSize: '14px',  // Mobile: 14px minimum
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: '1.6'  // Increased line height
}}>
  Published Dec 24, 2024
</small>

@media (min-width: 768px) {
  small {
    font-size: var(--text-small);  // Desktop: 12px
    line-height: 1.5;
  }
}
```

---

## Touch Target Sizes

All interactive text elements (buttons, links, form inputs) must meet **44×44px minimum** touch target size.

### Button Minimum Size

```tsx
// ✅ CORRECT: 44px+ height for touch
<button 
  className="px-6 py-3"  // 24px horizontal, 12px vertical
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',  // 16px
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: '1.6',
    minHeight: '44px',  // Ensures touch target
    borderRadius: 'var(--radius)'
  }}
>
  Book Now
</button>

// ❌ WRONG: Too small for touch
<button style={{ 
  fontSize: '14px', 
  padding: '6px 12px'  // Only 26px tall
}}>
```

### Link Spacing

```tsx
// ✅ CORRECT: Adequate spacing for touch
<nav className="flex flex-col gap-4">  {/* 16px vertical gap */}
  <a 
    href="/destinations" 
    style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      padding: '12px 0',  // Ensures 44px+ touch area
      display: 'block'
    }}
  >
    Destinations
  </a>
</nav>

// ❌ WRONG: Links too close together
<nav className="flex flex-col gap-1">
  <a href="/destinations">Destinations</a>
</nav>
```

---

## Form Input Typography

### Input Fields (Mobile-Optimized)

```tsx
// ✅ CORRECT: 16px prevents iOS zoom
<input 
  type="text"
  className="w-full px-4 py-3"  // 12px vertical for 44px height
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',  // 16px minimum
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: '1.5',
    borderRadius: 'var(--radius)',
    backgroundColor: 'var(--input-background)',
    border: '1px solid var(--border)',
    minHeight: '44px'
  }}
/>

// ❌ WRONG: Below 16px triggers iOS zoom
<input style={{ fontSize: '14px' }} />
```

### Label Typography

```tsx
<label 
  htmlFor="email"
  className="block mb-2"
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',  // 16px
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '1.6'
  }}
>
  Email Address
</label>
```

---

## Responsive Text Alignment

### Mobile: Left-Aligned, Desktop: Center (Hero)

```tsx
<h1 
  className="text-left md:text-center"
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: '40px',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '1.3'
  }}
>
  Discover Your Next Adventure
</h1>

@media (min-width: 768px) {
  h1 {
    font-size: var(--text-h1);  // 60px
    text-align: center;
  }
}
```

**Why:** Left-aligned text is easier to read on mobile; centered text works better on desktop for hero sections.

---

## Truncation and Overflow

### Single Line Truncation

```tsx
// Card title truncation on mobile
<h3 
  className="truncate"
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: '22px',
    fontWeight: 'var(--font-weight-medium)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }}
>
  Maasai Mara National Reserve Safari Experience
</h3>
```

### Multi-Line Clamping

```tsx
// Clamp description to 3 lines on mobile
<p 
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: '1.6',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }}
>
  Kenya's premier wildlife reserve offers incredible biodiversity and year-round game viewing...
</p>

@media (min-width: 768px) {
  p {
    -webkit-line-clamp: 4;  // More lines on desktop
  }
}
```

---

## Accessibility: Zoom and Scaling

### Allow Text Scaling

**CRITICAL:** Never disable user zoom on mobile.

```html
<!-- ✅ CORRECT: Allows user zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- ❌ WRONG: Prevents accessibility -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
```

### Test Text Scaling

Test your typography at **200% zoom** (WCAG requirement):

```
iOS: Settings → Accessibility → Display & Text Size → Larger Text
Android: Settings → Accessibility → Font size
```

---

## WordPress Block Editor: Mobile Typography

### theme.json Mobile Overrides

```json
{
  "styles": {
    "typography": {
      "fontSize": "var(--text-base)",
      "lineHeight": "1.6"
    },
    "elements": {
      "h1": {
        "typography": {
          "fontSize": "40px",
          "lineHeight": "1.3"
        }
      },
      "h2": {
        "typography": {
          "fontSize": "28px",
          "lineHeight": "1.3"
        }
      }
    }
  }
}
```

---

## Common Mobile Typography Patterns

### Card on Mobile

```tsx
<article 
  className="p-4"  // Reduced padding on mobile
  style={{ 
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--card)',
    color: 'var(--card-foreground)'
  }}
>
  {/* Category */}
  <span 
    className="block mb-2"
    style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }}
  >
    Wildlife
  </span>
  
  {/* Title */}
  <h3 
    className="mb-2 truncate"  // Truncate long titles on mobile
    style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: '22px',
      fontWeight: 'var(--font-weight-medium)',
      lineHeight: '1.4'
    }}
  >
    Maasai Mara National Reserve
  </h3>
  
  {/* Description */}
  <p 
    style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-regular)',
      lineHeight: '1.6',
      color: 'var(--muted-foreground)',
      display: '-webkit-box',
      WebkitLineClamp: 2,  // 2 lines on mobile
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }}
  >
    Kenya's premier wildlife reserve.
  </p>
  
  {/* Metadata */}
  <small 
    className="block mt-3"
    style={{
      fontFamily: 'Manrope, sans-serif',
      fontSize: '14px',  // 14px on mobile
      fontWeight: 'var(--font-weight-regular)',
      color: 'var(--muted-foreground)',
      lineHeight: '1.6'
    }}
  >
    7 days • Max 12 guests
  </small>
</article>

@media (min-width: 768px) {
  article {
    padding: 24px;  // Desktop padding
  }
  
  h3 {
    font-size: var(--text-h3);  // 24px on desktop
    white-space: normal;  // No truncation
  }
  
  p {
    -webkit-line-clamp: 3;  // 3 lines on desktop
  }
  
  small {
    font-size: var(--text-small);  // 12px on desktop
  }
}
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Font size below 16px for inputs (triggers iOS zoom)
<input style={{ fontSize: '14px' }} />

// Disable user zoom
<meta name="viewport" content="user-scalable=no">

// Use desktop line heights on mobile
<h1 style={{ lineHeight: '1.25' }}>  // Too tight on mobile

// Small text below 14px on mobile
<small style={{ fontSize: '12px' }}>  // Too small for mobile

// Touch targets below 44px
<button style={{ padding: '4px 8px' }}>  // Too small
```

### ✅ DO

```tsx
// 16px minimum for inputs
<input style={{ fontSize: 'var(--text-base)' }} />

// Allow user zoom
<meta name="viewport" content="width=device-width, initial-scale=1">

// Increased line heights on mobile
<h1 style={{ lineHeight: '1.3' }}>  // Better for mobile

// 14px minimum for small text on mobile
<small style={{ fontSize: '14px' }}>

// 44px minimum touch targets
<button className="px-6 py-3" style={{ minHeight: '44px' }}>
```

---

## Testing Checklist

- [ ] All body text and inputs are 16px minimum
- [ ] Small text is 14px+ on mobile
- [ ] Headings scale appropriately for mobile viewports
- [ ] Line heights are increased for mobile readability
- [ ] Touch targets are 44×44px minimum
- [ ] User zoom is enabled (not disabled in viewport meta)
- [ ] Text is readable at 200% zoom
- [ ] Long text truncates gracefully on mobile
- [ ] Forms don't trigger iOS auto-zoom

---

## Related Documentation

- [../design-tokens/typography.md](../design-tokens/typography.md) — Desktop typography tokens
- [./forms.md](./forms.md) — Mobile form patterns
- [./performance.md](./performance.md) — Mobile performance optimization

---

**Last Updated:** December 24, 2024  
**Mobile Target:** iOS Safari 15+, Android Chrome 90+  
**WCAG Level:** AA (minimum)
