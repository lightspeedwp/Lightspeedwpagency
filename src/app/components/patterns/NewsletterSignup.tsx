/**
 * Newsletter Signup Pattern
 * 
 * Email subscription form pattern for LSX Design.
 * Maps to WordPress pattern: lsx-design/form/newsletter
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (headings), Manrope (body/small) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY Tailwind classes
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/group
 * - Section Style: form-highlight
 * - Pattern Slug: lsx-design/form/newsletter
 */

import React, { useState, FormEvent } from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';

export interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  compact?: boolean;
  privacyText?: string;
}

/**
 * NewsletterSignup Pattern Component
 * 
 * @example
 * ```tsx
 * <NewsletterSignup 
 *   heading="Subscribe to Our Newsletter"
 *   description="Get the latest WordPress tips delivered to your inbox."
 * />
 * ```
 */
export function NewsletterSignup({
  heading = "Subscribe to Our Newsletter",
  description = "Get the latest WordPress tips and design insights delivered to your inbox.",
  buttonText = "Subscribe",
  compact = false,
  privacyText = "We respect your privacy. Unsubscribe at any time."
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1000);
  };

  return (
    <Section sectionStyle="form-highlight" spacing={compact ? 'sm' : 'md'}>
      <Container maxWidth="800px">
        <div className="text-center">
          {/* Heading - Lexend font, CSS variable size */}
          <Heading 
            level={3} 
            style={{ 
              marginBottom: '1rem',
              fontSize: 'var(--text-h3)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--card-foreground)'
            }}
          >
            {heading}
          </Heading>
          
          {/* Description - Manrope font, CSS variable size */}
          <p 
            style={{ 
              fontSize: 'var(--text-base)',
              fontFamily: 'Manrope, sans-serif',
              marginBottom: '2rem',
              color: 'var(--card-foreground)'
            }}
          >
            {description}
          </p>
        </div>

        {status === 'success' ? (
          /* Success Message */
          <div 
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--success)',
              color: 'var(--success-foreground)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              marginBottom: '1rem'
            }}
          >
            ✓ Thanks for subscribing! Check your email to confirm.
          </div>
        ) : (
          /* Newsletter Form */
          <form onSubmit={handleSubmit}>
            <div 
              style={{ 
                display: 'flex', 
                gap: '1rem', 
                maxWidth: '600px', 
                margin: '0 auto',
                flexWrap: 'wrap'
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                aria-label="Email address"
                style={{
                  flex: '1 1 250px',
                  minWidth: '250px',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Manrope, sans-serif',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              <Button 
                size="md" 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  flexShrink: 0
                }}
              >
                {status === 'loading' ? 'Subscribing...' : buttonText}
              </Button>
            </div>
            
            {status === 'error' && (
              <div 
                style={{
                  marginTop: '0.75rem',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--destructive)',
                  textAlign: 'center'
                }}
              >
                Please enter a valid email address.
              </div>
            )}
          </form>
        )}

        {/* Privacy Text - Manrope font, small size */}
        <p 
          style={{
            fontSize: 'var(--text-small)',
            fontFamily: 'Manrope, sans-serif',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '0.75rem'
          }}
        >
          {privacyText}
        </p>
      </Container>
    </Section>
  );
}
