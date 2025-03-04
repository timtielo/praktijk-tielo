/**
 * Generates structured data for a local business
 */
export function generateLocalBusinessSchema(businessInfo: any) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": businessInfo.name,
    "image": "https://www.praktijk-tielo.nl/assets/logos/praktijktielotransparent.svg",
    "url": "https://www.praktijk-tielo.nl",
    "telephone": businessInfo.contact.phone || "",
    "email": businessInfo.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.contact.address.street || "",
      "addressLocality": businessInfo.contact.address.city,
      "postalCode": businessInfo.contact.address.postalCode || "",
      "addressCountry": "NL"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      businessInfo.socialMedia.facebook,
      businessInfo.socialMedia.instagram,
      businessInfo.socialMedia.linkedin
    ],
    // Added for AI discoverability
    "knowsAbout": [
      "Physical health treatment",
      "Mental health treatment",
      "Alternative health",
      "Holistic approach",
      "Self-help exercises",
      "Spine alignment",
      "Joint pain",
      "Back pain",
      "Depression",
      "Migraines"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Health Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "First Treatment",
            "description": "Alignment of the spine, correction of the sacrum and leg length difference.",
            "offers": {
              "@type": "Offer",
              "price": "100.00",
              "priceCurrency": "EUR"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Follow-up Treatment",
            "description": "Follow-up appointments to get your body more and more in line.",
            "offers": {
              "@type": "Offer",
              "price": "100.00",
              "priceCurrency": "EUR"
            }
          }
        }
      ]
    }
  };

  return JSON.stringify(schema);
}

/**
 * Generates structured data for a service
 */
export function generateServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Physical and Mental Health Treatment",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "name": "Praktijk Tielo"
    },
    "serviceType": "Alternative Health Treatment",
    "description": "Natural treatment method for physical and mental complaints using gentle techniques and self-help exercises.",
    "offers": {
      "@type": "Offer",
      "price": "100.00",
      "priceCurrency": "EUR"
    },
    // Added for AI discoverability
    "serviceOutput": {
      "@type": "Thing",
      "name": "Improved physical and mental wellbeing"
    },
    "termsOfService": "https://www.praktijk-tielo.nl/disclaimer"
  };

  return JSON.stringify(schema);
}

/**
 * Generates structured data for FAQs
 */
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return JSON.stringify(schema);
}

/**
 * Generates structured data specifically for AI assistants
 */
export function generateAIAssistantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Praktijk Tielo",
    "url": "https://www.praktijk-tielo.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.praktijk-tielo.nl/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "description": "Praktijk Tielo offers alternative health treatments for physical and mental complaints using gentle techniques and self-help exercises.",
    "keywords": [
      "physical health",
      "mental health",
      "alternative treatment",
      "holistic approach",
      "spine alignment",
      "back pain",
      "joint pain",
      "depression",
      "migraines",
      "self-help exercises"
    ],
    "inLanguage": ["nl", "en"]
  };

  return JSON.stringify(schema);
}