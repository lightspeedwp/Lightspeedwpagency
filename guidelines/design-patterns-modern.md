# Modern Design Patterns

**Version:** 1.1  
**Last Updated:** December 25, 2024  
**Status:** ✅ **UPDATED WITH ANIMATIONS**

---

## Overview

The LSX Design System incorporates modern design patterns that elevate the user experience while maintaining WordPress compatibility and accessibility standards.

**New in v1.1:**
- ✅ **Animation System** - Comprehensive animation utilities and standards
- ✅ **Glassmorphism Effects** - Frosted glass components with backdrop blur
- ✅ **Modern Mega Menus** - Animated dropdowns with smooth transitions
- ✅ **Hover/Focus States** - Consistent interaction patterns
- ✅ **Performance Optimization** - GPU-accelerated animations only

**See Also:**
- **[ANIMATION-STANDARDS.md](./ANIMATION-STANDARDS.md)** - Complete animation guidelines
- **[/src/app/utils/animations.ts](../src/app/utils/animations.ts)** - Animation utilities

---

## 🎬 Modern Animations

### Animation System

**Location:** `/src/app/utils/animations.ts`

**Features:**
- Standard durations and easing curves
- Glassmorphism effects
- Hover lift helpers
- Stagger animations
- Focus ring utilities
- Smooth scrolling

### Quick Start

```typescript
import { transitions, hoverLift, glassmorphism } from '../utils/animations';

// Simple transition
<button style={{ transition: transitions.all }}>
  Click me
</button>

// Hover lift effect
<div {...hoverLift(2)}>Card</div>

// Glassmorphism
<div style={glassmorphism(0.1, 20, 180)}>
  Frosted glass
</div>
```

### Animation Standards

**Durations:**
- **Instant:** 50ms (ripples, highlights)
- **Fast:** 150ms (toggles, checkboxes)
- **Base:** 250ms (default interactions)
- **Moderate:** 350ms (dropdowns, modals)
- **Slow:** 500ms (page transitions)

**Easing Curves:**
- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` - Default
- **Decelerate:** `cubic-bezier(0, 0, 0.2, 1)` - Entering
- **Accelerate:** `cubic-bezier(0.4, 0, 1, 1)` - Exiting
- **Bounce:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful

**Performance Rules:**
- ✅ Animate: `transform`, `opacity`
- ❌ Avoid: `width`, `height`, `margin`, `padding`
- ✅ Always respect `prefers-reduced-motion`
- ✅ Target 60fps on all devices

### Common Animations

**Slide Down (Dropdowns):**
```typescript
<div style={{
  animation: 'slideDown 0.3s ease-out forwards',
  transformOrigin: 'top center'
}}>
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
</div>
```

**Hover Lift:**
```typescript
<button
  style={{
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.18)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  }}
>
  Hover me
</button>
```

**Stagger Animation:**
```typescript
import { staggerDelay } from '../utils/animations';

{items.map((item, i) => (
  <div
    key={i}
    style={{
      animation: 'fadeIn 0.4s ease-out forwards',
      animationDelay: staggerDelay(i, 100, 50),
      opacity: 0
    }}
  >
    {item}
  </div>
))}
```

---

## 🌫️ Glassmorphism

### Concept

Frosted glass effect with backdrop blur for modern, depth-aware UI components.

### Implementation

```typescript
import { glassmorphism } from '../utils/animations';

<div
  style={{
    ...glassmorphism(0.1, 20, 180),
    padding: '24px',
    borderRadius: 'var(--radius-lg)'
  }}
>
  Frosted glass content
</div>
```

### Parameters

- **opacity:** `0.1` - Background opacity (0-1)
- **blur:** `20` - Blur amount in pixels
- **saturate:** `180` - Saturation percentage (100-200)

### Browser Support

- ✅ Chrome 76+
- ✅ Edge 79+
- ✅ Safari 9+
- ✅ Firefox 103+
- ❌ IE 11 (graceful degradation)

### Examples

**Mega Menu:**
```typescript
<div style={{
  ...glassmorphism(0.95, 20, 180),
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
}}>
  Menu content
