import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Moon, Brain, Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const sleepTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('slaap') || 
  t.text.toLowerCase().includes('sleep') ||
  t.text.toLowerCase().includes('rust') ||
  t.text.toLowerCase().includes('calm') ||
  t.text.toLowerCase().includes('ontspan') ||
  t.text.toLowerCase().includes('relax')
);

export function SleepProblemsPage() {
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
        ? "Natural Sleep Problems Treatment - Praktijk Tielo Utrecht"
        : "Natuurlijk van je slaapproblemen af – Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Having trouble sleeping or waking up often at night? Praktijk Tielo offers natural treatment for sleep problems without medication or manipulation. Restore your balance and rest."
        : "Moeite met slapen of 's nachts vaak wakker? Praktijk Tielo biedt een natuurlijke behandeling bij slaapproblemen zonder medicatie of manipulatie. Herstel jouw balans en rust."
    },
    hero: {
      title: isEnglish
        ? "Natural treatment for sleep problems"
        : "Natuurlijk van je slaapproblemen af",
      description: isEnglish
        ? "Do you have trouble falling asleep, wake up often at night, or feel tired during the day despite getting enough hours of sleep? Sleep problems can seriously affect your daily functioning. At Praktijk Tielo, I offer a natural and effective treatment that helps you sleep deeply and relaxed again – without medication, massage, or manipulation."
        : "Heb je moeite met inslapen, word je 's nachts vaak wakker of voel je je overdag vermoeid ondanks voldoende uren slaap? Slaapproblemen kunnen je dagelijks functioneren ernstig beïnvloeden. Bij Praktijk Tielo bied ik een natuurlijke en effectieve behandeling die je helpt om weer diep en ontspannen te slapen – zonder medicatie, massage of manipulatie."
    },
    causes: {
      title: isEnglish
        ? "How do sleep problems arise?"
        : "Hoe ontstaan slaapproblemen?",
      description: isEnglish
        ? "Sleep problems often arise from a combination of physical tension, mental overload, and disturbed posture. Tension in the connective tissue, a crooked posture, or stuck joints can prevent the body from finding rest at night. The nerve pathways that regulate sleep can also become unbalanced as a result."
        : "Slaapproblemen ontstaan vaak door een combinatie van fysieke spanning, mentale overbelasting en een verstoorde lichaamshouding. Spanning in het bindweefsel, een scheve lichaamshouding of vastzittende gewrichten kunnen ervoor zorgen dat het lichaam 's nachts niet tot rust komt. Ook de zenuwbanen die slaap reguleren kunnen hierdoor uit balans raken.",
      commonComplaints: {
        title: isEnglish ? "Common complaints:" : "Veelvoorkomende klachten:",
        items: isEnglish ? [
          "Difficulty falling or staying asleep",
          "Restless or shallow sleep",
          "Nighttime worrying or waking up tense",
          "Not lying comfortably",
          "Fatigue, irritability, or concentration problems during the day"
        ] : [
          "Moeite met inslapen of doorslapen",
          "Onrustig of oppervlakkig slapen",
          "Nachtelijk piekeren of gespannen wakker worden",
          "Niet lekker liggen",
          "Vermoeidheid, prikkelbaarheid of concentratieproblemen overdag"
        ]
      }
    },
    solution: {
      title: isEnglish
        ? "A natural solution without medication"
        : "Een natuurlijke oplossing zonder medicatie",
      description: isEnglish
        ? "At Praktijk Tielo, I work with gentle techniques that help body and nervous system relax. Through natural movements and light touches, I bring your body back into balance. This improves blood circulation, reduces tension in the connective tissue, and restores calm in the nervous system – all essential conditions for healthy sleep."
        : "Bij Praktijk Tielo werk ik met zachte technieken die lichaam en zenuwstelsel helpen ontspannen. Door natuurlijke bewegingen en lichte aanrakingen breng ik jouw lichaam weer in balans. Dit verbetert de doorbloeding, vermindert spanning in het bindweefsel en herstelt de rust in het zenuwstelsel – allemaal essentiële voorwaarden voor een gezonde nachtrust."
    },
    treatment: {
      title: isEnglish
        ? "What does the treatment involve?"
        : "Wat houdt de behandeling in?",
      items: isEnglish ? [
        {
          title: "Body analysis",
          description: "I look at tension areas, posture, and possible blockages that disturb sleep"
        },
        {
          title: "Gentle corrections",
          description: "Natural movements and subtle touches help the body let go"
        },
        {
          title: "Better relaxation and nerve regulation",
          description: "Your nervous system gets space to enter a rest state"
        },
        {
          title: "Self-help exercises",
          description: "Practical tips and exercises to improve your sleep quality at home"
        }
      ] : [
        {
          title: "Lichaamsanalyse",
          description: "Ik bekijk spanningsgebieden, houding en mogelijke blokkades die slaap verstoren"
        },
        {
          title: "Zachte correcties",
          description: "Natuurlijke bewegingen en subtiele aanrakingen helpen het lichaam los te laten"
        },
        {
          title: "Betere ontspanning en zenuwregulatie",
          description: "Je zenuwstelsel krijgt ruimte om in een rusttoestand te komen"
        },
        {
          title: "Zelfhulpoefeningen",
          description: "Praktische tips en oefeningen om ook thuis je slaapkwaliteit te verbeteren"
        }
      ]
    },
    benefits: {
      title: isEnglish
        ? "Why choose Praktijk Tielo for sleep problems?"
        : "Waarom kiezen voor Praktijk Tielo bij slaapproblemen?",
      items: isEnglish ? [
        "No medication or heavy manipulations",
        "Effect on both body and nervous system",
        "Also suitable for stress-related sleep problems",
        "Sustainable improvement of your sleep",
        "Personal guidance and aftercare"
      ] : [
        "Geen medicatie of zware manipulaties",
        "Effect op zowel lichaam als zenuwstelsel",
        "Ook geschikt bij stressgerelateerde slaapproblemen",
        "Duurzame verbetering van jouw nachtrust",
        "Persoonlijke begeleiding en nazorg"
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Experience what a good night's sleep does"
        : "Ervaar zelf wat een goede nachtrust doet",
      description: isEnglish
        ? "Want to wake up refreshed and start your day with energy? Choose a natural and safe approach to your sleep problems. Schedule your appointment at Praktijk Tielo in Utrecht today or contact me for personal advice. Together we'll bring rest back to your body – and to your nights."
        : "Wil je weer uitgerust wakker worden en vol energie je dag beginnen? Kies voor een natuurlijke en veilige benadering van je slaapproblemen. Plan vandaag nog jouw afspraak bij Praktijk Tielo in Utrecht of neem contact op voor persoonlijk advies. Samen brengen we rust terug in jouw lichaam – en in jouw nachten."
    }
  };

  return (
    <>
      <SEO 
        titleKey="landing.sleepProblems.title"
        descriptionKey="landing.sleepProblems.description"
        canonicalPath={isEnglish ? "/en/sleep-problems" : "/slaapproblemen"}
        keywords={[
          'slaapproblemen behandeling',
          'natuurlijke slaapbehandeling',
          'slapeloosheid utrecht',
          'beter slapen',
          'slaapklachten',
          'inslaapproblemen',
          'doorslaapproblemen',
          'slaaptherapie utrecht'
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
                  <Moon className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Better sleep" : "Beter slapen"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Mental rest" : "Mentale rust"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "Natural approach" : "Natuurlijke aanpak"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{isEnglish ? "No medication" : "Geen medicatie"}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={isEnglish ? "Sleep problems treatment" : "Slaapproblemen behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.causes.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.causes.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content.causes.commonComplaints.title}</h3>
              <ul className="space-y-3">
                {content.causes.commonComplaints.items.map((complaint, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{complaint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.solution.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.solution.description}
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
      {sleepTestimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sleepTestimonials.map((testimonial, index) => (
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