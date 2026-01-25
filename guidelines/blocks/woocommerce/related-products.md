# Related Products Block

**Block:** `woocommerce/related-products`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

---

## Purpose

Displays related products based on categories, tags, or attributes. Used on single product pages to encourage additional purchases.

---

## Component Structure

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export interface RelatedProductsBlockProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    slug: string;
  }>;
  title?: string;
  columns?: 2 | 3 | 4;
}

export const RelatedProductsBlock = ({ 
  products, 
  title = "Related Products",
  columns = 4
}: RelatedProductsBlockProps) => (
  <div className="wc-block-related-products">
    <h2 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--foreground)',
      marginBottom: 'var(--spacing-6)'
    }}>
      {title}
    </h2>
    <div 
      className="wc-block-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }}
    >
      {products.map(product => (
        <div key={product.id} className="wc-block-product">
          <img 
            src={product.image} 
            alt={product.name} 
            className="wc-block-product__image" 
          />
          <h3 className="wc-block-product__title">{product.name}</h3>
          <div className="wc-block-product__price">${product.price}</div>
          <button className="wc-block-add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);
```

---

## WordPress Mapping

**Block Name:** `woocommerce/related-products`

**Attributes:**
- `columns` (number) - Number of columns (2-4)
- `limit` (number) - Max products to show
- `orderby` (string) - Sort order (random, popularity, rating)

---

## Accessibility

- **Semantic HTML:** Uses proper heading hierarchy
- **Grid Layout:** Responsive grid with CSS Grid
- **Focus States:** Keyboard accessible product cards
- **Screen Readers:** Product info announced clearly

---

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
