# Border Tokens

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Border tokens include border colors, widths, and styles. All borders use CSS variables for theme compatibility.

---

## 🎨 Border Colors

### Standard Border
```css
--border: rgba(117, 117, 117, 1);           /* Medium gray (both modes) */
```

**Usage:**
```tsx
<div style={{ border: '1px solid var(--border)' }}>
  Standard bordered element
</div>
```

**Use Cases:** Form inputs, strong dividers, table borders

---

### Soft Border (Modern Design)
```css
/* Light Mode */
--border-soft: rgba(0, 0, 0, 0.08);         /* 8% black */

/* Dark Mode */
--border-soft: rgba(255, 255, 255, 0.08);   /* 8% white */
```

**Usage:**
```tsx
<div style={{ border: '1px solid var(--border-soft)' }}>
  Soft bordered card
</div>
```

**Use Cases:** Cards, subtle containers, modern dividers

---

### Extra Soft Border (Very Subtle)
```css
/* Light Mode */
--border-extra-soft: rgba(0, 0, 0, 0.04);   /* 4% black */

/* Dark Mode */
--border-extra-soft: rgba(255, 255, 255, 0.04); /* 4% white */
```

**Usage:**
```tsx
<hr style={{ 
  border: 'none',
  borderTop: '1px solid var(--border-extra-soft)'
}} />
```

**Use Cases:** Section dividers, very subtle separation

---

## 📏 Border Widths

### Width Scale
```css
border-width: 1px;      /* Standard - Most common */
border-width: 2px;      /* Emphasis - Buttons, focus states */
border-width: 4px;      /* Strong - Accent elements */
```

**Usage:**
```tsx
// Standard border
<div style={{ border: '1px solid var(--border)' }} />

// Emphasis border
<div style={{ border: '2px solid var(--primary)' }} />

// Strong accent
<div style={{ borderLeft: '4px solid var(--primary)' }} />
```

---

## 🎯 Border Styles

### Solid (Default)
```tsx
<div style={{ border: '1px solid var(--border)' }} />
```

### Dashed
```tsx
<div style={{ border: '1px dashed var(--border)' }} />
```
**Use Case:** Placeholders, draft states

### None
```tsx
<div style={{ border: 'none' }} />
```

---

## 🎨 Common Border Patterns

### Card with Soft Border
```tsx
<div style={{
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  backgroundColor: 'var(--card)'
}}>
  Card content
</div>
```

### Form Input
```tsx
<input style={{
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: '12px 16px',
  outline: 'none',
  transition: 'border-color 0.2s'
}} />
```

### Button with Border
```tsx
<button style={{
  border: '2px solid var(--primary)',
  borderRadius: 'var(--radius)',
  padding: '10px 24px',
  backgroundColor: 'transparent',
  color: 'var(--primary)'
}}>
  Outline Button
</button>
```

### Accent Border (Left)
```tsx
<div style={{
  borderLeft: '4px solid var(--primary)',
  paddingLeft: '16px'
}}>
  Accented content block
</div>
```

### Divider
```tsx
<hr style={{
  border: 'none',
  borderTop: '1px solid var(--border-extra-soft)',
  margin: '32px 0'
}} />
```

---

## ♿ Accessibility

### Focus States

**Visible focus outline:**
```tsx
<button style={{
  outline: '2px solid var(--ring)',
  outlineOffset: '2px'
}}>
  Focused button
</button>
```

**Minimum contrast:** 3:1 ratio for borders against background

---

## ✅ Best Practices

### Do's ✅
- Use soft borders (`--border-soft`) for modern aesthetic
- Use standard border (`--border`) for form inputs
- Use 1px width for most borders
- Use 2px for focus states and emphasis

### Don'ts ❌
- Don't hard-code border colors
- Don't use borders thicker than 4px
- Don't forget border-radius for modern look
- Don't mix border styles inconsistently

---

**Last Updated:** December 25, 2024  
**Border Colors:** 3 (standard, soft, extra-soft)  
**Border Widths:** 3 (1px, 2px, 4px)
