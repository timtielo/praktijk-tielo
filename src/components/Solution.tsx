import React from 'react';
import { ChevronRight, Clock, Repeat, Heart, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Solution() {
  return (
    <section id="behandelmethode" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Onze behandelmethode</h2>
          <p className="text-gray-600">
            Bij Praktijk Tielo werken we met eenvoudige zelfhulpoefeningen die je lichaam helpen terug te keren naar zijn natuurlijke houding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hoe het werkt</h3>
              <p className="text-gray-600 mb-4">
                Natuurlijke bewegingen in combinatie met lichte aanrakingen op specifieke plaatsen maken het mogelijk dat de positie van heupen, wervelkolom, heiligbeen en stuitbeen waar nodig wordt gecorrigeerd.
              </p>
              <p className="text-gray-600">
                Het herstellen van de positie van de wervelkolom en andere gewrichten kan lichaamsfuncties op zowel lichamelijk als geestelijk gebied verbeteren.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Voor wie is het geschikt?</h3>
              <p className="text-gray-600 mb-4">
                Onze instructie is geschikt voor mensen met uiteenlopende klachten en kan voor jong en oud een groot verschil maken:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Lichamelijke pijnen</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Migraines</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Spierkrampen</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Depressie</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-400">
                <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">
                  Lees onze disclaimer
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Behandeltraject</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Eerste behandeling (60 min)</h4>
                    <p className="text-blue-100">
                      Uitlijnen van de wervelkolom, correctie van het heiligbeen en beenlengte verschil.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tweede behandeling (60 min)</h4>
                    <p className="text-blue-100">
                      Herhaling eerste behandeling plus warmtebehandeling voor betere doorbloeding en verankering.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vervolgtraject</h4>
                    <p className="text-blue-100">
                      Vervolgafspraken na 1, 3 en 6 maanden om je lichaam steeds meer in lijn te krijgen.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-blue-500">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <Euro className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tarieven</h4>
                      <p className="text-blue-100">
                        <span className="line-through">€130,-</span> <span className="font-bold">€100,-</span> per afspraak
                        <span className="block text-xs mt-1">Prijs geldig t/m april 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">Belangrijk om te weten</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>De eerste twee behandelingen vinden binnen enkele dagen na elkaar plaats.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Je krijgt zelfhulpoefeningen mee. Zo blijf je soepel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Na een val of ongeluk is het raadzaam om opnieuw twee instructies na elkaar te plannen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>De behandeling past ook uitstekend in een preventieve leefstijl.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
          >
            Begin je herstel nu <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}