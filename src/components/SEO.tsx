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
  canonicalUrl?: string;
  alternateUrls?: {
    nl: string;
    en: string;
  };
  image?: string;
  schema?: string;
  keywords?: string[];
}

export function SEO({ 
  titleKey, 
  descriptionKey, 
  type = 'website', 
  name = 'Praktijk Tielo',
  canonicalUrl,
  alternateUrls,
  image = '/assets/logos/praktijktielo.png',
  schema,
  keywords = []
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  
  // Get the base URL
  const baseUrl = 'https://www.praktijk-tielo.nl';
  
  // Get the canonical URL
  const getCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    
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
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={currentLanguage === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLanguage === 'nl' ? 'en_US' : 'nl_NL'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Language alternates */}
      {alternateUrls && (
        <>
          <link rel="alternate" hreflang="nl" href={alternateUrls.nl} />
          <link rel="alternate" hreflang="en" href={alternateUrls.en} />
          <link rel="alternate" hreflang="x-default" href={alternateUrls.nl} />
        </>
      )}
      
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