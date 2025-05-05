import React from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Brain, Heart, ChevronRight, Phone, Calendar, Shield, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../data/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Spine } from '../components/ui/icons';
import { Contact } from '../components/Contact';

export function VertebraTherapyPage() {
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
        ? "Vertebral Therapy - Spine and Health Connection | Praktijk Tielo"
        : "Werveltherapie - Wervelkolom en Gezondheidsverbinding | Praktijk Tielo",
      description: isEnglish
        ? "Learn how your spine affects your physical and mental health. Our gentle vertebral therapy addresses the root causes of many health issues without cracking or manipulation."
        : "Ontdek hoe je wervelkolom je fysieke en mentale gezondheid beïnvloedt. Onze zachte werveltherapie pakt de onderliggende oorzaken van veel gezondheidsproblemen aan zonder kraken."
    },
    hero: {
      title: isEnglish
        ? "Vertebral Therapy: The Connection Between Your Spine and Health"
        : "Werveltherapie: De verbinding tussen je wervelkolom en gezondheid",
      description: isEnglish
        ? "Did you know that your spine is connected to all your body's functions? At Praktijk Tielo, I use a gentle approach based on the Dorn Method to address both physical and mental complaints by focusing on the spine. Discover how specific vertebrae relate to different health issues and how our natural treatment method can help you."
        : "Wist je dat je wervelkolom verbonden is met alle functies van je lichaam? Bij Praktijk Tielo gebruik ik een zachte benadering gebaseerd op de Dorn Methode om zowel fysieke als mentale klachten aan te pakken door te focussen op de wervelkolom. Ontdek hoe specifieke wervels gerelateerd zijn aan verschillende gezondheidsklachten en hoe onze natuurlijke behandelmethode je kan helpen."
    },
    vertebralConnection: {
      title: isEnglish ? "The Vertebral-Organ Connection" : "De wervel-orgaan verbinding",
      description: isEnglish
        ? "Each vertebra in your spine is connected to specific organs and body functions through nerves. When a vertebra is misaligned, it can affect the corresponding organs and systems, leading to various health issues. By correcting these misalignments, we can address the root cause of many complaints."
        : "Elke wervel in je ruggengraat is via zenuwen verbonden met specifieke organen en lichaamsfuncties. Wanneer een wervel scheef staat, kan dit de bijbehorende organen en systemen beïnvloeden, wat leidt tot verschillende gezondheidsklachten. Door deze scheefstanden te corrigeren, kunnen we de onderliggende oorzaak van veel klachten aanpakken."
    },
    vertebralMap: {
      title: isEnglish ? "Vertebral Map and Related Health Issues" : "Wervelkaart en gerelateerde gezondheidsklachten",
      sections: [
        {
          title: isEnglish ? "Cervical Vertebrae (C1-C7)" : "Halswervels (C1-C7)",
          description: isEnglish
            ? "The cervical vertebrae affect the head, brain, face, inner and middle ear, sympathetic nervous system, and more."
            : "De halswervels beïnvloeden het hoofd, de hersenen, het gezicht, het binnen- en middenoor, het sympathische zenuwstelsel en meer.",
          issues: isEnglish ? [
            "Headaches and migraines",
            "Dizziness and balance problems",
            "High blood pressure",
            "Sleep disorders",
            "Vision problems",
            "Allergies"
          ] : [
            "Hoofdpijn en migraine",
            "Duizeligheid en evenwichtsproblemen",
            "Hoge bloeddruk",
            "Slaapstoornissen",
            "Zichtproblemen",
            "Allergieën"
          ]
        },
        {
          title: isEnglish ? "Thoracic Vertebrae (T1-T12)" : "Borstwervels (T1-T12)",
          description: isEnglish
            ? "The thoracic vertebrae are connected to the heart, lungs, bronchi, esophagus, and digestive organs."
            : "De borstwervels zijn verbonden met het hart, de longen, bronchiën, slokdarm en spijsverteringsorganen.",
          issues: isEnglish ? [
            "Asthma and breathing difficulties",
            "Heart palpitations",
            "Digestive problems",
            "Acid reflux",
            "Chest pain",
            "Fatigue"
          ] : [
            "Astma en ademhalingsproblemen",
            "Hartkloppingen",
            "Spijsverteringsproblemen",
            "Zuurbranden",
            "Pijn op de borst",
            "Vermoeidheid"
          ]
        },
        {
          title: isEnglish ? "Lumbar Vertebrae (L1-L5)" : "Lendenwervels (L1-L5)",
          description: isEnglish
            ? "The lumbar vertebrae affect the lower abdomen, large intestine, sex organs, and lower extremities."
            : "De lendenwervels beïnvloeden de onderbuik, dikke darm, geslachtsorganen en onderste ledematen.",
          issues: isEnglish ? [
            "Lower back pain",
            "Constipation",
            "Menstrual problems",
            "Fertility issues",
            "Sciatica",
            "Knee pain"
          ] : [
            "Lage rugpijn",
            "Constipatie",
            "Menstruatieproblemen",
            "Vruchtbaarheidsproblemen",
            "Ischias",
            "Kniepijn"
          ]
        },
        {
          title: isEnglish ? "Sacrum and Coccyx" : "Heiligbeen en staartbeen",
          description: isEnglish
            ? "The sacrum and coccyx are related to the rectum, anus, and pelvic floor."
            : "Het heiligbeen en staartbeen zijn gerelateerd aan het rectum, de anus en de bekkenbodem.",
          issues: isEnglish ? [
            "Pelvic pain",
            "Hemorrhoids",
            "Bladder problems",
            "Tailbone pain"
          ] : [
            "Bekkenpijn",
            "Aambeien",
            "Blaasproblemen",
            "Stuitpijn"
          ]
        }
      ]
    },
    treatment: {
      title: isEnglish ? "Our Approach to Vertebral Therapy" : "Onze aanpak van werveltherapie",
      description: isEnglish
        ? "At Praktijk Tielo, I use a gentle approach to correct misalignments in the spine. Unlike traditional chiropractic methods, there is no cracking or forceful manipulation. Instead, I use natural movements and light touches to guide the body back into alignment."
        : "Bij Praktijk Tielo gebruik ik een zachte benadering om scheefstanden in de wervelkolom te corrigeren. In tegenstelling tot traditionele chiropractische methoden, is er geen kraken of krachtige manipulatie. In plaats daarvan gebruik ik natuurlijke bewegingen en lichte aanrakingen om het lichaam terug in balans te brengen.",
      steps: isEnglish ? [
        "Assessment of posture and spinal alignment",
        "Gentle correction of misalignments",
        "Self-help exercises to maintain alignment",
        "Follow-up treatments to ensure lasting results"
      ] : [
        "Beoordeling van houding en wervelkolomuitlijning",
        "Zachte correctie van scheefstanden",
        "Zelfhulpoefeningen om uitlijning te behouden",
        "Vervolgbehandelingen om blijvende resultaten te garanderen"
      ]
    },
    benefits: {
      title: isEnglish ? "Benefits of Vertebral Therapy" : "Voordelen van werveltherapie",
      items: isEnglish ? [
        "Addresses the root cause of many health issues",
        "Gentle and safe for all ages",
        "No cracking or forceful manipulation",
        "Improves overall health and well-being",
        "Helps with both physical and mental complaints"
      ] : [
        "Pakt de onderliggende oorzaak van veel gezondheidsklachten aan",
        "Zacht en veilig voor alle leeftijden",
        "Geen kraken of krachtige manipulatie",
        "Verbetert de algehele gezondheid en welzijn",
        "Helpt bij zowel fysieke als mentale klachten"
      ]
    },
    cta: {
      title: isEnglish ? "Experience the Benefits of Vertebral Therapy" : "Ervaar de voordelen van werveltherapie",
      description: isEnglish
        ? "Ready to address the root cause of your health issues? Schedule an appointment today and experience the benefits of our gentle vertebral therapy."
        : "Klaar om de onderliggende oorzaak van je gezondheidsklachten aan te pakken? Maak vandaag nog een afspraak en ervaar de voordelen van onze zachte werveltherapie."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/vertebral-therapy" : "/werveltherapie"}
        keywords={[
          'werveltherapie',
          'dorn methode',
          'wervelkolom gezondheid',
          'zachte wervelbehandeling',
          'wervel-orgaan verbinding',
          'natuurlijke behandeling',
          'wervelcorrectie',
          'zonder kraken'
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                {
                  label: isEnglish ? "Vertebral Therapy" : "Werveltherapie"
                }
              ]} 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{content.hero.description}</p>

            {/* Vertebral-Organ Connection Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.vertebralConnection.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{content.vertebralConnection.description}</p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="/assets/photos/Dornmethodchart.jpg" 
                  alt={isEnglish ? "Vertebral-Organ Connection Chart" : "Wervel-Orgaan Verbindingskaart"}
                  className="w-full h-auto rounded-lg mb-6"
                />
                <p className="text-sm text-gray-500 text-center">
                  {isEnglish 
                    ? "Chart showing the connection between vertebrae and body functions/organs" 
                    : "Kaart die de verbinding tussen wervels en lichaamsfuncties/organen toont"}
                </p>
              </div>
            </section>

            {/* Vertebral Map Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.vertebralMap.title}</h2>
              
              <div className="space-y-6">
                {content.vertebralMap.sections.map((section, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full mt-1">
                        <Spine className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                        <p className="text-gray-600 mb-4">{section.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 text-gray-700">
                            {isEnglish ? "Related Health Issues:" : "Gerelateerde gezondheidsklachten:"}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            {section.issues.map((issue, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-600">{issue}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Treatment Approach Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.treatment.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{content.treatment.description}</p>
              
              <div className="bg-blue-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {isEnglish ? "Our Treatment Process" : "Ons behandelproces"}
                </h3>
                <ul className="space-y-4">
                  {content.treatment.steps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.benefits.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {content.benefits.items.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{content.cta.title}</h2>
              <p className="text-gray-600 mb-8">{content.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${businessInfo.contact.phone}`}
                  className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
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
            </section>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Contact />
    </>
  );
}