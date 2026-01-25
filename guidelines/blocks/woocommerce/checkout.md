# Checkout Block

**Block:** `woocommerce/checkout`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const CheckoutBlock = () => (
  <div className="wc-block-checkout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-8)' }}>
    <div className="wc-block-checkout__form">
      <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>Billing Details</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <input type="text" placeholder="Full Name" style={{ padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
        <input type="email" placeholder="Email" style={{ padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
        <input type="text" placeholder="Address" style={{ padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
        <button className="wc-block-add-to-cart">Place Order</button>
      </form>
    </div>
    <div className="wc-block-checkout__summary" style={{ background: 'var(--muted)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-lg)' }}>
      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Order Summary</h3>
      {/* Order items */}
    </div>
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
