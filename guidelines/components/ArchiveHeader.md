# ArchiveHeader Pattern

**Pattern Type:** Header Section  
**WordPress Pattern:** `lsx-design/header/archive`  
**Location:** `/src/app/components/patterns/ArchiveHeader.tsx`

---

## Purpose

Page header for archive/listing pages (category, tag, taxonomy). Provides context with title, description, and optional item count. Establishes page hierarchy.

---

## Design System Requirements

### Layout
- **Spacing:** Use `<Section spacing="lg">`
- **Alignment:** Center-aligned text
- **Max Width:** 700px for content

### Typography

**Title:**
- Use `<Heading level={1}>`
- Size: `var(--text-h1)` (60px)
- **CRITICAL:** Only one H1 per page

**Description:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-h4)` (20px)
- Weight: `var(--font-weight-regular)`
- Color: `var(--muted-foreground)`
- Line height: 1.6

**Count Badge:**
- Font: `Manrope, sans-serif` (small text exception)
- Size: `var(--text-small)` (14px)
- Weight: `var(--font-weight-medium)`
- Transform: Uppercase
- Letter spacing: `0.05em`

### Colors

**Background:**
```tsx
backgroundColor: 'transparent' // or 'var(--muted)' for distinction
```

**Count Badge:**
```tsx
backgroundColor: 'var(--accent)'
color: 'var(--accent-foreground)'
```

### Spacing
- **Section Padding:** `py-16` (64px)
- **Title → Description:** `mt-6` (24px)
- **Description → Count:** `mt-4` (16px)

### Border Radius
- **Count Badge:** `var(--radius)` (4px)

---

## Usage

### Basic Archive Header
```tsx
import { ArchiveHeader } from '../patterns/ArchiveHeader';

<ArchiveHeader
  title="African Destinations"
  description="Explore our curated collection of unforgettable destinations across the African continent."
  count={24}
/>
```

### Without Count
```tsx
<ArchiveHeader
  title="Travel Blog"
  description="Stories and insights from our journeys around the world."
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Archive/category title |
| `description` | string | required | Supporting description |
| `count` | number | - | Optional item count |

---

## WordPress Implementation

In WordPress, this maps to the **Archive Title** block pattern:

```php
<?php
/**
 * Title: Archive Header
 * Slug: lsx-design/header/archive
 * Categories: header
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"64px","bottom":"64px"}}}} -->
<div class="wp-block-group alignfull" style="padding-top:64px;padding-bottom:64px">
  
  <!-- wp:group {"layout":{"type":"constrained","contentSize":"700px"}} -->
  <div class="wp-block-group">
    
    <!-- wp:query-title {"type":"archive","textAlign":"center"} /-->
    
    <!-- wp:term-description {"textAlign":"center"} /-->
    
    <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
    <p class="has-text-align-center has-small-font-size">
      <?php echo esc_html( sprintf( __( '%d posts', 'lsx-design' ), $count ) ); ?>
    </p>
    <!-- /wp:paragraph -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend for title and description
- Manrope for count badge only
- CSS variables for all colors
- CSS variables for font sizes
- `<Heading level={1}>` for title
- Tailwind spacing classes
- Center alignment

❌ **FORBIDDEN:**
- Hard-coded colors
- Hard-coded pixel spacing
- Tailwind font size classes
- Multiple H1 elements (only one per page)
- Missing description (required for context)

---

## Accessibility

### Heading Hierarchy
- **CRITICAL:** Archive title is the page's only `<h1>`
- All section titles below must be `<h2>`
- Never skip heading levels

### Semantic HTML
```tsx
<header role="banner">
  <Section>
    <Container>
      <Heading level={1}>{title}</Heading>
      <p>{description}</p>
    </Container>
  </Section>
</header>
```

### Screen Readers
- Title announces page context
- Description provides additional context
- Count badge is supplementary info

---

## Examples

### Category Archive
```tsx
<ArchiveHeader
  title="Wildlife Safaris"
  description="Embark on unforgettable wildlife adventures across Africa's most spectacular national parks and reserves."
  count={18}
/>
```

### Tag Archive
```tsx
<ArchiveHeader
  title="Family Travel"
  description="Destinations and experiences perfect for family adventures, from toddlers to teens."
  count={32}
/>
```

### Taxonomy Archive
```tsx
<ArchiveHeader
  title="East Africa"
  description="Discover the wonders of East Africa, from Kenya's savannas to Tanzania's mountains."
  count={45}
/>
```

---

## Content Guidelines

### Title
- **Length:** 1-4 words ideal
- **Tone:** Descriptive, specific
- **Format:** Title case or sentence case
- **Examples:**
  - "African Destinations"
  - "Wildlife Safaris"
  - "Beach Escapes"
  - "Cultural Experiences"

### Description
- **Length:** 15-30 words (1-2 sentences)
- **Purpose:** Explain what user will find
- **Tone:** Welcoming, informative
- **Examples:**
  - "Explore our curated collection of unforgettable destinations across the African continent."
  - "Embark on wildlife adventures through Africa's most spectacular national parks."

### Count Display
- **Format:** "{count} destinations" or "{count} posts"
- **Placement:** Below description
- **Style:** Subtle, not dominant

---

## Complete Implementation

```tsx
export function ArchiveHeader({ title, description, count }) {
  return (
    <Section spacing="lg">
      <Container>
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Title */}
          <Heading level={1} className="mb-6">
            {title}
          </Heading>

          {/* Description */}
          <p
            className="mt-6"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--muted-foreground)',
              lineHeight: '1.6'
            }}
          >
            {description}
          </p>

          {/* Count badge */}
          {count && (
            <span
              className="inline-block px-4 py-2 mt-4"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-foreground)',
                borderRadius: 'var(--radius)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {count} {count === 1 ? 'Destination' : 'Destinations'}
            </span>
          )}
        </div>
      </Container>
    </Section>
  );
}
```

---

## Variants

### Minimal (No Count)
```tsx
<ArchiveHeader
  title="Travel Stories"
  description="Adventures and insights from around the world."
/>
```

### With Background
```tsx
<Section spacing="lg" className="bg-muted">
  <ArchiveHeader
    title="Featured Destinations"
    description="Our top picks for unforgettable travel experiences."
    count={12}
  />
</Section>
```

---

## Common Patterns

### Archive Page Structure
```tsx
<main id="main-content">
  <ArchiveHeader
    title="African Destinations"
    description="Explore curated destinations..."
    count={24}
  />
  
  <FilterBar options={filterOptions} />
  
  <CardGrid items={destinations} columns={3} />
  
  <PaginationNav currentPage={1} totalPages={3} />
</main>
```

---

## WordPress Dynamic Content

In WordPress, the title and description are dynamic:

```php
// Title from archive
$title = get_the_archive_title();

// Description from taxonomy
$description = get_the_archive_description();

// Count from query
$count = $wp_query->found_posts;
```

---

## Design System Integration

This pattern enforces:
1. **Lexend typography** for title and description
2. **Manrope typography** for count badge only
3. **One H1 per page** rule
4. **Center alignment** for archive headers
5. **Consistent vertical spacing**
6. **WordPress archive block** compatibility
7. **Semantic HTML** structure

---

**Last Updated:** December 24, 2024
