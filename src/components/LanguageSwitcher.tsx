import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage.startsWith('nl') ? 'en' : 'nl';
    i18n.changeLanguage(newLanguage);
    
    // Get current path without language prefix
    let currentPath = location.pathname;
    if (currentPath.startsWith('/en/')) {
      currentPath = currentPath.replace('/en', '');
    } else if (currentPath === '/en') {
      currentPath = '/';
    }
    
    // Navigate to the appropriate URL based on the new language
    if (newLanguage === 'en') {
      // For English, add /en prefix
      const englishPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      navigate(englishPath);
    } else {
      // For Dutch, remove /en prefix (already done above)
      navigate(currentPath);
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