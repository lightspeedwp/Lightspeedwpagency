# Newsletter Form Block

**Block:** `forms/newsletter-form`
**CSS:** `/src/styles/blocks/forms/newsletter-form.css`

A production-grade newsletter subscription form with validation, GDPR consent, and loading states.

## Features
- Email validation
- GDPR consent checkbox
- Loading/Success/Error states
- Inline and Stacked variants
- Privacy policy link support

## Component

```tsx
import { NewsletterForm } from '@/app/components/blocks/forms/NewsletterForm';

<NewsletterForm
  onSubscribe={async (email) => {
    await subscribeToNewsletter(email);
  }}
  variant="inline" // or "stacked"
  showConsent={true}
  buttonText="Subscribe"
/>
```

## Structure

- `.wp-block-newsletter-form`: Main container
- `.wp-block-newsletter-form--inline`: Inline variant modifier
- `.wp-block-newsletter-form--stacked`: Stacked variant modifier
- `.wp-block-newsletter-form__success`: Success message container
- `.wp-block-newsletter-form__input-wrapper`: Input container with icon
- `.wp-block-newsletter-form__input`: Email input
- `.wp-block-newsletter-form__icon`: Input icon
- `.wp-block-newsletter-form__error`: Error message
- `.wp-block-newsletter-form__consent`: GDPR consent checkbox wrapper
- `.wp-block-newsletter-form__submit-icon`: Loading spinner or icon

## CSS Variables

Uses standard design tokens:
- Colors: `var(--success)`, `var(--destructive)`, `var(--primary)`, `var(--background)`
- Typography: `var(--font-primary)`, `var(--text-base)`, `var(--text-small)`
- Spacing: `var(--spacing-*)`
- Radius: `var(--radius-lg)`

**Status:** ✅ MIGRATED | **Design System:** 100% Compliant
