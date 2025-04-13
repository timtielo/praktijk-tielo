import React from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle, Phone, Calendar, Quote, Activity, Shield, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import { Contact } from '../../components/Contact';

// Filter relevant testimonials
const backPainTestimonials = testimonials.filter(t => 
  t.text.toLowerCase().includes('rug') || 
  t.text.toLowerCase().includes('back') ||
  t.text.toLowerCase().includes('pijn') ||
  t.text.toLowerCase().includes('pain')
);

export function BackPainTreatmentPage() {
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
        ? "Back Pain Treatment Utrecht | Praktijk Tielo"
        : "Rugpijn behandelen Utrecht | Praktijk Tielo",
      description: isEnglish
        ? "Looking for effective back pain treatment in Utrecht? Experience what our combination of natural movements and gentle treatment can do for your back pain. Schedule now!"
        : "Heb jij last van rugpijn en zoek je een effectieve behandeling in Utrecht? Ervaar wat mijn combinatie van natuurlijke bewegingen en rugpijnbehandeling kan doen!"
    },
    hero: {
      title: isEnglish
        ? "Relieve back pain with natural movements and treatment"
        : "Verhelp rugpijn met natuurlijke bewegingen en rugpijnbehandeling",
      description: isEnglish
        ? "Do you suffer from persistent back pain or stiffness in your lower back? Maybe you experience radiating pain to your legs or have difficulty sitting or standing for long periods. At Praktijk Tielo in Utrecht, you're at the right place for effective back pain treatment. This consists of natural movements combined with heat treatment and offers a natural, safe approach without medication. Read on to discover how I can help you achieve lasting results!"
        : "Heb jij last van aanhoudende rugpijn of stijfheid in je onderrug? Misschien ervaar je uitstralende pijn naar je benen of heb je moeite met lang zitten of staan. Bij Praktijk Tielo in Utrecht ben je aan het juiste adres voor een effectieve rugpijnbehandeling. Deze bestaat uit natuurlijke bewegingen in combinatie met een warmtebehandeling en biedt een natuurlijke, veilige aanpak zonder medicatie. Lees verder om te ontdekken hoe ik jou kan helpen met blijvend resultaat!"
    },
    whatIs: {
      title: isEnglish
        ? "What is back pain treatment and how can it help you?"
        : "Wat is rugpijnbehandeling en hoe kan het jou helpen?",
      description: isEnglish
        ? "Back pain can have various causes, such as muscle tension, poor posture, or a blockage in the spine. At Praktijk Tielo, I use targeted touch and mobilization techniques to correct your spine and address the underlying causes of back complaints. Whether you suffer from muscle pain in the lower back, persistent lower back pain, or reduced mobility, my treatments help you quickly get rid of your complaints."
        : "Rugpijn kan verschillende oorzaken hebben, zoals spierspanning, een verkeerde houding of een blokkade in de wervelkolom. Bij Praktijk Tielo gebruik ik gerichte aanrakings- en mobilisatietechnieken om jouw wervelkolom te corrigeren en de onderliggende oorzaken van rugklachten aan te pakken. Of je nu last hebt van spierpijn in de onderrug, blijvende onderrugpijn of een verminderde bewegingsvrijheid, mijn behandelingen helpen je snel van je klachten af."
    },
    benefits: {
      title: isEnglish
        ? "The benefits of my back pain treatment"
        : "De voordelen van mijn rugpijnbehandeling",
      items: isEnglish ? [
        "Noticeable effect after the first treatment.",
        "Gentle, safe treatment method without the use of medication.",
        "Personal self-help exercises for long-term recovery.",
        "Focused on addressing the cause of your back complaints, not just the symptoms."
      ] : [
        "Direct merkbaar effect na de eerste behandeling.",
        "Zachte, veilige behandelmethode zonder het gebruik van medicatie.",
        "Persoonlijke zelfhulpoefeningen voor langdurig herstel.",
        "Gericht op het verhelpen van de oorzaak van je rugklachten, niet alleen de symptomen."
      ]
    },
    approach: {
      title: isEnglish
        ? "My approach for long-term improvement"
        : "Mijn werkwijze voor langdurige verbetering",
      description: isEnglish
        ? "The treatment lasts about an hour, and for the best results, you plan two sessions in one week. During the treatment, your body is naturally aligned, which ensures that your blockages disappear and blood circulation improves. My natural approach focuses not only on relieving pain but also ensures a lasting effect, so that back complaints can be prevented in the future."
        : "De behandeling duurt ongeveer een uur, voor het beste resultaat plan je twee sessies in één week. Gedurende de behandeling wordt jouw lichaam op een natuurlijke manier uitgelijnd, dit zorgt ervoor dat jouw blokkades verdwijnen en de doorbloeding verbetert. Mijn natuurlijke benadering richt zich niet alleen op het verlichten van de pijn, maar zorgt ook voor een blijvend effect, zodat je rugklachten in de toekomst voorkomen kunnen worden."
    },
    finalCta: {
      title: isEnglish
        ? "Get rid of your back pain and improve your quality of life"
        : "Kom van je rugklachten af en verbeter je levenskwaliteit",
      description: isEnglish
        ? "Don't wait any longer to address your back complaints. At Praktijk Tielo, we work together on your recovery with care and attention. Make an appointment today and experience for yourself the difference that the combination of natural movements and back pain treatment can make. Do you have questions or comments? Feel free to contact me using the contact details at the bottom of this website. Give yourself the freedom of a pain-free back and improve your mobility."
        : "Wacht niet langer met het aanpakken van je rugklachten. Bij Praktijk Tielo werken we samen aan jouw herstel met zorg en aandacht. Maak vandaag nog een afspraak en ervaar zelf het verschil dat de combinatie van natuurlijke bewegingen en rugpijnbehandeling kan maken. Heb je vragen of opmerkingen? Neem dan gerust contact met me op via de contactgegevens onderaan deze website. Gun jezelf de vrijheid van een pijnvrije rug en verbeter je bewegingsvrijheid."
    },
    buttons: {
      schedule: isEnglish ? "Schedule appointment" : "Maak een afspraak",
      call: isEnglish ? "Call now" : "Bel direct",
      whatOthersSay: isEnglish ? "What others say" : "Wat anderen zeggen",
      benefits: {
        gentle: isEnglish ? "Gentle treatment method" : "Zachte behandelmethode",
        immediate: isEnglish ? "Immediate noticeable effect" : "Direct merkbaar effect",
        personal: isEnglish ? "Personal approach" : "Persoonlijke aanpak",
        lasting: isEnglish ? "Lasting results" : "Blijvend resultaat"
      }
    }
  };

  return (
    <>
      <SEO 
        titleKey={content.meta.title}
        descriptionKey={content.meta.description}
        canonicalPath={isEnglish ? "/en/back-pain" : "/rugpijn"}
        keywords={[
          'rugpijn behandeling',
          'rugklachten utrecht',
          'rugpijn verhelpen',
          'natuurlijke behandeling rug',
          'rugklachten',
          'onderrug pijn',
          'rugpijn therapie',
          'alternatieve behandeling rug'
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
                  {content.buttons.schedule}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>{content.buttons.benefits.gentle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span>{content.buttons.benefits.immediate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span>{content.buttons.benefits.personal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{content.buttons.benefits.lasting}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="/assets/photos/backpain.jpg"
                alt="Rugpijn behandeling"
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

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{content.benefits.title}</h3>
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

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.approach.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.approach.description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {backPainTestimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {content.buttons.whatOthersSay}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {backPainTestimonials.map((testimonial, index) => (
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
                    <p className="text-gray-700 pl-6">{testimonial.text}</p>
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
                {content.buttons.schedule}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </>
  );
}