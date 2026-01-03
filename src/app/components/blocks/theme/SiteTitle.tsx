/**
 * Site Title Block
 * 
 * WordPress Block: `core/site-title`
 * Category: Theme
 * Introduced: WordPress 5.9
 * 
 * Displays the site name with global updates. Editing the text updates
 * the site title across the entire site, affecting browser title bars
 * and search results.
 * 
 * **Design System:**
 * - Typography: Uses CSS variables (var(--text-h2), var(--text-h3))
 * - Colors: Uses semantic tokens (var(--primary), var(--foreground))
 * - Spacing: Uses Tailwind classes
 * - Font: Lexend (primary font)
 * 
 * **Accessibility:**
 * - Semantic heading levels (H1-H6)
 * - Proper heading hierarchy
 * - ARIA label for home link
 * - Color contrast (WCAG AA 4.5:1 minimum)
 * 
 * @see {@link /guidelines/blocks/theme/site-title.md}
 */

import React from 'react';

/**
 * Site Title Props
 * 
 * Defines all configuration options for the Site Title block.
 */
export interface SiteTitleProps {
  /**
   * HTML tag used to render the title
   * 
   * **Heading hierarchy guidelines:**
   * - Homepage: Use H1 for site title
   * - Subpages: Use H2 or H3 to allow page title as H1
   * - Footer: Use H2 or H3
   * 
   * @default "h1"
   * 
   * @example
   * tag="h1" // Homepage
   * 
   * @example
   * tag="h2" // Subpages
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  
  /**
   * The site title text
   * 
   * Typically the site name or brand name.
   * 
   * @example
   * children="LSX Design"
   */
  children: string;
  
  /**
   * URL to link the title to
   * 
   * Typically links to the home page.
   * Set to empty string to disable linking.
   * 
   * @default "/"
   * 
   * @example
   * linkHref="/"
   */
  linkHref?: string;
  
  /**
   * ARIA label for the link
   * 
   * Describes where the link goes. Required for accessibility
   * when title is linked.
   * 
   * @default "Home"
   * 
   * @example
   * linkLabel="Return to homepage"
   */
  linkLabel?: string;
  
  /**
   * Additional CSS classes
   * 
   * Use for spacing, alignment, or custom styling.
   * 
   * @example
   * className="text-center mb-4"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use CSS variables for consistency.
   * 
   * @example
   * style={{ fontSize: 'var(--text-h2)' }}
   */
  style?: React.CSSProperties;
  
  /**
   * Click handler (optional)
   * 
   * Custom behavior when title is clicked. If not provided,
   * uses linkHref for navigation.
   * 
   * @example
   * onClick={() => navigate('/')}
   */
  onClick?: () => void;
}

/**
 * Site Title Component
 * 
 * Renders the site name as a semantic heading with optional link.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:site-title {"level":1} /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "styles": {
 *   "blocks": {
 *     "core/site-title": {
 *       "typography": {
 *         "fontSize": "var(--text-h2)",
 *         "fontWeight": "var(--font-weight-semibold)"
 *       },
 *       "color": {
 *         "text": "var(--foreground)"
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * @param props - SiteTitleProps
 * @returns Semantic heading with optional link wrapper
 * 
 * @example
 * // Homepage (H1)
 * <SiteTitle tag="h1">LSX Design</SiteTitle>
 * 
 * @example
 * // Subpage header (H2)
 * <SiteTitle tag="h2" linkHref="/">LSX Design</SiteTitle>
 * 
 * @example
 * // With custom styling
 * <SiteTitle 
 *   tag="h1" 
 *   className="text-center"
 *   style={{ fontSize: 'var(--text-h1)' }}
 * >
 *   LSX Design
 * </SiteTitle>
 * 
 * @example
 * // Without link
 * <SiteTitle tag="h2" linkHref="">LSX Design</SiteTitle>
 */
export function SiteTitle({
  tag = 'h1',
  children,
  linkHref = '/',
  linkLabel = 'Home',
  className = '',
  style,
  onClick
}: SiteTitleProps) {
  // Create the heading element
  const Tag = tag;
  
  // Base styles using CSS variables
  const titleStyles: React.CSSProperties = {
    fontFamily: 'Lexend, sans-serif',
    fontSize: tag === 'h1' ? 'var(--text-h2)' : 'var(--text-h3)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--foreground)',
    margin: 0,
    lineHeight: 'var(--line-height-tight)',
    ...style
  };
  
  // Link styles
  const linkStyles: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };
  
  // Wrapper classes
  const wrapperClasses = `wp-block-site-title ${className}`.trim();
  
  // If title should be linked
  if (linkHref && linkHref !== '') {
    return (
      <Tag className={wrapperClasses} style={titleStyles}>
        <a
          href={linkHref}
          aria-label={linkLabel}
          onClick={onClick}
          style={linkStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--primary)';
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
  
  // Title without link
  return (
    <Tag className={wrapperClasses} style={titleStyles}>
      {children}
    </Tag>
  );
}
