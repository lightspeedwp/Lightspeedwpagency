# Newsletter Signup Pattern

**WordPress Pattern:** `lsx-design/cta/newsletter-signup`  
**Block Type:** `core/group`  
**Section Style:** `newsletter-signup` or `gradient-brand`  
**Status:** ✅ Production Ready

---

## Overview

Email subscription pattern for lead generation and audience building. Features a centered layout with heading, description, email input field, and submit button with form validation.

---

## Component Location

**File:** `/src/app/components/patterns/NewsletterSignup.tsx`

---

## WordPress Mapping

### Block Structure
```html
<!-- wp:group {"metadata":{"name":"Newsletter Signup"},"className":"newsletter-signup","layout":{"type":"constrained","contentSize":"600px"}} -->
<div class="wp-block-group newsletter-signup">
  
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Subscribe to Our Newsletter</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">Get the latest WordPress tips, industry insights, and exclusive updates delivered to your inbox.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:html -->
  <form class="newsletter-form">
    <div class="form-group">
      <label for="email" class="sr-only">Email address</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter your email" 
        required 
        aria-required="true"
      />
      <button type="submit">Subscribe</button>
    </div>
  </form>
  <!-- /wp:html -->
  
  <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
  <p class="has-text-align-center has-small-font-size">We respect your privacy. Unsubscribe at any time.</p>
  <!-- /wp:paragraph -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
<?php
/**
 * Title: Newsletter Signup
 * Slug: lsx-design/cta/newsletter-signup
 * Categories: lsx-design-cta
 * Description: Email subscription form for lead generation
 */
?>
```

---

## Props Interface

```tsx
export interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  privacyText?: string;
  onSubmit?: (email: string) => void;
  successMessage?: string;
  errorMessage?: string;
}
```

### Default Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Subscribe to Our Newsletter"` | Section heading |
| `description` | `string` | `"Get the latest WordPress tips..."` | Subheading description |
| `placeholder` | `string` | `"Enter your email"` | Input placeholder text |
| `buttonText` | `string` | `"Subscribe"` | Submit button text |
| `privacyText` | `string` | `"We respect your privacy..."` | Privacy notice |
| `onSubmit` | `function` | `undefined` | Form submit handler |
| `successMessage` | `string` | `"Thanks for subscribing!"` | Success message |
| `errorMessage` | `string` | `"Please enter a valid email"` | Error message |

---

## Usage Examples

### Basic Newsletter Signup
```tsx
import { NewsletterSignup } from '../patterns/NewsletterSignup';

<NewsletterSignup />
```

### Custom Copy
```tsx
<NewsletterSignup 
  heading="Join Our Community"
  description="Get exclusive WordPress tips and updates delivered weekly"
  placeholder="Your email address"
  buttonText="Join Now"
/>
```

### With Custom Handler
```tsx
<NewsletterSignup 
  onSubmit={(email) => {
    // Send to your email service provider
    console.log('New subscriber:', email);
  }}
  successMessage="Welcome aboard! Check your email."
  errorMessage="Oops! Something went wrong."
/>
```

---

## Design Token Compliance

### Typography
- **Heading:** `var(--text-h2)` with `Lexend, sans-serif`
- **Description:** `var(--text-base)` with `Manrope, sans-serif`
- **Privacy Text:** `var(--text-small)` with `Manrope, sans-serif`
- **Font Weights:** `var(--font-weight-medium)` (heading), `var(--font-weight-regular)` (body)
- **Line Heights:** `var(--line-height-snug)` (heading), `var(--line-height-relaxed)` (body)

### Colors
- **Background:** `var(--card)`
- **Text:** `var(--foreground)` (heading), `var(--muted-foreground)` (description/privacy)
- **Input Background:** `var(--background)`
- **Input Border:** `var(--border)`
- **Input Focus:** `var(--ring)` with `var(--primary)` border
- **Button:** `var(--primary)` background, `var(--primary-foreground)` text

### Spacing
- **Padding:** `py-20` (section), `p-8` (card)
- **Gaps:** `gap-6` (content), `gap-3` (form elements)
- **Max Width:** 600px (content container)
- **Border Radius:** `var(--radius-lg)` (card), `var(--radius)` (input/button)

### Transitions
- **Duration:** `var(--transition-base)`
- **Easing:** `var(--ease-in-out)`
- **Focus Ring:** `2px solid var(--ring)` with offset

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Form Labels:** Hidden label for screen readers (`.sr-only`)
- ✅ **ARIA Attributes:** `aria-required="true"` on email input
- ✅ **Focus States:** Visible 2px focus ring on input and button
- ✅ **Keyboard Navigation:** Full keyboard support
- ✅ **Error Handling:** Clear error messages with `role="alert"`
- ✅ **Success Feedback:** Success message with `role="status"`
- ✅ **Color Contrast:** All text exceeds 4.5:1 ratio

