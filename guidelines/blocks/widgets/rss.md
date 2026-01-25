# RSS Block Guidelines

**WordPress Block:** `core/rss`  
**Category:** Widgets  
**CSS File:** `/src/styles/blocks/widgets/rss.css`

---

## Purpose

The RSS block displays content from external RSS/Atom feeds. Used to show latest posts from other blogs, news sources, or external content streams.

---

## Design System Integration

### Typography
- **Title Font:** `var(--font-primary)`, **Size:** `var(--text-base)` (16px)
- **Excerpt Font:** `var(--font-primary)`, **Size:** `var(--text-sm)` (14px)
- **Meta Font:** `var(--font-secondary)`, **Size:** `var(--text-xs)` (12px)

### Spacing
- **Item Gap:** `var(--spacing-4)` (16px)
- **Internal Gap:** `var(--spacing-2)` (8px)

### Colors
- **Title:** `var(--foreground)`, **Hover:** `var(--primary)`
- **Excerpt:** `var(--muted-foreground)`

---

## Component Structure

```tsx
import '@/styles/blocks/widgets/rss.css';

export interface RSSBlockProps {
  feedUrl: string;
  itemsToShow?: number;
  showExcerpt?: boolean;
  showDate?: boolean;
  showAuthor?: boolean;
}

export const RSSBlock = ({ feedUrl, itemsToShow = 5, showExcerpt = false, showDate = true, showAuthor = false }: RSSBlockProps) => {
  // RSS feed logic here
  return (
    <div className="wp-block-rss">
      <ul className="wp-block-rss__list">
        {/* RSS items */}
      </ul>
    </div>
  );
};
```

---

## CSS Implementation

```css
.wp-block-rss {
  margin-bottom: var(--spacing-6);
}

.wp-block-rss__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.wp-block-rss__item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.wp-block-rss__title {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.wp-block-rss__title:hover {
  color: var(--primary);
}

.wp-block-rss__meta {
  font-family: var(--font-secondary);
  font-size: var(--text-xs);
  color: var(--muted-foreground);
}

.wp-block-rss__excerpt {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  line-height: 1.5;
}
```

---

**Status:** ✅ COMPLETE | **WordPress FSE:** Compatible | **Design System:** 100% Compliant
