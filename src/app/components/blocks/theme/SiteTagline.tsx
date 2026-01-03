/**
 * Site Tagline Block
 * 
 * WordPress Block: `core/site-tagline`
 * Category: Theme
 * Introduced: WordPress 5.9
 * 
 * Displays a short description or slogan for the website. Updates globally
 * when edited, appearing in search engines and social networks.
 * 
 * **Design System:**
 * - Typography: Uses CSS variables (var(--text-base), var(--text-small))
 * - Colors: Uses semantic tokens (var(--foreground-muted), var(--text-muted))
 * - Spacing: Uses Tailwind classes
 * - Font: Manrope (secondary font for body text)
 * 
 * **Accessibility:**
 * - Semantic HTML tags (p, span)
 * - Color contrast (WCAG AA 4.5:1 minimum)
 * - ARIA label for optional link
 * 
 * @see {@link /guidelines/blocks/theme/site-tagline.md}
 */

import React from 'react';

/**
 * Site Tagline Props
 * 
 * Defines all configuration options for the Site Tagline block.
 */
export interface SiteTaglineProps {
  /**
   * HTML tag used to render the tagline
   * 
   * Typically 'p' or 'span' depending on context.
   * 
   * @default "p"
   * 
   * @example
   * tag="p"
   * 
   * @example
   * tag="span"
   */
  tag?: 'p' | 'span' | 'div';
  
  /**
   * Tagline text content
   * 
   * Keep concise (under 120 characters). Should communicate
   * brand value proposition or mission.
   * 
   * @example
   * children="WordPress and WooCommerce web design experts"
   */
  children: string;
  
  /**
   * URL to link the tagline to
   * 
   * Optional. Only link if no other home link exists.
   * Set to empty string to disable linking.
   * 
   * @default ""
   * 
   * @example
   * linkHref="/"
   */
  linkHref?: string;
  
  /**
   * ARIA label for the link
   * 
   * Describes where the link goes. Required for accessibility
   * when tagline is linked.
   * 
   * @default "Home"
   * 
   * @example
   * linkLabel="Back to homepage"
   */
  linkLabel?: string;
  
  /**
   * Additional CSS classes
   * 
   * Use for spacing, alignment, or custom styling.
   * 
   * @example
   * className="text-center mt-2"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use CSS variables for consistency.
   * 
   * @example
   * style={{ fontSize: 'var(--text-small)' }}
   */
  style?: React.CSSProperties;
  
  /**
   * Click handler (optional)
   * 
   * Custom behavior when tagline is clicked. If not provided,
   * uses linkHref for navigation.
   * 
   * @example
   * onClick={() => navigate('/')}
   */
  onClick?: () => void;
}

/**
 * Site Tagline Component
 * 
 * Renders a descriptive slogan or mission statement for the site.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:site-tagline /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "styles": {
 *   "blocks": {
 *     "core/site-tagline": {
 *       "typography": {
 *         "fontSize": "var(--text-base)",
 *         "fontWeight": "var(--font-weight-regular)"
 *       },
 *       "color": {
 *         "text": "var(--text-muted)"
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * @param props - SiteTaglineProps
 * @returns Semantic text element with optional link wrapper
 * 
 * @example
 * // Basic usage
 * <SiteTagline>
 *   WordPress and WooCommerce web design experts
 * </SiteTagline>
 * 
 * @example
 * // With link
 * <SiteTagline linkHref="/" linkLabel="Home">
 *   Building high-performance WordPress sites
 * </SiteTagline>
 * 
 * @example
 * // Custom styling
 * <SiteTagline 
 *   tag="span" 
 *   className="text-center"
 *   style={{ fontSize: 'var(--text-small)' }}
 * >
 *   Modern block themes, design systems, and accessible websites
 * </SiteTagline>
 */
export function SiteTagline({
  tag = 'p',
  children,
  linkHref = '',
  linkLabel = 'Home',
  className = '',
  style,
  onClick
}: SiteTaglineProps) {
  // Create the text element
  const Tag = tag;
  
  // Base styles using CSS variables
  const taglineStyles: React.CSSProperties = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-regular)',
    color: 'var(--text-muted)',
    margin: 0,
    lineHeight: 'var(--line-height-normal)',
    ...style
  };
  
  // Link styles
  const linkStyles: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };
  
  // Wrapper classes
  const wrapperClasses = `wp-block-site-tagline ${className}`.trim();
  
  // If tagline should be linked
  if (linkHref && linkHref !== '') {
    return (
      <Tag className={wrapperClasses} style={taglineStyles}>
        <a
          href={linkHref}
          aria-label={linkLabel}
          onClick={onClick}
          style={linkStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--foreground)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'inherit';
          }}
        >
          {children}
        </a>
      </Tag>
    );
  }
  
  // Tagline without link
  return (
    <Tag className={wrapperClasses} style={taglineStyles}>
      {children}
    </Tag>
  );
}
