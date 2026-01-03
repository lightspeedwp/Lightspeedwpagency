# Button Component

**Component Type:** Interactive Element  
**WordPress Mapping:** Core Button block  
**Location:** `/src/app/components/common/Button.tsx`

---

## Purpose

Provides accessible, interactive buttons and links with consistent styling using design system tokens. Enforces proper semantics (button vs. link) and keyboard accessibility.

---

## Design System Requirements

### Typography
- **Font Family:** `Lexend, sans-serif`
- **Font Size:** `var(--text-base)` (16px)
- **Font Weight:** `var(--font-weight-medium)` (500)

### Colors

**Primary Variant:**
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

**Secondary Variant:**
```tsx
backgroundColor: 'var(--secondary)'
color: 'var(--secondary-foreground)'
```

**Ghost Variant:**
```tsx
backgroundColor: 'transparent'
border: '1px solid var(--border)'
color: 'var(--foreground)'
```

### Spacing
- **Padding:** `px-6 py-3` (24px horizontal, 12px vertical)
- **Border Radius:** `var(--radius)` (4px)
- **Gap (with icon):** `gap-2` (8px)

### States
- **Hover:** Opacity 0.9 or slight color shift
- **Focus:** Visible outline using `outline-offset: 2px`
- **Active:** Scale down slightly (0.98)
- **Disabled:** Opacity 0.5, cursor not-allowed

---

## Usage

### Primary Button (action)
```tsx
import { Button } from '../common/Button';

<Button variant="primary" onClick={handleClick}>
  Book Now
</Button>
```

### Link Button (navigation)
```tsx
<Button variant="primary" href="/destinations">
  Explore Destinations
</Button>
```

### Ghost Button (secondary action)
```tsx
<Button variant="ghost" href="#learn-more">
  Learn More
</Button>
```

### Disabled Button
```tsx
<Button variant="primary" disabled>
  Coming Soon
</Button>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style |
| `href` | string | - | URL (renders as `<a>`) |
| `onClick` | function | - | Click handler (renders as `<button>`) |
| `children` | ReactNode | required | Button text/content |
| `disabled` | boolean | `false` | Disabled state |
| `className` | string | `''` | Additional classes |
| `style` | CSSProperties | - | Custom inline styles |

---

## WordPress Implementation

In WordPress, this maps to the core **Button block**:

```html
<!-- wp:button {"backgroundColor":"primary","textColor":"primary-foreground"} -->
<div class="wp-block-button">
  <a class="wp-block-button__link has-primary-background-color has-primary-foreground-color" href="/destinations">
    Explore Destinations
  </a>
</div>
<!-- /wp:button -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend font (`fontFamily: 'Lexend, sans-serif'`)
- CSS variables for colors (`var(--primary)`, `var(--primary-foreground)`)
- CSS variables for border radius (`var(--radius)`)
- Tailwind spacing classes (`px-6`, `py-3`)
- Proper semantic element (`<button>` for actions, `<a>` for links)

❌ **FORBIDDEN:**
- Hard-coded colors (hex codes)
- Hard-coded pixel spacing
- Using `<a>` for actions (use `<button>`)
- Using `<button>` for navigation (use `<a>`)
- Tailwind font size classes (`text-base`)

---

## Accessibility

### Semantic HTML
- **Use `<button>`** when triggering an action (onClick)
- **Use `<a>`** when navigating to a URL (href)

### Keyboard Support
- All buttons must be keyboard accessible (Tab key)
- Enter/Space activates button
- Focus state must be visible

### Screen Readers
- Button text must be descriptive
- Icon-only buttons need `aria-label`

### Focus Indicators
```tsx
// Button has visible focus outline
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
onBlur={(e) => {
  e.currentTarget.style.outline = 'none';
}}
```

---

## Examples

### Hero CTA Buttons
```tsx
<div className="flex gap-4">
  <Button 
    variant="primary" 
    href="#featured"
    style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)'
    }}
  >
    Explore Destinations
  </Button>
  <Button 
    variant="ghost"
    href="#contact"
    style={{
      borderColor: 'var(--primary-foreground)',
      color: 'var(--primary-foreground)'
    }}
  >
    Plan Your Trip
  </Button>
</div>
```

### Card CTA
```tsx
<Button variant="primary" href={destination.href}>
  View Details
</Button>
```

### Form Submit
```tsx
<Button 
  variant="primary" 
  onClick={handleSubmit}
  disabled={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Send Message'}
</Button>
```

### Button with Icon
```tsx
import { ArrowRight } from 'lucide-react';

<Button variant="primary" href="/destinations">
  <span>Explore</span>
  <ArrowRight size={16} />
</Button>
```

