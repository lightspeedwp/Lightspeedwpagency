# Color Tokens — States, Borders & Semantic Usage

**Category:** Design Tokens  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [colors.md](../colors.md)  

---

## State Colors

### Destructive Color (Errors & Dangerous Actions)

**`--destructive` / `--destructive-foreground`**

Use for: Delete buttons, error messages, warning states

```tsx
// Delete button
<button style={{
  backgroundColor: 'var(--destructive)',
  color: 'var(--destructive-foreground)',
  padding: '12px 24px',
  borderRadius: 'var(--radius)',
  border: 'none'
}}>
  Delete
</button>

// Error message
<div style={{
  backgroundColor: 'var(--destructive)',
  color: 'var(--destructive-foreground)',
  padding: '16px',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--destructive)'
}}>
  <strong>Error:</strong> Something went wrong
</div>
```

**Values:**
```css
/* Light Mode */
--destructive: rgba(204, 0, 0, 1);       /* #CC0000 - Red */
--destructive-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - White */

/* Dark Mode */
--destructive: rgba(255, 99, 99, 1);     /* #FF6363 - Light red */
--destructive-foreground: rgba(9, 9, 9, 1); /* #090909 - Nearly black */
```

**Contrast Ratio:** 6.1:1 WCAG AA

---

## Border Colors

### Standard Border

**`--border`**

Use for: Form inputs, prominent dividers, strong separators

```tsx
<div style={{
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: '16px'
}}>
  Content with standard border
</div>

<input 
  type="text"
  style={{
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '12px 16px'
  }}
/>
```

**Value:**
```css
--border: rgba(117, 117, 117, 1);        /* #757575 - Medium gray (both modes) */
```

---

### Soft Border (Modern Design)

**`--border-soft`**

Use for: Card borders, subtle dividers, modern UI elements

**Recommended for most card/section borders.**

```tsx
<div style={{
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px',
  backgroundColor: 'var(--card)'
}}>
  Modern card with soft border
</div>
```

**Values:**
```css
/* Light Mode */
--border-soft: rgba(0, 0, 0, 0.08);      /* Soft black - 8% opacity */

/* Dark Mode */
--border-soft: rgba(255, 255, 255, 0.08); /* Soft white - 8% opacity */
```

**Visual Effect:** Creates subtle definition without harsh lines

---

### Extra Soft Border (Very Subtle)

**`--border-extra-soft`**

Use for: Very subtle dividers, section separators, minimal UI

```tsx
<hr style={{
  border: 'none',
  borderTop: '1px solid var(--border-extra-soft)',
  margin: '32px 0'
}} />

<div style={{
  borderBottom: '1px solid var(--border-extra-soft)',
  paddingBottom: '16px'
}}>
  Section with minimal divider
</div>
```

**Values:**
```css
/* Light Mode */
--border-extra-soft: rgba(0, 0, 0, 0.04); /* Soft black - 4% opacity */

/* Dark Mode */
--border-extra-soft: rgba(255, 255, 255, 0.04); /* Soft white - 4% opacity */
```

---

## Semantic Color Usage

### Decision Matrix: Which Color When?

#### Section Backgrounds

```tsx
// Pattern 1: Default page background
<Section style={{ backgroundColor: 'var(--background)' }}>
  <h2 style={{ color: 'var(--foreground)' }}>Heading</h2>
  <p style={{ color: 'var(--muted-foreground)' }}>Description</p>
</Section>

// Pattern 2: Card/elevated background (RECOMMENDED)
<Section style={{ backgroundColor: 'var(--card)' }}>
  <h2 style={{ color: 'var(--card-foreground)' }}>Heading</h2>
  <p style={{ color: 'var(--muted-foreground)' }}>Description</p>
</Section>

// Pattern 3: Subtle/muted background
<Section style={{ backgroundColor: 'var(--muted)' }}>
  <h2 style={{ color: 'var(--foreground)' }}>Heading</h2>
  <p style={{ color: 'var(--muted-foreground)' }}>Description</p>
</Section>

// Pattern 4: Alternating sections
<Section style={{ backgroundColor: 'var(--background)' }} />
<Section style={{ backgroundColor: 'var(--muted)' }} />
<Section style={{ backgroundColor: 'var(--card)' }} />
```

#### Card Backgrounds

```tsx
// Standard card (RECOMMENDED)
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  padding: '24px'
}}>
  <h3 style={{ color: 'var(--card-foreground)' }}>Card Title</h3>
  <p style={{ color: 'var(--muted-foreground)' }}>Card description</p>
</div>

// Glassmorphism card (overlays)
<div style={{
  backgroundColor: 'var(--glass-bg)',
  backdropFilter: 'blur(16px)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '32px'
}}>
  <h3 style={{ color: 'var(--glass-text)' }}>Glass Card</h3>
</div>
```

#### Text Colors

```tsx
// Headings (high emphasis)
<h1 style={{ color: 'var(--foreground)' }}>Main Heading</h1>
<h2 style={{ color: 'var(--card-foreground)' }}>Card Heading</h2>

// Body text (medium emphasis)
<p style={{ color: 'var(--muted-foreground)' }}>
  Body text with proper contrast
</p>

// Metadata/secondary text (low emphasis)
<span style={{ 
  color: 'var(--muted-foreground)',
  fontSize: 'var(--text-small)',
  opacity: 0.85
}}>
  Posted 2 days ago
</span>

// Accent highlights
<span style={{ color: 'var(--primary)' }}>500+</span>

// Links
<a style={{ color: 'var(--accent)' }}>Read more</a>
```

---

**See also:** [colors-core.md](./colors-core.md) | [colors-patterns.md](./colors-patterns.md) | [colors-reference.md](./colors-reference.md)
