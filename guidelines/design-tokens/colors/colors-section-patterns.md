# Color Tokens — Section Background Patterns

**Category:** Design Tokens  
**Version:** 1.4.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [colors.md](../colors.md)  

---

## Section Background Patterns

### Pattern Library

#### Pattern 1: Default Background Section

**Use for:** Main content areas, neutral sections

```tsx
<Section 
  spacing="xl" 
  style={{ backgroundColor: 'var(--background)' }}
>
  <Container>
    <h2 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--foreground)',
      marginBottom: '16px'
    }}>
      Section Title
    </h2>
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-lg)',
      color: 'var(--muted-foreground)',
      lineHeight: '1.7'
    }}>
      Section description
    </p>
  </Container>
</Section>
```

**Colors:**
- Background: `var(--background)`
- Heading: `var(--foreground)`
- Body: `var(--muted-foreground)`

---

#### Pattern 2: Card Background Section (RECOMMENDED)

**Use for:** Featured sections, content areas, stats, testimonials

**This is the recommended pattern for most sections.**

```tsx
<Section 
  spacing="xl" 
  style={{
    backgroundColor: 'var(--card)',
    color: 'var(--card-foreground)'
  }}
>
  <Container>
    <h2 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--card-foreground)',
      marginBottom: '16px'
    }}>
      Section Title
    </h2>
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-lg)',
      color: 'var(--muted-foreground)',
      lineHeight: '1.7'
    }}>
      Section description
    </p>
  </Container>
</Section>
```

**Colors:**
- Background: `var(--card)`
- Heading: `var(--card-foreground)`
- Body: `var(--muted-foreground)`

**Why recommended:** Perfect contrast in both modes, subtle elevation from page background, consistent with card UI patterns

---

#### Pattern 3: Muted Background Section

**Use for:** Alternating sections, less prominent areas

```tsx
<Section 
  spacing="xl" 
  style={{ backgroundColor: 'var(--muted)' }}
>
  <Container>
    <h2 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--foreground)',
      marginBottom: '16px'
    }}>
      Section Title
    </h2>
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-lg)',
      color: 'var(--muted-foreground)',
      lineHeight: '1.7'
    }}>
      Section description
    </p>
  </Container>
</Section>
```

**Colors:**
- Background: `var(--muted)`
- Heading: `var(--foreground)`
- Body: `var(--muted-foreground)`

---

#### Pattern 4: Stats/Metrics Section with Gradient Accents

**Use for:** Statistics, metrics, achievements

```tsx
<Section 
  spacing="xl" 
  style={{
    backgroundColor: 'var(--card)',
    color: 'var(--card-foreground)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Subtle gradient overlay */}
  <div 
    style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
      opacity: '0.05',
      pointerEvents: 'none'
    }}
    aria-hidden="true"
  />

  <Container style={{ position: 'relative', zIndex: 1 }}>
    <h2 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--card-foreground)',
      marginBottom: '16px'
    }}>
      Our Impact
    </h2>

    {/* Stat cards use glassmorphism */}
    <div style={{
      backgroundColor: 'var(--glass-bg)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-xl)',
      padding: '48px 32px'
    }}>
      <div style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'clamp(40px, 6vw, 56px)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--primary)',
        marginBottom: '12px',
        lineHeight: '1'
      }}>
        500+
      </div>
    </div>
  </Container>
</Section>
```

**Colors:**
- Section Background: `var(--card)`
- Stat Numbers: `var(--primary)` (accent)
- Stat Labels: `var(--card-foreground)`
- Card Background: `var(--glass-bg)` (glassmorphism)
- Gradient Overlay: `var(--accent)` at 5% opacity

---

### Complete Page Example (Alternating Sections)

```tsx
{/* Hero - Background color */}
<HeroSection />

{/* Features - Card background */}
<Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
  <FeaturesContent />
</Section>

{/* Services - Muted background */}
<Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
  <ServicesContent />
</Section>

{/* Portfolio - Background color */}
<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <PortfolioContent />
</Section>

{/* Stats - Card with gradients */}
<Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
  <StatsContent />
</Section>

{/* CTA - Card background */}
<Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
  <CTAContent />
</Section>
```

---

**See also:** [colors-modes-contrast.md](./colors-modes-contrast.md)
