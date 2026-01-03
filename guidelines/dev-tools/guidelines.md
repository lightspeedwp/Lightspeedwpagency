# Developer Tools Guidelines — LSX Design System

## Purpose

Developer Tools provide testing, documentation, and showcase interfaces for the LSX Design system. All tools must follow consistent patterns for navigation, filtering, layout, and accessibility.

---

## Core Principles

### 1. Consistency First
All dev tools share the same navigation, layout, and interaction patterns. Users should feel familiar with every tool after using one.

### 2. Mobile-First
Every tool must work perfectly on mobile devices with touch-friendly targets (44×44px minimum) and mobile-optimized filtering.

### 3. Accessibility Required
WCAG 2.1 AA compliance is mandatory. All tools must support keyboard navigation, screen readers, and reduced motion.

### 4. Design System Compliance
100% CSS variables from `theme.css`. No hardcoded colors, spacing, or typography.

---

## Navigation Structure

### Breadcrumb Pattern

**Format:** `Home > Dev Tools > {Tool Name}`

**Implementation:**
```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: '{Tool Name}' }
  ]}
  className="mb-8"
/>
```

**Rules:**
- Always include breadcrumbs on every dev tool page
- First item: "Home" (links to homepage)
- Second item: "Dev Tools" (links to dev-tools landing page)
- Last item: Current tool name (no link, current page)
- Position: Top of main content, before page header

---

## Page Structure

### Required Sections

Every dev tool page must have these sections in this order:

1. **Skip Link** — Accessibility (hidden until focused)
2. **Site Header** — Global navigation
3. **Main Content** (id="main-content")
   - Breadcrumbs
   - Page Header
   - Stats (optional)
   - Filter Toolbar
   - Primary Content
   - Footer Note (optional)
4. **Site Footer** — Global footer
5. **Back to Top Button** — Scroll utility

### Layout Template

```tsx
<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  <SkipLink targetId="main-content" />
  <SiteHeader />
  
  <main id="main-content" role="main" style={{ flex: 1 }}>
    {/* Page Header Section */}
    <Section variant="default" spacing="50">
      <Container>
        <Breadcrumbs items={[...]} className="mb-8" />
        
        <div className="text-center max-w-4xl mx-auto">
          <h1>{Tool Name}</h1>
          <p>{Description}</p>
          {/* Optional Stats */}
        </div>
      </Container>
    </Section>
    
    {/* Filter Toolbar Section */}
    <Section variant="default" spacing="30">
      <Container>
        {/* Desktop Filters + Mobile Popover */}
      </Container>
    </Section>
    
    {/* Primary Content */}
    <Section variant="default" spacing="50">
      <Container>
        {/* Tool-specific content */}
      </Container>
    </Section>
  </main>
  
  <SiteFooter />
  <BackToTopButton />
</div>
```

---

## Page Header Standards

### Structure

```tsx
<div className="text-center max-w-4xl mx-auto">
  <h1 style={{
    fontSize: 'var(--text-h1)',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--foreground)',
    margin: '0 0 16px 0',
    lineHeight: 1.2
  }}>
    {Tool Name}
  </h1>
  
  <p style={{
    fontSize: 'var(--text-xl)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 'var(--font-weight-regular)',
    color: 'var(--muted-foreground)',
    margin: '0 0 48px 0',
    lineHeight: 1.5
  }}>
    {Description}
  </p>
</div>
```

### Typography Rules

- **H1:** `--text-h1` (60px), Lexend, medium weight (500)
- **Description:** `--text-xl` (20px), Manrope, regular weight (400)
- **Colors:** `--foreground` (title), `--muted-foreground` (description)
- **Spacing:** 16px margin between title and description
- **Alignment:** Center aligned, max-width 896px (4xl)

### Optional Stats Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <StatCard value="47" label="Total Items" />
  <StatCard value="5" label="Categories" />
  <StatCard value="100%" label="Coverage" />
