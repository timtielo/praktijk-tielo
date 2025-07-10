import React from 'react';
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import './i18n';
import { LoadingScreen } from './components/LoadingScreen';
import { setupLazyLoading, setupResponsiveImages, preloadCriticalImages } from './utils/lazyLoadImages';
import { setupGlobalErrorHandling } from './utils/errorHandling';
import { ErrorFallback } from './components/ErrorFallback';
import { initAnalytics, verifyGTM, isCookiebotLoaded, updateGoogleConsent } from './utils/analytics';

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

      // Initialize analytics
      initAnalytics();
      
      // Verify GTM is working properly
      setTimeout(() => {
        verifyGTM();
      }, 2000); // Give GTM time to load
      
      // Setup Cookiebot event listener to update Google consent
      if (typeof window !== 'undefined') {
        window.addEventListener('CookiebotOnAccept', function() {
          updateGoogleConsent();
        });
        
        window.addEventListener('CookiebotOnDecline', function() {
          updateGoogleConsent();
        });
        
        // Check if Cookiebot is already loaded
        if (isCookiebotLoaded()) {
          updateGoogleConsent();
        }
      }

      // Initialize app features
      setupLazyLoading();
      setupResponsiveImages();
      preloadCriticalImages();
      
      // Fix for page refreshing issue - remove any auto-refresh meta tags
      const metaTags = document.querySelectorAll('meta[http-equiv="refresh"]');
      metaTags.forEach(tag => tag.remove());
      
      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://images.unsplash.com',
        'https://consent.cookiebot.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://hook.eu2.make.com',
        'https://connect.facebook.net',
        'https://www.facebook.com'
      ];
      
      preconnectDomains.forEach(domain => {
        try {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          if (domain.includes('gstatic') || domain.includes('cookiebot') || domain.includes('hook.eu2.make.com')) {
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
        window.removeEventListener('CookiebotOnAccept', updateGoogleConsent);
        window.removeEventListener('CookiebotOnDecline', updateGoogleConsent);
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