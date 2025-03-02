import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials, type Testimonial } from '../data/testimonials';
import { useTranslation } from 'react-i18next';

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Get the appropriate text based on the current language
  const testimonialText = currentLanguage.startsWith('nl') 
    ? testimonial.text 
    : (testimonial.textEn || testimonial.text);
  
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
      <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
        <Quote className="w-12 h-12 text-blue-600/20 mb-6" />
        <p className="text-lg text-gray-700 flex-grow">{testimonialText}</p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={testimonial.id || index} 
          testimonial={testimonial} 
          isActive={index === currentIndex} 
        />
      ))}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id || index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const scrollToTreatment = () => {
    const element = document.getElementById('behandelmethode');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {currentLanguage.startsWith('nl') ? (
                <>
                  {t('hero.title').split('klachten')[0]}<span className="text-blue-600">klachten</span>?
                </>
              ) : (
                <>
                  Do you have physical or mental <span className="text-blue-600">complaints</span>?
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="btn-cta btn-cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
              >
                {t('hero.cta.appointment')} <ChevronRight className="w-5 h-5" />
              </Link>
              <button
                onClick={scrollToTreatment}
                className="btn-cta bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-gray-200"
              >
                {t('hero.cta.approach')}
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-8 items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{t('hero.benefits.quickResults')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{t('hero.benefits.personalApproach')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{t('hero.benefits.gentleTreatment')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{t('hero.benefits.flexibleHours')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side testimonials */}
          <div className="w-full lg:w-[40%] aspect-square max-w-lg">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}