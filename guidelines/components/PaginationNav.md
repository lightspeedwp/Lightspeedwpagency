# PaginationNav Component

**File:** `/src/app/components/patterns/PaginationNav.tsx`  
**WordPress Mapping:** Block pattern (`patterns/pagination.php`)  
**Pattern Slug:** `lsx-design/nav/pagination`  
**Category:** Block Patterns

---

## Purpose

Provides navigation controls for multi-page content listings. Allows users to navigate between pages of results.

---

## WordPress Context

In WordPress, this would be a **block pattern** or use the built-in **Query Pagination block**:
- Automatically added to archive/blog templates
- Works with Query Loop block
- Supports custom pagination styles via theme.json
- Can use `previous/next` or numbered page links

---

## Design System Requirements

### Typography
- **Page numbers:** `fontSize: 'var(--text-base)'`, `fontWeight: 500`, `fontFamily: 'Lexend, sans-serif'`
- **Previous/Next labels:** `fontSize: 'var(--text-base)'`, `fontWeight: 500`

### Colors
- **Current page:** `var(--primary)` background, `var(--primary-foreground)` text
- **Inactive page:** `var(--secondary)` background, `var(--secondary-foreground)` text
- **Hover state:** `var(--primary)` with reduced opacity
- **Disabled:** `var(--muted)` background, `var(--muted-foreground)` text

### Spacing
- **Container padding:** `className="py-8"`
- **Button gap:** `gap-2`
- **Section margin:** `mt-8 mb-8`

### Layout
- **Alignment:** Centered horizontally
- **Mobile:** Compact, show fewer page numbers
- **Desktop:** Show more page numbers with ellipsis

---

## Component Structure

```tsx
<nav 
  aria-label="Pagination"
  className="flex justify-center py-8"
>
  <div className="flex items-center gap-2">
    {/* Previous Button */}
    <Button
      variant="secondary"
      size="sm"
      disabled={currentPage === 1}
      asChild
    >
      <a href={getPrevPageUrl()}>
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </a>
    </Button>
    
    {/* Page Numbers */}
    <div className="flex gap-2">
      {pageNumbers.map(page => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'secondary'}
          size="sm"
          asChild
        >
          <a 
            href={getPageUrl(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </a>
        </Button>
      ))}
    </div>
    
    {/* Next Button */}
    <Button
      variant="secondary"
      size="sm"
      disabled={currentPage === totalPages}
      asChild
    >
      <a href={getNextPageUrl()}>
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </a>
    </Button>
  </div>
</nav>
```

---

## Props

```tsx
interface PaginationNavProps {
  // Current active page (1-indexed)
  currentPage: number;
  
  // Total number of pages
  totalPages: number;
  
  // Base URL for pagination links
  baseUrl: string;
  
  // Optional: Number of page numbers to show
  maxVisible?: number; // Default: 7
  
  // Optional: Show Previous/Next labels
  showLabels?: boolean; // Default: true
  
  // Optional: Callback when page changes
  onPageChange?: (page: number) => void;
  
  // Optional: Additional CSS classes
  className?: string;
}
```

---

## Usage Examples

### Basic Pagination

```tsx
import { PaginationNav } from './components/patterns/PaginationNav';

<PaginationNav
  currentPage={2}
  totalPages={10}
  baseUrl="/destinations/page/"
/>
```

### With Callback (Client-Side)

```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  baseUrl="/api/posts"
  onPageChange={(page) => {
    setCurrentPage(page);
    fetchPosts(page);
  }}
/>
```

### Compact Mobile Version

```tsx
<PaginationNav
  currentPage={5}
  totalPages={20}
  baseUrl="/blog/page/"
  maxVisible={5} // Show fewer page numbers on mobile
/>
```

---

## WordPress Implementation Notes

### Using Query Pagination Block

```html
<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
  <!-- wp:query-pagination-previous {"label":"Previous"} /-->
  <!-- wp:query-pagination-numbers /-->
  <!-- wp:query-pagination-next {"label":"Next"} /-->
<!-- /wp:query-pagination -->
```

### Custom Pattern in `patterns/pagination.php`

```php
<?php
/**
 * Title: Pagination Navigation
 * Slug: lsx-design/nav/pagination
 * Categories: navigation
 * Description: Page navigation for multi-page listings
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  
  <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
  <!-- /wp:query-pagination -->
  
</div>
<!-- /wp:group -->
```

---

## Page Number Logic

### Display Pattern

```tsx
// For 10 total pages, current page 5:
// [1] ... [4] [5] [6] ... [10]

// For 10 total pages, current page 1:
// [1] [2] [3] ... [10]

// For 10 total pages, current page 10:
// [1] ... [8] [9] [10]
```

### Implementation

```tsx
function getPageNumbers(current: number, total: number, maxVisible: number = 7) {
  if (total <= maxVisible) {
    // Show all pages if total is small
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  
  const halfVisible = Math.floor(maxVisible / 2);
  let start = Math.max(1, current - halfVisible);
  let end = Math.min(total, current + halfVisible);
  
  // Adjust if at start or end
  if (current <= halfVisible) {
    end = maxVisible;
  } else if (current >= total - halfVisible) {
    start = total - maxVisible + 1;
  }
  
  const pages = [];
  
  // Always show first page
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push('...');
  }
  
  // Show range
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  // Always show last page
  if (end < total) {
    if (end < total - 1) pages.push('...');
    pages.push(total);
  }
  
  return pages;
}
```

