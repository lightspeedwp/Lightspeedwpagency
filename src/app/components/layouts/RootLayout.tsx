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
  componentDidCatch(error: Error) {
    console.error(`[${this.props.name}] render error:`, error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'var(--destructive-soft, #fef2f2)',
            color: 'var(--destructive, #cc0000)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-sm)',
            textAlign: 'center',
          }}
        >
          {this.props.name} failed to load.{' '}
          <button
            onClick={() => window.location.reload()}
            style={{
              textDecoration: 'underline',
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
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
      <Toaster />
      <ScrollToTop />
      <RouteAnnouncer />
      <SkipLink />
      <div
        className="lsx-design-prototype"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <ChromeErrorBoundary name="SiteHeader">
          <SiteHeader />
        </ChromeErrorBoundary>
        <main
          id="main-content"
          role="main"
          style={{
            flex: '1 1 auto',
            backgroundColor: 'var(--background)',
          }}
        >
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
    </>
  );
}