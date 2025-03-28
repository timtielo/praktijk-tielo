import React from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Calendar, ChevronRight, Phone, Heart, Brain, Shield, AlertCircle, Droplets, BedDouble, Video, Star, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../data/business';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AfterTreatmentPage() {
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
        ? "After Treatment - Recovery Guidelines | Praktijk Tielo"
        : "Na de behandeling - Herstelrichtlijnen | Praktijk Tielo",
      description: isEnglish
        ? "Important guidelines for after your treatment at Praktijk Tielo. Learn how to support your recovery and what to expect in the days following treatment."
        : "Belangrijke richtlijnen voor na je behandeling bij Praktijk Tielo. Lees hoe je je herstel kunt ondersteunen en wat je kunt verwachten in de dagen na de behandeling."
    },
    hero: {
      title: isEnglish
        ? "After Your Treatment"
        : "Na de behandeling",
      subtitle: isEnglish
        ? "Important information to support your recovery process"
        : "Belangrijke informatie om je herstelproces te ondersteunen"
    },
    doNotDo: {
      title: isEnglish ? "Important: What to Avoid" : "Belangrijk: Wat te vermijden",
      description: isEnglish
        ? "To ensure optimal recovery, avoid the following activities for a few days:"
        : "Voor een optimaal herstel, vermijd de volgende activiteiten voor enkele dagen:",
      items: isEnglish ? [
        "Do not rub, stretch, twist or poke your body",
        "Avoid crossing your legs while sitting",
        "No swimming",
        "No exercise or stretching"
      ] : [
        "Niet wrijven, rekken, draaien of poken aan het lichaam",
        "Vermijd het kruisen van je benen tijdens het zitten",
        "Niet zwemmen",
        "Geen oefeningen of stretchen"
      ]
    },
    posture: {
      title: isEnglish ? "Posture Guidelines" : "Houdingsrichtlijnen",
      items: isEnglish ? [
        "Stand up straight",
        "Sleep on your back when possible",
        "Maintain good posture while sitting",
        "Take regular breaks from sitting"
      ] : [
        "Sta rechtop",
        "Slaap zoveel mogelijk op je rug",
        "Behoud een goede houding tijdens het zitten",
        "Neem regelmatig pauze van het zitten"
      ]
    },
    reactions: {
      title: isEnglish ? "Possible Reactions" : "Mogelijke reacties",
      description: isEnglish
        ? "The following reactions are normal and may occur after 1-2 days:"
        : "De volgende reacties zijn normaal en kunnen na 1-2 dagen optreden:",
      items: isEnglish ? [
        "Feeling of aching/bruising in the body",
        "Sensation of light pressure or tension at correction points",
        "Detoxification signs such as:",
        "- Increased sweating",
        "- Changes in bowel movements",
        "- Skin breakouts",
        "- Restlessness",
        "- Flu-like symptoms"
      ] : [
        "Gevoel van spierpijn/blauwe plekken in het lichaam",
        "Gevoel van lichte druk of spanning op de correctiepunten",
        "Ontgiftingsverschijnselen zoals:",
        "- Meer zweten",
        "- Veranderingen in stoelgang",
        "- Huiduitslag",
        "- Rusteloosheid",
        "- Griepachtige verschijnselen"
      ]
    },
    recovery: {
      title: isEnglish ? "Recovery Period" : "Herstelperiode",
      description: isEnglish
        ? "Give your body time to heal and recover. During this period:"
        : "Geef je lichaam de tijd om te helen en te herstellen. Tijdens deze periode:",
      items: [
        {
          icon: BedDouble,
          title: isEnglish ? "Rest" : "Rust",
          description: isEnglish
            ? "Give your body a few days to rest and recover"
            : "Geef je lichaam een paar dagen rust om te herstellen"
        },
        {
          icon: Droplets,
          title: isEnglish ? "Hydration" : "Hydratatie",
          description: isEnglish
            ? "Drink plenty of water to support the healing process"
            : "Drink voldoende water om het helingsproces te ondersteunen"
        }
      ],
      exerciseVideo: {
        title: isEnglish ? "Watch Exercise Video" : "Bekijk oefenvideo",
        url: "https://player.vimeo.com/video/536430918"
      }
    },
    nextAppointment: {
      title: isEnglish ? "Next Appointment" : "Volgende afspraak",
      description: isEnglish
        ? "After the first two treatments, the next one is in a month, then three months later, and after that every six months. Don't have a follow-up appointment yet? Schedule it now."
        : "Na de eerste twee behandelingen is de volgende behandeling over een maand, daarna drie maanden, daarna elke zes. Nog geen vervolgsafspraak staan? Plan deze dan nu in."
    },
    review: {
      title: isEnglish ? "Share Your Experience" : "Deel je ervaring",
      description: isEnglish
        ? "Happy with your treatment? Your review helps others find their way to better health."
        : "Tevreden over je behandeling? Jouw review helpt anderen de weg naar een betere gezondheid te vinden.",
      button: isEnglish ? "Write a Review" : "Schrijf een review"
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/after-treatment" : "/na-de-behandeling"}
        keywords={[
          'herstelrichtlijnen',
          'na de behandeling',
          'herstelproces',
          'nazorg',
          'vervolgafspraak',
          'reacties behandeling',
          'herstel tips',
          'wat te vermijden'
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                {
                  label: isEnglish ? "After Treatment" : "Na de behandeling"
                }
              ]} 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{content.hero.subtitle}</p>

            {/* What to Avoid Section */}
            <section className="mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">{content.doNotDo.title}</h2>
                <p className="text-gray-600 mb-4">{content.doNotDo.description}</p>
                <ul className="space-y-3">
                  {content.doNotDo.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Posture Guidelines Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.posture.title}</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ul className="space-y-3">
                  {content.posture.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Recovery Period Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.recovery.title}</h2>
              <p className="text-gray-600 mb-6">{content.recovery.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {content.recovery.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Exercise Video Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href={content.recovery.exerciseVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Video className="w-5 h-5" />
                  <span>{content.recovery.exerciseVideo.title}</span>
                </a>
              </div>
            </section>

            {/* Reactions Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{content.reactions.title}</h2>
              <p className="text-gray-600 mb-6">{content.reactions.description}</p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ul className="space-y-3">
                  {content.reactions.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className={item.startsWith('-') ? 'pl-4 text-gray-600' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Next Appointment Section */}
            <section className="mb-12">
              <div className="bg-blue-600 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">{content.nextAppointment.title}</h2>
                <p className="text-blue-100 mb-8">{content.nextAppointment.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${businessInfo.contact.phone}`}
                    className="btn-cta bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {businessInfo.contact.phone}
                  </a>
                  <a 
                    href="https://wa.me/message/YGHG6MZEMBOIM1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
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
            </section>

            {/* Review Section */}
            <section className="mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <h2 className="text-2xl font-semibold mb-4">{content.review.title}</h2>
                <p className="text-gray-600 mb-6">{content.review.description}</p>
                <a
                  href="https://g.page/r/CckOXlQ9loCvEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Star className="w-5 h-5" />
                  {content.review.button}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}