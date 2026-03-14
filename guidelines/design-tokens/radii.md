# Border Radius Tokens — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Overview

Border radius tokens create consistent rounded corners throughout the design system.

---

## 📐 Radius Scale

### CSS Variables

```css
--radius: 4px;              /* Base radius */
--radius-sm: 2px;           /* Small radius (calc(var(--radius) - 2px)) */
--radius-md: 4px;           /* Medium radius (var(--radius)) */
--radius-lg: 8px;           /* Large radius (calc(var(--radius) + 4px)) */
--radius-xl: 12px;          /* Extra large radius (calc(var(--radius) + 8px)) */
```

---

## 🎯 Usage Guidelines

### Small Radius (2px)
```tsx
<div style={{ borderRadius: 'var(--radius-sm)' }}>
  Small rounded corners
</div>
```

**Use Cases:**
- Tags, badges
- Small UI elements
- Subtle rounding

---

### Medium Radius (4px) - Default
```tsx
<div style={{ borderRadius: 'var(--radius)' }}>
  Default rounded corners
</div>
```

**Use Cases:**
- Buttons
- Form inputs
- Standard UI elements

---

### Large Radius (8px)
```tsx
<div style={{ borderRadius: 'var(--radius-lg)' }}>
  Large rounded corners
</div>
```

**Use Cases:**
- Cards
- Modals
- Images
- Containers

---

### Extra Large Radius (12px)
```tsx
<div style={{ borderRadius: 'var(--radius-xl)' }}>
  Extra large rounded corners
</div>
```

**Use Cases:**
- Hero sections
- Large cards
- Prominent containers

---

## 🎨 Common Patterns

### Button
```tsx
<button style={{
  borderRadius: 'var(--radius)',
  padding: '12px 24px'
}}>
  Button
</button>
```

### Card
```tsx
<div style={{
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  border: '1px solid var(--border-soft)'
}}>
  Card content
</div>
```

### Input
```tsx
<input style={{
  borderRadius: 'var(--radius)',
  padding: '12px 16px',
  border: '1px solid var(--border)'
}} />
```

### Image
```tsx
<img 
  src="..." 
  alt="..." 
  style={{ borderRadius: 'var(--radius-lg)' }}
/>
```

### Badge
```tsx
<span style={{
  borderRadius: 'var(--radius-sm)',
  padding: '4px 8px',
  fontSize: 'var(--text-small)'
}}>
  Badge
</span>
```

---

## ✅ Best Practices

### Do's ✅
- Use consistent radius across similar elements
- Larger elements = larger radius
- Use `--radius-lg` for cards and images
- Use `--radius` for buttons and inputs

### Don'ts ❌
- Don't hard-code pixel values
- Don't mix radius sizes inconsistently
- Don't use radius > 12px (too round)
- Don't forget mobile touch targets

---

**Last Updated:** December 25, 2024  
**Radius Variables:** 5  
**Base Unit:** 4px
