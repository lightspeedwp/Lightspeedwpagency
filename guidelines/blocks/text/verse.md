# Verse Block Guidelines

**WordPress Block:** `core/verse`  
**CSS File:** `/src/styles/blocks/text/verse.css`

---

## Purpose

The Verse block formats poetry or song lyrics with preserved line breaks and subtle styling. Similar to preformatted but optimized for literary content.

---

## Component

```tsx
import '@/styles/blocks/text/verse.css';

export const VerseBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="wp-block-verse">{children}</pre>
);
```

---

## CSS

```css
.wp-block-verse {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--foreground);
  white-space: pre-wrap;
  overflow-wrap: break-word;
  padding-left: var(--spacing-4);
  border-left: 2px solid var(--border);
  margin-bottom: var(--spacing-6);
  font-style: italic;
}
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
