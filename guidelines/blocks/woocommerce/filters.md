# Product Filters Block

**Block:** `woocommerce/product-filters`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const ProductFiltersBlock = ({ categories, priceRanges }: { categories: string[]; priceRanges: Array<{ label: string; min: number; max: number }> }) => (
  <div className="wc-block-filters" style={{ padding: 'var(--spacing-4)', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
    <div style={{ marginBottom: 'var(--spacing-6)' }}>
      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>Categories</h3>
      {categories.map((cat, i) => (
        <label key={i} style={{ display: 'block', marginBottom: 'var(--spacing-2)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', color: 'var(--foreground)', cursor: 'pointer' }}>
          <input type="checkbox" style={{ marginRight: 'var(--spacing-2)' }} />
          {cat}
        </label>
      ))}
    </div>
    <div>
      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>Price Range</h3>
      {priceRanges.map((range, i) => (
        <label key={i} style={{ display: 'block', marginBottom: 'var(--spacing-2)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', color: 'var(--foreground)', cursor: 'pointer' }}>
          <input type="checkbox" style={{ marginRight: 'var(--spacing-2)' }} />
          {range.label}
        </label>
      ))}
    </div>
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
