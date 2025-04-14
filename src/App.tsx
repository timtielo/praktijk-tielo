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
const BeforeTreatmentPage = lazy(() => import('./pages/BeforeTreatmentPage').then(module => ({ default: module.BeforeTreatmentPage })));
const AfterTreatmentPage = lazy(() => import('./pages/AfterTreatmentPage').then(module => ({ default: module.AfterTreatmentPage })));
const VertebraTherapyPage = lazy(() => import('./pages/VertebraTherapyPage').then(module => ({ default: module.VertebraTherapyPage })));

// Lazy load landing pages
const BackPainPage = lazy(() => import('./pages/landing/BackPainPage').then(module => ({ default: module.BackPainPage })));
const BackPainPage2 = lazy(() => import('./pages/landing/BackPainPage2').then(module => ({ default: module.BackPainPage2 })));
const ChiropractorPage = lazy(() => import('./pages/landing/ChiropractorPage').then(module => ({ default: module.ChiropractorPage })));
const SportsInjuriesPage = lazy(() => import('./pages/landing/SportsInjuriesPage').then(module => ({ default: module.SportsInjuriesPage })));
const SportsInjuriesPage2 = lazy(() => import('./pages/landing/SportsInjuriesPage2').then(module => ({ default: module.SportsInjuriesPage2 })));
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
const BackNeckProblemsPage = lazy(() => import('./pages/landing/BackNeckProblemsPage').then(module => ({ default: module.BackNeckProblemsPage })));
const BackNeckProblemsPage2 = lazy(() => import('./pages/landing/BackNeckProblemsPage2').then(module => ({ default: module.BackNeckProblemsPage2 })));

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

  // Check if we're on the standalone landing page
  const isStandalonePage = 
    location.pathname === '/sportblessures-behandeling2' || 
    location.pathname === '/en/sports-injury-treatment2' ||
    location.pathname === '/rugpijn-en-lage-rugklachten2' ||
    location.pathname === '/en/back-pain-treatment2' ||
    location.pathname === '/rug-nek-problemen2' ||
    location.pathname === '/en/back-neck-problems2';

  // If it's the standalone page, render without header/footer
  if (isStandalonePage) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <ScrollToTop />
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/sportblessures-behandeling2" element={<SportsInjuriesPage2 />} />
              <Route path="/en/sports-injury-treatment2" element={<SportsInjuriesPage2 />} />
              <Route path="/rugpijn-en-lage-rugklachten2" element={<BackPainPage2 />} />
              <Route path="/en/back-pain-treatment2" element={<BackPainPage2 />} />
              <Route path="/rug-nek-problemen2" element={<BackNeckProblemsPage2 />} />
              <Route path="/en/back-neck-problems2" element={<BackNeckProblemsPage2 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    );
  }

  // Regular layout with header and footer
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
            <Route path="/voor-de-behandeling" element={<BeforeTreatmentPage />} />
            <Route path="/na-de-behandeling" element={<AfterTreatmentPage />} />
            <Route path="/werveltherapie" element={<VertebraTherapyPage />} />
            <Route path="/blessure" element={<KneeInjuryPage />} />
            <Route path="/rugpijn" element={<BackPainTreatmentPage />} />
            <Route path="/bindweefselbehandeling" element={<ConnectiveTissuePage />} />
            <Route path="/scoliose" element={<ScoliosisPage />} />
            <Route path="/verlichting-zonder-kraken" element={<NoBackCrackingPage />} />
            <Route path="/slaapproblemen" element={<SleepProblemsPage />} />
            <Route path="/migraine-behandeling" element={<MigrainePage />} />
            <Route path="/depressie-behandeling" element={<DepressionPage />} />
            <Route path="/rug-nek-problemen" element={<BackNeckProblemsPage />} />
            {/* Redirect from old URL to new URL */}
            <Route path="/rug-nek-klachten" element={<Navigate to="/rug-nek-problemen" replace />} />
            
            {/* Dutch Landing Pages */}
            <Route path="/rugpijn-en-lage-rugklachten" element={<BackPainPage />} />
            <Route path="/rugpijn-en-lage-rugklachten2" element={<BackPainPage2 />} />
            <Route path="/alternatief-voor-chiropractor" element={<ChiropractorPage />} />
            <Route path="/sportblessures-behandeling" element={<SportsInjuriesPage />} />
            <Route path="/sportblessures-behandeling2" element={<SportsInjuriesPage2 />} />
            <Route path="/burnout-stress-behandeling" element={<BurnoutPage />} />
            <Route path="/bloedgroepen-dieet" element={<BloodTypeDietPage />} />
            <Route path="/rug-nek-problemen2" element={<BackNeckProblemsPage2 />} />
            
            {/* English routes */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/contact" element={<ContactPage />} />
            <Route path="/en/disclaimer" element={<DisclaimerPage />} />
            <Route path="/en/reviews" element={<ReviewsPage />} />
            <Route path="/en/about-us" element={<AboutUsPage />} />
            <Route path="/en/blog" element={<BlogPage />} />
            <Route path="/en/blog/:slug" element={<BlogPostPage />} />
            <Route path="/en/solutions" element={<SolutionsPage />} />
            <Route path="/en/before-treatment" element={<BeforeTreatmentPage />} />
            <Route path="/en/after-treatment" element={<AfterTreatmentPage />} />
            <Route path="/en/vertebral-therapy" element={<VertebraTherapyPage />} />
            <Route path="/en/injury" element={<KneeInjuryPage />} />
            <Route path="/en/back-pain" element={<BackPainTreatmentPage />} />
            <Route path="/en/connective-tissue-treatment" element={<ConnectiveTissuePage />} />
            <Route path="/en/scoliosis" element={<ScoliosisPage />} />
            <Route path="/en/relief-without-cracking" element={<NoBackCrackingPage />} />
            <Route path="/en/sleep-problems" element={<SleepProblemsPage />} />
            <Route path="/en/migraine-treatment" element={<MigrainePage />} />
            <Route path="/en/depression-treatment" element={<DepressionPage />} />
            <Route path="/en/back-neck-problems" element={<BackNeckProblemsPage />} />
            
            {/* English Landing Pages */}
            <Route path="/en/back-pain-treatment" element={<BackPainPage />} />
            <Route path="/en/back-pain-treatment2" element={<BackPainPage2 />} />
            <Route path="/en/alternative-to-chiropractic" element={<ChiropractorPage />} />
            <Route path="/en/sports-injury-treatment" element={<SportsInjuriesPage />} />
            <Route path="/en/sports-injury-treatment2" element={<SportsInjuriesPage2 />} />
            <Route path="/en/burnout-stress-treatment" element={<BurnoutPage />} />
            <Route path="/en/blood-type-diet" element={<BloodTypeDietPage />} />
            <Route path="/en/back-neck-problems2" element={<BackNeckProblemsPage2 />} />
            
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