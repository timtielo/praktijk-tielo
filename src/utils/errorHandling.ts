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

// Reusable error boundary fallback component
export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          We're sorry, but an error occurred while rendering this page.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Error: {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}