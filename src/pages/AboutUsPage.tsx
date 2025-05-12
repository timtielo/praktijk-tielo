import React from 'react';
import { SEO } from '../components/SEO';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Award, Clock, Heart, CheckCircle, ArrowRight, Brain, Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/business';
import { Solution } from '../components/Solution';

export function AboutUsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
  // Define keywords specific to the about page
  const aboutPageKeywords = [
    'praktijk tielo',
    'tim tielkemeijer',
    'alternatieve geneeswijze',
    'holistische aanpak',
    'persoonlijke benadering',
    'gezondheidsbehandeling',
    'over ons',
    'missie',
    'visie',
    'gezondheidsfilosofie',
    'bindweefsel',
    'fascia'
  ];
  
  return (
    <>
      <SEO 
        titleKey="meta.aboutUs.title"
        descriptionKey="meta.aboutUs.description"
        canonicalPath={isEnglish ? "/en/about-us" : "/over-ons"}
        keywords={aboutPageKeywords}
      />
      
      {/* About Us Hero */}
      <section className="min-h-[400px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutUs.hero.title')}</h1>
            <p className="text-gray-600 text-xl mb-8">
              {t('aboutUs.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* About the Treatment Method */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isEnglish ? "Our Treatment Method: How It Works" : "Onze Behandelmethode: Hoe Het Werkt"}
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <Activity className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isEnglish 
                        ? "1. The body corrects itself... when it gets a signal" 
                        : "1. Het lichaam corrigeert zichzelf… als het een seintje krijgt"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "Our treatment uses gentle impulses, movements, and touches. These send a signal to the nervous system and muscles, causing the body to essentially say: \"Hey, this bone or joint isn't positioned correctly – I'm going to fix myself.\"" 
                        : "Onze behandeling maakt gebruik van zachte impulsen, bewegingen en aanrakingen. Deze geven een signaal aan het zenuwstelsel en de spieren, waardoor het lichaam als het ware zegt: \"Hé, dit bot of gewricht staat niet goed – ik ga mezelf herstellen.\""}
                    </p>
                    <div className="pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-600">
                        {isEnglish 
                          ? "This works because your body is self-regulating. Just like a thermostat that regulates heat, your body constantly tries to maintain balance. But when there's a misalignment (like a tilted pelvis), that 'thermostat' gets stuck. Our technique provides the right 'nudge' to return to that natural balance." 
                          : "Dit werkt omdat je lichaam zelfregulerend is. Net als een thermostaat die warmte regelt, probeert je lichaam constant de balans te bewaren. Maar als er een scheefstand is (zoals een gekanteld bekken), blijft die 'thermostaat' hangen. Onze techniek geeft het juiste 'zetje' om weer terug te gaan naar die natuurlijke balans."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <Heart className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isEnglish 
                        ? "2. Fascia (connective tissue) is malleable and sensitive" 
                        : "2. Fascia (bindweefsel) is kneedbaar en gevoelig"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "An important component of our treatment is the fasciae: connective tissue that envelops your muscles, bones, and organs. This tissue is elastic, intelligent, and responds to pressure and movement." 
                        : "Een belangrijk onderdeel van onze behandeling zijn de fasciae: dat is bindweefsel dat je spieren, botten en organen omhult. Dit weefsel is elastisch, intelligent en reageert op druk en beweging."}
                    </p>
                    <div className="pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-600">
                        {isEnglish 
                          ? "By applying light pressure to specific areas (e.g., hip, shoulder, jaw), the connective tissue relaxes, allowing bones and joints to slide back into their natural position." 
                          : "Door lichte druk uit te oefenen op specifieke plekken (bijv. heup, schouder, kaak), ontspant het bindweefsel, en kunnen botten en gewrichten terugschuiven naar hun natuurlijke positie."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <Activity className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isEnglish 
                        ? "3. Leg length difference is often NOT a real difference" 
                        : "3. Beenlengteverschil is vaak géén echt verschil"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "Many people have an apparent leg length difference because their pelvis is misaligned or a foot isn't functioning properly." 
                        : "Veel mensen hebben een ogenschijnlijk beenlengteverschil doordat hun bekken scheef staat of een voet niet goed functioneert."}
                    </p>
                    <div className="pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-600">
                        {isEnglish 
                          ? "During our treatment, this is corrected with a light mobilizing exercise. When the pelvis or foot is properly positioned, the leg length difference suddenly disappears and posture immediately becomes straighter." 
                          : "Tijdens onze behandeling wordt dit met een lichte mobiliserende oefening hersteld. Als het bekken of de voet goed staat, is het beenlengteverschil ineens weg en is de houding direct rechter."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <Brain className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isEnglish 
                        ? "4. Neurological effect: the brain receives new information" 
                        : "4. Neurologisch effect: de hersenen krijgen nieuwe informatie"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "By gently moving and correcting the body, the brain receives new input via nerves. This makes the brain understand: \"Oh, this is how the body should be positioned!\"" 
                        : "Door het lichaam zachtjes te bewegen en te corrigeren, krijgen de hersenen nieuwe input via zenuwen. Daardoor snapt het brein: \"O ja, zo hoort het lijf te staan!\""}
                    </p>
                    <div className="pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-600">
                        {isEnglish 
                          ? "As a result, old, crooked posture patterns are released, and the body returns to a natural, straight position. This effect is enhanced when you do the self-help exercises afterward and \"teach\" the body what the correct posture is." 
                          : "Hierdoor worden oude, scheve houdingspatronen losgelaten, en keert het lichaam terug naar een natuurlijke, rechte stand. Dit effect wordt versterkt als je erna zelfhulpoefeningen doet en het lichaam \"aanleert\" wat de juiste houding is."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full mt-1">
                    <Activity className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {isEnglish 
                        ? "5. Better energy flow through proper alignment" 
                        : "5. Betere energiestroom door juiste uitlijning"}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "When your body is properly aligned, energy flows better throughout your entire system. This is directly related to improved neural transmission and blood flow." 
                        : "Wanneer je lichaam goed is uitgelijnd, stroomt energie beter door je hele systeem. Dit heeft direct te maken met verbeterde zenuwgeleiding en bloedcirculatie."}
                    </p>
                    <div className="pl-4 border-l-4 border-blue-200 py-2">
                      <p className="text-gray-600">
                        {isEnglish 
                          ? "Misalignments in the spine can compress nerves and blood vessels, restricting the flow of vital energy and nutrients to organs and tissues. By correcting these misalignments, we remove these blockages, allowing your body's natural healing mechanisms to function optimally." 
                          : "Scheefstand in de wervelkolom kan zenuwen en bloedvaten samendrukken, waardoor de stroom van vitale energie en voedingsstoffen naar organen en weefsels wordt beperkt. Door deze scheefstand te corrigeren, verwijderen we deze blokkades, zodat je lichaam's natuurlijke genezingsmechanismen optimaal kunnen functioneren."}
                      </p>
                      <div className="mt-4">
                        <Link 
                          to={getLocalizedPath('/werveltherapie')} 
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                        >
                          {isEnglish 
                            ? "Learn more about our vertebral therapy" 
                            : "Lees meer over onze werveltherapie"}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Treatment Method Component */}
      <Solution />
      
      {/* About Tim */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('aboutUs.tim.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="bg-blue-600 rounded-lg p-1 rotate-2 shadow-xl">
                  <img 
                    src="/assets/photos/profielfotopraktijk.jpeg" 
                    alt="Tim Tielkemeijer"
                    className="rounded-lg w-full h-auto transform -rotate-2 transition-transform duration-300 hover:rotate-0"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.passion')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.experience')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{t('aboutUs.tim.credentials.personalExperience')}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6 text-gray-700">
                <p className="text-lg">{t('aboutUs.tim.paragraph1')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph2')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph3')}</p>
                <p className="text-lg">{t('aboutUs.tim.paragraph4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('aboutUs.cta.title')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('aboutUs.cta.subtitle')}
          </p>
          <Link 
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            {t('aboutUs.cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}