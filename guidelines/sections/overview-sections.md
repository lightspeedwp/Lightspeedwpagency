# Section Styles Overview

This document explains the **section style system** for LSX Design, which maps directly to **WordPress Group block variations** and allows site-wide style changes through `theme.json`.

---

## Section Philosophy

Sections are **semantic containers** that wrap content patterns with consistent spacing and background treatments. They map to WordPress core/group blocks with custom variations.

**WordPress Mapping:**
```html
<!-- core/group block with variation -->
<div class="wp-block-group is-style-surface">
  <!-- Pattern content here -->
</div>
```

---

## Available Section Styles

LSX Design provides **8 section styles** that can be applied to any section:

| Style | Purpose | Background | Spacing | Use Cases |
|-------|---------|------------|---------|-----------|
| **Default** | Standard content | `var(--background)` | Standard | Most content sections |
| **Surface** | Elevated content | `var(--surface)` | Standard | Cards, feature sections |
| **Hero** | Large landing areas | `var(--background)` | 85vh min-height | Homepage heroes, CTAs |
| **Brand** | Trust/proof content | `var(--primary)` | Standard | Social proof, testimonials |
| **Accent** | Highlights | `var(--accent)` | Standard | Special offers, announcements |
| **Full-Width** | Edge-to-edge | `var(--background)` | No container | Images, banners |
| **Narrow** | Reading content | `var(--background)` | 780px max | Blog posts, articles |
| **Compact** | Tighter spacing | `var(--background)` | Reduced | Footer, compact lists |

---

## Section Style Specifications

### 1. Default Section

**Purpose:** Standard content sections  
**WordPress Variation:** `is-style-default` (or no variation)

```tsx
<Section spacing="60">
  <Container>
    {/* Content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--background);
color: var(--foreground);
padding: var(--spacing-60);
```

**Use Cases:**
- General content sections
- Card grids
- Text content
- Default choice when unsure

---

### 2. Surface Section

**Purpose:** Elevated/raised content with subtle background  
**WordPress Variation:** `is-style-surface`

```tsx
<Section spacing="60" background="surface">
  <Container>
    {/* Content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--surface);
color: var(--foreground);
padding: var(--spacing-60);
```

**Use Cases:**
- Feature sections
- Highlighted content
- Alternating sections
- Service listings
- Product showcases

---

### 3. Hero Section

**Purpose:** Large landing areas with strong visual presence  
**WordPress Variation:** `is-style-hero`

```tsx
<Section spacing="80" minHeight="85vh">
  <Container>
    {/* Hero content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--background);
color: var(--foreground);
padding: var(--spacing-80);
min-height: 85vh;
display: flex;
align-items: center;
```

**Use Cases:**
- Homepage heroes
- Landing page headers
- Large CTAs
- Page intros with impact

---

### 4. Brand Section

**Purpose:** Brand-colored backgrounds for trust/proof content  
**WordPress Variation:** `is-style-brand`

```tsx
<Section spacing="60" background="brand">
  <Container>
    {/* Brand content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--primary);
color: var(--primary-foreground);
padding: var(--spacing-60);
```

**Use Cases:**
- Social proof sections
- Testimonials
- Partner logos
- Trust indicators
- Awards/certifications

---

### 5. Accent Section

**Purpose:** Highlight sections with accent color  
**WordPress Variation:** `is-style-accent`

```tsx
<Section spacing="60" background="accent">
  <Container>
    {/* Accent content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--accent);
color: var(--accent-foreground);
padding: var(--spacing-60);
```

**Use Cases:**
- Special offers
- Announcements
- Limited-time content
- Newsletter signups
- Important notices

---

### 6. Full-Width Section

**Purpose:** Edge-to-edge content without container constraints  
**WordPress Variation:** `is-style-full-width`

```tsx
<Section spacing="0" fullWidth>
  {/* No Container - content spans full width */}
</Section>
```

**CSS Variables:**
```css
background-color: var(--background);
color: var(--foreground);
padding: 0;
width: 100%;
max-width: none;
```

**Use Cases:**
- Hero images
- Full-width banners
- Background image sections
- Dividers
- Maps

---

### 7. Narrow Section

**Purpose:** Reading-optimized width for long-form content  
**WordPress Variation:** `is-style-narrow`

```tsx
<Section spacing="60" maxWidth="780px">
  <Container maxWidth="780px">
    {/* Reading content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--background);
color: var(--foreground);
padding: var(--spacing-60);
max-width: 780px;
margin: 0 auto;
```

**Use Cases:**
- Blog posts
- Articles
- Long-form content
- Single column text
- Reading-focused pages

---

### 8. Compact Section

**Purpose:** Tighter spacing for dense content  
**WordPress Variation:** `is-style-compact`

```tsx
<Section spacing="40">
  <Container>
    {/* Compact content */}
  </Container>
</Section>
```

**CSS Variables:**
```css
background-color: var(--background);
color: var(--foreground);
padding: var(--spacing-40);
```

**Use Cases:**
- Footer sections
- Compact lists
- Dense data displays
- Navigation menus
- Copyright notices

---

## React Component Usage

### Section Component Props

```tsx
interface SectionProps {
  spacing?: '30' | '40' | '50' | '60' | '70' | '80';
  background?: 'default' | 'surface' | 'brand' | 'accent';
  minHeight?: string;
  fullWidth?: boolean;
  maxWidth?: string;
  children: React.ReactNode;
}
```

### Examples

