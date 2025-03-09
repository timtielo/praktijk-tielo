import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '../data/testimonials';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwipeableTestimonialsProps {
  limit?: number;
}

export function SwipeableTestimonials({ limit }: SwipeableTestimonialsProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Get localized testimonials
  const localizedTestimonials = testimonials
    .slice(0, limit)
    .map(testimonial => ({
      ...testimonial,
      text: currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)
    }));
  
  return (
    <div className="swipeable-testimonials">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600',
          bulletClass: 'swiper-pagination-bullet bg-gray-300 inline-block rounded-full w-2 h-2 mx-1 cursor-pointer transition-all duration-300'
        }}
        className="pb-10"
      >
        {localizedTestimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id || index}>
            <div className="bg-white rounded-xl p-6 shadow-sm">
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
                  <h3 className="font-semibold mb-2">{testimonial.name}</h3>
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
                  <p className="text-sm text-gray-500 mt-4">{t('testimonials.satisfiedClient')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}