import React from 'react';
import { Hero } from '../components/Hero';
import { Symptoms } from '../components/Symptoms';
import { Solution } from '../components/Solution';
import { Testimonials } from '../components/Testimonials';
import { USPs } from '../components/USPs';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <>
      <SEO 
        titleKey="meta.home.title"
        descriptionKey="meta.home.description"
        canonicalPath="/"
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