import React from 'react';
import { SEO } from '../components/SEO';
import { businessInfo } from '../data/business';

export function DisclaimerPage() {
  return (
    <>
      <SEO 
        title="Disclaimer"
        description="Lees onze disclaimer voor belangrijke informatie over onze diensten en verantwoordelijkheden."
        canonicalPath="/disclaimer"
      />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Disclaimer – {businessInfo.name}</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Algemeen</h2>
              <p className="text-gray-600 mb-4">
                Deze website, www.praktijktielo.nl, en de diensten die {businessInfo.name} aanbiedt, zijn gericht op ontspanning en welzijn. De informatie op deze website is uitsluitend bedoeld voor informatieve doeleinden en mag niet worden opgevat als medisch advies, diagnose of behandeling. Door deze website te bezoeken en gebruik te maken van de diensten van {businessInfo.name}, stemt u in met de voorwaarden zoals hieronder beschreven.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Geen medische of therapeutische zorg</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>De behandelingen en diensten aangeboden door {businessInfo.name} zijn complementair en gericht op ontspanning en welzijn.</li>
                <li>Wij stellen geen medische diagnoses en behandelen geen medische aandoeningen.</li>
                <li>De behandelingen zijn geen vervanging voor medische of psychologische zorg. Indien u medische of psychische klachten heeft, raden wij u aan contact op te nemen met een gekwalificeerde arts of specialist.</li>
                <li>{businessInfo.name} kan niet aansprakelijk worden gesteld voor beslissingen die u neemt op basis van de aangeboden behandelingen of de informatie op deze website.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Resultaten en aansprakelijkheid</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>De resultaten van behandelingen variëren per persoon. {businessInfo.name} kan geen garantie geven over specifieke uitkomsten.</li>
                <li>Behandelingen zijn bedoeld als ondersteuning en ontspanning en niet als oplossing voor medische of psychische aandoeningen.</li>
                <li>{businessInfo.name} is niet aansprakelijk voor enige directe of indirecte schade die voortkomt uit het gebruik van onze diensten of informatie, tenzij sprake is van opzet of grove nalatigheid.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Privacy en gegevensbescherming</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{businessInfo.name} gaat zorgvuldig om met uw persoonsgegevens en houdt zich aan de Algemene Verordening Gegevensbescherming (AVG).</li>
                <li>De informatie die tijdens behandelingen wordt gedeeld, wordt vertrouwelijk behandeld en zal niet worden verstrekt aan derden zonder uw toestemming, tenzij wettelijk verplicht.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Verantwoordelijkheid van de cliënt</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>De cliënt is zelf verantwoordelijk voor het verstrekken van juiste en volledige informatie over hun gezondheidstoestand.</li>
                <li>De cliënt blijft altijd zelf verantwoordelijk voor het nemen van beslissingen omtrent hun gezondheid en welzijn.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Wijzigingen en aanpassingen</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{businessInfo.name} behoudt zich het recht voor om deze disclaimer en de inhoud van de website op elk moment te wijzigen zonder voorafgaande kennisgeving.</li>
                <li>Het is uw verantwoordelijkheid om regelmatig deze pagina te controleren op eventuele aanpassingen.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Toepasselijk recht en geschillen</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Op alle diensten en deze disclaimer is het Nederlands recht van toepassing.</li>
                <li>Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">
                Mocht u vragen hebben over deze disclaimer, neem dan contact met ons op via:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>📧 E-mail: {businessInfo.contact.email}</li>
                <li>📞 Telefoon: {businessInfo.contact.phone}</li>
                <li>🌍 Website: www.praktijktielo.nl</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}