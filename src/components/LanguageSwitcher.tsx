import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { changeLanguage } from '../i18n';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage.startsWith('nl') ? 'en' : 'nl';
    changeLanguage(newLanguage);
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