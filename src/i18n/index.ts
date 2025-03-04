import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

// Import English translations
import enMeta from './locales/en/meta.json';
import enHeader from './locales/en/header.json';
import enHero from './locales/en/hero.json';
import enStatistics from './locales/en/statistics.json';
import enSymptoms from './locales/en/symptoms.json';
import enSolution from './locales/en/solution.json';
import enTestimonials from './locales/en/testimonials.json';
import enUsps from './locales/en/usps.json';
import enContact from './locales/en/contact.json';
import enContactPage from './locales/en/contactPage.json';
import enReviewsPage from './locales/en/reviewsPage.json';
import enAboutUs from './locales/en/aboutUs.json';
import enDisclaimer from './locales/en/disclaimer.json';
import enFooter from './locales/en/footer.json';

// Import Dutch translations
import nlMeta from './locales/nl/meta.json';
import nlHeader from './locales/nl/header.json';
import nlHero from './locales/nl/hero.json';
import nlStatistics from './locales/nl/statistics.json';
import nlSymptoms from './locales/nl/symptoms.json';
import nlSolution from './locales/nl/solution.json';
import nlTestimonials from './locales/nl/testimonials.json';
import nlUsps from './locales/nl/usps.json';
import nlContact from './locales/nl/contact.json';
import nlContactPage from './locales/nl/contactPage.json';
import nlReviewsPage from './locales/nl/reviewsPage.json';
import nlAboutUs from './locales/nl/aboutUs.json';
import nlDisclaimer from './locales/nl/disclaimer.json';
import nlFooter from './locales/nl/footer.json';

// Merge all English translations
const enTranslation = {
  meta: enMeta,
  header: enHeader,
  hero: enHero,
  statistics: enStatistics,
  symptoms: enSymptoms,
  solution: enSolution,
  testimonials: enTestimonials,
  usps: enUsps,
  contact: enContact,
  contactPage: enContactPage,
  reviewsPage: enReviewsPage,
  aboutUs: enAboutUs,
  disclaimer: enDisclaimer,
  footer: enFooter
};

// Merge all Dutch translations
const nlTranslation = {
  meta: nlMeta,
  header: nlHeader,
  hero: nlHero,
  statistics: nlStatistics,
  symptoms: nlSymptoms,
  solution: nlSolution,
  testimonials: nlTestimonials,
  usps: nlUsps,
  contact: nlContact,
  contactPage: nlContactPage,
  reviewsPage: nlReviewsPage,
  aboutUs: nlAboutUs,
  disclaimer: nlDisclaimer,
  footer: nlFooter
};

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