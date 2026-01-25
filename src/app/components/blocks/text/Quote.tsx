/**
 * Quote Block Component
 * 
 * WordPress Block: core/quote
 * Category: Text Blocks
 * 
 * @see /guidelines/blocks/text/quote.md
 * @see /src/styles/blocks/text/quote.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-quote)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/text/quote.css';
import React from 'react';

export interface QuoteProps {
  /** Quote content */
  children: React.ReactNode;
  
  /** Citation/attribution */
  citation?: string;
  
  /** Quote style variant */
  variant?: 'default' | 'pullquote' | 'testimonial' | 'large' | 'compact';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Quote Block
 * 
 * Displays quotations, testimonials, or cited text.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Simple quote
 * <Quote>
 *   This is a great quote that emphasizes an important point.
 * </Quote>
 * 
 * // Quote with citation
 * <Quote citation="Jane Doe, CEO">
 *   Working with LSX Design transformed our online presence.
 * </Quote>
 * 
 * // Pull quote
 * <Quote variant="pullquote" align="center">
 *   Design is not just what it looks like. Design is how it works.
 * </Quote>
 * 
 * // Testimonial
 * <Quote variant="testimonial" citation="John Smith, Founder">
 *   LSX Design delivered a WordPress theme that exceeded all expectations.
 * </Quote>
 * ```
 */
export function Quote({
  children,
  citation,
  variant = 'default',
  align = 'left',
  className = ''
}: QuoteProps) {
  // Build BEM classes
  const blockClass = 'wp-block-quote';
  const variantClass = variant !== 'default' ? `${blockClass}--${variant}` : '';
  const alignClass = `${blockClass}--${align}`;
  const classes = [blockClass, variantClass, alignClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <blockquote className={classes}>
      <p className={`${blockClass}__content`}>
        {children}
      </p>
      {citation && (
        <cite className={`${blockClass}__citation`}>
          {citation}
        </cite>
      )}
    </blockquote>
  );
}
