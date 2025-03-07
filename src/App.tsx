import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then(module => ({ default: module.DisclaimerPage })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(module => ({ default: module.ReviewsPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(module => ({ default: module.AboutUsPage })));

// Lazy load landing pages
const BackPainPage = lazy(() => import('./pages/landing/BackPainPage').then(module => ({ default: module.BackPainPage })));
const ChiropractorPage = lazy(() => import('./pages/landing/ChiropractorPage').then(module => ({ default: module.ChiropractorPage })));
const SportsInjuriesPage = lazy(() => import('./pages/landing/SportsInjuriesPage').then(module => ({ default: module.SportsInjuriesPage })));
const BurnoutPage = lazy(() => import('./pages/landing/BurnoutPage').then(module => ({ default: module.BurnoutPage })));

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  // Extract language from URL path if present
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (firstSegment === 'en') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('nl');
    }
  }, [location.pathname, i18n]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            {/* Default routes (Dutch) */}
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/over-ons" element={<AboutUsPage />} />
            
            {/* Dutch Landing Pages */}
            <Route path="/rugpijn-en-lage-rugklachten" element={<BackPainPage />} />
            <Route path="/alternatief-voor-chiropractor" element={<ChiropractorPage />} />
            <Route path="/sportblessures-behandeling" element={<SportsInjuriesPage />} />
            <Route path="/burnout-stress-behandeling" element={<BurnoutPage />} />
            
            {/* English routes */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/contact" element={<ContactPage />} />
            <Route path="/en/disclaimer" element={<DisclaimerPage />} />
            <Route path="/en/reviews" element={<ReviewsPage />} />
            <Route path="/en/about-us" element={<AboutUsPage />} />
            
            {/* English Landing Pages */}
            <Route path="/en/back-pain-treatment" element={<BackPainPage />} />
            <Route path="/en/alternative-to-chiropractic" element={<ChiropractorPage />} />
            <Route path="/en/sports-injury-treatment" element={<SportsInjuriesPage />} />
            <Route path="/en/burnout-stress-treatment" element={<BurnoutPage />} />
            
            {/* Fallback for any other route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;