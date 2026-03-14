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
 * @see /src/app/utils/icon-map.ts
 */

import React, { Component, ReactNode } from 'react';
import { Warning as AlertTriangle, ArrowsClockwise as RefreshCw, House as Home, CaretDown as ChevronDown, CaretUp as ChevronUp } from '@phosphor-icons/react';
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    } else {
      // Send to error tracking service (e.g. Sentry)
    }

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
        <div className="error-boundary-full">
          <div className="error-boundary-full__container">
            {/* Error Icon */}
            <div className="error-boundary-full__icon-wrapper">
              <AlertTriangle size={40} className="error-boundary-full__icon" />
            </div>

            {/* Heading */}
            <h1 className="error-boundary-full__title">
              Something went wrong
            </h1>

            {/* Description */}
            <p className="error-boundary-full__description">
              We're sorry, but something unexpected happened. Please try refreshing the page or
              returning to the homepage.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="error-boundary-full__details">
                <p className="error-boundary-full__details-title">
                  Error Details (Development Mode):
                </p>
                <pre className="error-boundary-full__details-content">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="error-boundary__actions">
              <Button
                variant="default"
                size="lg"
                onClick={this.handleReload}
                className="error-boundary__action-btn"
              >
                <RefreshCw size={20} />
                Reload Page
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={this.handleGoHome}
                className="error-boundary__action-btn"
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
    <div className="error-fallback">
      <AlertTriangle size={48} className="error-fallback__icon" />
      
      <h3 className="error-fallback__title">
        Error Loading Component
      </h3>
      
      <p className="error-fallback__description">
        {error?.message || 'An unexpected error occurred.'}
      </p>
      
      {resetError && (
        <Button
          variant="outline"
          size="sm"
          onClick={resetError}
          className="error-fallback__btn"
        >
          <RefreshCw size={16} />
          Try Again
        </Button>
      )}
    </div>
  );
}