# Style Variations & Component Variants

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Style variations allow components to adapt appearance without changing structure. All variations use CSS variables for theme compatibility.

---

## 🎨 Button Variants

### Primary (Default)
```tsx
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: 'none',
  padding: '12px 24px',
  borderRadius: 'var(--radius)',
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-medium)',
  cursor: 'pointer'
}}>
  Primary Button
</button>
```

**Use Cases:** Main CTAs, submit buttons, primary actions

---

### Secondary
```tsx
<button style={{
  backgroundColor: 'var(--secondary)',
  color: 'var(--secondary-foreground)',
  border: 'none',
  padding: '12px 24px',
  borderRadius: 'var(--radius)'
}}>
  Secondary Button
</button>
```

**Use Cases:** Supporting actions, alternative CTAs

---

### Outline
```tsx
<button style={{
  backgroundColor: 'transparent',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
  padding: '12px 24px',
  borderRadius: 'var(--radius)'
}}>
  Outline Button
</button>
```

**Use Cases:** Tertiary actions, cancel buttons

---

### Ghost
```tsx
<button style={{
  backgroundColor: 'transparent',
  color: 'var(--foreground)',
  border: 'none',
  padding: '12px 24px',
  borderRadius: 'var(--radius)'
}}>
  Ghost Button
</button>
```

**Use Cases:** Navigation, minimal actions

---

### Destructive
```tsx
<button style={{
  backgroundColor: 'var(--destructive)',
  color: 'var(--destructive-foreground)',
  border: 'none',
  padding: '12px 24px',
  borderRadius: 'var(--radius)'
}}>
  Delete
</button>
```

**Use Cases:** Delete, remove, destructive actions

---

## 📦 Card Variants

### Default Card
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  boxShadow: 'var(--shadow-md)'
}}>
  Card content
</div>
```

**Use Cases:** Standard content cards

---

### Elevated Card
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  boxShadow: 'var(--shadow-lg)',
  transition: 'all 0.3s ease'
}}>
  Elevated card
</div>
```

**Use Cases:** Featured content, interactive cards

---

### Interactive Card (Hover Effect)
```tsx
<div 
  style={{
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-lg)',
    padding: '24px',
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
  Hover me
</div>
```

**Use Cases:** Portfolio items, blog posts, clickable cards

---

### Glass Card
```tsx
<div style={{
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(16px)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  color: 'var(--glass-text)'
}}>
  Glass card
</div>
```

**Use Cases:** Overlays, floating UI, modern aesthetic

---

## 🎯 Section Background Variants

### Default (White/Dark)
```tsx
<Section spacing="lg" style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>
  Content
</Section>
```

**Use Cases:** Most sections

---

### Muted (Light Gray)
```tsx
<Section spacing="lg" style={{
  backgroundColor: 'var(--muted)',
  color: 'var(--foreground)'
}}>
  Content
</Section>
```

**Use Cases:** Alternating sections

---

### Primary (Brand)
```tsx
<Section spacing="lg" style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
  Content
</Section>
```

**Use Cases:** CTAs, hero sections

---

### Gradient
```tsx
<Section spacing="xl" style={{
  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
  color: 'var(--primary-foreground)'
}}>
  Content
</Section>
```

**Use Cases:** Hero sections, premium features

---

### Image Background with Overlay
```tsx
<Section 
  spacing="xl"
  style={{
    backgroundImage: 'url(...)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  }}
>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0
  }} />
  
  {/* Content */}
  <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
    Content
  </div>
</Section>
```

**Use Cases:** Hero sections, testimonials

---

## 📝 Input Variants

### Default Input
```tsx
<input style={{
  width: '100%',
  minHeight: '48px',
  padding: '12px 16px',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--input-background)',
  color: 'var(--foreground)'
}} />
```

---

### Input with Error
```tsx
<input style={{
  width: '100%',
  minHeight: '48px',
  padding: '12px 16px',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  border: '2px solid var(--destructive)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--input-background)',
  color: 'var(--foreground)'
}} />
```

---

