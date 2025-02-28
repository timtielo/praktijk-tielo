import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';
import { extendedTestimonialsShadcn } from '../data/testimonials';
import { Link } from 'react-router-dom';

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50"> {/* Reduced padding */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center md:text-left">Wat onze klanten zeggen</h2>
          <Link 
            to="/reviews"
            className="mt-4 md:mt-0 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Bekijk alle reviews</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* New marquee testimonials */}
        <div className="-mx-4">
          <TestimonialsSection
            title=""
            description=""
            testimonials={extendedTestimonialsShadcn}
            className="bg-gray-50 py-0"
          />
        </div>
        
        {/* Original testimonials grid as fallback for smaller screens */}
        <div className="md:hidden mt-6 grid gap-6"> {/* Reduced margin and gap */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
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