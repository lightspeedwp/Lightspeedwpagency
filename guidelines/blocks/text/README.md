# Text Blocks

Complete guidelines for WordPress text blocks as React components.

## 📚 Available Text Blocks

1. **[Paragraph](./paragraph.md)** ✅ - Standard text content block
2. **[Heading](./heading.md)** ✅ - H1-H6 headings with design system typography
3. **[List](./list.md)** ✅ - Ordered and unordered lists
4. **[Quote](./quote.md)** ✅ - Blockquotes and citations
5. **[Table](./table.md)** ✅ - Data tables with responsive design
6. **[Code](./code.md)** - Code snippets with syntax highlighting
7. **[Details](./details.md)** - Collapsible details/summary
8. **[Preformatted](./preformatted.md)** - Preformatted text blocks
9. **[Pullquote](./pullquote.md)** - Large highlighted quotes
10. **[Verse](./verse.md)** - Poetry and verse formatting

## 🎯 Text Blocks Principles

### 1. Typography System

**CRITICAL:** All text blocks MUST use design system typography:

```tsx
// ✅ CORRECT - CSS variables
fontSize: 'var(--text-base)'     // 16px body text
fontSize: 'var(--text-h1)'       // 60px heading
fontFamily: 'var(--font-primary)'  // Lexend

// ❌ WRONG - Hardcoded values
fontSize: '16px'
fontFamily: 'Arial, sans-serif'
```

### 2. Font Families

**ONLY use approved fonts:**

- **Lexend** (`var(--font-primary)`) - Headings, body text, UI
- **Manrope** (`var(--font-secondary)`) - Small text only

**NEVER hardcode font names:**
```tsx
// ❌ WRONG
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'

// ✅ CORRECT
fontFamily: 'var(--font-primary)'
fontFamily: 'var(--font-secondary)'
```

### 3. Spacing System

Use CSS variables for all spacing:

```tsx
// Padding and margins
padding: 'var(--spacing-4)'      // 16px
marginBottom: 'var(--spacing-6)'  // 24px
gap: 'var(--spacing-2)'          // 8px
```

### 4. Color System

Use semantic colors from design system:

```tsx
// Text colors
color: 'var(--foreground)'           // Primary text
color: 'var(--foreground-subtle)'    // Secondary text
color: 'var(--muted-foreground)'     // Muted text

// Background colors
backgroundColor: 'var(--background)'
backgroundColor: 'var(--background-subtle)'
```

## 📁 File Structure

### Component Location
```
/src/app/components/blocks/text/
├── Paragraph.tsx         ✅
├── Heading.tsx           ✅
├── List.tsx              ✅
├── Quote.tsx             ✅
├── Table.tsx             ✅
├── Code.tsx              📝
├── Details.tsx           📝
├── Preformatted.tsx      📝
├── Pullquote.tsx         📝
├── Verse.tsx             📝
└── index.ts
```

### CSS Location
```
/src/styles/blocks/text/
├── paragraph.css         ✅
├── heading.css           ✅
├── list.css              ✅
├── quote.css             ✅
├── table.css             ✅
├── code.css              📝
├── details.css           📝
├── preformatted.css      📝
├── pullquote.css         📝
└── verse.css             📝
```

## 🎨 Design System Integration

### Typography Scale

```css
/* From /src/styles/theme-base.css */
--text-h1: 60px;     /* Hero headlines */
--text-h2: 32px;     /* Section headings */
--text-h3: 24px;     /* Subsection headings */
--text-h4: 20px;     /* Card headings */
--text-h5: 18px;     /* Small headings */
--text-h6: 16px;     /* Tiny headings */

--text-base: 16px;   /* Body text */
--text-lg: 18px;     /* Large body text */
--text-xl: 24px;     /* Extra large text */
--text-sm: 14px;     /* Small text (Manrope only) */
--text-xs: 12px;     /* Extra small text (Manrope only) */
```

### Line Heights

```css
--line-height-tight: 1.25;    /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form content */
```

### Font Weights

```css
--font-weight-regular: 400;   /* Body text */
--font-weight-medium: 500;    /* Headings, emphasis */
--font-weight-semibold: 600;  /* Strong emphasis */
--font-weight-bold: 700;      /* Extra emphasis */
```

## 📦 Common Props Interface

All text blocks should support these common props:

```tsx
interface CommonTextBlockProps {
  /** Main content */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
  
  /** ARIA label for accessibility */
  'aria-label'?: string;
  
  /** ID for anchor links */
  id?: string;
}
```

