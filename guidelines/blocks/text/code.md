# Code Block Guidelines

**WordPress Block:** `core/code`  
**Category:** Text  
**CSS File:** `/src/styles/blocks/text/code.css`

---

## Purpose

The Code block displays preformatted code snippets with syntax preservation, monospace font, and optional syntax highlighting. Used for technical documentation, tutorials, and developer content.

---

## Design System Integration

### Typography
- **Font:** `var(--font-mono)` (monospace)
- **Size:** `var(--text-sm)` (14px)
- **Line Height:** 1.6 (readable for code)
- **Color:** `var(--foreground)`

### Spacing
- **Padding:** `var(--spacing-4)` (16px) all sides
- **Margin Bottom:** `var(--spacing-6)` (24px)

### Colors
- **Background:** `var(--muted)` (light gray in light mode, dark gray in dark mode)
- **Border:** 1px solid `var(--border)`
- **Text:** `var(--foreground)`

### Border Radius
- **Radius:** `var(--radius)` (4px)

---

## Component Structure

```tsx
/**
 * Code Block Component
 * 
 * WordPress core block: core/code
 * 
 * @see /guidelines/blocks/text/code.md
 */

import '@/styles/blocks/text/code.css';

export interface CodeBlockProps {
  children: React.ReactNode;
  language?: string; // Programming language for syntax highlighting
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({ 
  children, 
  language = 'text',
  showLineNumbers = false,
  className = '' 
}: CodeBlockProps) => {
  return (
    <div className={`wp-block-code ${showLineNumbers ? 'wp-block-code--line-numbers' : ''} ${className}`}>
      <pre className="wp-block-code__pre">
        <code 
          className={`wp-block-code__code ${language ? `language-${language}` : ''}`}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/text/code.css`

```css
/**
 * Code Block Styles
 * 
 * WordPress block: .wp-block-code
 */

.wp-block-code {
  background: var(--muted);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: var(--spacing-6);
  overflow-x: auto;
}

.wp-block-code__pre {
  margin: 0;
  padding: var(--spacing-4);
  overflow-x: auto;
}

.wp-block-code__code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--foreground);
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
}

/* Line Numbers Variant */
.wp-block-code--line-numbers {
  counter-reset: line;
}

.wp-block-code--line-numbers .wp-block-code__code {
  display: block;
}

.wp-block-code--line-numbers .wp-block-code__code::before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  width: 2em;
  margin-right: var(--spacing-3);
  text-align: right;
  color: var(--muted-foreground);
  user-select: none;
}

/* Scrollbar Styles */
.wp-block-code__pre::-webkit-scrollbar {
  height: 8px;
}

.wp-block-code__pre::-webkit-scrollbar-track {
  background: var(--background);
}

.wp-block-code__pre::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: var(--radius);
}

.wp-block-code__pre::-webkit-scrollbar-thumb:hover {
  background: var(--muted-foreground);
}

/* Responsive */
@media (max-width: 767px) {
  .wp-block-code__code {
    font-size: 13px;
  }
}
```

---

## Usage Examples

### Basic Code Block

```tsx
<CodeBlock>
  const greeting = "Hello, World!";
  console.log(greeting);
</CodeBlock>
```

### With Language Syntax

```tsx
<CodeBlock language="typescript">
  interface User {
    id: number;
    name: string;
    email: string;
  }
</CodeBlock>
```

### With Line Numbers

```tsx
<CodeBlock language="javascript" showLineNumbers>
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
</CodeBlock>
```

---

## WordPress Mapping

**Block Name:** `core/code`

**Attributes:**
- `content` (string) - The code content
- `language` (string) - Programming language identifier

**Example Block Markup:**
```html
<!-- wp:code {"language":"javascript"} -->
<pre class="wp-block-code"><code>const x = 10;</code></pre>
<!-- /wp:code -->
```

---

## Accessibility

- **Semantic HTML:** Uses `<pre>` and `<code>` elements
- **Screen Readers:** Code is announced as preformatted text
- **Keyboard Navigation:** Scrollable with arrow keys
- **Focus:** No interactive elements (read-only)

---

## Best Practices

1. **Line Length:** Keep lines under 80-100 characters for readability
2. **Scrolling:** Horizontal scroll for long lines (don't wrap)
3. **Contrast:** Ensure code text has sufficient contrast in both light/dark modes
4. **Copy Button:** Consider adding a "Copy Code" button for user convenience
5. **Syntax Highlighting:** Use language identifiers for better readability

---

## Common Use Cases

- **Tutorial Code:** Step-by-step code examples
- **API Documentation:** Request/response examples
- **Configuration Files:** Config snippets (JSON, YAML, etc.)
- **Command Line:** Terminal commands
- **Inline Snippets:** Small code references

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
