/**
 * Newsletter Signup Pattern
 * 
 * WordPress pattern: lsx-design/content/newsletter-signup
 * 
 * Email subscription form with title, description, and privacy text.
 * Supports multiple layouts and visual variants.
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/newsletter-signup.css
 * - 100% CSS variables
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/newsletter-signup.css
 */

import { EnvelopeSimple as Mail, Check } from '@phosphor-icons/react';
import { useState } from 'react';


export interface NewsletterSignupProps {
  /** Main heading */
  title: string;
  /** Description text */
  description: string;
  /** Email input placeholder */
  placeholder?: string;
  /** Submit button text */
  buttonText?: string;
  /** Privacy/GDPR text */
  privacyText?: string;
  /** Layout orientation */
  layout?: 'centered' | 'inline' | 'sidebar';
  /** Visual variant */
  variant?: 'default' | 'card' | 'minimal';
  /** Show icon */
  showIcon?: boolean;
  /** Submit handler */
  onSubmit?: (email: string) => void;
  /** Custom className */
  className?: string;
}

export function NewsletterSignup({
  title,
  description,
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  privacyText,
  layout = 'centered',
  variant = 'default',
  showIcon = true,
  onSubmit,
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      onSubmit?.(email);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  // Build component classes
  const containerClasses = [
    'newsletter-signup',
    `newsletter-signup--${variant}`,
    `newsletter-signup--${layout}`,
    className
  ].filter(Boolean).join(' ');

  const titleClasses = [
    'newsletter-signup__title',
    `newsletter-signup__title--${variant}`
  ].join(' ');

  const descClasses = [
    'newsletter-signup__description',
    `newsletter-signup__description--${variant}`
  ].join(' ');

  const buttonClasses = [
    'newsletter-signup__button',
    status === 'success' ? 'newsletter-signup__button--success' : ''
  ].filter(Boolean).join(' ');

  // Max width override for layout styles (handled by CSS generally but keeping prop logic)
  const maxWidth = layout === 'sidebar' ? '100%' : layout === 'inline' ? '800px' : '600px';

  return (
    <div className={containerClasses} style={{ maxWidth, margin: layout === 'centered' ? '0 auto' : undefined }}>
      <div className="newsletter-signup__content">
        {/* Header Content */}
        <div className="newsletter-signup__header">
          {/* Icon */}
          {showIcon && variant !== 'minimal' && (
            <div className="newsletter-signup__icon-wrapper">
              <div className="newsletter-signup__icon">
                <Mail size={24} />
              </div>
            </div>
          )}

          {/* Title */}
          <h2 className={titleClasses}>
            {title}
          </h2>

          {/* Description */}
          <p className={descClasses}>
            {description}
          </p>
        </div>

        {/* Form */}
        <div className="newsletter-signup__form-wrapper">
          <form className="newsletter-signup__form" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="newsletter-signup__input-wrapper">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                disabled={status === 'submitting' || status === 'success'}
                className="newsletter-signup__input"
                aria-label="Email address"
              />
              
              {/* Success Icon */}
              {status === 'success' && (
                <div className="newsletter-signup__success-icon">
                  <Check size={20} />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={buttonClasses}
            >
              {status === 'submitting' && 'Subscribing...'}
              {status === 'success' && (
                <>
                  <Check size={16} />
                  Subscribed!
                </>
              )}
              {status === 'idle' && buttonText}
              {status === 'error' && 'Try Again'}
            </button>
          </form>

          {/* Privacy Text */}
          {privacyText && (
            <p className="newsletter-signup__privacy">
              {privacyText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
