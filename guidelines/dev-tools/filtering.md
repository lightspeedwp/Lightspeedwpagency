# Developer Tools Filtering Guidelines

## Overview

All developer tools that display multiple items must implement consistent filtering with both desktop and mobile-optimized interfaces.

---

## Core Principles

1. **Dual Interface:** Desktop inline filters + Mobile popover
2. **Consistent UX:** Same filter logic across all tools
3. **Mobile First:** Touch-friendly 48×48px targets
4. **Accessible:** Keyboard navigation, ARIA labels, focus management

---

## Filter Types

### Category Filters

**Use case:** Filter by type, category, or classification

```tsx
type FilterType = 'all' | 'category1' | 'category2' | 'category3';

const [filter, setFilter] = useState<FilterType>('all');

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'category1', label: 'Category 1' },
  { value: 'category2', label: 'Category 2' },
  { value: 'category3', label: 'Category 3' }
];
```

### Search Filter

**Use case:** Text-based filtering

```tsx
const [searchTerm, setSearchTerm] = useState('');

const filteredItems = items.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.description.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Combined Filters

**Use case:** Category + Search together

```tsx
const filteredItems = items.filter(item => {
  // Category filter
  if (filter !== 'all' && item.category !== filter) return false;
  
  // Search filter
  if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return false;
  }
  
  return true;
});
```

---

## Desktop Filter Toolbar

### Layout

**Position:** Below page header, in separate section  
**Spacing:** `Section variant="default" spacing="30"`

```tsx
<Section variant="default" spacing="30">
  <Container>
    <div className="flex flex-col gap-6">
      {/* Search (optional) */}
      <SearchInput />
      
      {/* Filter Buttons */}
      <div className="hidden md:flex flex-wrap items-center gap-3">
        <span style={{
          fontSize: 'var(--text-base)',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--foreground)'
        }}>
          Filter:
        </span>
        
        {filterOptions.map((option) => (
          <FilterButton
            key={option.value}
            option={option}
            isActive={filter === option.value}
            onClick={() => setFilter(option.value)}
          />
        ))}
      </div>
    </div>
  </Container>
</Section>
```

### Filter Button Component

```tsx
interface FilterButtonProps {
  option: { value: string; label: string };
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ option, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: isActive ? 'var(--primary)' : 'var(--background)',
        color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
        border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border-soft)'}`,
        borderRadius: 'var(--radius-lg)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textTransform: 'capitalize'
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.backgroundColor = 'var(--card)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = 'var(--border-soft)';
          e.currentTarget.style.backgroundColor = 'var(--background)';
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid var(--ring)';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      {option.label}
    </button>
  );
}
```

---

## Mobile Filter Popover

### Component Usage

**Import:**
```tsx
import { MobileFilterPopover } from '../common/MobileFilterPopover';
```

**Implementation:**
```tsx
<div className="md:hidden">
  <MobileFilterPopover
    options={filterOptions}
    selectedValue={filter}
    onSelect={setFilter}
    label="Filter"
    buttonLabel="Filter Tools"
  />
</div>
```

### MobileFilterPopover Props

```tsx
interface MobileFilterPopoverProps {
  /** Array of filter options */
  options: Array<{ value: string; label: string }>;
  
  /** Currently selected filter value */
  selectedValue: string;
  
  /** Callback when filter is selected */
  onSelect: (value: string) => void;
  
  /** Label for the filter group (e.g., "Filter", "Sort By") */
  label: string;
  
  /** Button text (e.g., "Filter Tools", "Sort Items") */
  buttonLabel: string;
  
  /** Optional icon component (default: Filter from lucide-react) */
  icon?: React.ComponentType<{ size: number }>;
}
```

### Touch Target Requirements

**WCAG AAA Standard:** 48×48px minimum

```tsx
// Button dimensions
minWidth: '48px',
minHeight: '48px',
padding: '12px 20px'

// Popover option dimensions
padding: '16px',
minHeight: '48px'
```

---

## Search Input Component

### Standard Search Input

```tsx
import { Search } from 'lucide-react';

function SearchInput({ 
  value, 
  onChange, 
  placeholder = 'Search...' 
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <Search
        size={20}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--muted-foreground)'
        }}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px 12px 48px',
          backgroundColor: 'var(--background)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-lg)',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
          outline: 'none',
          transition: 'border-color 0.2s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--primary)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-soft)';
        }}
      />
    </div>
  );
}
```

### Search with Debounce (Performance)

For large datasets (500+ items):

```tsx
import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 300);

const filteredItems = items.filter(item =>
  item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
);
```

---

## Filter Logic Patterns

### Simple Category Filter

```tsx
const filteredItems = filter === 'all' 
  ? items 
  : items.filter(item => item.category === filter);
