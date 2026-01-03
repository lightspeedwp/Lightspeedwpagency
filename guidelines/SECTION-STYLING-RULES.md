# Section Styling Rules - WordPress FSE Concept

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Status:** ✅ Production Ready  
**WordPress Concept:** Block Sections & Group Variations

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [WordPress FSE Concept](#wordpress-fse-concept)
3. [Section Background Patterns](#section-background-patterns)
4. [Section Typography Rules](#section-typography-rules)
5. [Section Spacing Rules](#section-spacing-rules)
6. [Light & Dark Mode](#light--dark-mode)
7. [Creating New Sections](#creating-new-sections)
8. [Examples](#examples)
9. [Common Mistakes](#common-mistakes)

---

## Overview

Sections are the fundamental building blocks of WordPress FSE (Full Site Editing) pages. Each section represents a WordPress Group block with specific styling variations that adapt to light and dark modes.

### Core Principles

1. **Background First:** Every section MUST define a background color
2. **Typography Inheritance:** Text inherits from theme.css - DO NOT override
3. **Spacing Consistency:** Use Section component spacing prop
4. **Mode Adaptation:** All styles MUST work in both light & dark modes
5. **Semantic Colors:** Use CSS variables, never hard-coded values

---

## WordPress FSE Concept

### What is a Section in WordPress?

In WordPress FSE, a "section" is typically a **Group block** with layout and style variations:

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|80"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--80)">
  <!-- Section content -->
</div>
<!-- /wp:group -->
```

### Block Style Variations

WordPress allows registering style variations for Group blocks:

```json
// theme.json
{
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "section-default": {
            "color": {
              "background": "var(--wp--preset--color--background)",
              "text": "var(--wp--preset--color--foreground)"
            }
          },
          "section-card": {
            "color": {
              "background": "var(--wp--preset--color--card)",
              "text": "var(--wp--preset--color--card-foreground)"
            }
          },
          "section-muted": {
            "color": {
              "background": "var(--wp--preset--color--muted)",
              "text": "var(--wp--preset--color--foreground)"
            }
          }
        }
      }
    }
  }
}
```

---

## Section Background Patterns

### Pattern 1: Default Background (Most Common)

**When to Use:**
- Standard content sections
- Neutral backgrounds
- Most page content

**CSS Variables:**
```tsx
{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'  // For headings only - let typography inherit
}
```

**Example:**
```tsx
<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <Container>
    <Typography.H2>Section Heading</Typography.H2>
    <Typography.Body>Section content text</Typography.Body>
  </Container>
</Section>
```

**WordPress FSE:**
```html
<!-- wp:group {"className":"is-style-section-default"} -->
<div class="wp-block-group is-style-section-default">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

### Pattern 2: Card Background (Elevated Sections)

**When to Use:**
- Featured content
- Stats sections
- Testimonials
- Important callouts

**CSS Variables:**
```tsx
{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)'  // For headings only
}
```

**Example:**
```tsx
<Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
  <Container>
    <Typography.H2>Featured Section</Typography.H2>
    <Typography.Body>Elevated content with subtle background</Typography.Body>
  </Container>
</Section>
```

**WordPress FSE:**
```html
<!-- wp:group {"className":"is-style-section-card"} -->
<div class="wp-block-group is-style-section-card">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

**Light Mode:** White background (#FFFFFF)  
**Dark Mode:** Dark gray background (#1E1E1E)

---

### Pattern 3: Muted Background (Alternating Sections)

**When to Use:**
- Alternating with default sections
- Less prominent content
- Visual variety

**CSS Variables:**
```tsx
{
  backgroundColor: 'var(--muted)',
  color: 'var(--foreground)'  // For headings only
}
```

**Example:**
```tsx
<Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
  <Container>
    <Typography.H2>Alternating Section</Typography.H2>
    <Typography.Body>Subtle background variation</Typography.Body>
  </Container>
</Section>
```

**WordPress FSE:**
```html
<!-- wp:group {"className":"is-style-section-muted"} -->
<div class="wp-block-group is-style-section-muted">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

**Light Mode:** Light gray background (#E1E1E1)  
**Dark Mode:** Medium gray background (#565656)

---

### Pattern 4: Accent Background (Special Sections)

**When to Use:**
- Stats/metrics sections
- Special features
- Visual highlights
- Gradient overlays

**CSS Variables:**
```tsx
{
  backgroundColor: 'var(--card)',  // Base layer
  color: 'var(--card-foreground)',
  position: 'relative',
  overflow: 'hidden'
}
```

**Example:**
```tsx
<Section 
  spacing="xl" 
  style={{
    backgroundColor: 'var(--card)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Gradient overlay (decorative) */}
  <div 
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
      opacity: '0.05',
      pointerEvents: 'none'
    }}
    aria-hidden="true"
  />

  {/* Gradient orb (decorative) */}
  <div 
    className="absolute top-0 right-0 w-96 h-96 rounded-full"
    style={{
      background: 'var(--accent)',
      opacity: '0.08',
      filter: 'blur(80px)',
      transform: 'translate(30%, -30%)'
    }}
    aria-hidden="true"
  />

  <Container style={{ position: 'relative', zIndex: 1 }}>
    <Typography.H2>Stats & Metrics</Typography.H2>
    {/* Content */}
  </Container>
</Section>
```

**WordPress FSE:**
```html
<!-- wp:group {"className":"is-style-section-accent"} -->
<div class="wp-block-group is-style-section-accent">
  <div class="gradient-overlay"></div>
  <div class="gradient-orb"></div>
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

## Section Typography Rules

### ✅ CORRECT: Let Typography Inherit

**Rule:** Typography components inherit sizes from theme.css automatically.

```tsx
// ✅ CORRECT - No fontSize override
<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <Container>
    <Typography.H2>Section Heading</Typography.H2>
    <Typography.Body>
      Body text inherits var(--text-base) from theme.css
    </Typography.Body>
  </Container>
</Section>
```

**Result:**
- `<Typography.H2>` automatically uses `font-size: var(--text-h2)` (32px)
- `<Typography.Body>` automatically uses `font-size: var(--text-base)` (16px)
- Both adapt to theme changes

---

### ❌ INCORRECT: Override Typography Sizes

**Rule:** DO NOT override fontSize in sections unless it's an exception.

```tsx
// ❌ WRONG - Hardcoded fontSize override
<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <Container>
    <h2 style={{
      fontSize: 'clamp(32px, 5vw, 48px)',  // ❌ DON'T DO THIS
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--foreground)'
    }}>
      Section Heading
    </h2>
  </Container>
</Section>
```

**Problems:**
- Overrides theme.css defaults
- Not maintainable (can't update globally)
- Inconsistent across site
- Harder to manage responsive behavior

---

### Section Heading Pattern

**Always use Typography components or plain HTML without size overrides:**

```tsx
// ✅ Option 1: Typography component (RECOMMENDED)
<Typography.H2>Section Heading</Typography.H2>

// ✅ Option 2: Plain HTML with color only
<h2 style={{ color: 'var(--foreground)' }}>
  Section Heading
</h2>

// ✅ Option 3: Plain HTML with explicit vars
<h2 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h2)',  // ✅ Use CSS variable
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--foreground)'
}}>
  Section Heading
</h2>

// ❌ WRONG: Hardcoded size
<h2 style={{
  fontSize: 'clamp(32px, 5vw, 48px)',  // ❌ Never do this
  color: 'var(--foreground)'
}}>
  Section Heading
</h2>
```

---

### Section Body Text Pattern

```tsx
// ✅ Option 1: Typography component (RECOMMENDED)
<Typography.Body>Section description text</Typography.Body>

// ✅ Option 2: Plain HTML with color only
<p style={{ color: 'var(--muted-foreground)' }}>
  Section description text
</p>

// ✅ Option 3: Plain HTML with explicit vars
<p style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',  // ✅ Use CSS variable
  color: 'var(--muted-foreground)',
  lineHeight: '1.7'
}}>
  Section description text
