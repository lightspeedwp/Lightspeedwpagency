# FilterBar Component

**File:** `/src/app/components/patterns/FilterBar.tsx`  
**WordPress Mapping:** Block pattern (`patterns/filter-bar.php`)  
**Pattern Slug:** `lsx-design/nav/filters`  
**Category:** Block Patterns

---

## Purpose

Provides filtering controls for archive and listing pages. Allows users to refine content by category, tags, date, or custom taxonomies.

---

## WordPress Context

In WordPress, this would be a **block pattern** that:
- Appears on archive pages (category, tag, custom taxonomy)
- Uses Query Loop block filters
- Can be composed with custom blocks for advanced filtering
- Updates URL parameters to persist filter state

---

## Design System Requirements

### Typography
- **Filter labels:** `fontSize: 'var(--text-small)'`, `fontWeight: 600`, `fontFamily: 'Lexend, sans-serif'`
- **Filter options:** `fontSize: 'var(--text-base)'`, `fontFamily: 'Manrope, sans-serif'`
- **Active count:** `fontSize: 'var(--text-small)'`, `fontWeight: 500`

### Colors
- **Background:** `var(--background)` or `var(--card)`
- **Border:** `var(--border)`
- **Active filter:** `var(--primary)` background, `var(--primary-foreground)` text
- **Inactive filter:** `var(--secondary)` background, `var(--secondary-foreground)` text
- **Clear button:** `var(--destructive)` or `var(--muted-foreground)`

### Spacing
- **Container padding:** `className="py-4 px-4"`
- **Filter gap:** `gap-3`
- **Button gap:** `gap-2`
- **Section margin:** `mb-6`

### Layout
- **Mobile:** Stacked filters, one category per row
- **Desktop:** Horizontal layout with filter groups
- **Sticky behavior:** Optional, filters remain visible on scroll

---

## Component Structure

```tsx
<div 
  className="py-4 px-4 mb-6"
  style={{ 
    backgroundColor: 'var(--card)', 
    borderBottom: '1px solid var(--border)' 
  }}
>
  <Container>
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      {/* Filter Groups */}
      <div className="flex flex-wrap gap-3">
        {/* Category Filters */}
        <div className="flex items-center gap-2">
          <span 
            style={{ 
              fontSize: 'var(--text-small)', 
              fontWeight: 600 
            }}
          >
            Category:
          </span>
          <div className="flex gap-2">
            <Button 
              variant={isActive ? 'default' : 'secondary'}
              size="sm"
            >
              Filter Name
            </Button>
          </div>
        </div>
      </div>
      
      {/* Clear All */}
      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleClearAll}
        >
          Clear all filters
        </Button>
      )}
    </div>
  </Container>
</div>
```

---

## Props

```tsx
interface FilterBarProps {
  // Filter categories and options
  filters: Array<{
    id: string;
    label: string;
    options: Array<{
      value: string;
      label: string;
      count?: number; // Optional: number of results
    }>;
  }>;
  
  // Currently active filters
  activeFilters?: Record<string, string[]>;
  
  // Callback when filter is toggled
  onFilterChange?: (filterId: string, value: string) => void;
  
  // Callback when all filters cleared
  onClearAll?: () => void;
  
  // Optional: Show result count
  resultCount?: number;
  
  // Optional: Sticky behavior
  sticky?: boolean;
  
  // Optional: Additional CSS classes
  className?: string;
}
```

---

## Usage Examples

### Basic Category Filters

```tsx
import { FilterBar } from './components/patterns/FilterBar';

<FilterBar
  filters={[
    {
      id: 'destination',
      label: 'Destination',
      options: [
        { value: 'africa', label: 'Africa', count: 24 },
        { value: 'asia', label: 'Asia', count: 18 },
        { value: 'europe', label: 'Europe', count: 32 }
      ]
    },
    {
      id: 'experience',
      label: 'Experience',
      options: [
        { value: 'adventure', label: 'Adventure', count: 15 },
        { value: 'cultural', label: 'Cultural', count: 22 },
        { value: 'wildlife', label: 'Wildlife', count: 12 }
      ]
    }
  ]}
  activeFilters={{ destination: ['africa'], experience: ['adventure'] }}
  onFilterChange={handleFilterChange}
  onClearAll={handleClearAll}
  resultCount={8}
/>
```

### With Sticky Behavior

```tsx
<FilterBar
  filters={filters}
  sticky={true}
  className="top-[72px]" // Account for header height
/>
```

---

## WordPress Implementation Notes

### In `patterns/filter-bar.php`

