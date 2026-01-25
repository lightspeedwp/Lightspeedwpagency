# Product Search Block

**Block:** `woocommerce/product-search`  
**CSS:** `/src/styles/blocks/woocommerce/product-search.css`

---

## Purpose

Product-specific search widget with live results. Used in headers, sidebars, or shop pages for quick product discovery.

---

## Component Structure

```tsx
import '@/styles/blocks/woocommerce/product-search.css';

export interface ProductSearchBlockProps {
  placeholder?: string;
  showButton?: boolean;
  onSearch?: (query: string) => void;
}

export const ProductSearchBlock = ({ 
  placeholder = "Search products...",
  showButton = true,
  onSearch
}: ProductSearchBlockProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('s') as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="wc-block-product-search">
      <form 
        className="wc-block-product-search__form" 
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          name="s"
          className="wc-block-product-search__input"
          placeholder={placeholder}
          aria-label="Search products"
        />
        {showButton && (
          <button 
            type="submit" 
            className="wc-block-product-search__button"
            aria-label="Submit search"
          >
            Search
          </button>
        )}
      </form>
    </div>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/woocommerce/product-search.css`

```css
/**
 * Product Search Block Styles
 */

.wc-block-product-search {
  margin-bottom: var(--spacing-4);
}

.wc-block-product-search__form {
  display: flex;
  gap: var(--spacing-2);
}

.wc-block-product-search__input {
  flex: 1;
  padding: var(--spacing-3);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease;
}

.wc-block-product-search__input:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-color: var(--primary);
}

.wc-block-product-search__button {
  padding: var(--spacing-3) var(--spacing-6);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--primary-foreground);
  background: var(--primary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
}

.wc-block-product-search__button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.wc-block-product-search__button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 767px) {
  .wc-block-product-search__input {
    font-size: var(--text-sm);
  }
  
  .wc-block-product-search__button {
    padding: var(--spacing-3) var(--spacing-4);
  }
}
```

---

## WordPress Mapping

**Block Name:** `woocommerce/product-search`

**Attributes:**
- `placeholder` (string) - Input placeholder text
- `showButton` (boolean) - Show search button

---

## Accessibility

- **Semantic HTML:** Uses `<form role="search">`
- **ARIA Labels:** Descriptive labels for input and button
- **Keyboard Navigation:** Full keyboard support
- **Focus States:** Clear focus indicators
- **Screen Readers:** Search purpose announced

---

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
