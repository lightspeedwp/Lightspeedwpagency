# Details Block Guidelines

**WordPress Block:** `core/details`  
**CSS File:** `/src/styles/blocks/text/details.css`

---

## Purpose

The Details block creates collapsible content sections with summary/details HTML elements. Used for FAQs, expandable content, and progressive disclosure.

---

## Component

```tsx
import '@/styles/blocks/text/details.css';

export const DetailsBlock = ({ summary, children }: { summary: string; children: React.ReactNode }) => (
  <details className="wp-block-details">
    <summary className="wp-block-details__summary">{summary}</summary>
    <div className="wp-block-details__content">{children}</div>
  </details>
);
```

---

## CSS

```css
.wp-block-details {
  margin-bottom: var(--spacing-4);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--spacing-4);
}

.wp-block-details__summary {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  cursor: pointer;
  user-select: none;
  list-style: none;
}

.wp-block-details__summary::-webkit-details-marker {
  display: none;
}

.wp-block-details__summary::before {
  content: '▶';
  margin-right: var(--spacing-2);
  transition: transform 0.2s ease;
}

.wp-block-details[open] .wp-block-details__summary::before {
  transform: rotate(90deg);
}

.wp-block-details__content {
  padding-top: var(--spacing-3);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
}
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
