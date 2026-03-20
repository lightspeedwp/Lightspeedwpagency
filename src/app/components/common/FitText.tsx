/**
 * Fit Text Component
 * 
 * WordPress 6.9+ Feature: Fit text to container
 * 
 * Creates high-impact, responsive text that automatically adjusts font size 
 * to fill container width perfectly. Implements the WordPress 6.9 "Fit text to container"
 * feature for Paragraph and Heading blocks.
 * 
 * **Design System:**
 * - Uses CSS container queries (modern browsers)
 * - Fallback to clamp() for older browsers
 * - Only Lexend font family
 * - CSS variables for all styling
 * 
 * **Use Cases:**
 * - Hero banners
 * - Callout sections
 * - Impact headlines
 * - CTA sections
 * - Standout moments
 * 
 * **Best practices:**
 * - Use for short text (1-5 words)
 * - Keep single line only
 * 
 * **WordPress Mapping:**
 * Maps to Paragraph/Heading blocks with "Fit text to container" enabled
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <FitText>
 *   BOLD STATEMENT
 * </FitText>
 * 
 * // With custom styling
 * <FitText
 *   as="h1"
 *   containerSize={12}
 *   className="wp-text-primary"
 * >
 *   Get Started Today
 * </FitText>
 * 
 * // In a hero section
 * <Section className="wp-bg-primary">
 *   <Container>
 *     <FitText as="h1" containerSize={15}>
 *       BUILD BETTER SITES
 *     </FitText>
 *   </Container>
 * </Section>
 * ```
 */

import { CSSProperties, ReactNode } from 'react';

export interface FitTextProps {
  /**
   * Text content to display (single line recommended)
   */
  children: ReactNode;
  
  /**
   * HTML element to render
   * @default 'h1'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  
  /**
   * Container query size percentage (1-20)
   * Lower = smaller text, Higher = larger text
   * @default 10
   */
  containerSize?: number;
  
  /**
   * Text alignment
   * @default 'center'
   */
  textAlign?: 'left' | 'center' | 'right';
  
  /**
   * Font weight
   * @default 'var(--font-weight-bold)'
   */
  fontWeight?: string;
  
  /**
   * Line height
   * @default '1.1'
   */
  lineHeight?: string;
  
  /**
   * Letter spacing
   * @default '-0.02em'
   */
  letterSpacing?: string;
  
  /**
   * Additional inline styles
   */
  style?: CSSProperties;
  
  /**
   * CSS class name
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * FitText Component
 * 
 * Implements WordPress 6.9's "Fit text to container" feature using CSS container queries
 * with fallback to clamp() for older browsers.
 */
export function FitText({
  children,
  as = 'h1',
  containerSize = 10,
  textAlign = 'center',
  fontWeight = 'var(--font-weight-bold)',
  lineHeight = '1.1',
  letterSpacing = '-0.02em',
  style = {},
  className = '',
  ariaLabel
}: FitTextProps) {
  const Component = as;
  
  // Clamp size based on containerSize for fallback
  // containerSize 10 = clamp(2rem, 10vw, 8rem)
  // containerSize 15 = clamp(3rem, 15vw, 12rem)
  const minSize = Math.max(2, containerSize / 5);
  const maxSize = Math.max(8, containerSize * 0.8);
  const clampFallback = `clamp(${minSize}rem, ${containerSize}vw, ${maxSize}rem)`;
  
  return (
    <div
      style={{
        containerType: 'inline-size',
        width: '100%'
      }}
      className={className}
    >
      <Component
        className="wp-w-full wp-m-0 wp-font-primary"
        style={{
          // Use clamp() for responsive sizing (works in all modern browsers)
          fontSize: clampFallback,
          fontWeight,
          lineHeight,
          letterSpacing,
          textAlign,
          ...style
        }}
        aria-label={ariaLabel}
      >
        {children}
      </Component>
    </div>
  );
}

/**
 * FitTextParagraph
 * 
 * Specialized version for paragraph blocks with "Fit text to container"
 */
export function FitTextParagraph({
  children,
  containerSize = 8,
  ...props
}: Omit<FitTextProps, 'as'>) {
  return (
    <FitText
      as="p"
      containerSize={containerSize}
      fontWeight="var(--font-weight-semibold)"
      {...props}
    >
      {children}
    </FitText>
  );
}

/**
 * FitTextHeading
 * 
 * Specialized version for heading blocks with "Fit text to container"
 */
export function FitTextHeading({
  children,
  level = 1,
  containerSize = 12,
  ...props
}: Omit<FitTextProps, 'as'> & { level?: 1 | 2 | 3 | 4 }) {
  const as = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  
  return (
    <FitText
      as={as}
      containerSize={containerSize}
      {...props}
    >
      {children}
    </FitText>
  );
}

/**
 * FitTextCallout
 * 
 * Pre-styled callout with background for CTAs
 */
export function FitTextCallout({
  children,
  backgroundColor = 'var(--accent)',
  color = 'var(--accent-foreground)',
  containerSize = 8,
  ...props
}: FitTextProps & {
  backgroundColor?: string;
  color?: string;
}) {
  return (
    <div
      className="wp-px-6 wp-py-12 wp-rounded-xl wp-mb-6"
      style={{
        backgroundColor,
      }}
    >
      <FitText
        as="p"
        containerSize={containerSize}
        fontWeight="var(--font-weight-semibold)"
        style={{ color }}
        {...props}
      >
        {children}
      </FitText>
    </div>
  );
}