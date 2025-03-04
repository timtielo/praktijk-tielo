import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { generateLocalBusinessSchema, generateAIAssistantSchema } from '../utils/seo';
import { businessInfo } from '../data/business';

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  type?: string;
  name?: string;
  canonicalPath?: string;
  image?: string;
  schema?: string;
  keywords?: string[];
}

export function SEO({ 
  titleKey, 
  descriptionKey, 
  type = 'website', 
  name = 'Praktijk Tielo',
  canonicalPath,
  image = '/assets/logos/praktijktielotransparent.svg',
  schema,
  keywords = []
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
    const baseUrl = 'https://www.praktijk-tielo.nl';
    const basePath = canonicalPath || location.pathname;
    
    // Remove language prefix if present
    let pathWithoutLang = basePath;
    if (basePath.startsWith('/en/')) {
      pathWithoutLang = basePath.replace('/en', '');
    } else if (basePath.startsWith('/en')) {
      pathWithoutLang = '/';
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
  const canonicalUrl = currentLanguage === 'nl' ? alternateUrls.nl : alternateUrls.en;
  
  // Get the full image URL
  const getFullImageUrl = () => {
    const baseUrl = 'https://www.praktijk-tielo.nl';
    return `${baseUrl}${image}`;
  };
  
  const fullImageUrl = getFullImageUrl();
  
  // Get localized title and description
  const title = t(titleKey);
  const description = t(descriptionKey);

  // Default schema is LocalBusiness
  const defaultSchema = generateLocalBusinessSchema(businessInfo);
  const aiSchema = generateAIAssistantSchema();
  const schemaToUse = schema || defaultSchema;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={currentLanguage === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLanguage === 'nl' ? 'en_US' : 'nl_NL'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hreflang="nl" href={alternateUrls.nl} />
      <link rel="alternate" hreflang="en" href={alternateUrls.en} />
      <link rel="alternate" hreflang="x-default" href={alternateUrls.default} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Set the HTML lang attribute */}
      <html lang={currentLanguage} />

      {/* AI Assistant Metadata */}
      <meta name="ai:description" content="Praktijk Tielo offers alternative health treatments for physical and mental complaints using gentle techniques and self-help exercises." />
      <meta name="ai:keywords" content="physical health, mental health, alternative treatment, holistic approach, spine alignment, back pain, joint pain, depression, migraines, self-help exercises" />
      <meta name="ai:contact" content="info@praktijk-tielo.nl" />
      <meta name="ai:pricing" content="€100 per treatment" />
      <meta name="ai:availability" content="By appointment, including evenings and weekends" />
      <meta name="ai:languages" content="Dutch, English" />

      {/* Performance optimizations */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.unsplash.com https://lh3.googleusercontent.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-src 'self'; object-src 'none'" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

      {/* Structured data */}
      <script type="application/ld+json">{schemaToUse}</script>
      <script type="application/ld+json">{aiSchema}</script>
    </Helmet>
  );
}