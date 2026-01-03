# Layout Switcher

**Purpose:** Toggle between different view modes (e.g., grid vs. list, cards vs. table) for the same content.

**WordPress concept:** Custom UI enhancement or block variation

**Location:** To be created in `src/app/components/ui/LayoutSwitcher.tsx`

---

## When to Use

- **Archive pages** where users might prefer list vs. grid view
- **Search results** with different display options
- **Product catalogs** with thumbnail vs. detail views
- **Any listing** where layout preference adds value

**Do not use:**
- On single-item pages
- When only one layout makes sense
- As decoration (must provide real utility)

---

## Component API

```tsx
interface LayoutSwitcherProps {
  currentLayout: 'grid' | 'list' | 'table';
  onLayoutChange: (layout: string) => void;
  options?: Array<{
    id: string;
    label: string;
    icon: React.ReactNode;
  }>;
  className?: string;
}
```

---

## Basic Usage

```tsx
import { LayoutSwitcher } from '../ui/LayoutSwitcher';
import { useState } from 'react';
import { Grid, List } from 'lucide-react';

function ArchivePage() {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <>
      {/* Layout switcher */}
      <LayoutSwitcher
        currentLayout={layout}
        onLayoutChange={setLayout}
        options={[
          { id: 'grid', label: 'Grid view', icon: <Grid /> },
          { id: 'list', label: 'List view', icon: <List /> }
        ]}
      />

      {/* Render content based on layout */}
      {layout === 'grid' ? (
        <CardGrid items={destinations} />
      ) : (
        <ListView items={destinations} />
      )}
    </>
  );
}
```

---

## Implementation Example

```tsx
/**
 * Layout Switcher Component
 */

import { Grid, List, Table } from 'lucide-react';

interface LayoutOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface LayoutSwitcherProps {
  currentLayout: string;
  onLayoutChange: (layout: string) => void;
  options?: LayoutOption[];
  className?: string;
}

export function LayoutSwitcher({ 
  currentLayout, 
  onLayoutChange,
  options,
  className = ''
}: LayoutSwitcherProps) {
  // Default options if none provided
  const defaultOptions = [
    { id: 'grid', label: 'Grid view', icon: <Grid size={16} /> },
    { id: 'list', label: 'List view', icon: <List size={16} /> }
  ];

  const layoutOptions = options || defaultOptions;

  return (
    <div 
      role="group"
      aria-label="Layout options"
      className={className}
      style={{
        display: 'flex',
        gap: 'var(--wp--preset--spacing--10)',
        border: '1px solid var(--wp--preset--color--neutral-300)',
        borderRadius: '0.375rem',
        padding: 'var(--wp--preset--spacing--10)',
        backgroundColor: 'var(--wp--preset--color--base)',
      }}
    >
      {layoutOptions.map((option) => {
        const isActive = currentLayout === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onLayoutChange(option.id)}
            aria-label={option.label}
            aria-pressed={isActive}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--wp--preset--spacing--10)',
              minWidth: '36px',
              minHeight: '36px',
              backgroundColor: isActive 
                ? 'var(--wp--preset--color--primary)' 
                : 'transparent',
              color: isActive 
                ? 'var(--wp--preset--color--primary-foreground)' 
                : 'var(--wp--preset--color--contrast)',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
}
```

---

## Common Pattern: Archive with Layout Toggle

```tsx
import { useState } from 'react';
import { LayoutSwitcher } from '../ui/LayoutSwitcher';
import { CardGrid } from '../patterns/CardGrid';
import { ListView } from '../patterns/ListView';
import { Grid, List } from 'lucide-react';

export function ArchiveTemplate() {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        <Section spacing="60">
          <Container>
            {/* Header with layout switcher */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--wp--preset--spacing--40)'
            }}>
              <Heading level={1}>Destinations</Heading>
              
              <LayoutSwitcher
                currentLayout={layout}
                onLayoutChange={setLayout}
                options={[
                  { id: 'grid', label: 'Grid view', icon: <Grid /> },
                  { id: 'list', label: 'List view', icon: <List /> }
                ]}
              />
            </div>

            {/* Conditional rendering based on layout */}
            {layout === 'grid' ? (
              <CardGrid items={destinations} columns={3} />
            ) : (
              <ListView items={destinations} />
            )}
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
```

---

## WordPress Mapping

### Option 1: JavaScript Enhancement

Add to existing archive template:

```javascript
// assets/js/layout-switcher.js
(function() {
  const switcher = document.querySelector('.layout-switcher');
  const grid = document.querySelector('.content-grid');
  
  switcher?.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    
    const layout = button.dataset.layout;
    grid.className = `content-${layout}`;
    
    // Store preference
    localStorage.setItem('preferredLayout', layout);
  });
  
  // Restore preference
  const preferred = localStorage.getItem('preferredLayout');
  if (preferred) {
    document.querySelector(`[data-layout="${preferred}"]`)?.click();
  }
})();
```

### Option 2: Block Variation

