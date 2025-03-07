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
import { setupGlobalErrorHandling } from './utils/errors';
import { ErrorFallback } from './components/ErrorFallback';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Component to initialize performance optimizations
function AppInitializer({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Setup error handling first
    setupGlobalErrorHandling();

    // Wrap initialization in try-catch
    try {
      // Initialize performance monitoring
      if (window.performance && window.performance.mark) {
        window.performance.mark('app-init-start');
      }

      // Initialize app features
      setupLazyLoading();
      setupResponsiveImages();
      
      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://images.unsplash.com',
        'https://consent.cookiebot.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com'
      ];
      
      preconnectDomains.forEach(domain => {
        try {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          if (domain.includes('gstatic') || domain.includes('cookiebot')) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        } catch (error) {
          console.error(`Failed to preconnect to ${domain}:`, error);
        }
      });
      
      // Add event listener for print media
      const handleBeforePrint = () => {
        try {
          const deferredImages = document.querySelectorAll('img[loading="lazy"]');
          deferredImages.forEach((img: HTMLImageElement) => {
            img.loading = 'eager';
          });
        } catch (error) {
          console.error('Error in print handler:', error);
        }
      };
      
      window.addEventListener('beforeprint', handleBeforePrint);

      // Mark initialization complete
      if (window.performance && window.performance.mark) {
        window.performance.mark('app-init-end');
        window.performance.measure('app-initialization', 'app-init-start', 'app-init-end');
      }
      
      return () => {
        window.removeEventListener('beforeprint', handleBeforePrint);
      };
    } catch (error) {
      console.error('Error during app initialization:', error);
    }
  }, []);
  
  return <>{children}</>;
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary 
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset the app state here
          window.location.reload();
        }}
        onError={(error) => {
          console.error('Error caught by ErrorBoundary:', error);
        }}
      >
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