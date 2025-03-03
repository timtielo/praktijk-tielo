import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';

// Language resources
const resources = {
  en: {
    translation: enTranslation
  },
  nl: {
    translation: nlTranslation
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'nl', // Default language is Dutch
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false // React already safes from XSS
    },
    
    detection: {
      order: ['path', 'cookie', 'navigator'],
      lookupCookie: 'i18nextLng',
      caches: ['cookie'],
      lookupFromPathIndex: 0,
      cookieExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
    }
  });

// Function to change language and save preference
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  Cookies.set('i18nextLng', language, { expires: 365 });
};

export default i18n;