Create block variations for Query Loop:

```php
// functions.php
register_block_pattern(
  'lsx-design/query-grid',
  array(
    'title' => __('Grid View', 'lsx-design'),
    'blockTypes' => array('core/query'),
    'content' => '<!-- wp:query {"displayLayout":{"type":"grid","columns":3}} -->...'
  )
);

register_block_pattern(
  'lsx-design/query-list',
  array(
    'title' => __('List View', 'lsx-design'),
    'blockTypes' => array('core/query'),
    'content' => '<!-- wp:query {"displayLayout":{"type":"list"}} -->...'
  )
);
```

---

## Accessibility

### ARIA Attributes

```tsx
// Group label
<div role="group" aria-label="Layout options">

// Button states
<button
  aria-label="Grid view"
  aria-pressed={isActive}  // true when active
>
```

**Required:** 
- `role="group"` on container
- `aria-label` on each button
- `aria-pressed` to indicate active state

### Keyboard Navigation

```tsx
// Buttons are keyboard-focusable by default
<button>  // Tab to focus, Enter/Space to activate
  <Icon />
</button>
```

### Focus States

```tsx
button:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
}
```

---

## Persistence

### Save User Preference

```tsx
const handleLayoutChange = (newLayout: string) => {
  setLayout(newLayout);
  
  // Save to localStorage
  localStorage.setItem('preferredLayout', newLayout);
};

// Restore on mount
useEffect(() => {
  const saved = localStorage.getItem('preferredLayout');
  if (saved) {
    setLayout(saved as 'grid' | 'list');
  }
}, []);
```

**Benefit:** Users don't have to re-select their preferred layout on every page visit.

---

## Styling

### Token-Based Spacing

```tsx
style={{
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)',
  padding: 'var(--wp--preset--spacing--10)',
  border: '1px solid var(--wp--preset--color--neutral-300)',
}}
```

### Active State

```tsx
// Active button
style={{
  backgroundColor: 'var(--wp--preset--color--primary)',
  color: 'var(--wp--preset--color--primary-foreground)',
}}

// Inactive button
style={{
  backgroundColor: 'transparent',
  color: 'var(--wp--preset--color--contrast)',
}}
```

### Touch Targets

```tsx
style={{
  minWidth: '36px',    // Minimum 36px (close to 44px with padding)
  minHeight: '36px',
  padding: 'var(--wp--preset--spacing--10)',  // Adds to touch target
}}
```

**Accessibility:** With padding, total touch target ≈ 44×44px (WCAG AA).

---

## Common Mistakes

### ❌ DON'T

```tsx
// Layout switcher without accessible labels
<button onClick={() => setLayout('grid')}>
  <Grid />  // Screen readers don't know what this does
</button>

// Forgot to persist preference
const handleChange = (layout) => {
  setLayout(layout);  // User has to re-select every time
};

// Layout switcher when only one layout makes sense
<LayoutSwitcher />  // But content only works in grid view

// No visual indication of active state
<button style={{ backgroundColor: 'transparent' }}>
  {/* Same styling for active and inactive */}
</button>
```

### ✅ DO

```tsx
// Accessible labels
<button aria-label="Grid view" aria-pressed={isActive}>
  <Grid />
</button>

// Persist preference
const handleChange = (layout) => {
  setLayout(layout);
  localStorage.setItem('preferredLayout', layout);
};

// Only use when multiple layouts are valuable
{supportsMultipleLayouts && (
  <LayoutSwitcher />
)}

// Clear active state
<button style={{
  backgroundColor: isActive 
    ? 'var(--wp--preset--color--primary)' 
    : 'transparent'
}}>
```

---

## Testing Checklist

- [ ] All layout options are keyboard accessible
- [ ] Active layout button has `aria-pressed="true"`
- [ ] All buttons have descriptive `aria-label`
- [ ] Focus states are visible (2px accent outline)
- [ ] Touch targets meet 44×44px minimum
- [ ] Layout preference is saved to localStorage
- [ ] Saved preference is restored on page load
- [ ] Icons are appropriate size (16px recommended)
- [ ] Active state is visually distinct
- [ ] Switcher works on mobile devices

---

## Icon Recommendations

**Before using any icon, verify it exists in lucide-react:**

```bash
grep -i "grid\|list\|table" node_modules/lucide-react/dist/esm/icons/index.js
```

**Common layout icons:**
- `Grid` — Grid view (cards, thumbnails)
- `List` — List view (vertical stack)
- `Table` — Table view (data rows)
- `LayoutGrid` — Alternative grid icon
- `LayoutList` — Alternative list icon

---

## Related Components

- **CardGrid** — Grid layout for cards
- **FilterBar** — Often used alongside LayoutSwitcher

---

## Related Documentation

- [../overview-icons.md](../overview-icons.md) — Icon verification process
- [../icons/interface.md](../icons/interface.md) — UI icons
- [../overview-components.md](../overview-components.md) — Component system

---

**Last Updated:** December 24, 2024
