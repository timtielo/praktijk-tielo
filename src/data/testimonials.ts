export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
  textEn?: string; // Optional English text
  id?: string; // Unique identifier
}

export const testimonials: Testimonial[] = [
  {
    id: "symelle-1",
    name: "Symelle",
    text: "Ik ben naar praktijk Tielo toe gegaan voor mijn scoliose en andere klachten die ik had m.b.t. sporten. Het heeft me heel erg geholpen. Mijn rugklachten zijn een stuk minder, mijn houding is beter en andere klachten zijn ook verminderd!! Tim is ook erg vriendelijk en helpt je echt gericht op jouw klachten. Ik kom hier zeker terug:)",
    textEn: "I went to Tielo practice for my scoliosis and other complaints I had related to sports. It helped me a lot. My back problems are a lot less, my posture is better and other complaints have also reduced!! Tim is also very friendly and really helps you with your complaints. I will definitely come back here :)",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVdZF7fHLGIS8i0hV5YeUFmowuC7eGEQ7XwILY961CuEDCqT55O=w60-h60-p-rp-mo-br100"
  },
  {
    id: "karin-1",
    name: "Karin",
    text: "Enorm veel baat bij de behandeling door Tim. In 2x voel ik zoveel verbetering van mijn rug en heupen, sta ik rechterop en heb ik een diepere ademhaling. Daarnaast heeft hij ook onze hond Bako behandeld die wat mank liep en daarna niet meer. De oefeningen die ik heb ontvangen, kan ik nu zelf doen, maar ik kijk ook uit naar de volgende behandeling over een maand.",
    textEn: "Huge benefit from Tim's treatment. In 2x I feel so much improvement in my back and hips, I stand up straighter and I breathe deeper. He also treated our dog Bako, who was limping slightly and then stopped. I can now do the exercises I received myself, but I am also looking forward to the next treatment in a month.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVJuu9S6ioKB-8a1zEOmCvQZC7ALiLDQKOsUB--dyGFComy3rCg=s36-c-rp-mo-br100"
  },
  {
    id: "kuba-1",
    name: "Kuba",
    text: "Een zeer positief en behulpzaam persoon. De behandeling hielp me bij het verlichten van enkele sportblessures en had een ontspannend effect. Ik zou het aanraden aan mensen die op zoek zijn naar hulp bij herstel.",
    textEn: "A very positive and helpful person. The procedure helped me relieve some sports-related injuries and had a relaxing effect. I would recommend it to people looking for recovery aid.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUBPK_ycMzXCOtWWcjZVgsHXoyXF8pYjMhAVHX2wHLBeTd2aHOsyg=w60-h60-p-rp-mo-ba3-br100"
  },
  {
    id: "thijs-1",
    name: "Thijs",
    text: "Was echt top, ik heb geen last meer van mijn knie en enkel door Tim. Alle gewrichten zitten weer los en daardoor kost bewegen bijna geen energie meer. Ik kan iedereen aanraden om naar Tim te gaan.",
    textEn: "It was really great, I no longer have any problems with my knee and ankle thanks to Tim. All joints are loose again and therefore moving takes almost no energy. I can recommend everyone to go to Tim.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJGrhTmDSdGYh0dEAkNS7tGE7JEVFL5vYy0VxQiaMz0debENw=w60-h60-p-rp-mo-br100"
  },
  {
    id: "nane-1",
    name: "Nané",
    text: "De behandelingen zijn zeer ontspannend en comfortabel. Tim is zeer professioneel en kent de techniek goed. Absoluut aan te raden.",
    textEn: "The treatment sessions are very relaxing and comfortable. Tim is very professional and knows well the technique. Totally recommended.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVEtWoY9XrSHXj2ko4oiWilfHMdcKu1m5FMj8qOt34FCYEtox6-=w60-h60-p-rp-mo-br100"
  }
];

// Format testimonials for the marquee component
export const testimonialsShadcn = testimonials.map(testimonial => ({
  author: {
    name: testimonial.name,
    handle: "Tevreden klant",
    avatar: testimonial.image,
    rating: testimonial.rating
  },
  text: testimonial.text,
  id: testimonial.id
}));

// Add duplicates of real testimonials for the marquee to have a better flow
export const extendedTestimonialsShadcn = [...testimonialsShadcn, ...testimonialsShadcn];