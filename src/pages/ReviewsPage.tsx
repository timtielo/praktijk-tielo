import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useTranslation } from 'react-i18next';

export function ReviewsPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Get localized testimonials
  const localizedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    text: currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)
  }));
  
  const formatDate = () => {
    const date = new Date('2025-03-02'); // March 2, 2025
    const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
    return new Intl.DateTimeFormat(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <>
      <SEO 
        titleKey="meta.reviews.title"
        descriptionKey="meta.reviews.description"
        canonicalPath="/reviews"
      />
      
      {/* Reviews Hero */}
      <section className="min-h-[300px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('reviewsPage.hero.title')}</h1>
            <p className="text-gray-600 text-xl mb-8">
              {t('reviewsPage.hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('reviewsPage.clientTestimonials.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {localizedTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id || index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <span className="text-gray-500 text-sm">{formatDate()}</span>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-current" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="relative mt-2">
                      <Quote className="absolute -left-1 -top-2 w-6 h-6 text-blue-100 rotate-180" />
                      <p className="text-gray-700 pl-6">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('reviewsPage.cta.title')}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('reviewsPage.cta.subtitle')}
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            {t('reviewsPage.cta.button')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}