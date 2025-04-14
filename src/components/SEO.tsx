import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { generateLocalBusinessSchema, generateAIAssistantSchema } from '../utils/seo';
import { businessInfo } from '../data/business';
import { trackPageView } from '../utils/analytics';

interface SEOProps {
  titleKey?: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  canonicalUrl?: string;
  canonicalPath?: string;
  alternateUrls?: {
    nl: string;
    en: string;
  };
  image?: string;
  schema?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({ 
  titleKey,
  descriptionKey,
  title: directTitle,
  description: directDescription,
  type = 'website', 
  name = 'Praktijk Tielo',
  canonicalUrl,
  canonicalPath,
  alternateUrls,
  image = '/assets/logos/praktijktielo.png',
  schema,
  keywords = [],
  author = 'Tim Tielkemeijer',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  
  // Track page view when SEO component mounts
  React.useEffect(() => {
    const pageTitle = directTitle || (titleKey ? t(titleKey) : name);
    trackPageView({
      path: location.pathname,
      title: pageTitle,
      language: currentLanguage
    });
  }, [location.pathname, directTitle, titleKey, name, currentLanguage]);
  
  // Get the base URL
  const baseUrl = 'https://www.praktijk-tielo.nl';
  
  // Get the canonical URL
  const getCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    if (canonicalPath) return `${baseUrl}${canonicalPath}`;
    
    // If no canonical URL is provided, generate one based on current path
    const path = location.pathname;
    return `${baseUrl}${path}`;
  };
  
  // Get the full image URL
  const getFullImageUrl = () => {
    if (image.startsWith('http')) {
      return image;
    }
    return `${baseUrl}${image}`;
  };
  
  const fullImageUrl = getFullImageUrl();
  
  // Get localized title and description
  const pageTitle = directTitle || (titleKey ? t(titleKey) : name);
  const fullTitle = `${pageTitle} | Praktijk Tielo`;
  const pageDescription = directDescription || (descriptionKey ? t(descriptionKey) : '');

  // Default schema is LocalBusiness
  const defaultSchema = generateLocalBusinessSchema(businessInfo);
  const aiSchema = generateAIAssistantSchema();
  const schemaToUse = schema || defaultSchema;

  // Get alternate URLs based on current path
  const getAlternateUrls = () => {
    if (alternateUrls) return alternateUrls;

    const path = location.pathname;
    const isEnglish = path.startsWith('/en');
    const basePath = isEnglish ? path.replace('/en', '') : path;
    const englishPath = isEnglish ? path : `/en${path === '/' ? '' : path}`;
    const dutchPath = isEnglish ? basePath : path;

    return {
      nl: `${baseUrl}${dutchPath}`,
      en: `${baseUrl}${englishPath}`
    };
  };

  const alternates = getAlternateUrls();
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={currentLanguage === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLanguage === 'nl' ? 'en_US' : 'nl_NL'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hreflang="nl" href={alternates.nl} />
      <link rel="alternate" hreflang="en" href={alternates.en} />
      <link rel="alternate" hreflang="x-default" href={alternates.nl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Set the HTML lang attribute */}
      <html lang={currentLanguage} />

      {/* Structured data */}
      <script type="application/ld+json">{schemaToUse}</script>
      <script type="application/ld+json">{aiSchema}</script>
    </Helmet>
  );
}