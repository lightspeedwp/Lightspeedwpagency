/**
 * LSX Design Prototype — Main Application
 * 
 * WordPress block-theme prototype demonstrating:
 * - Token-driven design system (theme.json alignment)
 * - Reusable pattern composition
 * - Template structure (front-page, archive, single)
 * - Accessibility-first approach (WCAG 2.1 AA)
 * - Hierarchical URL routing (WordPress permalink structure)
 * 
 * **Architecture:**
 * - React Router Data Mode (createBrowserRouter + RouterProvider)
 * - Shared RootLayout (SiteHeader + Outlet + SiteFooter)
 * - Lazy-loaded templates for code splitting
 * - NavigationContext bridge for backward compatibility
 * 
 * **Phase 2 Updates (Feb 27, 2026):**
 * - /portfolio → /work
 * - /blog → /insights
 * 
 * @see /src/app/routes.tsx — Route configuration
 * @see /src/app/components/layouts/RootLayout.tsx — Shared layout
 * @see /src/app/contexts/NavigationContext.tsx — Navigation bridge
 */

// CRITICAL: Import error suppression FIRST (must run before any other code)
import './suppress-figma-errors';

// Import design system styles (CRITICAL - must load after error suppression)
import '../styles/index.css';

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}