</p>

// ❌ WRONG: Hardcoded size
<p style={{
  fontSize: '18px',  // ❌ Never do this
  color: 'var(--muted-foreground)'
}}>
  Section description text
</p>
```

---

## Section Spacing Rules

### Spacing Props

Use the Section component's `spacing` prop:

```tsx
<Section spacing="sm">    {/* Small: 32px top/bottom */}
<Section spacing="md">    {/* Medium: 48px top/bottom */}
<Section spacing="lg">    {/* Large: 64px top/bottom */}
<Section spacing="xl">    {/* Extra Large: 96px top/bottom */}
<Section spacing="2xl">   {/* 2X Large: 128px top/bottom */}
```

### WordPress Mapping

```json
// theme.json spacing presets
{
  "settings": {
    "spacing": {
      "spacingScale": {
        "steps": 0
      },
      "spacingSizes": [
        { "size": "32px", "slug": "sm", "name": "Small" },
        { "size": "48px", "slug": "md", "name": "Medium" },
        { "size": "64px", "slug": "lg", "name": "Large" },
        { "size": "96px", "slug": "xl", "name": "Extra Large" },
        { "size": "128px", "slug": "2xl", "name": "2X Large" }
      ]
    }
  }
}
```

---

## Light & Dark Mode

### Critical Rules

**Every section MUST:**
1. ✅ Use CSS variables for ALL colors
2. ✅ Test in both light AND dark modes
3. ✅ Ensure readability in both modes
4. ✅ Use semantic color names (not appearance-based)

### Testing Checklist

```tsx
// For every section, verify:

