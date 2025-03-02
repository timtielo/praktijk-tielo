import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  type?: string;
  name?: string;
  canonicalPath?: string;
}

export function SEO({ 
  titleKey, 
  descriptionKey, 
  type = 'website', 
  name = 'Praktijk Tielo',
  canonicalPath
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  
  // Determine if we're on a language-specific path
  const isLanguagePath = location.pathname.startsWith('/en') || location.pathname.startsWith('/nl');
  
  // Get the base URL without language prefix
  const getBaseUrl = () => {
    const baseUrl = 'https://www.praktijk-tielo.nl';
    if (!canonicalPath) return baseUrl;
    return `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  };
  
  // Get the alternate URLs for language versions
  const getAlternateUrls = () => {
    const baseUrl = getBaseUrl();
    const basePath = canonicalPath || location.pathname;
    
    // Remove language prefix if present
    let pathWithoutLang = basePath;
    if (basePath.startsWith('/en/')) {
      pathWithoutLang = basePath.replace('/en', '');
    } else if (basePath.startsWith('/nl/')) {
      pathWithoutLang = basePath.replace('/nl', '');
    }
    
    // Ensure path starts with /
    if (!pathWithoutLang.startsWith('/')) {
      pathWithoutLang = `/${pathWithoutLang}`;
    }
    
    // If path is just /, don't duplicate it
    const dutchPath = pathWithoutLang === '/' ? '' : pathWithoutLang;
    const englishPath = `/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    return {
      nl: `${baseUrl}${dutchPath}`,
      en: `${baseUrl}${englishPath}`,
      default: `${baseUrl}${dutchPath}`
    };
  };
  
  const alternateUrls = getAlternateUrls();
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={t(titleKey)} />
      <meta property="og:description" content={t(descriptionKey)} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t(titleKey)} />
      <meta name="twitter:description" content={t(descriptionKey)} />
      
      {/* Language alternates */}
      <link rel="alternate" hreflang="nl" href={alternateUrls.nl} />
      <link rel="alternate" hreflang="en" href={alternateUrls.en} />
      <link rel="alternate" hreflang="x-default" href={alternateUrls.default} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentLanguage === 'nl' ? alternateUrls.nl : alternateUrls.en} />
      
      {/* Set the HTML lang attribute */}
      <html lang={currentLanguage} />
    </Helmet>
  );
}