# Shadow Tokens

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Shadow tokens create depth and elevation in the design system. All shadows use CSS variables and adapt to light/dark modes.

---

## 🌑 Shadow Scale

### Small Shadow
```css
/* Light Mode */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);

/* Dark Mode */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
```

**Usage:**
```tsx
<div style={{ boxShadow: 'var(--shadow-sm)' }}>
  Subtle shadow
</div>
```

**Use Cases:** Subtle cards, list items

---

### Medium Shadow
```css
/* Light Mode */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);

/* Dark Mode */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
```

**Usage:**
```tsx
<div style={{ boxShadow: 'var(--shadow-md)' }}>
  Standard card
</div>
```

**Use Cases:** Standard cards, elevated panels

---

### Large Shadow
```css
/* Light Mode */
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);

/* Dark Mode */
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
```

**Usage:**
```tsx
<div style={{ boxShadow: 'var(--shadow-lg)' }}>
  Prominent card
</div>
```

**Use Cases:** Modals, popovers, prominent sections

---

### Extra Large Shadow
```css
/* Light Mode */
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);

/* Dark Mode */
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6);
```

**Usage:**
```tsx
<div style={{ boxShadow: 'var(--shadow-xl)' }}>
  Highest elevation
</div>
```

**Use Cases:** Overlays, notifications, hero cards

---

### Hover Shadow
```css
/* Light Mode */
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);

/* Dark Mode */
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.4);
```

**Usage:**
```tsx
<div 
  style={{
    boxShadow: 'var(--shadow-md)',
    transition: 'box-shadow 0.3s ease'
  }}
  onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-hover)'}
  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
>
  Hover to elevate
</div>
```

**Use Cases:** Interactive cards, buttons

---

### Primary Shadow (Colored)
```css
/* Light Mode */
--shadow-primary: 0 4px 12px rgba(30, 106, 255, 0.3);

/* Dark Mode */
--shadow-primary: 0 4px 12px rgba(123, 231, 255, 0.3);
```

**Usage:**
```tsx
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  boxShadow: 'var(--shadow-primary)'
}}>
  Primary button with colored shadow
</button>
```

**Use Cases:** Primary buttons, accent elements

---

## 🎨 Shadow Usage Patterns

### Elevated Card Pattern
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

### Interactive Card with Hover
```tsx
<div 
  style={{
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease',
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

### Modal with Large Shadow
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-lg)',
  padding: '32px',
  maxWidth: '600px',
  margin: '0 auto'
}}>
  Modal content
</div>
```

---

## 📊 Elevation Hierarchy

| Elevation | Shadow Variable | Y-Offset | Blur | Use Case |
|-----------|----------------|----------|------|----------|
| 0 (Flat) | `none` | 0 | 0 | Default, no elevation |
| 1 | `--shadow-sm` | 1px | 3px | Subtle cards |
| 2 | `--shadow-md` | 4px | 6px | Standard cards |
| 3 | `--shadow-hover` | 8px | 16px | Hover state |
| 4 | `--shadow-lg` | 10px | 40px | Modals, popovers |
| 5 | `--shadow-xl` | 20px | 40px | Overlays |

---

## ♿ Accessibility

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    box-shadow: none !important;
  }
}
```

**Note:** Shadows are decorative. Never rely on shadows alone for visual feedback.

---

## ✅ Best Practices

### Do's ✅
- Use shadows to create visual hierarchy
- Transition shadows on hover for feedback
- Use colored shadows for primary actions
- Increase shadow on interaction

### Don'ts ❌
- Don't use shadows on every element
- Don't stack multiple shadows
- Don't use shadows as sole interaction indicator
- Don't forget dark mode adjustments

---

**Last Updated:** December 25, 2024  
**Shadow Variables:** 6  
**Elevation Levels:** 5  
**Modes:** Light + Dark
