/**
 * LogoInline Component
 * 
 * WordPress concept: Site Logo block (`core/site-logo`)
 * Pattern: Site identity (inline SVG implementation)
 * 
 * Alternative logo implementation using inline SVG with text elements instead of paths.
 * Provides both full wordmark and compact icon-only variants.
 * Uses system fonts for reliable cross-browser rendering without external dependencies.
 * 
 * **Purpose:**
 * - Display brand identity with flexible sizing options
 * - Provide compact icon variant for mobile/limited space
 * - Use system fonts for faster rendering (no web font loading)
 * - Support light/dark themes with adaptive colors
 * 
 * **Variants:**
 * - 'full': Complete logo with icon + "LSX Design" wordmark (220×70px)
 * - 'compact': Icon only for favicons/mobile (48×68px)
 * 
 * **Differences from Logo.tsx:**
 * - Logo.tsx: Uses SVG paths for wordmark (more precise, web fonts required)
 * - LogoInline.tsx: Uses SVG text elements (faster, system fonts, fallbacks)
 * 
 * **When to use each:**
 * - Use Logo.tsx: Desktop header, footer, hero sections (precision matters)
 * - Use LogoInline.tsx: Mobile views, PWA icons, loading states (speed matters)
 * 
 * **Accessibility:**
 * - <title> element for screen readers
 * - Meaningful alt text when wrapped in links
 * - Proper ARIA labels on parent elements
 * - High contrast in both light/dark modes
 * - Scalable SVG for all screen sizes
 * 
 * **Design System:**
 * - Typography: Lexend font family (system font fallback)
 * - Icon colors: #FF3131 (brand red), #CC3F23 (brand dark red)
 * - Text colors: #111111 (light theme), #FFFFFF (dark theme)
 * - Maintains 2.4:1 aspect ratio (width:height)
 * 
 * **Performance:**
 * - Inline SVG (no HTTP request)
 * - System font fallback (no font loading delay)
 * - Lightweight: ~1.5KB
 * - Instant rendering on all devices
 * 
 * **WordPress theme.json mapping:**
 * ```json
 * "settings": {
 *   "custom": {
 *     "branding": {
 *       "logoFull": "220x70",
 *       "logoCompact": "48x68"
 *     }
 *   }
 * }
 * ```
 * 
 * @example
 * // Full logo (default) with light theme
 * <LogoInline theme="light" />
 * 
 * @example
 * // Compact icon only
 * <LogoInline variant="compact" theme="light" />
 * 
 * @example
 * // Full logo with dark theme
 * <LogoInline variant="full" theme="dark" />
 * 
 * @example
 * // Custom size full logo
 * <LogoInline width={300} height={96} theme="light" />
 * 
 * @example
 * // Compact icon for mobile header
 * <LogoInline variant="compact" width={40} height={57} theme="light" />
 * 
 * @example
 * // As clickable link (typical usage)
 * <button onClick={() => navigateTo('front-page')}>
 *   <LogoInline theme="light" />
 * </button>
 * 
 * @see {@link /guidelines/components/Logo.md}
 * @see {@link /guidelines/components/LogoInline.md}
 */

/**
 * LogoInline component props
 * 
 * Defines sizing, variant, theme, and styling options for the inline logo.
 */
interface LogoProps {
  /**
   * Logo width in pixels
   * 
   * Defaults based on variant:
   * - 'full': 220px (default full logo width)
   * - 'compact': 48px (default icon width)
   * 
   * **Sizing guidelines:**
   * - Full logo header: 220px
   * - Full logo footer: 180-200px
   * - Compact mobile: 40-48px
   * - Compact favicon: 32px
   * 
   * @example
   * width={300} // Larger full logo
   * 
   * @example
   * width={40} // Smaller compact icon
   */
  width?: number;
  
  /**
   * Logo height in pixels
   * 
   * Defaults based on variant:
   * - 'full': 70px (maintains 2.4:1 ratio with 220px width)
   * - 'compact': 68px (maintains icon proportions)
   * 
   * **Aspect ratio:**
   * - Full: width / 2.4 = height
   * - Compact: Fixed 48:68 ratio
   * 
   * @example
   * height={96} // For width={300}
   * 
   * @example
   * height={57} // For width={40} compact
   */
  height?: number;
  
  /**
   * Logo variant
   * 
   * Determines which logo version to display:
   * - 'full': Complete logo with icon + "LSX Design" wordmark
   * - 'compact': Icon only (lightning bolt)
   * 
   * **Use cases:**
   * - 'full': Desktop header, footer, hero sections
   * - 'compact': Mobile header, PWA icons, favicons, loading spinners
   * 
   * @default 'full'
   * 
   * @example
   * variant="full" // Full wordmark logo
   * 
   * @example
   * variant="compact" // Icon only
   */
  variant?: 'full' | 'compact';
  
