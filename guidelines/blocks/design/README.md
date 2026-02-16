# Design Blocks

Complete guidelines for WordPress design/layout blocks as React components.

## 📚 Available Design Blocks

1. **[Accordion](./Accordion.md)** ✅ - Collapsible content sections
2. **[Alert](./alert.md)** ✅ - Important messages and notifications
3. **[Badge](./badge.md)** ✅ - Status indicators and labels
4. **[Buttons](./buttons.md)** ✅ - Button groups with design system styles
5. **[Columns](./columns.md)** ✅ - Multi-column layouts
6. **[Group](./group.md)** ✅ - Container for grouping blocks
7. **[Row](./row.md)** ✅ - Horizontal flex layout
8. **[Stack](./stack.md)** ✅ - Vertical flex layout
9. **[Grid](./grid.md)** ✅ - CSS Grid layout
10. **[Separator](./separator.md)** ✅ - Horizontal divider
11. **[Spacer](./spacer.md)** ✅ - Vertical spacing block
12. **[Page Break](./page-break.md)** ✅ - Page breaks for printing
13. **[More](./more.md)** ✅ - Read more divider
14. **[Card](./Card.md)** ✅ - Flexible container for grouping content

## 🎉 Design Blocks: 100% COMPLETE!

## 🎯 Design Blocks Principles

### 1. Layout Containers

Design blocks are primarily **layout containers** that structure content:

- **Group** - Generic container for grouping blocks
- **Columns** - Multi-column layouts
- **Row** - Horizontal flex layout
- **Stack** - Vertical flex layout
- **Grid** - CSS Grid layout

### 2. Spacing & Separation

Blocks that add visual separation:

- **Separator** - Horizontal dividers
- **Spacer** - Vertical spacing
- **Page Break** - Print layout breaks

### 3. Interactive Components

Blocks with user interaction:

- **Accordion** - Collapsible sections
- **Alert** - Dismissible notifications
- **Buttons** - Action buttons

### 4. Status & Labels

Blocks for displaying status and metadata:

- **Badge** - Status indicators, tags, labels, counts

## 📁 File Structure

### Component Location
```
/src/app/components/blocks/design/
├── Accordion.tsx         ✅
├── Alert.tsx             ✅
├── Badge.tsx             ✅
├── Buttons.tsx           ✅
├── Card.tsx              ✅
├── Columns.tsx           ✅
├── Group.tsx             ✅
├── Row.tsx               ✅
├── Stack.tsx             ✅
├── Grid.tsx              ✅
├── Separator.tsx         📝
├── Spacer.tsx            📝
├── PageBreak.tsx         📝
├── More.tsx              📝
└── index.ts
```

### CSS Location
```
/src/styles/blocks/design/
├── accordion.css         ✅
├── alert.css             ✅
├── badge.css             ✅
├── buttons.css           ✅
├── card.css              ✅
├── columns.css           ✅
├── group.css             ✅
├── row.css               ✅
├── stack.css             ✅
├── grid.css              ✅
├── separator.css         📝
├── spacer.css            📝
├── page-break.css        📝
└── more.css              📝
```

## 🎨 Design System Integration

### Layout Container Pattern

All layout containers follow this pattern:

```tsx
/**
 * Layout Container Component
 * 
 * WordPress block: wp:group, wp:columns, wp:row, wp:stack, wp:grid
 */

import '@/styles/blocks/design/container-name.css';

export interface ContainerProps {
  /** Child blocks */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
}

export const Container = ({ 
  children, 
  className = '',
  style 
}: ContainerProps) => {
  return (
    <div className={`wp-block-container ${className}`} style={style}>
      {children}
    </div>
  );
};
```

### Container CSS Pattern

```css
/**
 * Container Block Styles
 * 
 * WordPress block: .wp-block-container
 */

.wp-block-container {
  /* Container setup */
  display: flex;  /* or grid */
  
  /* Spacing */
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  
  /* Borders */
  border-radius: var(--radius);
}

/* Responsive */
@media (max-width: 768px) {
  .wp-block-container {
    flex-direction: column;
    padding: var(--spacing-4);
  }
}
```

## 📦 Common Props Interface

### Layout Containers

```tsx
interface LayoutContainerProps {
  /** Child blocks */
  children: React.ReactNode;
  
  /** Number of columns (for Columns, Grid) */
  columns?: number;
  
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  
  /** Alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
}
```

### Interactive Components

```tsx
interface InteractiveBlockProps {
  /** Block content */
  children: React.ReactNode;
  
  /** Open/closed state (for Accordion) */
  isOpen?: boolean;
  
  /** Toggle handler */
  onToggle?: () => void;
  
  /** Additional CSS classes */
  className?: string;
}
```

## ✅ Design Block Checklist

