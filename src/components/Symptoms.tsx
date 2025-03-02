import React from 'react';
import { Activity, Moon, HeartPulse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Symptoms() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('symptoms.title')}</h2>
          <p className="text-gray-600">
            {t('symptoms.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <HeartPulse className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('symptoms.cards.notFeelGood.title')}</h3>
            <p className="text-gray-600">
              {t('symptoms.cards.notFeelGood.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Moon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('symptoms.cards.sleepProblems.title')}</h3>
            <p className="text-gray-600">
              {t('symptoms.cards.sleepProblems.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Activity className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('symptoms.cards.backPain.title')}</h3>
            <p className="text-gray-600">
              {t('symptoms.cards.backPain.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Activity className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('symptoms.cards.sportsInjuries.title')}</h3>
            <p className="text-gray-600">
              {t('symptoms.cards.sportsInjuries.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            {t('symptoms.conclusion.part1')}
            <br />
            <span className="font-semibold text-gray-800">{t('symptoms.conclusion.part2')}</span>
          </p>
        </div>
      </div>
    </section>
  );
}