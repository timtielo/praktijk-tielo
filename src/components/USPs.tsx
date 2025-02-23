import React from 'react';
import { Timer, UserCheck, Calendar } from 'lucide-react';

export function USPs() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor Praktijk Tielo?</h2>
          <p className="text-gray-600">
            Wij bieden een unieke aanpak die zich richt op jouw persoonlijke situatie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Timer className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Snel en blijvend resultaat</h3>
            <p className="text-gray-600">
              Onze behandelmethode is erop gericht om niet alleen snelle verlichting te bieden, maar ook langdurige resultaten te behalen
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <UserCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Persoonlijke aanpak</h3>
            <p className="text-gray-600">
              We kijken naar jouw specifieke situatie en stellen een behandelplan op dat bij jou past
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Flexibele openingstijden</h3>
            <p className="text-gray-600">
              Ook 's avonds en in het weekend open op afspraak, zodat je altijd een moment vindt dat past
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}