# FilterBar Pattern

## Overview

**Purpose:** Interactive filtering system for archive pages and content listings  
**Category:** `lsx-design/nav/filter-bar`  
**WordPress Block:** Group block with Button blocks  
**Usage:** Archive pages, portfolio listings, blog indexes, product catalogs  

**Key Features:**
- Multiple filter types (category, tag, date, custom taxonomy)
- Active state indication
- Mobile-responsive (popover on mobile)
- Keyboard accessible
- Clear/reset functionality
- URL parameter sync (optional)
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/nav/filter-bar",
  "title": "Filter Bar",
  "description": "Interactive filters for content archives",
  "categories": ["nav"],
  "blockTypes": ["core/group", "core/buttons"],
  "keywords": ["filter", "category", "tag", "search", "archive"]
}
```

### Template Usage
```html
<!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
<div class="wp-block-group">
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button {"className":"is-style-outline"} -->
    <div class="wp-block-button is-style-outline">
      <a class="wp-block-button__link">All</a>
    </div>
    <!-- /wp:button -->
    
    <!-- wp:button {"className":"is-style-outline"} -->
    <div class="wp-block-button is-style-outline">
      <a class="wp-block-button__link">WordPress</a>
    </div>
    <!-- /wp:button -->
    
    <!-- wp:button {"className":"is-style-outline"} -->
    <div class="wp-block-button is-style-outline">
      <a class="wp-block-button__link">WooCommerce</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface FilterBarProps {
  /** Array of filter options */
  filters: Filter[];
  
  /** Currently active filter ID */
  activeFilter: string;
  
  /** Filter change handler */
  onFilterChange: (filterId: string) => void;
  
  /** Filter type */
  type?: 'category' | 'tag' | 'date' | 'custom';
  
  /** Show "All" option */
  showAllOption?: boolean;
  
  /** "All" option label */
  allOptionLabel?: string;
  
  /** Show clear button */
  showClearButton?: boolean;
  
  /** Responsive behavior */
  mobileVariant?: 'popover' | 'horizontal-scroll' | 'vertical-stack';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right';
}

interface Filter {
  id: string;
  label: string;
  count?: number; // Optional item count
  slug?: string;  // For URL generation
}
```

### Default Values
```typescript
{
  type: 'category',
  showAllOption: true,
  allOptionLabel: 'All',
  showClearButton: false,
  mobileVariant: 'popover',
  align: 'center'
}
```

---

## Usage Examples

### Basic Category Filter
```tsx
import { FilterBar } from '../patterns/FilterBar';
import { useState } from 'react';

const [activeFilter, setActiveFilter] = useState('all');

const categoryFilters = [
  { id: 'wordpress', label: 'WordPress', count: 45 },
  { id: 'woocommerce', label: 'WooCommerce', count: 32 },
  { id: 'design', label: 'Design', count: 28 },
  { id: 'development', label: 'Development', count: 51 },
];

<FilterBar
  filters={categoryFilters}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
  type="category"
/>
```

### Tag Filter with Clear Button
```tsx
<FilterBar
  filters={tagFilters}
  activeFilter={activeTag}
  onFilterChange={setActiveTag}
  type="tag"
  showClearButton={true}
  allOptionLabel="All Tags"
/>
```

### Date Filter (Year/Month)
```tsx
const dateFilters = [
  { id: '2024', label: '2024', count: 89 },
  { id: '2023', label: '2023', count: 124 },
  { id: '2022', label: '2022', count: 98 },
];

<FilterBar
  filters={dateFilters}
  activeFilter={activeYear}
  onFilterChange={setActiveYear}
  type="date"
  align="left"