// 1. Light Mode
- [ ] Headings readable (contrast ≥ 4.5:1)
- [ ] Body text readable (contrast ≥ 4.5:1)
- [ ] Borders visible
- [ ] Gradients subtle (opacity ≤ 0.1)

// 2. Dark Mode
- [ ] Headings readable (contrast ≥ 4.5:1)
- [ ] Body text readable (contrast ≥ 4.5:1)
- [ ] Borders visible
- [ ] Gradients subtle (opacity ≤ 0.1)
```

### Color Pairing Matrix

| Background | Heading | Body Text | Status |
|------------|---------|-----------|--------|
| `var(--background)` | `var(--foreground)` | `var(--muted-foreground)` | ✅ Perfect |
| `var(--card)` | `var(--card-foreground)` | `var(--muted-foreground)` | ✅ Perfect |
| `var(--muted)` | `var(--foreground)` | `var(--muted-foreground)` | ✅ Perfect |
| `var(--primary)` | `var(--primary-foreground)` | `var(--primary-foreground)` | ⚠️ Small areas only |

---

## Creating New Sections

### Step-by-Step Process

#### Step 1: Choose Background Pattern

```tsx
// Decision tree:
// - Standard content? → var(--background)
// - Featured/elevated? → var(--card)
// - Alternating? → var(--muted)
// - Stats/special? → var(--card) with gradients

const backgroundColor = 'var(--card)';  // Example choice
```

#### Step 2: Set Up Section Structure

```tsx
<Section 
  spacing="xl"  // Choose: sm, md, lg, xl, 2xl
  style={{
    backgroundColor: 'var(--card)',  // From Step 1
  }}
>
  <Container>
    {/* Content goes here */}
  </Container>
</Section>
```

#### Step 3: Add Typography (NO SIZE OVERRIDES)

```tsx
<Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
  <Container>
    {/* Heading - Let inherit from theme.css */}
    <Typography.H2 className="text-center mb-4">
      Section Heading
    </Typography.H2>

    {/* Body - Let inherit from theme.css */}
    <Typography.Body className="text-center mb-12 max-w-2xl mx-auto">
      Section description that inherits proper sizing.
    </Typography.Body>

    {/* Content */}
  </Container>
