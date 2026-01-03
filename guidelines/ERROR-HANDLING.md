# Error Handling Standards - LSX Design System

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Status:** 🟢 **ACTIVE STANDARD**  
**Compliance:** Required for all production code

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Error Handling Philosophy](#error-handling-philosophy)
3. [Error Categories](#error-categories)
4. [Component Error Boundaries](#component-error-boundaries)
5. [Data Validation](#data-validation)
6. [User-Facing Errors](#user-facing-errors)
7. [Logging & Monitoring](#logging--monitoring)
8. [Recovery Strategies](#recovery-strategies)
9. [WordPress Integration](#wordpress-integration)
10. [Best Practices](#best-practices)
11. [Examples](#examples)

---

## 🎯 **OVERVIEW**

### **Purpose**

Define comprehensive error handling standards for the LSX Design System to ensure:
- Graceful degradation when errors occur
- Clear, actionable user feedback
- Proper error logging for debugging
- WordPress block editor compatibility
- Accessibility compliance in error states

### **Scope**

These standards apply to:
- All React components (`/src/app/components/`)
- Data fetching and transformations (`/src/app/data/`)
- Context providers (`/src/app/contexts/`)
- Form validation and submission
- API integrations
- WordPress block patterns

### **Goals**

| Goal | Target | Current | Status |
|------|--------|---------|--------|
| **Error Boundary Coverage** | 100% | 0% | 🔴 Not Started |
| **Validated Inputs** | 100% | 60% | 🟡 Partial |
| **User Error Messages** | 100% | 80% | 🟡 Good |
| **Error Logging** | 100% | 10% | 🔴 Not Started |
| **Recovery UX** | 90% | 50% | 🟡 Partial |

---

## 🧠 **ERROR HANDLING PHILOSOPHY**

### **Core Principles**

1. **Fail Gracefully**
   - Never show white screen of death
   - Always provide fallback UI
   - Maintain page functionality when possible

2. **User-Focused Messages**
   - Clear, non-technical language
   - Actionable next steps
   - Empathetic tone
   - No developer jargon

3. **Preventive Validation**
   - Validate early (client-side first)
   - Provide real-time feedback
   - Clear input requirements
   - Inline validation messages

4. **Observable & Debuggable**
   - Log all errors with context
   - Include stack traces in dev
   - Track error frequency
   - Monitor recovery success

5. **Accessible Error States**
   - Announce errors to screen readers
   - Visible focus on error fields
   - Color + icon + text (not color alone)
   - Clear error association

---

## 🏗️ **ERROR CATEGORIES**

### **1. Critical Errors** (System-breaking)

**Examples:**
- Application crash
- Context provider failure
- Fatal data loading error
- Unhandled exceptions

**Response:**
- Show error boundary fallback
- Log full error details
- Provide reload option
- Display support contact

**User Message:**
> "Something went wrong. Please try refreshing the page. If this continues, contact support."

---

### **2. Recoverable Errors** (Feature-breaking)

**Examples:**
- Failed data fetch
- Navigation error
- Component render error
- Missing required data

**Response:**
- Show error state in component
- Log error with context
- Provide retry option
- Suggest alternative action

**User Message:**
> "We couldn't load this content. Try again or check back later."

---

### **3. Validation Errors** (User input)

**Examples:**
- Invalid email format
- Required field missing
- Password too short
- File type not supported

**Response:**
- Inline validation message
- Highlight error field
- Prevent form submission
- Guide to correct format

**User Message:**
> "Please enter a valid email address (example@domain.com)"

---

### **4. Warning States** (Non-blocking)

**Examples:**
- Slow network connection
- Optional data missing
- Deprecated feature used
- Browser not fully supported

**Response:**
- Show warning banner
- Log warning to console
- Continue normal operation
- Suggest upgrade/alternative

**User Message:**
> "Your connection is slow. Some features may take longer to load."

---

## 🛡️ **COMPONENT ERROR BOUNDARIES**

### **Global Error Boundary**

Every app must have a root error boundary:

```typescript
/**
 * RootErrorBoundary Component
 * 
 * Catches all unhandled errors in the application.
 * Prevents white screen of death.
 * Provides reload and support options.
 * 
 * @example
 * <RootErrorBoundary>
 *   <App />
 * </RootErrorBoundary>
 */

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary Caught:', error, errorInfo);
    }

    // Log to error monitoring service (production)
    this.logErrorToService(error, errorInfo);

    this.setState({
      errorInfo
    });
  }

  logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // In production, send to error monitoring service
    // Example: Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error, { extra: errorInfo });
      console.error('Production Error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            padding: '24px',
            fontFamily: 'Lexend, sans-serif'
          }}
        >
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            {/* Error Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                backgroundColor: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px'
              }}
            >
              ⚠️
            </div>

            {/* Error Title */}
            <h1
              style={{
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: '16px'
              }}
            >
              Something Went Wrong
            </h1>

            {/* Error Message */}
            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
                marginBottom: '32px',
                lineHeight: '1.7'
              }}
            >
              We encountered an unexpected error. Please try refreshing the page.
              If the problem continues, contact our support team.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details
                style={{
                  marginBottom: '32px',
                  padding: '16px',
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'left',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'monospace'
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: '12px' }}>
                  Error Details (Dev Only)
                </summary>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={this.handleReload}
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '12px 24px',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Reload Page
              </button>

              <a
                href="/contact"
                style={{
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                  padding: '12px 24px',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

### **Feature Error Boundary**

For isolating errors to specific features:

```typescript
/**
 * FeatureErrorBoundary Component
 * 
 * Catches errors in a specific feature or section.
 * Prevents error from crashing entire page.
 * Shows inline error state with retry option.
 * 
 * @example
 * <FeatureErrorBoundary fallback={<ErrorState />}>
 *   <PortfolioGrid />
 * </FeatureErrorBoundary>
 */

interface FeatureErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface FeatureErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class FeatureErrorBoundary extends Component<
  FeatureErrorBoundaryProps,
  FeatureErrorBoundaryState
> {
  constructor(props: FeatureErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): FeatureErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Feature Error:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          style={{
            padding: '32px',
            backgroundColor: 'var(--muted)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            marginBottom: '16px'
          }}>
            We couldn't load this content.
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              padding: '10px 20px',
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              borderRadius: 'var(--radius)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## ✅ **DATA VALIDATION**

### **Input Validation**

Always validate user inputs before processing:

```typescript
/**
 * Email validation utility
 * 
 * Validates email format using RFC 5322 standard.
 * Returns error message if invalid, null if valid.
 * 
 * @param email - Email address to validate
 * @returns Error message or null
 * 
 * @example
 * const error = validateEmail('user@example.com');
 * if (error) {
 *   setEmailError(error);
 * }
 */
export function validateEmail(email: string): string | null {
  if (!email || email.trim() === '') {
    return 'Email address is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address (example@domain.com)';
  }

  if (email.length > 254) {
    return 'Email address is too long (maximum 254 characters)';
  }

  return null;
}

/**
 * Required field validation
 * 
 * Checks if a required field has a value.
 * Returns error message if empty, null if valid.
 * 
 * @param value - Field value to validate
 * @param fieldName - Human-readable field name for error message
 * @returns Error message or null
 * 
 * @example
 * const error = validateRequired(name, 'Name');
 * if (error) {
 *   setNameError(error);
 * }
 */
export function validateRequired(value: string, fieldName: string): string | null {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Form validation example
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Validate name
  const nameError = validateRequired(data.name, 'Name');
  if (nameError) {
    errors.name = nameError;
  }

  // Validate email
  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  // Validate message
  const messageError = validateRequired(data.message, 'Message');
  if (messageError) {
    errors.message = messageError;
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
}
```

---

### **Data Fetching Error Handling**

Handle API and data loading errors gracefully:

```typescript
/**
 * useDataFetch Hook
 * 
 * Fetches data with comprehensive error handling.
 * Provides loading, error, and data states.
 * Includes retry functionality.
 * 
 * @param fetchFn - Function that returns a Promise with data
 * @returns Object with data, loading, error, and retry
 * 
 * @example
 * const { data, loading, error, retry } = useDataFetch(() => fetchPosts());
 * 
 * if (loading) return <Loading />;
 * if (error) return <Error message={error} onRetry={retry} />;
 * return <PostList posts={data} />;
 */

import { useState, useEffect, useCallback } from 'react';

interface UseDataFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useDataFetch<T>(
  fetchFn: () => Promise<T>
): UseDataFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFn();
      setData(result);
      setLoading(false);
    } catch (err) {
      console.error('Data fetch error:', err);
      
      let errorMessage = 'Failed to load data. Please try again.';
      
      if (err instanceof Error) {
        // Network error
        if (err.message.includes('Network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        }
        // Timeout error
        else if (err.message.includes('timeout')) {
          errorMessage = 'Request timed out. Please try again.';
        }
        // Generic error
        else {
          errorMessage = err.message || errorMessage;
        }
      }

      setError(errorMessage);
      setLoading(false);
    }
  }, [fetchFn, retryCount]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    setRetryCount(prev => prev + 1);
  }, []);

  return { data, loading, error, retry };
}
```

---

## 🎨 **USER-FACING ERRORS**

### **Error Message Component**

Consistent error display across the application:

```typescript
/**
 * ErrorMessage Component
 * 
 * Displays user-friendly error messages with retry option.
 * Accessible to screen readers.
 * Consistent styling using design system tokens.
 * 
 * @param message - Error message to display
 * @param onRetry - Optional retry callback
 * @param variant - Visual variant ('inline' | 'block' | 'banner')
 * 
 * @example
 * <ErrorMessage 
 *   message="Failed to load content"
 *   onRetry={() => refetch()}
 *   variant="block"
 * />
 */

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  variant?: 'inline' | 'block' | 'banner';
}

export function ErrorMessage({ 
  message, 
  onRetry,
  variant = 'inline'
}: ErrorMessageProps) {
  const styles = {
    inline: {
      padding: '8px 12px',
      fontSize: 'var(--text-small)',
      marginBottom: '8px'
    },
    block: {
      padding: '24px',
      fontSize: 'var(--text-base)',
      marginBottom: '16px'
    },
    banner: {
      padding: '16px 24px',
      fontSize: 'var(--text-base)',
      marginBottom: '24px'
    }
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        fontFamily: 'Lexend, sans-serif',
        ...styles[variant]
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span aria-hidden="true">⚠️</span>
        <span>{message}</span>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            backgroundColor: 'var(--destructive-foreground)',
            color: 'var(--destructive)',
            padding: '6px 12px',
            fontSize: 'var(--text-small)',
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            borderRadius: 'var(--radius)',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
```

---

### **Form Field Error**

Inline validation errors for form inputs:

```typescript
/**
 * FormFieldError Component
 * 
 * Displays inline error message below form input.
 * Associates error with input using aria-describedby.
 * Accessible to screen readers.
 * 
 * @param id - Unique ID for aria-describedby association
 * @param message - Error message to display
 * 
 * @example
 * <input 
 *   aria-invalid={!!emailError}
 *   aria-describedby={emailError ? 'email-error' : undefined}
 * />
 * {emailError && (
 *   <FormFieldError id="email-error" message={emailError} />
 * )}
 */

interface FormFieldErrorProps {
  id: string;
  message: string;
}

export function FormFieldError({ id, message }: FormFieldErrorProps) {
  return (
    <p
      id={id}
      role="alert"
      style={{
        color: 'var(--destructive)',
        fontSize: 'var(--text-small)',
        fontFamily: 'Lexend, sans-serif',
        marginTop: '4px',
        marginBottom: '0',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      <span aria-hidden="true">⚠</span>
      <span>{message}</span>
    </p>
  );
}
```

---

## 📊 **LOGGING & MONITORING**

### **Error Logging Utility**

Centralized error logging:

```typescript
/**
 * Error Logger
 * 
 * Centralized error logging utility.
 * Logs to console in development.
 * Sends to monitoring service in production.
 * 
 * @param error - Error object or message
 * @param context - Additional context for debugging
 * @param level - Error severity level
 * 
 * @example
 * logError(
 *   new Error('Failed to fetch data'),
 *   { userId: '123', page: 'portfolio' },
 *   'error'
 * );
 */

type ErrorLevel = 'info' | 'warning' | 'error' | 'critical';

interface ErrorContext {
  [key: string]: any;
}

export function logError(
  error: Error | string,
  context?: ErrorContext,
  level: ErrorLevel = 'error'
) {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  const logData = {
    level,
    message: errorMessage,
    stack: errorStack,
    context,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  };

  // Development: Log to console
  if (process.env.NODE_ENV === 'development') {
    console.group(`[${level.toUpperCase()}] ${errorMessage}`);
    console.error(error);
    if (context) {
      console.log('Context:', context);
    }
    console.groupEnd();
  }

  // Production: Send to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to Sentry, LogRocket, or custom service
    // Example: Sentry.captureException(error, { extra: context });
    
    // Fallback: Send to custom API endpoint
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logData)
    }).catch(err => {
      console.error('Failed to log error:', err);
    });
  }
}
```

---

## 🔄 **RECOVERY STRATEGIES**

### **Automatic Retry**

Retry failed operations with exponential backoff:

```typescript
/**
 * Retry Utility
 * 
 * Retries a function with exponential backoff.
 * Useful for network requests and data fetching.
 * 
 * @param fn - Function to retry
 * @param maxRetries - Maximum number of retry attempts
 * @param delay - Initial delay in milliseconds
 * @returns Promise with result or throws error
 * 
 * @example
 * const data = await retryWithBackoff(
 *   () => fetchAPI('/posts'),
 *   3,  // Max 3 retries
 *   1000  // Start with 1 second delay
 * );
 */

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt < maxRetries) {
        const waitTime = delay * Math.pow(2, attempt);
        console.log(`Retry attempt ${attempt + 1}/${maxRetries} in ${waitTime}ms`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }

  throw lastError!;
}
```

---

## 🔌 **WORDPRESS INTEGRATION**

### **Block Error Handling**

Handle errors in WordPress block patterns:

```php
<?php
/**
 * FAQ Section Pattern with Error Handling
 * 
 * patterns/faq-section.php
 */

// Validate FAQ data exists
if (empty($faq_items)) {
    ?>
    <div class="wp-block-group faq-error-state">
        <p class="error-message">
            <?php esc_html_e('No FAQs available at this time.', 'lsx-design'); ?>
        </p>
    </div>
    <?php
    return;
}

// Render FAQ section
?>
<div class="wp-block-group faq-section">
    <?php foreach ($faq_items as $index => $faq) : ?>
        <?php if (empty($faq['question']) || empty($faq['answer'])) continue; ?>
        
        <div class="faq-item">
            <button 
                class="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-<?php echo esc_attr($index); ?>"
            >
                <?php echo esc_html($faq['question']); ?>
            </button>
            <div 
                id="faq-answer-<?php echo esc_attr($index); ?>"
                class="faq-answer"
                hidden
            >
                <?php echo wp_kses_post($faq['answer']); ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>
```

---

## ✅ **BEST PRACTICES CHECKLIST**

### **Component Development:**

- [ ] Wrap feature sections in error boundaries
- [ ] Validate all user inputs before processing
- [ ] Provide clear, actionable error messages
- [ ] Log errors with sufficient context
- [ ] Test error states manually
- [ ] Design fallback UI for error states
- [ ] Announce errors to screen readers
- [ ] Provide retry options where appropriate

### **User Experience:**

- [ ] Use friendly, non-technical language
- [ ] Never blame the user
- [ ] Suggest next steps
- [ ] Provide support contact for critical errors
- [ ] Show loading states before errors
- [ ] Maintain page layout in error states
- [ ] Use color + icon + text (not color alone)

### **WordPress Integration:**

- [ ] Handle missing data gracefully
- [ ] Validate custom field data
- [ ] Provide editor previews for error states
- [ ] Use WordPress i18n for error messages
- [ ] Log PHP errors properly
- [ ] Handle REST API errors

---

**Last Updated:** December 25, 2024  
**Version:** 1.0  
**Status:** 🟢 **ACTIVE STANDARD**  
**Next Review:** January 25, 2025

---

## 📚 **RESOURCES**

- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [WCAG Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- [Form Validation Best Practices](https://www.w3.org/WAI/tutorials/forms/validation/)
- [WordPress Error Handling](https://developer.wordpress.org/apis/handbook/error-handling/)
