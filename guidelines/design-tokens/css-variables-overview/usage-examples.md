# CSS Variables System — Usage Examples & Best Practices

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [css-variables-overview.md](../css-variables-overview.md)  

---

## Token Reference Syntax

### Typography

```tsx
<h1 style={{
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--font-weight-bold)'
}}>
  Page Title
</h1>
```

### Spacing

```tsx
// CSS variables for inline styles
<div style={{
  padding: 'var(--spacing-6)',
  gap: 'var(--spacing-4)',
  marginBottom: 'var(--spacing-8)'
}}>
```

**OR WordPress utility classes (preferred for layout):**
```tsx
<div className="wp-grid-3-cols">
```

### Colors

```tsx
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  borderColor: 'var(--border)'
}}>
```

### Border Radius

```tsx
<div style={{
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)'
}}>
```

---

## Complete Example

```tsx
// 100% CSS variable compliant component
const CardComponent = ({ title, description }) => (
  <div 
    className="card"
    style={{
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      padding: 'var(--spacing-6)',
      marginBottom: 'var(--spacing-8)',
      gap: 'var(--spacing-4)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow)'
    }}
  >
    <h3 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--font-weight-semibold)',
      marginBottom: 'var(--spacing-3)'
    }}>
      {title}
    </h3>
    
    <p style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6
    }}>
      {description}
    </p>
  </div>
);
```

**Result:** User can update entire design by editing CSS files — zero component changes needed.

---

## User Control Examples

### Changing Fonts

**Before (60 minutes):** Find all components, update each `fontFamily`, test, fix breaks

**After (30 seconds):**
```css
/* theme-base.css */
--font-primary: 'Inter', sans-serif;  /* Changed! */
/* Entire site updates automatically */
```

### Changing Colors

**Before (60 minutes):** Find all components, update colors, check contrast, test dark mode

**After (30 seconds):**
```css
/* theme-light.css */
--primary: #007bff;  /* Changed! */
/* Entire site updates automatically */
```

---

## Anti-Patterns

### DON'T: Hardcode Values

```tsx
// WRONG
<div style={{
  color: '#1a1a1a',
  backgroundColor: '#ffffff',
  padding: '24px',
  borderRadius: '8px',
  fontFamily: 'Lexend, sans-serif',
  fontSize: '32px'
}}>
```

### DO: Use CSS Variables

```tsx
// CORRECT
<div style={{
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-h2)'
}}>
```

---

## Verification Checklist

**Before committing code:**
- [ ] Zero hardcoded hex colors
- [ ] Zero hardcoded px spacing
- [ ] Zero hardcoded font names
- [ ] Zero hardcoded font sizes
- [ ] Zero hardcoded border radius
- [ ] All styling uses CSS variables
- [ ] WordPress utilities used for layout
- [ ] Dark mode works (color variables)

**Verification Commands:**
```bash
# Search for hardcoded colors
grep -r "#[0-9a-fA-F]\{6\}" src/app/components/

# Search for hardcoded fonts
grep -r "fontFamily.*Lexend" src/app/components/

# Search for hardcoded spacing
grep -r 'padding.*"[0-9]' src/app/components/
```

---

## Related Guidelines

- [typography.md](../typography.md) — Complete typography system
- [spacing.md](../spacing.md) — Spacing scale + WordPress utilities
- [colors.md](../colors.md) — Color system + semantic roles
- [responsive.md](../responsive.md) — Fluid responsive system
- [button-sizes.md](../button-sizes.md) — Button sizing tokens

---

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [token-reference.md](./token-reference.md)