### Input with Success
```tsx
<input style={{
  width: '100%',
  minHeight: '48px',
  padding: '12px 16px',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  border: '2px solid var(--accent)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--input-background)',
  color: 'var(--foreground)'
}} />
```

---

### Disabled Input
```tsx
<input 
  disabled
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    backgroundColor: 'var(--muted)',
    color: 'var(--muted-foreground)',
    cursor: 'not-allowed'
  }}
/>
```

---

## 🏷️ Badge Variants

### Default Badge
```tsx
<span style={{
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'var(--muted)',
  color: 'var(--muted-foreground)'
}}>
  Default
</span>
```

---

### Primary Badge
```tsx
<span style={{
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
  Primary
</span>
```

---

### Success Badge
```tsx
<span style={{
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-foreground)'
}}>
  Success
</span>
```

---

### Outline Badge
```tsx
<span style={{
  display: 'inline-block',
  padding: '4px 12px',
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'transparent',
  border: '1px solid var(--border)',
  color: 'var(--foreground)'
}}>
  Outline
</span>
```

---

## 🎭 Hero Variants

### Full-Height Hero
```tsx
<Section 
  spacing="none"
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background)'
  }}
>
  <Container>
    <h1>Full-height hero</h1>
  </Container>
</Section>
```

---

### Hero with Gradient
```tsx
<Section 
  spacing="2xl"
  style={{
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
    color: 'var(--primary-foreground)'
  }}
>
  <Container>
    <h1>Gradient hero</h1>
  </Container>
</Section>
```

---

### Hero with Gradient Orbs
```tsx
<Section 
  spacing="2xl"
  style={{
    backgroundColor: 'var(--background)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Gradient Orb */}
  <div style={{
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(30, 106, 255, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0
  }} aria-hidden="true" />

  <Container style={{ position: 'relative', zIndex: 1 }}>
    <h1>Hero with orbs</h1>
  </Container>
</Section>
```

---

## 📊 Grid Variants

### 2-Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

---

### 3-Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

---

### 4-Column Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

---

### Masonry Grid
```tsx
<div style={{
  columns: '1 300px',
  columnGap: '24px'
}}>
  {items.map(item => (
    <div 
      key={item.id}
      style={{
        breakInside: 'avoid',
        marginBottom: '24px'
      }}
    >
      <Card {...item} />
    </div>
  ))}
</div>
```

---

## ✅ Variation Selection Matrix

| Component | Variant | Use Case | Theme-Aware |
|-----------|---------|----------|-------------|
| Button | Primary | Main CTAs | ✅ |
| Button | Secondary | Supporting actions | ✅ |
| Button | Outline | Tertiary actions | ✅ |
| Button | Destructive | Delete actions | ✅ |
| Card | Default | Standard content | ✅ |
| Card | Elevated | Featured content | ✅ |
| Card | Interactive | Clickable items | ✅ |
| Card | Glass | Overlays | ✅ |
| Section | Default | Most sections | ✅ |
| Section | Muted | Alternating | ✅ |
| Section | Primary | CTAs | ✅ |
| Section | Gradient | Heroes | ✅ |
| Input | Default | Standard input | ✅ |
| Input | Error | Validation error | ✅ |
| Badge | Primary | Important tags | ✅ |
| Badge | Outline | Subtle tags | ✅ |

---

## 🎨 Creating Custom Variations

### Guidelines

1. **Always use CSS variables**
   ```tsx
   // ✅ Good
   backgroundColor: 'var(--primary)'
   
   // ❌ Bad
   backgroundColor: '#1E6AFF'
   ```

2. **Maintain theme compatibility**
   - Test in both light and dark modes
   - Ensure contrast ratios meet WCAG AA

3. **Follow naming conventions**
   - Descriptive names (e.g., `interactive`, `elevated`)
   - Avoid color names (e.g., use `primary` not `blue`)

4. **Document use cases**
   - When to use each variant
   - Examples and code snippets

---

**Last Updated:** December 25, 2024  
**Total Variants:** 40+  
**All Theme-Aware:** ✅  
**CSS Variables:** 100%
