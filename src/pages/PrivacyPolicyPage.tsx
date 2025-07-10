import React from 'react';
import { SEO } from '../components/SEO';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { businessInfo } from '../data/business';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Define keywords specific to the privacy policy page
  const privacyPageKeywords = [
    'praktijk tielo privacy',
    'privacybeleid',
    'privacy policy',
    'gegevensbescherming',
    'persoonsgegevens',
    'AVG',
    'GDPR',
    'privacy statement',
    'gegevensverwerking',
    'privacy rechten'
  ];
  
  return (
    <>
      <SEO 
        title={isEnglish ? "Privacy Policy | Praktijk Tielo" : "Privacybeleid | Praktijk Tielo"}
        description={isEnglish 
          ? "Read our privacy policy to understand how we collect, use, and protect your personal data at Praktijk Tielo."
          : "Lees ons privacybeleid om te begrijpen hoe we je persoonsgegevens verzamelen, gebruiken en beschermen bij Praktijk Tielo."}
        canonicalPath={isEnglish ? "/en/privacy-policy" : "/privacybeleid"}
        keywords={privacyPageKeywords}
      />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                {
                  label: isEnglish ? "Privacy Policy" : "Privacybeleid"
                }
              ]} 
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-8">
            {isEnglish ? "Privacy Policy Praktijk Tielo" : "Privacyverklaring Praktijk Tielo"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              {isEnglish ? "Last updated: July 10, 2025" : "Laatst bijgewerkt: 10 juli 2025"}
            </p>
            
            {isEnglish ? (
              // English version
              <>
                <p>
                  At Praktijk Tielo, we value the protection of your personal data. In this privacy statement, we explain what data we collect, why we collect it, and how we handle your data.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who are we?</h2>
                <p>
                  Praktijk Tielo<br />
                  Location: Utrecht<br />
                  Website: www.praktijk-tielo.nl<br />
                  Email address: {businessInfo.contact.email}<br />
                  Chamber of Commerce number: 87850893
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. What personal data do we process?</h2>
                <p>
                  We only process personal data that you provide to us, for example through the contact form, intake form, or when making an appointment. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>First and last name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Address (if needed for invoicing)</li>
                  <li>Health data (during treatment, with your explicit consent)</li>
                  <li>Payment details</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Why do we process this data?</h2>
                <p>
                  We process your data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To contact you and schedule appointments</li>
                  <li>For maintaining proper administration (invoicing and accounting)</li>
                  <li>For providing tailored care and keeping track of a treatment plan</li>
                  <li>To comply with legal obligations (such as the Medical Treatment Agreement Act, WGBO)</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. How long do we store your data?</h2>
                <p>
                  We do not store your data longer than necessary. Medical data is stored in accordance with the legal retention period of 20 years. Other data is stored for a maximum of 7 years due to fiscal retention obligations.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Do we share your data with third parties?</h2>
                <p>
                  We only share your data with third parties if strictly necessary, for example:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our accountant (only invoicing data)</li>
                  <li>Software suppliers that comply with the GDPR (such as the appointment or file system)</li>
                  <li>Healthcare providers with whom you explicitly consent to consultation or referral</li>
                </ul>
                <p>
                  We have processing agreements with these parties.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security</h2>
                <p>
                  We take appropriate technical and organizational measures to protect your data against loss or unauthorized access. This includes secure storage, encrypted connections (SSL), and access management.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the data we process about you</li>
                  <li>Have this data corrected or deleted</li>
                  <li>Withdraw your consent at any time</li>
                  <li>File a complaint with the Dutch Data Protection Authority via www.autoriteitpersoonsgegevens.nl</li>
                </ul>
                <p>
                  Want to exercise these rights? Please contact us via {businessInfo.contact.email}.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
                <p>
                  On our website, we only use functional and analytical cookies that do not infringe on your privacy. For more information, see our cookie policy.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
                <p>
                  Do you have questions about this privacy statement or about how we handle your data? Feel free to contact us via {businessInfo.contact.email}.
                </p>
              </>
            ) : (
              // Dutch version
              <>
                <p>
                  Bij Praktijk Tielo hechten wij veel waarde aan de bescherming van jouw persoonsgegevens. In deze privacyverklaring leggen we uit welke gegevens we verzamelen, waarom we dat doen, en hoe we met jouw gegevens omgaan.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Wie zijn wij?</h2>
                <p>
                  Praktijk Tielo<br />
                  Vestigingsplaats: Utrecht<br />
                  Website: www.praktijk-tielo.nl<br />
                  E-mailadres: {businessInfo.contact.email}<br />
                  KvK-nummer: 87850893
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Welke persoonsgegevens verwerken wij?</h2>
                <p>
                  Wij verwerken alleen persoonsgegevens die jij zelf aan ons verstrekt, bijvoorbeeld via het contactformulier, intakeformulier of bij het maken van een afspraak. Het gaat hierbij om:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Voor- en achternaam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer</li>
                  <li>Adres (indien nodig voor facturatie)</li>
                  <li>Gezondheidsgegevens (bij behandeling, met jouw expliciete toestemming)</li>
                  <li>Betalingsgegevens</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Waarom verwerken wij deze gegevens?</h2>
                <p>
                  Wij verwerken jouw gegevens voor de volgende doelen:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Om contact met je op te nemen en afspraken in te plannen</li>
                  <li>Voor het voeren van een correcte administratie (facturatie en boekhouding)</li>
                  <li>Voor het bieden van zorg op maat en het bijhouden van een behandeltraject</li>
                  <li>Om te voldoen aan wettelijke verplichtingen (zoals de Wet op de geneeskundige behandelingsovereenkomst, WGBO)</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Hoe lang bewaren wij jouw gegevens?</h2>
                <p>
                  Wij bewaren jouw gegevens niet langer dan noodzakelijk. Medische gegevens worden conform de wettelijke bewaartermijn van 20 jaar bewaard. Andere gegevens bewaren wij maximaal 7 jaar in verband met fiscale bewaarplicht.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Delen wij jouw gegevens met derden?</h2>
                <p>
                  Wij delen jouw gegevens alleen met derden als dat strikt noodzakelijk is, bijvoorbeeld:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Onze boekhouder (alleen facturatiegegevens)</li>
                  <li>Softwareleveranciers die voldoen aan de AVG (zoals het afspraken- of dossiersysteem)</li>
                  <li>Zorgverleners waarmee jij expliciet toestemming geeft voor overleg of doorverwijzing</li>
                </ul>
                <p>
                  Met deze partijen hebben wij verwerkersovereenkomsten gesloten.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Beveiliging</h2>
                <p>
                  Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen tegen verlies of ongeautoriseerde toegang. Denk aan beveiligde opslag, versleutelde verbindingen (SSL), en toegangsbeheer.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Jouw rechten</h2>
                <p>
                  Je hebt het recht om:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Inzage te krijgen in de gegevens die wij van je verwerken</li>
                  <li>Deze gegevens te laten corrigeren of verwijderen</li>
                  <li>Je toestemming op elk moment in te trekken</li>
                  <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens via www.autoriteitpersoonsgegevens.nl</li>
                </ul>
                <p>
                  Wil je gebruik maken van deze rechten? Neem dan contact met ons op via {businessInfo.contact.email}.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
                <p>
                  Op onze website gebruiken wij alleen functionele en analytische cookies die geen inbreuk maken op jouw privacy. Voor meer informatie, zie ons cookiebeleid.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Vragen?</h2>
                <p>
                  Heb je vragen over deze privacyverklaring of over hoe wij omgaan met jouw gegevens? Neem dan gerust contact op via {businessInfo.contact.email}.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}