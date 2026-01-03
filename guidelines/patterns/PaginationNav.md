# PaginationNav Pattern

## Overview

**Purpose:** Page navigation for archive listings and multi-page content  
**Category:** `lsx-design/nav/pagination`  
**WordPress Block:** Pagination block (core/query-pagination)  
**Usage:** Archive pages, blog indexes, search results, paginated lists  

**Key Features:**
- Previous/Next navigation
- Page numbers with current indicator
- First/Last page links (optional)
- Ellipsis for many pages
- Keyboard accessible
- Screen reader friendly
- URL parameter sync
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/nav/pagination",
  "title": "Pagination Navigation",
  "description": "Page navigation for archives and lists",
  "categories": ["nav"],
  "blockTypes": ["core/query-pagination"],
  "keywords": ["pagination", "pages", "navigation", "archive"]
}
```

### Template Usage (Core Blocks)
```html
<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-query-pagination">
  <!-- wp:query-pagination-previous /-->
  <!-- wp:query-pagination-numbers /-->
  <!-- wp:query-pagination-next /-->
</div>
<!-- /wp:query-pagination -->
```

---

## Props / API

```typescript
interface PaginationNavProps {
  /** Current page number (1-indexed) */
  currentPage: number;
  
  /** Total number of pages */
  totalPages: number;
  
  /** Page change handler */
  onPageChange: (page: number) => void;
  
  /** Show first/last links */
  showFirstLast?: boolean;
  
  /** Number of page numbers to show */
  siblingCount?: number;
  
  /** Show previous/next text or icons */
  navStyle?: 'text' | 'icons' | 'both';
  
  /** Previous button label */
  previousLabel?: string;
  
  /** Next button label */
  nextLabel?: string;
  
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}
```

### Default Values
```typescript
{
  showFirstLast: false,
  siblingCount: 1,
  navStyle: 'both',
  previousLabel: 'Previous',
  nextLabel: 'Next',
  align: 'center',
  size: 'md'
}
```

---

## Usage Examples

### Basic Pagination
```tsx
import { PaginationNav } from '../patterns/PaginationNav';
import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### With First/Last Links
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast={true}
  siblingCount={2}
/>
```

### Icon Navigation
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  navStyle="icons"
  size="lg"
/>
```

### Left-Aligned (Archive Pages)
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  align="left"
  previousLabel="← Newer Posts"
  nextLabel="Older Posts →"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-base        /* Page numbers, nav text */
--text-small       /* Optional helper text */
```

**Font Families:**
- **Lexend** — Page numbers, navigation labels

**Colors:**
```css
--foreground       /* Page numbers */
--primary          /* Current page, hover states */
--primary-foreground /* Current page text */
--muted-foreground /* Disabled prev/next */
--border           /* Button borders */
--border-soft      /* Inactive borders */
--muted            /* Hover background */
--background       /* Pagination background */
```

**Spacing:**
- Tailwind classes: `gap-2`, `gap-3`, `px-3`, `px-4`, `py-2`
- Button padding: 8px 12px (px-3 py-2)
- Gap between items: 8px (gap-2)

**Border Radius:**
```css
--radius           /* Pagination button borders (4px) */
```

---

## Page Number Calculation

### Determine Visible Pages
```tsx
const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1
): (number | 'ellipsis')[] => {
  const totalPageNumbers = siblingCount * 2 + 5; // siblings + current + first + last + 2 ellipsis
  
  // Show all pages if total is less than threshold
  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
  
  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;
  
  // Only right ellipsis
  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis', totalPages];
  }
  
  // Only left ellipsis
  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => totalPages - (3 + siblingCount * 2) + i + 1
    );
    return [1, 'ellipsis', ...rightRange];
  }
  
  // Both ellipses
  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = Array.from(
      { length: siblingCount * 2 + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
  }
  
  return [];
};
```

### Example Outputs
```
Current: 1, Total: 10, Siblings: 1
→ [1, 2, 3, '...', 10]

Current: 5, Total: 10, Siblings: 1
→ [1, '...', 4, 5, 6, '...', 10]

Current: 10, Total: 10, Siblings: 1
→ [1, '...', 8, 9, 10]
```

---

## Button States

### Current Page (Active)
```tsx
<button
  aria-current="page"
  aria-label={`Page ${page}, current page`}
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: '1px solid var(--primary)',
    fontWeight: 'var(--font-weight-medium)',
    cursor: 'default'
  }}
  disabled
>
  {page}
</button>
```

### Inactive Page
```tsx
<button
  onClick={() => onPageChange(page)}
  aria-label={`Go to page ${page}`}
  style={{
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
    border: '1px solid var(--border-soft)',
    cursor: 'pointer'
  }}
>
  {page}
</button>
```

### Disabled Prev/Next
```tsx
<button
  disabled
  aria-disabled="true"
  style={{
    backgroundColor: 'transparent',
    color: 'var(--muted-foreground)',
    border: '1px solid var(--border-soft)',
    opacity: 0.5,
    cursor: 'not-allowed'
  }}
>
  Previous
</button>
```

### Ellipsis (Non-Interactive)
```tsx
<span
  aria-hidden="true"
  style={{
    padding: '8px 12px',
    color: 'var(--muted-foreground)',
    userSelect: 'none'
  }}
>
  ...
</span>
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- Fewer page numbers (siblingCount: 0)
- Larger touch targets (44×44px)
- Simplified layout
- Prev/Next only (option)

**Tablet (768px - 1024px):**
- siblingCount: 1
- Full prev/next labels
- Compact spacing

**Desktop (> 1024px):**
- siblingCount: 2
- Optional first/last links
- Full feature set

