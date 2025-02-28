import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  canonicalPath?: string;
}

export function SEO({ 
  title, 
  description, 
  type = 'website', 
  name = 'Praktijk Tielo',
  canonicalPath
}: SEOProps) {
  const fullTitle = `${title} | ${name}`;
  const baseUrl = 'https://www.praktijk-tielo.nl';
  const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" />

      {/* Additional SEO */}
      <meta name="keywords" content="praktijk tielo, rugklachten, utrecht, rugpijn, fysieke therapie, hoofdpijn" />
      <meta name="author" content="Praktijk Tielo" />
      <meta name="robots" content="index, follow" />
      
      {/* Language */}
      <html lang="nl" />
    </Helmet>
  );
}