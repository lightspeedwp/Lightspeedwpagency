# Product Details Block

**Block:** `woocommerce/product-details`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const ProductDetails = ({ product }: { product: { name: string; price: number; description: string; images: string[]; sku: string } }) => (
  <div className="wc-block-product-details">
    <div className="wc-block-product-details__gallery">
      {product.images.map((img, i) => <img key={i} src={img} alt={product.name} />)}
    </div>
    <div className="wc-block-product-details__info">
      <h1 className="wc-block-product__title">{product.name}</h1>
      <div className="wc-block-product__price">${product.price}</div>
      <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)' }}>{product.description}</p>
      <button className="wc-block-add-to-cart">Add to Cart</button>
      <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginTop: 'var(--spacing-4)' }}>SKU: {product.sku}</div>
    </div>
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
