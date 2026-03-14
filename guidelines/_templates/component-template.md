# [Component Name] Component

**Category:** [Components/Blocks/Patterns]  
**Location:** `/src/app/components/[category]/[ComponentName].tsx`  
**CSS:** `/src/styles/[category]/[component-name].css`  
**Last Updated:** [Date]

---

## Overview

**Purpose:** [Brief 1-2 sentence description of what this component does]

**Use Cases:**
- [Use case 1]
- [Use case 2]
- [Use case 3]

**WordPress Mapping:** [How this maps to WordPress blocks/patterns]

---

## Props / API Reference

### TypeScript Interface

```typescript
export interface [ComponentName]Props {
  // Required props
  [propName]: [type];              // [Description]
  
  // Optional props
  [propName]?: [type];             // [Description, default value]
  
  // Children
  children?: React.ReactNode;       // [Description]
  
  // HTML attributes
  className?: string;               // Additional CSS classes
  style?: React.CSSProperties;      // Inline styles (CSS variables only)
}
```

### Prop Details

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `[propName]` | `[type]` | ✅ Yes | - | [Description] |
| `[propName]` | `[type]` | ❌ No | `[default]` | [Description] |

---

## Usage Examples

### Basic Usage

```tsx
import { [ComponentName] } from './components/[category]/[ComponentName]';

<[ComponentName]
  [requiredProp]="[value]"
  [optionalProp]="[value]"
>
  {children}
</[ComponentName]>
```

### With Variants

```tsx
// Variant 1: [Variant Name]
<[ComponentName]
  variant="[variant-name]"
  [otherProps]
/>

// Variant 2: [Variant Name]
<[ComponentName]
  variant="[variant-name]"
  [otherProps]
/>
```

### Real-World Example

```tsx
// [Description of real use case]
<[ComponentName]
  [prop1]="[value1]"
  [prop2]="[value2]"
  [prop3]={[value3]}
>
  {/* [Content description] */}
</[ComponentName]>
```

---

## CSS Classes (BEM)

### Block

```css
.[component-name] {
  /* Container/wrapper styles */
  /* Uses CSS variables only */
}
```

### Elements

```css
.[component-name]__[element] {
  /* Child element styles */
}

.[component-name]__[element] {
  /* Another child element */
}
```

### Modifiers

```css
.[component-name]--[modifier] {
  /* Variant/state modifier */
}

.[component-name]__[element]--[modifier] {
  /* Element modifier */
}
```

### State Classes

```css
.[component-name].is-active {
  /* Active state */
}

.[component-name].is-disabled {
  /* Disabled state */
}
```

---

## Variants

### [Variant Name]

**When to use:** [Description]

**Props:**
```tsx
variant="[variant-name]"
```

**Example:**
```tsx
<[ComponentName] variant="[variant-name]" />
```

**Visual Difference:** [How it looks different]

---

## CSS Variables Used

**Design Tokens:**
- `var(--[token-name])` - [Usage]
- `var(--[token-name])` - [Usage]

**Component-Specific:**
- `--[component]-[property]` - [Usage]

**Example:**
```css
.[component-name] {
  color: var(--foreground);
  background: var(--card);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- ✅ [Keyboard interaction requirement]
- ✅ [Keyboard interaction requirement]

**Screen Readers:**
- ✅ ARIA labels: `[aria attribute]`
- ✅ Semantic HTML: `<[element]>`
- ✅ Focus management: [Description]

**Focus States:**
```css
.[component-name]:focus-visible {
  outline: var(--wp--preset--border-width--2) solid var(--primary);
  outline-offset: var(--wp--preset--border-width--2);
}
```

**Touch Targets:**
- ✅ Minimum 48x48px (mobile)
- ✅ Minimum 44x44px (desktop)

**Color Contrast:**
- ✅ Text contrast: [ratio]
- ✅ Interactive elements: [ratio]

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .[component-name] {
    /* Remove/reduce animations */
  }
}
```

---

## WordPress Mapping

### Block Registration

```php
// WordPress block: [block-name]
register_block_type( 'lsx-design/[block-name]', array(
  'title'       => '[Block Title]',
  'category'    => '[category]',
  'attributes'  => array(
    '[attribute]' => array(
      'type'    => '[type]',
      'default' => '[default]',
    ),
  ),
) );
```

### Pattern Registration

```php
// Pattern: lsx-design/[category]/[pattern-name]
register_block_pattern(
  'lsx-design/[pattern-name]',
  array(
    'title'       => '[Pattern Title]',
    'description' => '[Description]',
    'categories'  => array( '[category]' ),
    'content'     => '[HTML content]',
  )
);
```

---

## Related Components

**Used With:**
- [Component Name](./[ComponentName].md) - [Relationship]
- [Component Name](./[ComponentName].md) - [Relationship]

**Similar Components:**
- [Component Name](./[ComponentName].md) - [How it differs]

**Parent/Child:**
- Parent: [Component Name](./[ComponentName].md)
- Children: [Component Name](./[ComponentName].md)

---

## Design Tokens

**See also:**
- [Token Category](../design-tokens/[category].md) - [Which tokens]
- [Token Category](../design-tokens/[category].md) - [Which tokens]

---

## Migration Guide

### From Old Component

**Before:**
```tsx
<OldComponent [oldProp]="[value]" />
```

**After:**
```tsx
<[ComponentName] [newProp]="[value]" />
```

### Prop Changes

| Old Prop | New Prop | Notes |
|----------|----------|-------|
| `[oldProp]` | `[newProp]` | [Migration notes] |

---

## Do's and Don'ts

### ✅ DO:
- Use CSS variables for all styling
- Follow BEM naming conventions
- Provide accessible labels
- Support keyboard navigation
- Test in light AND dark mode

### ❌ DON'T:
- Hardcode colors/spacing
- Mix BEM with other naming systems
- Skip accessibility attributes
- Forget reduced motion support
- Use non-semantic HTML

---

## Common Patterns

### Pattern 1: [Pattern Name]
```tsx
// [Description]
<[ComponentName]
  [configuration]
>
  {/* [Content] */}
</[ComponentName]>
```

### Pattern 2: [Pattern Name]
```tsx
// [Description]
<[ComponentName]
  [configuration]
/>
```

---

## Troubleshooting

### Issue: [Common Issue]
**Solution:** [How to fix]

### Issue: [Common Issue]
**Solution:** [How to fix]

### Issue: Styles not applying
**Check:**
1. CSS file imported: `import '@/styles/[category]/[component-name].css'`
2. CSS variables defined in theme files
3. No conflicting inline styles
4. Correct BEM class names

---

## Performance

**Bundle Size:** ~[X] KB (minified)

**Render Performance:** [Fast/Medium/Slow]

**Lazy Loading:** [Yes/No, how to implement]

**Code Splitting:**
```tsx
const [ComponentName] = lazy(() => import('./components/[ComponentName]'));
```

---

## Testing

### Unit Tests
```typescript
// [Test file location]
describe('[ComponentName]', () => {
  it('renders correctly', () => {
    // Test implementation
  });
  
  it('handles [interaction]', () => {
    // Test implementation
  });
});
```

### Accessibility Tests
- ✅ Keyboard navigation
- ✅ Screen reader announcements
- ✅ Color contrast ratios
- ✅ Focus management

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Date] | Initial creation |

---

**Maintainer:** LSX Design  
**Category:** [Category]  
**Related Guidelines:** [Links to related guidelines]
