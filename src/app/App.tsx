/**
 * LSX Design Prototype — Main Application
 * 
 * Architecture:
 * - React Router Data Mode (createBrowserRouter + RouterProvider)
 * - Lazy-loaded router to ensure immediate first render
 * - Top-level error boundary for crash recovery
 * 
 * CRITICAL: This file must have ZERO heavy static imports.
 * The design system CSS and all route templates are loaded lazily
 * via RouterApp.tsx so the preview environment sees content immediately.
 */

// Error suppression MUST be first import (lightweight — single file)
import './suppress-figma-errors';

// Design system styles — loaded statically (dynamic imports fail in Figma Make)
import '../styles/index.css';

import { Component, ReactNode } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

/**
 * Top-level Error Boundary — catches any error during rendering
 * and displays a visible diagnostic instead of a blank screen.
 * Uses hardcoded styles (no CSS variables) since design system
 * CSS may not be loaded yet when this renders.
 */
class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: { componentStack?: string }) {
    console.info('[AppErrorBoundary] Caught:', error.message);
    if (errorInfo?.componentStack) {
      console.info('[AppErrorBoundary] Component Stack:', errorInfo.componentStack);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 'var(--spacing-8)',
          fontFamily: 'var(--font-primary)',
          color: 'var(--destructive)',
          backgroundColor: 'var(--background)',
          minHeight: '100vh',
        }}>
          <h1 style={{ fontSize: 'var(--text-h3)', marginBottom: 'var(--spacing-4)' }}>
            Something went wrong
          </h1>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: 'var(--text-small)',
            padding: 'var(--spacing-4)',
            backgroundColor: 'var(--card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            maxHeight: '60vh',
            overflow: 'auto',
          }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 'var(--spacing-4)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              backgroundColor: 'var(--muted)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <AppErrorBoundary>
      <RouterProvider router={router} />
    </AppErrorBoundary>
  );
}