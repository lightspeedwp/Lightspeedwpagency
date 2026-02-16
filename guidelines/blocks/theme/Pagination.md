# Pagination Component

**Component Type:** Navigation  
**WordPress Equivalent:** Query Pagination Block  
**Category:** Navigation

---

## Overview

The Pagination component provides page navigation for paginated content such as blog archives, product listings, and search results.

**Features:**
- Previous/Next navigation
- Page number buttons with smart ellipsis
- First/Last page buttons (optional)
- Page information display
- Compact variant for mobile
- 48×48px touch targets (WCAG AAA)
- Keyboard accessible
- WCAG 2.1 AA compliant

---

## Usage

### Basic Pagination

```tsx
import { Pagination } from '@/components/blocks';

function BlogArchive() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <div>
      {/* Blog posts */}
      <div className="posts">
        {/* ... */}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
```

### With First/Last Buttons

```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast={true}
/>
```

### Compact Pagination (Mobile)

```tsx
import { CompactPagination } from '@/components/blocks';

<CompactPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### Responsive Pagination

```tsx
// Show full pagination on desktop, compact on mobile
<>
  {/* Desktop */}
  <div className="hidden md:block">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      showFirstLast={true}
    />
  </div>

  {/* Mobile */}
  <div className="md:hidden">
    <CompactPagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
</>
```

---

## Props

### Pagination

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | Required | Current page (1-indexed) |
| `totalPages` | `number` | Required | Total number of pages |
| `onPageChange` | `(page: number) => void` | Required | Page change handler |
| `siblingCount` | `number` | `1` | Number of page buttons to show around current page |
| `showFirstLast` | `boolean` | `false` | Show first/last page buttons (« and ») |
| `showPageInfo` | `boolean` | `true` | Show "Page X of Y" text |
| `disabled` | `boolean` | `false` | Disable all buttons |

### CompactPagination

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | Required | Current page (1-indexed) |
| `totalPages` | `number` | Required | Total number of pages |
| `onPageChange` | `(page: number) => void` | Required | Page change handler |
| `disabled` | `boolean` | `false` | Disable all buttons |

---

## Page Range Logic

The pagination component intelligently displays page numbers with ellipsis to avoid overwhelming the UI.

### Algorithm

For `totalPages = 20, currentPage = 5, siblingCount = 1`:

```
[1] ... [4] [5] [6] ... [20]
 ^       ^   ^   ^       ^
First  Left Current Right Last
      Sibling      Sibling
