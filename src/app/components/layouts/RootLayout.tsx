/**
 * Root Layout
 * 
 * WordPress concept: Theme template wrapper
 * 
 * Shared layout that wraps all pages with:
 * - RouteAnnouncer (screen reader route announcements)
 * - SkipLink (keyboard accessibility)
 * - SiteHeader (global navigation)
 * - main content area with Suspense/ErrorBoundary
 * - SiteFooter (global footer)
 * - BackToTopButton (scroll utility)
 * - Toaster (notifications)
 * - KeyboardShortcuts (global shortcuts)
 * 
 * **Align-wide enforcement:**
 * Header, body, and footer all use max-width: 1440px
 * (--wp--style--global--wide-size) for consistent alignment.
 * 
 * @see /src/app/routes.tsx — Route configuration
 * @see /src/app/components/parts/SiteHeader.tsx — Header template part
 * @see /src/app/components/parts/SiteFooter.tsx — Footer template part
 */

import { Outlet, useLocation } from 'react-router';
import { Suspense, useEffect, Component, ReactNode } from 'react';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { KeyboardShortcuts } from '../blocks/layout/KeyboardShortcuts';
import { ErrorBoundary } from '../blocks/layout/ErrorBoundary';
import { Toaster } from '../blocks/feedback/Toast';

/**
 * Lightweight error boundary for the global chrome (header/footer).
 * Prevents a SiteHeader or SiteFooter crash from taking out the
 * entire React tree.
 */
class ChromeErrorBoundary extends Component<
  { children: ReactNode; name: string },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; name: string }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: { componentStack?: string }) {
    console.error(`[${this.props.name}] render error:`, error);
    if (errorInfo?.componentStack) {
      console.error(`[${this.props.name}] Component Stack:`, errorInfo.componentStack);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="wp-p-4 wp-bg-destructive-soft wp-text-destructive wp-font-primary wp-text-sm wp-text-center wp-border wp-border-destructive wp-rounded-md wp-m-4"
        >
          {this.props.name} failed to load.{' '}
          <button
            onClick={() => window.location.reload()}
            className="wp-underline wp-bg-transparent wp-border-none wp-text-inherit wp-cursor-pointer wp-font-inherit wp-text-inherit wp-p-0"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Page loading spinner displayed during lazy template loading.
 * Uses CSS variables for full design system compliance.
 */
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__inner">
        <div className="page-loader__spinner" />
        <p className="page-loader__text">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Scroll to top on route change.
 * Mirrors WordPress page navigation behaviour.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <RouteAnnouncer />
      <SkipLink />
      <div className="lsx-design-prototype">
        <ChromeErrorBoundary name="SiteHeader">
          <SiteHeader />
        </ChromeErrorBoundary>
        
        <main id="main-content" role="main">
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </Suspense>
        </main>
        
        <ChromeErrorBoundary name="SiteFooter">
          <SiteFooter />
        </ChromeErrorBoundary>
      </div>
      <BackToTopButton />
      <KeyboardShortcuts />
      <Toaster />
    </>
  );
}