</div>
```

**Hero Button:**
```typescript
<button style={{
  ...glassmorphism(0.1, 10, 150),
  border: '2px solid rgba(255, 255, 255, 0.3)',
  color: 'var(--primary-foreground)',
  padding: '14px 30px'
}}>
  Get Started
</button>
```

---

## 🎨 Fluid Typography

### Concept
Typography scales smoothly between breakpoints using `clamp()` instead of fixed sizes at each breakpoint.

### Implementation

**CSS Variables (Base Sizes):**
```css
--text-h1: 60px;
--text-h2: 32px;
--text-h3: 24px;
--text-h4: 20px;
--text-base: 16px;
--text-small: 12px;
```

**Fluid Typography Pattern:**
```tsx
<h1 style={{
  fontSize: 'clamp(32px, 5vw, 60px)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: '1.2',
  letterSpacing: '-0.02em'
}}>
  Responsive Heading
</h1>
```

### Fluid Scale Presets

| Element | Minimum | Preferred | Maximum | Usage |
|---------|---------|-----------|---------|-------|
| H1 (Hero) | 32px | 5vw | 60px | Hero sections, page titles |
| H1 (Standard) | 28px | 4vw | 48px | Standard page headings |
| H2 | 24px | 3.5vw | 40px | Section headings |
| H3 | 20px | 2.5vw | 32px | Subsection headings |
| Body Large | 18px | 1.5vw | 20px | Lead paragraphs, intros |
| Body | 16px | 1vw | 16px | Standard body text |

### Guidelines

- **Always use `clamp()`** for headings in hero sections and large text areas
- **Maintain readability** - Don't scale below 16px for body text
- **Tighter tracking** - Use negative letter-spacing on large headings (`-0.02em`)
- **Line height scales** - Larger text needs tighter line-height (1.1-1.2)

---

## 💎 Glassmorphism

### Concept
Semi-transparent backgrounds with backdrop blur create depth and modern aesthetics while maintaining readability.

### CSS Variables

**Light Mode:**
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-bg-strong: rgba(255, 255, 255, 0.15);
--glass-border: rgba(0, 0, 0, 0.08);
--glass-text: rgba(9, 9, 9, 1);
```

**Dark Mode:**
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-bg-strong: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.12);
--glass-text: rgba(255, 255, 255, 1);
```

### Implementation

**Glass Card:**
```tsx
<div style={{
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(16px)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-lg)',
  padding: '32px',
  color: 'var(--glass-text)'
}}>
  Glass card content
</div>
```

**Strong Glass (More Opaque):**
```tsx
<div style={{
  background: 'var(--glass-bg-strong)',
  backdropFilter: 'blur(20px)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-lg)'
}}>
  Stronger glass effect
