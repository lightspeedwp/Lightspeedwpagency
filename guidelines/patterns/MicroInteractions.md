# Micro-Interactions Pattern

**Pattern Name:** Micro-Interactions with useMicroInteractions  
**Category:** Interaction Patterns  
**WordPress Mapping:** Theme JavaScript (progressive enhancement)  
**Accessibility:** WCAG 2.1 AA compliant (respects reduced motion)

---

## 📋 Overview

Add professional hover effects and interactions to interactive elements using the `useMicroInteractions` hook. Provides subtle visual feedback that enhances user experience without compromising accessibility.

**Status:** ✅ Production Ready  
**Created:** December 28, 2024  
**Last Updated:** December 28, 2024

---

## 🎯 Use Cases

1. **Buttons:** Subtle lift effect (2px)
2. **Cards:** Pronounced lift effect (4-12px)
3. **Interactive elements:** Scale or glow effects
4. **Form fields:** Focus and validation feedback

---

## 🛠️ Implementation

### **For Buttons (Subtle Lift)**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';

export function Button({ children, disabled, ...props }) {
  const { hoverLift } = useMicroInteractions({ 
    scaleOnHover: 1.01, 
    duration: 150 
  });
  const liftProps = disabled ? {} : hoverLift(2); // 2px lift

  return (
    <button 
      {...props}
      {...liftProps}
      style={{ 
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        padding: '12px 24px',
        borderRadius: 'var(--radius)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        ...props.style, 
        ...liftProps.style 
      }}
    >
      {children}
    </button>
  );
}
```

---

### **For Cards (Pronounced Lift)**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';

function PortfolioCard({ item }) {
  const { hoverLift } = useMicroInteractions({ 
    scaleOnHover: 1.01, 
    duration: 300 
  });
  const liftProps = hoverLift(12); // 12px pronounced lift

  return (
    <article 
      {...liftProps}
      style={{ 
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        ...liftProps.style 
      }}
      onClick={() => navigate(item.slug)}
    >
      <img src={item.image} alt={item.title} />
      <h3 style={{ 
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-h3)',
        color: 'var(--card-foreground)'
      }}>
        {item.title}
      </h3>
      <p style={{ 
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--muted-foreground)'
      }}>
        {item.description}
      </p>
    </article>
  );
}
```

---

## 📖 Hook API

### **Import**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
```

---

### **Options**

```tsx
interface MicroInteractionOptions {
  scaleOnHover?: number;           // Default: 1.02
  scaleOnPress?: number;           // Default: 0.98
  duration?: number;               // Default: 150ms
  respectReducedMotion?: boolean;  // Default: true
}
```

---

### **Methods**

```tsx
const {
  hoverScale,   // Returns { onMouseEnter, onMouseLeave, style }
  activePress,  // Returns { onMouseDown, onMouseUp, style }
  hoverLift,    // (px: number) => Returns { onMouseEnter, onMouseLeave, style }
  hoverGlow     // Returns { onMouseEnter, onMouseLeave, style }
} = useMicroInteractions(options);
```

---

### **Method Details**

#### **hoverScale()**

Applies a subtle scale transform on hover.

```tsx
const { hoverScale } = useMicroInteractions({ scaleOnHover: 1.02 });
const scaleProps = hoverScale();

<div {...scaleProps} style={{ ...scaleProps.style }}>
  Hover to scale
