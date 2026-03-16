# Design Token Examples — Basic Tokens

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [token-examples.md](../token-examples.md)  

---

## Purpose

**What:** Practical code examples for using design tokens

**Why:** Show developers exactly how to implement token-based styling

**Who:** All developers building UI components

---

## Typography Examples

### Headings

```tsx
// H1 - Page titles, hero headings
<h1 style={{ 
  fontSize: 'var(--text-h1)',
  fontFamily: 'var(--font-primary)',
  fontWeight: 'var(--font-weight-bold)'
}}>
  Archive Title
</h1>

// H2 - Section headings
<h2 style={{ 
  fontSize: 'var(--text-h2)',
  fontFamily: 'var(--font-primary)',
  fontWeight: 'var(--font-weight-semibold)'
}}>
  Section Heading
</h2>

// H3 - Subsection headings
<h3 style={{ 
  fontSize: 'var(--text-h3)',
  fontFamily: 'var(--font-primary)',
  fontWeight: 'var(--font-weight-semibold)'
}}>
  Subsection Heading
</h3>
```

### Body Text

```tsx
// Standard paragraph
<p style={{ 
  fontSize: 'var(--text-base)',
  fontFamily: 'var(--font-primary)',
  lineHeight: 1.6
}}>
  Description text goes here.
</p>

// Lead paragraph (larger, for intros)
<p style={{ 
  fontSize: 'var(--text-lead)',
  fontFamily: 'var(--font-primary)',
  lineHeight: 1.5
}}>
  This is a lead paragraph with larger text for emphasis.
</p>
```

### Small Text

**Note:** Manrope (secondary font) should ONLY be used for small text.

```tsx
// Small metadata text (Manrope only)
<span style={{ 
  fontSize: 'var(--text-sm)',
  fontFamily: 'var(--font-secondary)',
  color: 'var(--muted-foreground)'
}}>
  By John Doe on March 11, 2026
</span>

// Extra small text
<span style={{ 
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-secondary)',
  color: 'var(--muted-foreground)'
}}>
  Updated 2 hours ago
</span>
```

---

## Color Examples

### Backgrounds and Text

```tsx
// Page background
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>
  Page content
</div>

// Card background
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)'
}}>
  Card content
</div>

// Muted/subtle background
<div style={{
  backgroundColor: 'var(--muted)',
  color: 'var(--muted-foreground)'
}}>
  Secondary content
</div>
```

### Buttons

```tsx
// Primary button
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  padding: 'var(--spacing-3) var(--spacing-6)',
  borderRadius: 'var(--radius)',
  border: 'none'
}}>
  Primary Action
</button>

// Secondary button
<button style={{
  backgroundColor: 'var(--secondary)',
  color: 'var(--secondary-foreground)',
  padding: 'var(--spacing-3) var(--spacing-6)',
  borderRadius: 'var(--radius)',
  border: 'none'
}}>
  Secondary Action
</button>

// Destructive button
<button style={{
  backgroundColor: 'var(--destructive)',
  color: 'var(--destructive-foreground)',
  padding: 'var(--spacing-3) var(--spacing-6)',
  borderRadius: 'var(--radius)',
  border: 'none'
}}>
  Delete
</button>
```

### Borders

```tsx
// Standard border
<div style={{
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)'
}}>
  Content with border
</div>

// Input field border
<input style={{
  border: '1px solid var(--input)',
  borderRadius: 'var(--radius)',
  padding: 'var(--spacing-3)'
}} />

// Focus state border
<input style={{
  border: '2px solid var(--ring)',
  borderRadius: 'var(--radius)',
  outline: 'none'
}} />
```

---

## Spacing Examples

### Padding

```tsx
// Small padding
<div style={{ padding: 'var(--spacing-3)' }}>  {/* 12px */}
  Small padding
</div>

// Medium padding
<div style={{ padding: 'var(--spacing-6)' }}>  {/* 24px */}
  Medium padding
</div>

// Large padding
<div style={{ padding: 'var(--spacing-12)' }}> {/* 48px */}
  Large padding
</div>
```

### Gap (Flexbox/Grid)

```tsx
// Small gap
<div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Large gap grid
<div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 'var(--spacing-8)'
}}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Border Radius Examples

```tsx
// Small radius
<div style={{ borderRadius: 'var(--radius-sm)' }}>  {/* 2px */}
  Subtle corners
</div>

// Default radius
<div style={{ borderRadius: 'var(--radius)' }}>     {/* 4px */}
  Standard corners
</div>

// Large radius
<div style={{ borderRadius: 'var(--radius-lg)' }}>  {/* 8px */}
  Rounded corners
</div>

// Pill shape
<button style={{
  borderRadius: 'var(--radius-full)',
  padding: 'var(--spacing-3) var(--spacing-6)'
}}>
  Pill Button
</button>
```

---

## Shadow Examples

```tsx
// Small shadow
<div style={{ boxShadow: 'var(--shadow-sm)' }}>
  Subtle elevation
</div>

// Default shadow
<div style={{ boxShadow: 'var(--shadow)' }}>
  Standard elevation
</div>

// Large shadow
<div style={{ boxShadow: 'var(--shadow-lg)' }}>
  High elevation
</div>
```

---

**See also:** [token-examples-components.md](./token-examples-components.md)
