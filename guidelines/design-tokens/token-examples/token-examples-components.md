# Design Token Examples — Complete Components

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [token-examples.md](../token-examples.md)  

---

## Complete Component Examples

### Card Component

```tsx
const Card = ({ title, description, link }) => (
  <div 
    className="card"
    style={{
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      padding: 'var(--spacing-6)',
      marginBottom: 'var(--spacing-8)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow)',
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
      Learn More
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
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        padding: 'var(--spacing-3) var(--spacing-6)',
        borderRadius: 'var(--radius)',
        border: 'none',
        cursor: 'pointer',
        ...variantStyles[variant],
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
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      padding: 'var(--spacing-20) var(--spacing-6)',
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

### DON'T: Mix Hardcoded and Token Values

```tsx
// WRONG - Inconsistent
<div style={{
  padding: 'var(--spacing-6)',  // Token
  margin: '20px',                // Hardcoded
  color: 'var(--foreground)',   // Token
  backgroundColor: '#ffffff'     // Hardcoded
}}>
```

### DO: Use Tokens Consistently

```tsx
// CORRECT - All tokens
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
- [css-variables-overview.md](../css-variables-overview.md) — Complete token system
- [typography.md](../typography.md) — Typography tokens
- [spacing.md](../spacing.md) — Spacing tokens
- [colors.md](../colors.md) — Color tokens

---

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [token-examples-basic.md](./token-examples-basic.md)