```

### Rules

1. **Always show first page:** `[1]`
2. **Show left siblings:** Pages before current within `siblingCount`
3. **Show current page:** Active page
4. **Show right siblings:** Pages after current within `siblingCount`
5. **Always show last page:** `[totalPages]`
6. **Add ellipsis:** If gap > 1 between groups

---

## Examples

### With Data Fetching

```tsx
function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const { data, isLoading } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => fetchProducts(currentPage, pageSize),
  });

  const totalPages = Math.ceil(data?.total / pageSize);

  return (
    <div>
      {isLoading ? (
        <SkeletonGrid items={12} />
      ) : (
        <ProductGrid products={data.products} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        showFirstLast={true}
        showPageInfo={true}
      />
    </div>
  );
}
```

### With URL Sync

```tsx
import { useSearchParams } from 'react-router-dom';

function BlogArchive() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
```

### With Server-Side Pagination

```tsx
function SearchResults() {
  const [page, setPage] = useState(1);

  // Server returns total count
  const { data } = useSWR(`/api/search?q=${query}&page=${page}`);

  const totalPages = Math.ceil(data?.totalCount / data?.pageSize);

  return (
    <div>
      <div className="results">
        {data?.results.map(item => <ResultCard key={item.id} {...item} />)}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
```

---

## Design System

### Typography

- **Buttons:** Lexend (headings/UI font)
- **Page Info:** Manrope (body text font)

### Colors

- **Active Page:** `--primary` background, `--primary-foreground` text
- **Inactive Pages:** `--foreground` text, transparent background
- **Border:** `--border` (1px solid)
- **Hover:** `--muted` background

### Spacing

- **Button Size:** 48×48px minimum (WCAG AAA touch targets)
- **Button Padding:** 0.75rem 1rem
- **Gap Between Buttons:** 0.5rem

### States

1. **Default:** Border with transparent background
2. **Active:** Primary background with white text
3. **Hover:** Muted background (not active)
4. **Disabled:** 50% opacity, not-allowed cursor

---

## Accessibility

### WCAG 2.1 Compliance

- ✅ **AA Compliant:** All buttons meet 4.5:1 contrast ratio
- ✅ **AAA Touch Targets:** 48×48px minimum button size
- ✅ **Keyboard Navigation:** Tab to navigate, Enter/Space to activate
- ✅ **Screen Readers:** Proper `aria-label` on all buttons
- ✅ **Current Page:** `aria-current="page"` on active button

### Keyboard Navigation

- **Tab:** Move between pagination buttons
- **Enter/Space:** Activate button (change page)
- **Shift+Tab:** Move backwards

### ARIA Attributes

```html
<nav role="navigation" aria-label="Pagination">
  <button aria-label="Go to previous page">‹</button>
  <button aria-label="Go to page 1">1</button>
  <button aria-label="Go to page 5" aria-current="page">5</button>
  <button aria-label="Go to next page">›</button>
</nav>
```

---

## WordPress Mapping

### Block Pattern

```php
<!-- wp:query-pagination -->
<div class="wp-block-query-pagination">
  <!-- wp:query-pagination-previous /-->
  <!-- wp:query-pagination-numbers /-->
  <!-- wp:query-pagination-next /-->
</div>
<!-- /wp:query-pagination -->
```

### theme.json

```json
{
  "settings": {
    "blocks": {
      "core/query-pagination": {
        "color": {
          "palette": [
            {
              "slug": "primary",
              "color": "var(--primary)"
            }
          ]
        }
      }
    }
  }
}
```

---

## Best Practices

### DO ✅

- ✅ **Use 1-indexed pages:** Start from page 1, not 0
- ✅ **Scroll to top:** On page change, scroll to top of content
- ✅ **Show compact on mobile:** Use CompactPagination for small screens
- ✅ **Disable when loading:** Set `disabled={true}` during data fetch
- ✅ **Sync with URL:** Use search params for shareable URLs
- ✅ **Show total pages:** Help users understand content volume

### DON'T ❌

- ❌ **Don't use 0-indexed pages:** Confusing for users
- ❌ **Don't hide pagination:** Always show navigation controls
- ❌ **Don't auto-paginate:** Require explicit user action
- ❌ **Don't show all pages:** Use ellipsis for large page counts
- ❌ **Don't forget loading states:** Show skeleton during fetch

---

## Mobile Optimization

### Compact Variant

On mobile devices (< 768px), use the compact pagination:

```tsx
<CompactPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

**Compact Layout:**
```
[Previous] [5 / 20] [Next]
```

**Benefits:**
- Smaller footprint (320px max-width)
- Larger touch targets (80px wide buttons)
- Clear page information
- Easy thumb navigation

---

## SEO Considerations

### Canonical URLs

```tsx
// Add canonical link for paginated content
<link rel="canonical" href={`https://example.com/blog?page=${currentPage}`} />
```

### Prev/Next Links

```tsx
// Help search engines understand pagination
{currentPage > 1 && (
  <link rel="prev" href={`https://example.com/blog?page=${currentPage - 1}`} />
)}
{currentPage < totalPages && (
  <link rel="next" href={`https://example.com/blog?page=${currentPage + 1}`} />
)}
```

### Meta Tags

```html
<meta name="robots" content="index, follow" />
```

---

## Performance

### Optimize Re-renders

```tsx
// Memoize pagination to prevent unnecessary re-renders
const MemoizedPagination = memo(Pagination);

<MemoizedPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### Prefetch Adjacent Pages

```tsx
// Prefetch next/previous pages for faster navigation
useEffect(() => {
  if (currentPage < totalPages) {
    prefetchPage(currentPage + 1);
  }
  if (currentPage > 1) {
    prefetchPage(currentPage - 1);
  }
}, [currentPage, totalPages]);
```

---

## Related Components

- **[Breadcrumbs](../../components/Breadcrumbs.md)** - Hierarchical navigation
- **[Tabs](../../components/Tabs.md)** - Tabbed navigation
- **[Table](../../blocks/text/table.md)** - Table with built-in pagination

---

## File Location

```
/src/app/components/blocks/theme/Pagination.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
