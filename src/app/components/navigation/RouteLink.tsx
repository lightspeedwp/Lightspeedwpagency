/**
 * RouteLink Component
 * 
 * Enhanced Link component with automatic CSS bundle preloading on hover.
 * 
 * Features:
 * - Automatically preloads CSS bundle for target route on hover
 * - Prevents duplicate preload attempts
 * - Detects bundle from route path
 * - Fully accessible (keyboard + mouse)
 * - Design system compliant
 * 
 * Usage:
 * ```tsx
 * // Automatic bundle detection
 * <RouteLink to="/insights">Blog</RouteLink> // Preloads blog bundle
 * <RouteLink to="/services/development">Services</RouteLink> // Preloads services bundle
 * 
 * // Manual bundle specification
 * <RouteLink to="/insights/category/wordpress" bundle="blog">WordPress Posts</RouteLink>
 * 
 * // Disable preloading
 * <RouteLink to="/insights" preload={false}>Blog</RouteLink>
 * ```
 * 
 * Design System Compliance:
 * - Uses CSS variables for all styling
 * - Accessible (keyboard, focus, ARIA)
 * - No hardcoded colors/fonts/spacing
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 */

import React from 'react';
import { Link, type LinkProps } from 'react-router';
import { preloadCSSBundle, getBundleForRoute, type CSSBundle } from '../../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Component Props
 * ═══════════════════════════════════════════ */

export interface RouteLinkProps extends Omit<LinkProps, 'to'> {
  /**
   * Target route path
   */
  to: string;
  
  /**
   * Link text/content
   */
  children: React.ReactNode;
  
  /**
   * CSS bundle to preload (optional, auto-detected from path)
   */
  bundle?: CSSBundle;
  
  /**
   * Enable/disable preloading (default: true)
   */
  preload?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

/**
 * RouteLink Component
 * 
 * Enhanced Link with automatic CSS bundle preloading
 */
export const RouteLink: React.FC<RouteLinkProps> = ({
  to,
  children,
  bundle,
  preload = true,
  className,
  onMouseEnter,
  onFocus,
  ...rest
}) => {
  /**
   * Preload CSS bundle on hover/focus
   */
  const handlePreload = React.useCallback(() => {
    if (!preload) return;
    
    // Get bundle name (manual or auto-detect)
    const bundleName = bundle || getBundleForRoute(to);
    
    // Preload if bundle exists
    if (bundleName) {
      preloadCSSBundle(bundleName);
    }
  }, [to, bundle, preload]);
  
  /**
   * Handle mouse enter (hover)
   */
  const handleMouseEnter = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      handlePreload();
      onMouseEnter?.(event);
    },
    [handlePreload, onMouseEnter]
  );
  
  /**
   * Handle focus (keyboard navigation)
   */
  const handleFocus = React.useCallback(
    (event: React.FocusEvent<HTMLAnchorElement>) => {
      handlePreload();
      onFocus?.(event);
    },
    [handlePreload, onFocus]
  );
  
  return (
    <Link
      to={to}
      className={className}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
    </Link>
  );
};

/* ═══════════════════════════════════════════
 * Display Name
 * ═══════════════════════════════════════════ */

RouteLink.displayName = 'RouteLink';
