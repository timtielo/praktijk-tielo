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
  t.text.toLowerCase().includes('nek') ||
  t.text.toLowerCase().includes('neck') ||
  t.text.toLowerCase().includes('darm') ||
  t.text.toLowerCase().includes('intestine')
);

export function ConnectiveTissuePage() {
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
        ? "Connective Tissue Treatment Utrecht | Praktijk Tielo"
        : "Bindweefselbehandeling Utrecht | Praktijk Tielo",
      description: isEnglish
        ? "Do you suffer from complaints like neck or back pain? I offer a unique treatment consisting of natural movements using connective tissue treatment, read more!"
        : "Heb jij last van klachten als nek- of rugpijn? Ik bied een unieke behandeling die bestaat uit natuurlijke bewegingen m.b.v. een bindweefselbehandeling, lees meer!"
    },
    hero: {
      title: isEnglish
        ? "Experience the power of natural movements and connective tissue treatment"
        : "Ervaar de kracht van natuurlijke bewegingen en een bindweefselbehandeling",
      description: isEnglish
        ? "Many people seek a solution for neck pain, back problems, or intestinal issues but prefer to avoid hard manipulations like at a chiropractor. Praktijk Tielo in Utrecht offers a gentle and effective approach without cracking. Through natural movements combined with focus on connective tissue in specific places, around your back for example, I help your body restore its natural balance. Want a safe and lasting solution for your complaints? Read on and discover how I can help you."
        : "Veel mensen zoeken een oplossing voor nekpijn, rugklachten of darmproblemen, maar willen liever geen harde manipulaties zoals bij een chiropractor. Praktijk Tielo in Utrecht biedt een zachte en effectieve aanpak zonder kraken. Door middel van natuurlijke bewegingen in combinatie met de focus op het bindweefsel op specifieke plaatsen, rond jouw rug bijvoorbeeld, help ik jouw lichaam om zijn natuurlijke balans te herstellen. Wil je een veilige en blijvende oplossing voor jouw klachten? Lees verder en ontdek hoe ik jou kan helpen."
    },
    approach: {
      title: isEnglish
        ? "A gentle and effective approach"
        : "Een zachte en effectieve aanpak",
      description: isEnglish
        ? "At Praktijk Tielo, I focus on the connective tissue, the tissue that connects muscles, joints, and bones. When this tissue becomes adhesive or tense, complaints such as neck pain, back problems, or even intestinal issues can arise. The body can become twisted. My method is an effective alternative to physiotherapy and chiropractic care, where I help your body recover without cracking or sudden movements."
        : "Bij Praktijk Tielo richt ik mij op het bindweefsel, het weefsel dat spieren, gewrichten en botten met elkaar verbindt. Wanneer dit weefsel verkleefd of gespannen raakt, kunnen klachten zoals nekpijn, rugklachten of zelfs darmproblemen ontstaan. Het lichaam kan verdraaid zijn. Mijn methode is een effectief alternatief voor fysiotherapie en chiropractie, waarbij ik zonder kraken of plotselinge bewegingen jouw lichaam help te herstellen."
    },
    treatment: {
      title: isEnglish
        ? "How does a treatment work?"
        : "Hoe verloopt een behandeling?",
      description: isEnglish
        ? "During the session, your body is assessed for tension and misalignment. With gentle touches and natural movements, the position of the spine, hips, and joints is corrected. This can not only reduce physical complaints but also resolve mental tensions. After treatment, it is advised to avoid intensive sports activities to give the body time to adjust."
        : "Tijdens de sessie wordt jouw lichaam beoordeeld op spanning en scheefstand. Met zachte aanrakingen en natuurlijke bewegingen wordt de positie van de wervelkolom, heupen en gewrichten gecorrigeerd. Dit kan niet alleen fysieke klachten verminderen, maar ook mentale spanningen oplossen. Na de behandeling wordt aangeraden om intensieve sportactiviteiten te vermijden om het lichaam de tijd te geven zich aan te passen."
    },
    benefits: {
      title: isEnglish
        ? "Why choose connective tissue treatment at Praktijk Tielo?"
        : "Waarom kiezen voor bindweefselbehandeling bij Praktijk Tielo?",
      items: [
        {
          title: isEnglish ? "Gentle method without cracking" : "Zachte methode zonder kraken",
          description: isEnglish
            ? "Unlike chiropractic or other intensive therapies, I don't use sudden manipulations. This makes the treatment not only more pleasant but also safer and better suited for people who are sensitive to hard pressure."
            : "In tegenstelling tot chiropractie of andere intensieve therapieën gebruik ik geen plotselinge manipulaties. Dit maakt de behandeling niet alleen aangenamer, maar ook veiliger en beter geschikt voor mensen die gevoelig zijn voor harde druk."
        },
        {
          title: isEnglish ? "Wide applicability" : "Brede inzetbaarheid",
          description: isEnglish
            ? "My connective tissue treatment can help with neck and back complaints, intestinal issues and digestive problems, stress-related tension in the body, and posture problems and movement limitations."
            : "Mijn bindweefselbehandeling kan onder andere helpen bij nek- en rugklachten, darmklachten en spijsverteringsproblemen, stressgerelateerde spanning in het lichaam, en houdingsproblemen en bewegingsbeperkingen."
        },
        {
          title: isEnglish ? "Sustainable results" : "Duurzame resultaten",
          description: isEnglish
            ? "By treating the connective tissue instead of just addressing the symptoms, we work towards lasting recovery. The effects of my treatments remain noticeable longer and support your body's self-healing ability."
            : "Door het bindweefsel te behandelen in plaats van alleen de symptomen aan te pakken, werken we aan een blijvend herstel. De effecten van mijn behandelingen blijven langer merkbaar en ondersteunen het zelfherstellend vermogen van jouw lichaam."
        }
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Take the first step towards a pain-free life today"
        : "Zet vandaag de eerste stap naar een pijnvrij leven",
      description: isEnglish
        ? "Want to experience how the combination of natural movements and connective tissue treatment can help your body recover? Schedule an appointment through my website and discover how my gentle and effective method can relieve your complaints. For questions or comments, you can always contact me. Your well-being begins with a healthy balance, let me help you with that!"
        : "Wil je ervaren hoe de combinatie van natuurlijke bewegingen en bindweefselbehandeling jouw lichaam kan helpen herstellen? Plan een afspraak via mijn website en ontdek hoe mijn zachte en effectieve methode jouw klachten kan verlichten. Voor vragen of opmerkingen kun je altijd contact met mij opnemen, ik help je graag verder. Jouw welzijn begint met een gezonde balans, laat mij je daarbij helpen!"
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/connective-tissue-treatment" : "/bindweefselbehandeling"}
        keywords={[
          'bindweefselbehandeling',
          'zachte behandeling',
          'natuurlijke bewegingen',
          'rugklachten utrecht',
          'nekpijn behandeling',
          'alternatieve therapie',
          'geen kraken',
          'darmklachten behandeling'
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
                src="https://images.unsplash.com/photo-1611073615830-9f76902c10fe"
                alt={isEnglish ? "Connective tissue treatment" : "Bindweefselbehandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
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

      {/* Treatment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.treatment.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.treatment.description}
            </p>
            
            {/* Add CTA button */}
            <div className="mt-8 text-center">
              <button
                onClick={scrollToContact}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {isEnglish ? "Contact me now" : "Neem nu contact op"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.benefits.title}</h2>
            
            <div className="space-y-8">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
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