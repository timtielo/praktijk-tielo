import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Star, Loader2, Clock, Shield, BadgeCheck, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/business';
import { SEO } from '../components/SEO';
import { submitContactForm, type ContactFormData } from '../utils/forms';
import { TestimonialsSection } from '../components/blocks/testimonials-with-marquee';
import { extendedTestimonialsShadcn } from '../data/testimonials';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: 'contact',
    submittedAt: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Define keywords specific to the contact page
  const contactPageKeywords = [
    'contact praktijk tielo',
    'afspraak maken',
    'contact formulier',
    'praktijk tielo contact',
    'alternatieve behandeling afspraak',
    'gezondheidsklachten afspraak',
    'contact informatie',
    'openingstijden',
    'locatie praktijk tielo'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitContactForm({
      ...formData,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setSubmitStatus(success ? 'success' : 'error');

    if (success) {
      setFormData({ name: '', email: '', phone: '', message: '', form: 'contact', submittedAt: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEO 
        titleKey="meta.contact.title"
        descriptionKey="meta.contact.description"
        canonicalPath={isEnglish ? "/en/contact" : "/contact"}
        keywords={contactPageKeywords}
      />
      
      {/* Contact Hero */}
      <section className="min-h-[400px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contactPage.hero.title')}</h1>
            <p className="text-gray-600 text-xl mb-8">
              {t('contactPage.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>{t('contactPage.hero.benefits.gentleTreatment')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span>{t('contactPage.hero.benefits.personalApproach')}</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-green-500" />
                <span>{t('contactPage.hero.benefits.lastingResults')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{t('contactPage.form.title')}</h2>
              <p className="text-gray-600">
                {t('contactPage.form.subtitle')}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactPage.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder={t('contactPage.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactPage.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder={t('contactPage.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactPage.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder={currentLanguage.startsWith('nl') ? "Bijv. +31 6 12345678" : "E.g., +31 6 12345678"}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contactPage.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder={t('contactPage.form.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-cta btn-cta-shine w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('contactPage.form.sending')}
                  </>
                ) : (
                  <>
                    {t('contactPage.form.send')} <MessageSquare className="w-5 h-5" />
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                  <p className="font-medium">{t('contactPage.form.success.title')}</p>
                  <p className="text-sm">{t('contactPage.form.success.subtitle')}</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                  <p className="font-medium">{t('contactPage.form.error.title')}</p>
                  <p className="text-sm">{t('contactPage.form.error.subtitle')}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contactPage.directContact.title')}</h2>
              <div className="space-y-6">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group"
                >
                  <div className="bg-blue-50 p-3 rounded-full group-hover:bg-white transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{t('contactPage.directContact.call.title')}</p>
                    <p className="text-lg">{businessInfo.contact.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group"
                >
                  <div className="bg-blue-50 p-3 rounded-full group-hover:bg-white transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{t('contactPage.directContact.email.title')}</p>
                    <p className="text-lg">{businessInfo.contact.email}</p>
                  </div>
                </a>
                <a
                  href={`https://maps.google.com/?q=${businessInfo.contact.address.street},${businessInfo.contact.address.postalCode},${businessInfo.contact.address.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group"
                >
                  <div className="bg-blue-50 p-3 rounded-full group-hover:bg-white transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{t('contactPage.directContact.visit.title')}</p>
                    <p>{businessInfo.contact.address.street}</p>
                    <p>{businessInfo.contact.address.postalCode} {businessInfo.contact.address.city}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contactPage.openingHours.title')}</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{t('footer.openingHours.weekdays')}</span>
                  <span className="font-medium">{t('footer.openingHours.byAppointment')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{t('footer.openingHours.saturday')}</span>
                  <span className="font-medium">{t('footer.openingHours.byAppointment')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{t('footer.openingHours.sunday')}</span>
                  <span className="font-medium">{t('footer.openingHours.byAppointment')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="mt-10 -mx-4">
          <h2 className="text-2xl font-bold mb-4 px-4">{t('contactPage.testimonials.title')}</h2>
          <TestimonialsSection
            title=""
            description=""
            testimonials={extendedTestimonialsShadcn}
            className="bg-white py-6 sm:py-8"
          />
        </div>
      </div>
    </>
  );
}