  /**
   * Color theme based on background
   * 
   * Determines text color for proper contrast.
   * Icon colors are always fixed brand colors.
   * 
   * **Theme selection:**
   * - 'light': Use on light backgrounds (text is dark #111111)
   * - 'dark': Use on dark backgrounds (text is white #FFFFFF)
   * 
   * **Examples:**
   * - Site header (white bg): theme="light"
   * - Site footer (dark bg): theme="dark"
   * - Hero section (primary bg): theme="dark"
   * 
   * @default 'light'
   * 
   * @example
   * theme="light" // Dark text on light background
   * 
   * @example
   * theme="dark" // White text on dark background
   */
  theme?: 'light' | 'dark';
  
  /**
   * Additional Tailwind classes
   * 
   * Common use cases:
   * - Margins: mb-4, mt-6, mx-auto
   * - Display: inline-block, flex
   * - Mobile responsive: hidden md:block
   * 
   * **Note:** Container already has flex display
   * 
   * @example
   * className="wp-mb-6"
   * 
   * @example
   * className="wp-hidden md:wp-block" // Hide on mobile
   */
  className?: string;
}

/**
 * LogoInline Component
 * 
 * Renders the LSX Design logo as an inline SVG with text elements.
 * Supports both full wordmark and compact icon variants.
 * 
 * @param props - LogoProps
 * @returns SVG logo with adaptive theming and variant support
 */
export function LogoInline({ 
  width, 
  height, 
  variant = 'full', 
  theme = 'light', 
  className = '' 
}: LogoProps) {
  /**
   * Set default dimensions based on variant
   * 
   * Full variant: 220×70px (desktop header standard)
   * Compact variant: 48×68px (mobile icon standard)
   */
  const defaultWidth = variant === 'compact' ? 48 : 220;
  const defaultHeight = variant === 'compact' ? 68 : 70;
  const w = width ?? defaultWidth;
  const h = height ?? defaultHeight;
  
  /**
   * Determine text color based on theme
   * 
   * Light theme: Dark text (#111111) for light backgrounds
   * Dark theme: White text (#FFFFFF) for dark backgrounds
   * 
   * Icon colors are always fixed:
   * - Primary: var(--logo-icon-primary) (brand red)
   * - Secondary: var(--logo-icon-secondary) (brand dark red/orange)
   */
  const textColor = theme === 'dark' ? 'var(--color-white)' : 'var(--foreground)';
  
  // Icon only (compact variant)
  if (variant === 'compact') {
    return (
      <div className={`wp-flex wp-items-center ${className || ''}`}>
        <svg width={w} height={h} viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>LSX Design</title>
          <g id="Icon">
            <path id="Icon/Primary" fill="var(--logo-icon-primary)" d="M10 10 L35 32 L22 32 L38 58 L20 36 L30 36 Z"/>
            <path id="Icon/Secondary" fill="var(--logo-icon-secondary)" d="M35 32 L38 58 L22 32 Z"/>
          </g>
        </svg>
      </div>
    );
  }
  
  // Full logo with wordmark
  return (
    <div className={`wp-flex wp-items-center ${className || ''}`}>
      <svg width={w} height={h} viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>LSX Design</title>
        {/* Lightning bolt icon (two-tone, sharp geometric facets) */}
        <g id="Icon">
          {/* Primary face (bright red) */}
          <path id="Icon/Primary" fill="var(--logo-icon-primary)" d="M10 10 L35 32 L22 32 L38 58 L20 36 L30 36 Z"/>
          {/* Secondary face (dark red/orange) for depth */}
          <path id="Icon/Secondary" fill="var(--logo-icon-secondary)" d="M35 32 L38 58 L22 32 Z"/>
        </g>
        
        {/* Wordmark (using design system fonts) */}
        <g id="Text">
          {/* LSX (smaller, semibold) */}
          <text 
            x="60" 
            y="24" 
            fill={textColor}
            className="wp-font-primary"
            fontSize="16" 
            letterSpacing="1"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            LSX
          </text>
          {/* Design (larger, extrabold) */}
          <text 
            x="60" 
            y="54" 
            fill={textColor}
            className="wp-font-primary"
            fontSize="32" 
            fontWeight="800" 
            letterSpacing="-0.5"
          >
            Design
          </text>
        </g>
      </svg>
    </div>
  );
}