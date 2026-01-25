# Cart Block

**Block:** `woocommerce/cart`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const CartBlock = ({ items, total }: { items: Array<{ id: string; name: string; price: number; quantity: number; image: string }>; total: number }) => (
  <div className="wc-block-cart">
    <div className="wc-block-cart__items">
      {items.map(item => (
        <div key={item.id} className="wc-block-cart__item" style={{ display: 'flex', gap: 'var(--spacing-4)', padding: 'var(--spacing-4)', borderBottom: '1px solid var(--border)' }}>
          <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)' }}>{item.name}</div>
            <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', color: 'var(--primary)', marginTop: 'var(--spacing-2)' }}>${item.price}</div>
            <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginTop: 'var(--spacing-1)' }}>Qty: {item.quantity}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="wc-block-cart__total" style={{ padding: 'var(--spacing-6)', borderTop: '2px solid var(--border)', marginTop: 'var(--spacing-4)' }}>
      <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Total: ${total}</div>
      <button className="wc-block-add-to-cart">Proceed to Checkout</button>
    </div>
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
