# EmptyState Component

**File:** `/src/app/components/patterns/EmptyState.tsx`  
**WordPress Mapping:** Block pattern (`patterns/empty-state.php`)  
**Pattern Slug:** `lsx-design/state/empty`  
**Category:** Block Patterns

---

## Purpose

Displays a user-friendly message when content is empty or no results are found. Guides users on next actions to take.

---

## WordPress Context

In WordPress, this would be a **block pattern** registered for:
- Empty search results pages
- Empty archive pages (no posts)
- Empty filter results
- Zero state for new content areas

Editors can insert this pattern when content might be empty, or it can be conditionally rendered based on query results.

---

## Design System Requirements

### Typography
- **Heading:** `fontSize: 'var(--text-h3)'`, `fontWeight: 600`, `fontFamily: 'Lexend, sans-serif'`
- **Description:** `fontSize: 'var(--text-base)'`, `fontFamily: 'Manrope, sans-serif'`
- **Button text:** `fontSize: 'var(--text-base)'`, `fontWeight: 500`, `fontFamily: 'Lexend, sans-serif'`

### Colors
- **Background:** `var(--background)` or `var(--muted)`
- **Text:** `var(--foreground)`
- **Icon:** `var(--muted-foreground)` (subtle, not primary)
- **Button:** Uses Button component variants

### Spacing
- **Container padding:** `className="py-16 px-4"`
- **Icon margin:** `mb-6`
- **Heading margin:** `mb-3`
- **Description margin:** `mb-6`
- **Max width:** `max-w-md` (centered, constrained)

### Layout
- **Alignment:** Centered vertically and horizontally
- **Icon:** Optional, displayed above heading
- **Content:** Heading → Description → Optional CTA button

---

## Component Structure

```tsx
<Section variant="default" className="py-16">
  <Container>
    <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
      {/* Optional Icon */}
      {icon && (
        <div 
          className="mb-6" 
          style={{ color: 'var(--muted-foreground)' }}
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      
      {/* Heading */}
      <Heading 
        level={2} 
        className="mb-3"
        style={{ fontSize: 'var(--text-h3)' }}
      >
        {heading}
      </Heading>
      
      {/* Description */}
      <p 
        className="mb-6"
        style={{ 
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)' 
        }}
      >
        {description}
      </p>
      
      {/* Optional CTA */}
      {ctaLabel && ctaHref && (
        <Button 
          variant="default" 
          asChild
        >
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      )}
    </div>
  </Container>
</Section>
```

---

## Props

```tsx
interface EmptyStateProps {
  // Required: Main message heading
  heading: string;
  
  // Required: Descriptive text explaining the empty state
  description: string;
  
  // Optional: Icon to display above heading
  icon?: React.ReactNode;
  
  // Optional: CTA button text
  ctaLabel?: string;
  
  // Optional: CTA button destination
  ctaHref?: string;
  
  // Optional: Additional CSS classes
  className?: string;
}
```

---

## Usage Examples

### Empty Search Results

```tsx
import { EmptyState } from './components/patterns/EmptyState';
import { Search } from 'lucide-react';

<EmptyState
  icon={<Search size={48} />}
  heading="No results found"
  description="We couldn't find any destinations matching your search. Try different keywords or browse all destinations."
  ctaLabel="Browse All Destinations"
  ctaHref="/destinations"
/>
```

### Empty Archive (No Posts)

```tsx
import { FileX } from 'lucide-react';

<EmptyState
  icon={<FileX size={48} />}
  heading="No posts yet"
  description="There are currently no blog posts to display. Check back soon for new content!"
/>
```

### Empty Filter Results

```tsx
import { Filter } from 'lucide-react';

<EmptyState
  icon={<Filter size={48} />}
  heading="No matching experiences"
  description="No experiences match your current filters. Try adjusting your criteria or clearing all filters."
  ctaLabel="Clear Filters"
  ctaHref="#"
/>
```

---

## WordPress Implementation Notes

### In `patterns/empty-state.php`

