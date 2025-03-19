import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { generateLocalBusinessSchema, generateAIAssistantSchema } from '../utils/seo';
import { businessInfo } from '../data/business';
import type { SEOFields } from '../lib/contentful';

interface SEOProps {
  title?: string;
  description?: string;
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
  contentfulSeo?: SEOFields;
}

export function SEO({ 
  title,
  description,
  type = 'website',
  name = 'Praktijk Tielo',
  canonicalUrl,
  alternateUrls,
  image = '/assets/logos/praktijktielotransparent.svg',
  schema,
  keywords = [],
  contentfulSeo
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  
  // Get the base URL
  const baseUrl = 'https://www.praktijk-tielo.nl';
  
  // Get the canonical URL
  const getCanonicalUrl = () => {
    if (contentfulSeo?.canonicalUrl) return contentfulSeo.canonicalUrl;
    if (canonicalUrl) return canonicalUrl;
    
    // If no canonical URL is provided, generate one based on current path
    const path = location.pathname;
    return `${baseUrl}${path}`;
  };
  
  // Get the full image URL
  const getFullImageUrl = () => {
    if (contentfulSeo?.shareImages?.[0]) {
      return `https:${contentfulSeo.shareImages[0].fields.file.url}`;
    }
    return `${baseUrl}${image}`;
  };

  // Get title and description
  const pageTitle = contentfulSeo?.pageTitle || title || t('meta.home.title');
  const pageDescription = contentfulSeo?.pageDescription || description || t('meta.home.description');
  
  // Default schema is LocalBusiness
  const defaultSchema = generateLocalBusinessSchema(businessInfo);
  const aiSchema = generateAIAssistantSchema();
  const schemaToUse = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Robots meta tags */}
      {contentfulSeo && (
        <meta 
          name="robots" 
          content={`${contentfulSeo.noindex ? 'noindex' : 'index'},${contentfulSeo.nofollow ? 'nofollow' : 'follow'}`} 
        />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={getFullImageUrl()} />
      <meta property="og:locale" content={currentLanguage === 'nl' ? 'nl_NL' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLanguage === 'nl' ? 'en_US' : 'nl_NL'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={getFullImageUrl()} />
      
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