</div>
```

**Stat Card Structure:**
```tsx
<div style={{
  padding: '32px',
  backgroundColor: 'var(--card)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border-soft)',
  textAlign: 'center'
}}>
  <div style={{
    fontSize: 'var(--text-h1)',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--primary)',
    lineHeight: 1,
    marginBottom: '12px'
  }}>
    {value}
  </div>
  <div style={{
    fontSize: 'var(--text-base)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 'var(--font-weight-regular)',
    color: 'var(--muted-foreground)',
    lineHeight: 1.5
  }}>
    {label}
  </div>
</div>
```

---

## Filtering System

### Desktop Filter Toolbar

**Location:** Below page header, before main content  
**Layout:** Horizontal row with label + filter buttons  
**Spacing:** `gap-3` between buttons

```tsx
<div className="flex flex-wrap items-center gap-3">
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
      onClick={() => setFilter(option.value)}
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
```

### Mobile Filter Popover

**Trigger:** Button with `Filter` icon (visible on mobile only)  
**Component:** `MobileFilterPopover` from `/src/app/components/common/`  
**Touch Target:** 48×48px minimum (WCAG AAA)

**Implementation:**
```tsx
{/* Mobile: Show filter popover */}
<div className="md:hidden">
  <MobileFilterPopover
    options={filterOptions}
    selectedValue={filter}
    onSelect={setFilter}
    label="Filter"
    buttonLabel="Filter Tools"
  />
</div>

{/* Desktop: Show inline filters */}
<div className="hidden md:flex flex-wrap items-center gap-3">
  {/* Filter buttons */}
</div>
```

### Search Input (Optional)

**Position:** Above filter toolbar  
**Layout:** Full-width input with search icon

```tsx
<div className="relative mb-6">
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
    placeholder="Search..."
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
  />
</div>
```

---

## Content Display Patterns

### Card Grid Layout

**Use for:** Components, templates, blocks, icons

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item) => (
    <div
      key={item.id}
      style={{
        padding: '20px',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Card content */}
    </div>
  ))}
</div>
```

**Grid Breakpoints:**
- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns

**Hover Effect:**
```tsx
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = 'var(--primary)';
  e.currentTarget.style.transform = 'translateY(-2px)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.borderColor = 'var(--border-soft)';
  e.currentTarget.style.transform = 'translateY(0)';
}}
```

### List Layout

**Use for:** API documentation, detailed specifications

```tsx
<div className="flex flex-col gap-4">
  {items.map((item) => (
    <div
      key={item.id}
      style={{
        padding: '20px',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)'
      }}
    >
      {/* List item content */}
    </div>
  ))}
</div>
```

### Category Sections

**Use for:** Grouped content (components by type, blocks by category)

```tsx
<Section variant="default" spacing="50">
  <Container>
    {/* Category Header */}
    <div className="flex items-start gap-4 mb-8">
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: categoryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CategoryIcon size={24} />
      </div>
      <div>
        <h2 style={{
          fontSize: 'var(--text-h2)',
          fontFamily: 'Lexend, sans-serif',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          margin: '0 0 8px 0'
        }}>
          {categoryTitle}
        </h2>
        <p style={{
          fontSize: 'var(--text-base)',
          fontFamily: 'Manrope, sans-serif',
          color: 'var(--muted-foreground)',
          margin: 0
        }}>
          {categoryDescription}
        </p>
      </div>
    </div>
    
    {/* Category Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Items */}
    </div>
  </Container>
</Section>
```

---

## Typography Standards

### Headings

```tsx
// H1 (Page Title)
fontSize: 'var(--text-h1)',      // 60px
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)',  // 500

// H2 (Section Title)
fontSize: 'var(--text-h2)',      // 32px
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)',  // 500

// H3 (Card Title)
fontSize: 'var(--text-base)',    // 16px
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)',  // 500

// H4 (Subsection)
fontSize: 'var(--text-base)',    // 16px
fontFamily: 'Lexend, sans-serif',
fontWeight: 'var(--font-weight-medium)',  // 500
```

### Body Text

