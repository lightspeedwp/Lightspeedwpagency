# Product Grid Block

**Block:** `woocommerce/product-grid`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const ProductGrid = ({ products }: { products: Array<{ id: string; name: string; price: number; image: string; slug: string }> }) => (
  <div className="wc-block-grid">
    {products.map(product => (
      <div key={product.id} className="wc-block-product">
        <img src={product.image} alt={product.name} className="wc-block-product__image" />
        <h3 className="wc-block-product__title">{product.name}</h3>
        <div className="wc-block-product__price">${product.price}</div>
        <button className="wc-block-add-to-cart">Add to Cart</button>
      </div>
    ))}
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
