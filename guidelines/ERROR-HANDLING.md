# Error Handling Standards - LSX Design System

**Version:** 1.1  
**Last Updated:** January 27, 2026  
**Status:** 🟢 **ACTIVE STANDARD**  
**Compliance:** Required for all production code

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Error Handling Philosophy](#error-handling-philosophy)
3. [Console Usage Standards](#console-usage-standards) (NEW)
4. [User Feedback & Toasts](#user-feedback--toasts) (NEW)
5. [Error Categories](#error-categories)
6. [Component Error Boundaries](#component-error-boundaries)
7. [Data Validation](#data-validation)
8. [Import Validation](#import-validation) (NEW)
9. [User-Facing Errors](#user-facing-errors)
10. [Logging & Monitoring](#logging--monitoring)
11. [Recovery Strategies](#recovery-strategies)
12. [WordPress Integration](#wordpress-integration)
13. [Best Practices](#best-practices)

---

## 🎯 **OVERVIEW**

### **Purpose**

Define comprehensive error handling standards for the LSX Design System to ensure:
- Graceful degradation when errors occur
- Clear, actionable user feedback
- Proper error logging for debugging (without polluting production consoles)
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

---

## 🛑 **CONSOLE USAGE STANDARDS**

**Strict Rule:** No `console.log`, `console.info`, or `console.debug` in production UI code.

### **Allowed Usage**
1.  **Development-Only Debugging:** Wrapped in environment checks.
    ```typescript
    if (process.env.NODE_ENV === 'development') {
      console.log('Debug info:', data);
    }
    ```
2.  **Critical System Errors:** `console.error` is permitted for unrecoverable system errors that require developer attention, provided they are also handled gracefully in the UI.
3.  **Deprecation Warnings:** `console.warn` is permitted for library authors to signal deprecated features.

### **Prohibited Usage**
1.  **User Actions:** Do NOT use `console.log` to confirm user actions (e.g., "Form submitted"). Use [Toasts](#user-feedback--toasts) instead.
2.  **API Responses:** Do NOT log successful API responses in production.
3.  **Leftover Debugging:** Remove all `console.log` statements used for local testing before committing.

---

## 🔔 **USER FEEDBACK & TOASTS**

Instead of console logs, use the **Toast System** to provide feedback to users.

### **Usage**

```typescript
import { useToast } from '../blocks/feedback/ToastSystem';

export function MyComponent() {
  const { showToast } = useToast();

  const handleSubmit = async () => {
    try {
      await saveData();
      showToast({
        title: 'Success',
        description: 'Data saved successfully.',
        variant: 'success'
      });
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'Failed to save data. Please try again.',
        variant: 'destructive'
      });
    }
  };
}
```

### **Toast Context Initialization**
Ensure `ToastContextInitializer` is rendered in your root `App` component to enable imperative toast usage if needed, though `useToast()` hook is preferred.

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

Every app must have a root error boundary. See `src/app/components/blocks/layout/ErrorBoundary.tsx` for implementation.

### **Feature Error Boundary**

Wrap isolated features (like widgets, complex grids) in specific error boundaries so one failure doesn't crash the whole page.

---

## ✅ **DATA VALIDATION**

### **Input Validation**

Always validate user inputs before processing. Use helper functions for common validations (email, required fields).

### **Data Fetching Error Handling**

Handle API and data loading errors gracefully. Use `try/catch` blocks and set explicit error states.

---

## 🔗 **IMPORT VALIDATION**

**Strict Rule:** Ensure all imports are valid and resolve correctly.

1.  **Relative Imports:** careful with `../../` depth. Ensure the path exists.
2.  **Missing Modules:** Do not import from modules that are not installed in `package.json`.
3.  **Circular Dependencies:** Avoid circular dependencies which can cause runtime errors.
4.  **Type-Only Imports:** Use `import type` when importing interfaces or types to reduce bundle size and prevent runtime issues.

---

## 🎨 **USER-FACING ERRORS**

### **Error Message Component**

Consistent error display across the application. Use `Alert` block or specific error components.

### **Form Field Error**

Inline validation errors for form inputs using `aria-describedby` for accessibility.

---

## 📊 **LOGGING & MONITORING**

### **Error Logging Utility**

Centralized error logging. Logs to console in development, sends to monitoring service in production.

---

## 🔄 **RECOVERY STRATEGIES**

### **Automatic Retry**

Retry failed operations with exponential backoff for network requests.

---

## 🔌 **WORDPRESS INTEGRATION**

### **Block Error Handling**

Handle errors in WordPress block patterns by checking for empty data before rendering.

---

## ✅ **BEST PRACTICES CHECKLIST**

### **Component Development:**

- [ ] Wrap feature sections in error boundaries
- [ ] Validate all user inputs before processing
- [ ] Provide clear, actionable error messages
- [ ] Remove `console.log` from production code
- [ ] Use `Toast` system for user feedback
- [ ] Test error states manually
- [ ] Design fallback UI for error states
- [ ] Announce errors to screen readers
- [ ] Provide retry options where appropriate

### **User Experience:**

- [ ] Use friendly, non-technical language
- [ ] Never blame the user