```tsx
// Large description
fontSize: 'var(--text-xl)',      // 20px
fontFamily: 'Manrope, sans-serif',
fontWeight: 'var(--font-weight-regular)',  // 400

// Standard paragraph
fontSize: 'var(--text-base)',    // 16px
fontFamily: 'Manrope, sans-serif',
fontWeight: 'var(--font-weight-regular)',  // 400

// Small text (metadata, captions)
fontSize: 'var(--text-small)',   // 14px
fontFamily: 'Manrope, sans-serif',
fontWeight: 'var(--font-weight-regular)',  // 400
```

### Code

```tsx
// Inline code
fontSize: 'var(--text-small)',
fontFamily: 'monospace',
color: 'var(--primary)',
padding: '2px 6px',
backgroundColor: 'var(--background)',
borderRadius: 'var(--radius)',
border: '1px solid var(--border-soft)'

// Code blocks
fontSize: 'var(--text-small)',
fontFamily: 'monospace',
color: 'var(--foreground)',
padding: '16px',
backgroundColor: 'var(--card)',
borderRadius: 'var(--radius-lg)',
border: '1px solid var(--border-soft)'
```

---

## Color Patterns

### Semantic Colors

```tsx
// Primary action
backgroundColor: 'var(--primary)',
color: 'var(--primary-foreground)'

// Card backgrounds
backgroundColor: 'var(--card)',
border: '1px solid var(--border-soft)'

// Page background
backgroundColor: 'var(--background)'

// Text colors
color: 'var(--foreground)',           // Primary text
color: 'var(--muted-foreground)',     // Secondary text
color: 'var(--primary)',              // Accent/links

// Interactive states
border: '1px solid var(--border-soft)',     // Default
border: '1px solid var(--primary)',         // Hover/focus
outline: '2px solid var(--ring)',           // Keyboard focus
```

### Category Colors

For category icons and accents:
```tsx
const categoryColors = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  accent: 'var(--accent)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  destructive: 'var(--destructive)'
};
```

---

## Spacing Standards

### Section Spacing

```tsx
// Page sections
<Section variant="default" spacing="50">  // 80px (var(--section-spacing-50))

// Tight sections (filters, toolbars)
<Section variant="default" spacing="30">  // 48px (var(--section-spacing-30))

// Large sections (hero headers)
<Section variant="default" spacing="50">  // 80px
```

### Component Spacing

```tsx
// Between elements
className="gap-4"   // 16px
className="gap-6"   // 24px
className="gap-8"   // 32px
className="gap-12"  // 48px

// Margins
className="mb-6"    // 24px bottom margin
className="mb-8"    // 32px bottom margin
className="mb-12"   // 48px bottom margin

// Padding (cards)
padding: '20px'     // Standard card padding
padding: '32px'     // Large card padding
```

---

## Border Radius

```tsx
// Small elements (buttons, badges)
borderRadius: 'var(--radius)'       // 4px

// Medium elements (inputs)
borderRadius: 'var(--radius-lg)'    // 8px

// Large elements (cards, sections)
borderRadius: 'var(--radius-lg)'    // 8px

// Extra large (hero sections)
borderRadius: 'var(--radius-xl)'    // 12px
```

---

## Accessibility Requirements

### Keyboard Navigation

- [ ] All interactive elements focusable with Tab
- [ ] Focus visible with 2px outline ring
- [ ] Logical tab order (top to bottom, left to right)
- [ ] Skip link to main content
- [ ] Escape key closes popovers/modals

### Focus Styles

```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
onBlur={(e) => {
  e.currentTarget.style.outline = 'none';
}}
```

### Touch Targets

**Minimum size:** 44×44px (WCAG AA)  
**Recommended size:** 48×48px (WCAG AAA)

```tsx
// Buttons
padding: '12px 24px',        // Minimum 44px height
minHeight: '44px'

// Icons/icon buttons
width: '48px',
height: '48px'
```

### ARIA Labels

```tsx
// Buttons
aria-label="Descriptive action"

// Navigation
role="navigation"
aria-label="Breadcrumb"

// Main content
role="main"
id="main-content"

// Search
role="search"
aria-label="Search {items}"
```

---

## Mobile Optimization

### Responsive Breakpoints

```tsx
// Tailwind breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Small desktops
xl: 1280px  // Large desktops
```