</Section>
```

#### Step 4: Test Both Modes

```tsx
// 1. Test in light mode
// 2. Switch to dark mode
// 3. Verify:
//    - All text readable
//    - Borders visible
//    - Gradients subtle
//    - No contrast issues
```

#### Step 5: Document the Pattern

```tsx
/**
 * Section: [Name]
 * Background: var(--card)
 * Spacing: xl (96px)
 * Typography: Inherits from theme.css
 * Dark Mode: ✅ Tested
 */
```

---

## Examples

### Example 1: Standard Content Section

```tsx
/**
 * Standard content section
 * Background: Default (white/black)
 * Typography: All inherited
 */
<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <Container>
    <div className="text-center mb-16">
      <Typography.H2 className="mb-4">
        Our Services
      </Typography.H2>
      <Typography.Body className="max-w-2xl mx-auto">
        We provide comprehensive WordPress and WooCommerce solutions.
      </Typography.Body>
    </div>

    {/* Service cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </Container>
</Section>
```

**Light Mode:** White background, black text  
**Dark Mode:** Black background, white text  
**Typography:** All sizes from theme.css

---

### Example 2: Featured Stats Section

```tsx
/**
 * Featured stats section with gradient accents
 * Background: Card (white/dark-gray)
 * Typography: All inherited
 * Decorative: Gradient overlays
 */
<Section 
  spacing="xl" 
  style={{
    backgroundColor: 'var(--card)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Gradient overlay */}
  <div 
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
      opacity: '0.05',
      pointerEvents: 'none'
    }}
    aria-hidden="true"
  />

  <Container style={{ position: 'relative', zIndex: 1 }}>
    <div className="text-center mb-16">
      <Typography.H2 className="mb-4">
        Our Impact
      </Typography.H2>
      <Typography.Body className="max-w-2xl mx-auto">
        Numbers that demonstrate our commitment to excellence.
      </Typography.Body>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center"
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 32px'
          }}
        >
          {/* Stat number - ACCEPTABLE exception for large display text */}
          <div style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'clamp(40px, 6vw, 56px)',  // ✅ Acceptable for display
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--primary)',
            marginBottom: '12px',
            lineHeight: '1'
          }}>
            {stat.number}
          </div>

          {/* Stat label - Use Typography */}
          <Typography.Body className="font-semibold mb-2">
            {stat.label}
          </Typography.Body>

          <Typography.Small>
            {stat.description}
          </Typography.Small>
        </div>
      ))}
    </div>
  </Container>
</Section>
```

**Light Mode:** White card, subtle cyan gradient  
**Dark Mode:** Dark gray card, subtle blue gradient  
**Typography:** Inherits except display numbers (acceptable exception)

---

### Example 3: Alternating Section Pattern

```tsx
/**
 * Page with alternating section backgrounds
 */
