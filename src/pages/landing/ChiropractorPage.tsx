import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Heart, Shield, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';

// Filter relevant testimonials
const relevantTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('rug') || 
  t.text.toLowerCase().includes('gewricht') ||
  t.text.toLowerCase().includes('back') ||
  t.text.toLowerCase().includes('joint')
);

export function ChiropractorPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <>
      <SEO 
        titleKey="landing.chiropractor.meta.title"
        descriptionKey="landing.chiropractor.meta.description"
        canonicalPath="/alternatief-voor-chiropractor"
        keywords={[
          'alternatief voor chiropractor',
          'zachte wervelkolom behandeling',
          'fascie behandeling',
          'natuurlijke rugbehandeling',
          'wervelkolom correctie',
          'rugklachten utrecht',
          'geen kraken',
          'zachte behandelmethode'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('landing.chiropractor.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {t('landing.chiropractor.hero.subtitle')}
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
                  {t('landing.chiropractor.hero.schedule')}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.chiropractor.benefits.gentle')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.chiropractor.benefits.lasting')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.chiropractor.benefits.noCracking')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.chiropractor.benefits.fasciaFocus')}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt="Zachte wervelkolom behandeling zonder kraken"
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('landing.chiropractor.difference.title')}
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  {t('landing.chiropractor.difference.gentle.title')}
                </h3>
                <p className="mb-4">{t('landing.chiropractor.difference.gentle.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-blue-600" />
                  {t('landing.chiropractor.difference.fascia.title')}
                </h3>
                <p className="mb-4">{t('landing.chiropractor.difference.fascia.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-blue-600" />
                  {t('landing.chiropractor.difference.lasting.title')}
                </h3>
                <p className="mb-4">{t('landing.chiropractor.difference.lasting.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('landing.chiropractor.testimonials.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relevantTestimonials.map((testimonial, index) => (
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
              {t('landing.chiropractor.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('landing.chiropractor.cta.subtitle')}
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
                {t('landing.chiropractor.cta.schedule')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}