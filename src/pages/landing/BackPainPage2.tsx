import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart, Clock, Euro, Loader2, Mail, MessageSquare, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { googleReviewsData } from '../../data/googleReviews';
import { submitContactForm, type ContactFormData } from '../../utils/forms';

// Get specific testimonials by ID
const symelle = testimonials.find(t => t.id === 'symelle-1');
const karin = testimonials.find(t => t.id === 'karin-1');

export function BackPainPage2() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');

  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: 'back-pain-landing',
    submittedAt: '',
    language: isEnglish ? 'en' : 'nl',
    newsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Second form state
  const [formData2, setFormData2] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: 'back-pain-landing-bottom',
    submittedAt: '',
    language: isEnglish ? 'en' : 'nl',
    newsletter: true
  });
  const [isSubmitting2, setIsSubmitting2] = useState(false);
  const [submitStatus2, setSubmitStatus2] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent, formNumber: 1 | 2) => {
    e.preventDefault();
    
    const isFirstForm = formNumber === 1;
    const currentFormData = isFirstForm ? formData : formData2;
    const setIsSubmittingFunc = isFirstForm ? setIsSubmitting : setIsSubmitting2;
    const setSubmitStatusFunc = isFirstForm ? setSubmitStatus : setSubmitStatus2;
    const setFormDataFunc = isFirstForm ? setFormData : setFormData2;
    
    if ((isFirstForm && isSubmitting) || (!isFirstForm && isSubmitting2)) return;

    setIsSubmittingFunc(true);
    setSubmitStatusFunc('idle');

    try {
      const success = await submitContactForm({
        ...currentFormData,
        submittedAt: new Date().toISOString()
      });

      setSubmitStatusFunc(success ? 'success' : 'error');

      if (success) {
        setFormDataFunc({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          form: isFirstForm ? 'back-pain-landing' : 'back-pain-landing-bottom', 
          submittedAt: '',
          language: isEnglish ? 'en' : 'nl',
          newsletter: true
        });
        // Increased timeout for success message visibility
        setTimeout(() => setSubmitStatusFunc('idle'), 8000);
      }
    } catch (error) {
      setSubmitStatusFunc('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmittingFunc(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, formNumber: 1 | 2) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const setFormDataFunc = formNumber === 1 ? setFormData : setFormData2;
    
    setFormDataFunc(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  // This is a standalone page without navigation or footer
  return (
    <>
      <SEO 
        titleKey="landing.backPain.meta.title"
        descriptionKey="landing.backPain.meta.description"
        canonicalPath={isEnglish ? "/en/back-pain-treatment2" : "/rugpijn-en-lage-rugklachten2"}
        keywords={[
          'rugpijn behandeling',
          'lage rugklachten',
          'rugpijn verhelpen',
          'natuurlijke behandeling rugpijn',
          'alternatieve behandeling rug',
          'rugklachten utrecht',
          'rugpijn therapie',
          'wervelkolom correctie'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              {/* Praktijk Tielo Information */}
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-2xl font-bold text-blue-600">Praktijk Tielo</h2>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Jura 7, Utrecht Lunetten</span>
                </div>
              </div>
              
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
                  <span className="text-sm font-medium">{t('landing.backPain.benefits.natural')}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('landing.backPain.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {t('landing.backPain.hero.subtitle')}
              </p>
              
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

      {/* Contact Form Section - Added right after hero */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {isEnglish ? "Schedule your appointment now" : "Plan direct je afspraak"}
                </h2>
                <p className="text-gray-600">
                  {isEnglish 
                    ? "Fill in the form below and we'll contact you within 24 hours" 
                    : "Vul het formulier hieronder in en we nemen binnen 24 uur contact met je op"}
                </p>
              </div>

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
                <form onSubmit={(e) => handleSubmit(e, 1)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your name *" : "Je naam *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange(e, 1)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                      placeholder={isEnglish ? "E.g., John Smith" : "Bijv. Jan Jansen"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your email *" : "Je e-mail *"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e, 1)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                      placeholder={isEnglish ? "E.g., john@example.com" : "Bijv. jan@voorbeeld.nl"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your phone number" : "Je telefoonnummer"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange(e, 1)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      disabled={isSubmitting}
                      placeholder={isEnglish ? "E.g., +31 6 12345678" : "Bijv. +31 6 12345678"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your message *" : "Je bericht *"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleChange(e, 1)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                      placeholder={isEnglish 
                        ? "Describe your back pain or questions" 
                        : "Beschrijf je rugklachten of vragen"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => handleChange(e, 1)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      {isEnglish ? "Subscribe to newsletter" : "Aanmelden voor nieuwsbrief"}
                    </label>
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
                        {isEnglish ? "Sending..." : "Versturen..."}
                      </>
                    ) : (
                      <>
                        {isEnglish ? "Send message" : "Verstuur bericht"} <Mail className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 p-6 rounded-lg text-center">
                      <p className="text-lg font-semibold mb-2">
                        {isEnglish ? "Something went wrong" : "Er is iets misgegaan"}
                      </p>
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
              
              {/* Symelle's testimonial after common complaints */}
              {symelle && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(symelle.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative mb-4">
                    <Quote className="absolute -left-2 -top-2 w-8 h-8 text-blue-100 rotate-180" />
                    <p className="text-gray-700 pl-6">
                      {isEnglish ? (symelle.textEn || symelle.text) : symelle.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={symelle.image} 
                      alt={symelle.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{symelle.name}</p>
                      <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Card */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
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
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('solution.treatment.followUp.title')}</h4>
                    <p className="text-blue-100">
                      {t('solution.treatment.followUp.description')}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-blue-500">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <Euro className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('solution.treatment.rates.title')}</h4>
                      <p className="text-blue-100">
                        <span className="font-bold">€100,- {isEnglish ? "per appointment" : "per afspraak"}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karin's testimonial after treatment process */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {karin && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(karin.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-blue-100 rotate-180" />
                  <p className="text-gray-700 pl-6">
                    {isEnglish ? (karin.textEn || karin.text) : karin.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={karin.image} 
                    alt={karin.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{karin.name}</p>
                    <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Second Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {isEnglish ? "Ready to get rid of your back pain?" : "Klaar om van je rugpijn af te komen?"}
                </h2>
                <p className="text-gray-600">
                  {isEnglish 
                    ? "Contact us now and start your recovery journey" 
                    : "Neem nu contact op en begin met je hersteltraject"}
                </p>
              </div>

              {submitStatus2 === 'success' ? (
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
                <form onSubmit={(e) => handleSubmit(e, 2)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your name *" : "Je naam *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData2.name}
                      onChange={(e) => handleChange(e, 2)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting2}
                      placeholder={isEnglish ? "E.g., John Smith" : "Bijv. Jan Jansen"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your email *" : "Je e-mail *"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData2.email}
                      onChange={(e) => handleChange(e, 2)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting2}
                      placeholder={isEnglish ? "E.g., john@example.com" : "Bijv. jan@voorbeeld.nl"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your phone number" : "Je telefoonnummer"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData2.phone}
                      onChange={(e) => handleChange(e, 2)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      disabled={isSubmitting2}
                      placeholder={isEnglish ? "E.g., +31 6 12345678" : "Bijv. +31 6 12345678"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your message *" : "Je bericht *"}
                    </label>
                    <textarea
                      name="message"
                      value={formData2.message}
                      onChange={(e) => handleChange(e, 2)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting2}
                      placeholder={isEnglish 
                        ? "Describe your back pain or questions" 
                        : "Beschrijf je rugklachten of vragen"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter2"
                      checked={formData2.newsletter}
                      onChange={(e) => handleChange(e, 2)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter2" className="text-sm text-gray-700">
                      {isEnglish ? "Subscribe to newsletter" : "Aanmelden voor nieuwsbrief"}
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting2}
                    className={`btn-cta w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                      isSubmitting2 ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting2 ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {isEnglish ? "Sending..." : "Versturen..."}
                      </>
                    ) : (
                      <>
                        {isEnglish ? "Send message" : "Verstuur bericht"} <MessageSquare className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  {submitStatus2 === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 p-6 rounded-lg text-center">
                      <p className="text-lg font-semibold mb-2">
                        {isEnglish ? "Something went wrong" : "Er is iets misgegaan"}
                      </p>
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
          <a
            href={`mailto:${businessInfo.contact.email}`}
            className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>{currentLanguage.startsWith('nl') ? 'E-mail' : 'Email'}</span>
          </a>
        </div>
      </div>
    </>
  );
}