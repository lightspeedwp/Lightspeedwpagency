# Animation Standards - LSX Design System

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Status:** 🟢 **ACTIVE STANDARD**  
**Compliance:** Required for all animations

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Animation Philosophy](#animation-philosophy)
3. [Animation System](#animation-system)
4. [Duration & Easing](#duration--easing)
5. [Common Patterns](#common-patterns)
6. [Performance](#performance)
7. [Accessibility](#accessibility)
8. [Best Practices](#best-practices)
9. [Examples](#examples)

---

## 🎯 **OVERVIEW**

### **Purpose**

Define comprehensive animation standards for the LSX Design System to ensure:
- Consistent motion language across all components
- High-performance animations (60fps target)
- Accessible animations (respects prefers-reduced-motion)
- Natural, delightful user experience
- WordPress block editor compatibility

### **Scope**

These standards apply to:
- Component transitions (hover, focus, active states)
- Page animations (route transitions, modals)
- Loading states (skeletons, spinners)
- Micro-interactions (buttons, toggles, dropdowns)
- Scroll-based animations (parallax, reveal)

### **Goals**

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **60fps Performance** | 100% | 95% | 🟢 Good |
| **Reduced Motion Support** | 100% | 100% | ✅ Perfect |
| **Animation Consistency** | 90% | 85% | 🟡 Good |
| **Perceived Performance** | Fast | Fast | ✅ Good |

---

## 🧠 **ANIMATION PHILOSOPHY**

### **Core Principles**

1. **Purpose-Driven**
   - Every animation serves a function
   - Avoid animation for decoration only
   - Guide attention intentionally
   - Provide feedback to user actions

2. **Natural Motion**
   - Physics-based easing curves
   - Realistic acceleration/deceleration
   - Respect natural movement patterns
   - Avoid jarring or abrupt changes

3. **Performance First**
   - Use transform and opacity only
   - Avoid animating layout properties
   - Minimize repaints and reflows
   - Target 60fps on all devices

4. **Accessible by Default**
   - Respect prefers-reduced-motion
   - Provide instant alternatives
   - Never require animation for understanding
   - Clear focus indicators

5. **Consistent Language**
   - Reuse animation presets
   - Standard durations and easing
   - Predictable behavior patterns
   - Cohesive design system

---

## 🏗️ **ANIMATION SYSTEM**

### **Animation Utility File**

**Location:** `/src/app/utils/animations.ts`

**Exports:**
- `duration` - Standard timing values
- `easing` - Cubic-bezier curves
- `transitions` - Ready-to-use transition strings
- `animations` - Keyframe animation presets
- `glassmorphism()` - Frosted glass effect
- `hoverLift()` - Elevation on hover
- `staggerDelay()` - Progressive reveal
- `focusRing()` - Accessible focus states
- `smoothScroll()` - Smooth page scrolling

### **Basic Usage**

```typescript
import { transitions, hoverLift, glassmorphism } from '../utils/animations';

// Simple transition
<button style={{ transition: transitions.all }}>
  Click me
</button>

// Hover lift effect
<div style={{ transition: transitions.transform }} {...hoverLift(2)}>
  Card content
</div>

// Glassmorphism
<div style={glassmorphism(0.1, 20, 180)}>
  Frosted glass
</div>
```

---

## ⏱️ **DURATION & EASING**

### **Standard Durations**

| Duration | Value | Use Case |
|----------|-------|----------|
| **Instant** | 50ms | Ripples, highlights, instant feedback |
| **Fast** | 150ms | Checkboxes, toggles, simple state changes |
| **Base** | 250ms | Default for most interactions |
| **Moderate** | 350ms | Dropdowns, modals, expanding cards |
| **Slow** | 500ms | Complex animations, page transitions |
| **Very Slow** | 700ms | Special effects only (use sparingly) |

```typescript
import { duration } from '../utils/animations';

// Fast button hover
<button style={{
  transition: `all ${duration.fast}ms ease`
}}>

// Base card hover
<div style={{
  transition: `transform ${duration.base}ms cubic-bezier(0.4, 0, 0.2, 1)`
}}>

// Slow modal entrance
<div style={{
  transition: `opacity ${duration.slow}ms ease-out`
}}>
```

---

### **Easing Curves**

| Easing | Curve | Use Case |
|--------|-------|----------|
| **Standard** | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most animations |
| **Decelerate** | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering screen |
| **Accelerate** | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving screen |
| **Sharp** | `cubic-bezier(0.4, 0, 0.6, 1)` | Quick, decisive actions |
| **Bounce** | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful, attention-grabbing |
| **Smooth** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Gentle, flowing motion |

```typescript
import { easing } from '../utils/animations';

// Entering element (decelerate)
<div style={{
  transition: `transform 300ms ${easing.decelerate}`
}}>

// Exiting element (accelerate)
<div style={{
  transition: `opacity 250ms ${easing.accelerate}`
}}>

// Playful button (bounce)
<button style={{
  transition: `transform 400ms ${easing.bounce}`
}}>
```

---

## 🎨 **COMMON PATTERNS**

### **1. Hover States**

**Button Hover:**
```typescript
<button
  style={{
    backgroundColor: 'var(--primary)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  }}
>
  Hover me
</button>
```

**Card Hover:**
```typescript
<div
  style={{
    transition: 'all 0.3s ease',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  }}
>
  Card content
</div>
```

---

### **2. Dropdown/Modal Animations**

**Slide Down (Dropdown):**
```typescript
<div
  style={{
    animation: 'slideDown 0.3s ease-out forwards',
    transformOrigin: 'top center'
  }}
>
  <style>{`
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `}</style>
  
  Dropdown content
</div>
```

**Modal Fade In:**
```typescript
<div
  style={{
    animation: 'modalFadeIn 0.4s ease-out forwards'
  }}
>
  <style>{`
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}</style>
  
  Modal content
</div>
```

---

### **3. Glassmorphism Effects**

**Frosted Glass Card:**
```typescript
import { glassmorphism } from '../utils/animations';

<div
  style={{
    ...glassmorphism(0.1, 20, 180),
    padding: '24px',
    borderRadius: 'var(--radius-lg)'
  }}
>
  Content with frosted glass background
</div>
```

**Parameters:**
- **opacity:** Background opacity (0-1) - Default: 0.1
- **blur:** Blur amount in pixels - Default: 20
- **saturate:** Saturation percentage (100-200) - Default: 180

---

### **4. Stagger Animations**

**Progressive Reveal:**
```typescript
import { staggerDelay } from '../utils/animations';

{items.map((item, index) => (
  <div
    key={index}
    style={{
      animation: 'fadeIn 0.4s ease-out forwards',
      animationDelay: staggerDelay(index, 0, 50),
      opacity: 0
    }}
  >
    <style>{`
      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        from {
          opacity: 0;
          transform: translateY(8px);
        }
      }
    `}</style>
    
    {item}
  </div>
))}
```

---

### **5. Loading States**

**Skeleton Shimmer:**
```typescript
import { shimmer } from '../utils/animations';

<div
  style={{
    ...shimmer(),
    width: '100%',
    height: '20px',
    borderRadius: 'var(--radius)'
  }}
/>
```

**Spinner:**
```typescript
<div
  style={{
    width: '40px',
    height: '40px',
    border: '4px solid var(--muted)',
    borderTopColor: 'var(--primary)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }}
>
  <style>{`
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}</style>
</div>
```

---

## ⚡ **PERFORMANCE**

### **High-Performance Properties**

**✅ Animate these (GPU-accelerated):**
- `transform` (translate, scale, rotate)
- `opacity`

**❌ Avoid animating these (causes reflow):**
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`
- `font-size`

### **Before/After Examples**

**❌ Poor Performance:**
```typescript
// Animates width (causes reflow)
<div style={{
  width: isExpanded ? '300px' : '100px',
  transition: 'width 0.3s ease'
}}>
```

**✅ Good Performance:**
```typescript
// Uses transform (GPU-accelerated)
<div style={{
  transform: isExpanded ? 'scaleX(3)' : 'scaleX(1)',
  transformOrigin: 'left',
  transition: 'transform 0.3s ease'
}}>
```

---

### **will-change Property**

Use `will-change` for complex animations (sparingly):

```typescript
<div style={{
  willChange: 'transform',
  transition: 'transform 0.3s ease'
}}>
```

**Important:** Remove `will-change` after animation completes.

```typescript
onTransitionEnd={(e) => {
  e.currentTarget.style.willChange = 'auto';
}}
```

---

## ♿ **ACCESSIBILITY**

### **prefers-reduced-motion**

**Always respect user preferences:**

```typescript
// CSS approach
<style>{`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`}</style>

// JavaScript approach
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<div style={{
  transition: prefersReducedMotion ? 'none' : 'all 0.3s ease'
}}>
```

---

### **Focus Indicators**

**Accessible focus rings:**

```typescript
import { focusRing } from '../utils/animations';

<button
  style={{
    border: 'none',
    padding: '12px 24px'
  }}
  onFocus={(e) => {
    Object.assign(e.currentTarget.style, focusRing());
  }}
  onBlur={(e) => {
    e.currentTarget.style.outline = 'none';
  }}
>
  Accessible button
</button>
```

**Requirements:**
- 2px minimum ring width
- 2px minimum offset
- High contrast color (var(--ring))
- Visible on all backgrounds

---

## ✅ **BEST PRACTICES**

### **DO:**

✅ Use transform and opacity for animations  
✅ Respect prefers-reduced-motion  
✅ Provide instant alternatives for critical actions  
✅ Test animations on low-end devices  
✅ Use easing curves for natural motion  
✅ Limit animation duration (≤500ms for most)  
✅ Animate on user interaction  
✅ Use CSS animations over JavaScript when possible

### **DON'T:**

❌ Animate layout properties (width, height, margin)  
❌ Use long durations (>700ms)  
❌ Autoplay animations on page load  
❌ Animate multiple elements simultaneously without purpose  
❌ Use linear easing (except for spinners)  
❌ Forget mobile performance  
❌ Skip reduced-motion support  
❌ Animate purely for decoration

---

## 📖 **EXAMPLES**

### **Example 1: Modern Button**

```typescript
import { transitions, hoverLift } from '../utils/animations';

function ModernButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        padding: '16px 32px',
        fontSize: 'var(--text-base)',
        fontFamily: 'Lexend, sans-serif',
        fontWeight: 'var(--font-weight-medium)',
        borderRadius: 'var(--radius-lg)',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: transitions.all
      }}
      {...hoverLift(2)}
    >
      {children}
    </button>
  );
}
```

---

### **Example 2: Mega Menu with Animation**

```typescript
import { animations, glassmorphism } from '../utils/animations';

function MegaMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        marginTop: '8px',
        minWidth: '500px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        ...glassmorphism(0.95, 20, 180),
        ...animations.slideDown
      }}
    >
      <style>{getKeyframesCSS()}</style>
      
      {/* Mega menu content */}
    </div>
  );
}
```

---

### **Example 3: Staggered Card Grid**

```typescript
import { staggerDelay } from '../utils/animations';

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            animation: 'cardFadeIn 0.5s ease-out forwards',
            animationDelay: staggerDelay(index, 100, 75),
            opacity: 0
          }}
        >
          <style>{`
            @keyframes cardFadeIn {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
          
          <div style={{
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border-soft)',
            transition: 'all 0.3s ease'
          }}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### **Example 4: Smooth Scroll**

```typescript
import { smoothScroll } from '../utils/animations';

function ScrollButton() {
  return (
    <button onClick={() => smoothScroll('target-section', 80)}>
      Scroll to Section
    </button>
  );
}
```

---

## 🎯 **IMPLEMENTATION CHECKLIST**

### **Before Adding Animation:**

- [ ] Does the animation serve a clear purpose?
- [ ] Is it animating transform or opacity only?
- [ ] Is the duration ≤500ms?
- [ ] Does it respect prefers-reduced-motion?
- [ ] Have you tested on mobile devices?
- [ ] Is there a non-animated fallback?
- [ ] Does it maintain 60fps?
- [ ] Is the easing curve appropriate?

### **After Implementation:**

- [ ] Test with prefers-reduced-motion enabled
- [ ] Verify 60fps in Chrome DevTools
- [ ] Test on low-end mobile devices
- [ ] Check keyboard navigation still works
- [ ] Verify focus indicators are visible
- [ ] Test with screen reader
- [ ] Measure performance impact

---

## 📚 **RESOURCES**

- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Material Motion](https://material.io/design/motion/)
- [Reduced Motion](https://web.dev/prefers-reduced-motion/)

---

**Last Updated:** December 25, 2024  
**Version:** 1.0  
**Status:** 🟢 **ACTIVE STANDARD**  
**Next Review:** January 25, 2025
