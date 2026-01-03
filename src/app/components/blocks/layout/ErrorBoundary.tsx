/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree and displays
 * a fallback UI instead of crashing the entire application.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <YourComponent />
 * </ErrorBoundary>
 */

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../design/Buttons';

interface ErrorBoundaryProps {
  /** Child components to monitor for errors */
  children: ReactNode;
  /** Optional custom fallback UI */
  fallback?: ReactNode;
  /** Optional error callback */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/**
 * Error Boundary Class Component
 * 
 * Must be a class component as React Error Boundaries don't support hooks yet.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console (in production, send to error tracking service)
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // If custom fallback provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--background)',
            padding: '24px',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {/* Error Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--destructive)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                opacity: 0.9,
              }}
            >
              <AlertTriangle size={40} style={{ color: 'var(--destructive-foreground)' }} />
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}
            >
              Something went wrong
            </h1>

            {/* Description */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7',
              }}
            >
              We're sorry, but something unexpected happened. Please try refreshing the page or
              returning to the homepage.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div
                className="mb-8"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--destructive)',
                    marginBottom: '8px',
                  }}
                >
                  Error Details (Development Mode):
                </p>
                <pre
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 'var(--text-small)',
                    color: 'var(--foreground)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    margin: 0,
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={this.handleReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <RefreshCw size={20} />
                Reload Page
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={this.handleGoHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Home size={20} />
                Go to Homepage
              </Button>
            </div>
          </div>
        </div>
      );
    }

    // No error, render children normally
    return this.props.children;
  }
}

/**
 * Error Fallback Component
 * 
 * Lightweight fallback UI for smaller error boundaries.
 */
export function ErrorFallback({
  error,
  resetError,
}: {
  error?: Error;
  resetError?: () => void;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        minHeight: '200px',
      }}
    >
      <AlertTriangle
        size={48}
        style={{
          color: 'var(--destructive)',
          marginBottom: '16px',
        }}
      />
      
      <h3
        className="mb-2"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)',
        }}
      >
        Error Loading Component
      </h3>
      
      <p
        className="mb-6"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        {error?.message || 'An unexpected error occurred.'}
      </p>
      
      {resetError && (
        <Button
          variant="outline"
          size="sm"
          onClick={resetError}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <RefreshCw size={16} />
          Try Again
        </Button>
      )}
    </div>
  );
}
