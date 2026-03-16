# Spacing Tokens — Patterns, Utilities & Best Practices

**Category:** Design Tokens  
**Version:** 2.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [spacing.md](../spacing.md)  

---

## WordPress Section Patterns

### Section Component with WordPress Spacing

```tsx
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <HeroContent />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <ContentBlock />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--50)' }}>
  <CTASection />
</Section>
```

---

## Spacing Best Practices

### Do's

- **Use WordPress CSS variables** — `var(--wp--preset--spacing--40)`
- **Use numeric slugs** — 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
- **Use consistent gaps** — 20px, 30px, 40px, 50px
- **Use responsive spacing** — Adjust via media queries
- **Maintain vertical rhythm** — Consistent spacing between sections
- **Reference theme.json** — All spacing defined in theme.json

### Don'ts

- **Don't hard-code pixels** — Never use `padding: 24px`
- **Don't use arbitrary values** — Avoid `padding: 37px`
- **Don't invent new spacing tokens** — Use the existing primary or WordPress scales
- **Don't forget mobile** — Always test on small screens
- **Don't over-space** — More is not always better

---

## Spacing Matrix

### Common Combinations

| Element | Padding | Gap | Margin Bottom |
|---------|---------|-----|---------------|
| Hero Section | `var(--wp--preset--spacing--80)` | - | - |
| Content Section | `var(--wp--preset--spacing--60)` | - | - |
| Card Grid | - | `var(--wp--preset--spacing--40)` | - |
| Card | `var(--wp--preset--spacing--30)` | `var(--wp--preset--spacing--20)` | - |
| Heading | - | - | `var(--wp--preset--spacing--20)` |
| Paragraph | - | - | `var(--wp--preset--spacing--30)` |
| Button | `var(--wp--preset--spacing--20) var(--wp--preset--spacing--40)` | - | - |
| Form Input | `var(--wp--preset--spacing--20)` | - | `var(--wp--preset--spacing--20)` |

---

## Vertical Rhythm

### Section-to-Section Spacing

```tsx
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <Hero />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <Features />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <Testimonials />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <CTA />
</Section>
```

### Typography Vertical Rhythm

```tsx
<h1 style={{ marginBottom: 'var(--wp--preset--spacing--20)' }}>Heading 1</h1>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>Paragraph text</p>

<h2 style={{ marginBottom: 'var(--wp--preset--spacing--20)' }}>Heading 2</h2>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>Paragraph text</p>

<h3 style={{ marginBottom: 'var(--wp--preset--spacing--10)' }}>Heading 3</h3>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>Paragraph text</p>
```

---

## WordPress theme.json Integration

### Complete Spacing Configuration

```json
{
  "settings": {
    "spacing": {
      "customSpacingSize": true,
      "units": ["px", "em", "rem", "vh", "vw", "%"],
      "spacingSizes": [
        { "slug": "10", "size": "0.625rem", "name": "10px" },
        { "slug": "20", "size": "1.25rem", "name": "20px" },
        { "slug": "30", "size": "1.875rem", "name": "30px" },
        { "slug": "40", "size": "2.5rem", "name": "40px" },
        { "slug": "50", "size": "3.125rem", "name": "50px" },
        { "slug": "60", "size": "3.75rem", "name": "60px" },
        { "slug": "70", "size": "4.375rem", "name": "70px" },
        { "slug": "80", "size": "5rem", "name": "80px" },
        { "slug": "90", "size": "5.625rem", "name": "90px" },
        { "slug": "100", "size": "6.25rem", "name": "100px" }
      ]
    }
  }
}
```

### Usage in Block Patterns

```php
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

## WordPress Utility Classes (CSS-First)

**Location:** `/src/styles/utilities.css`

**CRITICAL:** All layout and spacing must use WordPress utility classes (`.wp-*` prefix). NO Tailwind CSS classes allowed.

### Grid Utilities

```tsx
// CORRECT - WordPress utility class
<div className="wp-grid-3-cols">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// WRONG - Tailwind classes (DO NOT USE)
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

**Available Grid Utilities:**

| Class | Behavior | CSS |
|-------|----------|-----|
| `.wp-grid-2-cols` | 1 col mobile, 2 cols desktop | `gap: var(--spacing-8)` |
| `.wp-grid-3-cols` | 1 col mobile, 2 tablet, 3 desktop | `gap: var(--spacing-8)` |
| `.wp-grid-4-cols` | 1 col mobile, 2 tablet, 4 desktop | `gap: var(--spacing-8)` |

### Max-Width Utilities

```tsx
// CORRECT - WordPress utility class
<div className="wp-max-w-6xl">
  <Content />
</div>

// WRONG - Tailwind classes (DO NOT USE)
<div className="max-w-6xl mx-auto">
```

| Class | Max-Width | Usage |
|-------|-----------|-------|
| `.wp-max-w-3xl` | 768px | Narrow content (blog posts, FAQs) |
| `.wp-max-w-4xl` | 896px | Medium content (hero sections) |
| `.wp-max-w-6xl` | 1152px | Wide content (grids, archives) |

### Text Alignment Utilities

```tsx
// CORRECT - WordPress utility class
<div className="wp-text-center">
  <h1>Centered Heading</h1>
</div>

// WRONG - Tailwind class (DO NOT USE)
<div className="text-center">
```

| Class | Alignment |
|-------|-----------|
| `.wp-text-center` | Center |
| `.wp-text-left` | Left |
| `.wp-text-right` | Right |

### Combined Example

```tsx
<Section>
  <div className="wp-max-w-6xl">
    <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
      <h2>Featured Projects</h2>
      <p>Our recent work</p>
    </div>

    <div className="wp-grid-3-cols">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
</Section>
```

### Migration from Tailwind

**DO NOT use these Tailwind classes:**

- `grid`, `grid-cols-*`, `md:grid-cols-*`, `lg:grid-cols-*`
- `gap-*` (use CSS variable: `gap: 'var(--spacing-8)'`)
- `max-w-*`, `mx-auto`
- `text-center`, `text-left`, `text-right`
- `p-*`, `px-*`, `py-*` (use CSS variables)

**Instead use:**

- `.wp-grid-*-cols` for grids
- `.wp-max-w-*` for max-width containers
- `.wp-text-*` for text alignment
- CSS variables for spacing: `padding: 'var(--spacing-6)'`

### Why WordPress Utilities?

1. **User Control:** All utilities use CSS variables — users edit CSS files to update styling
2. **WordPress FSE Compatible:** `.wp-*` prefix aligns with WordPress block naming
3. **theme.json Ready:** Utilities map directly to WordPress theme.json presets
4. **No Build Step:** Pure CSS, no Tailwind compilation needed
5. **Maintainable:** Centralized in `/src/styles/utilities.css`

---

## Summary Checklist

- [ ] Use WordPress numeric scale (10-100)
- [ ] Use CSS custom properties (`var(--wp--preset--spacing--XX)`)
- [ ] Use WordPress utility classes (`.wp-*`) for layout
- [ ] NO Tailwind CSS classes
- [ ] Never hard-code pixel values
- [ ] Maintain consistent spacing across components
- [ ] Use responsive spacing for mobile/desktop
- [ ] Reference theme.json for all spacing values
- [ ] Test vertical rhythm and section spacing

---

**See also:** [spacing-tokens.md](./spacing-tokens.md)
