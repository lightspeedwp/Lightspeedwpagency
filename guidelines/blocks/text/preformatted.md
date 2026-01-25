# Preformatted Block Guidelines

**WordPress Block:** `core/preformatted`  
**Category:** Text  
**CSS File:** `/src/styles/blocks/text/preformatted.css`

---

## Purpose

The Preformatted block preserves exact spacing, line breaks, and formatting as typed. Used for ASCII art, poetry, formatted text, or any content where exact whitespace matters.

---

## Design System Integration

### Typography
- **Font:** `var(--font-mono)` (monospace)
- **Size:** `var(--text-base)` (16px)
- **Line Height:** 1.6
- **Color:** `var(--foreground)`

### Spacing
- **Padding:** `var(--spacing-4)` (16px) all sides
- **Margin Bottom:** `var(--spacing-6)` (24px)

### Colors
- **Background:** `var(--muted)` (subtle background)
- **Border:** 1px solid `var(--border)`
- **Text:** `var(--foreground)`

### Border Radius
- **Radius:** `var(--radius)` (4px)

---

## Component Structure

```tsx
/**
 * Preformatted Block Component
 * 
 * WordPress core block: core/preformatted
 * 
 * @see /guidelines/blocks/text/preformatted.md
 */

import '@/styles/blocks/text/preformatted.css';

export interface PreformattedBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const PreformattedBlock = ({ 
  children, 
  className = '' 
}: PreformattedBlockProps) => {
  return (
    <pre className={`wp-block-preformatted ${className}`}>
      {children}
    </pre>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/text/preformatted.css`

```css
/**
 * Preformatted Block Styles
 * 
 * WordPress block: .wp-block-preformatted
 */

.wp-block-preformatted {
  background: var(--muted);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  font-family: var(--font-mono);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--foreground);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: auto;
}

/* Scrollbar for horizontal overflow */
.wp-block-preformatted::-webkit-scrollbar {
  height: 8px;
}

.wp-block-preformatted::-webkit-scrollbar-track {
  background: var(--background);
}

.wp-block-preformatted::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: var(--radius);
}

.wp-block-preformatted::-webkit-scrollbar-thumb:hover {
  background: var(--muted-foreground);
}

/* Responsive */
@media (max-width: 767px) {
  .wp-block-preformatted {
    font-size: var(--text-sm);
    padding: var(--spacing-3);
  }
}
```

---

## Usage Examples

### ASCII Art

```tsx
<PreformattedBlock>
{`
    /\\_/\\
   ( o.o )
    > ^ <
  /|     |\\
 (_|     |_)
`}
</PreformattedBlock>
```

### Formatted Text

```tsx
<PreformattedBlock>
{`Name:        John Doe
Email:       john@example.com
Phone:       (555) 123-4567
Address:     123 Main St
             Anytown, ST 12345`}
</PreformattedBlock>
```

### Poetry

```tsx
<PreformattedBlock>
{`Roses are red,
Violets are blue,
This text preserves
    spacing, too!`}
</PreformattedBlock>
```

---

## WordPress Mapping

**Block Name:** `core/preformatted`

**Attributes:**
- `content` (string) - The preformatted text content

**Example Block Markup:**
```html
<!-- wp:preformatted -->
<pre class="wp-block-preformatted">Formatted    text    here</pre>
<!-- /wp:preformatted -->
```

---

## Accessibility

- **Semantic HTML:** Uses `<pre>` element
- **Screen Readers:** Content read exactly as formatted
- **Keyboard Navigation:** Scrollable with arrow keys if overflow
- **Focus:** Read-only content, no focus states needed

---

## Best Practices

1. **Use Sparingly:** Only when exact formatting is essential
2. **Mobile Friendly:** Use `pre-wrap` to prevent horizontal scroll on mobile
3. **Contrast:** Ensure text remains readable in both light/dark modes
4. **Line Length:** Consider mobile viewports when using long lines
5. **Alternative:** For code, use Code block instead

---

## Differences from Code Block

| Feature | Preformatted | Code |
|---------|-------------|------|
| **Purpose** | General formatted text | Code snippets |
| **Syntax Highlighting** | No | Yes (optional) |
| **Line Numbers** | No | Yes (optional) |
| **Font Size** | Base (16px) | Small (14px) |
| **Use Case** | ASCII art, poetry, tables | Programming code |

---

## Common Use Cases

- **ASCII Art:** Diagrams, logos, decorative text
- **Poetry:** Line breaks and spacing matter
- **Formatted Tables:** Plain text tables with alignment
- **File Contents:** Display file output exactly as is
- **Whitespace-Dependent:** Any content where spaces matter

---

## Design System Compliance

✅ **Typography:** 100% (uses `var(--font-mono)`)  
✅ **Spacing:** 100% (uses `var(--spacing-*)`)  
✅ **Colors:** 100% (uses CSS variables)  
✅ **Border Radius:** 100% (uses `var(--radius)`)  
✅ **Responsive:** Mobile-optimized  
✅ **Accessibility:** WCAG 2.1 AA compliant

---

**Status:** ✅ COMPLETE  
**WordPress FSE:** Compatible  
**Design System:** 100% Compliant