/>
```

### Mobile Popover Variant
```tsx
<FilterBar
  filters={categoryFilters}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
  mobileVariant="popover"
  showClearButton={true}
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-base        /* Filter button text */
--text-small       /* Item counts */
```

**Font Families:**
- **Lexend** — Filter button labels
- **Manrope** — Item counts (optional)

**Colors:**
```css
--foreground       /* Inactive filter text */
--primary          /* Active filter text, background */
--primary-foreground /* Active filter text color */
--border           /* Filter button borders */
--border-soft      /* Inactive borders */
--muted            /* Inactive background (hover) */
--background       /* Filter bar background */
```

**Spacing:**
- Tailwind classes: `gap-2`, `gap-3`, `p-2`, `px-4`, `py-2`
- Button padding: 8px 16px (px-4 py-2)
- Gap between filters: 8px (gap-2)

**Border Radius:**
```css
--radius           /* Filter button borders (4px) */
--radius-full      /* Pill-shaped buttons (9999px) */
```

---

## Filter States

### Inactive State
```tsx
style={{
  backgroundColor: 'transparent',
  color: 'var(--foreground)',
  border: '1px solid var(--border-soft)',
  cursor: 'pointer'
}}
```

### Active State
```tsx
style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  border: '1px solid var(--primary)',
  fontWeight: 'var(--font-weight-medium)'
}}
```

### Hover State (Inactive)
```tsx
onMouseEnter={(e) => {
  e.currentTarget.style.backgroundColor = 'var(--muted)';
  e.currentTarget.style.borderColor = 'var(--border)';
}}
```

### Focus State
```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- **Popover variant:** Single "Filter" button opens modal
- **Horizontal-scroll variant:** Scrollable row with overflow
- **Vertical-stack variant:** Full-width stacked buttons
- Touch targets: 44×44px minimum

**Tablet (768px - 1024px):**
- Horizontal layout with wrapping
- 2-column grid for many filters
- 32px touch targets

**Desktop (> 1024px):**
- Full horizontal layout
- No wrapping needed
- Hover states active

### Mobile Popover
```tsx
// Mobile: Show popover button
<div className="md:hidden">
  <button
    onClick={openFilterPopover}
    style={{
      minWidth: '120px',
      minHeight: '44px',
      padding: '8px 16px',
      backgroundColor: 'var(--background)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)'
    }}
  >
    Filter ({activeFilter})
    <ChevronDown size={16} />
  </button>
</div>

// Desktop: Show full filter bar
<div className="hidden md:flex gap-2 flex-wrap">
  {filters.map(filter => (
    <FilterButton key={filter.id} {...filter} />
  ))}
</div>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Tab through all filter buttons
- Enter/Space to activate filter
- Arrow keys to navigate (optional)
- Escape to close popover (mobile)

**Screen Readers:**
- Clear labels for each filter
- Active state announced
- Item counts announced (if present)
- ARIA attributes for current selection

**ARIA Attributes:**
```tsx
<button
  role="tab"
  aria-selected={isActive}
  aria-label={`Filter by ${label}. ${count} items.`}
  tabIndex={isActive ? 0 : -1}
>
  {label}
  {count && <span aria-hidden="true"> ({count})</span>}
</button>
```

**Focus Management:**
- Visible focus rings (2px solid)
- Focus returns to trigger after popover close
- Logical tab order

**Touch Targets:**
- Minimum 44×44px on mobile
- Adequate spacing between buttons (8px minimum)

---

## Item Count Display

### With Counts
```tsx
<button>
  WordPress
  <span
    style={{
      marginLeft: '8px',
      fontSize: 'var(--text-small)',
      fontFamily: 'Manrope, sans-serif',
      color: isActive ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
      opacity: 0.8
    }}
  >
    (45)
  </span>
</button>
```

### Without Counts
```tsx
<button>
  WordPress
