# Animation Guidelines

**Version:** 1.0  
**Last Updated:** January 09, 2025

---

## 🎯 Philosophy

Animations should **enhance user experience** without causing distraction, motion sickness, or performance issues. This document defines **device-agnostic animation principles** with accessibility-first design.

**Core Principles:**
- **Accessibility-first** — Respect `prefers-reduced-motion`
- **Performance-conscious** — 60fps minimum, GPU-accelerated
- **Purpose-driven** — Every animation serves a function
- **Subtle & professional** — Enhance, don't distract
- **Progressive enhancement** — Graceful degradation on low-power devices

---

## ♿ Accessibility Requirements

### `prefers-reduced-motion` (WCAG 2.1 Level AAA)

**CRITICAL:** All animations MUST respect user motion preferences.

```css
/* Default: Full animations */
.element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Reduced motion: Disable animations */
@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

**React implementation:**
```tsx
import { useReducedMotion } from '../hooks/useReducedMotion';

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div
      style={{
        transition: prefersReducedMotion 
          ? 'none' 
          : 'transform 0.3s ease'
      }}
    >
      Content
    </div>
  );
}
```

---

## 🎨 Animation Categories

### 1. Micro-interactions (< 300ms)

**Purpose:** Immediate feedback for user actions

**Examples:**
- Button press
- Toggle switch
- Checkbox check
- Input focus

**Timing:**
- Duration: 100-200ms
- Easing: `ease-out` or `ease-in-out`

```css
.button {
  transition: background-color 0.15s ease-out, transform 0.15s ease-out;
}

