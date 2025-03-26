import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Brain, Heart, Shield, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const depressionTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('somber') || 
  t.text.toLowerCase().includes('depressie') ||
  t.text.toLowerCase().includes('depressed') ||
  t.text.toLowerCase().includes('mood') ||
  t.text.toLowerCase().includes('emotie') ||
  t.text.toLowerCase().includes('emotion')
);

export function DepressionPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  // Scroll to contact form function
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    meta: {
      title: isEnglish 
        ? "Natural Depression Treatment - Praktijk Tielo Utrecht"
        : "Natuurlijk herstel bij depressieve klachten – Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Feeling down, tired, or mentally exhausted? Praktijk Tielo helps restore your body and mind through a gentle, physical approach without medication or therapy."
        : "Last van somberheid, vermoeidheid of mentale uitputting? Praktijk Tielo helpt je lichaam en geest herstellen via een zachte, fysieke benadering zonder medicatie of therapie.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop"
    },
    hero: {
      title: isEnglish
        ? "Natural recovery from depressive complaints"
        : "Natuurlijk herstel bij depressieve klachten",
      description: isEnglish
        ? "Are you feeling down, empty, or exhausted? Having trouble getting up, concentrating, or enjoying daily activities? Depressive feelings can deeply impact your life. At Praktijk Tielo in Utrecht, I offer a natural and body-oriented approach that helps restore balance to body and mind – without medication, therapy, or heavy manipulations."
        : "Voel je je somber, leeg of uitgeput? Heb je moeite met opstaan, concentreren of genieten van dagelijkse dingen? Depressieve gevoelens kunnen diep ingrijpen op je leven. Bij Praktijk Tielo in Utrecht bied ik een natuurlijke en lichaamsgerichte aanpak die helpt om lichaam en geest weer in balans te brengen – zonder medicatie, therapie of zware manipulaties."
    },
    bodyMind: {
      title: isEnglish
        ? "Depression and the body: more than just a mental matter"
        : "Depressie en het lichaam: meer dan alleen een mentale kwestie",
      description: isEnglish
        ? "Depressive complaints are often approached solely from a mental perspective, but your body plays a crucial role too. Prolonged tension, disturbed posture, or blocked breathing can unbalance the nervous system. This makes you more easily overwhelmed, emotionally flat, or chronically fatigued."
        : "Depressieve klachten worden vaak uitsluitend benaderd vanuit de geest, maar ook je lichaam speelt een cruciale rol. Langdurige spanning, een verstoorde lichaamshouding of geblokkeerde ademhaling kunnen het zenuwstelsel uit balans brengen. Hierdoor raak je sneller overbelast, emotioneel afgevlakt of chronisch vermoeid.",
      symptoms: isEnglish ? [
        "Tension in neck, shoulders, or chest area",
        "Reduced breathing and feeling of tightness",
        "Loss of energy or motivation",
        "Disturbed sleep or fatigue",
        "Feeling of restlessness or 'being stuck' in the body",
        "Emotional numbness or irritability"
      ] : [
        "Spanning in nek, schouders of borstgebied",
        "Verminderde ademhaling en benauwd gevoel",
        "Verlies van energie of motivatie",
        "Verstoorde slaap of vermoeidheid",
        "Gevoel van onrust of 'vastzitten' in het lichaam",
        "Emotionele gevoelloosheid of prikkelbaarheid"
      ]
    },
    approach: {
      title: isEnglish
        ? "A gentle approach with profound effect"
        : "Een zachte benadering met diepgaand effect",
      description: isEnglish
        ? "At Praktijk Tielo, I work from the principle that the body can guide the recovery process when brought into balance. Through natural movements and light touches, I correct tension patterns in your posture, spine, and connective tissue. This helps calm your nervous system and create space for emotional relief and recovery."
        : "Bij Praktijk Tielo werk ik vanuit het principe dat het lichaam het herstelproces kan aansturen, mits het in balans wordt gebracht. Via natuurlijke bewegingen en lichte aanrakingen corrigeer ik spanningspatronen in je houding, wervelkolom en bindweefsel. Dit helpt je zenuwstelsel te kalmeren en ruimte te maken voor emotionele verlichting en herstel."
    },
    treatment: {
      title: isEnglish
        ? "What to expect from the treatment"
        : "Wat kun je verwachten van de behandeling",
      items: [
        {
          title: isEnglish ? "Analysis of body tension and posture" : "Analyse van lichaamsspanning en houding",
          description: isEnglish
            ? "We examine where tension and blockages affect your system"
            : "We onderzoeken waar spanning en blokkades je systeem beïnvloeden"
        },
        {
          title: isEnglish ? "Gentle corrections" : "Zachte correcties",
          description: isEnglish
            ? "Natural movements help release tension patterns"
            : "Natuurlijke bewegingen helpen spanningspatronen los te laten"
        },
        {
          title: isEnglish ? "Improved nerve regulation" : "Verbeterde zenuwregulatie",
          description: isEnglish
            ? "Your nervous system gets space to find balance"
            : "Je zenuwstelsel krijgt ruimte om balans te vinden"
        },
        {
          title: isEnglish ? "Self-help exercises" : "Zelfhulpoefeningen",
          description: isEnglish
            ? "Simple techniques to maintain calm and body awareness"
            : "Eenvoudige technieken voor rust en lichaamsbewustzijn"
        }
      ]
    },
    benefits: {
      title: isEnglish
        ? "Why choose Praktijk Tielo for depressive complaints?"
        : "Waarom kiezen voor Praktijk Tielo bij depressieve klachten?",
      items: isEnglish ? [
        "Natural method without medication or psychological therapy",
        "Safe for sensitive or overstimulated systems",
        "Direct calm in body and mind",
        "Personal attention and guidance",
        "Focused on recovery from within"
      ] : [
        "Natuurlijke methode zonder medicatie of psychologische therapie",
        "Veilig voor gevoelige of overprikkelde systemen",
        "Directe rust in lichaam en hoofd",
        "Persoonlijke aandacht en begeleiding",
        "Gericht op herstel van binnenuit"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Take the first step towards lighter living today"
        : "Zet vandaag de eerste stap naar lichter leven",
      description: isEnglish
        ? "Ready to regain control of your energy, mood, and inner peace? Give yourself a safe, gentle treatment that supports your natural recovery. Book your appointment through the website or contact me for more information. Together we'll bring your body and mind back into balance – step by step."
        : "Ben je klaar om weer grip te krijgen op je energie, stemming en innerlijke rust? Gun jezelf een veilige, zachte behandeling die jouw natuurlijke herstel ondersteunt. Boek je afspraak via de website of neem contact met mij op voor meer informatie. Samen brengen we jouw lichaam en geest weer in balans – stap voor stap."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/depression-treatment" : "/depressie-behandeling"}
        image={content.meta.image}
        keywords={[
          'depressie behandeling',
          'natuurlijke depressie therapie',
          'somberheid utrecht',
          'depressieve klachten',
          'alternatieve behandeling depressie',
          'lichaamsgericht depressie',
          'zonder medicatie',
          'zachte behandelmethode'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {content.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {content.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${businessInfo.contact.phone}`}
                  className="btn-cta btn-cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-5 h-5" />
                  {businessInfo.contact.phone}
                </a>
                <Link
                  to={getLocalizedPath('/contact')}
                  className="btn-cta bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-gray-200"
                >
                  <Calendar className="w-5 h-5" />
                  {isEnglish ? "Schedule appointment" : "Maak een afspraak"}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Body-oriented approach" : "Lichaamsgerichte aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Safe and gentle" : "Veilig en zacht"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "No medication" : "Geen medicatie"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Personal guidance" : "Persoonlijke begeleiding"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src={content.meta.image}
                alt={isEnglish ? "Depression treatment" : "Depressie behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body Mind Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.bodyMind.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.bodyMind.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.bodyMind.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.approach.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.approach.description}
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.treatment.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.treatment.items.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Add scroll to contact button */}
            <div className="mt-12 text-center">
              <button
                onClick={scrollToContact}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                {isEnglish ? "Contact me now" : "Neem nu contact op"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.benefits.title}</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {depressionTestimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {depressionTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id || index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative mb-4">
                    <Quote className="absolute -left-2 -top-2 w-8 h-8 text-blue-100 rotate-180" />
                    <p className="text-gray-700 pl-6">
                      {isEnglish ? (testimonial.textEn || testimonial.text) : testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{content.finalCta.title}</h2>
            <p className="text-xl text-blue-100 mb-8">
              {content.finalCta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="btn-cta bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {businessInfo.contact.phone}
              </a>
              <Link
                to={getLocalizedPath('/contact')}
                className="btn-cta bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                {isEnglish ? "Schedule appointment" : "Maak een afspraak"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with ID for scrolling */}
      <div id="contact-form">
        <Contact />
      </div>
    </>
  );
}