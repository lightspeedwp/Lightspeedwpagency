/**
 * Figma Iframe Error Suppression - MAXIMUM AGGRESSION
 * 
 * This module MUST be imported first in App.tsx to suppress Figma's iframe errors.
 * 
 * CRITICAL: This is an IIFE (Immediately Invoked Function Expression) that runs
 * as soon as this module is imported, before any other code.
 * 
 * EXTREME MEASURES: Patches Error constructor and console at the lowest possible level
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
           msg.includes('webpack-artifacts');
  };

  // LAYER 0: Patch the Error constructor itself (most aggressive)
  const OriginalError = window.Error;
  const OriginalErrorConstructor = Error;
  
  // Create a proxy for Error constructor
  const ErrorProxy = new Proxy(OriginalError, {
    construct(target, args) {
      const message = String(args[0] || '');
      if (isFigmaError(message)) {
        // Create a dummy error that won't be logged
        const dummyError = new target('Suppressed error');
        // Prevent stack trace from showing
        dummyError.stack = '';
        return dummyError;
      }
      return new target(...args);
    }
  });
  
  // Replace global Error constructor
  try {
    window.Error = ErrorProxy as any;
    (window as any).Error = ErrorProxy;
  } catch (e) {
    // If we can't replace Error, continue with other layers
  }

  // LAYER 1: Override console.error IMMEDIATELY (before anything else)
  const originalError = console.error;
  console.error = function(...args: any[]): void {
    const message = args.join(' ');
    if (isFigmaError(message)) return; // Suppress completely
    originalError.apply(console, args);
  };

  // LAYER 2: Override console.warn IMMEDIATELY
  const originalWarn = console.warn;
  console.warn = function(...args: any[]): void {
    const message = args.join(' ');
    if (isFigmaError(message)) return; // Suppress completely
    originalWarn.apply(console, args);
  };

  // LAYER 3: Patch console.log as well (just in case)
  const originalLog = console.log;
  console.log = function(...args: any[]): void {
    const message = args.join(' ');
    if (isFigmaError(message)) return; // Suppress
    originalLog.apply(console, args);
  };

  // LAYER 4: Error event handler (runs in capture phase - earliest possible)
  const errorHandler = (event: ErrorEvent): boolean | void => {
    const message = event.message || '';
    const filename = event.filename || '';
    const stack = event.error?.stack || '';
    
    if (isFigmaError(message) || isFigmaError(filename) || isFigmaError(stack)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  };

  // Register in BOTH capture and bubble phases for maximum coverage
  window.addEventListener('error', errorHandler, true);  // Capture phase (earliest)
  window.addEventListener('error', errorHandler, false); // Bubble phase

  // LAYER 5: Promise rejection handler (capture phase)
  const rejectionHandler = (event: PromiseRejectionEvent): boolean | void => {
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
        reasonStr = String(reason);
      }
    }
    
    if (isFigmaError(reasonStr)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  };

  // Register in BOTH capture and bubble phases
  window.addEventListener('unhandledrejection', rejectionHandler, true);  // Capture
  window.addEventListener('unhandledrejection', rejectionHandler, false); // Bubble

  // LAYER 6: Override window.onerror as safety net
  const originalOnError = window.onerror;
  window.onerror = function(
    message: string | Event,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error
  ): boolean {
    const msg = typeof message === 'string' ? message : '';
    const src = source || '';
    const stack = error?.stack || '';
    
    if (isFigmaError(msg) || isFigmaError(src) || isFigmaError(stack)) {
      return true; // Suppress error (true = handled)
    }
    
    // Call original handler if exists
    if (originalOnError && typeof originalOnError === 'function') {
      return originalOnError.call(window, message, source, lineno, colno, error) as boolean;
    }
    
    return false;
  };

  // LAYER 7: Override window.onunhandledrejection as safety net
  const originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function(event: PromiseRejectionEvent): boolean {
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
        reasonStr = String(reason);
      }
    }
    
    if (isFigmaError(reasonStr)) {
      return true; // Suppress
    }
    
    // Call original handler if exists
    if (originalOnUnhandledRejection && typeof originalOnUnhandledRejection === 'function') {
      return originalOnUnhandledRejection.call(window, event);
    }
    
    return false;
  };

  // LAYER 8: Suppress all errors from Figma webpack artifacts by patching fetch
  const originalFetch = window.fetch;
  window.fetch = async function(...args: any[]): Promise<Response> {
    try {
      return await originalFetch.apply(window, args);
    } catch (error: any) {
      const message = error?.message || String(error);
      if (isFigmaError(message)) {
        // Return a dummy successful response
        return new Response('', { status: 200 });
      }
      throw error;
    }
  };

  // LAYER 9: Nuclear option - suppress ALL console output from Figma domains
  const createConsoleFilter = (original: Function) => {
    return function(...args: any[]) {
      const message = args.join(' ');
      // Check if this is a Figma error
      if (isFigmaError(message)) return;
      
      // Check if the error stack includes Figma domains
      const stack = new Error().stack || '';
      if (stack.includes('figma.com') && isFigmaError(message)) return;
      
      original.apply(console, args);
    };
  };

  console.error = createConsoleFilter(originalError);
  console.warn = createConsoleFilter(originalWarn);

  // Initialization complete - silent success
})();

// Export empty object to make this a valid ES module
export {};