</div>
```

**Returns:**
```tsx
{
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  style: {
    transform: 'scale(1.02)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
}
```

---

#### **activePress()**

Applies a press-down effect on mouse down.

```tsx
const { activePress } = useMicroInteractions({ scaleOnPress: 0.98 });
const pressProps = activePress();

<button {...pressProps} style={{ ...pressProps.style }}>
  Press me
</button>
```

**Returns:**
```tsx
{
  onMouseDown: () => void,
  onMouseUp: () => void,
  onMouseLeave: () => void,
  style: {
    transform: 'scale(0.98)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
}
```

---

#### **hoverLift(pixels)**

Applies a vertical lift (translateY) on hover.

```tsx
const { hoverLift } = useMicroInteractions({ duration: 300 });
const liftProps = hoverLift(8); // 8px lift

<div {...liftProps} style={{ ...liftProps.style }}>
  Hover to lift
</div>
```

**Parameters:**
- `pixels` (number): Amount to lift (negative translateY)

**Returns:**
```tsx
{
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  style: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
}
```

---

#### **hoverGlow()**

Applies a glow effect (enhanced box-shadow) on hover.

```tsx
const { hoverGlow } = useMicroInteractions();
const glowProps = hoverGlow();

<div {...glowProps} style={{ ...glowProps.style }}>
  Hover to glow
</div>
```

**Returns:**
```tsx
{
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  style: {
    boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.5)',
    transition: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
}
```

---

## 🎨 Best Practices

### **Lift Amounts**

| Element Type | Lift Amount | Use Case |
|-------------|-------------|----------|
| Buttons | 2px | Subtle feedback |
| Small cards | 4-6px | Moderate emphasis |
| Large cards | 8-12px | Pronounced effect |
| Hero elements | 12-16px | Dramatic impact |

---

### **Durations**

| Duration | Feel | Use Case |
|----------|------|----------|
| 150ms | Quick, responsive | Buttons, small elements |
| 300ms | Smooth, elegant | Cards, medium elements |
| 400ms | Deliberate | Large elements, modals |

---

### **Scale Factors**

| Factor | Effect | Use Case |
|--------|--------|----------|
| 1.01 | Barely noticeable | Subtle feedback |
| 1.02 | Noticeable | Standard hover |
| 1.05 | Very noticeable | Strong emphasis |

---

### **Reduced Motion**

Always respect user preferences:

```tsx
const { hoverLift } = useMicroInteractions({ 
  respectReducedMotion: true  // ✅ DEFAULT
});
```

**Behavior:**
- If user has `prefers-reduced-motion: reduce` enabled
- Hook returns empty object `{}`
- No animations, no transforms
- Functionality remains unchanged

---

### **Disabled States**

Always check disabled state before applying effects:

```tsx
const { hoverLift } = useMicroInteractions();
const liftProps = disabled ? {} : hoverLift(2);  // ✅ CORRECT

// ❌ INCORRECT (don't do this)
const liftProps = hoverLift(2);
```

---

## ♿ Accessibility

### **WCAG 2.1 AA Requirements**

- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigation unaffected
- ✅ Focus states remain visible
- ✅ Screen readers unaffected
- ✅ Touch targets remain 44×44px minimum

---

### **Testing Checklist**

**Reduced Motion:**
- [ ] Enable reduced motion in OS settings
- [ ] Verify no animations occur
- [ ] Verify functionality still works

**Keyboard Navigation:**
- [ ] Tab reaches all elements
- [ ] Enter/Space activates elements
- [ ] Focus rings visible

**Screen Readers:**
- [ ] Element labels read correctly
- [ ] No unwanted announcements
- [ ] Functionality clear

**Touch Devices:**
- [ ] No hover effects on touch
- [ ] Tap interactions work
- [ ] Touch targets ≥ 44×44px

---

## 🚀 WordPress Implementation

### **Vanilla JavaScript**

```javascript
// File: assets/js/micro-interactions.js

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  if (prefersReducedMotion) return; // ✅ Respect user preference

  // Button hover lift
  document.querySelectorAll('.wp-block-button__link').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
      button.style.transition = 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
  });

  // Card hover lift
  document.querySelectorAll('.portfolio-card, .product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px)';
      card.style.boxShadow = 'var(--shadow-xl)';
      card.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'var(--shadow-sm)';
    });
  });
});
```

---

### **Enqueue Script**

```php
// File: functions.php

function lsx_enqueue_micro_interactions() {
  wp_enqueue_script(
    'lsx-micro-interactions',
    get_template_directory_uri() . '/assets/js/micro-interactions.js',
    array(), // No dependencies
    '1.0.0',
    true // Load in footer
  );
}
add_action('wp_enqueue_scripts', 'lsx_enqueue_micro_interactions');
```

---

### **CSS Support**

```css
/* File: style.css */

