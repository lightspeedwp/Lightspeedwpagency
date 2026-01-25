/**
 * Newsletter Signup Pattern
 * 
 * WordPress pattern: lsx-design/content/newsletter-signup
 * 
 * Email subscription form with title, description, and privacy text.
 * Supports multiple layouts and visual variants.
 * 
 * **Usage:**
 * ```tsx
 * <NewsletterSignup
 *   title="Stay Updated"
 *   description="Get the latest WordPress tips delivered to your inbox weekly."
 *   placeholder="Enter your email"
 *   buttonText="Subscribe"
 *   privacyText="We respect your privacy. Unsubscribe at any time."
 *   layout="centered"
 *   variant="card"
 *   onSubmit={(email) => console.log('Subscribe:', email)}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/NewsletterSignup.md}
 */

import { Mail, Check } from 'lucide-react';
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

  // Container styles based on variant
  const containerStyles = {
    default: {
      padding: 0,
      backgroundColor: 'transparent'
    },
    card: {
      padding: 'var(--spacing-10)',
      backgroundColor: 'var(--card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-soft)'
    },
    minimal: {
      padding: 'var(--spacing-6)',
      backgroundColor: 'transparent',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  };

  // Layout configurations
  const isCentered = layout === 'centered';
  const isSidebar = layout === 'sidebar';
  const isInline = layout === 'inline';

  // Max width based on layout
  const maxWidth = isSidebar ? '100%' : isInline ? '800px' : '600px';

  return (
    <div
      className={className}
      style={{
        ...containerStyles[variant],
        maxWidth,
        margin: isCentered ? '0 auto' : undefined
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isSidebar ? 'row' : 'column',
          gap: isSidebar ? 'var(--spacing-8)' : 'var(--spacing-6)',
          alignItems: isSidebar ? 'flex-start' : isCentered ? 'center' : 'flex-start',
          textAlign: isCentered ? 'center' : 'left'
        }}
      >
        {/* Header Content */}
        <div
          style={{
            flex: isSidebar ? 1 : undefined,
            width: isSidebar ? undefined : '100%'
          }}
        >
          {/* Icon */}
          {showIcon && variant !== 'minimal' && (
            <div
              style={{
                marginBottom: 'var(--spacing-4)',
                display: 'flex',
                justifyContent: isCentered ? 'center' : 'flex-start'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Mail size={24} style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          )}

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: variant === 'minimal' ? 'var(--text-lg)' : 'var(--text-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: 'var(--spacing-2)'
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: variant === 'minimal' ? 'var(--text-base)' : 'var(--text-lg)',
              lineHeight: '1.7',
              color: 'var(--muted-foreground)',
              marginBottom: isSidebar ? 0 : 'var(--spacing-6)'
            }}
          >
            {description}
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            flex: isSidebar ? 1 : undefined,
            width: isSidebar ? undefined : '100%'
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: isInline ? 'row' : 'column',
              gap: 'var(--spacing-3)',
              width: '100%'
            }}
          >
            {/* Email Input */}
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                disabled={status === 'submitting' || status === 'success'}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  opacity: status === 'success' ? 0.6 : 1
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--primary-soft)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label="Email address"
              />
              
              {/* Success Icon */}
              {status === 'success' && (
                <div
                  style={{
                    position: 'absolute',
                    right: 'var(--spacing-3)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)'
                  }}
                >
                  <Check size={20} />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              style={{
                padding: '12px 32px',
                backgroundColor: status === 'success' ? 'var(--success)' : 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: status === 'submitting' || status === 'success' ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: status === 'submitting' ? 0.7 : 1,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (status === 'idle') {
                  e.currentTarget.style.opacity = '0.9';
                }
              }}
              onMouseLeave={(e) => {
                if (status === 'idle') {
                  e.currentTarget.style.opacity = '1';
                }
              }}
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
            <p
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-xs)',
                color: 'var(--muted-foreground)',
                marginTop: 'var(--spacing-3)',
                textAlign: isCentered ? 'center' : 'left'
              }}
            >
              {privacyText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