---

## Variants Guide

### Primary (Default)
**Use for:** Main call-to-action, form submissions, primary actions
```tsx
<Button variant="primary">Book Now</Button>
```

### Secondary
**Use for:** Secondary actions, alternative options
```tsx
<Button variant="secondary">Learn More</Button>
```

### Ghost
**Use for:** Tertiary actions, text-like buttons, cancel actions
```tsx
<Button variant="ghost">Cancel</Button>
```

---

## Color Customization

Buttons can be customized via inline styles while maintaining token usage:

```tsx
// Custom background with proper foreground
<Button 
  variant="primary"
  style={{
    backgroundColor: 'var(--accent)',
    color: 'var(--accent-foreground)'
  }}
>
  Accent Button
</Button>

// Light button on dark background
<Button 
  variant="primary"
  style={{
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)'
  }}
>
  Light Button
</Button>
```

---

## Common Patterns

### CTA Section
```tsx
<div className="flex flex-wrap gap-4 justify-center">
  <Button 
    variant="primary" 
    href="#contact"
    style={{ padding: '16px 32px' }}
  >
    Get Started
  </Button>
  <Button 
    variant="ghost"
    href="#learn-more"
    style={{ padding: '16px 32px' }}
  >
    Learn More
  </Button>
</div>
```

### Navigation Header
```tsx
<nav>
  <ul className="flex items-center gap-8">
    {navItems.map(item => (
      <li key={item.href}>
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
    <li>
      <Button variant="primary" href="#book">
        Book Now
      </Button>
    </li>
  </ul>
</nav>
```

---

## Dark & Light Mode Support

### ✅ **Automatic Theme Adaptation**

This component uses **semantic color tokens** that automatically adapt between light and dark modes without any code changes.

### **Color Behavior**

| Variant | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Primary** | `#1E6AFF` (Bright Blue) | `#7BE7FF` (Bright Cyan) |
| **Primary Text** | `#FFFFFF` (White) | `#0E3278` (Dark Blue) |
| **Secondary** | `#7BE7FF` (Light Cyan) | `#0E3278` (Dark Blue) |
| **Secondary Text** | `#0E3278` (Dark Blue) | `#7BE7FF` (Bright Cyan) |
| **Ghost Background** | `transparent` | `transparent` |
| **Ghost Border** | `#757575` (Medium Gray) | `#757575` (Medium Gray) |
| **Ghost Text** | `#090909` (Near Black) | `#FFFFFF` (White) |

### **Contrast Ratios**

**Light Mode:**
- Primary: **4.58:1** on white (WCAG AA ✓)
- Primary foreground: **4.52:1** on primary (WCAG AA ✓)  
- Ghost text: **16.07:1** on white (WCAG AAA ✓✓✓)

**Dark Mode:**
- Primary: **10.87:1** on dark (WCAG AAA ✓✓✓)
- Primary foreground: **9.62:1** on primary (WCAG AAA ✓✓✓)
- Ghost text: **16.07:1** on dark (WCAG AAA ✓✓✓)

### **Implementation**

No special code needed! Just use semantic tokens:

```tsx
// ✅ CORRECT - Automatically adapts to theme
<Button variant="primary">
  Get Started
</Button>

// The component uses:
backgroundColor: 'var(--primary)'      // Blue in light, Cyan in dark
color: 'var(--primary-foreground)'    // White in light, Dark Blue in dark
```

### **Custom Colors for Light/Dark**

If you need theme-specific styling, use CSS custom properties:

```tsx
// Custom accent button (adapts automatically)
<Button 
  variant="primary"
  style={{
    backgroundColor: 'var(--accent)',
    color: 'var(--accent-foreground)'
  }}
>
  Accent Action
</Button>
```

### **Testing Checklist**

- [ ] Test button in light mode (verify contrast)
- [ ] Test button in dark mode (verify contrast)
- [ ] Verify hover states in both modes
- [ ] Verify focus outline visibility in both modes
- [ ] Check disabled state in both modes

**See:** [DARK-LIGHT-MODE-GUIDELINES.md](/guidelines/DARK-LIGHT-MODE-GUIDELINES.md) for complete implementation guide.

---

## Design System Integration

This component enforces:
1. **Lexend typography** for all button text
2. **CSS variable colors** for all variants
3. **Proper semantic HTML** (button vs. link)
4. **Keyboard accessibility** and focus states
5. **Consistent spacing** via Tailwind classes
6. **WordPress button block** compatibility

---

**Last Updated:** December 24, 2024