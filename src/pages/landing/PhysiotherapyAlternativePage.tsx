import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const relevantTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('beweg') || 
  t.text.toLowerCase().includes('move') ||
  t.text.toLowerCase().includes('pijn') ||
  t.text.toLowerCase().includes('pain') ||
  t.text.toLowerCase().includes('rug') ||
  t.text.toLowerCase().includes('back') ||
  t.text.toLowerCase().includes('nek') ||
  t.text.toLowerCase().includes('neck')
).slice(0, 4);

export function PhysiotherapyAlternativePage() {
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
        ? "Alternative to Physiotherapy | Complementary Treatment | Praktijk Tielo"
        : "Alternatief voor Fysiotherapie | Aanvullende Behandeling | Praktijk Tielo",
      description: isEnglish
        ? "Looking for an alternative or complement to physiotherapy? Praktijk Tielo offers a gentle, natural approach to improve mobility and reduce pain without manipulation or medication."
        : "Op zoek naar een alternatief of aanvulling op fysiotherapie? Praktijk Tielo biedt een zachte, natuurlijke aanpak om mobiliteit te verbeteren en pijn te verminderen zonder manipulatie of medicatie."
    },
    hero: {
      title: isEnglish
        ? "A natural alternative or complement to physiotherapy"
        : "Een natuurlijk alternatief of aanvulling op fysiotherapie",
      description: isEnglish
        ? "Are you looking for a different approach to address your physical complaints? Perhaps physiotherapy hasn't given you the results you hoped for, or you're seeking a gentler method without manipulation or medication? At Praktijk Tielo, I offer a natural treatment approach that can serve as an alternative or valuable complement to traditional physiotherapy."
        : "Ben je op zoek naar een andere aanpak voor je lichamelijke klachten? Misschien heeft fysiotherapie je niet de resultaten gegeven waar je op hoopte, of zoek je een zachtere methode zonder manipulatie of medicatie? Bij Praktijk Tielo bied ik een natuurlijke behandelaanpak die kan dienen als alternatief of waardevolle aanvulling op traditionele fysiotherapie."
    },
    differences: {
      title: isEnglish ? "How our approach differs from physiotherapy" : "Hoe onze aanpak verschilt van fysiotherapie",
      description: isEnglish
        ? "While physiotherapy and our approach both aim to improve physical function and reduce pain, there are some key differences in methodology and focus:"
        : "Hoewel fysiotherapie en onze aanpak beide gericht zijn op het verbeteren van fysiek functioneren en het verminderen van pijn, zijn er enkele belangrijke verschillen in methodologie en focus:",
      comparison: [
        {
          physio: {
            title: isEnglish ? "Physiotherapy" : "Fysiotherapie",
            points: isEnglish ? [
              "Focuses on specific muscle groups and joints",
              "Often uses active exercises and stretching",
              "May include manual therapy and manipulation",
              "Typically requires multiple sessions over weeks or months",
              "Usually covered by health insurance"
            ] : [
              "Richt zich op specifieke spiergroepen en gewrichten",
              "Gebruikt vaak actieve oefeningen en stretching",
              "Kan manuele therapie en manipulatie omvatten",
              "Vereist meestal meerdere sessies over weken of maanden",
              "Meestal gedekt door zorgverzekering"
            ]
          },
          tielo: {
            title: isEnglish ? "Praktijk Tielo" : "Praktijk Tielo",
            points: isEnglish ? [
              "Holistic approach addressing the entire body system",
              "Uses gentle, natural movements and light touches",
              "No cracking, manipulation, or forceful movements",
              "Often shows results within 1-2 sessions",
              "Focuses on self-correction and body alignment",
              "Includes self-help exercises"
            ] : [
              "Holistische aanpak gericht op het hele lichaamssysteem",
              "Gebruikt zachte, natuurlijke bewegingen en lichte aanrakingen",
              "Geen kraken, manipulatie of krachtige bewegingen",
              "Toont vaak resultaten binnen 1-2 sessies",
              "Richt zich op zelfcorrectie en lichaamsuitlijning",
              "Omvat zelfhulpoefeningen"
            ]
          }
        }
      ]
    },
    complementary: {
      title: isEnglish ? "How our approach complements physiotherapy" : "Hoe onze aanpak fysiotherapie aanvult",
      description: isEnglish
        ? "Many clients find that combining our approach with physiotherapy leads to enhanced results. Here's how they can work together:"
        : "Veel cliënten merken dat het combineren van onze aanpak met fysiotherapie leidt tot verbeterde resultaten. Zo kunnen ze samenwerken:",
      points: isEnglish ? [
        "Our treatment can help release tension patterns that may be limiting the effectiveness of physiotherapy exercises",
        "By improving overall body alignment, physiotherapy exercises can be performed more effectively",
        "Our approach can address underlying issues that may be causing recurring problems despite physiotherapy",
        "The self-help exercises we provide can complement your physiotherapy routine",
        "Our treatment can help maintain the gains made during physiotherapy sessions"
      ] : [
        "Onze behandeling kan spanningspatronen helpen loslaten die de effectiviteit van fysiotherapie-oefeningen kunnen beperken",
        "Door de algehele lichaamsuitlijning te verbeteren, kunnen fysiotherapie-oefeningen effectiever worden uitgevoerd",
        "Onze aanpak kan onderliggende problemen aanpakken die terugkerende problemen kunnen veroorzaken ondanks fysiotherapie",
        "De zelfhulpoefeningen die we bieden kunnen je fysiotherapieroutine aanvullen",
        "Onze behandeling kan helpen de vooruitgang te behouden die tijdens fysiotherapiesessies is geboekt"
      ]
    },
    whenToConsider: {
      title: isEnglish ? "When to consider our approach" : "Wanneer onze aanpak te overwegen",
      description: isEnglish
        ? "Our approach may be particularly beneficial if:"
        : "Onze aanpak kan bijzonder gunstig zijn als:",
      points: isEnglish ? [
        "You've tried physiotherapy but haven't achieved the desired results",
        "You prefer a gentler approach without manipulation or cracking",
        "You're looking for a more holistic treatment that addresses the entire body",
        "You want to complement your current physiotherapy with an alternative approach",
        "You're seeking a treatment that often shows results within 1-2 sessions",
        "You have chronic issues that keep returning despite other treatments"
      ] : [
        "Je fysiotherapie hebt geprobeerd maar niet de gewenste resultaten hebt bereikt",
        "Je de voorkeur geeft aan een zachtere aanpak zonder manipulatie of kraken",
        "Je op zoek bent naar een meer holistische behandeling die het hele lichaam aanpakt",
        "Je je huidige fysiotherapie wilt aanvullen met een alternatieve aanpak",
        "Je een behandeling zoekt die vaak binnen 1-2 sessies resultaten laat zien",
        "Je chronische problemen hebt die blijven terugkeren ondanks andere behandelingen"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Experience a different approach to healing"
        : "Ervaar een andere benadering van genezing",
      description: isEnglish
        ? "Whether you're looking for an alternative to physiotherapy or a complementary approach to enhance your current treatment, I invite you to experience the difference at Praktijk Tielo. Contact me today to discuss how I can support your journey to better health and mobility."
        : "Of je nu op zoek bent naar een alternatief voor fysiotherapie of een aanvullende aanpak om je huidige behandeling te verbeteren, ik nodig je uit om het verschil te ervaren bij Praktijk Tielo. Neem vandaag nog contact met me op om te bespreken hoe ik je reis naar betere gezondheid en mobiliteit kan ondersteunen."
    }
  };

  return (
    <>
      <SEO 
        title={content.meta.title}
        description={content.meta.description}
        canonicalPath={isEnglish ? "/en/alternative-to-physiotherapy" : "/alternatief-voor-fysiotherapie"}
        keywords={[
          'alternatief voor fysiotherapie',
          'alternative to physiotherapy',
          'aanvulling op fysiotherapie',
          'complement to physiotherapy',
          'natuurlijke behandeling',
          'natural treatment',
          'zachte behandelmethode',
          'gentle treatment method',
          'fysiotherapie alternatief',
          'physiotherapy alternative',
          'holistische benadering',
          'holistic approach'
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
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Gentle treatment" : "Zachte behandeling"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Natural approach" : "Natuurlijke aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Complementary care" : "Aanvullende zorg"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Quick results" : "Snelle resultaten"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=1974&auto=format&fit=crop"
                alt={isEnglish ? "Alternative to physiotherapy" : "Alternatief voor fysiotherapie"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Differences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.differences.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.differences.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {content.differences.comparison.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">{item.physio.title}</h3>
                    <ul className="space-y-3">
                      {item.physio.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-blue-700">{item.tielo.title}</h3>
                    <ul className="space-y-3">
                      {item.tielo.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.complementary.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.complementary.description}
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {content.complementary.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
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

      {/* When to Consider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whenToConsider.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whenToConsider.description}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.whenToConsider.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {relevantTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relevantTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id || index}
                  className="bg-white rounded-xl p-6 shadow-sm"
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