</div>
```

### Use Cases

✅ **Good Uses:**
- Navigation overlays
- Modal dialogs
- Card overlays on images
- Floating UI elements
- Tooltips and popovers

❌ **Avoid:**
- Primary content areas (readability)
- Form inputs (confusion with disabled state)
- Small text areas (insufficient contrast)

### Accessibility Notes

- **Contrast:** Always test text on glass backgrounds meets 4.5:1 ratio
- **Fallback:** Provide solid background for browsers without `backdrop-filter` support
- **Motion:** Glassmorphism animations respect `prefers-reduced-motion`

---

## 🌈 Gradient Orbs

### Concept
Large, soft gradient shapes add visual interest to backgrounds without overwhelming content.

### Implementation

**Gradient Orb Pattern:**
```tsx
{/* Background gradient orbs */}
<div 
  style={{
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(30, 106, 255, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0
  }}
  aria-hidden="true"
/>
```

### Orb Variations

**Primary Orb:**
```css
background: radial-gradient(circle, rgba(30, 106, 255, 0.15) 0%, transparent 70%);
```

**Secondary Orb:**
```css
background: radial-gradient(circle, rgba(123, 231, 255, 0.12) 0%, transparent 70%);
```

**Accent Orb:**
```css
background: radial-gradient(circle, rgba(123, 231, 255, 0.1) 0%, transparent 70%);
```

**Multi-Color Orb:**
```css
background: radial-gradient(
  circle at 30% 30%, 
  rgba(30, 106, 255, 0.15) 0%, 
  rgba(123, 231, 255, 0.1) 50%, 
  transparent 70%
);
```

### Positioning Patterns

**Hero Section:**
```tsx
{/* Top-right orb */}
<div style={{ top: '-10%', right: '-5%', width: '600px', height: '600px' }} />

{/* Bottom-left orb */}
<div style={{ bottom: '-15%', left: '-10%', width: '700px', height: '700px' }} />
```

**Full-Page Layout:**
```tsx
{/* Top orb */}
<div style={{ top: '5%', right: '10%', width: '500px', height: '500px' }} />

{/* Middle orb */}
<div style={{ top: '40%', left: '5%', width: '400px', height: '400px' }} />

{/* Bottom orb */}
<div style={{ bottom: '10%', right: '15%', width: '550px', height: '550px' }} />
```

### Guidelines

- **Use sparingly** - 2-3 orbs maximum per section
- **Low opacity** - 0.08-0.15 opacity to avoid overwhelming content
- **Large blur** - 40-80px blur for soft edges
- **Pointer events none** - Ensure orbs don't block interactions
- **aria-hidden** - Decorative, hidden from screen readers
- **Overflow hidden** - Use on parent container to prevent layout shift

---

## 🎴 Elevated Cards

### Concept
Cards with subtle shadows, soft borders, and hover effects create depth and interactivity.

### CSS Variables

**Shadows:**
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);
--shadow-primary: 0 4px 12px rgba(30, 106, 255, 0.3);
```

**Soft Borders:**
```css
--border-soft: rgba(0, 0, 0, 0.08);
--border-extra-soft: rgba(0, 0, 0, 0.04);
```

### Implementation

**Standard Elevated Card:**
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  padding: '24px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}}>
  Card content
</div>
```

**Elevated Card with Hover:**
```tsx
<div 
  style={{
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
    e.currentTarget.style.transform = 'translateY(-4px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  Interactive card
</div>
```

**Primary Elevated Card:**
```tsx
<div style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: '1px solid var(--border-extra-soft)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-primary)',
  padding: '32px'
}}>
  Primary card with colored shadow
</div>
```

### Elevation Levels

| Level | Shadow | Use Case |
|-------|--------|----------|
| Flat | `none` | Default, no elevation |
| Low | `--shadow-sm` | Subtle cards, list items |
| Medium | `--shadow-md` | Standard cards, panels |
| High | `--shadow-lg` | Modals, popovers |
| Highest | `--shadow-xl` | Overlays, notifications |
| Hover | `--shadow-hover` | Interactive card hover state |

---

## 🎭 Soft Borders

### Concept
Ultra-subtle borders (0.04-0.08 opacity) create visual separation without harsh lines.

### CSS Variables

```css
--border: rgba(117, 117, 117, 1);           /* Standard border */
--border-soft: rgba(0, 0, 0, 0.08);         /* Soft border */
--border-extra-soft: rgba(0, 0, 0, 0.04);   /* Extra soft border */
```

### Implementation

**Soft Border Card:**
```tsx
<div style={{
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px'
}}>
  Soft bordered card
</div>
```

**Extra Soft Divider:**
```tsx
<hr style={{
  border: 'none',
  borderTop: '1px solid var(--border-extra-soft)',
  margin: '32px 0'
}} />
```

### Usage Guidelines

| Border Type | Opacity | Use Case |
|-------------|---------|----------|
| `--border` | 100% | Form inputs, strong dividers |
| `--border-soft` | 8% | Cards, subtle containers |
| `--border-extra-soft` | 4% | Section dividers, very subtle separation |

---

## ✨ Smooth Animations

### Concept
Smooth, physics-based animations enhance user experience without being distracting.

### Easing Functions

```css
/* Cubic bezier curves for natural motion */
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);      /* Deceleration */
--ease-in: cubic-bezier(0.4, 0, 1, 1);         /* Acceleration */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);   /* Both */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring effect */
```

### Common Animations

**Fade In:**
```tsx
<div style={{
  animation: 'fadeIn 0.5s var(--ease-out) forwards',
  opacity: 0
}}>
  Content
