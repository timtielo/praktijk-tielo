import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "../ui/testimonial-card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
    id?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  // Determine if we're on a mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-6 sm:py-12 md:py-16 px-0", // Reduced vertical padding
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-2 text-center sm:gap-8"> {/* Reduced gap */}
        {(title || description) && (
          <div className="flex flex-col items-center gap-2 px-4 sm:gap-4"> {/* Reduced gap */}
            {title && (
              <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Desktop: Marquee */}
          <div className="hidden md:flex group overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.slice(0, testimonials.length / 2).map((testimonial, i) => (
                <TestimonialCard 
                  key={`original-${testimonial.id || i}`}
                  {...testimonial}
                />
              ))}
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.slice(testimonials.length / 2).map((testimonial, i) => (
                <TestimonialCard 
                  key={`duplicate-${testimonial.id || i}-${Date.now()}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Swipeable */}
          <div className="md:hidden w-full px-4">
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
              {testimonials.slice(0, testimonials.length / 2).map((testimonial, i) => (
                <SwiperSlide key={`swiper-${testimonial.id || i}`}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}