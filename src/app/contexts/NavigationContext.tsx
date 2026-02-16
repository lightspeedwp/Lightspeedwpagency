/**
 * Navigation Context — React Router Bridge
 * 
 * Provides backward-compatible navigation for components that still use
 * the legacy `navigateTo(slug)` pattern while powered by React Router.
 * 
 * **Bridge Pattern:**
 * - `navigateTo(slug)` converts flat slug → hierarchical URL path via route-map
 * - `currentPage` derives the flat slug from the current URL for backward compat
 * - Components can progressively migrate to `<Link>` and `useNavigate()`
 * 
 * **WordPress Mapping:**
 * In WordPress, navigation is handled by:
 * - WordPress's native routing system
 * - The Rewrite API for custom URLs
 * - Template hierarchy for page matching
 * 
 * @see /src/app/utils/route-map.ts — Slug↔Path conversion
 * @see /src/app/routes.tsx — Route definitions
 */

import { createContext, useContext, useMemo, useCallback } from 'react';
import {
  useNavigate as useRouterNavigate,
  useLocation as useRouterLocation,
} from 'react-router';
import { slugToPath, pathToSlug } from '../utils/route-map';

/**
 * Navigation context type definition
 */
interface NavigationContextType {
  /**
   * Current active page slug (backward compatible).
   * Derived from the URL path via pathToSlug().
   */
  currentPage: string;

  /**
   * Navigate to a page by slug or path.
   * 
   * Accepts either:
   * - A legacy flat slug: `navigateTo('contact')` → navigates to `/contact`
   * - A full path: `navigateTo('/services/design')` → navigates directly
   * 
   * @param pageOrPath — Flat slug or URL path
   */
  navigateTo: (pageOrPath: string) => void;
}

/**
 * Navigation Context
 * Default value is null to enforce using the provider.
 */
export const NavigationContext = createContext<NavigationContextType | null>(null);

/**
 * useNavigation Hook
 * 
 * Provides navigation powered by React Router with backward-compatible
 * slug-based API. All components rendered inside the RouterProvider
 * can use this hook.
 * 
 * Uses React Router's useNavigate + useLocation under the hood,
 * mapping flat slugs to hierarchical URL paths via route-map.ts.
 * 
 * @example
 * const { currentPage, navigateTo } = useNavigation();
 * navigateTo('contact');    // → /contact
 * navigateTo('discovery');  // → /services/discovery
 * navigateTo('/about');     // → /about (path passed through)
 */
export function useNavigation(): NavigationContextType {
  // Always call React Router hooks (Rules of Hooks compliance)
  const routerNavigate = useRouterNavigate();
  const location = useRouterLocation();

  // Check for Provider context (optional override)
  const context = useContext(NavigationContext);

  const currentPage = useMemo(
    () => context ? context.currentPage : pathToSlug(location.pathname),
    [context, location.pathname]
  );

  const navigateTo = useCallback(
    (pageOrPath: string) => {
      if (context) {
        context.navigateTo(pageOrPath);
      } else {
        const path = pageOrPath.startsWith('/') ? pageOrPath : slugToPath(pageOrPath);
        routerNavigate(path);
      }
    },
    [context, routerNavigate]
  );

  return { currentPage, navigateTo };
}

/**
 * useLocation Hook
 * 
 * Returns the current page slug for route change detection.
 * Used by accessibility utilities like RouteAnnouncer.
 * 
 * @returns Current page slug
 */
export function useLocation(): string {
  const { currentPage } = useNavigation();
  return currentPage;
}
