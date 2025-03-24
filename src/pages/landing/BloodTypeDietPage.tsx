import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Droplet, ChevronRight, CheckCircle, Loader2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  bloodgroup: string;
  language: string;
}

export function BloodTypeDietPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    bloodgroup: '',
    language: isEnglish ? 'EN' : 'NL'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.eu2.make.com/ruxkp3raeiiuy8qgymewz4bfa4ipnqxk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form: 'bloodgroup',
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', bloodgroup: '', language: isEnglish ? 'EN' : 'NL' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('bloodtype-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    hero: {
      title: isEnglish 
        ? "Discover the Power of Blood Type-Based Nutrition"
        : "Ontdek de kracht van voeding op basis van jouw bloedgroep",
      subtitle1: isEnglish
        ? "Did you know that your blood type determines which foods and lifestyle choices suit you best? What's a superfood for one person can cause digestive problems, weight gain, or a weakened immune system in another."
        : "Wist je dat jouw bloedgroep bepaalt welke voeding en leefstijl het beste bij je past? Wat voor de één een superfood is, kan bij de ander zorgen voor spijsverteringsproblemen, gewichtstoename of een verzwakt immuunsysteem.",
      subtitle2: isEnglish
        ? "By eating according to your blood type, you support your body in the most natural way and feel fitter, more energetic, and healthier!"
        : "Door te eten volgens jouw bloedgroep ondersteun je je lichaam op de meest natuurlijke manier en voel je je fitter, energieker en gezonder!",
      cta: isEnglish
        ? "Receive Personal Nutrition Advice"
        : "Ontvang persoonlijk voedingsadvies"
    },
    whatIs: {
      title: isEnglish
        ? "What is the Blood Type Diet?"
        : "Wat is het bloedgroepdieet?",
      description: isEnglish
        ? "The blood type diet was developed by Dr. James D'Adamo and further refined by his son Dr. Peter D'Adamo. They discovered that different blood types react differently to food and lifestyle. This is because each blood type has specific characteristics in terms of digestion, immune system, and stress processing."
        : "Het bloedgroepdieet is ontwikkeld door dr. James D'Adamo en verder uitgewerkt door zijn zoon dr. Peter D'Adamo. Zij ontdekten dat verschillende bloedgroepen verschillend reageren op voeding en levensstijl. Dit komt doordat elke bloedgroep specifieke kenmerken heeft op het gebied van spijsvertering, immuunsysteem en stressverwerking.",
      bloodTypes: {
        O: {
          title: isEnglish ? "Blood Type O" : "Bloedgroep O",
          description: isEnglish
            ? "Thrives on a protein-rich diet with plenty of meat and fish, but has difficulty with grains and dairy."
            : "Gedijt op een eiwitrijk dieet met veel vlees en vis, maar heeft moeite met granen en zuivel."
        },
        A: {
          title: isEnglish ? "Blood Type A" : "Bloedgroep A",
          description: isEnglish
            ? "Feels best with a vegetarian diet and gentle exercise like yoga and meditation."
            : "Voelt zich het beste bij een vegetarisch dieet en lichte beweging zoals yoga en meditatie."
        },
        B: {
          title: isEnglish ? "Blood Type B" : "Bloedgroep B",
          description: isEnglish
            ? "Has a balanced diet with both animal and plant products and a flexible lifestyle."
            : "Heeft een gebalanceerd dieet met zowel dierlijke als plantaardige producten en een flexibele leefstijl."
        },
        AB: {
          title: isEnglish ? "Blood Type AB" : "Bloedgroep AB",
          description: isEnglish
            ? "Combines properties of A and B, but must avoid certain foods for optimal metabolism."
            : "Combineert eigenschappen van A en B, maar moet bepaalde voedingsmiddelen vermijden voor een optimale stofwisseling."
        }
      },
      cta: isEnglish
        ? "Discover which diet suits you"
        : "Ontdek welk dieet bij jou past"
    },
    problems: {
      title: isEnglish
        ? "What happens when you don't eat according to your blood type?"
        : "Wat gebeurt er als je niet volgens jouw bloedgroep eet?",
      intro: isEnglish
        ? "Many people experience health issues without knowing that their diet is the cause. Consuming foods that don't match your blood type can lead to:"
        : "Veel mensen ervaren gezondheidsklachten zonder te weten dat hun voeding de oorzaak is. Het consumeren van voedingsmiddelen die niet bij jouw bloedgroep passen, kan leiden tot:",
      issues: [
        {
          text: isEnglish
            ? "Digestive problems such as bloating, acid reflux, or fatigue after eating."
            : "Spijsverteringsproblemen zoals een opgeblazen gevoel, maagzuur of vermoeidheid na het eten."
        },
        {
          text: isEnglish
            ? "Weight gain or difficulty losing weight, even when eating healthy."
            : "Gewichtstoename of moeite met afvallen, zelfs als je gezond eet."
        },
        {
          text: isEnglish
            ? "A weakened immune system, making you more susceptible to infections and inflammation."
            : "Een verzwakt immuunsysteem, waardoor je vatbaarder bent voor infecties en ontstekingen."
        },
        {
          text: isEnglish
            ? "Hormonal imbalance and energy loss due to disturbed metabolism."
            : "Hormonale disbalans en energieverlies door een verstoorde stofwisseling."
        }
      ],
      cta: isEnglish
        ? "Prevent these issues"
        : "Voorkom deze klachten"
    },
    benefits: {
      title: isEnglish ? "Why follow this diet?" : "Waarom dit dieet volgen?",
      items: [
        {
          title: isEnglish ? "More energy" : "Meer energie",
          description: isEnglish
            ? "By eating foods that your body processes optimally, you feel more vital."
            : "Door voeding te eten die jouw lichaam optimaal verwerkt, voel je je vitaler."
        },
        {
          title: isEnglish ? "Better digestion" : "Betere spijsvertering",
          description: isEnglish
            ? "No bloating, stomach problems, or fatigue after eating."
            : "Geen opgeblazen gevoel, maagklachten of vermoeidheid na het eten."
        },
        {
          title: isEnglish ? "Weight management" : "Gewichtsbeheersing",
          description: isEnglish
            ? "Maintain a healthy weight without strict diets or yo-yo effect."
            : "Blijf op een gezond gewicht zonder strenge diëten of jojo-effect."
        },
        {
          title: isEnglish ? "Stronger immune system" : "Sterker immuunsysteem",
          description: isEnglish
            ? "Prevent inflammation and strengthen your natural defenses."
            : "Voorkom ontstekingen en versterk je natuurlijke afweer."
        },
        {
          title: isEnglish ? "Personalized lifestyle" : "Leefstijl op maat",
          description: isEnglish
            ? "Not just nutrition, but also exercise and stress management are tailored to your unique needs."
            : "Niet alleen voeding, maar ook beweging en stressmanagement zijn afgestemd op jouw unieke behoeften."
        }
      ],
      cta: isEnglish
        ? "Start a healthier lifestyle"
        : "Start met een gezondere leefstijl"
    },
    form: {
      title: isEnglish
        ? "Want to know which foods and lifestyle suit you best?"
        : "Wil jij weten welke voeding en leefstijl het beste bij jou past?",
      subtitle: isEnglish
        ? "Fill out the form, send us your blood type, and receive your personal nutrition and lifestyle advice directly in your inbox!"
        : "Vul het formulier in, stuur ons je bloedgroep en ontvang jouw persoonlijke voedings- en leefstijladvies direct in je inbox!",
      success: {
        title: isEnglish ? "Thank you!" : "Bedankt!",
        message: isEnglish
          ? "We will contact you soon with personal advice."
          : "We nemen zo snel mogelijk contact met je op met persoonlijk advies."
      },
      error: isEnglish
        ? "Something went wrong. Please try again later."
        : "Er is iets misgegaan. Probeer het later opnieuw.",
      fields: {
        name: isEnglish ? "Name *" : "Naam *",
        email: isEnglish ? "Email *" : "E-mail *",
        bloodgroup: isEnglish ? "Blood Type *" : "Bloedgroep *",
        select: isEnglish ? "Select your blood type" : "Selecteer je bloedgroep",
        unknown: isEnglish ? "I don't know my blood type" : "Ik weet mijn bloedgroep niet"
      },
      submit: isEnglish
        ? "Start eating and living according to what your body really needs!"
        : "Begin vandaag nog met eten en leven volgens wat jouw lichaam écht nodig heeft!",
      sending: isEnglish ? "Sending..." : "Versturen..."
    }
  };

  return (
    <>
      <SEO 
        titleKey={isEnglish ? "Blood Type Diet & Lifestyle | Personalized Nutrition Advice" : "Bloedgroepdieet & Lifestyle | Persoonlijk Voedingsadvies"}
        descriptionKey={isEnglish 
          ? "Discover how eating according to your blood type can improve your health. Based on Dr. D'Adamo's research. Get personalized nutrition advice!"
          : "Ontdek hoe eten volgens jouw bloedgroep je gezondheid kan verbeteren. Gebaseerd op onderzoek van Dr. D'Adamo. Krijg persoonlijk voedingsadvies!"}
        canonicalPath={isEnglish ? "/en/blood-type-diet" : "/bloedgroepen-dieet"}
        keywords={[
          'bloedgroepdieet',
          'voeding op maat',
          'persoonlijk voedingsadvies',
          'gezonde leefstijl',
          'natuurlijke gezondheid',
          'bloedgroep dieet',
          'voedingsadvies utrecht',
          'gezond eten'
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
                {content.hero.subtitle1}
              </p>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                {content.hero.subtitle2}
              </p>

              <button
                onClick={scrollToForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                {content.hero.cta}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1920&h=1080"
                alt={content.hero.title}
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Blood Type Diet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.whatIs.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.whatIs.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{content.whatIs.bloodTypes.O.title}</h3>
                <p className="text-gray-700">{content.whatIs.bloodTypes.O.description}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{content.whatIs.bloodTypes.A.title}</h3>
                <p className="text-gray-700">{content.whatIs.bloodTypes.A.description}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{content.whatIs.bloodTypes.B.title}</h3>
                <p className="text-gray-700">{content.whatIs.bloodTypes.B.description}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{content.whatIs.bloodTypes.AB.title}</h3>
                <p className="text-gray-700">{content.whatIs.bloodTypes.AB.description}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={scrollToForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {content.whatIs.cta}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.problems.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.problems.intro}
            </p>

            <div className="space-y-4">
              {content.problems.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{issue.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={scrollToForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {content.problems.cta}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.benefits.title}</h2>
            
            <div className="space-y-4">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={scrollToForm}
                className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {content.benefits.cta}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="bloodtype-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {content.form.title}
              </h2>
              <p className="text-xl text-gray-600">
                {content.form.subtitle}
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{content.form.success.title}</h3>
                <p className="text-green-700">
                  {content.form.success.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.fields.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.fields.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.fields.bloodgroup}
                  </label>
                  <select
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">{content.form.fields.select}</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                    <option value="unknown">{content.form.fields.unknown}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {content.form.sending}
                    </>
                  ) : (
                    <>
                      {content.form.submit}
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg text-center">
                    <p>{content.form.error}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}