import React from 'react';
import { SEO } from '../components/SEO';
import { businessInfo } from '../data/business';
import { useTranslation } from 'react-i18next';

export function DisclaimerPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO 
        titleKey="meta.disclaimer.title"
        descriptionKey="meta.disclaimer.description"
        canonicalPath="/disclaimer"
      />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{t('disclaimer.title')}</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.general.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('disclaimer.sections.general.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.noMedicalCare.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.noMedicalCare.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.resultsLiability.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.resultsLiability.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.privacy.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.privacy.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.clientResponsibility.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.clientResponsibility.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.changes.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.changes.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.applicableLaw.title')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {t('disclaimer.sections.applicableLaw.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.sections.contact.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('disclaimer.sections.contact.content')}
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>{t('disclaimer.sections.contact.items.email')}</li>
                <li>{t('disclaimer.sections.contact.items.phone')}{businessInfo.contact.phone}</li>
                <li>{t('disclaimer.sections.contact.items.website')}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}