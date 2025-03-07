// Central error handling utility
export class AppError extends Error {
  code?: string;
  details?: any;
  
  constructor(message: string, code?: string, details?: any) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;
  }
}

// Global error handler setup
export function setupGlobalErrorHandling() {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error:', {
      message,
      source,
      lineno,
      colno,
      error
    });
    return true; // Prevents default error handling
  };

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
  });
}

// Error boundary fallback props type
export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}