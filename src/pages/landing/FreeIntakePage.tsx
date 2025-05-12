import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, MessageSquare, Calendar, Quote, Activity, Shield, Heart, Loader2, Mail, ArrowDown, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { googleReviewsData } from '../../data/googleReviews';
import { testimonials } from '../../data/testimonials';
import { submitContactForm, type ContactFormData } from '../../utils/forms';

export function FreeIntakePage() {
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
    form: 'free-intake',
    submittedAt: '',
    language: isEnglish ? 'en' : 'nl',
    newsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get selected testimonials for social proof
  const selectedTestimonials = [
    testimonials.find(t => t.id === 'joost-2'),
    testimonials.find(t => t.id === 'thijs-1'),
    testimonials.find(t => t.id === 'symelle-1')
  ].filter(Boolean);

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
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          form: 'free-intake', 
          submittedAt: '',
          language: isEnglish ? 'en' : 'nl',
          newsletter: true
        });
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
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    meta: {
      title: isEnglish 
        ? "Free Intake - Praktijk Tielo Utrecht"
        : "Gratis Intake - Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Schedule a free intake at Praktijk Tielo. Discuss your physical complaints and discover how our natural approach can help you recover quickly."
        : "Plan een gratis intake bij Praktijk Tielo. Bespreek je lichamelijke klachten en ontdek hoe onze natuurlijke aanpak je snel kan helpen herstellen."
    },
    hero: {
      title: isEnglish
        ? "Free intake for your physical complaints"
        : "Gratis intake voor je lichamelijke klachten",
      description: isEnglish
        ? "Many people struggle with physical complaints that limit their movement, such as back, knee, or neck pain. These complaints can significantly impact your daily life - making sports, walking, working, or even simple activities like bending or climbing stairs difficult. The frustration of recurring complaints and feeling powerless can be overwhelming. At Praktijk Tielo, we offer structural improvement through personalized guidance focused on the cause of your complaints, with an emphasis on lifestyle, movement, and recovery."
        : "Veel mensen hebben dagelijks last van lichamelijke klachten die hen beperken in hun beweging, zoals rug-, knie- of nekklachten. Deze klachten kunnen een grote impact hebben op je dagelijks leven - ze maken sporten, wandelen, werken of zelfs simpele dingen zoals bukken of traplopen moeilijk. De frustratie van steeds terugkerende klachten en het gevoel van machteloosheid kan overweldigend zijn. Bij Praktijk Tielo bieden we structurele verbetering door persoonlijke begeleiding gericht op de oorzaak van je klachten, met een focus op leefstijl, beweging en herstel."
    },
    problem: {
      title: isEnglish
        ? "Do you recognize these complaints?"
        : "Herken je deze klachten?",
      items: isEnglish ? [
        "Persistent back, neck, or knee pain",
        "Limited mobility and stiffness",
        "Recurring sports injuries",
        "Difficulty with daily activities",
        "Tried various treatments without lasting results",
        "Feeling that your complaints are not taken seriously"
      ] : [
        "Aanhoudende rug-, nek- of kniepijn",
        "Beperkte mobiliteit en stijfheid",
        "Terugkerende sportblessures",
        "Moeite met dagelijkse activiteiten",
        "Verschillende behandelingen geprobeerd zonder blijvend resultaat",
        "Het gevoel dat je klachten niet serieus worden genomen"
      ]
    },
    solution: {
      title: isEnglish
        ? "Our approach: focused on the cause"
        : "Onze aanpak: gericht op de oorzaak",
      description: isEnglish
        ? "At Praktijk Tielo, we don't just treat the symptoms, but focus on the underlying cause of your complaints. Through a combination of natural movements and gentle techniques, we help your body restore its natural balance. This approach not only provides quick relief but also ensures lasting results."
        : "Bij Praktijk Tielo behandelen we niet alleen de symptomen, maar richten we ons op de onderliggende oorzaak van je klachten. Door een combinatie van natuurlijke bewegingen en zachte technieken helpen we je lichaam zijn natuurlijke balans te herstellen. Deze aanpak zorgt niet alleen voor snelle verlichting, maar ook voor blijvende resultaten."
    },
    benefits: {
      title: isEnglish
        ? "The benefits of our approach"
        : "De voordelen van onze aanpak",
      items: isEnglish ? [
        "Quick and noticeable results, often after the first treatment",
        "Gentle treatment method without medication",
        "Personal self-help exercises for lasting recovery",
        "Focus on the cause, not just the symptoms",
        "Also suitable for chronic complaints",
        "Flexible appointment times, including evenings and weekends"
      ] : [
        "Snel en merkbaar resultaat, vaak al na de eerste behandeling",
        "Zachte behandelmethode zonder medicatie",
        "Persoonlijke zelfhulpoefeningen voor blijvend herstel",
        "Focus op de oorzaak, niet alleen de symptomen",
        "Ook geschikt voor chronische klachten",
        "Flexibele afspraaktijden, ook 's avonds en in het weekend"
      ]
    },
    intake: {
      title: isEnglish
        ? "Free intake: let's discuss your situation"
        : "Gratis intake: laten we je situatie bespreken",
      description: isEnglish
        ? "During a free telephone intake, we'll discuss your complaints and how we can help you. We'll look at what's bothering you, what you've already tried, and what approach would be most suitable for your specific situation. This way, you can make an informed decision about whether our treatment method is right for you."
        : "Tijdens een gratis telefonische intake bespreken we je klachten en hoe we je kunnen helpen. We kijken naar wat je dwars zit, wat je al hebt geprobeerd en welke aanpak het meest geschikt zou zijn voor jouw specifieke situatie. Zo kun je een weloverwogen beslissing nemen of onze behandelmethode bij jou past."
    },
    form: {
      title: isEnglish
        ? "Schedule your free intake now"
        : "Plan nu je gratis intake",
      description: isEnglish
        ? "Fill in the form below and we'll contact you within 1 business day to schedule your free intake."
        : "Vul het formulier hieronder in en we nemen binnen 1 werkdag contact met je op om je gratis intake in te plannen."
    },
    socialProof: {
      title: isEnglish
        ? "What our clients say"
        : "Wat onze cliënten zeggen",
      description: isEnglish
        ? "Don't just take our word for it. Read what our clients have to say about their experience with Praktijk Tielo."
        : "Neem niet zomaar ons woord aan. Lees wat onze cliënten zeggen over hun ervaring met Praktijk Tielo."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/free-intake" : "/gratis-intake"}
        keywords={[
          'gratis intake',
          'lichamelijke klachten',
          'rugpijn',
          'kniepijn',
          'nekpijn',
          'mobiliteit',
          'natuurlijke behandeling',
          'persoonlijke begeleiding'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[500px] bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Praktijk Tielo Information */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-blue-600">Praktijk Tielo</h2>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Jura 7, Utrecht Lunetten</span>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">
                  {googleReviewsData.totalReviews} {isEnglish ? "reviews" : "reviews"} ({googleReviewsData.averageRating.toFixed(1)} {isEnglish ? "stars" : "sterren"})
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">{isEnglish ? "Natural approach" : "Natuurlijke aanpak"}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {content.hero.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {content.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={scrollToContactForm}
                className="btn-cta btn-cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                {isEnglish ? "Schedule free intake" : "Plan gratis intake"} <ArrowDown className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/message/YGHG6MZEMBOIM1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{isEnglish ? "Free and non-binding" : "Gratis en vrijblijvend"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{isEnglish ? "Personal approach" : "Persoonlijke aanpak"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{isEnglish ? "Quick response" : "Snelle reactie"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{isEnglish ? "No waiting lists" : "Geen wachtlijsten"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {content.problem.title}
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ul className="space-y-3">
                {content.problem.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mid-page CTA Button */}
            <div className="text-center mb-8">
              <button
                onClick={scrollToContactForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {isEnglish ? "Get help now" : "Krijg nu hulp"} <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {content.solution.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 text-center">
              {content.solution.description}
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                {content.benefits.title}
              </h3>
              <ul className="space-y-4">
                {content.benefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mid-page CTA Button */}
            <div className="text-center">
              <button
                onClick={scrollToContactForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {isEnglish ? "Schedule your free intake" : "Plan je gratis intake"} <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {content.intake.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 text-center">
              {content.intake.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {content.form.title}
                </h2>
                <p className="text-gray-600">
                  {content.form.description}
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
                      ? "Your message has been sent successfully. We'll get back to you within 1 business day."
                      : "Je bericht is succesvol verzonden. We nemen binnen 1 werkdag contact met je op."}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your name *" : "Je naam *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                      placeholder={isEnglish ? "E.g., john@example.com" : "Bijv. jan@voorbeeld.nl"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your phone number *" : "Je telefoonnummer *"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                      placeholder={isEnglish ? "E.g., +31 6 12345678" : "Bijv. +31 6 12345678"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isEnglish ? "Your complaints (optional)" : "Je klachten (optioneel)"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      disabled={isSubmitting}
                      placeholder={isEnglish 
                        ? "Briefly describe your complaints" 
                        : "Beschrijf kort je klachten"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
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
                        {isEnglish ? "Schedule free intake" : "Plan gratis intake"} <MessageSquare className="w-5 h-5" />
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

      {/* Social Proof Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {content.socialProof.title}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {selectedTestimonials.map((testimonial, index) => (
                testimonial && (
                  <div 
                    key={testimonial.id || index}
                    className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="relative mb-4">
                      <Quote className="absolute -left-2 -top-2 w-6 h-6 text-blue-100 rotate-180" />
                      <p className="text-gray-700 pl-6 text-sm line-clamp-4">
                        {isEnglish ? (testimonial.textEn || testimonial.text) : testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{isEnglish ? "Satisfied client" : "Tevreden klant"}</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{googleReviewsData.averageRating.toFixed(1)}/5</p>
                  <p className="text-xs text-gray-500">{googleReviewsData.totalReviews} {isEnglish ? "reviews on Google" : "reviews op Google"}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{isEnglish ? "Practitioner" : "Praktijk"}</p>
                  <p className="text-xs text-gray-500">{isEnglish ? "Natural treatment method" : "Natuurlijke behandelmethode"}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{isEnglish ? "100+ Clients" : "100+ Klanten"}</p>
                  <p className="text-xs text-gray-500">{isEnglish ? "Helped successfully" : "Succesvol geholpen"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a 
            href="https://wa.me/message/YGHG6MZEMBOIM1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={scrollToContactForm}
            className="flex-1 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{currentLanguage.startsWith('nl') ? 'Intake' : 'Intake'}</span>
          </button>
        </div>
      </div>
    </>
  );
}