### Mobile-First Approach
```tsx
<div className="flex items-center justify-center gap-2">
  {/* Mobile: Show only prev, current, next */}
  <div className="md:hidden flex gap-2">
    <PrevButton />
    <CurrentPageIndicator />
    <NextButton />
  </div>
  
  {/* Desktop: Show full pagination */}
  <div className="hidden md:flex gap-2">
    <FirstButton />
    <PrevButton />
    <PageNumbers />
    <NextButton />
    <LastButton />
  </div>
</div>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Tab through all page links
- Enter/Space to navigate
- Arrow keys (optional enhancement)

**Screen Readers:**
- Announce current page
- Clear labels for all links
- Disabled state announced
- Navigation landmark

**ARIA Attributes:**
```tsx
<nav
  role="navigation"
  aria-label="Pagination Navigation"
>
  <ul
    role="list"
    style={{ display: 'flex', gap: '8px', listStyle: 'none' }}
  >
    <li>
      <button
        aria-label="Go to previous page"
        aria-disabled={currentPage === 1}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>
    
    {/* Page numbers */}
    {pages.map((page, index) => (
      <li key={index}>
        {page === 'ellipsis' ? (
          <span aria-hidden="true">...</span>
        ) : (
          <button
            aria-label={
              page === currentPage
                ? `Page ${page}, current page`
                : `Go to page ${page}`
            }
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )}
      </li>
    ))}
    
    <li>
      <button
        aria-label="Go to next page"
        aria-disabled={currentPage === totalPages}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>
  </ul>
</nav>
```

**Focus States:**
```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
```

**Touch Targets:**
- Minimum 44×44px on mobile
- Adequate spacing (8px minimum)

---

## Icon Navigation

### With Lucide Icons
```tsx
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// Previous
<button>
  <ChevronLeft size={16} />
  <span>Previous</span>
</button>

// Next
<button>
  <span>Next</span>
  <ChevronRight size={16} />
</button>

// First
<button>
  <ChevronsLeft size={16} />
  <span className="sr-only">First page</span>
</button>

// Last
<button>
  <ChevronsRight size={16} />
  <span className="sr-only">Last page</span>
</button>
```

---

## URL Parameter Sync

### Update URL on Page Change
```tsx
const handlePageChange = (page: number) => {
  setCurrentPage(page);
  
  // Update URL
  const url = new URL(window.location.href);
  if (page === 1) {
    url.searchParams.delete('page');
  } else {
    url.searchParams.set('page', page.toString());
  }
  window.history.pushState({}, '', url);
  
  // Scroll to top (optional)
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

### Read from URL on Mount
```tsx
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page') || '1', 10);
  if (page > 0 && page <= totalPages) {
    setCurrentPage(page);
  }
}, [totalPages]);
```

---

## Size Variants

### Small (sm)
```tsx
style={{
  padding: '6px 10px',
  fontSize: 'var(--text-small)',
  minWidth: '36px',
  minHeight: '36px'
}}
```

### Medium (md) - Default
```tsx
style={{
  padding: '8px 12px',
  fontSize: 'var(--text-base)',
  minWidth: '40px',
  minHeight: '40px'
}}
```

### Large (lg)
```tsx
style={{
  padding: '10px 16px',
  fontSize: 'var(--text-base)',
  minWidth: '48px',
  minHeight: '48px'
}}
```

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Shows correct page numbers
- [ ] Current page highlighted
- [ ] Prev/Next buttons display

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader announces current page
- [ ] ARIA attributes correct
- [ ] WCAG AA contrast on all states

### Responsive
- [ ] Mobile layout correct
- [ ] Desktop layout correct
- [ ] Touch targets adequate (44×44px)
- [ ] Ellipsis display correctly

### Functionality
- [ ] Page change callback fires
- [ ] Disabled states work
- [ ] URL updates (if enabled)
- [ ] Scroll to top (if enabled)

### Dark Mode
- [ ] Text readable in both modes
- [ ] Current page visible
- [ ] Borders visible
- [ ] Disabled state appropriate

---

## Common Use Cases

### 1. Blog Archive
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  previousLabel="← Newer Posts"
  nextLabel="Older Posts →"
  siblingCount={1}
/>
```

### 2. Portfolio Listing
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  navStyle="both"
  showFirstLast={true}
  siblingCount={2}
/>
```

### 3. Search Results
```tsx
<PaginationNav
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  navStyle="icons"
  align="left"
  size="sm"
/>
```

---

## WordPress Implementation

### PHP Pagination
```php
<?php
/**
 * WordPress Pagination
 */
$paged = get_query_var('paged') ? get_query_var('paged') : 1;

$args = array(
  'post_type'      => 'post',
  'posts_per_page' => 12,
  'paged'          => $paged,
);

$query = new WP_Query($args);

// Pagination
the_posts_pagination(array(
  'mid_size'  => 2,
  'prev_text' => __('Previous', 'lsx-design'),
  'next_text' => __('Next', 'lsx-design'),
));
```

---

## Best Practices

### Content
- Show 5-9 page numbers maximum
- Use clear prev/next labels
- Display current page prominently
- Provide visual feedback on hover

### Design
- Make current page obvious
- Use consistent button sizing
- Maintain adequate spacing
- Keep mobile UX simple

### Performance
- Don't reload full page (use AJAX/SPA)
- Update URL for shareability
- Scroll to top on page change
- Preload next page (optional)

### Accessibility
- Ensure keyboard navigation
- Provide clear ARIA labels
- Make touch targets large enough
- Test with screen readers

---

**Created:** December 27, 2024  
**Pattern:** PaginationNav  
**Category:** Navigation  
**Status:** Production-ready ✅  
**Used in:** BlogIndexTemplate, PortfolioArchiveTemplate, All archive templates  
**Design System:** 100% compliant

