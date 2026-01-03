# Mobile Touch Targets

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Touch targets must be large enough for comfortable interaction on mobile devices. WCAG 2.1 AA requires minimum 44×44px touch targets.

---

## 📏 Minimum Touch Target Sizes

### WCAG 2.1 AA Standard
**Minimum size:** 44×44 CSS pixels  
**Recommended:** 48×48 CSS pixels

### Touch Target Scale

| Element | Minimum Size | Recommended | Usage |
|---------|-------------|-------------|-------|
| Primary buttons | 44×44px | 48×48px | CTAs, submit buttons |
| Secondary buttons | 44×44px | 48×48px | Cancel, back buttons |
| Icon buttons | 44×44px | 48×48px | Menu, close, search |
| Links in text | 44px height | 48px height | Inline links |
| Form inputs | 44px height | 48px height | Text fields, selects |
| Checkboxes | 44×44px | 48×48px | Form checkboxes |
| Radio buttons | 44×44px | 48×48px | Form radio inputs |
| Navigation items | 44px height | 48px height | Menu links |

---

## 🎯 Implementation Patterns

### Primary Button (48×48px)

```tsx
<button style={{
  minHeight: '48px',
  minWidth: '120px',
  padding: '12px 24px',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: 'none',
  cursor: 'pointer'
}}>
  Get Started
</button>
```

### Icon-Only Button (48×48px)

```tsx
<button 
  aria-label="Open menu"
  style={{
    width: '48px',
    height: '48px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius)',
    backgroundColor: 'transparent',
    border: '1px solid var(--border)',
    cursor: 'pointer'
  }}
>
  <Menu size={24} />
</button>
```

### Text Link (48px height)

```tsx
<a 
  href="/contact"
  style={{
    display: 'inline-block',
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    color: 'var(--primary)',
    textDecoration: 'underline',
    lineHeight: '1.5'
  }}
>
  Contact Us
</a>
```

### Form Input (48px height)

```tsx
<input
  type="text"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    backgroundColor: 'var(--input-background)',
    color: 'var(--foreground)'
  }}
/>
```

### Checkbox/Radio (48×48px touch area)

```tsx
<label style={{
  display: 'flex',
  alignItems: 'center',
  minHeight: '48px',
  gap: '12px',
  cursor: 'pointer',
  padding: '8px 0'
}}>
  <input 
    type="checkbox"
    style={{
      width: '24px',
      height: '24px',
      cursor: 'pointer'
    }}
  />
  <span style={{
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    color: 'var(--foreground)'
  }}>
    Option label
  </span>
</label>
```

---

## 📱 Mobile Navigation Touch Targets

### Mobile Menu Items

```tsx
<nav>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    <li>
      <a 
        href="/"
        style={{
          display: 'block',
          minHeight: '48px',
          padding: '12px 16px',
          fontSize: 'var(--text-base)',
          fontFamily: 'Lexend, sans-serif',
          color: 'var(--foreground)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--border-extra-soft)'
        }}
      >
        Home
      </a>
    </li>
    <li>
      <a 
        href="/about"
        style={{
          display: 'block',
          minHeight: '48px',
          padding: '12px 16px',
          fontSize: 'var(--text-base)',
          fontFamily: 'Lexend, sans-serif',
          color: 'var(--foreground)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--border-extra-soft)'
        }}
      >
        About
      </a>
    </li>
  </ul>
</nav>
```

### Hamburger Menu Button

```tsx
<button 
  aria-label="Toggle menu"
  aria-expanded={isOpen}
  style={{
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  }}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>
```

---

## 📊 Touch Target Spacing

### Minimum Spacing Between Targets

**Guideline:** 8px minimum spacing between adjacent touch targets

```tsx
// Button group with proper spacing
<div style={{ display: 'flex', gap: '8px' }}>
  <button style={{ minHeight: '48px', padding: '12px 24px' }}>
    Primary
  </button>
  <button style={{ minHeight: '48px', padding: '12px 24px' }}>
    Secondary
  </button>
</div>
```

### Vertical List Spacing

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
  {items.map(item => (
    <a 
      key={item.id}
      href={item.href}
      style={{
        minHeight: '48px',
        padding: '12px 16px',
        fontSize: 'var(--text-base)',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)'
      }}
    >
      {item.title}
    </a>
  ))}
