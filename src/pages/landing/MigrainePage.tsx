import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { 
  Star, 
  ChevronRight, 
  CheckCircle, 
  Phone, 
  Calendar, 
  Quote, 
  Brain, 
  Activity, 
  Heart, 
  MessageSquare,
  Shield 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const migraineTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('hoofd') || 
  t.text.toLowerCase().includes('head') ||
  t.text.toLowerCase().includes('migraine') ||
  t.text.toLowerCase().includes('duizelig') ||
  t.text.toLowerCase().includes('dizzy')
);

export function MigrainePage() {
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
        ? "Migraine Treatment Without Medication - Praktijk Tielo Utrecht"
        : "Migraine behandelen zonder medicatie – Praktijk Tielo Utrecht",
      description: isEnglish
        ? "Migraine or headache due to misalignment of your spine? Praktijk Tielo corrects underlying tension through a gentle, natural method without cracking or massage."
        : "Migraine of hoofdpijn door scheefstand van je wervelkolom? Praktijk Tielo corrigeert onderliggende spanning via een zachte, natuurlijke methode zonder kraken of massage."
    },
    hero: {
      title: isEnglish
        ? "Natural migraine relief – gentle treatment"
        : "Natuurlijk van migraine af – een zachte behandeling",
      description: isEnglish
        ? "Do you regularly experience migraine, tension headaches, or symptoms like blurred vision, dizziness, or overstimulation? Migraine can significantly affect your daily life – both physically and mentally. What many people don't know is that the cause often lies in the spine and skull base. At Praktijk Tielo, I treat migraine without medication or manipulations, but with a natural and gentle approach focused on restoring the proper alignment of your body."
        : "Ervaar je regelmatig migraine, spanningshoofdpijn of klachten als wazig zien, duizeligheid of overprikkeling? Migraine kan je dagelijkse leven flink beïnvloeden – zowel lichamelijk als mentaal. Wat veel mensen niet weten, is dat de oorzaak vaak ligt in de wervelkolom en schedelbasis. Bij Praktijk Tielo behandel ik migraine zonder medicatie of manipulaties, maar met een natuurlijke en zachte aanpak gericht op het herstellen van de juiste uitlijning van je lichaam."
    },
    atlas: {
      title: isEnglish
        ? "The atlas (C1): the key vertebra in migraine"
        : "De atlas (C1): de sleutelwervel bij migraine",
      description: isEnglish
        ? "The atlas is the top cervical vertebra on which your head rests. When this vertebra is out of alignment, it can cause pressure on nerves and blood vessels that run to your head. This often leads to:"
        : "De atlas is de bovenste nekwervel waarop je hoofd rust. Wanneer deze wervel uit lijn staat, kan dat druk veroorzaken op zenuwen en bloedvaten die naar je hoofd lopen. Dit leidt vaak tot:",
      symptoms: isEnglish ? [
        "Headache or migraine",
        "Brain fog or blurred vision",
        "Overstimulation (light, sound, smell)",
        "Dizziness or balance problems",
        "Poor memory or concentration problems",
        "Neck and shoulder complaints",
        "High blood pressure or shortness of breath",
        "A feeling of lacking mental overview"
      ] : [
        "Hoofdpijn of migraine",
        "Brain fog of wazig zien",
        "Overprikkeling (licht, geluid, geur)",
        "Duizeligheid of balansproblemen",
        "Slecht geheugen of concentratieproblemen",
        "Nek- en schouderklachten",
        "Hoge bloeddruk of benauwdheid",
        "Een gevoel van mentaal overzicht missen"
      ]
    },
    otherVertebrae: {
      title: isEnglish
        ? "Other vertebrae also play a role"
        : "Ook andere wervels spelen een rol",
      description: isEnglish
        ? "Not only the atlas, but also other parts of the spine can contribute to migraine-like complaints:"
        : "Niet alleen de atlas, maar ook andere delen van de wervelkolom kunnen bijdragen aan migraineachtige klachten:",
      items: [
        {
          title: "C2 (Axis)",
          description: isEnglish
            ? "fixation can cause radiating pain to the back of the head"
            : "fixatie kan uitstralende pijn geven naar het achterhoofd"
        },
        {
          title: "C3-C5",
          description: isEnglish
            ? "influence the neck muscles and breathing; tension here can trigger headaches"
            : "beïnvloeden de nekspieren en ademhaling; spanning hier kan hoofdpijn triggeren"
        },
        {
          title: "T1-T4",
          description: isEnglish
            ? "tensions in this area disrupt the nervous system and influence heart rate and breathing"
            : "spanningen in dit gebied verstoren het zenuwstelsel en beïnvloeden de hartslag en ademhaling"
        },
        {
          title: isEnglish ? "Jaw (TMJ) and skull base" : "Kaak (TMJ) en schedelbasis",
          description: isEnglish
            ? "especially with stress or teeth grinding often involved in chronic migraine"
            : "vooral bij stress of tandenknarsen vaak betrokken bij chronische migraine"
        }
      ]
    },
    approach: {
      title: isEnglish
        ? "My approach: treating migraine through natural corrections"
        : "Mijn werkwijze: migraine behandelen via natuurlijke correcties",
      description: isEnglish
        ? "At Praktijk Tielo, I work with a logical, gentle method to bring the body back into alignment – without cracking or hard manipulations. This helps the nervous system calm down and prevents new migraine attacks."
        : "Bij Praktijk Tielo werk ik met een logische, zachte methode om het lichaam terug in lijn te brengen – zonder kraken of harde manipulaties. Dit helpt het zenuwstelsel tot rust te komen en voorkomt nieuwe migraine-aanvallen.",
      steps: [
        {
          title: isEnglish ? "Leg length check" : "Beenlengtecontrole",
          description: isEnglish
            ? "as a starting point to measure misalignment"
            : "als startpunt om scheefstand te meten"
        },
        {
          title: isEnglish ? "Pelvis and spine corrections" : "Bekken- en wervelkolomcorrecties",
          description: isEnglish
            ? "for balance in the entire body"
            : "voor balans in het hele lichaam"
        },
        {
          title: isEnglish ? "Atlas and jaw correction" : "Correctie van de atlas en kaak",
          description: isEnglish
            ? "aimed at relieving pressure on nerves and blood vessels"
            : "gericht op verlichting van druk op zenuwen en bloedvaten"
        }
      ]
    },
    benefits: {
      title: isEnglish
        ? "Why choose Praktijk Tielo for migraine?"
        : "Waarom kiezen voor Praktijk Tielo bij migraine?",
      items: [
        {
          icon: Shield,
          text: isEnglish
            ? "Gentle, safe treatment without medication"
            : "Zachte, veilige behandeling zonder medicatie"
        },
        {
          icon: Brain,
          text: isEnglish
            ? "Focused on the underlying cause, not just symptoms"
            : "Gericht op de onderliggende oorzaak, niet alleen symptomen"
        },
        {
          icon: Heart,
          text: isEnglish
            ? "Also suitable for stress, burnout, or jaw complaints"
            : "Ook geschikt bij stress, burn-out of kaakklachten"
        },
        {
          icon: Activity,
          text: isEnglish
            ? "Often experience relief after 1-2 sessions"
            : "Ervaar vaak al verlichting na 1 à 2 sessies"
        }
      ]
    },
    finalCta: {
      title: isEnglish
        ? "Ready to tackle your migraine at the source?"
        : "Klaar om je migraine bij de bron aan te pakken?",
      description: isEnglish
        ? "Want to get rid of recurring migraine or headaches and balance your body naturally? Easily schedule an appointment through the website or contact me for personal advice. Together we'll work on lasting relief, so you can function clearly and freely again."
        : "Wil jij af van terugkerende migraine of hoofdpijn en je lichaam op een natuurlijke manier in balans brengen? Plan eenvoudig een afspraak via de website of neem contact met mij op voor persoonlijk advies. Samen werken we aan blijvende verlichting, zodat jij weer helder en vrij kunt functioneren."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/migraine-treatment" : "/migraine-behandeling"}
        keywords={[
          'migraine behandeling',
          'hoofdpijn behandeling',
          'atlas correctie',
          'natuurlijke migrainebehandeling',
          'migraine zonder medicatie',
          'hoofdpijn utrecht',
          'migraine therapie',
          'alternatieve migrainebehandeling'
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
                {content.benefits.items.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-green-500" />
                      <span>{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1634906344426-2ba0e7c91b09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={isEnglish ? "Migraine treatment" : "Migraine behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atlas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.atlas.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.atlas.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {content.atlas.symptoms.map((symptom, index) => (
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

      {/* Other Vertebrae Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.otherVertebrae.title}</h2>
            
            <div className="grid gap-6">
              {content.otherVertebrae.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
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

            <div className="grid gap-6">
              {content.approach.steps.map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
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

      {/* Testimonials Section */}
      {migraineTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {migraineTestimonials.map((testimonial, index) => (
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