</div>

<style>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`}</style>
```

**Slide Up:**
```tsx
<div style={{
  animation: 'slideUp 0.6s var(--ease-out) forwards',
  opacity: 0,
  transform: 'translateY(20px)'
}}>
  Content
</div>

<style>{`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
```

**Hover Scale:**
```tsx
<div style={{
  transition: 'transform 0.3s var(--ease-out)',
  cursor: 'pointer'
}}
onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  Hover me
</div>
```

### Reduced Motion Support

**Always respect user preferences:**
```tsx
<div style={{
  transition: 'transform 0.3s var(--ease-out)',
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none'
  }
}}>
  Content with respectful animations
</div>
```

**CSS Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Duration Guidelines

| Duration | Use Case |
|----------|----------|
| 150ms | Micro-interactions (hover, focus) |
| 300ms | Standard transitions (modal open/close) |
| 500ms | Content reveals (fade in, slide in) |
| 800ms | Complex animations (multi-step) |

---

## 🌐 Responsive Patterns

### Mobile-First Breakpoints

```tsx
// Tailwind breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (desktops)
xl: '1280px'  // Extra large devices
2xl: '1536px' // 2X large devices
```

### Responsive Grid Pattern

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Responsive Typography

```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

**Better: Use fluid typography with clamp():**
```tsx
<h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
  Fluid Responsive Heading
</h1>
```

---

## 🎯 Pattern Combinations

### Hero Section with All Modern Patterns

```tsx
<Section spacing="xl" style={{ position: 'relative', overflow: 'hidden' }}>
  {/* Gradient Orbs */}
  <div 
    style={{
      position: 'absolute',
      top: '-10%',
      right: '-5%',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(30, 106, 255, 0.15) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      pointerEvents: 'none',
      zIndex: 0
    }}
    aria-hidden="true"
  />

  <Container>
    {/* Glass Card */}
    <div style={{
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '48px',
      maxWidth: '800px',
      margin: '0 auto',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {/* Fluid Typography */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 60px)',
        fontFamily: 'Lexend, sans-serif',
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
        marginBottom: '24px',
        animation: 'fadeIn 0.6s var(--ease-out)'
      }}>
        Modern Hero Section
      </h1>

      <p style={{
        fontSize: 'clamp(16px, 1.5vw, 20px)',
        lineHeight: '1.7',
        marginBottom: '32px',
        opacity: 0.9
      }}>
        Combining all modern patterns for maximum impact
      </p>

      {/* Elevated Button */}
      <button style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        padding: '16px 32px',
        borderRadius: 'var(--radius)',
        border: 'none',
        boxShadow: 'var(--shadow-primary)',
        transition: 'all 0.3s var(--ease-out)',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  </Container>
</Section>
```

---

## ✅ Best Practices

### Do's ✅

- **Use fluid typography** for responsive scaling
- **Apply glassmorphism** to overlays and floating UI
- **Add gradient orbs** to hero sections (2-3 max)
- **Use soft borders** on cards for modern aesthetic
- **Elevate interactive cards** with shadows and hover effects
- **Respect reduced motion** preferences
- **Test contrast ratios** on glass backgrounds

### Don'ts ❌

- **Don't overuse glassmorphism** - Only for overlays
- **Don't add too many orbs** - 2-3 maximum per section
- **Don't animate essential content** - Respect accessibility
- **Don't use hard borders** everywhere - Prefer soft borders
- **Don't scale text too small** - Minimum 16px for body
- **Don't forget fallbacks** - Solid backgrounds for no backdrop-filter

---

**Last Updated:** December 25, 2024  
**Maintained By:** LSX Design Team  
**WordPress Compatibility:** FSE (Full Site Editing)