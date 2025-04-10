import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { generateLocalBusinessSchema, generateAIAssistantSchema } from '../utils/seo';
import { businessInfo } from '../data/business';

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
      <meta name="googlebot" content="index, follow" />
      
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={currentLanguage === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLanguage === 'nl' ? 'en_US' : 'nl_NL'} />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && author && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {keywords.map((keyword, index) => (
            <meta key={index} property="article:tag" content={keyword} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@praktijktielo" />
      <meta name="twitter:creator" content="@praktijktielo" />
      
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

      {/* Additional SEO meta tags */}
      <meta name="author" content="Tim Tielkemeijer" />
      <meta name="geo.region" content="NL-UT" />
      <meta name="geo.placename" content="Utrecht" />
      <meta name="geo.position" content="52.090736;5.122700" />
      <meta name="ICBM" content="52.090736, 5.122700" />
      
      {/* Mobile meta tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Praktijk Tielo" />
      
      {/* Verification meta tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="b53c5c3604310370" />
      
      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
  );
}