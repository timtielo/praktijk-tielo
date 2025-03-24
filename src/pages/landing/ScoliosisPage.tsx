import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Update testimonials filter to specifically include Symelle, Gijs, and Yone
const scoliosisTestimonials = testimonials.filter(t => 
  t.id === 'symelle-1' || 
  t.id === 'yone-1' ||
  t.name.toLowerCase() === 'gijs'
);

export function ScoliosisPage() {
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
        ? "Scoliosis Treatment Without Cracking - Praktijk Tielo Utrecht"
        : "Scoliose behandelen zonder kraken – Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Suffering from scoliosis or digestive issues due to a curved spine? Praktijk Tielo offers gentle treatment without cracking or massage, focused on sustainable balance and recovery."
        : "Last van scoliose of spijsverteringsklachten door een scheve wervelkolom? Praktijk Tielo biedt een zachte behandeling zonder kraken of massage, gericht op duurzame balans en herstel."
    },
    hero: {
      title: isEnglish
        ? "Treating scoliosis without cracking or massage - a gentle approach at Praktijk Tielo"
        : "Scoliose behandelen zonder kraken of massage – een zachte benadering bij Praktijk Tielo",
      description: isEnglish
        ? "Do you suffer from scoliosis or a misaligned spine? Then you know how limiting this condition can be. Pain complaints, fatigue, and limited freedom of movement are common. What many people don't know: scoliosis can also cause digestive issues. At Praktijk Tielo in Utrecht, I offer a gentle and natural approach – without hard manipulations or massages – to bring your body back into balance."
        : "Heb je last van scoliose of een scheefstand van je wervelkolom? Dan weet je hoe beperkend deze aandoening kan zijn. Pijnklachten, vermoeidheid en een beperkte bewegingsvrijheid komen vaak voor. Wat veel mensen niet weten: scoliose kan ook spijsverteringsklachten veroorzaken. Bij Praktijk Tielo in Utrecht bied ik een zachte en natuurlijke benadering – zonder harde manipulaties of massages – om jouw lichaam weer in balans te brengen."
    },
    whatIs: {
      title: isEnglish ? "What is scoliosis?" : "Wat is scoliose?",
      description: isEnglish
        ? "Scoliosis is a lateral curvature of the spine. This curvature can be congenital or develop during growth. The misalignment causes the body to become unbalanced, which can lead to:"
        : "Scoliose is een zijwaartse kromming van de wervelkolom. Deze kromming kan aangeboren zijn of zich ontwikkelen tijdens de groei. Door de scheefstand raakt het lichaam uit balans, wat kan leiden tot:",
      symptoms: isEnglish ? [
        "Back and neck complaints",
        "Muscle tension and stiffness",
        "Fatigue or energy deficit",
        "Digestive problems, such as bloating, constipation, or stomach issues"
      ] : [
        "Rug- en nekklachten",
        "Spierspanning en stijfheid",
        "Vermoeidheid of energietekort",
        "Spijsverteringsproblemen, zoals een opgeblazen gevoel, obstipatie of maagklachten"
      ],
      explanation: isEnglish
        ? "The curved position of the spine can put pressure on nerves that are connected to organs such as the stomach and intestines. This can disrupt the nerve supply to these organs, leading to functional complaints."
        : "De scheve stand van de wervelkolom kan namelijk druk uitoefenen op zenuwen die verbonden zijn met organen zoals de maag en darmen. Hierdoor kan de zenuwvoorziening van deze organen verstoord raken, wat leidt tot functionele klachten."
    },
    treatment: {
      title: isEnglish
        ? "Gentle correction with targeted movements"
        : "Zachte correctie met gerichte bewegingen",
      description: isEnglish
        ? "At Praktijk Tielo, I work with natural movements and light touches. No cracking or firm massage, but subtle techniques that help the body realign itself. This method is particularly suitable for people with scoliosis because it invites the body to release tensions and gradually restore proper posture."
        : "Bij Praktijk Tielo werk ik met natuurlijke bewegingen en lichte aanrakingen. Geen kraken of stevige massage, maar subtiele technieken die het lichaam helpen zichzelf opnieuw uit te lijnen. Deze methode is bijzonder geschikt voor mensen met scoliose, omdat ze het lichaam uitnodigt om spanningen los te laten en de juiste houding geleidelijk te herstellen."
    },
    expectations: {
      title: isEnglish
        ? "What to expect from the treatment"
        : "Wat kun je verwachten van de behandeling",
      items: isEnglish ? [
        {
          title: "Individual body screening",
          description: "We examine your posture, spine, and tension areas"
        },
        {
          title: "Gentle corrections",
          description: "Through specific touches and movements, I correct blockages and misalignment"
        },
        {
          title: "Better blood flow and nerve conduction",
          description: "This promotes not only your freedom of movement but also supports your digestion"
        },
        {
          title: "Self-help exercises",
          description: "Simple exercises help you maintain the effect at home"
        }
      ] : [
        {
          title: "Individuele lichaamsscreening",
          description: "We bekijken jouw houding, de wervelkolom en spanningsgebieden"
        },
        {
          title: "Zachte correcties",
          description: "Via specifieke aanrakingen en bewegingen corrigeer ik blokkades en scheefstand"
        },
        {
          title: "Betere doorbloeding en zenuwdoorstroming",
          description: "Dit bevordert niet alleen je bewegingsvrijheid, maar ondersteunt ook je spijsvertering"
        },
        {
          title: "Zelfhulpoefeningen",
          description: "Eenvoudige oefeningen helpen je thuis het effect te behouden"
        }
      ]
    },
    benefits: {
      title: isEnglish
        ? "Why choose Praktijk Tielo for scoliosis?"
        : "Waarom kiezen voor Praktijk Tielo bij scoliose?",
      items: isEnglish ? [
        "No cracking or hard manipulations",
        "Suitable for sensitive bodies",
        "Attention to both posture and digestion",
        "Sustainable effect by addressing the cause",
        "Personal guidance and aftercare"
      ] : [
        "Geen kraken of harde manipulaties",
        "Geschikt voor gevoelige lichamen",
        "Aandacht voor zowel houding als spijsvertering",
        "Duurzaam effect door aanpak van de oorzaak",
        "Persoonlijke begeleiding en nazorg"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Take the first step towards more balance today"
        : "Zet vandaag nog de eerste stap naar meer balans",
      description: isEnglish
        ? "Want to get rid of pain complaints and digestive problems caused by scoliosis? Discover how my treatment method can help your body recover – in a safe, natural way. Schedule an appointment directly through the website or contact me for personal advice. Together we'll create more space, balance, and peace in your body."
        : "Wil je af van pijnklachten en spijsverteringsproblemen veroorzaakt door scoliose? Ontdek hoe mijn behandelmethode jouw lichaam kan helpen herstellen – op een veilige, natuurlijke manier. Plan direct een afspraak via de website of neem contact met mij op voor persoonlijk advies. Samen zorgen we voor meer ruimte, balans en rust in jouw lichaam."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/scoliosis" : "/scoliose"}
        keywords={[
          'scoliose behandeling',
          'scheve wervelkolom',
          'zachte behandeling',
          'natuurlijke bewegingen',
          'scoliose utrecht',
          'spijsverteringsklachten',
          'geen kraken',
          'wervelkolom correctie'
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
                src="https://images.unsplash.com/photo-1615997380705-504484cd99c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={isEnglish ? "Scoliosis treatment" : "Scoliose behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whatIs.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whatIs.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ul className="space-y-3">
                {content.whatIs.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-600">
              {content.whatIs.explanation}
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

            <div className="grid md:grid-cols-2 gap-6">
              {content.expectations.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.benefits.title}</h2>
            
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {isEnglish ? "What others say" : "Wat anderen zeggen"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scoliosisTestimonials.map((testimonial, index) => (
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