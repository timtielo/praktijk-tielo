import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';

// Filter relevant testimonials
const backPainTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('rug') || 
  t.text.toLowerCase().includes('back')
);

export function BackPainPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <>
      <SEO 
        titleKey="landing.backPain.meta.title"
        descriptionKey="landing.backPain.meta.description"
        canonicalPath="/rugpijn-en-lage-rugklachten"
        keywords={[
          'rugpijn behandeling',
          'lage rugklachten',
          'rugpijn verhelpen',
          'natuurlijke behandeling rugpijn',
          'alternatieve behandeling rug',
          'rugklachten utrecht'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('landing.backPain.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {t('landing.backPain.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${businessInfo.contact.phone}`}
                  className="btn-cta btn-cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-5 h-5" />
                  {businessInfo.contact.phone}
                </a>
                <Link
                  to="/contact"
                  className="btn-cta bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-gray-200"
                >
                  <Calendar className="w-5 h-5" />
                  {t('landing.backPain.hero.schedule')}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.backPain.benefits.natural')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.backPain.benefits.lasting')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.backPain.benefits.quick')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.backPain.benefits.personal')}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt="Rugpijn behandeling"
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('landing.backPain.problem.title')}
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {t('landing.backPain.problem.symptoms.title')}
                </h3>
                <ul className="space-y-3">
                  {t('landing.backPain.problem.symptoms.list', { returnObjects: true }).map((symptom: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {t('landing.backPain.solution.title')}
                </h3>
                <p className="mb-4">{t('landing.backPain.solution.description')}</p>
                <ul className="space-y-3">
                  {t('landing.backPain.solution.benefits', { returnObjects: true }).map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('landing.backPain.testimonials.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {backPainTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id || index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-blue-100 rotate-180" />
                  <p className="text-gray-700 pl-6">
                    {currentLanguage.startsWith('nl') ? testimonial.text : (testimonial.textEn || testimonial.text)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('landing.backPain.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('landing.backPain.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {businessInfo.contact.phone}
              </a>
              <Link
                to="/contact"
                className="btn-cta bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                {t('landing.backPain.cta.schedule')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}