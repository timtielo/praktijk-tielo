import React from 'react';
import { Timer, UserCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { statistics } from '../data/statistics';

export function USPs() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('usps.title')}</h2>
          <p className="text-gray-600">
            {t('usps.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Timer className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">{t('usps.cards.quickResults.title')}</h3>
            <p className="text-gray-600">
              {t('usps.cards.quickResults.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <UserCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">{t('usps.cards.personalApproach.title')}</h3>
            <p className="text-gray-600">
              {t('usps.cards.personalApproach.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">{t('usps.cards.peopleHelped.title')}</h3>
            <p className="text-gray-600">
              {t('usps.cards.peopleHelped.description', { count: statistics.peopleHelped })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}