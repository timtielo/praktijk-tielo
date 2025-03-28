import React from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Clock, MapPin, Car, ChevronRight, Calendar, Phone, Shirt, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../data/business';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function BeforeTreatmentPage() {
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
        ? "Before Treatment - What to Expect | Praktijk Tielo"
        : "Voor de behandeling - Wat te verwachten | Praktijk Tielo",
      description: isEnglish
        ? "Learn what to expect from your treatment at Praktijk Tielo. Information about the treatment process, location, and free parking."
        : "Lees wat je kunt verwachten van je behandeling bij Praktijk Tielo. Informatie over het behandeltraject, locatie en gratis parkeren."
    },
    hero: {
      title: isEnglish
        ? "Before Your Treatment"
        : "Voor de behandeling",
      subtitle: isEnglish
        ? "Everything you need to know about your visit to Praktijk Tielo"
        : "Alles wat je moet weten over je bezoek aan Praktijk Tielo"
    },
    preparation: {
      title: isEnglish ? "Preparation" : "Voorbereiding",
      clothing: {
        title: isEnglish ? "What to Wear" : "Wat trek je aan",
        description: isEnglish
          ? "Please wear loose, comfortable clothing such as joggers and a t-shirt. This allows for optimal movement during the treatment. You will wear these during the treatment."
          : "Draag losse, comfortabele kleding zoals een joggingbroek en een t-shirt. Dit zorgt voor optimale bewegingsvrijheid tijdens de behandeling. Deze houd je aan tijdens de behandeling."
      },
      aftercare: {
        title: isEnglish ? "After Treatment" : "Na de behandeling",
        description: isEnglish
          ? "To ensure optimal recovery, avoid intensive sports activities for 5 days after the treatment. Light exercise and walking are fine."
          : "Voor een optimaal herstel is het belangrijk om 5 dagen na de behandeling geen intensieve sportactiviteiten te doen. Lichte beweging en wandelen is prima."
      }
    },
    location: {
      title: isEnglish ? "Location" : "Locatie",
      address: {
        title: isEnglish ? "Address" : "Adres",
        description: isEnglish
          ? "Praktijk Tielo is located in a quiet residential area in Utrecht, easily accessible by car and public transport. De practice is located on the backside. Walk through the alley, go left and open the white door."
          : "Praktijk Tielo is gevestigd in een rustige woonwijk in Utrecht, goed bereikbaar met auto en openbaar vervoer. De praktijk bevindt zich aan de achterkant. Loop door het gangetje, aan het eind links. Het is de witte deur."
      },
      parking: {
        title: isEnglish ? "Free Parking" : "Gratis parkeren",
        description: isEnglish
          ? "Free parking is available directly in front of the practice and in the surrounding streets."
          : "Gratis parkeren is mogelijk direct voor de praktijk en in de omliggende straten."
      }
    },
    treatment: {
      title: isEnglish ? "Treatment Process" : "Behandeltraject",
      first: {
        title: isEnglish ? "First Treatment (60 min)" : "Eerste behandeling (60 min)",
        description: isEnglish
          ? "Alignment of the spine, correction of the sacrum and leg length difference. I will also show you the effect of the treatment right away."
          : "Uitlijnen van de wervelkolom, correctie van het heiligbeen en beenlengte verschil. Ik laat je ook het effect van de behandeling direct zien en voelen."
      },
      second: {
        title: isEnglish ? "Second Treatment (60 min)" : "Tweede behandeling (60 min)",
        description: isEnglish
          ? "Repetition of first treatment plus heat treatment for better blood circulation and anchoring."
          : "Herhaling eerste behandeling plus warmtebehandeling voor betere doorbloeding en verankering."
      },
      followUp: {
        title: isEnglish ? "Follow-up Process" : "Vervolgtraject",
        description: isEnglish
          ? "Follow-up appointments after 1, 3, and 6 months to get your body more and more in line. A life is made is 9 months, so it also takes 9 to change one."
          : "Vervolgafspraken na 1, 3 en 6 maanden om je lichaam steeds meer in lijn te krijgen. Een leven creëeren duurt 9 maanden, dus zo lang duurt het ook om er één te veranderen."
      }
    },
    cta: {
      title: isEnglish
        ? "Ready to start your treatment?"
        : "Klaar om te beginnen met je behandeling?",
      description: isEnglish
        ? "Schedule your appointment now or contact us for more information."
        : "Plan direct je afspraak of neem contact met ons op voor meer informatie."
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/before-treatment" : "/voor-de-behandeling"}
        keywords={[
          'behandeltraject',
          'locatie praktijk tielo',
          'parkeren utrecht',
          'natuurlijke behandeling',
          'eerste afspraak',
          'behandelproces',
          'praktische informatie'
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                {
                  label: isEnglish ? "Before Treatment" : "Voor de behandeling"
                }
              ]} 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{content.hero.subtitle}</p>

            {/* Preparation Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.preparation.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Shirt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{content.preparation.clothing.title}</h3>
                      <p className="text-gray-600">{content.preparation.clothing.description}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Activity className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{content.preparation.aftercare.title}</h3>
                      <p className="text-gray-600">{content.preparation.aftercare.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Location Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.location.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{content.location.address.title}</h3>
                      <p className="text-gray-600 mb-4">{content.location.address.description}</p>
                      <p className="font-medium">{businessInfo.contact.address.street}</p>
                      <p>{businessInfo.contact.address.postalCode} {businessInfo.contact.address.city}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{content.location.parking.title}</h3>
                      <p className="text-gray-600">{content.location.parking.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ16u4EGperxCb6rlrRUWQlIjlMYZb0oU&q=Praktijk+Tielo,Utrecht+Netherlands"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Praktijk Tielo location"
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Treatment Process Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.treatment.title}</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{content.treatment.first.title}</h3>
                      <p className="text-gray-600">{content.treatment.first.description}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{content.treatment.second.title}</h3>
                      <p className="text-gray-600">{content.treatment.second.description}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{content.treatment.followUp.title}</h3>
                      <p className="text-gray-600">{content.treatment.followUp.description}</p>
                    </div>
                  </div>
                </div>
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
    </>
  );
}