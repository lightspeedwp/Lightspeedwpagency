# DevToolsHeader & DevToolsFilterToolbar Components

## Overview

Reusable components for consistent developer tools page layout.

---

## DevToolsHeader Component

**Location:** `/src/app/components/ui/DevToolsHeader.tsx`

### Purpose

- Standardize page headers across all dev tools
- Automatic breadcrumb generation ("Home > Dev Tools > {Tool Name}")
- Optional stats grid display
- Centered, responsive layout

### Usage

```tsx
import { DevToolsHeader } from '../ui/DevToolsHeader';

// Basic usage (no stats)
<DevToolsHeader
  toolName="Template Tester"
  description="Test all WordPress templates and page archetypes"
/>

// With stats
<DevToolsHeader
  toolName="Component Showcase"
  description="Complete component library"
  stats={[
    { value: '39', label: 'Components' },
    { value: '5', label: 'Categories' },
    { value: '15', label: 'Patterns' }
  ]}
/>
```

### Props

```tsx
interface DevToolsHeaderProps {
  /** Tool name for page title and breadcrumb */
  toolName: string;
  
  /** Tool description (displayed below title) */
  description: string;
  
  /** Optional array of stat cards (1-4 stats recommended) */
  stats?: Array<{
    value: string | number;
    label: string;
  }>;
}
```

### Features

- **Automatic breadcrumbs:** Always renders "Home > Dev Tools > {toolName}"
- **Responsive stats grid:** 
  - 1 stat: Single column, centered
  - 2 stats: 1 column mobile, 2 columns desktop
  - 3 stats: 1 column mobile, 3 columns desktop
  - 4 stats: 1 column mobile, 2 columns tablet, 4 columns desktop
- **Typography:** Lexend (headings), Manrope (body)
- **Colors:** 100% CSS variables
- **Max-width:** 4xl (896px) for centered content

---

## DevToolsFilterToolbar Component

**Location:** `/src/app/components/ui/DevToolsFilterToolbar.tsx`

### Purpose

- Standardize filtering UI across all dev tools
- Desktop: Inline filter buttons
- Mobile: Popover with 48×48px touch targets (WCAG AAA)
- Optional search input
- Keyboard navigation support

### Usage

```tsx
import { DevToolsFilterToolbar } from '../ui/DevToolsFilterToolbar';

// Category filters only
<DevToolsFilterToolbar
  filterOptions={[
    { value: 'all', label: 'All' },
    { value: 'patterns', label: 'Patterns' },
    { value: 'blocks', label: 'Blocks' }
  ]}
  selectedFilter={filter}
  onFilterChange={setFilter}
/>

// With search input
<DevToolsFilterToolbar
  filterOptions={filterOptions}
  selectedFilter={filter}
  onFilterChange={setFilter}
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  searchPlaceholder="Search components..."
/>
```

### Props

```tsx
interface DevToolsFilterToolbarProps {
  /** Array of filter options */
  filterOptions: Array<{
    value: string;
    label: string;
  }>;
  
  /** Currently selected filter value */
  selectedFilter: string;
  
  /** Callback when filter changes */
  onFilterChange: (value: string) => void;
  
  /** Optional search term (enables search input) */
  searchTerm?: string;
  
  /** Optional search change callback */
  onSearchChange?: (value: string) => void;
  
  /** Optional search placeholder (default: "Search...") */
  searchPlaceholder?: string;
  
  /** Optional filter label (default: "Filter:") */
  filterLabel?: string;
  
  /** Optional mobile button label (default: "Filter") */
  mobileButtonLabel?: string;
}
```

### Features

- **Responsive design:**
  - Mobile (< 768px): Shows popover with MobileFilterPopover
  - Desktop (≥ 768px): Shows inline filter buttons
- **Optional search:** Only renders if searchTerm and onSearchChange provided
- **Accessibility:**
  - ARIA labels on all interactive elements
  - Keyboard navigation (Tab, Enter)
  - Focus visible with 2px outline
  - Touch targets ≥48×48px on mobile
- **Visual feedback:**
  - Active state: Primary color background
  - Hover state: Border color changes
  - Focus state: Outline ring

