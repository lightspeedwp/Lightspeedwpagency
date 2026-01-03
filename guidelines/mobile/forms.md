# Mobile Forms

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Mobile forms must be optimized for touch input, virtual keyboards, and small screens. Follow these guidelines for excellent mobile form UX.

---

## 📱 Mobile-Optimized Input Types

### Use Correct Input Types

```tsx
// Email - Shows @ and . on keyboard
<input 
  type="email"
  inputMode="email"
  autoComplete="email"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)'
  }}
/>

// Phone - Shows numeric keyboard
<input 
  type="tel"
  inputMode="tel"
  autoComplete="tel"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--text-base)'
  }}
/>

// Number - Shows numeric keyboard
<input 
  type="number"
  inputMode="numeric"
  pattern="[0-9]*"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px'
  }}
/>

// URL - Shows / and .com on keyboard
<input 
  type="url"
  inputMode="url"
  autoComplete="url"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px'
  }}
/>

// Search - Shows search button on keyboard
<input 
  type="search"
  inputMode="search"
  style={{
    width: '100%',
    minHeight: '48px',
    padding: '12px 16px'
  }}
/>
```

---

## 🎯 Form Field Sizing

### Minimum Heights

```tsx
<input style={{
  minHeight: '48px',         // Touch-friendly height
  padding: '12px 16px',      // Adequate padding
  fontSize: 'var(--text-base)', // 16px minimum (prevents zoom on iOS)
  fontFamily: 'Lexend, sans-serif'
}} />
```

**Critical:** Use 16px minimum font size to prevent iOS auto-zoom on focus.

---

## 🔤 Autocomplete Attributes

### Common Autocomplete Values

```tsx
// Name fields
<input type="text" autoComplete="name" />
<input type="text" autoComplete="given-name" />  // First name
<input type="text" autoComplete="family-name" /> // Last name

// Contact fields
<input type="email" autoComplete="email" />
<input type="tel" autoComplete="tel" />
<input type="url" autoComplete="url" />

// Address fields
<input type="text" autoComplete="street-address" />
<input type="text" autoComplete="address-line1" />
<input type="text" autoComplete="address-line2" />
<input type="text" autoComplete="address-level2" />  // City
<input type="text" autoComplete="address-level1" />  // State/Province
<input type="text" autoComplete="postal-code" />
<input type="text" autoComplete="country" />

// Organization fields
<input type="text" autoComplete="organization" />
<input type="text" autoComplete="organization-title" />
```

---

## ✅ Form Validation

### Inline Validation (Mobile-Friendly)

```tsx
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

<div style={{ marginBottom: '16px' }}>
  <label 
    htmlFor="email"
    style={{
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)',
      color: 'var(--foreground)'
    }}
  >
    Email Address
  </label>
  
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      // Validate on blur, not on every keystroke
    }}
    onBlur={() => {
      if (!email.includes('@')) {
        setEmailError('Please enter a valid email');
      } else {
        setEmailError('');
      }
    }}
    aria-invalid={!!emailError}
    aria-describedby={emailError ? 'email-error' : undefined}
    style={{
      width: '100%',
      minHeight: '48px',
      padding: '12px 16px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      border: `1px solid ${emailError ? 'var(--destructive)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      backgroundColor: 'var(--input-background)',
      color: 'var(--foreground)'
    }}
  />
  
  {emailError && (
    <p 
      id="email-error"
      role="alert"
      style={{
        marginTop: '8px',
        fontSize: 'var(--text-small)',
        fontFamily: 'Manrope, sans-serif',
        color: 'var(--destructive)'
      }}
    >
      {emailError}
    </p>
  )}
</div>
```

---

## 📋 Form Patterns

### Contact Form (Mobile-Optimized)

```tsx
<form 
  onSubmit={handleSubmit}
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px',
    width: '100%'
  }}
>
  {/* Name */}
  <div>
    <label htmlFor="name" style={{
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Name
    </label>
    <input
      id="name"
      type="text"
      autoComplete="name"
      required
      style={{
        width: '100%',
        minHeight: '48px',
        padding: '12px 16px',
        fontSize: 'var(--text-base)',
        fontFamily: 'Lexend, sans-serif',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--input-background)'
      }}
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" style={{
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Email
    </label>
    <input
      id="email"
      type="email"
      inputMode="email"
      autoComplete="email"
      required
      style={{
        width: '100%',
        minHeight: '48px',
        padding: '12px 16px',
        fontSize: 'var(--text-base)',
        fontFamily: 'Lexend, sans-serif',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)'
      }}
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" style={{
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Message
    </label>
    <textarea
      id="message"
      rows={5}
      required
      style={{
        width: '100%',
        minHeight: '120px',
        padding: '12px 16px',
        fontSize: 'var(--text-base)',
        fontFamily: 'Lexend, sans-serif',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        resize: 'vertical'
      }}
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    style={{
      minHeight: '48px',
      padding: '14px 32px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      borderRadius: 'var(--radius)',
      cursor: 'pointer'
    }}
  >
    Send Message
  </button>
</form>
```

---

## 📲 Mobile Keyboard Optimization

### Prevent iOS Zoom (16px minimum)

```tsx
// ❌ BAD: Will zoom on iOS
<input style={{ fontSize: '14px' }} />

// ✅ GOOD: Won't zoom
<input style={{ fontSize: 'var(--text-base)' }} /> // 16px
```

### Input Mode Attribute

```tsx
// Numeric keyboard for numbers
<input type="text" inputMode="numeric" pattern="[0-9]*" />

// Decimal keyboard for prices
<input type="text" inputMode="decimal" />

// Email keyboard with @ and .
<input type="email" inputMode="email" />

// URL keyboard with / and .com
<input type="url" inputMode="url" />
```

---

## ♿ Accessibility

### Labels and ARIA

```tsx
<div>
  <label 
    htmlFor="phone"
    style={{
      display: 'block',
      marginBottom: '8px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif'
    }}
  >
    Phone Number
  </label>
  <input
    id="phone"
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    aria-required="true"
    aria-describedby="phone-hint"
    style={{
      width: '100%',
      minHeight: '48px',
      padding: '12px 16px'
    }}
  />
  <p 
    id="phone-hint"
    style={{
      marginTop: '4px',
      fontSize: 'var(--text-small)',
      fontFamily: 'Manrope, sans-serif',
      color: 'var(--muted-foreground)'
    }}
  >
    Format: (555) 555-5555
  </p>
</div>
```

---

## ✅ Best Practices

### Do's ✅
- Use 16px minimum font size (prevents iOS zoom)
- Set correct `type` and `inputMode` attributes
- Add `autoComplete` for all standard fields
- Provide inline validation feedback
- Use 48px minimum height for inputs
- Label all form fields
- Show password requirements upfront
- Use single-column layouts on mobile

### Don'ts ❌
- Don't use font size < 16px
- Don't validate on every keystroke (annoying)
- Don't forget autocomplete attributes
- Don't use placeholder as label
- Don't make form inputs too small
- Don't use multi-column forms on mobile
- Don't hide password requirements
- Don't disable zoom

---

**Last Updated:** December 25, 2024  
**Input Height:** 48px minimum  
**Font Size:** 16px minimum (prevents iOS zoom)  
**Keyboard Optimization:** inputMode + type attributes
