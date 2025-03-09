// Central error handling utility
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
    } else {
      console.error('Unhandled promise rejection:', {
        ...errorInfo,
        error
      });
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

    event.preventDefault();
  });

  // Add CORS error detection
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    try {
      const response = await originalFetch.apply(this, args);
      return response;
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('CORS or network error:', {
          url: args[0],
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          error: error.message
        });
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