### Keyboard Interaction
- `Tab` — Navigate to email input
- `Tab` — Navigate to submit button
- `Enter` — Submit form (when focused on input or button)
- `Shift + Tab` — Navigate backwards

---

## Form Validation

### Built-in Validation
1. **Email Format:** HTML5 `type="email"` validation
2. **Required Field:** `required` attribute
3. **Real-time Feedback:** Error states on blur
4. **Success State:** Confirmation message after submission

### Validation States

**Default:**
```tsx
<input 
  type="email"
  placeholder="Enter your email"
  style={{ borderColor: 'var(--border)' }}
/>
```

**Error:**
```tsx
<input 
  type="email"
  aria-invalid="true"
  style={{ borderColor: 'var(--destructive)' }}
/>
<p role="alert" style={{ color: 'var(--destructive)' }}>
  Please enter a valid email address
</p>
```

**Success:**
```tsx
<input 
  type="email"
  disabled
  style={{ borderColor: 'var(--success)', backgroundColor: 'var(--success-muted)' }}
/>
<p role="status" style={{ color: 'var(--success)' }}>
  Thanks for subscribing!
</p>
```

---

## Section Style Variants

### 1. Default (Card Style)
```tsx
<NewsletterSignup />
```
- White/dark card background
- Subtle border
- Centered layout

### 2. Gradient Brand
```tsx
// Use sectionStyle="gradient-brand" on parent Section
<Section sectionStyle="gradient-brand">
  <NewsletterSignup />
</Section>
```
- Gradient background
- High contrast text
- Eye-catching

### 3. Muted Background
```tsx
// Use background="muted" on parent Section
<Section background="muted">
  <NewsletterSignup />
</Section>
```
- Subtle background
- Integrated look

---

## Template Integration Examples

### Blog Index Template
```tsx
import { NewsletterSignup } from '../patterns/NewsletterSignup';

// After FAQ Section
<FAQSection faqs={blogFAQs} />

<NewsletterSignup 
  heading="Never Miss a Post"
  description="Get our latest WordPress tutorials and insights delivered to your inbox"
/>
```

### About Template
```tsx
<NewsletterSignup 
  heading="Stay Connected"
  description="Join our newsletter for company updates and industry insights"
/>
```

### Single Post Template
```tsx
// After post content
<NewsletterSignup 
  heading="Enjoyed This Article?"
  description="Subscribe for more WordPress tips and tutorials like this one"
  buttonText="Get More Tips"
/>
```

---

## Email Service Provider Integration

### Mailchimp Example
```tsx
const handleSubmit = async (email: string) => {
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      // Show success message
      setStatus('success');
    } else {
      // Show error message
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};

<NewsletterSignup 
  onSubmit={handleSubmit}
  successMessage="Check your email to confirm your subscription"
/>
```

---

## Best Practices

### DO ✅
- Keep copy concise and benefit-focused
- Use a single email input (don't ask for name unless necessary)
- Include privacy reassurance text
- Show clear success feedback
- Make the button copy action-oriented ("Subscribe", "Get Updates", "Join Now")
- Test email validation with various formats

### DON'T ❌
- Ask for too much information (friction)
- Use generic copy ("Sign up here")
- Hide privacy policy
- Use vague error messages
- Make the form too prominent (avoid popup timing issues)
- Forget to handle loading states

---

## Performance Considerations

### Optimization Strategies
1. **Lazy Loading:** Load email service provider SDK only when needed
2. **Debouncing:** Debounce email validation (500ms)
3. **Progressive Enhancement:** Form works without JavaScript
4. **Error Handling:** Graceful fallbacks for API failures

---

## Related Patterns

- **CTAInline** — Compact mid-content CTA alternative
- **CTASection** — Full-width primary CTA
- **ArchiveCTA** — Archive-specific CTA with enquiry modal

---

## Common Variations

### Inline Form (Horizontal Layout)
```tsx
// For desktop-only horizontal layout
<div style={{ display: 'flex', gap: '0.75rem' }}>
  <input type="email" style={{ flex: 1 }} />
  <button type="submit">Subscribe</button>
</div>
```

### With Social Proof
```tsx
<NewsletterSignup 
  description="Join 10,000+ WordPress professionals getting weekly insights"
/>
```

### Footer Newsletter
```tsx
// Compact version for footer
<NewsletterSignup 
  heading="Newsletter"
  description="Weekly WordPress tips"
  buttonText="→"
/>
```

---

## Testing Checklist

- [ ] Email validation works correctly
- [ ] Error messages display properly
- [ ] Success message appears after submission
- [ ] Form is keyboard accessible
- [ ] Focus states are visible
- [ ] Screen reader announces form states
- [ ] Works with JavaScript disabled (progressive enhancement)
- [ ] Mobile layout is responsive
- [ ] Submission works with email service provider
- [ ] Privacy text is readable

---

**Last Updated:** December 27, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
