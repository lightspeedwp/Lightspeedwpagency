# Design Token Examples — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

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
  fontSize: 'var(--text-h1)',           // 64px (fluid 32px-64px)
  fontFamily: 'var(--font-primary)',    // Lexend
  fontWeight: 'var(--font-weight-bold)' // 700
}}>
  Archive Title
</h1>

// H2 - Section headings
<h2 style={{ 
  fontSize: 'var(--text-h2)',              // 48px (fluid 28px-48px)
  fontFamily: 'var(--font-primary)',       // Lexend
  fontWeight: 'var(--font-weight-semibold)' // 600
}}>
  Section Heading
</h2>

// H3 - Subsection headings
<h3 style={{ 
  fontSize: 'var(--text-h3)',              // 36px (fluid 24px-36px)
  fontFamily: 'var(--font-primary)',       // Lexend
  fontWeight: 'var(--font-weight-semibold)' // 600
}}>
  Subsection Heading
</h3>
```

---

### Body Text

```tsx
// Standard paragraph
<p style={{ 
  fontSize: 'var(--text-base)',      // 18px (fluid 15px-18px)
  fontFamily: 'var(--font-primary)', // Lexend
  lineHeight: 1.6
}}>
  Description text goes here. This is the standard body text size.
</p>

// Lead paragraph (larger, for intros)
<p style={{ 
  fontSize: 'var(--text-lead)',      // 22px (fluid 18px-22px)
  fontFamily: 'var(--font-primary)', // Lexend
  lineHeight: 1.5
}}>
  This is a lead paragraph with larger text for emphasis.
</p>
```

---

### Small Text

**Note:** Manrope (secondary font) should ONLY be used for small text.

```tsx
// Small metadata text (Manrope only)
<span style={{ 
  fontSize: 'var(--text-sm)',          // 14px
  fontFamily: 'var(--font-secondary)', // Manrope (small text only!)
  color: 'var(--muted-foreground)'
}}>
  By John Doe on March 11, 2026
</span>

// Extra small text
<span style={{ 
  fontSize: 'var(--text-xs)',          // 12px
  fontFamily: 'var(--font-secondary)', // Manrope
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
  backgroundColor: 'var(--background)',  // Page background
  color: 'var(--foreground)'             // Main text color
}}>
  Page content
</div>

// Card background
<div style={{
  backgroundColor: 'var(--card)',        // Card background
  color: 'var(--card-foreground)'        // Card text color
}}>
  Card content
</div>

// Muted/subtle background
<div style={{
  backgroundColor: 'var(--muted)',       // Muted background
  color: 'var(--muted-foreground)'       // Muted text
}}>
  Secondary content
</div>
```

---

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

---

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
  border: '2px solid var(--ring)',  // Focus ring color
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

// Asymmetric padding
<div style={{ 
  paddingTop: 'var(--spacing-16)',       {/* 64px top */}
  paddingBottom: 'var(--spacing-16)',    {/* 64px bottom */}
  paddingLeft: 'var(--spacing-6)',       {/* 24px left */}
  paddingRight: 'var(--spacing-6)'       {/* 24px right */}
}}>
  Custom padding
</div>
```

---

### Margin

```tsx
// Bottom margin
<div style={{ marginBottom: 'var(--spacing-8)' }}>  {/* 32px */}
  Content with bottom margin
</div>

// Top margin
<div style={{ marginTop: 'var(--spacing-12)' }}>   {/* 48px */}
  Content with top margin
</div>

// Centering with auto margin
<div style={{ 
  maxWidth: '1200px',
  margin: '0 auto'  // Center horizontally
}}>
  Centered content
</div>
```

---

### Gap (Flexbox/Grid)

```tsx
// Small gap
<div style={{ 
  display: 'flex',
  gap: 'var(--spacing-2)'  {/* 8px */}
}}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Medium gap
<div style={{ 
  display: 'flex',
  gap: 'var(--spacing-4)'  {/* 16px */}
}}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Large gap
<div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 'var(--spacing-8)'  {/* 32px */}
}}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### WordPress Utility Classes (Preferred for Layout)

```tsx
// Use WordPress utilities instead of inline spacing
<div className="wp-grid-3-cols">  {/* 3-column responsive grid */}
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<div className="wp-max-w-6xl">  {/* Max-width container, centered */}
  Content
</div>
```

**See:** [../development/wordpress-utilities.md](../development/wordpress-utilities.md)

---

## Border Radius Examples

```tsx
// Small radius
<div style={{
  borderRadius: 'var(--radius-sm)',  // 2px
  border: '1px solid var(--border)'
}}>
  Subtle corners
</div>

