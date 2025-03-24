import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const relevantTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('rug') || 
  t.text.toLowerCase().includes('back') ||
  t.text.toLowerCase().includes('kraken') ||
  t.text.toLowerCase().includes('crack')
);

export function NoBackCrackingPage() {
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
        ? "No Back Cracker, but Gentle Relief for Back Pain | Praktijk Tielo"
        : "Geen rugkraker, wél verlichting bij rugklachten | Praktijk Tielo",
      description: isEnglish
        ? "Looking for back pain relief without cracking? At Praktijk Tielo in Utrecht, we work without cracking. Discover our gentle, natural method for lasting recovery."
        : "Heb je last van je rug en denk je aan een rugkraker? Bij Praktijk Tielo in Utrecht werken we zonder te kraken. Ontdek onze zachte, natuurlijke methode voor blijvend herstel."
    },
    hero: {
      title: isEnglish
        ? "Not a 'back cracker', but a gentle approach"
        : "Geen 'kraker van de rug', maar een zachte benadering",
      description: isEnglish
        ? "Looking for a back cracker or considering treatment where your back is cracked? Many people immediately think of a chiropractor. At Praktijk Tielo in Utrecht, we consciously choose a different, gentle approach — without manipulations, without hard 'cracking'."
        : "Zoek je een rugkraker of overweeg je een behandeling waarbij je rug gekraakt wordt? Veel mensen denken dan meteen aan een chiropractor. Bij Praktijk Tielo in Utrecht kiezen we bewust voor een andere, zachte aanpak — zonder manipulaties, zonder harde 'kraken'."
    },
    whyNoCracking: {
      title: isEnglish ? "Why we don't crack" : "Waarom wij niet kraken",
      description: isEnglish
        ? "Back cracking can be experienced as intense and doesn't fit our vision. Instead, we focus on the connective tissue and use light touches and natural movements. This gives the body space to come back into balance on its own."
        : "Het kraken van de rug kan als heftig worden ervaren en past niet bij onze visie. In plaats daarvan richten wij ons op het bindweefsel en maken we gebruik van lichte aanrakingen en natuurlijke bewegingen. Hiermee geven we het lichaam de ruimte om zelf terug in balans te komen."
    },
    whatWeDo: {
      title: isEnglish ? "What we do: realign the body" : "Wat we wél doen: het lichaam opnieuw uitlijnen",
      description: isEnglish
        ? "Our method is based on relaxation, attention, and precision:"
        : "Onze methode is gebaseerd op ontspanning, aandacht en precisie:",
      steps: isEnglish ? [
        "We examine the tensions in the connective tissue",
        "We stimulate the body's self-healing ability",
        "We align the body naturally, without forcing"
      ] : [
        "We onderzoeken de spanningen in het bindweefsel",
        "We stimuleren het zelfherstellend vermogen van het lichaam",
        "We zetten het lichaam op natuurlijke wijze recht, zonder forceren"
      ],
      conclusion: isEnglish
        ? "This gentle approach often leads to long-term improvement — especially for people who have already tried everything."
        : "Deze zachte benadering zorgt vaak voor langdurige verbetering — juist bij mensen die al van alles hebben geprobeerd."
    },
    commonComplaints: {
      title: isEnglish 
        ? "Common complaints where people search for 'back cracking':"
        : "Veelvoorkomende klachten waarbij mensen zoeken op 'rug kraken':",
      items: isEnglish ? [
        "Lower back pain or lumbago",
        "Pain between the shoulder blades",
        "A 'stuck' back or neck",
        "Feeling that something needs to be 'realigned'"
      ] : [
        "Lage rugpijn of spit",
        "Pijn tussen de schouderbladen",
        "Een 'vastzittende' rug of nek",
        "Gevoel dat er \"iets rechtgezet moet worden\""
      ]
    },
    results: {
      title: isEnglish 
        ? "Our clients indicate that after one or a few sessions they:"
        : "Onze cliënten geven aan dat ze na één of enkele sessies:",
      items: isEnglish ? [
        "Experience more freedom of movement",
        "Feel less pain",
        "Breathe deeper and more calmly"
      ] : [
        "Meer bewegingsvrijheid ervaren",
        "Minder pijn voelen",
        "Dieper en rustiger ademhalen"
      ]
    },
    forWhom: {
      title: isEnglish 
        ? "For whom is this treatment suitable?"
        : "Voor wie is deze behandeling geschikt?",
      description: isEnglish
        ? "Our approach is suitable for everyone who:"
        : "Onze aanpak is geschikt voor iedereen die:",
      items: isEnglish ? [
        "Wants to handle the body carefully",
        "Is looking for an alternative to chiropractic or manual therapy",
        "Doesn't want sharp manipulations but does seek relief"
      ] : [
        "Voorzichtig wil omgaan met het lichaam",
        "Op zoek is naar een alternatief voor chiropractie of manuele therapie",
        "Geen scherpe manipulaties wil, maar wel verlichting zoekt"
      ],
      conclusion: isEnglish
        ? "Whether you come with back pain, stiffness, or fatigue in your body — we look at the total picture and treat what your body needs at that moment."
        : "Of je nu komt met rugpijn, stijfheid of vermoeidheid in je lichaam — we kijken naar het totaalplaatje en behandelen wat jouw lichaam op dat moment nodig heeft."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/relief-without-cracking" : "/verlichting-zonder-kraken"}
        keywords={[
          'rug kraken',
          'rugkraker utrecht',
          'alternatief voor chiropractor',
          'rugpijn behandeling',
          'zachte wervelkolombehandeling',
          'rug niet laten kraken',
          'bindweefseltherapie',
          'rug rechtzetten zonder kraken'
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
                  <span>{isEnglish ? "No cracking" : "Geen kraken"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt={isEnglish ? "Gentle back treatment" : "Zachte rugbehandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why No Cracking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whyNoCracking.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whyNoCracking.description}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whatWeDo.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whatWeDo.description}
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <ul className="space-y-4">
                {content.whatWeDo.steps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              {content.whatWeDo.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Common Complaints Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.commonComplaints.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.commonComplaints.items.map((complaint, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                    <span>{complaint}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.results.title}</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {content.results.items.map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.forWhom.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.forWhom.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ul className="space-y-4">
                {content.forWhom.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              {content.forWhom.conclusion}
            </p>
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

      {/* Contact Form */}
      <Contact />
    </>
  );
}