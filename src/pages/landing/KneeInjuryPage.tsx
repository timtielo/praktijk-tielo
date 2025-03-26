import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials - specifically include Lars' testimonial
const kneeInjuryTestimonials = testimonials.filter(t => 
  (t.id === 'lars-1') || // Always include Lars' testimonial
  t.text.toLowerCase().includes('knie') || 
  t.text.toLowerCase().includes('knee') ||
  t.text.toLowerCase().includes('sport') ||
  t.text.toLowerCase().includes('blessure')
).map(t => {
  // Use shortened version for Lars' testimonial
  if (t.id === 'lars-1') {
    return {
      ...t,
      text: t.shortText || t.text,
      textEn: t.shortTextEn || t.textEn || t.text
    };
  }
  return t;
});

export function KneeInjuryPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  const content = {
    meta: {
      title: isEnglish 
        ? "Knee Injury Treatment Utrecht | Praktijk Tielo"
        : "Knieblessure behandelen Utrecht | Praktijk Tielo",
      description: isEnglish
        ? "Looking for effective treatment for your knee injury or sports injury in Utrecht? Experience our natural approach for quick recovery. Schedule your appointment now!"
        : "Heb jij een sportblessure, zoals een knieblessure, die je wilt behandelen? Ik bied een effectieve en duurzame aanpak, lees snel verder voor meer informatie!"
    },
    hero: {
      title: isEnglish ? 
        "Want to treat your knee injury?" :
        "Jouw knieblessure laten behandelen?",
      description: isEnglish ?
        "A sports injury can limit you not only in your sports activities but also in your daily life. Whether it's ankle, muscle, or knee injuries, it's essential to treat your complaints quickly and effectively. At Praktijk Tielo in Utrecht, you're at the right place for treating your sports injury. I offer a natural approach, so you can get moving again quickly. You are assured of a personal treatment that not only relieves pain but also ensures lasting results. Read on or contact me for more information about the treatments." :
        "Een sportblessure kan je niet alleen in je sportbeoefening beperken, maar ook in je dagelijks leven. Of het nu gaat om enkel-, spier of knieblessures, het is essentieel om jouw klachten snel en effectief te behandelen. Bij Praktijk Tielo in Utrecht ben je aan het juiste adres voor een behandeling van jouw sportblessure. Ik bied een natuurlijke aanpak, zodat je snel weer in beweging kunt komen. Je bent verzekerd van een persoonlijke behandeling die niet alleen de pijn verlicht, maar ook zorgt voor blijvend resultaat. Lees verder of neem contact met mij op voor meer informatie over de behandelingen.",
      cta: {
        schedule: isEnglish ? "Schedule appointment" : "Maak een afspraak"
      }
    },
    balance: {
      title: isEnglish ?
        "Get back in balance physically and mentally" :
        "Kom lichamelijk én geestelijk weer in balans",
      description: isEnglish ?
        "I understand how important it is to be able to play sports again without pain quickly. My treatment method focuses on restoring the right body balance, addressing the cause of the sports injury. Whether it's knee pain, muscle injuries, or ankle complaints, my combination of natural movements and light touches restores the correct position of your joints. This not only has a positive effect on your physical health but can also contribute to better mental well-being." :
        "Ik begrijp hoe belangrijk het is om snel weer te kunnen sporten zonder pijn. Mijn behandelmethode richt zich op het herstellen van de juiste lichaamsbalans, zodat de oorzaak van de sportblessure aangepakt wordt. Of het nu gaat om kniepijn, spierblessures of enkelklachten, mijn combinatie van natuurlijke bewegingen en lichte aanrakingen herstelt de juiste positie van je gewrichten. Dit heeft niet alleen een positief effect op je lichamelijke gezondheid, maar kan ook bijdragen aan een betere geestelijke gesteldheid."
    },
    whyChoose: {
      title: isEnglish ?
        "Why choose my sports injury treatment?" :
        "Waarom kiezen voor mijn sportblessurebehandeling?",
      benefits: isEnglish ? [
        "Quick and effective treatment of injuries such as knee pain, muscle injuries, and ankle complaints",
        "Personal attention and a treatment method focused on lasting results",
        "Natural techniques that help bring your body into balance",
        "Experience in treating persistent injuries such as hamstring injuries and overload"
      ] : [
        "Snelle en effectieve behandeling van blessures zoals kniepijn, spierblessures en enkelklachten",
        "Persoonlijke aandacht en een behandelmethode die gericht is op blijvend resultaat",
        "Natuurlijke technieken die helpen om je lichaam in balans te brengen",
        "Ervaring in het behandelen van hardnekkige blessures zoals hamstringblessures en overbelasting"
      ]
    },
    specializations: {
      title: isEnglish ? "My specializations" : "Mijn specialisaties",
      intro: isEnglish ? "I can treat the following injuries:" : "Ik ben in staat om de volgende blessures te behandelen:",
      injuries: {
        knee: {
          title: isEnglish ? "Knee Injuries:" : "Knieblessures:",
          description: isEnglish ?
            "From overload and tendonitis to torn meniscus, I help you move pain-free again." :
            "Van overbelasting en peesontstekingen tot gescheurde meniscus, ik help je om weer pijnvrij te bewegen."
        },
        ankle: {
          title: isEnglish ? "Ankle Injuries:" : "Enkelblessures:",
          description: isEnglish ?
            "Recovery from sprains, instability, and inflammation, so you can play sports stably again." :
            "Herstel van verzwikkingen, instabiliteit en ontstekingen, zodat je weer stabiel kunt sporten."
        },
        muscle: {
          title: isEnglish ? "Muscle Injuries:" : "Spierblessures:",
          description: isEnglish ?
            "From hamstring injuries to muscle knots and overload, I address not only the pain but also the cause." :
            "Van hamstringblessures tot spierknopen en overbelasting, ik pak niet alleen de pijn aan, maar ook de oorzaak."
        }
      }
    },
    treatment: {
      title: isEnglish ? "Treatment Process" : "Inhoud van het behandeltraject",
      description: isEnglish ?
        "My approach is focused on restoring proper movement and preventing future injuries. A session lasts about an hour, with the first two treatments taking place a few days apart to guarantee the best results. You'll notice relief after the first treatment. After the first two sessions, follow-up appointments take place to get your body more and more in line, these sessions occur after one, three, and six months." :
        "Mijn aanpak is gericht op het herstellen van de juiste beweging en het voorkomen van toekomstige blessures. Een sessie duurt ongeveer een uur, de eerste twee behandelingen vinden enkele dagen na elkaar plaats om het beste resultaat te garanderen. Je zult merken dat je na de eerste behandeling al verlichting ervaart. Na de eerste twee sessies vinden er vervolgafspraken plaats om jouw lichaam steeds meer in lijn te krijgen, deze sessies vinden na één, drie en zes maanden plaats."
    },
    finalCta: {
      title: isEnglish ? "Get moving again quickly" : "Kom snel weer in beweging",
      description: isEnglish ?
        "Do you want to treat your knee injury, muscle pain, or other injury without medication or injections? Don't wait any longer and make your appointment at Praktijk Tielo today, this can be done easily online. Of course, you're also welcome to contact me if you have questions, I'm happy to help. Discover how I can help you to play sports pain-free and enjoy a healthy body. Take the first step towards your recovery with Praktijk Tielo!" :
        "Wil jij jouw knieblessure, spierpijn of andere blessure behandelen zonder medicatie of injecties? Wacht niet langer en maak vandaag nog jouw afspraak bij Praktijk Tielo, dit kan eenvoudig online. Uiteraard ben je ook van harte welkom om contact op te nemen als je vragen hebt, ik sta je graag te woord. Ontdek hoe ik je kan helpen om pijnvrij te sporten en te genieten van een gezond lichaam. Zet de eerste stap naar jouw herstel met Praktijk Tielo!"
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/injury" : "/blessure"}
        keywords={[
          'knieblessure behandeling',
          'sportblessure utrecht',
          'kniepijn behandelen',
          'natuurlijke behandeling knie',
          'knieklachten',
          'sportblessures utrecht',
          'knieblessure herstel',
          'alternatieve behandeling knie'
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
                <a
                  href="#contact-form"
                  className="btn-cta bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-gray-200"
                >
                  <Calendar className="w-5 h-5" />
                  {content.hero.cta.schedule}
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1434973539530-5538b4681aac?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt={isEnglish ? "Knee injury treatment" : "Knieblessure behandeling"}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.balance.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.balance.description}
            </p>

            <div className="grid gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{content.whyChoose.title}</h3>
                <ul className="space-y-3">
                  {content.whyChoose.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">{content.specializations.title}</h3>
            <p className="text-gray-600 mb-6">{content.specializations.intro}</p>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">{content.specializations.injuries.knee.title}</h4>
                <p className="text-gray-600">
                  {content.specializations.injuries.knee.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">{content.specializations.injuries.ankle.title}</h4>
                <p className="text-gray-600">
                  {content.specializations.injuries.ankle.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">{content.specializations.injuries.muscle.title}</h4>
                <p className="text-gray-600">
                  {content.specializations.injuries.muscle.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{content.treatment.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.treatment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {kneeInjuryTestimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "What others say" : "Wat anderen zeggen"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {kneeInjuryTestimonials.map((testimonial, index) => (
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
              <a
                href="#contact-form"
                className="btn-cta bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                {content.hero.cta.schedule}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form">
        <Contact />
      </div>
    </>
  );
}