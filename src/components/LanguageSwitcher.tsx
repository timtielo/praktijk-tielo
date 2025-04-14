import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();
  const location = useLocation();

  // Map of Dutch routes to English routes and vice versa
  const routeMapping: Record<string, string> = {
    // Dutch to English
    '/': '/en',
    '/contact': '/en/contact',
    '/reviews': '/en/reviews',
    '/disclaimer': '/en/disclaimer',
    '/over-ons': '/en/about-us',
    '/werveltherapie': '/en/vertebral-therapy',
    '/rugpijn-en-lage-rugklachten': '/en/back-pain-treatment',
    '/alternatief-voor-chiropractor': '/en/alternative-to-chiropractic',
    '/sportblessures-behandeling': '/en/sports-injury-treatment',
    '/burnout-stress-behandeling': '/en/burnout-stress-treatment',
    '/bloedgroepen-dieet': '/en/blood-type-diet',
    '/blessure': '/en/injury',
    '/rugpijn': '/en/back-pain',
    '/oplossingen': '/en/solutions',
    '/bindweefselbehandeling': '/en/connective-tissue-treatment',
    '/scoliose': '/en/scoliosis',
    '/verlichting-zonder-kraken': '/en/relief-without-cracking',
    '/slaapproblemen': '/en/sleep-problems',
    '/migraine-behandeling': '/en/migraine-treatment',
    '/depressie-behandeling': '/en/depression-treatment',
    '/rug-nek-problemen': '/en/back-neck-problems',
    
    // English to Dutch
    '/en': '/',
    '/en/contact': '/contact',
    '/en/reviews': '/reviews',
    '/en/disclaimer': '/disclaimer',
    '/en/about-us': '/over-ons',
    '/en/vertebral-therapy': '/werveltherapie',
    '/en/back-pain-treatment': '/rugpijn-en-lage-rugklachten',
    '/en/alternative-to-chiropractic': '/alternatief-voor-chiropractor',
    '/en/sports-injury-treatment': '/sportblessures-behandeling',
    '/en/burnout-stress-treatment': '/burnout-stress-behandeling',
    '/en/blood-type-diet': '/bloedgroepen-dieet',
    '/en/injury': '/blessure',
    '/en/back-pain': '/rugpijn',
    '/en/solutions': '/oplossingen',
    '/en/connective-tissue-treatment': '/bindweefselbehandeling',
    '/en/scoliosis': '/scoliose',
    '/en/relief-without-cracking': '/verlichting-zonder-kraken',
    '/en/sleep-problems': '/slaapproblemen',
    '/en/migraine-treatment': '/migraine-behandeling',
    '/en/depression-treatment': '/depressie-behandeling',
    '/en/back-neck-problems': '/rug-nek-problemen'
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage.startsWith('nl') ? 'en' : 'nl';
    i18n.changeLanguage(newLanguage);
    
    // Get the corresponding route in the new language
    const currentPath = location.pathname;
    
    // Check if we have a direct mapping for this path
    if (routeMapping[currentPath]) {
      navigate(routeMapping[currentPath]);
      return;
    }
    
    // If no direct mapping, use the default logic
    if (newLanguage === 'en') {
      // For English, add /en prefix
      const englishPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      navigate(englishPath);
    } else {
      // For Dutch, remove /en prefix
      let dutchPath = currentPath;
      if (currentPath.startsWith('/en/')) {
        dutchPath = currentPath.replace('/en', '');
      } else if (currentPath === '/en') {
        dutchPath = '/';
      }
      navigate(dutchPath);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      aria-label={t('header.language')}
    >
      <Globe className="w-4 h-4" />
      <span>{currentLanguage.startsWith('nl') ? 'EN' : 'NL'}</span>
    </button>
  );
}