</button>
```

---

## Clear/Reset Functionality

### Clear Button
```tsx
{showClearButton && activeFilter !== 'all' && (
  <button
    onClick={() => onFilterChange('all')}
    style={{
      padding: '8px 16px',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--muted-foreground)',
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      cursor: 'pointer',
      textDecoration: 'underline'
    }}
    aria-label="Clear all filters"
  >
    Clear
  </button>
)}
```

---

## URL Parameter Sync (Optional)

### Update URL on Filter Change
```tsx
const handleFilterChange = (filterId: string) => {
  setActiveFilter(filterId);
  
  // Update URL (optional)
  const url = new URL(window.location.href);
  if (filterId === 'all') {
    url.searchParams.delete('category');
  } else {
    url.searchParams.set('category', filterId);
  }
  window.history.pushState({}, '', url);
};
```

### Read from URL on Mount
```tsx
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (category) {
    setActiveFilter(category);
  }
}, []);
```

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Displays all filters
- [ ] Shows active state correctly
- [ ] Item counts display (if provided)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader announces active filter
- [ ] ARIA attributes correct
- [ ] WCAG AA contrast on all states

### Responsive
- [ ] Mobile popover works
- [ ] Horizontal scroll works (if used)
- [ ] Desktop layout correct
- [ ] Touch targets adequate (44×44px)

### Functionality
- [ ] Filter change callback fires
- [ ] Active state updates
- [ ] Clear button works (if shown)
- [ ] URL sync works (if enabled)

### Dark Mode
- [ ] Text readable in both modes
- [ ] Active state visible
- [ ] Borders visible
- [ ] Hover states appropriate

---

## Common Use Cases

### 1. Portfolio Archive
```tsx
<FilterBar
  filters={[
    { id: 'all', label: 'All Projects', count: 45 },
    { id: 'wordpress', label: 'WordPress', count: 18 },
    { id: 'woocommerce', label: 'WooCommerce', count: 12 },
    { id: 'design-system', label: 'Design Systems', count: 15 }
  ]}
  activeFilter={activeCategory}
  onFilterChange={setActiveCategory}
  type="category"
/>
```

### 2. Blog Index
```tsx
<FilterBar
  filters={blogCategories}
  activeFilter={activeCategory}
  onFilterChange={handleCategoryChange}
  type="category"
  showClearButton={true}
  mobileVariant="popover"
/>
```

### 3. Product Catalog
```tsx
<FilterBar
  filters={productCategories}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
  type="custom"
  align="left"
  showAllOption={false}
/>
```

---

## WordPress Implementation

### PHP Pattern Registration
```php
<?php
/**
 * Filter Bar Pattern
 */
register_block_pattern(
  'lsx-design/filter-bar',
  array(
    'title'       => __( 'Filter Bar', 'lsx-design' ),
    'description' => __( 'Interactive filters for content archives', 'lsx-design' ),
    'categories'  => array( 'nav' ),
    'keywords'    => array( 'filter', 'category', 'tag', 'archive' ),
    'content'     => '<!-- pattern content -->',
  )
);
```

### WordPress Query Integration
```php
<?php
// Get current category from URL
$current_category = get_query_var('category_name');

// Query posts by category
$args = array(
  'post_type'      => 'post',
  'category_name'  => $current_category,
  'posts_per_page' => 12,
);

$query = new WP_Query($args);
```

---

## Best Practices

### Content
- Use clear, concise labels (1-2 words)
- Show item counts when helpful
- Limit to 5-8 filters maximum
- Provide "All" option for easy reset

### Design
- Use consistent button sizing
- Maintain adequate spacing
- Make active state obvious
- Keep mobile UX simple

### Performance
- Don't reload page on filter change (SPA)
- Use URL parameters for shareability
- Debounce rapid filter changes
- Cache filtered results

### Accessibility
- Ensure keyboard navigation
- Provide clear ARIA labels
- Make touch targets large enough
- Test with screen readers

---

**Created:** December 27, 2024  
**Pattern:** FilterBar  
**Category:** Navigation  
**Status:** Production-ready ✅  
**Used in:** PortfolioArchiveTemplate, BlogIndexTemplate, ArchiveWithFiltersTemplate  
**Design System:** 100% compliant