**Standard Section:**
```tsx
<Section spacing="60">
  <Container>
    <h2>Section Title</h2>
    <p>Content here</p>
  </Container>
</Section>
```

**Surface Section:**
```tsx
<Section spacing="60" background="surface">
  <Container>
    <CardGrid items={data} />
  </Container>
</Section>
```

**Hero Section:**
```tsx
<Section spacing="80" minHeight="85vh">
  <Container>
    <h1>Hero Title</h1>
    <Button>Call to Action</Button>
  </Container>
</Section>
```

**Full-Width Section:**
```tsx
<Section spacing="0" fullWidth>
  <img src="banner.jpg" alt="Banner" style={{ width: '100%' }} />
</Section>
```

---

## WordPress FSE Mapping

### theme.json Configuration

```json
{
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "default": {
            "spacing": {
              "padding": {
                "top": "var(--spacing-60)",
                "bottom": "var(--spacing-60)"
              }
            },
            "color": {
              "background": "var(--background)",
              "text": "var(--foreground)"
            }
          },
          "surface": {
            "color": {
              "background": "var(--surface)"
            }
          },
          "hero": {
            "spacing": {
              "padding": {
                "top": "var(--spacing-80)",
                "bottom": "var(--spacing-80)"
              }
            },
            "dimensions": {
              "minHeight": "85vh"
            }
          },
          "brand": {
            "color": {
              "background": "var(--primary)",
              "text": "var(--primary-foreground)"
            }
          },
          "accent": {
            "color": {
              "background": "var(--accent)",
              "text": "var(--accent-foreground)"
            }
          },
          "narrow": {
            "layout": {
              "contentSize": "780px"
            }
          },
          "compact": {
            "spacing": {
              "padding": {
                "top": "var(--spacing-40)",
                "bottom": "var(--spacing-40)"
              }
            }
          }
        }
      }
    }
  }
}
```

---

## Combining Section Styles

Sections can be combined to create page rhythm:

```tsx
// Alternating backgrounds
<Section spacing="60">
  <Container>
    <h2>Standard Section</h2>
  </Container>
</Section>

<Section spacing="60" background="surface">
  <Container>
    <h2>Surface Section</h2>
  </Container>
</Section>

<Section spacing="60">
  <Container>
    <h2>Standard Section</h2>
  </Container>
</Section>
```

---

## Accessibility

All section styles must maintain:
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Semantic HTML (`<section>` elements)
- ✅ Logical heading hierarchy
- ✅ Keyboard navigable content
- ✅ Focus states on interactive elements

---

## Responsive Behavior

Section spacing automatically adjusts for mobile:

```css
/* Desktop */
--spacing-60: 60px;

/* Tablet */
@media (max-width: 768px) {
  --spacing-60: 40px;
}

/* Mobile */
@media (max-width: 480px) {
  --spacing-60: 30px;
}
```

---

## Common Patterns

### Homepage Pattern
```tsx
<Section spacing="80" minHeight="85vh"> {/* Hero */}
  <HeroHome />
</Section>

<Section spacing="60"> {/* Features */}
  <CardGrid />
</Section>

<Section spacing="60" background="surface"> {/* Testimonials */}
  <TestimonialGrid />
</Section>

<Section spacing="60" background="brand"> {/* CTA */}
  <CTASection />
</Section>
```

### Archive Pattern
```tsx
<Section spacing="50"> {/* Archive Header */}
  <ArchiveHeader />
</Section>

<Section spacing="60"> {/* Results Grid */}
  <CardGrid />
  <Pagination />
</Section>
```

### Single Post Pattern
```tsx
<Section spacing="60" minHeight="60vh"> {/* Hero */}
  <PostHero />
</Section>

<Section spacing="60" maxWidth="780px"> {/* Content */}
  <PostContent />
</Section>

<Section spacing="60" background="surface"> {/* Related */}
  <RelatedPosts />
</Section>
```

---

## Best Practices

### ✅ DO

- Use Default for most content sections
- Use Surface to create visual distinction
- Use Hero for impactful landing areas
- Use Brand for trust/social proof
- Use Narrow for reading content
- Alternate backgrounds for visual rhythm
- Maintain consistent spacing scale

### ❌ DON'T

- Mix too many background variations on one page
- Use Brand section excessively
- Override section padding with arbitrary values
- Create custom section styles outside the system
- Skip semantic HTML (`<section>` elements)
- Ignore responsive spacing adjustments

---

## Related Documentation

- **[design-tokens/spacing.md](../design-tokens/spacing.md)** — Spacing scale
- **[design-tokens/colors.md](../design-tokens/colors.md)** — Color system
- **[components/Section.md](../components/Section.md)** — Section component
- **[components/Container.md](../components/Container.md)** — Container component
- **[overview-patterns.md](../patterns/overview-patterns.md)** — Pattern composition

---

## Additional Section Documentation

### **Section Style Presets** (`/guidelines/styles/`)

- **[section-styles.md](../styles/section-styles.md)** — 17 section style presets ⭐⭐
  - Complete style preset system (hero-primary, cta-primary, feature-surface, etc.)
  - 7 style categories (Hero, CTA, Feature, Content, Stats, Testimonial, Pricing)
  - WordPress FSE compatible
  - Ready-to-use section variations

**Total Section Documentation:** 1 overview + 1 preset system

---

**Last Updated:** December 27, 2024  
**System Version:** 1.0  
**WordPress Compatibility:** FSE (Full Site Editing)