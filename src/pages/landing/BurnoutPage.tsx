import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Brain, Heart, Shield, Clock, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { googleReviewsData } from '../../data/googleReviews';

// Filter relevant testimonials
const stressTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('stress') || 
  t.text.toLowerCase().includes('spanning') ||
  t.text.toLowerCase().includes('rust') ||
  t.text.toLowerCase().includes('relaxed')
);

export function BurnoutPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  return (
    <>
      <SEO 
        titleKey="landing.burnout.meta.title"
        descriptionKey="landing.burnout.meta.description"
        canonicalPath={isEnglish ? "/en/burnout-stress-treatment" : "/burnout-stress-behandeling"}
        keywords={[
          'burnout behandeling',
          'stress verminderen',
          'ontspanningstechnieken',
          'natuurlijke stressbehandeling',
          'burn-out herstel',
          'lichaamsuitlijning stress',
          'stressklachten utrecht',
          'alternatieve burnout therapie'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">
                    {googleReviewsData.averageRating} {t('reviewsPage.googleReviews.reviewsOnGoogle')} ({googleReviewsData.totalReviews})
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{t('landing.burnout.benefits.natural')}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('landing.burnout.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {t('landing.burnout.hero.subtitle')}
              </p>
              
              {/* Urgency Banner */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-blue-800 font-medium">
                  {t('solution.treatment.rates.validUntil')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${businessInfo.contact.phone}`}
                  className="btn-cta btn-cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-5 h-5" />
                  {businessInfo.contact.phone}
                </a>
                <Link
                  to={getLocalizedPath('/contact')}
                  className="btn-cta bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-gray-200"
                >
                  <Calendar className="w-5 h-5" />
                  {t('landing.burnout.hero.schedule')}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.burnout.benefits.bodyAlignment')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.burnout.benefits.relaxation')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.burnout.benefits.selfHelp')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{t('landing.burnout.benefits.natural')}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt={t('landing.burnout.meta.title')}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Stress Gets Stuck Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('landing.burnout.whyStress.title')}
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t('landing.burnout.whyStress.mental.title')}
                    </h3>
                    <p>{t('landing.burnout.whyStress.mental.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t('landing.burnout.whyStress.physical.title')}
                    </h3>
                    <p>{t('landing.burnout.whyStress.physical.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t('landing.burnout.whyStress.emotional.title')}
                    </h3>
                    <p>{t('landing.burnout.whyStress.emotional.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Method Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('landing.burnout.method.title')}
            </h2>
            
            <div className="grid gap-8">
              {t('landing.burnout.method.steps', { returnObjects: true }).map((step: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('landing.burnout.testimonials.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stressTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id || index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a 
            href={`tel:${businessInfo.contact.phone}`}
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>{currentLanguage.startsWith('nl') ? 'Bel direct' : 'Call now'}</span>
          </a>
          <Link
            to={getLocalizedPath('/contact')}
            className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>{currentLanguage.startsWith('nl') ? 'Afspraak' : 'Schedule'}</span>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('landing.burnout.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('landing.burnout.cta.subtitle')}
            </p>
            
            {/* Trust Elements */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm">{t('landing.burnout.benefits.natural')}</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm">{t('landing.burnout.benefits.relaxation')}</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Star className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm">{googleReviewsData.averageRating} {t('reviewsPage.googleReviews.reviewsOnGoogle')}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="btn-cta bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {businessInfo.contact.phone}
              </a>
              <Link
                to={getLocalizedPath('/contact')}
                className="btn-cta bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                {t('landing.burnout.cta.schedule')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}