</div>
```

---

## ♿ Accessibility Requirements

### Focus States on Touch Targets

```tsx
<button 
  style={{
    minHeight: '48px',
    padding: '12px 24px',
    outline: '2px solid var(--ring)',
    outlineOffset: '2px'
  }}
  onFocus={(e) => {
    e.currentTarget.style.outline = '2px solid var(--ring)';
  }}
>
  Focusable button
</button>
```

### ARIA Labels for Icon-Only Buttons

```tsx
<button 
  aria-label="Close dialog"
  style={{
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <X size={24} />
</button>
```

---

## 🎯 Common Patterns

### Call-to-Action Button

```tsx
<button style={{
  minHeight: '48px',
  minWidth: '200px',
  padding: '14px 32px',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: 'none',
  cursor: 'pointer',
  boxShadow: 'var(--shadow-primary)'
}}>
  Get Started Today
</button>
```

### Filter Buttons

```tsx
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
  {categories.map(category => (
    <button
      key={category}
      style={{
        minHeight: '44px',
        padding: '10px 20px',
        fontSize: 'var(--text-base)',
        fontFamily: 'Lexend, sans-serif',
        borderRadius: 'var(--radius)',
        backgroundColor: selected === category ? 'var(--primary)' : 'transparent',
        color: selected === category ? 'var(--primary-foreground)' : 'var(--foreground)',
        border: `1px solid ${selected === category ? 'var(--primary)' : 'var(--border)'}`,
        cursor: 'pointer'
      }}
    >
      {category}
    </button>
  ))}
</div>
```

### Social Media Icons

```tsx
<div style={{ display: 'flex', gap: '8px' }}>
  <a 
    href="https://twitter.com/..."
    aria-label="Follow us on Twitter"
    style={{
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius)',
      backgroundColor: 'var(--muted)',
      color: 'var(--foreground)',
      textDecoration: 'none'
    }}
  >
    <Twitter size={24} />
  </a>
  <a 
    href="https://github.com/..."
    aria-label="View our GitHub"
    style={{
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius)',
      backgroundColor: 'var(--muted)',
      color: 'var(--foreground)',
      textDecoration: 'none'
    }}
  >
    <Github size={24} />
  </a>
</div>
```

---

## 🧪 Testing Touch Targets

### Manual Testing

**Step 1: Enable Mobile View**
```
Chrome DevTools → Toggle device toolbar (Cmd/Ctrl + Shift + M)
Select device: iPhone SE, iPhone 12, Pixel 5
```

**Step 2: Tap Test**
- Tap each interactive element with finger/cursor
- Verify element responds immediately
- Check no accidental taps on adjacent elements

**Step 3: Measure Targets**
```javascript
// In browser console
const button = document.querySelector('button');
const rect = button.getBoundingClientRect();
console.log(`Width: ${rect.width}px, Height: ${rect.height}px`);
// Should be ≥ 44×44px
```

### Automated Testing

**Lighthouse Accessibility Audit:**
- Run Lighthouse in DevTools
- Check "Tap targets are not sized appropriately"
- All interactive elements should pass

---

## ✅ Touch Target Checklist

Before deploying:

- [ ] All buttons ≥ 44×44px (prefer 48×48px)
- [ ] All links in text ≥ 44px height
- [ ] All form inputs ≥ 44px height
- [ ] All checkboxes/radios ≥ 44×44px touch area
- [ ] Icon-only buttons ≥ 48×48px
- [ ] Navigation items ≥ 48px height
- [ ] Minimum 8px spacing between targets
- [ ] Focus states visible (2px outline)
- [ ] ARIA labels on icon-only buttons
- [ ] Tested on actual mobile device

---

## 🚫 Common Mistakes

### ❌ Too Small
```tsx
// DON'T: Button too small
<button style={{ padding: '4px 8px', fontSize: '12px' }}>
  Click me
</button>
// Touch target: ~24×32px ❌
```

### ✅ Correct Size
```tsx
// DO: Proper touch target
<button style={{ 
  minHeight: '48px', 
  padding: '12px 24px', 
  fontSize: 'var(--text-base)' 
}}>
  Click me
</button>
// Touch target: 48×120px ✅
```

### ❌ Too Close Together
```tsx
// DON'T: No spacing
<div style={{ display: 'flex' }}>
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

### ✅ Proper Spacing
```tsx
// DO: Adequate spacing
<div style={{ display: 'flex', gap: '8px' }}>
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

---

**Last Updated:** December 25, 2024  
**Minimum Size:** 44×44px (WCAG 2.1 AA)  
**Recommended:** 48×48px  
**Spacing:** 8px minimum between targets
