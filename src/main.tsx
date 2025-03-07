import React from 'react';
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import './i18n';
import { LoadingScreen } from './components/LoadingScreen';
import { setupLazyLoading, setupResponsiveImages } from './utils/lazyLoadImages';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
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

// Component to initialize performance optimizations
function AppInitializer({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    setupLazyLoading();
    setupResponsiveImages();
    
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.unsplash.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
    
    // Add event listener for print media
    const handleBeforePrint = () => {
      const deferredImages = document.querySelectorAll('img[loading="lazy"]');
      deferredImages.forEach((img: HTMLImageElement) => {
        img.loading = 'eager';
      });
    };
    
    window.addEventListener('beforeprint', handleBeforePrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);
  
  return <>{children}</>;
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <BrowserRouter>
            <AppInitializer>
              <Suspense fallback={<LoadingScreen />}>
                <App />
              </Suspense>
            </AppInitializer>
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}