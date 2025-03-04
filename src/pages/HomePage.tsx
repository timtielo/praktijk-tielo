import React from 'react';
import { Hero } from '../components/Hero';
import { Symptoms } from '../components/Symptoms';
import { Solution } from '../components/Solution';
import { Testimonials } from '../components/Testimonials';
import { USPs } from '../components/USPs';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { useLocation } from 'react-router-dom';

export function HomePage() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Define keywords specific to the home page
  const homePageKeywords = [
    'alternatieve geneeswijze',
    'holistische behandeling',
    'natuurlijke behandelmethode',
    'fysieke klachten behandeling',
    'mentale klachten behandeling',
    'gezondheidsklachten',
    'pijnbestrijding',
    'gezondheidstherapie',
    'lichaamshouding correctie',
    'wervelkolom uitlijning'
  ];
  
  return (
    <>
      <SEO 
        titleKey="meta.home.title"
        descriptionKey="meta.home.description"
        canonicalPath={isEnglish ? "/en" : "/"}
        keywords={homePageKeywords}
      />
      <Hero />
      <Symptoms />
      <Solution />
      <Testimonials />
      <USPs />
      <Contact />
    </>
  );
}