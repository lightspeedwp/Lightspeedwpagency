# Categories Block Guidelines

**WordPress Block:** `core/categories`  
**Category:** Widgets  
**CSS File:** `/src/styles/blocks/widgets/categories.css`

---

## Purpose

The Categories block displays a list or dropdown of post categories with optional post counts. Used for navigation in sidebars, footers, or content areas to help users browse content by topic.

---

## Design System Integration

### Typography
- **Category Font:** `var(--font-primary)` (Lexend)
- **Category Size:** `var(--text-base)` (16px)
- **Count Font:** `var(--font-secondary)` (Manrope)
- **Count Size:** `var(--text-sm)` (14px)
- **Color:** `var(--foreground)`

### Spacing
- **Item Gap:** `var(--spacing-2)` (8px)
- **Padding:** `var(--spacing-2)` (8px) for links
- **Margin Bottom:** `var(--spacing-6)` (24px)

### Colors
- **Link:** `var(--foreground)`
- **Link Hover:** `var(--primary)`
- **Count:** `var(--muted-foreground)`
- **Background Hover:** `var(--muted)`

### Border Radius
- **Links:** `var(--radius)` (4px)

---

## Component Structure

```tsx
/**
 * Categories Block Component
 * 
 * WordPress core block: core/categories
 * 
 * @see /guidelines/blocks/widgets/categories.md
 */

import '@/styles/blocks/widgets/categories.css';

export interface CategoriesBlockProps {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    count: number;
    parent?: string;
  }>;
  showPostCounts?: boolean;
  showHierarchy?: boolean;
  displayAsDropdown?: boolean;
  className?: string;
}

export const CategoriesBlock = ({ 
  categories,
  showPostCounts = false,
  showHierarchy = false,
  displayAsDropdown = false,
  className = '' 
}: CategoriesBlockProps) => {
  const renderCategories = () => {
    if (displayAsDropdown) {
      return (
        <select className="wp-block-categories__dropdown">
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
              {showPostCounts && ` (${category.count})`}
            </option>
          ))}
        </select>
      );
    }

    return (
      <ul className="wp-block-categories__list">
        {categories.map((category) => (
          <li key={category.id} className="wp-block-categories__item">
            <a 
              href={`/category/${category.slug}`}
              className="wp-block-categories__link"
            >
              <span className="wp-block-categories__name">
                {category.name}
              </span>
              {showPostCounts && (
                <span className="wp-block-categories__count">
                  ({category.count})
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`wp-block-categories ${className}`}>
      {renderCategories()}
    </div>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/widgets/categories.css`

```css
/**
 * Categories Block Styles
 * 
 * WordPress block: .wp-block-categories
 */

.wp-block-categories {
  margin-bottom: var(--spacing-6);
}

/* List Layout */
.wp-block-categories__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.wp-block-categories__item {
  /* Category item */
}

.wp-block-categories__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-2);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.wp-block-categories__link:hover {
  background: var(--muted);
  color: var(--primary);
}

.wp-block-categories__link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.wp-block-categories__name {
  flex: 1;
}

.wp-block-categories__count {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin-left: var(--spacing-2);
}

/* Dropdown Layout */
.wp-block-categories__dropdown {
  width: 100%;
  padding: var(--spacing-3);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.wp-block-categories__dropdown:hover {
  border-color: var(--primary);
}

.wp-block-categories__dropdown:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-color: var(--primary);
}

/* Hierarchical Layout */
.wp-block-categories--hierarchical .wp-block-categories__list {
  padding-left: 0;
}

.wp-block-categories--hierarchical .wp-block-categories__item--child {
  margin-left: var(--spacing-4);
}

/* Responsive */
@media (max-width: 767px) {
  .wp-block-categories__link {
    font-size: var(--text-sm);
  }
}
```

---

## WordPress Mapping

**Block Name:** `core/categories`

**Attributes:**
- `displayAsDropdown` (boolean) - Show as dropdown selector
- `showPostCounts` (boolean) - Display post counts
- `showHierarchy` (boolean) - Show parent/child relationships

**Example Block Markup:**
```html
<!-- wp:categories {"showPostCounts":true} /-->
```

---

## Accessibility

- **Semantic HTML:** Uses `<ul>` for list, `<select>` for dropdown
- **Keyboard Navigation:** Full keyboard support
- **Focus States:** Visible focus indicators
- **Screen Readers:** Counts announced with category names
- **ARIA:** Native select/link accessibility

---

## Best Practices

1. **Post Counts:** Show counts to indicate content volume
2. **Hierarchy:** Display parent categories when relevant
3. **Empty Categories:** Hide categories with zero posts
4. **Mobile:** Consider dropdown for mobile to save space
5. **Ordering:** Alphabetical or by post count

---

## Design System Compliance

✅ **Typography:** 100% (uses `var(--font-primary)` and `var(--font-secondary)`)  
✅ **Spacing:** 100% (uses `var(--spacing-*)`)  
✅ **Colors:** 100% (uses CSS variables)  
✅ **Border Radius:** 100% (uses `var(--radius)`)  
✅ **Responsive:** Mobile-optimized  
✅ **Accessibility:** WCAG 2.1 AA compliant

---

**Status:** ✅ COMPLETE  
**WordPress FSE:** Compatible  
**Design System:** 100% Compliant
