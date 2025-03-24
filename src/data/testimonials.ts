export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
  textEn?: string; // Optional English text
  id?: string; // Unique identifier
  date: string; // ISO date string
  shortText?: string; // Optional shortened version
  shortTextEn?: string; // Optional shortened English version
}

export const testimonials: Testimonial[] = [
  {
    id: "maimouna-1",
    name: "Maimouna",
    text: "Ik had behoorlijk last van kniepijn. Tim heeft me niet alleen daarmee geholpen, maar zijn behandeling heeft ook de rest van mijn lichaam ontspannen en hielp me beter en moeitelozer te bewegen. Zeker een aanrader!",
    textEn: "I had pretty bad knee pain. Tim not only helped me with that, but his practice also relaxed the rest of my body and helped me move better amd more effortlessly. Definitely recommend!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocKtMZOmFP0nxi3NjGVRJKW4O_0mxfDnxteVDGOBGj94yRupOA=s72-c-rp-mo-br100",
    date: "2025-03-17"
  },
  {
    id: "yone-1",
    name: "Yone",
    text: "Tim is zeer professioneel; hij weet hoe hij naar je moet luisteren en mogelijke onbalans in je lichaam kan identificeren. Op de eerste dag ontdekte hij dat ik een lichte scoliose had, wat mijn arts al had vastgesteld toen ik een kind was. Alle oefeningen hielpen me mijn mobiliteit en flexibiliteit te verbeteren, wat me uiteindelijk een gevoel van lichtheid gaf. De tweede sessie was ook gericht op mobiliteit, met een totale ontspanningsoefening erbij. Tot nu toe is het een geweldige ervaring geweest, en ik raad het iedereen aan. We zijn nog maar halverwege de behandeling, en ik kijk nu al uit naar mijn volgende sessie met hem!",
    textEn: "Tim is very professional; he knows how to listen to you and identify potential imbalances in your body. On the first day, he found I had mild scoliosis, which my doctor had already identified when I was a child. All the exercises helped me improve my mobility and flexibility, leaving me with a final feeling of lightness. The second session also focused on mobility, adding a total relaxation exercise. So far, it's been a great experience, and I recommend it to anyone. We're still halfway through the treatment, and I'm already looking forward to my next session with him!",
    shortText: "Tim is zeer professioneel; hij weet hoe hij naar je moet luisteren en mogelijke onbalans in je lichaam kan identificeren. Op de eerste dag ontdekte hij dat ik een lichte scoliose had (...) Tot nu toe is het een geweldige ervaring geweest, en ik raad het iedereen aan!",
    shortTextEn: "Tim is very professional; he knows how to listen to you and identify potential imbalances in your body. On the first day, he found I had mild scoliosis (...) So far, it's been a great experience, and I recommend it to anyone!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWoOgBZctWLG6tnzkwhn3GUqg3RDUSGmP50Mqw1t_1_KNSJVKHe=s72-c-rp-mo-ba2-br100",
    date: "2025-03-16"
  },
  {
    id: "symelle-1",
    name: "Symelle",
    text: "Ik ben naar praktijk Tielo toe gegaan voor mijn scoliose en andere klachten die ik had m.b.t. sporten. Het heeft me heel erg geholpen. Mijn rugklachten zijn een stuk minder, mijn houding is beter en andere klachten zijn ook verminderd!! Tim is ook erg vriendelijk en helpt je echt gericht op jouw klachten. Ik kom hier zeker terug:)",
    textEn: "I went to Tielo practice for my scoliosis and other complaints I had related to sports. It helped me a lot. My back problems are a lot less, my posture is better and other complaints have also reduced!! Tim is also very friendly and really helps you with your complaints. I will definitely come back here :)",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVdZF7fHLGIS8i0hV5YeUFmowuC7eGEQ7XwILY961CuEDCqT55O=w60-h60-p-rp-mo-br100",
    date: "2025-03-02"
  },
  {
    id: "karin-1",
    name: "Karin",
    text: "Enorm veel baat bij de behandeling door Tim. In 2x voel ik zoveel verbetering van mijn rug en heupen, sta ik rechterop en heb ik een diepere ademhaling. Daarnaast heeft hij ook onze hond Bako behandeld die wat mank liep en daarna niet meer. De oefeningen die ik heb ontvangen, kan ik nu zelf doen, maar ik kijk ook uit naar de volgende behandeling over een maand.",
    textEn: "Huge benefit from Tim's treatment. In 2x I feel so much improvement in my back and hips, I stand up straighter and I breathe deeper. He also treated our dog Bako, who was limping slightly and then stopped. I can now do the exercises I received myself, but I am also looking forward to the next treatment in a month.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVJuu9S6ioKB-8a1zEOmCvQZC7ALiLDQKOsUB--dyGFComy3rCg=s36-c-rp-mo-br100",
    date: "2025-03-10"
  },
  {
    id: "kuba-1",
    name: "Kuba",
    text: "Een zeer positief en behulpzaam persoon. De behandeling hielp me bij het verlichten van enkele sportblessures en had een ontspannend effect. Ik zou het aanraden aan mensen die op zoek zijn naar hulp bij herstel.",
    textEn: "A very positive and helpful person. The procedure helped me relieve some sports-related injuries and had a relaxing effect. I would recommend it to people looking for recovery aid.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUBPK_ycMzXCOtWWcjZVgsHXoyXF8pYjMhAVHX2wHLBeTd2aHOsyg=w60-h60-p-rp-mo-ba3-br100",
    date: "2025-03-10"
  },
  {
    id: "thijs-1",
    name: "Thijs",
    text: "Was echt top, ik heb geen last meer van mijn knie en enkel door Tim. Alle gewrichten zitten weer los en daardoor kost bewegen bijna geen energie meer. Ik kan iedereen aanraden om naar Tim te gaan.",
    textEn: "It was really great, I no longer have any problems with my knee and ankle thanks to Tim. All joints are loose again and therefore moving takes almost no energy. I can recommend everyone to go to Tim.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJGrhTmDSdGYh0dEAkNS7tGE7JEVFL5vYy0VxQiaMz0debENw=w60-h60-p-rp-mo-br100",
    date: "2025-03-01"
  },
  {
    id: "nane-1",
    name: "Nané",
    text: "De behandelingen zijn zeer ontspannend en comfortabel. Tim is zeer professioneel en kent de techniek goed. Absoluut aan te raden.",
    textEn: "The treatment sessions are very relaxing and comfortable. Tim is very professional and knows well the technique. Totally recommended.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVEtWoY9XrSHXj2ko4oiWilfHMdcKu1m5FMj8qOt34FCYEtox6-=w60-h60-p-rp-mo-br100",
    date: "2025-03-10"
  },
  {
    id: "eline-1",
    name: "Eline",
    text: "Tim is erg gespecialiseerd en weet wat hij doet. Ik had voor de behandelingen geen heftige blessures. Maar Tim heeft toch voor ontspanning en flexibiliteit in mijn lichaam gezorgd. Aanrader!",
    textEn: "Tim is very specialized and knows what he's doing. I didn't have any severe injuries before the treatments. But Tim still provided relaxation and flexibility in my body. Highly recommended!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWP_nQNOfuBXiP__GCQUapVUvtVLjjSXdMWtSeodI6BdjRjCXct=s36-c-rp-mo-br100",
    date: "2025-03-17"
  },
  {
    id: "lars-1",
    name: "Lars",
    text: "Vorige week heb ik mijn eerste twee behandelingen gehad bij Tim en deze bevielen mij erg goed. Tim stelt tijdens de behandeling regelmatig vragen over wat je voelt en legt steeds duidelijk uit wat hij aan het doen is. Ook geeft hij heldere instructies over wat je moet doen en begeleidt hij je daar goed bij.\n\nVoor de behandelingen had ik last van stijve gewrichten, vooral tijdens het sporten merkte ik dit goed. Na de eerste behandeling voelde ik al duidelijk verschil en na de tweede behandeling waren mijn gewrichten echt een stuk soepeler. Dit merkte ik meteen tijdens het sporten, alles voelde veel losser en lichter aan.\n\nWat ik heel bijzonder vond, is dat Tim ontdekte dat ik twee scheve wervels had. Deze bleken precies overeen te komen met andere lichamelijke klachten die ik had. Het was echt bijzonder om te merken dat Tim dit direct kon zien, zonder dat ik hem hier vooraf iets over had verteld. Na de behandelingen legde Tim goed uit hoe ik het herstelproces het beste kon ondersteunen. Twee dagen later checkte hij zelfs nog even hoe het ging, wat ik erg prettig vond.\nIk ben zeer tevreden over hoe Tim de behandelingen uitvoert en kijk nu al uit naar de volgende afspraak!",
    textEn: "Last week I had my first two treatments with Tim and I was very pleased with them. During the treatment, Tim regularly asks questions about what you feel and clearly explains what he is doing. He also gives clear instructions about what you need to do and guides you well.\n\nBefore the treatments, I had stiff joints, especially noticeable during sports. After the first treatment, I already felt a clear difference, and after the second treatment, my joints were much more flexible. I noticed this immediately during sports, everything felt much looser and lighter.\n\nWhat I found very special was that Tim discovered I had two crooked vertebrae. These turned out to exactly match other physical complaints I had. It was really remarkable that Tim could see this immediately, without me telling him anything about it beforehand. After the treatments, Tim explained well how I could best support the recovery process. Two days later, he even checked how I was doing, which I really appreciated.\nI am very satisfied with how Tim performs the treatments and am already looking forward to the next appointment!",
    shortText: "Vorige week mijn eerste twee behandelingen gehad bij Tim. Voor de behandelingen had ik last van stijve gewrichten. Na de eerste behandeling voelde ik al duidelijk verschil en na de tweede behandeling waren mijn gewrichten echt een stuk soepeler. Tim's aanpak is professioneel en persoonlijk!",
    shortTextEn: "Had my first two treatments with Tim last week. Before treatments, I had stiff joints. After the first treatment, I felt a clear difference, and after the second treatment, my joints were much more flexible. Tim's approach is professional and personal!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXJp2vlCJ63V4VbSNb1PUk_G9k7NyxVbFXchrx4k_n-pvUlqIELSQ=s36-c-rp-mo-br100",
    date: "2025-03-17"
  },
  {
    id: "gijs-1",
    name: "Gijs",
    text: "Fijne behandeling gehad bij Tim! Ik kijk nu al uit naar de volgende. Tim is erg relaxed en legt uit wat hij doet en helpt met specifieke problemen.",
    textEn: "Had a great treatment with Tim! Already looking forward to the next one. Tim is very relaxed and explains what he does and helps with specific problems.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJBI1SM-tqFuGiSts4loI4u0LwVTbaeRE5zfcomclAuM5b5AQ=s36-c-rp-mo-br100",
    date: "2025-03-20"
  },
  {
    id: "janou-1",
    name: "Janou",
    text: "Tim heeft niet alleen een professionele houding, maar ook een enorme hoeveelheid parate kennis over zijn behandeling. Zeer aangename sessies gehad met een verrassend goed resultaat.",
    textEn: "Tim not only has a professional attitude but also an enormous amount of ready knowledge about his treatment. Had very pleasant sessions with surprisingly good results.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJ6mOHk8C9txRlQnmd6xbUQ4ZR_RDNrREDuQ7cCK7FxgLHW8T4=s36-c-rp-mo-br100",
    date: "2025-03-21"
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
  text: testimonial.shortText || testimonial.text,
  textEn: testimonial.shortTextEn || testimonial.textEn || testimonial.text,
  id: testimonial.id
}));

// Add duplicates of real testimonials for the marquee to have a better flow
export const extendedTestimonialsShadcn = [...testimonialsShadcn, ...testimonialsShadcn];