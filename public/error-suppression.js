/**
 * Figma Iframe Error Suppression Script
 * 
 * This script suppresses Figma's iframe communication errors globally.
 * Place this in <head> with <script src="/error-suppression.js"></script>
 * 
 * Error: IframeMessageAbortError: Message aborted: message port was destroyed
 * Cause: Figma's parent window tries to communicate with preview iframe
 * Impact: Cosmetic only - appears in console but doesn't affect functionality
 * 
 * Solution: Suppress these errors before they reach the console
 */

(function() {
  'use strict';

  // Helper to detect Figma errors
  function isFigmaError(message) {
    if (!message) return false;
    var msg = String(message);
    return msg.indexOf('IframeMessageAbortError') !== -1 ||
           msg.indexOf('message port was destroyed') !== -1 ||
           msg.indexOf('setupMessageChannel') !== -1 ||
           msg.indexOf('figma.com/webpack-artifacts') !== -1 ||
           msg.indexOf('figma_app') !== -1;
  }

  // Layer 1: Override console.error IMMEDIATELY
  var originalError = console.error;
  console.error = function() {
    var args = Array.prototype.slice.call(arguments);
    var message = args.join(' ');
    if (isFigmaError(message)) return; // Suppress Figma errors
    originalError.apply(console, args);
  };

  // Layer 2: Override console.warn IMMEDIATELY
  var originalWarn = console.warn;
  console.warn = function() {
    var args = Array.prototype.slice.call(arguments);
    var message = args.join(' ');
    if (isFigmaError(message)) return; // Suppress Figma warnings
    originalWarn.apply(console, args);
  };

  // Layer 3: Error event handler (runs in capture phase - earliest possible)
  function errorHandler(event) {
    var message = event.message || '';
    var filename = event.filename || '';
    var stack = event.error && event.error.stack ? event.error.stack : '';
    
    if (isFigmaError(message) || isFigmaError(filename) || isFigmaError(stack)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  }

  // Register error handler in BOTH capture and bubble phases
  window.addEventListener('error', errorHandler, true);  // Capture phase (earliest)
  window.addEventListener('error', errorHandler, false); // Bubble phase (fallback)

  // Layer 4: Promise rejection handler (runs in capture phase)
  function rejectionHandler(event) {
    var reason = event.reason;
    var reasonStr = '';
    
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
  }

  // Register rejection handler in BOTH capture and bubble phases
  window.addEventListener('unhandledrejection', rejectionHandler, true);  // Capture phase
  window.addEventListener('unhandledrejection', rejectionHandler, false); // Bubble phase

  // Layer 5: Override window.onerror as additional safety net
  var originalOnError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    var msg = typeof message === 'string' ? message : '';
    var src = source || '';
    var stack = error && error.stack ? error.stack : '';
    
    if (isFigmaError(msg) || isFigmaError(src) || isFigmaError(stack)) {
      return true; // Suppress error
    }
    
    if (originalOnError) {
      return originalOnError.call(window, message, source, lineno, colno, error);
    }
    return false;
  };

  // Layer 6: Override window.onunhandledrejection as additional safety net
  var originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function(event) {
    var reason = event.reason;
    var reasonStr = '';
    
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
    
    if (originalOnUnhandledRejection) {
      return originalOnUnhandledRejection.call(window, event);
    }
    return false;
  };

  // Initialization complete
  // console.log('[LSX Design] Figma error suppression active');
})();