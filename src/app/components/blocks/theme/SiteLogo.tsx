/**
 * Site Logo Block
 * 
 * WordPress Block: `core/site-logo`
 * Category: Theme
 * Introduced: WordPress 5.9
 * 
 * Displays a graphical logo with centralized management. Updating the logo
 * in one place updates it across the entire site. Typically placed in headers
 * or footers for consistent brand identity.
 * 
 * **Design System:**
 * - Uses CSS variables for theme switching (light/dark)
 * - Maintains aspect ratio automatically
 * - Supports responsive sizing
 * - SVG preferred for scalability
 * 
 * **Accessibility:**
 * - Descriptive alt text required
 * - ARIA label for home link
 * - High contrast against background
 * 
 * @see {@link /guidelines/blocks/theme/site-logo.md}
 */

import React from 'react';
import { Logo } from '../../common/Logo';

/**
 * Site Logo Props
 * 
 * Defines all configuration options for the Site Logo block.
 */
export interface SiteLogoProps {
  /**
   * Image source URL
   * 
   * Prefer SVG for scalability. If using PNG, provide @2x for retina.
   * 
   * @example
   * src="/assets/logo.svg"
   */
  src?: string;
  
  /**
   * Alternative text describing the logo
   * 
   * Should describe the organization, not just say "logo".
   * Required for accessibility.
   * 
   * @example
   * alt="LSX Design Logo"
   */
  alt: string;
  
  /**
   * Width of the logo in pixels or CSS value
   * 
   * Height adjusts automatically to maintain aspect ratio.
   * 
   * **Recommended sizes:**
   * - Header: 120-200px
   * - Footer: 100-160px
   * - Mobile: 100-140px
   * 
   * @default "150px"
   * 
   * @example
   * width="180px"
   * 
   * @example
   * width={200}
   */
  width?: string | number;
  
  /**
   * URL to link the logo to
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
   * when logo is linked.
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
   * Use for spacing, display, or alignment adjustments.
   * 
   * @example
   * className="mx-auto mb-4"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use sparingly. Prefer CSS variables and Tailwind classes.
   * 
   * @example
   * style={{ maxWidth: '200px' }}
   */
  style?: React.CSSProperties;
  
  /**
   * Theme variant for logo
   * 
   * Determines logo color scheme based on background.
   * 
   * @default "light"
   * 
   * @example
   * theme="dark"
   */
  theme?: 'light' | 'dark';
  
  /**
   * Click handler (optional)
   * 
   * Custom behavior when logo is clicked. If not provided,
   * uses linkHref for navigation.
   * 
   * @example
   * onClick={() => navigate('/')}
   */
  onClick?: () => void;
}

/**
 * Site Logo Component
 * 
 * Renders the LSX Design logo with WordPress block parity.
 * Uses the existing Logo component with enhanced props for
 * WordPress compatibility.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:site-logo {"width":150} /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "styles": {
 *   "blocks": {
 *     "core/site-logo": {
 *       "spacing": {
 *         "margin": {
 *           "top": "0",
 *           "bottom": "0"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * @param props - SiteLogoProps
 * @returns Branded logo with optional link wrapper
 * 
 * @example
 * // Basic usage (default logo)
 * <SiteLogo alt="LSX Design Logo" />
 * 
 * @example
 * // Custom size
 * <SiteLogo 
 *   alt="LSX Design Logo" 
 *   width="200px" 
 * />
 * 
 * @example
 * // Dark theme (for dark backgrounds)
 * <SiteLogo 
 *   alt="LSX Design Logo" 
 *   theme="dark" 
 * />
 * 
 * @example
 * // With custom link
 * <SiteLogo 
 *   alt="LSX Design Logo" 
 *   linkHref="/" 
 *   linkLabel="Return to homepage" 
 * />
 * 
 * @example
 * // Custom image source
 * <SiteLogo 
 *   src="/custom-logo.svg" 
 *   alt="Custom Logo" 
 *   width="180px" 
 * />
 */
export function SiteLogo({
  src,
  alt,
  width = '150px',
  linkHref = '/',
  linkLabel = 'Home',
  className = '',
  style,
  theme = 'light',
  onClick
}: SiteLogoProps) {
  // Convert width to number if it's a pixel string
  const widthValue = typeof width === 'string' 
    ? parseInt(width.replace('px', '')) 
    : width;
  
  // Calculate height maintaining aspect ratio (168:70 = 2.4:1)
  const heightValue = Math.round(widthValue / 2.4);
  
  // If using default LSX Design logo
  const isDefaultLogo = !src;
  
  const logoElement = isDefaultLogo ? (
    <Logo 
      width={widthValue} 
      height={heightValue} 
      theme={theme}
      className=""
    />
  ) : (
    <img
      src={src}
      alt={alt}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: 'auto',
        display: 'block',
        maxWidth: '100%'
      }}
    />
  );
  
  // Wrapper classes
  const wrapperClasses = `wp-block-site-logo ${className}`.trim();
  
  // If logo should be linked
  if (linkHref && linkHref !== '') {
    return (
      <div className={wrapperClasses} style={style}>
        <a
          href={linkHref}
          aria-label={linkLabel}
          onClick={onClick}
          style={{
            display: 'inline-block',
            lineHeight: 0
          }}
        >
          {logoElement}
        </a>
      </div>
    );
  }
  
  // Logo without link
  return (
    <div className={wrapperClasses} style={style}>
      {logoElement}
    </div>
  );
}
