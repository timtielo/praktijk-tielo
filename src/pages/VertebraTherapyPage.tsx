import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Activity, Brain, Heart, ArrowRight, Loader2, CheckCircle, Mail, MessageSquare } from 'lucide-react';
import { CheckCircle as CheckIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Spine } from '../components/ui/icons';
import { businessInfo } from '../data/business';
import { submitContactForm, type ContactFormData } from '../utils/forms';

export function VertebraTherapyPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const currentLanguage = i18n.language;
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    form: 'vertebral-therapy',
    submittedAt: '',
    language: isEnglish ? 'en' : 'nl',
    newsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await submitContactForm({
        ...formData,
        submittedAt: new Date().toISOString()
      });

      setSubmitStatus(success ? 'success' : 'error');

      if (success) {
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          form: 'vertebral-therapy', 
          submittedAt: '',
          language: isEnglish ? 'en' : 'nl',
          newsletter: true
        });
        // Increased timeout for success message visibility
        setTimeout(() => setSubmitStatus('idle'), 8000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  return (
    <>
      <SEO 
        title={isEnglish ? "Vertebral Therapy | Dorn Method | Praktijk Tielo" : "Werveltherapie | Dorn Methode | Praktijk Tielo"}
        description={isEnglish 
          ? "Learn about our vertebral therapy based on the Dorn Method. Discover how specific vertebrae relate to physical and psychological issues and how we can help."
          : "Leer over onze werveltherapie gebaseerd op de Dorn Methode. Ontdek hoe specifieke wervels gerelateerd zijn aan fysieke en psychologische klachten en hoe wij kunnen helpen."}
        canonicalPath={isEnglish ? "/en/vertebral-therapy" : "/werveltherapie"}
        keywords={[
          'werveltherapie',
          'dorn methode',
          'wervelkolom behandeling',
          'rugklachten',
          'nekklachten',
          'vertebrale therapie',
          'ruggengraat',
          'wervelcorrectie'
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
            <h1 className="text-4xl font-bold mb-6">
              {isEnglish ? "Vertebral Therapy: The Dorn Method Approach" : "Werveltherapie: De Dorn Methode Benadering"}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {isEnglish 
                ? "At Praktijk Tielo, we incorporate principles from the Dorn Method in our vertebral therapy approach. This gentle technique focuses on correcting misalignments in the spine and joints, addressing both physical and psychological aspects of health."
                : "Bij Praktijk Tielo integreren we principes van de Dorn Methode in onze werveltherapie aanpak. Deze zachte techniek richt zich op het corrigeren van scheefstand in de wervelkolom en gewrichten, waarbij zowel fysieke als psychologische aspecten van gezondheid worden aangepakt."}
            </p>

            {/* Introduction Section */}
            <section className="mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                  {isEnglish ? "Vertebral Complaints According to the Dorn Method" : "Wervelklachten volgens de Dorn-methode"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {isEnglish 
                    ? "The Dorn Method, developed by Dieter Dorn in Germany in the 1970s, is a gentle manual therapy that focuses on correcting misalignments in the spine and joints. According to this method, displaced vertebrae can cause various physical and psychological complaints. The basic idea is that a misaligned vertebra can put pressure on the exiting nerve pathways, disrupting nerve conduction to associated organs or body parts. This can lead to reduced function of those organs, as well as decreased blood supply due to local pressure on surrounding structures such as muscles and blood vessels."
                    : "De Dorn-methode, ontwikkeld door Dieter Dorn in Duitsland in de jaren zeventig, is een zachte manuele therapie die zich richt op het corrigeren van scheefstanden in de wervelkolom en gewrichten. Volgens deze methode kunnen verschoven wervels verschillende lichamelijke en psychische klachten veroorzaken. De basisgedachte is dat een scheefstaande wervel druk kan uitoefenen op de uittredende zenuwbanen, waardoor de zenuwgeleiding naar bijbehorende organen of lichaamsdelen wordt verstoord. Dit kan leiden tot een verminderde functie van die organen, evenals een afname van de bloedtoevoer door lokale spanning op omliggende structuren zoals spieren en bloedvaten."}
                </p>
              </div>
            </section>

            {/* Vertebrae Chart Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                {isEnglish ? "The Vertebral Chart: Understanding the Connections" : "De Wervelkaart: De Verbindingen Begrijpen"}
              </h2>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <img 
                      src="/assets/photos/Dornmethodchart.jpg" 
                      alt={isEnglish ? "Dorn Method Vertebral Chart" : "Dorn Methode Wervelkaart"}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? "This chart illustrates how each section of the spine is connected to specific organs and body systems. When a vertebra is misaligned, it can affect the corresponding area shown on the chart."
                        : "Deze kaart illustreert hoe elk deel van de wervelkolom is verbonden met specifieke organen en lichaamssystemen. Wanneer een wervel niet goed is uitgelijnd, kan dit het corresponderende gebied op de kaart beïnvloeden."}
                    </p>
                    <p className="text-gray-700">
                      {isEnglish 
                        ? "By understanding these connections, we can identify which vertebrae need attention based on your symptoms, and conversely, we can predict which symptoms might improve when specific vertebrae are realigned."
                        : "Door deze verbindingen te begrijpen, kunnen we identificeren welke wervels aandacht nodig hebben op basis van je symptomen, en omgekeerd kunnen we voorspellen welke symptomen kunnen verbeteren wanneer specifieke wervels opnieuw worden uitgelijnd."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Complaints Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                {isEnglish ? "Common Complaints and Their Vertebral Connections" : "Veelvoorkomende klachten en bijbehorende wervelverbindingen"}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {isEnglish ? "Headaches and Migraines" : "Hoofdpijn en migraine"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isEnglish 
                      ? "Headaches and migraines are often linked to the first cervical vertebra (C1 - atlas) and the second cervical vertebra (C2 - axis). A misalignment here could affect blood flow to the head, leading to headaches, migraines, and dizziness. A blockage around the fourth thoracic vertebra (Th4) is also associated with unilateral tension headaches, possibly due to a connection with the gallbladder meridian."
                      : "Hoofdpijn en migraine worden vaak gelinkt aan de eerste nekwervel (C1 - atlas) en de tweede nekwervel (C2 - axis). Een verkeerde uitlijning hier zou de doorbloeding naar het hoofd kunnen beïnvloeden, wat tot hoofdpijn, migraine en duizeligheid kan leiden. Ook wordt een blokkade rond de vierde borstwervel (Th4) geassocieerd met eenzijdige spanningshoofdpijn, mogelijk vanwege een verbinding met de galblaasmeridiaan."}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {isEnglish ? "Skin Problems" : "Huidproblemen"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isEnglish 
                      ? "Skin problems such as eczema, acne, and psoriasis are associated with the eleventh thoracic vertebra (Th11), due to its influence on the nerves that run to the skin. The ninth thoracic vertebra (Th9) is also mentioned in relation to allergic skin reactions, such as hives and psoriasis, possibly through influence on the adrenal glands."
                      : "Huidproblemen zoals eczeem, acne en psoriasis worden in verband gebracht met de elfde borstwervel (Th11), vanwege de invloed op de zenuwen die naar de huid lopen. De negende borstwervel (Th9) wordt ook genoemd in relatie tot allergische huidreacties, zoals netelroos en psoriasis, mogelijk via invloed op de bijnieren."}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {isEnglish ? "Digestive Problems" : "Spijsverteringsproblemen"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isEnglish 
                      ? "Digestive complaints are often linked to the sixth and seventh thoracic vertebrae (Th6–Th7) for stomach and pancreatic problems. Intestinal complaints such as constipation or diarrhea are more often linked to the first and second lumbar vertebrae (L1–L2), which would influence the large intestine and abdominal organs."
                      : "Spijsverteringsklachten worden vaak gelinkt aan de zesde en zevende borstwervels (Th6–Th7) voor maag- en alvleesklierproblemen. Darmklachten zoals constipatie of diarree worden vaker gekoppeld aan de eerste en tweede lendenwervel (L1–L2), die invloed zouden hebben op de dikke darm en buikorganen."}
                  </p>
                </div>
              </div>
            </section>

            {/* Vertebrae Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                {isEnglish ? "Overview per Vertebra (C1 to Coccyx)" : "Overzicht per wervel (C1 t/m het staartbeen)"}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C1 – Atlas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Headache, migraine, high blood pressure, dizziness, fatigue."
                          : "Hoofdpijn, migraine, hoge bloeddruk, duizeligheid, vermoeidheid."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Lack of overview, difficulty letting go, spiritual unrest."
                          : "Gebrek aan overzicht, moeite met loslaten, spirituele onrust."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C2 – Axis</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Sinus problems, allergies, eye and ear problems."
                          : "Sinusproblemen, allergieën, oog- en oorproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Not wanting to see, no vision, inner resistance to truth."
                          : "Niet willen zien, geen visie, innerlijke weerstand tegen waarheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C3</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Tinnitus, facial pain, jaw problems, skin problems in the face."
                          : "Tinnitus, aangezichtspijn, kaakklachten, huidproblemen in het gezicht."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Difficulty listening, lack of self-confidence, feelings of guilt."
                          : "Moeite met luisteren, gebrek aan zelfvertrouwen, schuldgevoelens."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C4</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Nasal congestion, ear infections, hearing loss."
                          : "Neusverkoudheid, oorontstekingen, gehoorverlies."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Suppressed emotions, unexpressed grief."
                          : "Onderdrukte emoties, verdriet dat niet geuit wordt."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C5</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Sore throat, hoarseness, thyroid problems."
                          : "Keelpijn, heesheid, schildklierproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Difficulty communicating, not daring to speak the truth."
                          : "Moeite met communiceren, waarheid niet durven spreken."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C6</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Neck and shoulder complaints, tonsil problems."
                          : "Nek- en schouderklachten, amandelproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Overload, inability to let go of responsibility."
                          : "Overbelasting, verantwoordelijkheid niet kunnen loslaten."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">C7</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Thyroid problems, bursitis, shoulder and elbow pain."
                          : "Schildklierproblemen, slijmbeursontstekingen, schouder- en elleboogpijn."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Feeling suppressed, having no voice, emotional blockage."
                          : "Zich onderdrukt voelen, geen stem hebben, emotionele blokkade."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th1</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Shoulder, arm, and hand complaints, respiratory problems."
                          : "Schouder-, arm- en handklachten, ademhalingsproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Wanting to do everything yourself, not allowing help."
                          : "Alles zelf willen doen, geen hulp toelaten."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th2</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Heart palpitations, chest pain, heart rhythm disorders."
                          : "Hartkloppingen, pijn op de borst, hartritmestoornissen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Difficulty giving/receiving love, closing off the heart."
                          : "Moeite met liefde geven/ontvangen, hart afsluiten."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th3</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Respiratory problems, bronchitis, skin complaints on the chest."
                          : "Ademhalingsproblemen, bronchitis, huidklachten op de borst."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Not allowing yourself space, shortness of breath, inner inhibition."
                          : "Zichzelf geen ruimte gunnen, ademnood, innerlijke remming."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th4</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Gallbladder problems, unilateral headache, chest pain."
                          : "Galblaasproblemen, eenzijdige hoofdpijn, borstpijn."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Inner anger, bitterness, stubbornness."
                          : "Innerlijke woede, verbittering, koppigheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th5</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Liver problems, anemia, reduced resistance."
                          : "Leverproblemen, bloedarmoede, verminderde weerstand."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Worrying too much, old grief, emotional overload."
                          : "Te veel zorgen maken, oud verdriet, emotionele overbelasting."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th6</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Stomach problems, heartburn, sugar metabolism."
                          : "Maagproblemen, brandend maagzuur, suikerstofwisseling."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Swallowed frustration, emotional tension, addiction susceptibility."
                          : "Ingeslikte frustratie, emotionele spanning, verslavingsgevoeligheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th7</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Digestive disorders, gastritis, weakness."
                          : "Spijsverteringsstoornissen, gastritis, zwaktegevoel."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Difficulty enjoying, emotional blockage."
                          : "Moeite met genieten, emotionele blokkade."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th8</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Reduced resistance, blood problems, spleen problems."
                          : "Verminderde weerstand, bloedproblemen, miltproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Worrying, rigidity, lack of trust."
                          : "Piekeren, rigiditeit, gebrek aan vertrouwen."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th9</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Allergies, skin problems, hormonal imbalance."
                          : "Allergieën, huidproblemen, hormonale disbalans."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Suppressed aggression, judgment towards self/others."
                          : "Onderdrukte agressie, oordeel naar zichzelf/anderen."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th10</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Kidney problems, edema, chronic fatigue."
                          : "Nierproblemen, oedeem, chronische vermoeidheid."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Relationship problems, holding onto old patterns."
                          : "Relatieproblemen, vasthouden aan oude patronen."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th11</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Skin diseases such as eczema and psoriasis, urinary problems."
                          : "Huidziekten zoals eczeem en psoriasis, plasproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Contact problems, social anxiety, self-criticism."
                          : "Contactproblemen, sociale angst, zelfkritiek."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Th12</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Intestinal problems, infertility, lymphatic disturbance."
                          : "Darmproblemen, onvruchtbaarheid, lymfatische verstoring."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Fear of change, holding onto the past."
                          : "Angst voor verandering, vasthouden aan verleden."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">L1</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Constipation, diarrhea, groin problems."
                          : "Constipatie, diarree, liesproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Letting go problems, difficulty saying goodbye."
                          : "Loslaatproblemen, moeite met afscheid nemen."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">L2</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Abdominal cramps, appendix problems, varicose veins."
                          : "Buikkrampen, appendixproblemen, spataderen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Tension, panic, excessive stress."
                          : "Spanning, paniek, overmatige stress."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">L3</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Bladder problems, menstrual complaints, fertility problems."
                          : "Blaasproblemen, menstruatieklachten, vruchtbaarheidsproblemen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Sexual blockages, feelings of guilt, lack of security."
                          : "Seksuele blokkades, schuldgevoelens, gebrek aan geborgenheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">L4</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Lower back pain, prostate problems, sciatica."
                          : "Lage rugpijn, prostaatproblemen, ischias."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Financial insecurity, experiencing responsibility as a burden."
                          : "Financiële onzekerheid, verantwoordelijkheid als last ervaren."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">L5</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Poor circulation in legs, ankle and foot complaints."
                          : "Slechte doorbloeding in benen, enkel- en voetklachten."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Difficulty relaxing, wanting to maintain control, listlessness."
                          : "Moeite met ontspanning, controle willen houden, lustloosheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{isEnglish ? "Sacrum" : "Sacrum (Heiligbeen)"}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "SI joint pain, pelvic instability, radiation to legs."
                          : "SI-gewrichtspijn, bekkeninstabiliteit, uitstraling naar benen."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Carrying the burden of life, old grief, powerlessness."
                          : "Last van het leven dragen, oud verdriet, machteloosheid."}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{isEnglish ? "Coccyx" : "Coccyx (Staartbeen)"}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Physiological:" : "Fysiologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Pain when sitting, hemorrhoids, anal complaints."
                          : "Pijn bij zitten, aambeien, anusklachten."}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {isEnglish ? "Psychological:" : "Psychologisch:"}
                      </h4>
                      <p className="text-gray-700">
                        {isEnglish 
                          ? "Lack of basic safety, disconnection from the earth, inner restlessness."
                          : "Gebrek aan basisveiligheid, onverbondenheid met de aarde, innerlijke onrust."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-blue-600 text-white p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {isEnglish ? "Experience the Benefits of Vertebral Therapy" : "Ervaar de Voordelen van Werveltherapie"}
              </h2>
              <p className="text-lg mb-6">
                {isEnglish 
                  ? "Whether you're dealing with physical pain, emotional challenges, or simply want to optimize your health, our vertebral therapy approach can help. Contact us today to schedule an appointment."
                  : "Of je nu te maken hebt met fysieke pijn, emotionele uitdagingen, of gewoon je gezondheid wilt optimaliseren, onze werveltherapie aanpak kan helpen. Neem vandaag nog contact met ons op om een afspraak te maken."}
              </p>
              <Link 
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                {isEnglish ? "Schedule an Appointment" : "Maak een Afspraak"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="mb-16">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    {isEnglish ? "Have questions about vertebral therapy?" : "Heb je vragen over werveltherapie?"}
                  </h2>
                  <p className="text-gray-600">
                    {isEnglish 
                      ? "Fill in the form below and we'll get back to you within 24 hours" 
                      : "Vul het formulier hieronder in en we nemen binnen 24 uur contact met je op"}
                  </p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center animate-fade-in">
                    <div className="flex justify-center mb-6">
                      <div className="bg-green-100 rounded-full p-3">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-green-800 mb-4">
                      {isEnglish ? "Thank you!" : "Bedankt!"}
                    </h3>
                    <p className="text-xl text-green-700 mb-6">
                      {isEnglish 
                        ? "Your message has been sent successfully. We'll get back to you within 24 hours."
                        : "Je bericht is succesvol verzonden. We nemen binnen 24 uur contact met je op."}
                    </p>
                    <div className="bg-white text-green-800 px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-sm">
                      <CheckIcon className="w-5 h-5" />
                      <span className="font-semibold">
                        {isEnglish ? "Message sent successfully!" : "Bericht succesvol verzonden!"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isEnglish ? "Your name *" : "Je naam *"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                        placeholder={isEnglish ? "E.g., John Smith" : "Bijv. Jan Jansen"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isEnglish ? "Your email *" : "Je e-mail *"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                        placeholder={isEnglish ? "E.g., john@example.com" : "Bijv. jan@voorbeeld.nl"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isEnglish ? "Your phone number" : "Je telefoonnummer"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        disabled={isSubmitting}
                        placeholder={isEnglish ? "E.g., +31 6 12345678" : "Bijv. +31 6 12345678"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isEnglish ? "Your message *" : "Je bericht *"}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                        placeholder={isEnglish 
                          ? "Describe your symptoms or questions about vertebral therapy" 
                          : "Beschrijf je klachten of vragen over werveltherapie"}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-700">
                        {isEnglish ? "Subscribe to newsletter" : "Aanmelden voor nieuwsbrief"}
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-cta w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {isEnglish ? "Sending..." : "Versturen..."}
                        </>
                      ) : (
                        <>
                          {isEnglish ? "Send message" : "Verstuur bericht"} <MessageSquare className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border-2 border-red-200 text-red-700 p-6 rounded-lg text-center">
                        <p className="text-lg font-semibold mb-2">
                          {isEnglish ? "Something went wrong" : "Er is iets misgegaan"}
                        </p>
                        <p className="text-sm">
                          {isEnglish 
                            ? "Please try again or contact us directly."
                            : "Probeer het opnieuw of neem direct contact met ons op."}
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}