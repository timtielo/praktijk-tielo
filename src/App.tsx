import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ScrollToTop } from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';

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
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Default routes (Dutch) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          
          {/* English routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/disclaimer" element={<DisclaimerPage />} />
          <Route path="/en/reviews" element={<ReviewsPage />} />
          
          {/* Fallback for any other route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;