## ✅ Text Block Checklist

Before creating a text block component:

### Design System Compliance

- [ ] Uses CSS variables for ALL fonts (`var(--font-primary)` or `var(--font-secondary)`)
- [ ] Uses CSS variables for ALL font sizes (`var(--text-*)`)
- [ ] Uses CSS variables for ALL colors (`var(--foreground)`, etc.)
- [ ] Uses CSS variables for ALL spacing (`var(--spacing-*)`)
- [ ] Uses WordPress utility classes for layout (`.wp-*`)
- [ ] NO hardcoded values (px, colors, font names)
- [ ] NO Tailwind classes

### Component Structure

- [ ] Created in `/src/app/components/blocks/text/`
- [ ] Has dedicated CSS file in `/src/styles/blocks/text/`
- [ ] Imports CSS file at top of component
- [ ] Uses WordPress block class naming (`.wp-block-{name}`)
- [ ] Exports from `/src/app/components/blocks/text/index.ts`

### Typography

- [ ] Headings use `var(--font-primary)` (Lexend)
- [ ] Body text uses `var(--font-primary)` (Lexend)
- [ ] Small text uses `var(--font-secondary)` (Manrope)
- [ ] Font sizes from typography scale
- [ ] Line heights from design system
- [ ] Font weights from design system

### Accessibility

- [ ] Semantic HTML elements (`<h1>`, `<p>`, `<blockquote>`, etc.)
- [ ] Proper heading hierarchy (no skipping levels)
- [ ] ARIA attributes where needed
- [ ] Keyboard navigation support
- [ ] Focus states visible
- [ ] Screen reader friendly

### WordPress Mapping

- [ ] Maps to WordPress core block
- [ ] Uses WordPress block class names
- [ ] Supports WordPress block attributes
- [ ] Compatible with block editor

### Documentation

- [ ] JSDoc comments for component
- [ ] JSDoc comments for props interface
- [ ] Usage examples in guideline file
- [ ] WordPress HTML example
- [ ] CSS structure documented

## 🚀 Quick Start Template

### Component Template

```tsx
/**
 * BlockName Block Component
 * 
 * WordPress core block: wp:block-name
 * 
 * @see /guidelines/blocks/text/block-name.md
 */

import '@/styles/blocks/text/block-name.css';

/**
 * Props for BlockName component
 */
export interface BlockNameProps {
  /** Main content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
}

/**
 * BlockName component
 * 
 * Maps to WordPress block: wp:block-name
 */
export const BlockName = ({ 
  children, 
  className = '',
  style 
}: BlockNameProps) => {
  return (
    <div className={`wp-block-block-name ${className}`} style={style}>
      {children}
    </div>
  );
};
```

### CSS Template

```css
/**
 * BlockName Block Styles
 * 
 * WordPress block: .wp-block-block-name
 * 
 * @see /guidelines/blocks/text/block-name.md
 */

.wp-block-block-name {
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-regular);
  
  /* Colors */
  color: var(--foreground);
  background-color: var(--background);
  
  /* Spacing */
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  
  /* Borders */
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

/* Hover states */
.wp-block-block-name:hover {
  border-color: var(--primary);
}

/* Focus states */
.wp-block-block-name:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Responsive design */
@media (max-width: 768px) {
  .wp-block-block-name {
    padding: var(--spacing-4);
  }
}
```

## 🔗 WordPress Block Mapping

### Block Registration

```php
// WordPress block registration example
register_block_type('lsx-design/block-name', [
  'title' => 'Block Name',
  'category' => 'text',
  'icon' => 'text',
  'supports' => [
    'html' => false,
    'className' => true,
    'customClassName' => true,
  ],
]);
```

### Block HTML Example

```html
<!-- wp:lsx-design/block-name -->
<div class="wp-block-lsx-design-block-name">
  Content here
</div>
<!-- /wp:lsx-design/block-name -->
```

## 📚 Related Documentation

- **[Paragraph Block](./paragraph.md)** - Standard text content
- **[Heading Block](./heading.md)** - H1-H6 headings
- **[List Block](./list.md)** - Ordered/unordered lists
- **[Quote Block](./quote.md)** - Blockquotes
- **[Typography Guide](../../design-tokens/typography.md)** - Complete typography system
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**Category:** Text Blocks  
**WordPress Compatibility:** FSE (Full Site Editing)
