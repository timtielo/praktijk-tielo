import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart, Brain, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const relevantTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('herstel') || 
  t.text.toLowerCase().includes('recovery') ||
  t.text.toLowerCase().includes('beweeg') || 
  t.text.toLowerCase().includes('move') ||
  t.text.toLowerCase().includes('bewegen') || 
  t.text.toLowerCase().includes('moving') ||
  t.text.toLowerCase().includes('balans') ||
  t.text.toLowerCase().includes('balance') ||
  t.text.toLowerCase().includes('beweging') ||
  t.text.toLowerCase().includes('movement')
);

export function StrokePage() {
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
        ? "Stroke Recovery Support - Praktijk Tielo Utrecht"
        : "Herstel na hersenbloeding - Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Looking for support after a stroke? Praktijk Tielo offers a gentle, complementary approach to help improve mobility, balance, and well-being during your recovery journey."
        : "Op zoek naar ondersteuning na een hersenbloeding? Praktijk Tielo biedt een zachte, aanvullende benadering om mobiliteit, balans en welzijn te verbeteren tijdens je hersteltraject."
    },
    hero: {
      title: isEnglish
        ? "Supportive care after a stroke"
        : "Ondersteunende zorg na een hersenbloeding",
      description: isEnglish
        ? "A stroke can have a significant impact on your life. While medical rehabilitation is essential, complementary approaches can support your recovery journey. At Praktijk Tielo, I offer gentle, non-invasive techniques that can help improve mobility, balance, and overall well-being as you recover."
        : "Een hersenbloeding kan een grote impact hebben op je leven. Hoewel medische revalidatie essentieel is, kunnen aanvullende benaderingen je hersteltraject ondersteunen. Bij Praktijk Tielo bied ik zachte, niet-invasieve technieken die kunnen helpen bij het verbeteren van mobiliteit, balans en algemeen welzijn tijdens je herstel."
    },
    disclaimer: {
      title: isEnglish ? "Important note" : "Belangrijke opmerking",
      description: isEnglish
        ? "The treatment at Praktijk Tielo is complementary to medical care and rehabilitation therapy, not a replacement. Always follow the advice of your medical specialists and inform them about any complementary treatments you are considering."
        : "De behandeling bij Praktijk Tielo is aanvullend op medische zorg en revalidatietherapie, geen vervanging. Volg altijd het advies van je medische specialisten en informeer hen over eventuele aanvullende behandelingen die je overweegt."
    },
    howHelps: {
      title: isEnglish ? "How our approach can support stroke recovery" : "Hoe onze aanpak herstel na een hersenbloeding kan ondersteunen",
      description: isEnglish
        ? "After a stroke, the body often develops compensatory patterns that can lead to tension, restricted movement, and discomfort. Our gentle approach focuses on:"
        : "Na een hersenbloeding ontwikkelt het lichaam vaak compensatiepatronen die kunnen leiden tot spanning, beperkte beweging en ongemak. Onze zachte aanpak richt zich op:",
      points: isEnglish ? [
        "Releasing tension in the fascia (connective tissue) that may be restricting movement",
        "Improving balance through gentle realignment techniques",
        "Supporting the nervous system's recovery process",
        "Enhancing circulation and energy flow throughout the body",
        "Providing self-help exercises that complement your rehabilitation program"
      ] : [
        "Het loslaten van spanning in de fascia (bindweefsel) die beweging kan beperken",
        "Het verbeteren van balans door zachte uitlijningstechnieken",
        "Het ondersteunen van het herstelproces van het zenuwstelsel",
        "Het verbeteren van circulatie en energiestroom door het hele lichaam",
        "Het aanbieden van zelfhulpoefeningen die je revalidatieprogramma aanvullen"
      ]
    },
    benefits: {
      title: isEnglish ? "Potential benefits" : "Mogelijke voordelen",
      items: [
        {
          title: isEnglish ? "Improved mobility" : "Verbeterde mobiliteit",
          description: isEnglish
            ? "Gentle techniques to help release tension patterns that may be limiting movement"
            : "Zachte technieken om spanningspatronen los te laten die beweging kunnen beperken"
        },
        {
          title: isEnglish ? "Better balance" : "Betere balans",
          description: isEnglish
            ? "Support for the body's natural alignment to improve stability and reduce fall risk"
            : "Ondersteuning van de natuurlijke uitlijning van het lichaam om stabiliteit te verbeteren en valrisico te verminderen"
        },
        {
          title: isEnglish ? "Reduced tension" : "Verminderde spanning",
          description: isEnglish
            ? "Relief from physical tension that can develop during the recovery process"
            : "Verlichting van fysieke spanning die kan ontstaan tijdens het herstelproces"
        },
        {
          title: isEnglish ? "Enhanced well-being" : "Verbeterd welzijn",
          description: isEnglish
            ? "Support for overall physical and emotional well-being during recovery"
            : "Ondersteuning voor algeheel fysiek en emotioneel welzijn tijdens herstel"
        }
      ]
    },
    approach: {
      title: isEnglish ? "Our gentle approach" : "Onze zachte aanpak",
      description: isEnglish
        ? "At Praktijk Tielo, I use a gentle, non-invasive approach that is particularly suitable for those recovering from a stroke. The treatment involves light touches and natural movements to help the body release tension and find better alignment. There is no manipulation, cracking, or forceful movements."
        : "Bij Praktijk Tielo gebruik ik een zachte, niet-invasieve aanpak die bijzonder geschikt is voor mensen die herstellen van een hersenbloeding. De behandeling omvat lichte aanrakingen en natuurlijke bewegingen om het lichaam te helpen spanning los te laten en een betere uitlijning te vinden. Er is geen manipulatie, kraken of krachtige bewegingen."
    },
    whenToStart: {
      title: isEnglish ? "When to consider complementary care" : "Wanneer aanvullende zorg te overwegen",
      description: isEnglish
        ? "Complementary care can be considered at different stages of recovery, but it's important to:"
        : "Aanvullende zorg kan in verschillende stadia van herstel worden overwogen, maar het is belangrijk om:",
      points: isEnglish ? [
        "Always consult with your medical team first",
        "Wait until your condition is stable",
        "Start with shorter, gentler sessions",
        "Communicate openly about your medical history and current treatments"
      ] : [
        "Altijd eerst je medisch team te raadplegen",
        "Te wachten tot je toestand stabiel is",
        "Te beginnen met kortere, zachtere sessies",
        "Open te communiceren over je medische geschiedenis en huidige behandelingen"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Supporting your recovery journey"
        : "Ondersteuning van je hersteltraject",
      description: isEnglish
        ? "If you or a loved one is recovering from a stroke and looking for complementary support, I'm here to help. Contact me to discuss how my approach might benefit your specific situation and recovery goals."
        : "Als jij of een dierbare herstellende is van een hersenbloeding en op zoek is naar aanvullende ondersteuning, ben ik er om te helpen. Neem contact met me op om te bespreken hoe mijn aanpak jouw specifieke situatie en hersteldoelen kan ondersteunen."
    }
  };

  return (
    <>
      <SEO 
        title={content.meta.title}
        description={content.meta.description}
        canonicalPath={isEnglish ? "/en/stroke-recovery" : "/hersenbloeding-herstel"}
        keywords={[
          'hersenbloeding herstel',
          'stroke recovery',
          'aanvullende zorg na hersenbloeding',
          'complementary care after stroke',
          'mobiliteit verbeteren',
          'improve mobility',
          'balans herstellen',
          'restore balance',
          'zachte behandeling',
          'gentle treatment'
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
                  <span>{isEnglish ? "Supports recovery" : "Ondersteunt herstel"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Gentle approach" : "Zachte aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Complementary care" : "Aanvullende zorg"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Improves mobility" : "Verbetert mobiliteit"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                alt={isEnglish ? "Supportive care after stroke" : "Ondersteunende zorg na hersenbloeding"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-yellow-700">{content.disclaimer.title}</h2>
              <p className="text-gray-700">
                {content.disclaimer.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.howHelps.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.howHelps.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.howHelps.points.map((point, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.benefits.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.approach.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.approach.description}
            </p>
          </div>
        </div>
      </section>

      {/* When to Start Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whenToStart.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whenToStart.description}
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {content.whenToStart.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relevantTestimonials.slice(0, 4).map((testimonial, index) => (
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