---

## Complete Example

```tsx
import { useState } from 'react';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../ui/BackToTopButton';
import { DevToolsHeader } from '../ui/DevToolsHeader';
import { DevToolsFilterToolbar } from '../ui/DevToolsFilterToolbar';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

export function MyDevTool() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'category1', label: 'Category 1' },
    { value: 'category2', label: 'Category 2' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)'
    }}>
      <SkipLink targetId="main-content" />
      <SiteHeader />

      <main id="main-content" role="main" style={{ flex: 1 }}>
        {/* Page Header with Stats */}
        <DevToolsHeader
          toolName="My Dev Tool"
          description="Description of what this tool does"
          stats={[
            { value: '100', label: 'Total Items' },
            { value: '5', label: 'Categories' }
          ]}
        />

        {/* Filter Toolbar with Search */}
        <DevToolsFilterToolbar
          filterOptions={filterOptions}
          selectedFilter={filter}
          onFilterChange={setFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchPlaceholder="Search items..."
        />

        {/* Main Content */}
        <Section variant="default" spacing="50">
          <Container>
            {/* Your content here */}
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}
```

---

## Migration Guide

### Replacing Manual Breadcrumbs

**Before:**
```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Tool Name' }
  ]}
  className="mb-8"
/>

<h1>Tool Name</h1>
<p>Description</p>
```

**After:**
```tsx
<DevToolsHeader
  toolName="Tool Name"
  description="Description"
/>
```

### Replacing Manual Filters

**Before:**
```tsx
<div className="md:hidden">
  <MobileFilterPopover {...} />
</div>

<div className="hidden md:flex">
  {/* Manual filter buttons */}
</div>
```

**After:**
```tsx
<DevToolsFilterToolbar
  filterOptions={filterOptions}
  selectedFilter={filter}
  onFilterChange={setFilter}
/>
```

---

## Design System Compliance

### Typography

```tsx
// H1 (Tool Name)
fontSize: 'var(--text-h1)',
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)'

// Description
fontSize: 'var(--text-xl)',
fontFamily: 'Manrope, sans-serif',
fontWeight: 'var(--font-weight-regular)'

// Stat Value
fontSize: 'var(--text-h1)',
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)',
color: 'var(--primary)'

// Stat Label
fontSize: 'var(--text-base)',
fontFamily: 'Manrope, sans-serif',
color: 'var(--muted-foreground)'
```

### Colors

```tsx
// Foreground text
color: 'var(--foreground)'

// Muted text
color: 'var(--muted-foreground)'

// Primary accent
color: 'var(--primary)'
backgroundColor: 'var(--primary)'

// Cards
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'
```

### Spacing

```tsx
// Between breadcrumbs and title
className="mb-8"

// Between title and description
margin: '0 0 16px 0'

// Between description and stats
margin: '0 0 48px 0'

// Stats grid gap
className="gap-8"
```

---

## Accessibility

### DevToolsHeader
- ✅ Semantic HTML (h1 for title)
- ✅ Proper heading hierarchy
- ✅ Breadcrumb navigation with ARIA labels
- ✅ Schema.org structured data (from Breadcrumbs)
- ✅ Keyboard navigable links

### DevToolsFilterToolbar
- ✅ Search input with role="search"
- ✅ ARIA labels on all buttons
- ✅ aria-pressed state on active filters
- ✅ Keyboard navigation (Tab, Enter)
- ✅ Focus visible (2px outline)
- ✅ Touch targets ≥48×48px on mobile
- ✅ Screen reader friendly

---

## Testing Checklist

Before using these components:

- [ ] Import components from correct paths
- [ ] Provide required props (toolName, description, filterOptions, etc.)
- [ ] Test breadcrumb navigation works
- [ ] Test desktop filters work
- [ ] Test mobile popover opens/closes
- [ ] Test search filters items (if using search)
- [ ] Verify keyboard navigation (Tab, Enter)
- [ ] Check focus states visible
- [ ] Confirm WCAG 2.1 AA compliance
- [ ] Test on mobile devices (touch targets)

---

**Last Updated:** December 28, 2024  
**Version:** 1.0  
**Status:** Production Ready
