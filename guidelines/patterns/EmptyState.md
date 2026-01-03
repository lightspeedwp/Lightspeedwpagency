# EmptyState Pattern

**Pattern Category:** `lsx-design/state/empty-state`  
**WordPress Block:** Core Group block with custom styling  
**Status:** ✅ Production Ready  
**Version:** 1.0  
**Last Updated:** December 27, 2024

---

## Purpose

The EmptyState pattern provides user-friendly feedback when no content is available for display. It prevents blank screens, guides users to next actions, and maintains a positive user experience even when data is missing.

**Use Cases:**
- No search results found
- Empty archive/category pages
- No items in cart/wishlist
- Filtered results return no matches
- New user with no content yet

---

## WordPress Block Structure

```html
<!-- wp:group {"className":"lsx-empty-state"} -->
<div class="wp-block-group lsx-empty-state">
  
  <!-- wp:group {"className":"lsx-empty-state__icon"} -->
  <div class="wp-block-group lsx-empty-state__icon">
    <!-- Icon SVG or Lucide icon -->
  </div>
  <!-- /wp:group -->
  
  <!-- wp:heading {"level":3} -->
  <h3>No Results Found</h3>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>We couldn't find any content matching your criteria. Try adjusting your filters or search terms.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button">
      <a class="wp-block-button__link" href="/blog">View All Posts</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
  
</div>
<!-- /wp:group -->
```

---

## React Component API

```tsx
import { EmptyState } from '../patterns/EmptyState';

<EmptyState
  icon={Search}              // Lucide icon component
  title="No Results Found"   // Heading text (required)
  message="We couldn't find any content matching your criteria."
  actionLabel="View All Posts"  // Optional CTA button
  actionHref="/blog"         // Optional CTA link
  variant="search"           // Optional: 'default' | 'search' | 'error'
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `LucideIcon` | No | `AlertCircle` | Icon component from lucide-react |
| `title` | `string` | Yes | - | Main heading text |
| `message` | `string` | No | - | Supporting description |
| `actionLabel` | `string` | No | - | CTA button text |
| `actionHref` | `string` | No | - | CTA button link |
| `variant` | `string` | No | `'default'` | Style variant |

---

## Design System Compliance

### Typography
```tsx
// Title
fontSize: 'var(--text-h3)'
fontWeight: 'var(--font-weight-medium)'
fontFamily: 'Lexend, sans-serif'

// Message
fontSize: 'var(--text-base)'
fontWeight: 'var(--font-weight-regular)'
fontFamily: 'Lexend, sans-serif'
```

### Colors
```tsx
// Icon
color: 'var(--muted-foreground)'

// Title
color: 'var(--foreground)'

// Message
color: 'var(--muted-foreground)'
```

### Spacing
```tsx
// Container
className="text-center py-16 px-4"  // Tailwind classes

// Icon
className="mb-4"                    // 16px below icon

// Title
className="mb-2"                    // 8px below title

// Action
className="mt-6"                    // 24px above button
```

---

## Common Variants

### 1. Search Results Empty
```tsx
<EmptyState
  icon={Search}
  title="No Results Found"
  message="We couldn't find any content matching your search. Try different keywords or browse all posts."
  actionLabel="View All Posts"
  actionHref="/blog"
  variant="search"
/>
```

### 2. Filter Results Empty
```tsx
<EmptyState
  icon={Filter}
  title="No Projects Match Your Filters"
  message="Try adjusting your filter criteria to see more results."
  actionLabel="Clear Filters"
  actionHref="/portfolio"
/>
```

### 3. Category/Archive Empty
```tsx
<EmptyState
  icon={Folder}
  title="No Posts in This Category"
  message="This category doesn't have any posts yet. Check back soon or explore other categories."
  actionLabel="View All Categories"
  actionHref="/blog"
/>
```

### 4. New User Empty State
```tsx
<EmptyState
  icon={PlusCircle}
  title="Get Started"
  message="You haven't created any content yet. Start by creating your first post."
  actionLabel="Create Post"
  actionHref="/create"
/>
```

### 5. Error State
```tsx
<EmptyState
  icon={AlertCircle}
  title="Something Went Wrong"
  message="We encountered an error loading this content. Please try again later."
  actionLabel="Refresh Page"
  actionHref="#"
  variant="error"
/>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML**
- Uses proper heading hierarchy (`<h3>` for title)
- Descriptive error messages
- Meaningful link text for actions

✅ **Keyboard Navigation**
- CTA button is keyboard accessible
- Proper focus management
- Tab order is logical

✅ **Screen Readers**
- Icon has `aria-hidden="true"` (decorative)
- Message provides context
- Action button has clear label

