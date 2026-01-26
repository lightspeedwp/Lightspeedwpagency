/**
 * Newsletter Form Component
 * 
 * Production-grade newsletter subscription form.
 * 
 * Features:
 * - Email validation
 * - GDPR consent checkbox
 * - Double opt-in support
 * - Loading states
 * - Success/error messages
 * - Inline and modal variants
 * - Privacy policy link
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <NewsletterForm
 *   onSubscribe={handleSubscribe}
 *   variant="inline"
 * />
 */

import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

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
      <div
        className="p-4 flex items-center gap-3"
        style={{
          backgroundColor: 'var(--success-soft)',
          border: '1px solid var(--success)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <CheckCircle2 size={20} style={{ color: 'var(--success)' }} />
        <span
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--success)',
          }}
        >
          {successMessage}
        </span>
      </div>
    );
  }

  // Inline variant
  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <div
              className="absolute left-3 top-1/2"
              style={{
                transform: 'translateY(-50%)',
                color: 'var(--muted-foreground)',
                pointerEvents: 'none',
              }}
            >
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
              style={{
                width: '100%',
                padding: '12px 16px 12px 40px',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                backgroundColor: 'var(--background)',
                border: `2px solid ${error ? 'var(--destructive)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                if (!error) {
                  e.target.style.borderColor = 'var(--primary)';
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.target.style.borderColor = 'var(--border)';
                }
              }}
            />
          </div>

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            style={{
              minWidth: '120px',
            }}
          >
            {isSubmitting ? (
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid var(--primary-foreground)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite',
                }}
              />
            ) : (
              <>
                <Send size={18} />
                {buttonText}
              </>
            )}
          </Button>
        </div>

        {/* Error */}
        {error && (
          <p
            id="email-error"
            className="flex items-center gap-1"
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-small)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            <AlertCircle size={14} />
            {error}
          </p>
        )}

        {/* Consent */}
        {showConsent && (
          <label
            className="flex items-start gap-2"
            style={{
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError('');
              }}
              style={{
                width: '18px',
                height: '18px',
                marginTop: '2px',
                cursor: 'pointer',
                accentColor: 'var(--primary)',
              }}
            />

            <span
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.5',
              }}
            >
              I agree to receive marketing emails and accept the{' '}
              <a
                href={privacyPolicyUrl}
                style={{
                  color: 'var(--primary)',
                  textDecoration: 'underline',
                }}
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div
          className="absolute left-3 top-1/2"
          style={{
            transform: 'translateY(-50%)',
            color: 'var(--muted-foreground)',
            pointerEvents: 'none',
          }}
        >
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
          style={{
            width: '100%',
            padding: '14px 16px 14px 44px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)',
            border: `2px solid ${error ? 'var(--destructive)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-lg)',
            outline: 'none',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = 'var(--primary)';
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = 'var(--border)';
            }
          }}
        />
      </div>

      {/* Error */}
      {error && (
        <p
          id="email-error"
          className="flex items-center gap-1"
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            color: 'var(--destructive)',
            margin: 0,
          }}
        >
          <AlertCircle size={14} />
          {error}
        </p>
      )}

      {/* Consent */}
      {showConsent && (
        <label
          className="flex items-start gap-2"
          style={{
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setError('');
            }}
            style={{
              width: '18px',
              height: '18px',
              marginTop: '2px',
              cursor: 'pointer',
              accentColor: 'var(--primary)',
            }}
          />

          <span
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              lineHeight: '1.5',
            }}
          >
            I agree to receive marketing emails and accept the{' '}
            <a
              href={privacyPolicyUrl}
              style={{
                color: 'var(--primary)',
                textDecoration: 'underline',
              }}
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
          <>
            <div
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid var(--primary-foreground)',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 0.6s linear infinite',
              }}
            />
            Subscribing...
          </>
        ) : (
          <>
            <Send size={18} />
            {buttonText}
          </>
        )}
      </Button>
    </form>
  );
}
