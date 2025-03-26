import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Star, Quote, Search, X } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function ReviewsPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
  // Define keywords specific to the reviews page
  const reviewsPageKeywords = [
    'praktijk tielo reviews',
    'ervaringen praktijk tielo',
    'klantervaringen',
    'beoordelingen',
    'testimonials',
    'klantbeoordelingen',
    'wat klanten zeggen',
    'behandeling ervaringen',
    'alternatieve behandeling reviews'
  ];
  
  // Get localized testimonials and filter based on search
  const filteredTestimonials = useMemo(() => {
    const localizedTestimonials = testimonials.map(testimonial => ({
      ...testimonial,
      text: currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)
    }));

    if (!searchQuery) return localizedTestimonials;

    const query = searchQuery.toLowerCase();
    return localizedTestimonials.filter(testimonial => {
      const searchableText = testimonial.text.toLowerCase();
      return searchableText.includes(query);
    });
  }, [testimonials, searchQuery, currentLanguage]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = currentLanguage.startsWith('nl') ? 'nl-NL' : 'en-US';
    return new Intl.DateTimeFormat(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  // Common search terms suggestions
  const searchSuggestions = isEnglish ? [
    'back',
    'knee',
    'ankle',
    'posture',
    'sports',
    'flexibility',
    'scoliosis'
  ] : [
    'rug',
    'knie',
    'enkel',
    'houding',
    'sport',
    'flexibiliteit',
    'scoliose'
  ];

  // Clear search function
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  return (
    <>
      <SEO 
        titleKey="meta.reviews.title"
        descriptionKey="meta.reviews.description"
        canonicalPath={isEnglish ? "/en/reviews" : "/reviews"}
        keywords={reviewsPageKeywords}
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
        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEnglish ? "Search experiences..." : "Zoek ervaringen..."}
              className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={isEnglish ? "Clear search" : "Zoekopdracht wissen"}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {searchSuggestions.map((term, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(term)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  searchQuery === term
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('reviewsPage.clientTestimonials.title')}</h2>
          
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                {isEnglish 
                  ? "No reviews found matching your search." 
                  : "Geen reviews gevonden die overeenkomen met je zoekopdracht."}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop view: Grid layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {filteredTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id || index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/assets/logos/praktijktielotransparent.svg';
                          img.classList.add('error-fallback');
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <span className="text-gray-500 text-sm">{formatDate(testimonial.date)}</span>
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
              
              {/* Mobile view: Swipeable testimonials */}
              <div className="md:hidden">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{ 
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600',
                    bulletClass: 'swiper-pagination-bullet bg-gray-300 inline-block rounded-full w-2 h-2 mx-1 cursor-pointer transition-all duration-300'
                  }}
                  className="pb-10"
                >
                  {filteredTestimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id || index}>
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = '/assets/logos/praktijktielotransparent.svg';
                              img.classList.add('error-fallback');
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                              <span className="text-gray-500 text-sm">{formatDate(testimonial.date)}</span>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </div>

        {/* Call to action */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('reviewsPage.cta.title')}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('reviewsPage.cta.subtitle')}
          </p>
          <Link 
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            {t('reviewsPage.cta.button')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}