.button:active {
  transform: scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
```

---

### 2. Transitions (300-500ms)

**Purpose:** State changes, page navigation

**Examples:**
- Modal open/close
- Dropdown expand
- Tab switch
- Page transition

**Timing:**
- Duration: 300-400ms
- Easing: `ease-in-out` or custom cubic-bezier

```css
.modal {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.modal.open {
  opacity: 1;
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .modal {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

---

### 3. Animations (500ms+)

**Purpose:** Storytelling, onboarding, loading

**Examples:**
- Scroll animations
- Parallax effects
- Loading spinners
- Success animations

**Timing:**
- Duration: 500-1000ms
- Easing: Custom cubic-bezier for personality

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .animate-in {
    animation: none;
  }
}
```

---

## ⚡ Performance Guidelines

### GPU-Accelerated Properties

**✅ SAFE TO ANIMATE (GPU-accelerated):**
- `transform` — translate, scale, rotate
- `opacity`
- `filter` — blur, brightness (use sparingly)

**❌ AVOID ANIMATING (CPU-intensive):**
- `width`, `height` — Use `transform: scale()` instead
- `top`, `left`, `right`, `bottom` — Use `transform: translate()` instead
- `margin`, `padding` — Use `transform` instead
- `color`, `background-color` — OK for short durations only

**Example: Performant slide-in**
```css
/* ❌ BAD - Animates layout */
.slide-in {
  transition: left 0.3s;
  left: -100%;
}
.slide-in.open {
  left: 0;
}

/* ✅ GOOD - GPU-accelerated */
.slide-in {
  transition: transform 0.3s;
  transform: translateX(-100%);
}
.slide-in.open {
  transform: translateX(0);
}
```

---

## 📏 Animation Duration Scale

### Standard Durations

```css
--duration-instant: 0ms;        /* Reduced motion fallback */
--duration-fast: 150ms;         /* Micro-interactions */
--duration-normal: 300ms;       /* Standard transitions */
--duration-slow: 500ms;         /* Emphasis animations */
--duration-slower: 800ms;       /* Loading, storytelling */
```

### Duration Guidelines

| Animation Type | Duration | Use Case |
|----------------|----------|----------|
| Instant | 0ms | Reduced motion |
| Fast | 100-200ms | Button press, hover |
| Normal | 300-400ms | Modal, dropdown, tab |
| Slow | 500-600ms | Scroll reveal, fade-in |
| Slower | 800-1000ms | Loading, onboarding |

---

## 🎭 Easing Functions

### Standard Easing

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Easing Usage Matrix

| Easing | Use Case | Example |
|--------|----------|---------|
| `ease-in` | Elements leaving screen | Modal close, dropdown collapse |
| `ease-out` | Elements entering screen | Modal open, tooltip appear |
| `ease-in-out` | Elements moving on screen | Tab switch, carousel slide |
| `linear` | Continuous motion | Loading spinner, progress bar |

**Custom easing examples:**
```css
/* Natural bounce */
.bounce {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Smooth deceleration */
.smooth {
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
```

---

## 🔄 Common Animation Patterns

### 1. Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
    opacity: 1;
  }
}
```

---

### 2. Slide In

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slideInUp 0.5s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .slide-in-up {
    animation: none;
  }
}
```

---

### 3. Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .scale-in {
    animation: none;
  }
}
```

---

### 4. Pulse (Attention)

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .pulse {
    animation: none;
  }
}
```

---

### 5. Shake (Error)

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.shake {
  animation: shake 0.4s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .shake {
    animation: none;
    /* Provide alternative visual feedback */
    border-color: var(--wp--preset--color--error);
  }
}
```

---

## 🎬 Scroll Animations

### Intersection Observer Pattern

```tsx
import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) return; // Skip for reduced motion
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [prefersReducedMotion]);
  
  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
}
```

**CSS:**
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-reveal.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 🎪 Loading States

### Skeleton Loaders

```tsx
<div 
  className="skeleton"
  aria-busy="true"
  aria-label="Loading content"
>
  {/* Content shape */}
</div>
```

**CSS:**
```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neutral-200) 25%,
    var(--wp--preset--color--neutral-100) 50%,
    var(--wp--preset--color--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: var(--radius);
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--wp--preset--color--neutral-200);
  }
}
```

---

### Spinner

```tsx
<div 
  className="spinner"
  role="status"
  aria-label="Loading"
>
  <span className="sr-only">Loading...</span>
</div>
```

**CSS:**
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--wp--preset--color--neutral-200);
  border-top-color: var(--wp--preset--color--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    /* Show static indicator */
    border-top-color: var(--wp--preset--color--primary);
  }
}
```

---

## 🎨 Hover Effects

**Desktop-only with hover detection:**

```css
/* Base state */
.card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

/* Hover state (desktop only) */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
  
  @media (hover: hover) {
    .card:hover {
      transform: none;
      /* Keep shadow for visual feedback */
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
  }
}
```

---

## 📱 Device-Specific Considerations

### Mobile

- ✅ **Shorter durations** — 200-300ms (feel snappier)
- ✅ **Touch feedback** — Button press animations
- ❌ **Avoid parallax** — Performance issues
- ❌ **Avoid hover effects** — No hover on touch

### Tablet

- ✅ **Medium durations** — 300-400ms
- ✅ **Scroll animations** — Intersection Observer
- ✅ **Touch OR hover** — Detect with `@media (hover: hover)`

### Desktop

- ✅ **Full animations** — 400-600ms
- ✅ **Hover effects** — Cards, buttons, links
- ✅ **Parallax** — Optional, performance-permitting
- ✅ **Scroll effects** — Smooth, subtle

---

## ✅ Best Practices

### Do's ✅

- ✅ **Respect `prefers-reduced-motion`** — CRITICAL accessibility requirement
- ✅ **Use GPU properties** — `transform`, `opacity`
- ✅ **Keep durations short** — 300-500ms maximum
- ✅ **Use easing functions** — Natural motion curves
- ✅ **Test performance** — 60fps minimum
- ✅ **Provide alternatives** — Visual feedback for reduced motion
- ✅ **Use Intersection Observer** — Scroll animations
- ✅ **Detect hover capability** — `@media (hover: hover)`

### Don'ts ❌

- ❌ **Don't ignore `prefers-reduced-motion`** — Legal/accessibility issue
- ❌ **Don't animate layout properties** — `width`, `height`, `top`, `left`
- ❌ **Don't use long durations** — > 1 second feels slow
- ❌ **Don't animate on every scroll** — Performance killer
- ❌ **Don't assume hover works** — Mobile doesn't support hover
- ❌ **Don't use `linear` easing** — Feels robotic (except spinners)
- ❌ **Don't animate everything** — Overwhelming, distracting

---

## 🔧 React Hooks

### `useReducedMotion` Hook

```tsx
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}
```

---

## 📚 Related Documentation

- **[viewport-enhancements.md](../design-tokens/viewport-enhancements.md)** - Responsive enhancements
- **[transitions.md](./transitions.md)** - Transition patterns
- **[gestures.md](./gestures.md)** - Touch and gesture interactions
- **[mobile/performance.md](../mobile/performance.md)** - Mobile performance

---

## Summary Checklist

Before implementing animations:

- [ ] `prefers-reduced-motion` respected
- [ ] GPU-accelerated properties used (`transform`, `opacity`)
- [ ] Durations appropriate (100-500ms)
- [ ] Easing functions applied
- [ ] Performance tested (60fps)
- [ ] Alternative feedback for reduced motion
- [ ] Hover detection used (`@media (hover: hover)`)
- [ ] Accessibility tested with screen readers

**Version:** 1.0  
**Last Updated:** January 09, 2025  
**System:** Device-agnostic with accessibility-first design  
**Performance:** 60fps minimum, GPU-accelerated
