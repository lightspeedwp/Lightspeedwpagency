/**
 * Figma Iframe Error Suppression
 * 
 * This module MUST be imported first in App.tsx to suppress Figma's iframe errors.
 * 
 * Uses ONLY safe, non-invasive techniques:
 * - Event listeners for error/unhandledrejection (capture phase)
 * - Console output filters
 * 
 * Does NOT patch:
 * - Error constructor (breaks React internals / instanceof checks)
 * - window.fetch (breaks Vite module loading)
 * - window.onerror / window.onunhandledrejection (redundant with addEventListener)
 */

(() => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  // Helper function to detect Figma errors
  const isFigmaError = (msg: string): boolean => {
    return msg.includes('IframeMessageAbortError') ||
           msg.includes('message port was destroyed') ||
           msg.includes('setupMessageChannel') ||
           msg.includes('figma.com/webpack-artifacts') ||
           msg.includes('figma_app') ||
           msg.includes('webpack-artifacts') ||
           msg.includes('Message aborted');
  };

  // Helper to stringify any value safely
  const safeStringify = (...args: any[]): string => {
    try {
      return args.map(a => {
        if (a === null || a === undefined) return '';
        if (typeof a === 'string') return a;
        if (a instanceof Error) return a.message || '';
        if (typeof a === 'object') {
          try { return JSON.stringify(a); } catch { return String(a); }
        }
        return String(a);
      }).join(' ');
    } catch {
      return '';
    }
  };

  // LAYER 1: Console filters — suppress Figma noise from console output
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = function (...args: any[]): void {
    if (isFigmaError(safeStringify(...args))) return;
    originalError.apply(console, args);
  };

  console.warn = function (...args: any[]): void {
    if (isFigmaError(safeStringify(...args))) return;
    originalWarn.apply(console, args);
  };

  // LAYER 2: Error event listener (capture phase — earliest possible)
  window.addEventListener('error', (event: ErrorEvent) => {
    const message = event.message || '';
    const filename = event.filename || '';
    const stack = event.error?.stack || '';

    if (isFigmaError(message) || isFigmaError(filename) || isFigmaError(stack)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  // LAYER 3: Promise rejection listener (capture phase)
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    let reasonStr = '';

    if (reason) {
      if (typeof reason === 'string') {
        reasonStr = reason;
      } else if (reason.message) {
        reasonStr = reason.message;
      } else if (reason.stack) {
        reasonStr = reason.stack;
      } else {
        try { reasonStr = String(reason); } catch { /* ignore */ }
      }
    }

    if (isFigmaError(reasonStr)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
})();

// Export empty object to make this a valid ES module
export {};
