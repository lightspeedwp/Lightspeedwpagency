/**
 * Newsletter Form Block Component
 * 
 * WordPress Block: forms/newsletter-form
 * 
 * Production-grade newsletter subscription form.
 * 
 * @see /src/styles/blocks/forms/newsletter-form.css
 */

import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../../blocks/design/Buttons';

export interface NewsletterFormProps {
  /** Subscribe handler */
  onSubscribe: (email: string) => Promise<void> | void;
  /** Variant */
  variant?: 'inline' | 'stacked';
  /** Show GDPR consent */
  showConsent?: boolean;
  /** Privacy policy URL */
  privacyPolicyUrl?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Button text */
  buttonText?: string;
  /** Success message */
  successMessage?: string;
}

export function NewsletterForm({
  onSubscribe,
  variant = 'inline',
  showConsent = true,
  privacyPolicyUrl = '/privacy-policy',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Thanks for subscribing!',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate email
  const validateEmail = (value: string): string => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    // Check consent
    if (showConsent && !consent) {
      setError('Please accept the privacy policy');
      return;
    }

    // Submit
    setIsSubmitting(true);
    setError('');

    try {
      await onSubscribe(email);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail('');
        setConsent(false);
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="wp-block-newsletter-form__success">
        <CheckCircle2 size={20} className="wp-block-newsletter-form__success-icon" />
        <span className="wp-block-newsletter-form__success-text">
          {successMessage}
        </span>
      </div>
    );
  }

  // Inline variant
  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="wp-block-newsletter-form wp-block-newsletter-form--inline">
        <div className="wp-block-newsletter-form__row">
          <div className="wp-block-newsletter-form__input-wrapper">
            <div className="wp-block-newsletter-form__icon">
              <Mail size={18} />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder={placeholder}
              required
              aria-invalid={!!error}
              aria-describedby={error ? 'email-error' : undefined}
              className="wp-block-newsletter-form__input"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className="wp-block-newsletter-form__button"
          >
            {isSubmitting ? (
              <div className="wp-block-newsletter-form__spinner" />
            ) : (
              <div className="wp-block-newsletter-form__submit-content">
                <Send size={18} />
                {buttonText}
              </div>
            )}
          </Button>
        </div>

        {/* Error */}
        {error && (
          <p id="email-error" className="wp-block-newsletter-form__error">
            <AlertCircle size={14} />
            {error}
          </p>
        )}

        {/* Consent */}
        {showConsent && (
          <label className="wp-block-newsletter-form__consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError('');
              }}
              className="wp-block-newsletter-form__checkbox"
            />

            <span className="wp-block-newsletter-form__consent-text">
              I agree to receive marketing emails and accept the{' '}
              <a
                href={privacyPolicyUrl}
                className="wp-block-newsletter-form__link"
              >
                privacy policy
              </a>
            </span>
          </label>
        )}
      </form>
    );
  }

  // Stacked variant
  return (
    <form onSubmit={handleSubmit} className="wp-block-newsletter-form wp-block-newsletter-form--stacked">
      <div className="wp-block-newsletter-form__input-wrapper">
        <div className="wp-block-newsletter-form__icon">
          <Mail size={20} />
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder={placeholder}
          required
          aria-invalid={!!error}
          aria-describedby={error ? 'email-error' : undefined}
          className="wp-block-newsletter-form__input"
        />
      </div>

      {/* Error */}
      {error && (
        <p id="email-error" className="wp-block-newsletter-form__error">
          <AlertCircle size={14} />
          {error}
        </p>
      )}

      {/* Consent */}
      {showConsent && (
        <label className="wp-block-newsletter-form__consent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setError('');
            }}
            className="wp-block-newsletter-form__checkbox"
          />

          <span className="wp-block-newsletter-form__consent-text">
            I agree to receive marketing emails and accept the{' '}
            <a
              href={privacyPolicyUrl}
              className="wp-block-newsletter-form__link"
            >
              privacy policy
            </a>
          </span>
        </label>
      )}

      <Button
        type="submit"
        variant="default"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <div className="wp-block-newsletter-form__submit-content">
            <div className="wp-block-newsletter-form__spinner" />
            Subscribing...
          </div>
        ) : (
          <div className="wp-block-newsletter-form__submit-content">
            <Send size={18} />
            {buttonText}
          </div>
        )}
      </Button>
    </form>
  );
}
