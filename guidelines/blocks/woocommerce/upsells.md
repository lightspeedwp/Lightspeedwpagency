# Upsells Block

**Block:** `woocommerce/product-upsells`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

---

## Purpose

Displays manually selected upsell products (premium/upgraded versions). Used to encourage customers to purchase higher-value items.

---

## Component Structure

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export interface UpsellsBlockProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    regularPrice?: number;
    image: string;
    slug: string;
    badge?: string;
  }>;
  title?: string;
}

export const UpsellsBlock = ({ 
  products, 
  title = "You May Also Like"
}: UpsellsBlockProps) => (
  <div className="wc-block-upsells">
    <h2 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--foreground)',
      marginBottom: 'var(--spacing-6)'
    }}>
      {title}
    </h2>
    <div className="wc-block-grid">
      {products.map(product => (
        <div key={product.id} className="wc-block-product">
          {product.badge && (
            <div style={{
              position: 'absolute',
              top: 'var(--spacing-2)',
              right: 'var(--spacing-2)',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              {product.badge}
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="wc-block-product__image" 
          />
          <h3 className="wc-block-product__title">{product.name}</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
            <div className="wc-block-product__price">${product.price}</div>
            {product.regularPrice && (
              <div style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',
                color: 'var(--muted-foreground)',
                textDecoration: 'line-through'
              }}>
                ${product.regularPrice}
              </div>
            )}
          </div>
          <button className="wc-block-add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);
```

---

## WordPress Mapping

**Block Name:** `woocommerce/product-upsells`

**Attributes:**
- `columns` (number) - Grid columns
- `limit` (number) - Max products to show

---

## Best Practices

1. **Strategic Selection:** Choose genuinely better alternatives
2. **Value Proposition:** Highlight why upgrade is worth it
3. **Badges:** Use "Bestseller", "Premium", "Popular" badges
4. **Pricing:** Show savings with strikethrough regular price
5. **Limit:** Show 3-4 upsells maximum

---

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
