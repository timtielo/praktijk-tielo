import React from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Activity, Brain, Heart, ArrowRight, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function SolutionsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  const solutions = [
    {
      title: isEnglish ? "Back Pain Treatment" : "Rugpijn behandeling",
      description: isEnglish 
        ? "Natural treatment for back pain and lower back complaints. Quick results with a gentle approach."
        : "Natuurlijke behandeling voor rugpijn en lage rugklachten. Snel resultaat met een zachte aanpak.",
      icon: Activity,
      href: isEnglish ? "/en/back-pain-treatment" : "/rugpijn-en-lage-rugklachten",
      category: "physical"
    },
    {
      title: isEnglish ? "Alternative to Chiropractic" : "Alternatief voor chiropractor",
      description: isEnglish
        ? "Gentle spine treatment without cracking. Focus on fascia for lasting results."
        : "Zachte wervelkolom behandeling zonder kraken. Focus op fascie voor blijvend resultaat.",
      icon: Activity,
      href: isEnglish ? "/en/alternative-to-chiropractic" : "/alternatief-voor-chiropractor",
      category: "physical"
    },
    {
      title: isEnglish ? "Sports Injury Treatment" : "Sportblessures behandeling",
      description: isEnglish
        ? "Quick recovery from sports injuries. Natural treatment method without medication."
        : "Snel herstel van sportblessures. Natuurlijke behandelmethode zonder medicatie.",
      icon: Activity,
      href: isEnglish ? "/en/sports-injury-treatment" : "/sportblessures-behandeling",
      category: "physical"
    },
    {
      title: isEnglish ? "Knee Injuries" : "Knieblessures",
      description: isEnglish
        ? "Specialized treatment for knee injuries. Get back to pain-free movement quickly."
        : "Gespecialiseerde behandeling voor knieblessures. Kom snel weer pijnvrij in beweging.",
      icon: Activity,
      href: isEnglish ? "/en/injury" : "/blessure",
      category: "physical"
    },
    {
      title: isEnglish ? "Scoliosis Treatment" : "Scoliose behandeling",
      description: isEnglish
        ? "Gentle treatment for scoliosis without cracking. Natural approach for lasting results."
        : "Zachte behandeling voor scoliose zonder kraken. Natuurlijke aanpak voor blijvend resultaat.",
      icon: Activity,
      href: isEnglish ? "/en/scoliosis" : "/scoliose",
      category: "physical"
    },
    {
      title: isEnglish ? "Connective Tissue Treatment" : "Bindweefselbehandeling",
      description: isEnglish
        ? "Specialized treatment focusing on connective tissue. Effective for various complaints."
        : "Gespecialiseerde behandeling gericht op bindweefsel. Effectief bij diverse klachten.",
      icon: Activity,
      href: isEnglish ? "/en/connective-tissue-treatment" : "/bindweefselbehandeling",
      category: "physical"
    },
    {
      title: isEnglish ? "Relief Without Cracking" : "Verlichting zonder kraken",
      description: isEnglish
        ? "Natural back pain relief without cracking. Gentle treatment for lasting results."
        : "Natuurlijke verlichting van rugpijn zonder kraken. Zachte behandeling voor blijvend resultaat.",
      icon: Activity,
      href: isEnglish ? "/en/relief-without-cracking" : "/verlichting-zonder-kraken",
      category: "physical"
    },
    {
      title: isEnglish ? "Sleep Problems" : "Slaapproblemen",
      description: isEnglish 
        ? "Natural treatment for sleep problems. Improve your sleep quality without medication."
        : "Natuurlijke behandeling voor slaapproblemen. Verbeter je slaapkwaliteit zonder medicatie.",
      icon: Moon,
      href: isEnglish ? "/en/sleep-problems" : "/slaapproblemen",
      category: "physical"
    },
    {
      title: isEnglish ? "Migraine Treatment" : "Migraine behandeling",
      description: isEnglish
        ? "Natural treatment for migraine and headaches. Gentle approach without medication."
        : "Natuurlijke behandeling voor migraine en hoofdpijn. Zachte aanpak zonder medicatie.",
      icon: Brain,
      href: isEnglish ? "/en/migraine-treatment" : "/migraine-behandeling",
      category: "physical"
    },
    {
      title: isEnglish ? "Burnout & Stress" : "Burn-out & stress",
      description: isEnglish
        ? "Natural approach to burnout and stress. Body alignment and relaxation techniques."
        : "Natuurlijke aanpak van burn-out en stress. Lichaamsuitlijning en ontspanningstechnieken.",
      icon: Brain,
      href: isEnglish ? "/en/burnout-stress-treatment" : "/burnout-stress-behandeling",
      category: "mental"
    },
    {
      title: isEnglish ? "Blood Type Diet" : "Bloedgroepdieet",
      description: isEnglish
        ? "Personalized nutrition advice based on your blood type. Improve your health naturally."
        : "Persoonlijk voedingsadvies op basis van je bloedgroep. Verbeter je gezondheid op natuurlijke wijze.",
      icon: Heart,
      href: isEnglish ? "/en/blood-type-diet" : "/bloedgroepen-dieet",
      category: "lifestyle"
    }
  ];

  const categories = {
    physical: {
      title: isEnglish ? "Physical Complaints" : "Fysieke klachten",
      description: isEnglish
        ? "Treatment of physical complaints with a natural approach"
        : "Behandeling van fysieke klachten met een natuurlijke aanpak"
    },
    mental: {
      title: isEnglish ? "Mental Complaints" : "Mentale klachten",
      description: isEnglish
        ? "Support for mental complaints and stress-related issues"
        : "Ondersteuning bij mentale klachten en stressgerelateerde problemen"
    },
    lifestyle: {
      title: isEnglish ? "Lifestyle" : "Leefstijl",
      description: isEnglish
        ? "Advice and support for a healthy lifestyle"
        : "Advies en ondersteuning voor een gezonde leefstijl"
    }
  };

  return (
    <>
      <SEO 
        titleKey={isEnglish ? "Solutions | Praktijk Tielo" : "Oplossingen | Praktijk Tielo"}
        descriptionKey={isEnglish 
          ? "Discover our solutions for physical and mental complaints. Natural treatment methods with lasting results."
          : "Ontdek onze oplossingen voor fysieke en mentale klachten. Natuurlijke behandelmethoden met blijvend resultaat."}
        canonicalPath={isEnglish ? "/en/solutions" : "/oplossingen"}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                {
                  label: isEnglish ? "Solutions" : "Oplossingen"
                }
              ]} 
            />
          </div>

          <h1 className="text-4xl font-bold mb-6">
            {isEnglish ? "Our Solutions" : "Onze oplossingen"}
          </h1>

          <div className="space-y-16">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key}>
                <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutions
                    .filter(solution => solution.category === key)
                    .map((solution, index) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={index}
                          to={solution.href}
                          className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-600 transition-colors">
                              <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold">{solution.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{solution.description}</p>
                          <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                            <span>{isEnglish ? "Learn more" : "Lees meer"}</span>
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}