### Mobile-First Patterns

```tsx
// Mobile: Single column, desktop: Multi-column
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hide on mobile, show on desktop
className="hidden md:flex"

// Show on mobile, hide on desktop
className="md:hidden"

// Stack on mobile, row on desktop
className="flex flex-col md:flex-row"
```

### Mobile Filter Pattern

```tsx
{/* Mobile */}
<div className="md:hidden">
  <MobileFilterPopover
    options={filterOptions}
    selectedValue={filter}
    onSelect={setFilter}
  />
</div>

{/* Desktop */}
<div className="hidden md:flex">
  {/* Inline filters */}
</div>
```

---

## Empty States

### No Results Found

```tsx
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
    No items found matching "{searchTerm}"
  </p>
</div>
```

---

## Footer Note Pattern

```tsx
<Section variant="canvas" spacing="50">
  <Container>
    <div style={{
      padding: '24px',
      backgroundColor: 'var(--card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-soft)',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: 'var(--text-base)',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 'var(--font-weight-regular)',
        color: 'var(--muted-foreground)',
        margin: 0,
        lineHeight: 1.5
      }}>
        {Tool-specific metadata or notes}
      </p>
    </div>
  </Container>
</Section>
```

---

## Inter-Tool Navigation

### Navigation Buttons

Each dev tool should link to related tools:

```tsx
<Button
  variant="outline"
  size="md"
  page="related-tool"
  icon={IconComponent}
  aria-label="Navigate to Related Tool"
>
  Related Tool
</Button>
```

**Common navigation:**
- Template Tester ↔ Component Showcase
- Component Showcase ↔ Component API
- Design Blocks ↔ Theme Blocks
- Button Showcase ↔ Component Showcase

---

## Performance Guidelines

### Image Optimization
- Use SVG icons where possible
- Lazy load images if needed
- Optimize imported images

### Code Splitting
- Import icons individually: `import { Icon } from 'lucide-react'`
- Lazy load heavy components if needed

### State Management
- Use React useState for local state
- Minimize re-renders with proper key props
- Debounce search inputs (300ms recommended)

---

## Testing Checklist

Before publishing a dev tool page:

### Functionality
- [ ] Breadcrumbs navigate correctly
- [ ] All filters work as expected
- [ ] Search filters items correctly
- [ ] Mobile popover opens and closes
- [ ] All buttons/links work
- [ ] Empty states display correctly

### Accessibility
- [ ] Skip link works (focus + Enter)
- [ ] Tab navigation is logical
- [ ] All interactive elements focusable
- [ ] Focus visible on all elements
- [ ] ARIA labels present and correct
- [ ] Color contrast passes WCAG AA
- [ ] Touch targets ≥44×44px

### Responsive
- [ ] Works on 320px width (mobile)
- [ ] Works on 768px width (tablet)
- [ ] Works on 1280px width (desktop)
- [ ] No horizontal scroll
- [ ] Text remains readable at all sizes
- [ ] Images/icons scale appropriately

### Design System
- [ ] All colors use CSS variables
- [ ] All spacing uses Tailwind classes or CSS variables
- [ ] All typography uses CSS variables
- [ ] Fonts: Lexend (headings), Manrope (body/small)
- [ ] Border radius uses CSS variables
- [ ] No hardcoded values

---

## WordPress Integration

### Block Pattern Registration

Dev tools are utility pages, not WordPress blocks. However, they follow the same token-driven architecture:

```php
// In WordPress theme.json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#..." },
        // ... matches CSS variables
      ]
    }
  }
}
```

### Template Files

Dev tools would be custom page templates in WordPress:

```
templates/
  dev-tools.html           (landing page)
  page-template-tester.html
  page-component-showcase.html
  etc.
```

---

## Examples

See existing implementations:
- **Template Tester:** `/src/app/components/templates/TemplateTester.tsx`
- **Component Showcase:** `/src/app/components/templates/ComponentShowcase.tsx`

Both follow these guidelines and can be used as reference implementations.

---

**Last Updated:** December 28, 2024  
**Version:** 1.0  
**Status:** Production Ready
