import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/testimonials';
import { googleReviewsData } from '../data/googleReviews';

interface GoogleReviewsProps {
  placeId: string;
  className?: string;
  limit?: number;
}

export function GoogleReviews({ 
  placeId, 
  className,
  limit = 5
}: GoogleReviewsProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Get localized testimonials
  const localizedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    text: currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)
  })).slice(0, limit);

  const formatDate = () => {
    const date = new Date();
    return new Intl.DateTimeFormat(currentLanguage.startsWith('nl') ? 'nl-NL' : 'en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold">{googleReviewsData.averageRating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-5 h-5", 
                    i < Math.round(googleReviewsData.averageRating) 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  )} 
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            {googleReviewsData.totalReviews} {t('reviewsPage.googleReviews.reviewsOnGoogle')}
          </p>
        </div>
        <a 
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>{t('reviewsPage.googleReviews.viewAll')}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Reviews list */}
      <div className="grid gap-4">
        {localizedTestimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id || index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/assets/logos/praktijktielotransparent.svg';
                  img.classList.add('error-fallback');
                }}
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <span className="text-gray-500 text-sm">{formatDate()}</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -left-1 -top-2 w-6 h-6 text-blue-100 rotate-180" />
                  <p className="text-gray-700 pl-6">{testimonial.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google attribution */}
      <div className="text-center text-sm text-gray-500">
        <p>{t('reviewsPage.googleReviews.attribution')}</p>
      </div>
    </div>
  );
}