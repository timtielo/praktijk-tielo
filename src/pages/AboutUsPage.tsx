import React from 'react';
import { SEO } from '../components/SEO';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Award, Clock, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/business';

export function AboutUsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
  // Define keywords specific to the about page
  const aboutPageKeywords = [
    'praktijk tielo',
    'tim tielkemeijer',
    'alternatieve geneeswijze',
    'holistische aanpak',
    'persoonlijke benadering',
    'gezondheidsbehandeling',
    'over ons',
    'missie',
    'visie',
    'gezondheidsfilosofie'
  ];
  
  return (
    <>
      <SEO 
        titleKey="meta.aboutUs.title"
        descriptionKey="meta.aboutUs.description"
        canonicalPath={isEnglish ? "/en/about-us" : "/over-ons"}
        keywords={aboutPageKeywords}
      />
      
      {/* About Us Hero */}
      <section className="min-h-[400px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutUs.hero.title')}</h1>
            <p className="text-gray-600 text-xl mb-8">
              {t('aboutUs.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* About Tim */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('aboutUs.tim.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="bg-blue-600 rounded-lg p-1 rotate-2 shadow-xl">
                  <img 
                    src="/assets/photos/Profielfoto.jpg" 
                    alt="Tim Tielkemeijer"
                    className="rounded-lg w-full h-auto transform -rotate-2 transition-transform duration-300 hover:rotate-0"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.passion')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.experience')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.personalExperience')}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6 text-gray-700">
                <p className="text-lg">{t('aboutUs.tim.paragraph1')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph2')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph3')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('aboutUs.ourMission.title')}</h2>
            <p className="text-gray-600">
              {t('aboutUs.ourMission.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutUs.ourMission.cards.holistic.title')}</h3>
              <p className="text-gray-600">
                {t('aboutUs.ourMission.cards.holistic.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutUs.ourMission.cards.personal.title')}</h3>
              <p className="text-gray-600">
                {t('aboutUs.ourMission.cards.personal.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutUs.ourMission.cards.quality.title')}</h3>
              <p className="text-gray-600">
                {t('aboutUs.ourMission.cards.quality.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('aboutUs.cta.title')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('aboutUs.cta.subtitle')}
          </p>
          <Link 
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            {t('aboutUs.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}