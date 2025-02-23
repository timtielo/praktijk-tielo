import React from 'react';
import { Activity, Moon, Droplets, HeartPulse } from 'lucide-react';

export function Symptoms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Herken je dit?</h2>
          <p className="text-gray-600">
            Veel van onze klanten komen bij ons met deze klachten. Herken jij je hierin?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <HeartPulse className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Niet lekker in je vel</h3>
            <p className="text-gray-600">
              Je voelt je niet energiek en komt maar niet in je normale ritme
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Moon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Slaapproblemen</h3>
            <p className="text-gray-600">
              Je ligt 's nachts te woelen en kan maar geen comfortabele houding vinden
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Activity className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pijntjes in je rug</h3>
            <p className="text-gray-600">
              Regelmatig last van rugpijn die je dagelijkse activiteiten beïnvloedt
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Droplets className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Vocht in onderbuik</h3>
            <p className="text-gray-600">
              Je merkt dat er vocht achterblijft in je onderbuik en dit voelt onprettig
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Deze klachten kunnen je dagelijks leven behoorlijk beïnvloeden. 
            <br />
            <span className="font-semibold text-gray-800">Wij helpen je graag om weer in balans te komen.</span>
          </p>
        </div>
      </div>
    </section>
  );
}