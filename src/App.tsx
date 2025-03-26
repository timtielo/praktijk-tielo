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
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));

// Lazy load landing pages
const BackPainPage = lazy(() => import('./pages/landing/BackPainPage').then(module => ({ default: module.BackPainPage })));
const ChiropractorPage = lazy(() => import('./pages/landing/ChiropractorPage').then(module => ({ default: module.ChiropractorPage })));
const SportsInjuriesPage = lazy(() => import('./pages/landing/SportsInjuriesPage').then(module => ({ default: module.SportsInjuriesPage })));
const BurnoutPage = lazy(() => import('./pages/landing/BurnoutPage').then(module => ({ default: module.BurnoutPage })));
const BloodTypeDietPage = lazy(() => import('./pages/landing/BloodTypeDietPage').then(module => ({ default: module.BloodTypeDietPage })));
const KneeInjuryPage = lazy(() => import('./pages/landing/KneeInjuryPage').then(module => ({ default: module.KneeInjuryPage })));
const BackPainTreatmentPage = lazy(() => import('./pages/landing/BackPainTreatmentPage').then(module => ({ default: module.BackPainTreatmentPage })));
const ConnectiveTissuePage = lazy(() => import('./pages/landing/ConnectiveTissuePage').then(module => ({ default: module.ConnectiveTissuePage })));
const ScoliosisPage = lazy(() => import('./pages/landing/ScoliosisPage').then(module => ({ default: module.ScoliosisPage })));
const NoBackCrackingPage = lazy(() => import('./pages/landing/NoBackCrackingPage').then(module => ({ default: module.NoBackCrackingPage })));
const SleepProblemsPage = lazy(() => import('./pages/landing/SleepProblemsPage').then(module => ({ default: module.SleepProblemsPage })));
const MigrainePage = lazy(() => import('./pages/landing/MigrainePage').then(module => ({ default: module.MigrainePage })));
const DepressionPage = lazy(() => import('./pages/landing/DepressionPage').then(module => ({ default: module.DepressionPage })));

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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/oplossingen" element={<SolutionsPage />} />
            <Route path="/blessure" element={<KneeInjuryPage />} />
            <Route path="/rugpijn" element={<BackPainTreatmentPage />} />
            <Route path="/bindweefselbehandeling" element={<ConnectiveTissuePage />} />
            <Route path="/scoliose" element={<ScoliosisPage />} />
            <Route path="/verlichting-zonder-kraken" element={<NoBackCrackingPage />} />
            <Route path="/slaapproblemen" element={<SleepProblemsPage />} />
            <Route path="/migraine-behandeling" element={<MigrainePage />} />
            <Route path="/depressie-behandeling" element={<DepressionPage />} />
            
            {/* Dutch Landing Pages */}
            <Route path="/rugpijn-en-lage-rugklachten" element={<BackPainPage />} />
            <Route path="/alternatief-voor-chiropractor" element={<ChiropractorPage />} />
            <Route path="/sportblessures-behandeling" element={<SportsInjuriesPage />} />
            <Route path="/burnout-stress-behandeling" element={<BurnoutPage />} />
            <Route path="/bloedgroepen-dieet" element={<BloodTypeDietPage />} />
            
            {/* English routes */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/contact" element={<ContactPage />} />
            <Route path="/en/disclaimer" element={<DisclaimerPage />} />
            <Route path="/en/reviews" element={<ReviewsPage />} />
            <Route path="/en/about-us" element={<AboutUsPage />} />
            <Route path="/en/blog" element={<BlogPage />} />
            <Route path="/en/blog/:slug" element={<BlogPostPage />} />
            <Route path="/en/solutions" element={<SolutionsPage />} />
            <Route path="/en/injury" element={<KneeInjuryPage />} />
            <Route path="/en/back-pain" element={<BackPainTreatmentPage />} />
            <Route path="/en/connective-tissue-treatment" element={<ConnectiveTissuePage />} />
            <Route path="/en/scoliosis" element={<ScoliosisPage />} />
            <Route path="/en/relief-without-cracking" element={<NoBackCrackingPage />} />
            <Route path="/en/sleep-problems" element={<SleepProblemsPage />} />
            <Route path="/en/migraine-treatment" element={<MigrainePage />} />
            <Route path="/en/depression-treatment" element={<DepressionPage />} />
            
            {/* English Landing Pages */}
            <Route path="/en/back-pain-treatment" element={<BackPainPage />} />
            <Route path="/en/alternative-to-chiropractic" element={<ChiropractorPage />} />
            <Route path="/en/sports-injury-treatment" element={<SportsInjuriesPage />} />
            <Route path="/en/burnout-stress-treatment" element={<BurnoutPage />} />
            <Route path="/en/blood-type-diet" element={<BloodTypeDietPage />} />
            
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