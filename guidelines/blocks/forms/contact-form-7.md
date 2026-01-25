# Contact Form 7 Block

**Plugin:** Contact Form 7  
**CSS:** `/src/styles/blocks/forms/contact-form-7.css`

## Component

```tsx
import '@/styles/blocks/forms/contact-form-7.css';

export const ContactForm7Block = ({ formId }: { formId: string }) => (
  <div className="wp-block-contact-form-7">
    {/* CF7 shortcode: [contact-form-7 id="{formId}"] */}
    <div className="wpcf7">
      <form className="wpcf7-form">
        <div className="cf7-field">
          <label style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)', marginBottom: 'var(--spacing-2)', display: 'block' }}>Name</label>
          <input type="text" style={{ width: '100%', padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
        </div>
        <div className="cf7-field">
          <label style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)', marginBottom: 'var(--spacing-2)', display: 'block' }}>Email</label>
          <input type="email" style={{ width: '100%', padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
        </div>
        <div className="cf7-field">
          <label style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)', marginBottom: 'var(--spacing-2)', display: 'block' }}>Message</label>
          <textarea rows={5} style={{ width: '100%', padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)', resize: 'vertical' }} />
        </div>
        <button type="submit" style={{ padding: 'var(--spacing-3) var(--spacing-6)', background: 'var(--primary)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  </div>
);
```

## CSS

```css
.wp-block-contact-form-7 { margin-bottom: var(--spacing-8); }
.wpcf7-form { display: flex; flex-direction: column; gap: var(--spacing-4); }
.cf7-field input:focus, .cf7-field textarea:focus { outline: 2px solid var(--primary); outline-offset: 2px; border-color: var(--primary); }
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
