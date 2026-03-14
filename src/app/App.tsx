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
  componentDidCatch(error: Error) {
    console.info('[AppErrorBoundary] Caught:', error.message);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#ff3333',
          backgroundColor: '#0a0a0a',
          minHeight: '100vh',
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '0.875rem',
            padding: '1rem',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            border: '1px solid #333',
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
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#333',
              color: '#fff',
              border: '1px solid #555',
              borderRadius: '4px',
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