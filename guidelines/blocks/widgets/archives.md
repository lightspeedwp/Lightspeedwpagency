# Archives Block Guidelines

**WordPress Block:** `core/archives`  
**CSS:** `/src/styles/blocks/widgets/archives.css`

## Component

```tsx
import '@/styles/blocks/widgets/archives.css';

export const ArchivesBlock = ({ archives, showPostCounts = false }: { archives: Array<{ month: string; year: number; count: number; url: string }>; showPostCounts?: boolean }) => (
  <div className="wp-block-archives">
    <ul className="wp-block-archives__list">
      {archives.map((archive, i) => (
        <li key={i}>
          <a href={archive.url}>{archive.month} {archive.year}</a>
          {showPostCounts && <span> ({archive.count})</span>}
        </li>
      ))}
    </ul>
  </div>
);
```

## CSS

```css
.wp-block-archives {
  margin-bottom: var(--spacing-6);
}

.wp-block-archives__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.wp-block-archives__list a {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.wp-block-archives__list a:hover {
  color: var(--primary);
}

.wp-block-archives__list span {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
