# Latest Comments Block Guidelines

**WordPress Block:** `core/latest-comments`  
**CSS:** `/src/styles/blocks/widgets/latest-comments.css`

## Component

```tsx
import '@/styles/blocks/widgets/latest-comments.css';

export const LatestCommentsBlock = ({ comments }: { comments: Array<{ author: string; content: string; postTitle: string; date: string }> }) => (
  <div className="wp-block-latest-comments">
    <ul className="wp-block-latest-comments__list">
      {comments.map((comment, i) => (
        <li key={i} className="wp-block-latest-comments__item">
          <div className="wp-block-latest-comments__author">{comment.author}</div>
          <div className="wp-block-latest-comments__content">{comment.content}</div>
          <div className="wp-block-latest-comments__meta">
            on <a href="#">{comment.postTitle}</a> • {comment.date}
          </div>
        </li>
      ))}
    </ul>
  </div>
);
```

## CSS

```css
.wp-block-latest-comments {
  margin-bottom: var(--spacing-6);
}

.wp-block-latest-comments__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.wp-block-latest-comments__item {
  padding: var(--spacing-3);
  border-left: 2px solid var(--border);
  background: var(--muted);
  border-radius: var(--radius);
}

.wp-block-latest-comments__author {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin-bottom: var(--spacing-1);
}

.wp-block-latest-comments__content {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin-bottom: var(--spacing-2);
}

.wp-block-latest-comments__meta {
  font-family: var(--font-secondary);
  font-size: var(--text-xs);
  color: var(--muted-foreground);
}

.wp-block-latest-comments__meta a {
  color: var(--primary);
  text-decoration: none;
}
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