```php
<?php
/**
 * Title: Filter Bar
 * Slug: lsx-design/nav/filters
 * Categories: navigation
 * Description: Filterable category navigation for archive pages
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"backgroundColor":"card","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-card-background-color has-background">
  
  <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    
    <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"}} -->
    <div class="wp-block-group">
      
      <!-- wp:paragraph {"style":{"typography":{"fontWeight":"600"}},"fontSize":"small"} -->
      <p class="has-small-font-size" style="font-weight:600">Category:</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:buttons -->
      <div class="wp-block-buttons">
        <!-- wp:button {"size":"small","variant":"secondary"} -->
        <div class="wp-block-button">
          <a class="wp-block-button__link" href="?category=africa">Africa</a>
        </div>
        <!-- /wp:button -->
        
        <!-- Add more filter buttons -->
      </div>
      <!-- /wp:buttons -->
      
    </div>
    <!-- /wp:group -->
    
    <!-- wp:button {"variant":"ghost","size":"small"} -->
    <div class="wp-block-button">
      <a class="wp-block-button__link" href="?">Clear all filters</a>
    </div>
    <!-- /wp:button -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

### Custom Block Alternative

For more complex filtering, create a custom block:
- `lsx-design/filter-bar` custom block
- Dynamically render taxonomy terms
- Handle AJAX filtering without page reload
- Preserve filter state in URL

---

## Filter Patterns

### Single Select (Radio)
User can select only one option per category.

```tsx
// When user clicks a filter, deselect others in same category
activeFilters = { destination: ['africa'] } // Only one active
```

### Multi Select (Checkbox)
User can select multiple options per category.

```tsx
// User can combine filters
activeFilters = { 
  destination: ['africa', 'asia'],
  experience: ['adventure', 'cultural'] 
}
```

### Toggle
Filters can be toggled on/off.

```tsx
// Click again to remove filter
onClick={() => toggleFilter(filterId, value)}
```

---

## State Management

### URL Parameters (Recommended)

```tsx
// Read filters from URL
const params = new URLSearchParams(window.location.search);
const activeFilters = {
  destination: params.getAll('destination'),
  experience: params.getAll('experience')
};

// Update URL when filter changes
function handleFilterChange(filterId: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has(filterId, value)) {
    params.delete(filterId);
  } else {
    params.append(filterId, value);
  }
  
  window.history.pushState({}, '', `?${params.toString()}`);
  // Trigger content refetch
}
```

### React State (Alternative)

```tsx
const [activeFilters, setActiveFilters] = useState({});

function handleFilterChange(filterId: string, value: string) {
  setActiveFilters(prev => {
    const current = prev[filterId] || [];
    if (current.includes(value)) {
      return { ...prev, [filterId]: current.filter(v => v !== value) };
    }
    return { ...prev, [filterId]: [...current, value] };
  });
}
```

---

## Accessibility Requirements

- [ ] Filter buttons must have clear labels
- [ ] Active filters indicated with `aria-pressed="true"`
- [ ] Clear button has descriptive text ("Clear all filters", not "Clear")
- [ ] Focus states visible on all buttons
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen readers announce filter state changes
- [ ] Result count updates announced to screen readers

---

## Touch Target Requirements

- [ ] All filter buttons must be 44×44px minimum
- [ ] Button padding: `py-2 px-3` minimum
- [ ] Adequate spacing between filter options (gap-2 minimum)
- [ ] Touch-friendly tap targets on mobile

---

## Responsive Behavior

### Mobile (< 768px)
- **Mobile Popover UI:**
  - Toggle button shows active filter
  - Tap opens animated dropdown popover
  - Vertical list of all filter options
  - **48×48px touch targets (WCAG AAA)** ⭐
  - Active filter highlighted with primary color
  - Count badges displayed on the right
  - Auto-closes after selection
  - Smooth slide-down animation (300ms)
  
### Desktop (≥ 768px)
- Horizontal layout
- Filter groups inline with filter buttons
- Filter buttons with 44×44px touch targets (WCAG AA)
- Hover effects and visual feedback
- Optional sticky positioning

---

## Token Reference

```tsx
// Typography
fontSize: 'var(--text-small)'      // 14px — Filter labels
fontSize: 'var(--text-base)'       // 16px — Filter options
fontFamily: 'Lexend, sans-serif'   // Labels
fontFamily: 'Manrope, sans-serif'  // Options

// Colors
backgroundColor: 'var(--card)'        // Filter bar background
backgroundColor: 'var(--primary)'     // Active filter
backgroundColor: 'var(--secondary)'   // Inactive filter
borderColor: 'var(--border)'          // Separator

// Spacing (Tailwind classes)
className="py-4 px-4"              // Container padding
gap-3                              // Filter group gap
gap-2                              // Button gap
```

---

## Performance Considerations

- Debounce filter changes to avoid excessive API calls
- Use URL parameters for shareable filter states
- Implement skeleton loaders while content filters
- Cache filter results when possible
- Lazy load filter options if there are many categories

---

## Related Components

- **[ArchiveHeader](./ArchiveHeader.md)** — Page header above filters
- **[CardGrid](./CardGrid.md)** — Filtered content display
- **[PaginationNav](./PaginationNav.md)** — Page navigation with filters
- **[EmptyState](./EmptyState.md)** — Shown when filters return no results
- **[Button](./Button.md)** — Filter buttons

---

## WordPress Block Equivalents

- Filter container → **Group block** with card background
- Filter categories → **Paragraph block** with labels
- Filter buttons → **Buttons block** with dynamic terms
- Clear button → **Button block** with ghost variant

---

## Advanced Features

### Filter Count Badges

```tsx
<Button variant="secondary" size="sm">
  Africa
  <span 
    className="ml-2" 
    style={{ 
      fontSize: 'var(--text-small)', 
      color: 'var(--muted-foreground)' 
    }}
  >
    (24)
  </span>
</Button>
```

### Filter Search

```tsx
<Input 
  type="search"
  placeholder="Search filters..."
  onChange={handleFilterSearch}
/>
```

### Expandable Filter Groups

```tsx
<Accordion>
  <AccordionItem value="destination">
    <AccordionTrigger>Destination</AccordionTrigger>
    <AccordionContent>
      {/* Filter options */}
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Notes

- Filters must update content without full page reload (progressive enhancement)
- URL parameters allow sharing filtered views
- Filter state should persist across navigation
- "Clear all" only appears when filters are active
- Consider filter analytics to understand user behavior
- Test filter combinations to ensure logical results

---

**Last Updated:** December 24, 2024  
**Component Status:** ✅ Implemented  
**Documentation Status:** ✅ Complete