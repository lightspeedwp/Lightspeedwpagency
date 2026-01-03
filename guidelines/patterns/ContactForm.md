# ContactForm Pattern

## Overview

**Purpose:** Contact form with validation, accessibility, and conversion optimization  
**Category:** `lsx-design/content/contact-form`  
**WordPress Block:** Contact Form 7, Gravity Forms, or Core Form blocks  
**Usage:** Contact pages, landing pages, CTA sections  

**Key Features:**
- Required field validation
- Accessible form labels
- Error messaging
- Success confirmation
- Email/phone validation
- WCAG 2.1 AA compliant
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern (with CF7)
```json
{
  "slug": "lsx-design/content/contact-form",
  "title": "Contact Form",
  "description": "Accessible contact form with validation",
  "categories": ["content"],
  "blockTypes": ["core/shortcode"],
  "keywords": ["form", "contact", "email", "message"]
}
```

### Template Usage (CF7)
```html
<!-- wp:shortcode -->
[contact-form-7 id="123" title="Contact Form"]
<!-- /wp:shortcode -->
```

### Template Usage (Core Blocks)
```html
<!-- wp:group {"layout":{"type":"constrained","contentSize":"640px"}} -->
<div class="wp-block-group">
  <!-- wp:heading -->
  <h2>Get in Touch</h2>
  <!-- /wp:heading -->
  
  <!-- Name Field -->
  <!-- wp:group -->
  <div class="wp-block-group">
    <!-- wp:paragraph -->
    <p><label for="name">Name *</label></p>
    <!-- /wp:paragraph -->
    
    <!-- wp:html -->
    <input type="text" id="name" name="name" required />
    <!-- /wp:html -->
  </div>
  <!-- /wp:group -->
  
  <!-- Email Field -->
  <!-- wp:group -->
  <div class="wp-block-group">
    <!-- wp:paragraph -->
    <p><label for="email">Email *</label></p>
    <!-- /wp:paragraph -->
    
    <!-- wp:html -->
    <input type="email" id="email" name="email" required />
    <!-- /wp:html -->
  </div>
  <!-- /wp:group -->
  
  <!-- Message Field -->
  <!-- wp:group -->
  <div class="wp-block-group">
    <!-- wp:paragraph -->
    <p><label for="message">Message *</label></p>
    <!-- /wp:paragraph -->
    
    <!-- wp:html -->
    <textarea id="message" name="message" rows="6" required></textarea>
    <!-- /wp:html -->
  </div>
  <!-- /wp:group -->
  
  <!-- Submit Button -->
  <!-- wp:button -->
  <div class="wp-block-button">
    <button class="wp-block-button__link">Send Message</button>
  </div>
  <!-- /wp:button -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface ContactFormProps {
  /** Form title */
  title?: string;
  
  /** Form description */
  description?: string;
  
  /** Show phone field */
  showPhoneField?: boolean;
  
  /** Show company field */
  showCompanyField?: boolean;
  
  /** Show subject field */
  showSubjectField?: boolean;
  
  /** Custom submit button text */
  submitButtonText?: string;
  
  /** Form variant */
  variant?: 'default' | 'inline' | 'minimal';
  
  /** Form submission handler */
  onSubmit?: (data: FormData) => Promise<void>;
  
  /** Success message */
  successMessage?: string;
  
  /** Privacy policy text */
  showPrivacyConsent?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  consent?: boolean;
}
```

### Default Values
```typescript
{
  submitButtonText: 'Send Message',
  variant: 'default',
  successMessage: 'Thank you! We\'ll be in touch soon.',
  showPhoneField: false,
  showCompanyField: false,
  showSubjectField: false,
  showPrivacyConsent: true
}
```

---

## Usage Examples

### Basic Contact Form
```tsx
import { ContactForm } from '../patterns/ContactForm';

<ContactForm
  title="Get in Touch"
  description="We'd love to hear from you"
/>
```

### Full Contact Form
```tsx
<ContactForm
  title="Start Your Project"
  description="Tell us about your WordPress needs"
  showPhoneField={true}
  showCompanyField={true}
  showSubjectField={true}
  submitButtonText="Get Started"
  onSubmit={handleFormSubmit}
/>
```

### Minimal Form (No Title)
```tsx
<ContactForm
  variant="minimal"
  submitButtonText="Contact Us"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h2          /* Form title */
--text-base        /* Labels, input text, description */
--text-small       /* Helper text, error messages */
```

**Font Families:**
- **Lexend** — Form title, labels, input text
- **Manrope** — Helper text, error messages

**Colors:**
```css
--foreground       /* Form title, labels */
--muted-foreground /* Description, helper text */
--input-background /* Input backgrounds */
--border           /* Input borders (default) */
--border-soft      /* Input borders (soft) */
--ring             /* Focus ring color */
--primary          /* Submit button */
--primary-foreground /* Submit button text */
--destructive      /* Error messages, error borders */
```

**Spacing:**
- Tailwind classes: `gap-6`, `mb-4`, `p-4`
- Form gap: 24px (gap-6)
- Input padding: 12px 16px
- Label margin: 8px bottom

**Border Radius:**
```css
--radius           /* Input border radius (4px) */
```

---

## Form Fields

### Required Fields
1. **Name** (text input)
2. **Email** (email input with validation)
3. **Message** (textarea)

### Optional Fields
- **Phone** (tel input with format validation)
- **Company** (text input)
- **Subject** (dropdown or text input)

### Field Structure
```tsx
<div className="form-field">
  <label htmlFor="name">
    Name <span className="required">*</span>
  </label>
  <input
    type="text"
    id="name"
    name="name"
    required
    aria-required="true"
    aria-describedby="name-error"
  />
  {error && (
    <span id="name-error" role="alert">
      {error}
    </span>
  )}
</div>
```