### Layout Containers

- [ ] Uses flexbox or CSS Grid
- [ ] Responsive (mobile-first)
- [ ] Uses CSS variables for spacing
- [ ] Supports gap property
- [ ] Handles alignment
- [ ] Works with nested blocks

### Component Structure

- [ ] Created in `/src/app/components/blocks/design/`
- [ ] Has dedicated CSS file in `/src/styles/blocks/design/`
- [ ] Uses WordPress block class naming (`.wp-block-{name}`)
- [ ] Imports CSS at top of component
- [ ] Exports from index.ts

### Design System Compliance

- [ ] Uses CSS variables for ALL spacing
- [ ] Uses design system gap values
- [ ] Uses design system border radius
- [ ] NO hardcoded values
- [ ] NO Tailwind classes

### Accessibility

- [ ] Semantic HTML elements
- [ ] Proper landmark roles where needed
- [ ] Keyboard navigation (for interactive blocks)
- [ ] Focus states visible
- [ ] ARIA attributes where needed

### WordPress Mapping

- [ ] Maps to WordPress core block
- [ ] Uses WordPress block class names
- [ ] Supports block attributes
- [ ] Compatible with block editor

## 🚀 Group Block Example

### Component

```tsx
/**
 * Group Block Component
 * 
 * Generic container for grouping blocks.
 * 
 * WordPress core block: wp:group
 * 
 * @see /guidelines/blocks/design/group.md
 */

import '@/styles/blocks/design/group.css';

export interface GroupProps {
  /** Child blocks */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
  /** ARIA label */
  'aria-label'?: string;
}

export const Group = ({ 
  children, 
  className = '',
  style,
  'aria-label': ariaLabel
}: GroupProps) => {
  return (
    <div 
      className={`wp-block-group ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      <div className="wp-block-group__inner-container">
        {children}
      </div>
    </div>
  );
};
```

### CSS

```css
/**
 * Group Block Styles
 * 
 * WordPress block: .wp-block-group
 */

.wp-block-group {
  /* Container */
  position: relative;
}

.wp-block-group__inner-container {
  /* Spacing */
  padding: var(--spacing-8);
  
  /* Borders */
  border-radius: var(--radius);
}

/* Variant: With background */
.wp-block-group.has-background {
  background: var(--background-subtle);
  border: 1px solid var(--border);
}

/* Variant: With shadow */
.wp-block-group.has-shadow {
  box-shadow: var(--shadow-md);
}

/* Responsive */
@media (max-width: 768px) {
  .wp-block-group__inner-container {
    padding: var(--spacing-4);
  }
}
```

## 🚀 Columns Block Example

### Component

```tsx
/**
 * Columns Block Component
 * 
 * Multi-column layout container.
 * 
 * WordPress core block: wp:columns
 */

import '@/styles/blocks/design/columns.css';

export interface ColumnsProps {
  /** Column content */
  children: React.ReactNode;
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Additional CSS classes */
  className?: string;
}

export const Columns = ({ 
  children, 
  columns = 2,
  className = ''
}: ColumnsProps) => {
  return (
    <div className={`wp-block-columns wp-block-columns--${columns} ${className}`}>
      {children}
    </div>
  );
};
```

### CSS

```css
/**
 * Columns Block Styles
 */

.wp-block-columns {
  display: flex;
  gap: var(--spacing-6);
  flex-wrap: wrap;
}

/* 2 columns */
.wp-block-columns--2 > * {
  flex: 1;
  min-width: calc(50% - var(--spacing-3));
}

/* 3 columns */
.wp-block-columns--3 > * {
  flex: 1;
  min-width: calc(33.333% - var(--spacing-4));
}

/* 4 columns */
.wp-block-columns--4 > * {
  flex: 1;
  min-width: calc(25% - var(--spacing-4.5));
}

/* Mobile: Stack columns */
@media (max-width: 768px) {
  .wp-block-columns {
    flex-direction: column;
  }
  
  .wp-block-columns > * {
    min-width: 100%;
  }
}
```

## 📚 Related Documentation

- **[Accordion Block](./Accordion.md)** ✅ - Collapsible sections
- **[Buttons Block](./buttons.md)** ✅ - Button groups
- **[Group Block](./group.md)** ✅ - Generic container
- **[Columns Block](./columns.md)** ✅ - Multi-column layout
- **[Row Block](./row.md)** ✅ - Horizontal flex
- **[Stack Block](./stack.md)** ✅ - Vertical flex
- **[Grid Block](./grid.md)** ✅ - CSS Grid layout
- **[Spacing Guide](../../design-tokens/spacing.md)** - Spacing system
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**Category:** Design Blocks  
**WordPress Compatibility:** FSE (Full Site Editing)
