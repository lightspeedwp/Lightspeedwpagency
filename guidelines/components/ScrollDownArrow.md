# Scroll Down Arrow

**Purpose:** Animated indicator that suggests scrollable content below the fold, commonly used in hero sections.

**WordPress concept:** Progressive enhancement script or custom block

**Location:** To be created in `src/app/components/ui/ScrollDownArrow.tsx`

---

## When to Use

- **Full-height hero sections** where content continues below
- **Landing pages** with compelling "below the fold" content
- **Homepage heroes** to indicate more content below

**Do not use:**
- On pages with short heroes (content already visible)
- Multiple times on one page
- When the next section is already partially visible

---

## Component API

```tsx
interface ScrollDownArrowProps {
  targetId?: string;      // ID of element to scroll to (optional)
  label?: string;         // Accessible label (default: "Scroll to content")
  className?: string;     // Additional CSS classes
}
```

---

## Basic Usage

```tsx
import { ScrollDownArrow } from '../ui/ScrollDownArrow';

// Basic usage (scrolls one viewport down)
<ScrollDownArrow />

// Scroll to specific element
<ScrollDownArrow targetId="main-content" />

// Custom label
<ScrollDownArrow 
  targetId="featured" 
  label="See featured destinations"
/>
```

---

## Implementation Example

```tsx
/**
 * Scroll Down Arrow Component
 */

import { useEffect, useState } from 'react';

interface ScrollDownArrowProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function ScrollDownArrow({ 
  targetId, 
  label = 'Scroll to content',
  className = '' 
}: ScrollDownArrowProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Hide arrow after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label={label}
      className={className}
      style={{
        position: 'absolute',
        bottom: 'var(--wp--preset--spacing--40)',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 'var(--wp--preset--spacing--20)',
        animation: 'bounce 2s infinite',
        color: 'var(--wp--preset--color--contrast)',
      }}
    >
      {/* Down arrow icon */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </button>
  );
}
```

### Required CSS Animation

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}
```

---

## Common Pattern: Hero Section

```tsx
export function HeroHome() {
  return (
    <Section spacing="80">
      <Container>
        {/* Hero content */}
        <div style={{ 
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Heading level={1}>
            Discover Your Next Adventure
          </Heading>
          
          <p>Explore curated travel experiences.</p>
          
          {/* Scroll indicator */}
          <ScrollDownArrow targetId="featured-destinations" />
        </div>
      </Container>
    </Section>
  );
}
```

---

## WordPress Mapping

### Option 1: Custom Block

Create a custom "Scroll Indicator" block that editors can insert into heroes.

**File:** `blocks/scroll-indicator/block.json`

```json
{
  "name": "lsx-design/scroll-indicator",
  "title": "Scroll Indicator",
  "category": "lsx-design",
  "attributes": {
    "targetId": {
      "type": "string",
      "default": ""
    },
    "label": {
      "type": "string",
      "default": "Scroll to content"
    }
  }
}
```

### Option 2: Pattern Enhancement

Add via JavaScript to hero patterns automatically:

```javascript
// assets/js/scroll-indicator.js
document.addEventListener('DOMContentLoaded', () => {
  const heroes = document.querySelectorAll('.hero-section');
  
  heroes.forEach(hero => {
    if (hero.offsetHeight >= window.innerHeight) {
      const indicator = createScrollIndicator();
      hero.appendChild(indicator);
    }
  });
});
```

---

## Accessibility

### ARIA Label

```tsx
<button 
  aria-label="Scroll to featured destinations"
  onClick={handleScroll}
>
  {/* Arrow icon */}
</button>
```

**Required:** Provide descriptive `aria-label` so screen reader users understand the button's purpose.

### Keyboard Access

```tsx
// Native button is keyboard-accessible
<button>  // Focusable with Tab
  <svg>...</svg>
</button>
```

### Focus State

```tsx
button:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  button {
    animation: none !important;
  }
}
```

---

## Animation

### Bounce Animation

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.scroll-down-arrow {
  animation: bounce 2s infinite;
}
```

**Why bouncing?** Creates visual affordance that content continues below.

### Respect Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-down-arrow {
    animation: none;
  }
}
```

**Accessibility requirement:** Users who prefer reduced motion should not see the bouncing animation.

---

## Positioning

### Centered at Bottom of Hero

```tsx
style={{
  position: 'absolute',
  bottom: 'var(--wp--preset--spacing--40)',  // 24px from bottom
  left: '50%',
  transform: 'translateX(-50%)',             // Center horizontally
}}
```

**Context:** Parent container must have `position: relative`.

---

## Show/Hide Logic

### Hide After Scrolling

```tsx
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    // Hide arrow once user starts scrolling
    setIsVisible(window.scrollY < 100);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

if (!isVisible) return null;
```

**Why?** Once the user scrolls, they've discovered there's content below—the indicator is no longer needed.

---

## Common Mistakes

### ❌ DON'T

```tsx
// Multiple scroll indicators on one page
<ScrollDownArrow />
{/* ... */}
<ScrollDownArrow />  // Confusing!

// On short sections
<section style={{ minHeight: '50vh' }}>
  <ScrollDownArrow />  // Content already visible
</section>

// Without accessible label
<button onClick={scroll}>
  ↓  // Screen readers don't know what this does
</button>

// Animation without reduced motion check
.arrow {
  animation: bounce 2s infinite;  // No @media check
}
```

### ✅ DO

```tsx
// Single instance in full-height hero
<section style={{ minHeight: '100vh', position: 'relative' }}>
  <h1>Hero Title</h1>
  <ScrollDownArrow targetId="content" />
</section>

// With accessible label
<button aria-label="Scroll to featured destinations">
  ↓
</button>

// Respect reduced motion
@media (prefers-reduced-motion: reduce) {
  .arrow {
    animation: none;
  }
}

// Hide after user scrolls
{isVisible && <ScrollDownArrow />}
```

---

## Testing Checklist

- [ ] Arrow appears on full-height heroes only
- [ ] Clicking scrolls smoothly to next section
- [ ] Arrow has accessible label
- [ ] Arrow is keyboard accessible
- [ ] Bounce animation runs (if motion allowed)
- [ ] Animation stops if `prefers-reduced-motion: reduce`
- [ ] Arrow hides after user scrolls
- [ ] Only one arrow per page
- [ ] Arrow positioned correctly (centered, bottom)
- [ ] Focus state is visible

---

## Related Components

- **BackToTopButton** — Scrolls to top of page
- **HeroHome** — Common location for scroll indicator

---

## Related Documentation

- [ScrollBackToTop.md](./ScrollBackToTop.md) — Back to top button
- [../overview-components.md](../overview-components.md) — Component system

---

**Last Updated:** December 24, 2024
