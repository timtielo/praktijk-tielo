import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Get specific testimonials for back and neck problems
const larsTestimonial = testimonials.find(t => t.id === 'lars-1');
const rosalieTestimonial = testimonials.find(t => t.id === 'rosalie-1');
const floorTestimonial = testimonials.find(t => t.id === 'floor-1');

// Filter relevant testimonials
const relevantTestimonials = [
  larsTestimonial,
  rosalieTestimonial,
  floorTestimonial
].filter(Boolean);

export function BackNeckProblemsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  const content = {
    meta: {
      title: isEnglish 
        ? "Back & Neck Pain Treatment | Natural Approach"
        : "Rug & Nekpijn Behandeling | Natuurlijke Aanpak",
      description: isEnglish
        ? "Suffering from back or neck pain? My gentle treatment method helps relieve pain and improve mobility without medication. Experience natural relief today."
        : "Last van rug- of nekpijn? Mijn zachte behandelmethode helpt pijn te verlichten en mobiliteit te verbeteren zonder medicatie. Ervaar vandaag nog natuurlijke verlichting."
    },
    hero: {
      title: isEnglish
        ? "Relief from back and neck problems"
        : "Verlichting van rug- en nekklachten",
      description: isEnglish
        ? "Are you dealing with stress, neck pain, limited movement, headaches, or poor sleep? My gentle treatment method helps you regain mobility and comfort without medication."
        : "Heb je last van stress, nekpijn, beperkte beweging, hoofdpijn of slaapproblemen? Mijn zachte behandelmethode helpt je om zonder medicatie weer mobiliteit en comfort te krijgen."
    },
    problems: {
      title: isEnglish ? "Common complaints" : "Veelvoorkomende klachten",
      items: isEnglish ? [
        "Stress and tension in neck and shoulders",
        "Limited movement and stiffness",
        "Recurring headaches and migraines",
        "Poor sleep quality",
        "Pain radiating to arms or hands",
        "Difficulty maintaining posture"
      ] : [
        "Stress en spanning in nek en schouders",
        "Beperkte beweging en stijfheid",
        "Terugkerende hoofdpijn en migraine",
        "Slechte slaapkwaliteit",
        "Uitstralende pijn naar armen of handen",
        "Moeite met het behouden van houding"
      ]
    },
    benefits: {
      title: isEnglish ? "After treatment" : "Na de behandeling",
      items: isEnglish ? [
        "Improved mobility and flexibility",
        "Reduced headaches and tension",
        "Better sleep quality",
        "Decreased stress levels",
        "Natural pain relief",
        "Improved posture"
      ] : [
        "Verbeterde mobiliteit en flexibiliteit",
        "Minder hoofdpijn en spanning",
        "Betere slaapkwaliteit",
        "Verminderde stressniveaus",
        "Natuurlijke pijnverlichting",
        "Verbeterde houding"
      ]
    },
    approach: {
      title: isEnglish ? "My approach" : "Mijn aanpak",
      description: isEnglish
        ? "I use gentle techniques that focus on restoring proper alignment and movement. Through natural movements and light touches, I help your body release tension and find its natural balance again."
        : "Ik gebruik zachte technieken die zich richten op het herstellen van de juiste uitlijning en beweging. Door middel van natuurlijke bewegingen en lichte aanrakingen help ik je lichaam om spanning los te laten en zijn natuurlijke balans terug te vinden."
    },
    cta: {
      title: isEnglish ? "Start your recovery today" : "Begin vandaag nog met je herstel",
      description: isEnglish
        ? "Don't let back and neck problems limit your life any longer. Experience my gentle and effective approach."
        : "Laat rug- en nekklachten je leven niet langer beperken. Ervaar mijn zachte en effectieve aanpak."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/back-neck-problems" : "/rug-nek-problemen"}
        keywords={[
          'rugpijn behandeling',
          'nekpijn therapie',
          'hoofdpijn verminderen',
          'betere slaap',
          'natuurlijke behandeling',
          'zachte technieken',
          'stress verminderen',
          'mobiliteit verbeteren'
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
                  <span>{isEnglish ? "Lasting results" : "Blijvend resultaat"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "No medication" : "Geen medicatie"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="/assets/photos/backpain.jpg"
                alt={isEnglish ? "Back and neck pain relief" : "Rug- en nekpijn verlichting"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Complaints Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.problems.title}</h2>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.problems.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {isEnglish ? "What others say" : "Wat anderen zeggen"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relevantTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial?.id || index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-blue-100 rotate-180" />
                  <p className="text-gray-700 pl-6">
                    {isEnglish 
                      ? (testimonial?.textEn || testimonial?.text || "") 
                      : (testimonial?.text || "")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial?.image || ""}
                    alt={testimonial?.name || ""}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial?.name || ""}</p>
                    <p className="text-sm text-gray-500">{t('testimonials.satisfiedClient')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.benefits.title}</h2>
            
            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <ul className="space-y-3">
                {content.benefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{benefit}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{content.cta.title}</h2>
            <p className="text-xl text-blue-100 mb-8">
              {content.cta.description}
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

      {/* Contact Form */}
      <Contact />
    </>
  );
}