---

## URL Structure

### WordPress Standard

```
/blog/                  → Page 1
/blog/page/2/           → Page 2
/blog/page/3/           → Page 3
```

### With Query Parameters

```
/destinations?page=1
/destinations?page=2
```

### With Filters

```
/destinations?category=africa&page=2
/experiences?type=adventure&page=3
```

---

## Accessibility Requirements

- [ ] Use `<nav>` landmark with `aria-label="Pagination"`
- [ ] Current page has `aria-current="page"`
- [ ] Previous/Next buttons have descriptive text
- [ ] Disabled buttons have `aria-disabled="true"` or `disabled` attribute
- [ ] All links have focus states visible
- [ ] Screen readers announce page changes
- [ ] Keyboard navigation works (Tab, Enter)

---

## Touch Target Requirements

- [ ] All pagination buttons must be 44×44px minimum
- [ ] Button padding: `py-2 px-3` minimum
- [ ] Adequate spacing between page numbers (gap-2 minimum)
- [ ] Touch-friendly tap targets on mobile

---

## Responsive Behavior

### Mobile (< 640px)
- Show 3-5 page numbers maximum
- Compact Previous/Next buttons (icons only or abbreviated)
- Centered layout

### Tablet (640px - 1023px)
- Show 5-7 page numbers
- Full Previous/Next labels
- Centered layout

### Desktop (≥ 1024px)
- Show 7-9 page numbers
- Full labels with icons
- Centered layout with more spacing

---

## Token Reference

```tsx
// Typography
fontSize: 'var(--text-base)'       // 16px — All text
fontWeight: 500                    // Medium weight
fontFamily: 'Lexend, sans-serif'   // Primary font

// Colors
backgroundColor: 'var(--primary)'     // Current page
backgroundColor: 'var(--secondary)'   // Inactive pages
backgroundColor: 'var(--muted)'       // Disabled state
color: 'var(--primary-foreground)'    // Current page text
color: 'var(--secondary-foreground)'  // Inactive text

// Spacing (Tailwind classes)
className="py-8"                   // Container padding
gap-2                              // Button gap
```

---

## State Variations

### Active Page
- Primary background color
- Primary foreground text color
- No hover state (current page)
- `aria-current="page"`

### Inactive Page
- Secondary background color
- Hover changes to lighter primary
- Clickable link

### Disabled (Prev/Next)
- Muted background color
- Muted foreground color
- Cursor not-allowed
- Not clickable

### Ellipsis (...)
- Not clickable
- Used to indicate skipped pages
- Muted foreground color

---

## Loading State

```tsx
<nav aria-label="Pagination">
  <div className="flex items-center gap-2">
    {isLoading ? (
      <Skeleton className="h-10 w-64" />
    ) : (
      {/* Pagination controls */}
    )}
  </div>
</nav>
```

---

## SEO Considerations

- Use proper `<a>` tags with href attributes
- Include rel="prev" and rel="next" for SEO
- Canonical URL should point to page 1
- Avoid duplicate content issues with pagination

```tsx
// In <head>
{currentPage > 1 && <link rel="prev" href={getPrevPageUrl()} />}
{currentPage < totalPages && <link rel="next" href={getNextPageUrl()} />}
{currentPage === 1 && <link rel="canonical" href={baseUrl} />}
```

---

## Related Components

- **[ArchiveHeader](./ArchiveHeader.md)** — Page header above content
- **[CardGrid](./CardGrid.md)** — Content being paginated
- **[FilterBar](./FilterBar.md)** — Filters affecting pagination
- **[Button](./Button.md)** — Navigation buttons
- **[EmptyState](./EmptyState.md)** — Shown when no results on page

---

## WordPress Block Equivalents

- Pagination navigation → **Query Pagination block**
- Previous button → **Query Pagination Previous block**
- Page numbers → **Query Pagination Numbers block**
- Next button → **Query Pagination Next block**

---

## Performance Considerations

- Preload adjacent pages for faster navigation
- Use `prefetch` on next page link
- Implement infinite scroll as progressive enhancement
- Cache pagination results
- Debounce rapid page changes

```tsx
<link rel="prefetch" href={getNextPageUrl()} />
```

---

## Variants

### Numbers Only
Just page numbers, no Prev/Next buttons.

### Previous/Next Only
Only Prev/Next buttons, no page numbers (minimal).

### With Jump to Page
Input field to jump to specific page number.

### Infinite Scroll
Alternative to pagination (load more pattern).

---

## Notes

- Always show current page, even if it's in the middle
- First and last pages are always visible (with ellipsis if needed)
- Disabled buttons should be visible but not clickable
- URL should update when page changes (for sharing/bookmarking)
- Consider "Load More" pattern for mobile as alternative
- Test with different total page counts (1, 2, 10, 100)

---

**Last Updated:** December 24, 2024  
**Component Status:** ✅ Implemented  
**Documentation Status:** ✅ Complete