/* Ensure smooth transitions for all interactive elements */
.wp-block-button__link,
.portfolio-card,
.product-card {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .wp-block-button__link,
  .portfolio-card,
  .product-card {
    transition: none;
    transform: none !important;
  }
}
```

---

## 📊 Performance

### **Optimizations**

✅ **GPU-Accelerated:**
- Uses `transform` (composited layer)
- Uses `opacity` (composited layer)
- No layout recalculation
- No paint flashing

✅ **Minimal Overhead:**
- ~3KB total bundle size
- 2 state variables per component
- Event listeners cleaned up on unmount

✅ **Best Practices:**
- Keep transitions under 400ms
- Avoid animating width/height
- Avoid animating margin/padding
- Always use `will-change` for transforms

---

### **Performance Checklist**

**Chrome DevTools → Rendering:**
- [ ] Paint flashing disabled on hover
- [ ] Only composited layers change
- [ ] No full-page repaints

**Chrome DevTools → Performance:**
- [ ] Hover latency < 50ms
- [ ] Transition completes in specified duration
- [ ] No layout thrashing
- [ ] No memory leaks

**Lighthouse:**
- [ ] Performance score: 90+
- [ ] No accessibility warnings
- [ ] No best practices warnings

---

## 📝 Code Examples

### **Example 1: Simple Button**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';

function CTAButton({ children, href }) {
  const { hoverLift } = useMicroInteractions({ duration: 150 });
  const liftProps = hoverLift(2);

  return (
    <a 
      href={href}
      {...liftProps}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        padding: '12px 24px',
        borderRadius: 'var(--radius)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        textDecoration: 'none',
        ...liftProps.style
      }}
    >
      {children}
    </a>
  );
}
```

---

### **Example 2: Portfolio Card**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
import { useNavigation } from '../../contexts/NavigationContext';

function PortfolioCard({ project }) {
  const { navigateTo } = useNavigation();
  const { hoverLift } = useMicroInteractions({ duration: 300 });
  const liftProps = hoverLift(12);

  return (
    <article 
      {...liftProps}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        ...liftProps.style
      }}
      onClick={() => navigateTo(project.slug)}
    >
      <div style={{ position: 'relative', paddingTop: '66.67%' }}>
        <img 
          src={project.image}
          alt={project.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h3)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--card-foreground)',
          marginBottom: '12px'
        }}>
          {project.title}
        </h3>
        
        <p style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          lineHeight: '1.6'
        }}>
          {project.description}
        </p>
      </div>
    </article>
  );
}
```

---

### **Example 3: Form Field with Glow**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';

function FormField({ label, type, ...props }) {
  const { hoverGlow } = useMicroInteractions();
  const glowProps = hoverGlow();

  return (
    <div className="flex flex-col gap-2">
      <label style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--foreground)'
      }}>
        {label}
      </label>
      
      <input 
        type={type}
        {...props}
        {...glowProps}
        style={{
          padding: '12px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          ...glowProps.style
        }}
      />
    </div>
  );
}
```

---

### **Example 4: Internal Card Component Pattern**

```tsx
import { useMicroInteractions } from '../../hooks/useMicroInteractions';

export function ArchiveTemplate() {
  const items = [/* ... */];

  // Internal card component with micro-interactions
  function ArchiveCard({ item }) {
    const { hoverLift } = useMicroInteractions({ duration: 300 });
    const liftProps = hoverLift(8);

    return (
      <article {...liftProps} style={{ ...liftProps.style }}>
        {/* Card content */}
      </article>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(item => (
        <ArchiveCard key={item.id} item={item} />
      ))}
    </div>
  );
}
```

---

## 🔗 Related Patterns

- **[Button Block](../blocks/design/buttons.md)** - Button component implementation
- **[Focus Management](./FocusManagement.md)** - Modal and dialog focus
- **[Form Validation](./FormValidation.md)** - Form error handling
- **[Loading States](./LoadingStates.md)** - Skeleton and spinner patterns

---

## 📚 References

- **Hook Implementation:** `/src/app/hooks/useMicroInteractions.ts`
- **Button Component:** `/src/app/components/blocks/design/Buttons.tsx`
- **Portfolio Template:** `/src/app/components/templates/PortfolioArchiveTemplate.tsx`
- **EnquiryModal:** `/src/app/components/ui/EnquiryModal.tsx`

---

**Last Updated:** December 28, 2024  
**Status:** ✅ Production Ready  
**WCAG Level:** AA Compliant
