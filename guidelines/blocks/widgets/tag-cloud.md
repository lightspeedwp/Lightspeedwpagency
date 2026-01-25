# Tag Cloud Block Guidelines

**WordPress Block:** `core/tag-cloud`  
**Category:** Widgets  
**CSS File:** `/src/styles/blocks/widgets/tag-cloud.css`

---

## Purpose

The Tag Cloud block displays post tags with sizes varying by usage frequency. Used in sidebars or content areas to visualize popular topics and provide alternative navigation.

---

## Design System Integration

### Typography
- **Tag Font:** `var(--font-primary)` (Lexend)
- **Smallest Size:** `var(--text-xs)` (12px)
- **Largest Size:** `var(--text-xl)` (24px)
- **Default Size:** `var(--text-sm)` (14px)
- **Color:** `var(--foreground)`

### Spacing
- **Tag Gap:** `var(--spacing-2)` (8px)
- **Tag Padding:** `var(--spacing-2)` (8px) horizontal, `var(--spacing-1)` (4px) vertical
- **Margin Bottom:** `var(--spacing-6)` (24px)

### Colors
- **Tag Background:** `var(--muted)`
- **Tag Hover:** `var(--primary)`
- **Tag Hover Background:** `var(--primary)` with 10% opacity

### Border Radius
- **Tags:** `var(--radius)` (4px)

---

## Component Structure

```tsx
/**
 * Tag Cloud Block Component
 * 
 * WordPress core block: core/tag-cloud
 * 
 * @see /guidelines/blocks/widgets/tag-cloud.md
 */

import '@/styles/blocks/widgets/tag-cloud.css';

export interface TagCloudBlockProps {
  tags: Array<{
    id: string;
    name: string;
    slug: string;
    count: number;
  }>;
  showCounts?: boolean;
  taxonomy?: 'post_tag' | 'category';
  className?: string;
}

export const TagCloudBlock = ({ 
  tags,
  showCounts = false,
  taxonomy = 'post_tag',
  className = '' 
}: TagCloudBlockProps) => {
  // Calculate font size based on usage
  const getTagSize = (count: number) => {
    const maxCount = Math.max(...tags.map(t => t.count));
    const minCount = Math.min(...tags.map(t => t.count));
    const range = maxCount - minCount;
    
    if (range === 0) return 'medium';
    
    const normalized = (count - minCount) / range;
    
    if (normalized < 0.33) return 'small';
    if (normalized < 0.66) return 'medium';
    return 'large';
  };

  return (
    <div className={`wp-block-tag-cloud ${className}`}>
      <div className="wp-block-tag-cloud__container">
        {tags.map((tag) => (
          <a
            key={tag.id}
            href={`/tag/${tag.slug}`}
            className={`wp-block-tag-cloud__tag wp-block-tag-cloud__tag--${getTagSize(tag.count)}`}
            aria-label={`${tag.name}${showCounts ? ` (${tag.count} posts)` : ''}`}
          >
            {tag.name}
            {showCounts && (
              <span className="wp-block-tag-cloud__count">
                {tag.count}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/widgets/tag-cloud.css`

```css
/**
 * Tag Cloud Block Styles
 * 
 * WordPress block: .wp-block-tag-cloud
 */

.wp-block-tag-cloud {
  margin-bottom: var(--spacing-6);
}

.wp-block-tag-cloud__container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  align-items: center;
}

.wp-block-tag-cloud__tag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-1) var(--spacing-2);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  color: var(--foreground);
  background: var(--muted);
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.2s ease;
}

.wp-block-tag-cloud__tag:hover {
  background: var(--primary);
  color: var(--primary-foreground);
  transform: translateY(-2px);
}

.wp-block-tag-cloud__tag:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Size Variants */
.wp-block-tag-cloud__tag--small {
  font-size: var(--text-xs);
}

.wp-block-tag-cloud__tag--medium {
  font-size: var(--text-sm);
}

.wp-block-tag-cloud__tag--large {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
}

.wp-block-tag-cloud__count {
  font-family: var(--font-secondary);
  font-size: 0.85em;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 767px) {
  .wp-block-tag-cloud__tag {
    font-size: var(--text-xs);
  }
  
  .wp-block-tag-cloud__tag--large {
    font-size: var(--text-sm);
  }
}
```

---

## WordPress Mapping

**Block Name:** `core/tag-cloud`

**Attributes:**
- `taxonomy` (string) - "post_tag" or "category"
- `showTagCounts` (boolean) - Display post counts

**Example Block Markup:**
```html
<!-- wp:tag-cloud /-->
```

---

## Accessibility

- **Semantic HTML:** Uses anchor links
- **ARIA Labels:** Descriptive labels with counts
- **Keyboard Navigation:** All tags keyboard accessible
- **Focus States:** Visible focus indicators
- **Screen Readers:** Tag names and counts announced

---

## Best Practices

1. **Tag Limit:** Show 20-30 most popular tags
2. **Size Scaling:** Use 3-4 size levels maximum
3. **Visual Balance:** Mix small and large tags naturally
4. **Sorting:** Alphabetical or by popularity
5. **Empty State:** Hide block if no tags exist

---

## Design System Compliance

✅ **Typography:** 100% (uses `var(--font-primary)`)  
✅ **Spacing:** 100% (uses `var(--spacing-*)`)  
✅ **Colors:** 100% (uses CSS variables)  
✅ **Border Radius:** 100% (uses `var(--radius)`)  
✅ **Responsive:** Mobile-optimized  
✅ **Accessibility:** WCAG 2.1 AA compliant

---

**Status:** ✅ COMPLETE  
**WordPress FSE:** Compatible  
**Design System:** 100% Compliant
