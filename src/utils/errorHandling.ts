// Central error handling utility
import { trackError } from './analytics';

export class AppError extends Error {
  code?: string;
  details?: any;
  
  constructor(message: string, code?: string, details?: any) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;

    // Ensure proper stack traces for debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

// Global error handler setup
export function setupGlobalErrorHandling() {
  // Track initialization to prevent duplicate handlers
  if ((window as any).__errorHandlersInitialized) {
    return;
  }
  (window as any).__errorHandlersInitialized = true;

  // Handle synchronous errors
  window.onerror = (message, source, lineno, colno, error) => {
    // Ignore cross-origin script errors that don't provide details
    if (message === 'Script error.' && !source && !lineno && !colno) {
      return true;
    }

    // Log detailed error information
    console.error('Global error:', {
      message,
      source: source || 'unknown',
      line: lineno || 'unknown',
      column: colno || 'unknown',
      stack: error?.stack || 'unavailable',
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    // Track error in analytics
    trackError('JavaScript Error', typeof message === 'string' ? message : 'Unknown error');

    return true; // Prevent default handling
  };

  // Handle Promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason;
    const errorInfo = {
      type: 'Unhandled Promise Rejection',
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    if (error instanceof Error) {
      console.error('Unhandled promise rejection:', {
        ...errorInfo,
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      // Track error in analytics
      trackError('Promise Rejection', error.message);
    } else {
      console.error('Unhandled promise rejection:', {
        ...errorInfo,
        error
      });
      
      // Track error in analytics
      trackError('Promise Rejection', 'Unknown error');
    }

    event.preventDefault();
  });

  // Handle runtime errors
  window.addEventListener('error', (event) => {
    // Ignore errors from cross-origin scripts
    if (event.error || (!event.filename && event.lineno === 0 && event.colno === 0)) {
      return;
    }

    console.error('Runtime error:', {
      message: event.message,
      filename: event.filename,
      line: event.lineno,
      column: event.colno,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    
    // Track error in analytics
    trackError('Runtime Error', event.message);

    event.preventDefault();
  });

  // Add CORS error detection with data URL handling
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    try {
      // Skip CORS logging for data URLs
      if (typeof args[0] === 'string' && args[0].startsWith('data:')) {
        return originalFetch.apply(this, args);
      }

      const response = await originalFetch.apply(this, args);
      return response;
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        // Only log CORS errors for non-data URLs
        if (typeof args[0] === 'string' && !args[0].startsWith('data:')) {
          console.error('CORS or network error:', {
            url: args[0],
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            error: error.message
          });
          
          // Track error in analytics
          trackError('Network Error', `Failed to fetch: ${typeof args[0] === 'string' ? args[0] : 'unknown URL'}`);
        }
      }
      throw error;
    }
  };
}

// Error boundary fallback props type
export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}