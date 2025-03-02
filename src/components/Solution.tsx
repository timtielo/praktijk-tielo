import React from 'react';
import { ChevronRight, Clock, Repeat, Heart, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Solution() {
  const { t } = useTranslation();
  
  return (
    <section id="behandelmethode" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('solution.title')}</h2>
          <p className="text-gray-600">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('solution.howItWorks.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('solution.howItWorks.description1')}
              </p>
              <p className="text-gray-600">
                {t('solution.howItWorks.description2')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('solution.forWhom.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('solution.forWhom.description')}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>{t('solution.forWhom.items.physicalPain')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>{t('solution.forWhom.items.migraines')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>{t('solution.forWhom.items.muscleCramps')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>{t('solution.forWhom.items.depression')}</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-400">
                <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">
                  {t('solution.forWhom.disclaimer')}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">{t('solution.treatment.title')}</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('solution.treatment.first.title')}</h4>
                    <p className="text-blue-100">
                      {t('solution.treatment.first.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('solution.treatment.second.title')}</h4>
                    <p className="text-blue-100">
                      {t('solution.treatment.second.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('solution.treatment.followUp.title')}</h4>
                    <p className="text-blue-100">
                      {t('solution.treatment.followUp.description')}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-blue-500">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <Euro className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('solution.treatment.rates.title')}</h4>
                      <p className="text-blue-100">
                        <span className="line-through">€130,-</span> <span className="font-bold">{t('solution.treatment.rates.description')}</span>
                        <span className="block text-xs mt-1">{t('solution.treatment.rates.validUntil')}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">{t('solution.important.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>{t('solution.important.items.twoTreatments')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>{t('solution.important.items.selfHelp')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>{t('solution.important.items.afterAccident')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>{t('solution.important.items.preventive')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="btn-cta btn-cta-shine bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
          >
            {t('solution.cta')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}