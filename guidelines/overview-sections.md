# Section Styles Overview

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Section styles define visual variations for containing sections throughout the LSX Design System. Every section uses the `Section` component with different style variations.

---

## 🎨 Section Style Variations

### 1. Default (White Background)

**Background:** `var(--background)` (white in light mode, dark in dark mode)  
**Text Color:** `var(--foreground)`

**Usage:**
```tsx
<Section spacing="lg" background="default">
  <Container>
    Standard section content
  </Container>
</Section>
```

**Use Cases:**
- Most content sections
- Standard card grids
- Editorial content

---

### 2. Muted (Light Gray Background)

**Background:** `var(--muted)` (light gray)  
**Text Color:** `var(--foreground)`

**Usage:**
```tsx
<Section spacing="lg" background="muted">
  <Container>
    Muted background content
  </Container>
</Section>
```

**Use Cases:**
- Alternate sections for visual rhythm
- Testimonial sections
- Supporting content

---

### 3. Card (Elevated Container Background)

**Background:** `var(--card)`  
**Text Color:** `var(--card-foreground)`

**Usage:**
```tsx
<Section spacing="lg" background="card">
  <Container>
    Card-style section
  </Container>
</Section>
```

**Use Cases:**
- Important highlighted sections
- Call-to-action sections
- Featured content

---

### 4. Primary (Brand Color Background)

**Background:** `var(--primary)`  
**Text Color:** `var(--primary-foreground)` (white)

**Usage:**
```tsx
<Section spacing="lg" background="primary">
  <Container>
    Primary branded section
  </Container>
</Section>
```

**Use Cases:**
- Call-to-action sections
- Hero sections (variant)
- Conversion-focused sections

---

### 5. Secondary (Accent Background)

**Background:** `var(--secondary)`  
**Text Color:** `var(--secondary-foreground)`

**Usage:**
```tsx
<Section spacing="lg" background="secondary">
  <Container>
    Secondary accent section
  </Container>
</Section>
```

**Use Cases:**
- Supporting CTAs
- Highlighted features
- Alternate branded sections

---

### 6. Gradient (Modern Gradient Background)

**Background:** Linear gradient with brand colors  
**Text Color:** `var(--primary-foreground)`

**Usage:**
```tsx
<Section spacing="lg" style={{
  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
}}>
  <Container>
    Gradient section content
  </Container>
</Section>
```

**Use Cases:**
- Hero sections
- Modern CTAs
- Premium/featured content

---

### 7. Glass (Glassmorphism Effect)

**Background:** `var(--glass-bg)` with backdrop blur  
**Border:** `var(--glass-border)`  
**Text Color:** `var(--glass-text)`

**Usage:**
```tsx
<Section 
  spacing="lg" 
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    border: '1px solid var(--glass-border)'
  }}
>
  <Container>
    Glass effect section
  </Container>
</Section>
```

**Use Cases:**
- Overlay sections
- Floating UI elements
- Modern hero sections with background imagery

---

### 8. Image Background (With Overlay)

**Background:** Image with dark overlay  
**Text Color:** White (`rgba(255, 255, 255, 1)`)

**Usage:**
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
  {/* Dark overlay for text readability */}
  <div style={{
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0
  }} />
  
  <Container style={{ position: 'relative', zIndex: 1 }}>
    <h2 style={{ color: 'white' }}>Content on image</h2>
  </Container>
</Section>
```

**Use Cases:**
- Hero sections
- Full-width feature sections
- Testimonials with background

---

## 📏 Section Spacing Scale

### Spacing Variants

| Variant | Vertical Padding | Class | Pixels |
|---------|------------------|-------|--------|
| `sm` | `py-8` | Small | 32px |
| `md` | `py-12` | Medium | 48px |
| `lg` | `py-16` | Large | 64px |
| `xl` | `py-20` | Extra Large | 80px |
| `2xl` | `py-24` | 2X Large | 96px |

### Usage by Section Type

| Section Type | Spacing | Example |
|--------------|---------|---------|
| Hero | `xl` or `2xl` | 80-96px |
| Content | `lg` | 64px |
| Features | `lg` | 64px |
| Testimonials | `lg` | 64px |
| CTA | `xl` | 80px |
| Footer | `md` | 48px |

---

## 🎯 Section Composition Patterns

### Alternating Backgrounds

```tsx
<Section spacing="lg" background="default">
  <Features />
</Section>

<Section spacing="lg" background="muted">
  <Testimonials />
</Section>

<Section spacing="lg" background="default">
  <Portfolio />
</Section>
```

### Hero → Content → CTA Flow

```tsx
<Section spacing="2xl" background="gradient">
  <Hero />
</Section>

<Section spacing="lg" background="default">
  <Content />
</Section>

<Section spacing="xl" background="primary">
  <CTA />
</Section>
```

---

## ♿ Accessibility

### Color Contrast

All section variations maintain WCAG 2.1 AA contrast ratios:
- **Default:** 21:1 (AAA)
- **Muted:** 4.6:1 (AA)
- **Primary:** 4.8:1 (AA)
- **Image Background:** Ensure 4.5:1 with overlay

### Focus States

Ensure interactive elements within sections have visible focus states:
```tsx
<button style={{
  outline: '2px solid var(--ring)',
  outlineOffset: '2px'
}}>
  Button in section
</button>
```

---

## ✅ Best Practices

### Do's ✅
- Alternate section backgrounds for visual rhythm
- Use consistent spacing between sections
- Maintain contrast ratios for text readability
- Use glassmorphism sparingly (overlays only)
- Test all variations in both light and dark modes

### Don'ts ❌
- Don't stack same backgrounds consecutively
- Don't use too many different backgrounds in one page
- Don't forget overlay for image backgrounds
- Don't use gradient backgrounds everywhere
- Don't sacrifice readability for aesthetics

---

## 📊 Section Style Matrix

| Background | Best For | Avoid For |
|------------|----------|-----------|
| Default | Standard content | Too many consecutively |
| Muted | Alternating sections | More than 40% of page |
| Card | Highlighted content | Large full-width sections |
| Primary | CTAs, conversion | Long-form content |
| Secondary | Supporting features | Primary CTAs |
| Gradient | Heroes, modern CTAs | Editorial content |
| Glass | Overlays, floating UI | Primary content areas |
| Image | Heroes, testimonials | Text-heavy sections |

---

## 🏗️ WordPress Implementation

### In theme.json

```json
{
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "section-default": {
            "color": {
              "background": "var(--background)",
              "text": "var(--foreground)"
            }
          },
          "section-muted": {
            "color": {
              "background": "var(--muted)",
              "text": "var(--foreground)"
            }
          },
          "section-primary": {
            "color": {
              "background": "var(--primary)",
              "text": "var(--primary-foreground)"
            }
          }
        }
      }
    }
  }
}
```

---

**Last Updated:** December 25, 2024  
**Section Variations:** 8  
**Spacing Options:** 5  
**Theme-Aware:** Light + Dark modes
