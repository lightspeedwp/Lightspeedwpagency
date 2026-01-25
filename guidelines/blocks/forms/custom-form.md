# Custom Form Block

**Block:** `custom/form-block`  
**CSS:** `/src/styles/blocks/forms/custom-form.css`

## Component

```tsx
import '@/styles/blocks/forms/custom-form.css';

export const CustomFormBlock = ({ fields, onSubmit }: { fields: Array<{ type: string; label: string; name: string; required?: boolean }>; onSubmit: (data: any) => void }) => (
  <div className="wp-block-custom-form">
    <form className="custom-form" onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
      {fields.map((field, i) => (
        <div key={i} className="custom-form__field">
          <label style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)', marginBottom: 'var(--spacing-2)', display: 'block' }}>
            {field.label} {field.required && <span style={{ color: 'var(--destructive)' }}>*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea name={field.name} required={field.required} rows={5} style={{ width: '100%', padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)', resize: 'vertical' }} />
          ) : (
            <input type={field.type} name={field.name} required={field.required} style={{ width: '100%', padding: 'var(--spacing-3)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card)', color: 'var(--foreground)' }} />
          )}
        </div>
      ))}
      <button type="submit" style={{ padding: 'var(--spacing-3) var(--spacing-6)', background: 'var(--primary)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>Submit</button>
    </form>
  </div>
);
```

## CSS

```css
.wp-block-custom-form { margin-bottom: var(--spacing-8); }
.custom-form { display: flex; flex-direction: column; gap: var(--spacing-4); }
.custom-form__field input:focus, .custom-form__field textarea:focus { outline: 2px solid var(--primary); outline-offset: 2px; border-color: var(--primary); }
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