// Default radius
<div style={{
  borderRadius: 'var(--radius)',     // 4px
  border: '1px solid var(--border)'
}}>
  Standard corners
</div>

// Large radius
<div style={{
  borderRadius: 'var(--radius-lg)',  // 8px
  border: '1px solid var(--border)'
}}>
  Rounded corners
</div>

// Extra large radius
<div style={{
  borderRadius: 'var(--radius-xl)',  // 12px
  border: '1px solid var(--border)'
}}>
  Very rounded corners
</div>

// Pill shape (full)
<button style={{
  borderRadius: 'var(--radius-full)',  // 9999px
  padding: 'var(--spacing-3) var(--spacing-6)'
}}>
  Pill Button
</button>
```

---

## Shadow Examples

```tsx
// Small shadow
<div style={{
  boxShadow: 'var(--shadow-sm)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius)'
}}>
  Subtle elevation
</div>

// Default shadow
<div style={{
  boxShadow: 'var(--shadow)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius)'
}}>
  Standard elevation
</div>

// Medium shadow
<div style={{
  boxShadow: 'var(--shadow-md)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius)'
}}>
  Medium elevation
</div>

// Large shadow
<div style={{
  boxShadow: 'var(--shadow-lg)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius)'
}}>
  High elevation
</div>
```

---

## Complete Component Examples

### Card Component

```tsx
const Card = ({ title, description, link }) => (
  <div 
    className="card"
    style={{
      // Colors
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      
      // Spacing
      padding: 'var(--spacing-6)',
      marginBottom: 'var(--spacing-8)',
      
      // Borders
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      
      // Shadows
      boxShadow: 'var(--shadow)',
      
      // Layout
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-4)'
    }}
  >
    <h3 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--font-weight-semibold)',
      marginBottom: 'var(--spacing-2)'
    }}>
      {title}
    </h3>
    
    <p style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6,
      color: 'var(--muted-foreground)'
    }}>
      {description}
    </p>
    
    <a 
      href={link}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        color: 'var(--primary)',
        textDecoration: 'none',
        fontWeight: 'var(--font-weight-medium)'
      }}
    >
      Learn More →
    </a>
  </div>
);
```

---

### Button Component

```tsx
const Button = ({ variant = 'primary', children, ...props }) => {
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)'
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '2px solid var(--primary)'
    }
  };

  return (
    <button
      style={{
        // Base styles
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        padding: 'var(--spacing-3) var(--spacing-6)',
        borderRadius: 'var(--radius)',
        border: 'none',
        cursor: 'pointer',
        
        // Variant styles
        ...variantStyles[variant],
        
        // Layout
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)'
      }}
      {...props}
    >
      {children}
    </button>
  );
};
```

---

### Hero Section

```tsx
const HeroSection = ({ title, subtitle, cta }) => (
  <section 
    style={{
      // Colors
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      
      // Spacing
      padding: 'var(--spacing-20) var(--spacing-6)',
      
      // Layout
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--spacing-8)'
    }}
  >
    <h1 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--font-weight-bold)',
      maxWidth: '900px',
      lineHeight: 1.1
    }}>
      {title}
    </h1>
    
    <p style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-lead)',
      color: 'var(--muted-foreground)',
      maxWidth: '600px',
      lineHeight: 1.5
    }}>
      {subtitle}
    </p>
    
    <button style={{
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-semibold)',
      padding: 'var(--spacing-4) var(--spacing-8)',
      borderRadius: 'var(--radius-lg)',
      border: 'none',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {cta}
    </button>
  </section>
);
```

---

## Anti-Patterns

### ❌ DON'T: Mix Hardcoded and Token Values

```tsx
// ❌ WRONG - Inconsistent
<div style={{
  padding: 'var(--spacing-6)',  // Token ✓
  margin: '20px',                // Hardcoded ✗
  color: 'var(--foreground)',   // Token ✓
  backgroundColor: '#ffffff'     // Hardcoded ✗
}}>
```

### ✅ DO: Use Tokens Consistently

```tsx
// ✅ CORRECT - All tokens
<div style={{
  padding: 'var(--spacing-6)',
  margin: 'var(--spacing-5)',
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)'
}}>
```

---

## Related Guidelines

**See Also:**
- [css-variables-overview.md](./css-variables-overview.md) - Complete token system
- [typography.md](./typography.md) - Typography tokens
- [spacing.md](./spacing.md) - Spacing tokens
- [colors.md](./colors.md) - Color tokens
- [../development/wordpress-utilities.md](../development/wordpress-utilities.md) - WordPress utilities

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Design Tokens  
**Type:** Examples & Usage  
**Last Updated:** March 11, 2026