```php
<?php
/**
 * Title: Empty State
 * Slug: lsx-design/state/empty
 * Categories: state
 * Description: Display a message when no content is available
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  
  <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}},"layout":{"type":"constrained","contentSize":"28rem"}} -->
  <div class="wp-block-group" style="text-align:center">
    
    <!-- wp:heading {"level":2,"fontSize":"h3"} -->
    <h2 class="has-h3-font-size">No results found</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"style":{"color":{"text":"var:preset|color|muted-foreground"}}} -->
    <p class="has-text-color">We couldn't find any content matching your criteria. Try different filters or browse all content.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link" href="/browse">Browse All Content</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## Icon Usage

**Before using any icon**, verify it exists in lucide-react using the bash tool:

```bash
grep "IconName" lucide-react/dist/esm/icons/index.js
```

### Recommended Icons for Empty States

- **Search results:** `Search`, `SearchX`
- **No posts:** `FileX`, `Inbox`
- **No images:** `ImageOff`
- **No data:** `Database`, `FileWarning`
- **Filters:** `Filter`, `FilterX`
- **General:** `AlertCircle`, `Info`

---

## Accessibility Requirements

- [ ] Icons must have `aria-hidden="true"` (decorative only)
- [ ] Heading must use proper semantic level (H2 or H3)
- [ ] Description provides clear context about the empty state
- [ ] If CTA is provided, it must have descriptive text
- [ ] Focus state visible on CTA button
- [ ] Screen readers announce heading and description

---

## Tone and Messaging

### Guidelines
- **Be helpful, not negative:** "No results yet" not "Nothing found"
- **Explain why:** Tell users why the state is empty
- **Provide next action:** Guide users on what to do next
- **Be concise:** 1-2 sentences maximum for description
- **Stay on brand:** Friendly, encouraging, clear

### Examples

**Good:**
- "No destinations match your filters. Try adjusting your criteria or browse all destinations."
- "We're still working on content for this section. Check back soon!"

**Bad:**
- "Error: No results." (too technical)
- "Nothing here." (unhelpful)
- "Your search returned 0 results." (robotic)

---

## Token Reference

```tsx
// Typography
fontSize: 'var(--text-h3)'         // 24px — Heading
fontSize: 'var(--text-base)'       // 16px — Description
fontFamily: 'Lexend, sans-serif'   // Heading
fontFamily: 'Manrope, sans-serif'  // Description

// Colors
color: 'var(--foreground)'         // Heading
color: 'var(--muted-foreground)'   // Description & icon

// Spacing (Tailwind classes)
className="py-16 px-4"             // Container padding
mb-6                               // Icon margin
mb-3                               // Heading margin
max-w-md mx-auto                   // Content constraint
```

---

## Variations

### With Icon
Shows icon above heading for visual context.

### Without Icon
Minimal text-only version.

### With CTA
Includes action button to guide next steps.

### Without CTA
Message-only for informational empty states.

---

## Related Components

- **[Section](./Section.md)** — Full-width section wrapper
- **[Container](./Container.md)** — Max-width content wrapper
- **[Heading](./Heading.md)** — Semantic heading component
- **[Button](./Button.md)** — CTA button
- **[ArchiveHeader](./ArchiveHeader.md)** — Used above empty state on archives

---

## When to Use

Use EmptyState when:
- Search returns no results
- Archive/listing page has no posts
- Filters produce zero results
- Content category is empty
- Data hasn't been added yet

Don't use EmptyState for:
- Loading states (use skeleton/spinner instead)
- Error messages (use alert/toast instead)
- Form validation (use inline errors)

---

## Notes

- Empty states are temporary — users should be able to resolve them
- Always provide a path forward (CTA or clear next action)
- Test with long headings and descriptions to ensure layout doesn't break
- Consider contextual help (e.g., "Try searching for 'safari' or 'beach'")
- Empty states should feel encouraging, not discouraging

---

**Last Updated:** December 24, 2024  
**Component Status:** ✅ Implemented  
**Documentation Status:** ✅ Complete