function PageTemplate() {
  return (
    <main>
      {/* Section 1: Default background */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <Typography.H2>First Section</Typography.H2>
          <Typography.Body>Standard background</Typography.Body>
        </Container>
      </Section>

      {/* Section 2: Muted background */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
        <Container>
          <Typography.H2>Second Section</Typography.H2>
          <Typography.Body>Subtle variation</Typography.Body>
        </Container>
      </Section>

      {/* Section 3: Card background */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--card)' }}>
        <Container>
          <Typography.H2>Third Section</Typography.H2>
          <Typography.Body>Elevated section</Typography.Body>
        </Container>
      </Section>

      {/* Section 4: Back to default */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <Typography.H2>Fourth Section</Typography.H2>
          <Typography.Body>Back to standard</Typography.Body>
        </Container>
      </Section>
    </main>
  );
}
```

**Pattern:** Default → Muted → Card → Default  
**Typography:** All inherited from theme.css  
**Spacing:** Consistent xl (96px) throughout

---

## Common Mistakes

### ❌ Mistake 1: Hardcoded Font Sizes

```tsx
// ❌ WRONG
<h2 style={{
  fontSize: 'clamp(32px, 5vw, 48px)',
  color: 'var(--foreground)'
}}>
  Section Heading
</h2>

// ✅ CORRECT
<Typography.H2>Section Heading</Typography.H2>

// or

<h2 style={{
  fontSize: 'var(--text-h2)',  // Use CSS variable
  color: 'var(--foreground)'
}}>
  Section Heading
</h2>
```

---

### ❌ Mistake 2: Wrong Color Pairing

```tsx
// ❌ WRONG - Mismatched pairing
<Section style={{ backgroundColor: 'var(--card)' }}>
  <h2 style={{ color: 'var(--foreground)' }}>  {/* Should be card-foreground */}
    Heading
  </h2>
</Section>

// ✅ CORRECT
<Section style={{ backgroundColor: 'var(--card)' }}>
  <h2 style={{ color: 'var(--card-foreground)' }}>
    Heading
  </h2>
</Section>
```

---

### ❌ Mistake 3: Using Primary for Large Backgrounds

```tsx
// ❌ WRONG - Poor readability in light mode
<Section style={{ backgroundColor: 'var(--primary)' }}>
  <h2 style={{ color: 'var(--primary-foreground)' }}>
    Heading
  </h2>
</Section>

// ✅ CORRECT - Use card background
<Section style={{ backgroundColor: 'var(--card)' }}>
  <h2 style={{ color: 'var(--card-foreground)' }}>
    Heading
  </h2>
</Section>
```

---

### ❌ Mistake 4: Not Testing Dark Mode

```tsx
// ❌ WRONG - Only tested in light mode
<Section style={{ backgroundColor: '#FFFFFF' }}>  {/* Hard-coded! */}
  <h2 style={{ color: '#000000' }}>Heading</h2>  {/* Hard-coded! */}
</Section>

// ✅ CORRECT - Uses CSS variables (adapts automatically)
<Section style={{ backgroundColor: 'var(--background)' }}>
  <Typography.H2>Heading</Typography.H2>
</Section>
```

---

### ❌ Mistake 5: Overriding Typography Component Sizes

```tsx
// ❌ WRONG - Defeats the purpose of Typography components
<Typography.H2 style={{ fontSize: '48px' }}>
  Heading
</Typography.H2>

// ✅ CORRECT - Let component handle sizing
<Typography.H2>
  Heading
</Typography.H2>
```

---

## Quick Reference

### Section Background Decision Tree

```
Need a section background?
│
├─ Standard content?
│  └─ Use: var(--background)
│
├─ Featured/elevated?
│  └─ Use: var(--card)
│
├─ Alternating sections?
│  └─ Use: var(--muted)
│
└─ Stats/special content?
   └─ Use: var(--card) + gradient overlays
```

### Typography Decision Tree

```
Need text in a section?
│
├─ Heading?
│  └─ Use: <Typography.H2> (or H1, H3, H4)
│
├─ Body text?
│  └─ Use: <Typography.Body>
│
├─ Small text?
│  └─ Use: <Typography.Small>
│
└─ Display/hero text?
   └─ Acceptable exception: Use clamp() for fluid sizing
```

### Color Pairing Cheat Sheet

```tsx
// Default background
backgroundColor: 'var(--background)'
headingColor: 'var(--foreground)'
bodyColor: 'var(--muted-foreground)'

// Card background
backgroundColor: 'var(--card)'
headingColor: 'var(--card-foreground)'
bodyColor: 'var(--muted-foreground)'

// Muted background
backgroundColor: 'var(--muted)'
headingColor: 'var(--foreground)'
bodyColor: 'var(--muted-foreground)'
```

---

## Summary Checklist

Before creating a new section:

- [ ] Choose background from approved patterns
- [ ] Use Section component with spacing prop
- [ ] Use Typography components (no size overrides)
- [ ] Use CSS variables for ALL colors
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Verify contrast ratios (≥ 4.5:1)
- [ ] Ensure gradients are subtle (≤ 0.1 opacity)
- [ ] Document the pattern
- [ ] Add to pattern library

---

**Last Updated:** December 25, 2024  
**WordPress Concept:** Group Block Variations  
**Status:** ✅ Production Ready  
**Compliance:** 100% WCAG 2.1 AA
