import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Brain, Heart, Shield, Clock, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const stressTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('stress') || 
  t.text.toLowerCase().includes('spanning') ||
  t.text.toLowerCase().includes('rust') ||
  t.text.toLowerCase().includes('relaxed')
);

export function BurnoutPage() {
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
        ? "Burnout and Stress Treatment Utrecht | Praktijk Tielo"
        : "Stress- en burn-outbehandeling Utrecht | Praktijk Tielo",
      description: isEnglish
        ? "Suffering from burnout or stress? At Praktijk Tielo in Utrecht, I offer natural treatment focused on body alignment and relaxation. Experience my gentle approach!"
        : "Bij Praktijk Tielo in Utrecht kun je terecht voor een stress- en burn-outbehandeling, gebaseerd op een natuurlijke aanpak. Lees er hier meer over!"
    },
    hero: {
      title: isEnglish
        ? "Stress and Burnout Treatment at Praktijk Tielo in Utrecht"
        : "Stress- en burn-outbehandeling bij Praktijk Tielo in Utrecht",
      description: isEnglish
        ? "Are you experiencing stress or going through a burnout? Then you know how challenging it can be to get your body and mind back in balance. At Praktijk Tielo in Utrecht, I specialize in stress and burnout treatment. My approach focuses not only on the mental aspects but also on the physical tension caused by stress and burnout. Want to know how I can help you feel energetic and balanced again? Read on or contact me."
        : "Heb je last van stress of zit je in een burn-out? Dan weet je hoe zwaar het kan zijn om je lichaam en geest weer in balans te krijgen. Bij Praktijk Tielo in Utrecht ben ik gespecialiseerd in stress- en burn-outbehandeling. Mijn aanpak richt zich niet alleen op de mentale aspecten, maar ook op de fysieke spanning die door stress en burn-out wordt veroorzaakt. Wil je weten hoe ik je kan helpen om weer energiek en in balans te voelen? Lees verder of neem contact met mij op."
    },
    whyEssential: {
      title: isEnglish
        ? "Why stress and burnout treatment is essential"
        : "Waarom stress- en burn-outbehandeling essentieel is",
      description: isEnglish
        ? "Stress and burnout cause both mental and physical complaints. Mental overload leads to concentration problems and emotional exhaustion, while physical tension gets stuck in your muscles and joints, causing pain and stiffness. Emotionally, you feel exhausted and overwhelmed, making relaxation almost impossible. It's important to address this quickly before the situation worsens. A stress and burnout treatment can help you get back in balance, both physically and mentally."
        : "Stress en burn-out veroorzaken zowel mentale als lichamelijke klachten. Mentale overbelasting leidt tot concentratieproblemen en emotionele uitputting, terwijl de lichamelijke spanning zich vastzet in je spieren en gewrichten, wat pijn en stijfheid veroorzaakt. Emotioneel voel je je uitgeput en overweldigd, waardoor ontspannen vrijwel onmogelijk lijkt. Het is belangrijk om hier snel iets aan te doen, voordat de situatie verergert. Een stress- en burn-outbehandeling kan je helpen om weer in balans te komen, zowel lichamelijk als mentaal."
    },
    treatment: {
      title: isEnglish
        ? "What to expect from my treatment"
        : "Wat je kunt verwachten van mijn behandeling",
      description: isEnglish
        ? "At Praktijk Tielo, I use a natural approach for stress and burnout treatment, where I focus on your body and mind. I do this through an effective method that consists of different elements:"
        : "Bij Praktijk Tielo gebruik ik een natuurlijke benadering voor stress- en burn-outbehandeling, waarbij ik jouw lichaam en geest centraal stel. Dit doe ik door middel van een effectieve methode die is opgebouwd uit verschillende elementen:",
      elements: [
        {
          title: isEnglish ? "Alignment and posture correction" : "Uitlijning en correctie van lichaamshouding",
          description: isEnglish
            ? "Through gentle corrections, I restore the natural balance in your body, relieving physical tension and improving energy flow."
            : "Door zachte correcties herstel ik de natuurlijke balans in je lichaam, waardoor fysieke spanning wordt verlicht en de energiestroming verbetert."
        },
        {
          title: isEnglish ? "Mobilization and relaxation techniques" : "Mobilisatie en ontspanningstechnieken",
          description: isEnglish
            ? "Specific techniques help release built-up stress, providing deep relaxation and reducing muscle tension."
            : "Specifieke technieken helpen bij het loslaten van opgebouwde stress, wat zorgt voor diepe ontspanning en het verminderen van spierspanning."
        },
        {
          title: isEnglish ? "Self-help and breathing exercises" : "Zelfhulp en ademhalingsoefeningen",
          description: isEnglish
            ? "I teach you techniques that you can apply daily to maintain relaxation and prevent new tension."
            : "Ik leer je technieken die je dagelijks kunt toepassen om blijvend te ontspannen en nieuwe spanning te voorkomen."
        }
      ],
      followUp: isEnglish
        ? "The first two treatments take place close together, so you'll notice improvement after the first session. After these sessions, follow-up appointments occur after 1, 3, and 6 months to get your body more and more in line. This process helps you recover not only physically but also become mentally stronger."
        : "De eerste twee behandelingen vinden snel achter elkaar plaats, zodat je al na de eerste sessie verbetering zult merken. Na deze sessies volgen vervolgafspraken na 1, 3 en 6 maanden om je lichaam verder in lijn te krijgen. Dit proces helpt je niet alleen fysiek te herstellen, maar ook mentaal sterker te worden."
    },
    benefits: {
      title: isEnglish
        ? "The benefits of stress and burnout treatment at Praktijk Tielo"
        : "De voordelen van stress- en burn-outbehandeling bij Praktijk Tielo",
      intro: isEnglish
        ? "My approach offers many benefits that can help you recover from burnout or stress complaints:"
        : "Mijn aanpak biedt vele voordelen die jou kunnen helpen herstellen van burn-out of stressklachten:",
      items: isEnglish ? [
        "Relief from physical tension and pain",
        "Improvement in your energy levels and concentration",
        "Restoration of natural balance in your body",
        "Access to practical techniques for lasting relaxation"
      ] : [
        "Verlichting van fysieke spanning en pijn",
        "Verbetering van je energielevels en concentratie",
        "Herstel van de natuurlijke balans in je lichaam",
        "Toegang tot praktische technieken voor blijvende ontspanning"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Are you ready to restore balance in your body and mind?"
        : "Ben je klaar om de balans in je lichaam en geest te herstellen?",
      description: isEnglish
        ? "Do you need help with your stress, burnout, or overwhelm? Don't wait any longer and make an appointment through this website. For questions, feel free to call, WhatsApp, email, or send a message through the contact form. I'm happy to help you step by step to stand in your power again, you deserve it!"
        : "Heb je hulp nodig bij jouw stress, burn-out of overspannenheid? Wacht niet langer en maak een afspraak via deze website. Voor vragen kun je mij gerust bellen, WhatsAppen, mailen of een bericht sturen via het contactformulier. Ik help je graag om stap voor stap weer in je kracht te staan, dat verdien jij!"
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/burnout-stress-treatment" : "/burnout-stress-behandeling"}
        keywords={[
          'stress behandeling',
          'burn-out therapie',
          'stress verminderen',
          'burn-out herstel',
          'stressklachten utrecht',
          'natuurlijke stressbehandeling',
          'burn-out hulp',
          'stress en spanning'
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
                  <span>{isEnglish ? "Mental balance" : "Mentale balans"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Physical relaxation" : "Fysieke ontspanning"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Natural approach" : "Natuurlijke aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Quick results" : "Snel resultaat"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={isEnglish ? "Stress and burnout treatment" : "Stress- en burn-outbehandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Essential Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whyEssential.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whyEssential.description}
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

            <div className="space-y-6">
              {content.treatment.elements.map((element, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                  <p className="text-gray-600">{element.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 mt-8">
              {content.treatment.followUp}
            </p>

            {/* Add scroll to contact button */}
            <div className="mt-12 text-center">
              <button
                onClick={scrollToContact}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                {isEnglish ? "Contact me now" : "Neem nu contact op"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.benefits.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.benefits.intro}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.benefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {stressTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {stressTestimonials.map((testimonial, index) => (
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