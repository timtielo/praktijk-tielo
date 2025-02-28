import React from 'react';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

export function ReviewsPage() {
  return (
    <>
      <SEO 
        title="Reviews - Wat onze klanten zeggen"
        description="Lees wat onze klanten zeggen over Praktijk Tielo. Echte ervaringen van tevreden klanten die geholpen zijn met hun klachten."
        canonicalPath="/reviews"
      />
      
      {/* Reviews Hero */}
      <section className="min-h-[300px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wat onze klanten zeggen</h1>
            <p className="text-gray-600 text-xl mb-8">
              Ontdek de ervaringen van mensen die we hebben geholpen met hun klachten.
            </p>
            <div className="flex justify-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Google Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Google Reviews</h2>
          <GoogleReviews 
            placeId="ChIJxxxxxxxxxxxxxxxxxx" 
            limit={6}
          />
        </div>

        {/* Call to action */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om je klachten aan te pakken?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Sluit je aan bij onze tevreden klanten en begin vandaag nog met je herstel. 
            We helpen je graag met een persoonlijke aanpak.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Maak een afspraak <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}