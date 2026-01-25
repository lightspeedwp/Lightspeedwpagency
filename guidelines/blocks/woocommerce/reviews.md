# Reviews Block

**Block:** `woocommerce/reviews`  
**CSS:** `/src/styles/blocks/woocommerce/woo-base.css`

## Component

```tsx
import '@/styles/blocks/woocommerce/woo-base.css';

export const ReviewsBlock = ({ reviews }: { reviews: Array<{ author: string; rating: number; comment: string; date: string }> }) => (
  <div className="wc-block-reviews">
    {reviews.map((review, i) => (
      <div key={i} className="wc-block-review" style={{ padding: 'var(--spacing-4)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
          <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)' }}>{review.author}</div>
          <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', color: 'var(--primary)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</div>
        </div>
        <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 'var(--spacing-2)' }}>{review.comment}</p>
        <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>{review.date}</div>
      </div>
    ))}
  </div>
);
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