```

### Multi-Category Filter

When items can belong to multiple categories:

```tsx
const filteredCategories = categories.filter(category => {
  // Apply category filter
  if (filter !== 'all' && category.id !== filter) return false;
  
  // Apply search to category items
  if (searchTerm) {
    const hasMatch = category.items.some(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (!hasMatch) return false;
  }
  
  return true;
}).map(category => ({
  ...category,
  items: category.items.filter(item =>
    !searchTerm ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}));
```

### Hierarchical Filter

For nested data (e.g., archetypes > templates > pages):

```tsx
const filteredData = data
  .filter(archetype => {
    if (filter !== 'all' && archetype.type !== filter) return false;
    return true;
  })
  .map(archetype => ({
    ...archetype,
    templates: archetype.templates.map(template => ({
      ...template,
      pages: template.pages.filter(page =>
        !searchTerm ||
        page.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(template => template.pages.length > 0)
  }))
  .filter(archetype => archetype.templates.length > 0);
```

---

## Responsive Behavior

### Breakpoint Strategy

```tsx
// Mobile (< 768px): Show popover
<div className="md:hidden">
  <MobileFilterPopover {...props} />
</div>

// Desktop (≥ 768px): Show inline filters
<div className="hidden md:flex">
  {/* Filter buttons */}
</div>
```

### Layout Adjustments

```tsx
// Mobile: Stack search and filter button
<div className="flex flex-col gap-4">
  <SearchInput />
  <MobileFilterPopover />
</div>

// Desktop: Search above, filters inline
<div className="flex flex-col gap-6">
  <SearchInput />
  <div className="flex flex-wrap gap-3">
    {/* Filter buttons */}
  </div>
</div>
```

---

## Accessibility

### Keyboard Navigation

**Filter Buttons:**
- Tab: Focus next/previous button
- Enter/Space: Activate button
- Arrow keys: Navigate between buttons (optional enhancement)

**Search Input:**
- Tab: Focus input
- Type: Filter in real-time
- Escape: Clear search (optional)

**Mobile Popover:**
- Tab: Focus trigger button
- Enter/Space: Open popover
- Arrow keys: Navigate options
- Enter/Space: Select option
- Escape: Close popover

### ARIA Labels

```tsx
// Filter buttons
aria-label={`Filter by ${option.label}`}
aria-pressed={isActive}

// Search input
role="search"
aria-label="Search items"

// Mobile popover
aria-label="Filter options"
aria-haspopup="listbox"
aria-expanded={isOpen}
```

### Focus Management

```tsx
// Visible focus ring
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
onBlur={(e) => {
  e.currentTarget.style.outline = 'none';
}}
```

---

## Performance Optimization

### Memoization

For expensive filter operations:

```tsx
import { useMemo } from 'react';

const filteredItems = useMemo(() => {
  return items.filter(item => {
    // Complex filtering logic
  });
}, [items, filter, searchTerm]);
```

### Virtual Scrolling

For 1000+ items, consider virtual scrolling:

```tsx
// Use react-window or react-virtualized
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={filteredItems.length}
  itemSize={100}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      <ItemCard item={filteredItems[index]} />
    </div>
  )}
</FixedSizeList>
```

---

## Empty States

### No Results

```tsx
{filteredItems.length === 0 && (
  <div style={{
    padding: '64px 32px',
    textAlign: 'center',
    backgroundColor: 'var(--card)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-soft)'
  }}>
    <p style={{
      fontSize: 'var(--text-lg)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-regular)',
      color: 'var(--muted-foreground)',
      margin: 0
    }}>
      {searchTerm 
        ? `No items found matching "${searchTerm}"`
        : `No items in this category`
      }
    </p>
  </div>
)}
```

### Filter with No Matches

```tsx
{filteredCategories.length === 0 && (
  <EmptyState
    title="No matches found"
    description={`Try adjusting your filters or search term`}
    action={
      <button onClick={() => {
        setFilter('all');
        setSearchTerm('');
      }}>
        Clear Filters
      </button>
    }
  />
)}
```

---

## Complete Implementation Example

```tsx
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { MobileFilterPopover } from '../common/MobileFilterPopover';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

type FilterType = 'all' | 'category1' | 'category2' | 'category3';

export function DevToolTemplate() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'category1', label: 'Category 1' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category3', label: 'Category 3' }
  ];

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Category filter
      if (filter !== 'all' && item.category !== filter) return false;
      
      // Search filter
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }, [items, filter, searchTerm]);

  return (
    <div>
      {/* ... Header ... */}
      
      {/* Filter Toolbar */}
      <Section variant="default" spacing="30">
        <Container>
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative">
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted-foreground)'
                }}
              />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }}
              />
            </div>

            {/* Mobile: Filter Popover */}
            <div className="md:hidden">
              <MobileFilterPopover
                options={filterOptions}
                selectedValue={filter}
                onSelect={(value) => setFilter(value as FilterType)}
                label="Filter"
                buttonLabel="Filter Items"
              />
            </div>

            {/* Desktop: Inline Filters */}
            <div className="hidden md:flex flex-wrap items-center gap-3">
              <span style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--foreground)'
              }}>
                Filter:
              </span>
              
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value as FilterType)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: filter === option.value ? 'var(--primary)' : 'var(--background)',
                    color: filter === option.value ? 'var(--primary-foreground)' : 'var(--foreground)',
                    border: `1px solid ${filter === option.value ? 'var(--primary)' : 'var(--border-soft)'}`,
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="default" spacing="50">
        <Container>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState searchTerm={searchTerm} />
          )}
        </Container>
      </Section>
    </div>
  );
}
```

---

## Testing Checklist

Before publishing:

- [ ] Desktop filters work correctly
- [ ] Mobile popover opens/closes properly
- [ ] Search filters items in real-time
- [ ] Combined filters work together
- [ ] Empty states display correctly
- [ ] Filter buttons have visible focus
- [ ] Touch targets ≥48×48px on mobile
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] ARIA labels present and correct
- [ ] Filters persist when switching between mobile/desktop

---

**Last Updated:** December 28, 2024  
**Version:** 1.0  
**Status:** Production Ready
