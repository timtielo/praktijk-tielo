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
    
    // English to Dutch
    '/en': '/',
    '/en/contact': '/contact',
    '/en/reviews': '/reviews',
    '/en/disclaimer': '/disclaimer',
    '/en/about-us': '/over-ons'
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