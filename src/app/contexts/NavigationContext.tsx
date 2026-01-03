/**
 * Navigation Context
 * 
 * Provides centralized navigation functionality throughout the LSX Design app.
 * Enables client-side routing without prop drilling, integrating with the
 * centralized page registry in `/src/app/data/pages.ts`.
 * 
 * **Purpose:**
 * - Single source of truth for current page state
 * - Centralized navigation handler for all components
 * - Enables deep linking and programmatic navigation
 * - Simplifies component APIs (no need to pass navigation props)
 * 
 * **WordPress Mapping:**
 * In WordPress, this would be handled by:
 * - WordPress's native routing system
 * - The Rewrite API for custom URLs
 * - Template hierarchy for page matching
 * 
 * **Usage Pattern:**
 * ```tsx
 * // In App.tsx (provider setup)
 * <NavigationContext.Provider value={{ currentPage, navigateTo }}>
 *   <AppContent />
 * </NavigationContext.Provider>
 * 
 * // In any component (consumer)
 * const { currentPage, navigateTo } = useNavigation();
 * <Button onClick={() => navigateTo('contact')}>Contact</Button>
 * ```
 * 
 * @example
 * // Using the navigation hook
 * function MyComponent() {
 *   const { currentPage, navigateTo } = useNavigation();
 *   
 *   return (
 *     <button onClick={() => navigateTo('services')}>
 *       Go to Services
 *     </button>
 *   );
 * }
 * 
 * @see {@link /src/app/data/pages.ts} - Page registry
 * @see {@link /src/app/App.tsx} - Provider implementation
 */

import { createContext, useContext } from 'react';

/**
 * Navigation context type definition
 * 
 * Defines the shape of the navigation context value.
 * Used by both the provider and consumers.
 */
interface NavigationContextType {
  /**
   * Current active page slug
   * 
   * The slug of the currently displayed page (e.g., 'front-page', 'contact').
   * Corresponds to page slugs defined in `/src/app/data/pages.ts`.
   * 
   * **Valid values:**
   * - 'front-page' - Homepage
   * - 'services' - Services page
   * - 'contact' - Contact page
   * - 'portfolio' - Portfolio archive
   * - 'portfolio-single-{slug}' - Portfolio single pages
   * - See `/src/app/data/pages.ts` for complete list
   * 
   * @example
   * currentPage === 'contact'
   */
  currentPage: string;
  
  /**
   * Navigate to a different page
   * 
   * Triggers a page change by updating the current page state.
   * The page slug must exist in the page registry.
   * 
   * **Implementation:**
   * - Updates currentPage state
   * - Scrolls to top of page
   * - Updates browser history (in full implementation)
   * - Renders corresponding template component
   * 
   * **Error handling:**
   * - Invalid page slugs are ignored or fall back to 404
   * - Console warnings for development debugging
   * 
   * @param page - Page slug to navigate to (must match pages.ts registry)
   * 
   * @example
   * navigateTo('contact')
   * 
   * @example
   * navigateTo('portfolio-single-african-safari')
   */
  navigateTo: (page: string) => void;
}

/**
 * Navigation Context
 * 
 * React context for navigation state and functions.
 * Default value is null to enforce using the provider.
 * 
 * **Provider setup required:**
 * All components must be wrapped in NavigationContext.Provider
 * at the app root level.
 * 
 * @see {@link useNavigation} - Hook for consuming this context
 */
export const NavigationContext = createContext<NavigationContextType | null>(null);

/**
 * useNavigation Hook
 * 
 * Custom hook to access navigation context in any component.
 * Provides type-safe access to currentPage and navigateTo function.
 * 
 * **Rules:**
 * - Must be used within a component tree that has NavigationContext.Provider
 * - Throws error if used outside provider (development safety)
 * - Returns navigation state and functions
 * 
 * **Usage:**
 * ```tsx
 * const { currentPage, navigateTo } = useNavigation();
 * ```
 * 
 * @throws {Error} If used outside NavigationContext.Provider
 * 
 * @returns Navigation context value with currentPage and navigateTo
 * 
 * @example
 * // In a button component
 * function ContactButton() {
 *   const { navigateTo } = useNavigation();
 *   
 *   return (
 *     <button onClick={() => navigateTo('contact')}>
 *       Contact Us
 *     </button>
 *   );
 * }
 * 
 * @example
 * // Checking current page
 * function Navigation() {
 *   const { currentPage } = useNavigation();
 *   
 *   return (
 *     <nav>
 *       <a 
 *         href="#" 
 *         className={currentPage === 'services' ? 'active' : ''}
 *       >
 *         Services
 *       </a>
 *     </nav>
 *   );
 * }
 * 
 * @see {@link NavigationContext}
 */
export function useNavigation() {
  const context = useContext(NavigationContext);
  
  // Development safety: ensure hook is used within provider
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider. ' +
      'Wrap your app in <NavigationContext.Provider> at the root level.');
  }
  
  return context;
}

/**
 * useLocation Hook
 * 
 * Custom hook that returns the current page location for route change detection.
 * Used primarily by accessibility utilities like RouteAnnouncer.
 * 
 * **Purpose:**
 * - Track route changes for screen reader announcements
 * - Trigger effects when navigation occurs
 * - Enable route-based conditional rendering
 * 
 * @returns Current page slug
 * 
 * @example
 * // In RouteAnnouncer component
 * const location = useLocation();
 * 
 * useEffect(() => {
 *   announcePageChange(location);
 * }, [location]);
 * 
 * @see {@link useNavigation}
 */
export function useLocation() {
  const { currentPage } = useNavigation();
  return currentPage;
}