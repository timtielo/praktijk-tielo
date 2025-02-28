import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Star, Loader2, Clock, Shield, BadgeCheck, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/business';
import { testimonials } from '../data/testimonials';
import { SEO } from '../components/SEO';
import { submitContactForm, type ContactFormData } from '../utils/forms';
import { TestimonialsSection } from '../components/blocks/testimonials-with-marquee';
import { extendedTestimonialsShadcn } from '../data/testimonials';

export function ContactPage() {
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
        title="Contact - Maak direct een afspraak"
        description="Plan direct een afspraak bij Praktijk Tielo. ✓ Blijvend resultaat ✓ Ook 's avonds en in het weekend ✓ Persoonlijke aanpak"
        canonicalPath="/contact"
      />
      
      {/* Contact Hero */}
      <section className="min-h-[400px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Begin vandaag nog met je herstel</h1>
            <p className="text-gray-600 text-xl mb-8">
              Plan een afspraak en <span className="text-blue-600 font-semibold">zie het verschil</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Zachte behandeling</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span>Persoonlijke aanpak</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-green-500" />
                <span>Blijvend resultaat</span>
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
              <h2 className="text-2xl font-bold mb-4">Plan je afspraak</h2>
              <p className="text-gray-600">
                Laat je gegevens achter en we nemen binnen 24 uur contact met je op.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Je naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder="Bijv. Jan Jansen"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Je e-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder="Bijv. jan@email.nl"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Je telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Bijv. 06 12345678"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Je bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                  placeholder="Bijv. Beschikbare data voor een afspraak"
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
                    Versturen...
                  </>
                ) : (
                  <>
                    Verstuur <MessageSquare className="w-5 h-5" />
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                  <p className="font-medium">Je bericht is succesvol verzonden!</p>
                  <p className="text-sm">We nemen binnen 24 uur contact met je op.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                  <p className="font-medium">Er is iets misgegaan.</p>
                  <p className="text-sm">Probeer het later opnieuw of bel ons direct.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Direct contact opnemen?</h2>
              <div className="space-y-6">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group"
                >
                  <div className="bg-blue-50 p-3 rounded-full group-hover:bg-white transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Bel direct</p>
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
                    <p className="font-medium">Mail ons</p>
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
                    <p className="font-medium">Bezoek ons</p>
                    <p>{businessInfo.contact.address.street}</p>
                    <p>{businessInfo.contact.address.postalCode} {businessInfo.contact.address.city}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Openingstijden</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{businessInfo.openingHours.weekdays.days}</span>
                  <span className="font-medium">{businessInfo.openingHours.weekdays.hours}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{businessInfo.openingHours.saturday.days}</span>
                  <span className="font-medium">{businessInfo.openingHours.saturday.hours}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50">
                  <span className="text-gray-600">{businessInfo.openingHours.sunday.days}</span>
                  <span className="font-medium">{businessInfo.openingHours.sunday.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="mt-10 -mx-4">
          <h2 className="text-2xl font-bold mb-4 px-4">Wat anderen zeggen over onze behandeling</h2>
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