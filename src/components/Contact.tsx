import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/business';
import { submitContactForm, type ContactFormData } from '../utils/forms';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export function Contact() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
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
  const { contact } = businessInfo;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await submitContactForm({
        ...formData,
        submittedAt: new Date().toISOString()
      });

      setSubmitStatus(success ? 'success' : 'error');

      if (success) {
        setFormData({ name: '', email: '', phone: '', message: '', form: 'contact', submittedAt: '' });
        // Increased timeout for success message visibility
        setTimeout(() => setSubmitStatus('idle'), 8000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{`${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <a 
                  href="https://wa.me/message/YGHG6MZEMBOIM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center animate-fade-in">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">
                  {isEnglish ? "Thank you!" : "Bedankt!"}
                </h3>
                <p className="text-xl text-green-700 mb-6">
                  {isEnglish 
                    ? "Your message has been sent successfully. We'll get back to you within 24 hours."
                    : "Je bericht is succesvol verzonden. We nemen binnen 24 uur contact met je op."}
                </p>
                <div className="bg-white text-green-800 px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">
                    {isEnglish ? "Message sent successfully!" : "Bericht succesvol verzonden!"}
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-cta w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.send')} <MessageSquare className="w-5 h-5" />
                    </>
                  )}
                </button>
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold mb-2">{t('contact.form.error')}</p>
                    <p className="text-sm">
                      {isEnglish 
                        ? "Please try again or contact us directly."
                        : "Probeer het opnieuw of neem direct contact met ons op."}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}