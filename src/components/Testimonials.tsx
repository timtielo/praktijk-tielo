import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';
import { extendedTestimonialsShadcn } from '../data/testimonials';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Testimonials() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
  // Get localized testimonials
  const localizedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    text: currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)
  }));
  
  // Create localized testimonials for the marquee
  const localizedExtendedTestimonialsShadcn = extendedTestimonialsShadcn.map((item, index) => {
    // For the first items that come from the original testimonials
    if (index < testimonials.length) {
      return {
        ...item,
        text: currentLanguage.startsWith('nl') ? 
          testimonials[index].text : 
          (testimonials[index].textEn || testimonials[index].text),
        author: {
          ...item.author,
          handle: currentLanguage.startsWith('nl') ? "Tevreden klant" : "Satisfied client"
        }
      };
    }
    
    // For the additional testimonials
    return {
      ...item,
      text: currentLanguage.startsWith('nl') ? item.text : "Placeholder review",
      author: {
        ...item.author,
        handle: currentLanguage.startsWith('nl') ? "Tevreden klant" : "Satisfied client"
      }
    };
  });
  
  return (
    <section className="py-12 bg-gray-50"> {/* Reduced padding */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center md:text-left">{t('testimonials.title')}</h2>
          <Link 
            to={getLocalizedPath('/reviews')}
            className="mt-4 md:mt-0 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>{t('testimonials.viewAll')}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* New marquee testimonials */}
        <div className="-mx-4">
          <TestimonialsSection
            title=""
            description=""
            testimonials={localizedExtendedTestimonialsShadcn}
            className="bg-gray-50 py-0"
          />
        </div>
        
        {/* Original testimonials grid as fallback for smaller screens */}
        <div className="md:hidden mt-6 grid gap-6"> {/* Reduced margin and gap */}
          {localizedTestimonials.map((testimonial) => (
            <div key={testimonial.id || testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}