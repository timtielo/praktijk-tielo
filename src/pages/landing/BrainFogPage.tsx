import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Brain, Shield, Heart, MessageSquare, Activity, Apple } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const relevantTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('concentratie') || 
  t.text.toLowerCase().includes('concentration') ||
  t.text.toLowerCase().includes('hoofd') || 
  t.text.toLowerCase().includes('head') ||
  t.text.toLowerCase().includes('denken') ||
  t.text.toLowerCase().includes('think') ||
  t.text.toLowerCase().includes('moe') ||
  t.text.toLowerCase().includes('tired') ||
  t.text.toLowerCase().includes('energie') ||
  t.text.toLowerCase().includes('energy') ||
  t.text.toLowerCase().includes('brain') ||
  t.text.toLowerCase().includes('hersenen')
).slice(0, 4);

export function BrainFogPage() {
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
        ? "Brain Fog Treatment | Natural Approach | Praktijk Tielo"
        : "Behandeling voor Brain Fog | Natuurlijke Aanpak | Praktijk Tielo",
      description: isEnglish
        ? "Struggling with brain fog, poor concentration, or mental fatigue? Discover how our natural treatment method and dietary advice can help clear your mind without medication."
        : "Last van brain fog, concentratieproblemen of mentale vermoeidheid? Ontdek hoe onze natuurlijke behandelmethode en voedingsadvies je hoofd kan helpen opklaren zonder medicatie."
    },
    hero: {
      title: isEnglish
        ? "Clear the fog from your mind naturally"
        : "Verdrijf de mist uit je hoofd op natuurlijke wijze",
      description: isEnglish
        ? "Do you often feel like you're thinking through a fog? Having trouble concentrating, remembering things, or feeling mentally exhausted? Brain fog can significantly impact your daily life, work performance, and overall well-being. At Praktijk Tielo, I offer a natural, body-oriented approach to help clear your mind and restore mental clarity – without medication or invasive treatments."
        : "Voel je vaak alsof je door een mist heen denkt? Heb je moeite met concentreren, dingen onthouden of voel je je mentaal uitgeput? Brain fog kan een grote impact hebben op je dagelijks leven, werkprestaties en algemeen welzijn. Bij Praktijk Tielo bied ik een natuurlijke, lichaamsgerichte aanpak om je hoofd op te klaren en mentale helderheid te herstellen – zonder medicatie of invasieve behandelingen."
    },
    whatIs: {
      title: isEnglish ? "What is brain fog and how does it feel?" : "Wat is brain fog en hoe voelt het?",
      description: isEnglish
        ? "Brain fog isn't a medical diagnosis, but a term that describes a constellation of symptoms affecting cognitive function. When experiencing brain fog, you might feel:"
        : "Brain fog is geen medische diagnose, maar een term die een verzameling symptomen beschrijft die de cognitieve functie beïnvloeden. Als je brain fog ervaart, voel je mogelijk:",
      symptoms: isEnglish ? [
        "Mental fatigue and exhaustion even after adequate rest",
        "Difficulty concentrating or focusing on tasks",
        "Forgetfulness and trouble recalling information",
        "Confusion or feeling disoriented",
        "Slower thinking and processing",
        "Trouble finding words or expressing thoughts",
        "Feeling overwhelmed by simple tasks",
        "Decreased mental clarity and sharpness"
      ] : [
        "Mentale vermoeidheid en uitputting, zelfs na voldoende rust",
        "Moeite met concentreren of focussen op taken",
        "Vergeetachtigheid en problemen met het herinneren van informatie",
        "Verwarring of desoriëntatie",
        "Langzamer denken en verwerken",
        "Moeite met het vinden van woorden of het uiten van gedachten",
        "Je overweldigd voelen door eenvoudige taken",
        "Verminderde mentale helderheid en scherpte"
      ]
    },
    causes: {
      title: isEnglish ? "The physical connection to brain fog" : "De fysieke connectie met brain fog",
      description: isEnglish
        ? "Many people don't realize that brain fog often has physical origins. The mind-body connection is powerful, and physical imbalances can directly impact cognitive function:"
        : "Veel mensen realiseren zich niet dat brain fog vaak fysieke oorzaken heeft. De connectie tussen lichaam en geest is krachtig, en fysieke disbalans kan direct invloed hebben op cognitieve functies:",
      factors: [
        {
          title: isEnglish ? "Spinal misalignment" : "Wervelkolomscheefstand",
          description: isEnglish
            ? "Misalignments in the upper spine and neck can affect blood flow to the brain and proper nerve function"
            : "Scheefstand in de bovenste wervelkolom en nek kan de bloedtoevoer naar de hersenen en de juiste zenuwfunctie beïnvloeden"
        },
        {
          title: isEnglish ? "Tension patterns" : "Spanningspatronen",
          description: isEnglish
            ? "Chronic tension in the neck, shoulders, and fascia can restrict energy flow and create pressure on nerves"
            : "Chronische spanning in de nek, schouders en fascia kan energiestroom beperken en druk op zenuwen creëren"
        },
        {
          title: isEnglish ? "Breathing restrictions" : "Ademhalingsbeperkingen",
          description: isEnglish
            ? "Shallow breathing due to posture issues reduces oxygen to the brain, affecting cognitive function"
            : "Oppervlakkige ademhaling door houdingsproblemen vermindert zuurstof naar de hersenen, wat de cognitieve functie beïnvloedt"
        },
        {
          title: isEnglish ? "Autonomic nervous system imbalance" : "Disbalans in het autonome zenuwstelsel",
          description: isEnglish
            ? "Being stuck in 'fight or flight' mode due to physical tension patterns affects brain function"
            : "Vastzitten in de 'vecht-of-vlucht'-modus door fysieke spanningspatronen beïnvloedt de hersenfunctie"
        }
      ]
    },
    nutrition: {
      title: isEnglish ? "The food-brain connection" : "De voeding-hersenen connectie",
      description: isEnglish
        ? "What you eat has a profound impact on your brain function and can significantly contribute to brain fog. Certain foods can either worsen or improve cognitive clarity:"
        : "Wat je eet heeft een grote invloed op je hersenfunctie en kan aanzienlijk bijdragen aan brain fog. Bepaalde voedingsmiddelen kunnen de cognitieve helderheid verslechteren of verbeteren:",
      factors: [
        {
          title: isEnglish ? "Food sensitivities" : "Voedingsgevoeligheden",
          description: isEnglish
            ? "Undiagnosed food sensitivities can cause inflammation that affects brain function and creates mental fog"
            : "Niet-gediagnosticeerde voedingsgevoeligheden kunnen ontstekingen veroorzaken die de hersenfunctie beïnvloeden en mentale mist creëren"
        },
        {
          title: isEnglish ? "Blood sugar fluctuations" : "Bloedsuikerschommelingen",
          description: isEnglish
            ? "Rapid rises and falls in blood sugar from processed foods and sugar can cause brain fog and energy crashes"
            : "Snelle stijgingen en dalingen in bloedsuiker door bewerkte voedingsmiddelen en suiker kunnen brain fog en energiedips veroorzaken"
        },
        {
          title: isEnglish ? "Nutrient deficiencies" : "Nutriëntentekorten",
          description: isEnglish
            ? "Lack of essential nutrients like B vitamins, omega-3 fatty acids, and magnesium can impair cognitive function"
            : "Gebrek aan essentiële voedingsstoffen zoals B-vitamines, omega-3 vetzuren en magnesium kan de cognitieve functie verminderen"
        },
        {
          title: isEnglish ? "Blood type specific foods" : "Bloedgroepspecifieke voeding",
          description: isEnglish
            ? "Eating foods that aren't compatible with your blood type can cause digestive issues and inflammation that contribute to brain fog"
            : "Het eten van voedingsmiddelen die niet compatibel zijn met je bloedgroep kan spijsverteringsproblemen en ontstekingen veroorzaken die bijdragen aan brain fog"
        }
      ],
      bloodTypeLink: {
        text: isEnglish 
          ? "Learn more about how eating according to your blood type can help clear brain fog"
          : "Lees meer over hoe eten volgens je bloedgroep kan helpen brain fog te verminderen",
        url: isEnglish ? "/en/blood-type-diet" : "/bloedgroepen-dieet"
      }
    },
    approach: {
      title: isEnglish ? "Our approach to clearing brain fog" : "Onze aanpak om brain fog te verdrijven",
      description: isEnglish
        ? "At Praktijk Tielo, I use a gentle, natural approach that addresses the physical factors contributing to brain fog. By working with the body's structure and nervous system, we can help restore mental clarity and cognitive function."
        : "Bij Praktijk Tielo gebruik ik een zachte, natuurlijke aanpak die de fysieke factoren aanpakt die bijdragen aan brain fog. Door te werken met de structuur van het lichaam en het zenuwstelsel, kunnen we mentale helderheid en cognitieve functie helpen herstellen.",
      steps: [
        {
          title: isEnglish ? "Spinal alignment" : "Wervelkolomuitlijning",
          description: isEnglish
            ? "Gentle correction of misalignments in the spine, especially the upper cervical area, to improve nerve function and blood flow to the brain"
            : "Zachte correctie van scheefstand in de wervelkolom, vooral in het bovenste nekgebied, om de zenuwfunctie en bloedtoevoer naar de hersenen te verbeteren"
        },
        {
          title: isEnglish ? "Fascia release" : "Fascia-ontspanning",
          description: isEnglish
            ? "Working with the connective tissue to release tension patterns that may be affecting brain function"
            : "Werken met het bindweefsel om spanningspatronen los te laten die de hersenfunctie kunnen beïnvloeden"
        },
        {
          title: isEnglish ? "Nervous system regulation" : "Regulatie van het zenuwstelsel",
          description: isEnglish
            ? "Techniques to help shift from 'fight or flight' to 'rest and digest' mode, supporting cognitive function"
            : "Technieken om te helpen verschuiven van 'vecht-of-vlucht' naar 'rust-en-verteer'-modus, ter ondersteuning van cognitieve functie"
        },
        {
          title: isEnglish ? "Breathing optimization" : "Ademhalingsoptimalisatie",
          description: isEnglish
            ? "Improving breathing patterns to ensure optimal oxygen flow to the brain"
            : "Verbeteren van ademhalingspatronen om optimale zuurstoftoevoer naar de hersenen te garanderen"
        },
        {
          title: isEnglish ? "Nutritional guidance" : "Voedingsadvies",
          description: isEnglish
            ? "Personalized advice on foods that can help reduce inflammation and support brain function, including blood type-specific recommendations"
            : "Gepersonaliseerd advies over voeding die ontstekingen kan verminderen en hersenfunctie kan ondersteunen, inclusief bloedgroepspecifieke aanbevelingen"
        }
      ]
    },
    benefits: {
      title: isEnglish ? "Benefits of our approach for brain fog" : "Voordelen van onze aanpak voor brain fog",
      items: isEnglish ? [
        "Improved mental clarity and focus",
        "Enhanced memory and recall",
        "Reduced mental fatigue",
        "Better ability to process information",
        "Increased energy levels",
        "Improved sleep quality, which further supports cognitive function",
        "Reduced stress and anxiety that may be contributing to brain fog",
        "Long-lasting results through addressing root causes"
      ] : [
        "Verbeterde mentale helderheid en focus",
        "Verbeterd geheugen en herinnering",
        "Verminderde mentale vermoeidheid",
        "Betere verwerking van informatie",
        "Verhoogde energieniveaus",
        "Verbeterde slaapkwaliteit, wat de cognitieve functie verder ondersteunt",
        "Verminderde stress en angst die kunnen bijdragen aan brain fog",
        "Langdurige resultaten door het aanpakken van de onderliggende oorzaken"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Ready to clear your mind and think clearly again?"
        : "Klaar om je hoofd op te klaren en weer helder te denken?",
      description: isEnglish
        ? "Don't let brain fog continue to affect your quality of life, work performance, and relationships. Experience how our natural, gentle approach can help restore mental clarity and cognitive function. Contact me today to discuss how I can help with your specific situation."
        : "Laat brain fog niet langer je levenskwaliteit, werkprestaties en relaties beïnvloeden. Ervaar hoe onze natuurlijke, zachte aanpak kan helpen om mentale helderheid en cognitieve functie te herstellen. Neem vandaag nog contact met me op om te bespreken hoe ik kan helpen met jouw specifieke situatie."
    }
  };

  return (
    <>
      <SEO 
        title={content.meta.title}
        description={content.meta.description}
        canonicalPath={isEnglish ? "/en/brain-fog-treatment" : "/brain-fog-behandeling"}
        keywords={[
          'brain fog',
          'hersenmist',
          'concentratieproblemen',
          'concentration problems',
          'mentale vermoeidheid',
          'mental fatigue',
          'cognitieve functie',
          'cognitive function',
          'natuurlijke behandeling',
          'natural treatment',
          'hoofd opklaren',
          'clear mind',
          'denken door mist',
          'thinking through fog',
          'voeding en brain fog',
          'food and brain fog',
          'bloedgroepdieet',
          'blood type diet'
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
                  <span>{isEnglish ? "Improved mental clarity" : "Verbeterde mentale helderheid"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Enhanced focus" : "Verbeterde focus"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Natural approach" : "Natuurlijke aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "No medication" : "Geen medicatie"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop"
                alt={isEnglish ? "Brain fog treatment" : "Brain fog behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Brain Fog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whatIs.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whatIs.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.whatIs.symptoms.map((symptom, index) => (
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

      {/* Physical Connection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.causes.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.causes.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {content.causes.factors.map((factor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food-Brain Connection Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.nutrition.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.nutrition.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {content.nutrition.factors.map((factor, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Apple className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{factor.title}</h3>
                      <p className="text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Link 
                to={content.nutrition.bloodTypeLink.url}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                {content.nutrition.bloodTypeLink.text}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.approach.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.approach.description}
            </p>

            <div className="space-y-6">
              {content.approach.steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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