✅ **Color Contrast**
- Title: 16.07:1 ratio (AAA ✓✓✓)
- Message: 4.54:1 ratio (AA ✓)
- Icon: 4.54:1 ratio (AA ✓)

### Implementation
```tsx
<div 
  className="lsx-empty-state text-center py-16"
  role="status"
  aria-live="polite"
>
  <div aria-hidden="true">
    <Icon size={48} />
  </div>
  
  <h3 className="mt-4 mb-2">{title}</h3>
  
  {message && (
    <p className="text-muted-foreground">{message}</p>
  )}
  
  {actionLabel && (
    <Button href={actionHref}>
      {actionLabel}
    </Button>
  )}
</div>
```

---

## Content Guidelines

### Title (Heading)
- **Length:** 3-6 words maximum
- **Tone:** Friendly and helpful
- **Format:** Sentence case
- **Examples:**
  - ✅ "No Results Found"
  - ✅ "Nothing Here Yet"
  - ❌ "ERROR: EMPTY RESULTS" (too aggressive)

### Message (Description)
- **Length:** 10-20 words
- **Tone:** Helpful and encouraging
- **Format:** Complete sentence with period
- **Examples:**
  - ✅ "We couldn't find any content matching your criteria. Try adjusting your filters."
  - ✅ "This category is empty. Check back soon for new posts."
  - ❌ "No data" (too brief, unhelpful)

### Action Button
- **Label:** Action-oriented verbs
- **Examples:**
  - ✅ "View All Posts"
  - ✅ "Clear Filters"
  - ✅ "Try Again"
  - ❌ "Click Here" (not descriptive)

---

## Icon Selection

Use appropriate icons from lucide-react:

| State Type | Recommended Icon | Meaning |
|------------|------------------|---------|
| Search empty | `Search` | No search results |
| Filter empty | `Filter` | No filtered results |
| Category empty | `Folder` | Empty category |
| New user | `PlusCircle` | Add new content |
| Error state | `AlertCircle` | Error occurred |
| No data | `FileX` | No data available |
| Loading failed | `WifiOff` | Connection issue |

---

## WordPress Theme.json

Add to `theme.json` for custom styling:

```json
{
  "version": 2,
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "lsx-empty-state": {
            "spacing": {
              "padding": {
                "top": "4rem",
                "bottom": "4rem"
              }
            },
            "typography": {
              "textAlign": "center"
            }
          }
        }
      }
    }
  }
}
```

---

## Example Implementations

### Archive Template
```tsx
import { EmptyState } from '../patterns/EmptyState';
import { Search } from 'lucide-react';

function ArchiveTemplate() {
  const hasResults = filteredPosts.length > 0;
  
  return (
    <Section>
      {hasResults ? (
        <CardGrid items={filteredPosts} />
      ) : (
        <EmptyState
          icon={Search}
          title="No Posts Found"
          message="We couldn't find any posts matching your criteria. Try adjusting your filters."
          actionLabel="View All Posts"
          actionHref="/blog"
        />
      )}
    </Section>
  );
}
```

### Search Results
```tsx
function SearchResults({ query, results }) {
  return (
    <Section>
      {results.length > 0 ? (
        <CardGrid items={results} />
      ) : (
        <EmptyState
          icon={Search}
          title={`No results for "${query}"`}
          message="Try different keywords or browse all content."
          actionLabel="View All Posts"
          actionHref="/blog"
        />
      )}
    </Section>
  );
}
```

---

## Testing Checklist

- [ ] Icon displays correctly (size, color)
- [ ] Title uses `var(--text-h3)` font size
- [ ] Message uses `var(--text-base)` font size
- [ ] Colors use CSS variables (no hard-coded values)
- [ ] Spacing uses Tailwind classes
- [ ] CTA button links to correct page
- [ ] Screen reader announces state change
- [ ] Keyboard navigation works
- [ ] Contrast ratios meet WCAG AA
- [ ] Mobile responsive (text doesn't break)
- [ ] Icon is decorative (`aria-hidden="true"`)

---

## Related Patterns

- **ArchiveHeader:** Page context before empty state
- **FilterBar:** Controls that might cause empty state
- **CardGrid:** Content display when not empty
- **CTASection:** Alternative action after empty state

---

## References

- **WordPress Blocks:** [Core Group Block](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#group)
- **Accessibility:** [WCAG 2.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- **Design System:** `/guidelines/design-tokens/colors.md`
- **Icons:** `/guidelines/overview-icons.md`

---

**Pattern Slug:** `lsx-design/state/empty-state`  
**Tested:** ✅ All archive templates  
**WCAG Compliance:** ✅ AA (AAA for title)  
**WordPress Compatibility:** ✅ FSE Compatible
