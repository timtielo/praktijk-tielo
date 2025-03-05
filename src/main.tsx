import { StrictMode, lazy, Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './i18n';
import { LoadingScreen } from './components/LoadingScreen';
import { setupLazyLoading, setupResponsiveImages } from './utils/lazyLoadImages';
import { initCookieConsent } from './utils/cookieConsent';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Component to initialize performance optimizations
function AppInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize cookie consent
    initCookieConsent();
    
    // Setup lazy loading for images
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
    window.addEventListener('beforeprint', () => {
      // Load any deferred resources before printing
      const deferredImages = document.querySelectorAll('img[loading="lazy"]');
      deferredImages.forEach((img: HTMLImageElement) => {
        img.loading = 'eager';
      });
    });
    
    return () => {
      window.removeEventListener('beforeprint', () => {});
    };
  }, []);
  
  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppInitializer>
          <Suspense fallback={<LoadingScreen />}>
            <App />
          </Suspense>
        </AppInitializer>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);