---

## Validation

### Client-Side Validation

**Name Field:**
- Required
- Minimum 2 characters
- Maximum 100 characters

**Email Field:**
- Required
- Valid email format
- Pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Phone Field (optional):**
- Valid phone format
- Pattern: `/^[\d\s\-\+\(\)]+$/`
- Minimum 10 digits

**Message Field:**
- Required
- Minimum 10 characters
- Maximum 1000 characters

### Error Messages
```tsx
const errorMessages = {
  name: {
    required: 'Please enter your name',
    minLength: 'Name must be at least 2 characters',
    maxLength: 'Name must be less than 100 characters'
  },
  email: {
    required: 'Please enter your email',
    invalid: 'Please enter a valid email address'
  },
  message: {
    required: 'Please enter your message',
    minLength: 'Message must be at least 10 characters',
    maxLength: 'Message must be less than 1000 characters'
  }
};
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Form Labels:**
- All inputs have associated labels
- Labels use `htmlFor` attribute
- Required fields marked visually and in code

**Keyboard Navigation:**
- Tab order follows logical flow
- Focus states visible on all inputs
- Submit button keyboard accessible

**Screen Readers:**
- ARIA labels for complex fields
- `aria-required="true"` for required fields
- `aria-invalid="true"` for error states
- `aria-describedby` links to error messages

**Error Handling:**
```tsx
<input
  type="email"
  id="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && (
  <span id="email-error" role="alert" className="error-message">
    Please enter a valid email address
  </span>
)}
```

**Focus States:**
```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '0px';
  e.currentTarget.style.borderColor = 'var(--ring)';
}}
```

**Touch Targets:**
- Input height: 44px minimum
- Button height: 48px
- Adequate spacing between fields

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- Single column layout
- Full-width inputs
- 24px gap between fields
- Larger touch targets (48px buttons)

**Tablet (768px - 1024px):**
- Single column (narrow forms)
- 2-column for short fields (name/email)
- 32px gap

**Desktop (> 1024px):**
- Maximum width: 640px
- 2-column for short fields
- 48px gap

---

## Loading & Success States

### Loading State
```tsx
<button
  type="submit"
  disabled={isSubmitting}
  aria-busy={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
```

### Success State
```tsx
{isSuccess && (
  <div
    role="status"
    aria-live="polite"
    className="success-message"
  >
    <CheckCircle size={20} />
    <span>Thank you! We'll be in touch soon.</span>
  </div>
)}
```

### Error State
```tsx
{hasErrors && (
  <div
    role="alert"
    aria-live="assertive"
    className="error-summary"
  >
    <AlertCircle size={20} />
    <span>Please fix the errors below</span>
  </div>
)}
```

---

## Privacy Consent

### GDPR Compliance
```tsx
<div className="form-field checkbox-field">
  <input
    type="checkbox"
    id="consent"
    name="consent"
    required
    aria-required="true"
  />
  <label htmlFor="consent">
    I agree to the <a href="/privacy">Privacy Policy</a> and 
    consent to my information being stored.*
  </label>
</div>
```

---

## Testing Checklist

### Rendering
- [ ] Form renders without errors
- [ ] All fields display correctly
- [ ] Labels associated with inputs

### Validation
- [ ] Required fields validated
- [ ] Email format validated
- [ ] Error messages display correctly
- [ ] Success message displays

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader announces errors
- [ ] ARIA attributes correct
- [ ] WCAG AA contrast on all elements

### Responsive
- [ ] Mobile layout correct
- [ ] Tablet layout correct
- [ ] Desktop layout correct
- [ ] Touch targets adequate (44px+)

### Functionality
- [ ] Form submission works
- [ ] Loading state displays
- [ ] Success state displays
- [ ] Error handling works

---

## Common Use Cases

### 1. Contact Page
```tsx
<ContactForm
  title="Get in Touch"
  description="Have a question? We're here to help."
  showPhoneField={true}
  showCompanyField={true}
/>
```

### 2. Project Inquiry
```tsx
<ContactForm
  title="Start Your Project"
  description="Tell us about your WordPress needs"
  showSubjectField={true}
  submitButtonText="Request Quote"
/>
```

### 3. Support Form
```tsx
<ContactForm
  title="Get Support"
  description="Need help? Our team is ready to assist."
  showSubjectField={true}
  submitButtonText="Submit Ticket"
/>
```

---

## WordPress Implementation

### With Contact Form 7
```php
<?php
/**
 * Contact Form 7 Setup
 */
add_action( 'wp_footer', function() {
  ?>
  <script>
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    // Handle success
    console.log('Form submitted successfully');
  }, false );
  </script>
  <?php
});
```

### With Gravity Forms
```php
<?php
/**
 * Gravity Forms Setup
 */
add_filter( 'gform_confirmation', function( $confirmation, $form ) {
  // Custom confirmation
  return $confirmation;
}, 10, 2 );
```

---

## Best Practices

### Content
- Keep forms short (3-5 fields max)
- Only ask for essential information
- Use clear, concise labels
- Provide helpful error messages

### Design
- Maintain consistent input styling
- Use adequate spacing between fields
- Make submit button prominent
- Show clear success/error states

### Performance
- Validate on blur, not on keystroke
- Debounce validation checks
- Show loading state during submission
- Provide immediate feedback

### Security
- Sanitize all inputs server-side
- Use CAPTCHA for spam protection
- Implement rate limiting
- Validate on both client and server

---

**Created:** December 27, 2024  
**Pattern:** ContactForm  
**Category:** Content  
**Status:** Production-ready ✅  
**Used in:** ContactPageTemplate, FAQTemplate  
**Design System:** 100% compliant

