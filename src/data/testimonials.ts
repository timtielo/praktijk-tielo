import React from 'react';

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
  },
  {
    id: "bo-1",
    name: "Bo",
    text: "Intressante alternatieve geneesmanier!, ik was eerst nogal skeptisch maar merkte na de eerste behandeling al verandering. Tim zelf was ook erg duidelijk met de oefeningen en legde alles goed uit. Als je nog nooit van PIDDDS hebt gehoord raad ik het zeker aan om eens te proberen bij Tim",
    textEn: "Interesting alternative medicine method! I was quite skeptical at first but noticed a change after the first treatment. Tim himself was also very clear with the exercises and explained everything well. If you've never heard of PIDDDS, I definitely recommend trying it with Tim",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUxfPj74kaLXZPprEubeQsLDZTQeQFve8BsYan0PXh_K9ZDmMKi=s36-c-rp-mo-br100",
    date: "2025-03-25"
  },
  {
    id: "guust-1",
    name: "Guust",
    text: "Had direct na de behandeling een betere houding en postuur. Enorme aanrader!",
    textEn: "Had better posture and posture immediately after the treatment. Highly recommended!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJ1uYsBTvEbewzSXTebBgfbBwA04UvbPGlxcW37ZdrDf04QJw=w60-h60-p-rp-mo-br100",
    date: "2025-04-08"
  },
  {
    id: "victor-1",
    name: "Victor",
    text: "Tim is ontzettend vriendelijk en kundig in z'n vak. Bij andere zorgprofessionals hangt vaak een ongemakkelijke, klinische sfeer. Tim maakt er een punt van om je meteen op je gemak te laten voelen. Hij communiceert duidelijk wat hij doet en zorgt voor een ongedwongen sfeer. Ik kan het iedereen aanraden eens een bezoekje te brengen!",
    textEn: "Tim is extremely friendly and knowledgeable in his field. Other healthcare professionals often have an uncomfortable, clinical atmosphere. Tim makes it a point to make you feel comfortable right away. He communicates clearly what he does and creates a relaxed atmosphere. I can recommend it to everyone to pay a visit!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVz-lG6Qyf2YVl_vKWek9otfGvoq2-1prYUIKKgM2gBzxwifbV6=w60-h60-p-rp-mo-br100",
    date: "2025-04-07"
  },
  {
    id: "sander-1",
    name: "Sander",
    text: "Tim is een toffe gast, super fijne behandeling. Helemaal Zen naderhand. Heb er erg veel baat bij gehad. Ik zou het iedereen aanraden!",
    textEn: "Tim is a great guy, super nice treatment. Completely Zen afterwards. I have benefited a lot from it. I would recommend it to everyone!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXJmGoxhy4lEoEhZl9ymVI2YIbDf342NO5-UictrUZcNrfPTd2r=w60-h60-p-rp-mo-br100",
    date: "2025-04-04"
  },
  {
    id: "job-1",
    name: "Job",
    text: "Ik dacht zelf geen specifieke klachten te hebben maar wilde eens kennis maken met PIDDDS. Tijdens de behandeling werd duidelijk dat mijn ruggenwervel scheef zat. Door middel van lichte en aangename bewegingen heeft Tim ervoor gezorgd dat deze weer in zijn natuurlijke positie kwam.",
    textEn: "I didn't think I had any specific complaints myself, but I wanted to get acquainted with PIDDDS. During the treatment it became clear that my spine was crooked. By means of light and pleasant movements, Tim ensured that it returned to its natural position.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIvsdIw73CsoHr8bkJSrgGkhocctzzgXHCUyQlSfTGzUo7KNA=w60-h60-p-rp-mo-br100",
    date: "2025-04-05"
  },
  {
    id: "britt-1",
    name: "Britt",
    text: "Erg prettige behandeling met een fijn resultaat. Je merkt echt verschil!",
    textEn: "Very pleasant treatment with a great result. You really notice a difference!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIvsdIw73CsoHr8bkJSrgGkhocctzzgXHCUyQlSfTGzUo7KNA=w60-h60-p-rp-mo-br100",
    date: "2025-04-05"
  },
  {
    id: "rene-1",
    name: "René",
    text: "Op zijn eigen rustige wijze heeft Tim mij behandeld. Flexibiliteit in gewrichten vergroot waar mijn linker enkel weer meer beweegbaar is geworden.",
    textEn: "Tim treated me in his own calm way. Increased flexibility in joints where my left ankle has become more mobile again.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVsfJlH5MA8KAT_gcwZNKQjk9RgQhpw7IvR-36fu8wNH-MX2ygMzw=s36-c-rp-mo-br100",
    date: "2025-03-25"
  },
  {
    id: "rosalie-1",
    name: "Rosalie",
    text: "Twee behandelingen van Tim gehad samen met mijn vriend. Deze twee behandelingen heb ik als zeer goed ervaren, ik had last van mijn nek en rug en merkte na de behandelingen een verschil in hoe ik stond (meer rechtop) en ook een groot verschil in soepelheid van je gewrichten. Vind dit zeker een aanrader mocht je van iets dergelijks last hebben.",
    textEn: "Had two treatments from Tim together with my boyfriend. I experienced these two treatments as very good, I had problems with my neck and back and noticed a difference in how I stood (more upright) after the treatments and also a big difference in flexibility of your joints. I definitely recommend this if you suffer from something similar.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIfhqgTpYXU4hdO4WWcZDMxpWSWiu8AjR0znufe5XIXpYrdFw=s36-c-rp-mo-br100",
    date: "2025-04-10"
  },
  {
    id: "joost-1",
    name: "Joost",
    text: "2 prettige behandelingen gehad bij Tim. Allereerst mijn complimenten naar Tim, over zijn gastvrijheid, vriendelijkheid en vooral kennis. Hij heeft een rustige stem en legt alles fijn uit. Ook leuk om te horen wat zijn behandelingen allemaal wel niet hebben gedaan bij anderen! Ik heb de behandelingen duidelijk en goed ervaren. Ik merkte erg verschil tussen voor en na de behandeling. Een stuk meer flexibel en leniger. Ook kwam ik door de behandeling er achter dat mijn heupen niet recht staan. Oepsie hahaha. Nu weet ik wel waar mijn pijn tijdens het hardlopen van komt en hoe ik dit kan gaan aanpakken. Ook merk ik al een groot verschil na de behandelingen van Tim. Een grote aanrader!",
    textEn: "I had two pleasant treatments with Tim. First of all, my compliments to Tim for his hospitality, friendliness, and especially his expertise. He has a calm voice and explains everything clearly and thoroughly. It was also interesting to hear what his treatments have done for others! I experienced the treatments as clear and effective. I noticed a big difference before and after the sessions—feeling much more flexible and limber. During the treatment, I also discovered that my hips are misaligned. Oops, haha. At least now I know where the pain during running is coming from and how to start addressing it. I already notice a significant improvement after Tim's treatments. Highly recommended!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocLtfvMnev1UFG5_HNLJn-yk8jrSU7L8kBTT0j7LwfGap--Tlw=s36-c-rp-mo-br100",
    date: "2025-04-10"
  },
  {
    id: "floor-1",
    name: "Floor",
    text: "Ik had al lange tijd last van pijn en spanning in de schouders, nek en kaakregio. Na de behandeling heb ik duidelijk minder last! Tim creëert een gezellige sfeer waardoor ik de behandeling zelf als erg prettig ervaren heb. Hij heeft ook een simpele oefening voor thuis meegegeven. De eerste dag na de behandeling wel wat pijntjes, maar sindsdien heb ik merkbaar minder spanning!",
    textEn: "I had been suffering from pain and tension in the shoulders, neck and jaw region for a long time. After the treatment I have clearly less trouble! Tim creates a pleasant atmosphere which made me experience the treatment itself as very pleasant. He also gave a simple exercise for at home. The first day after the treatment some pain, but since then I have noticeably less tension!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocLqkbWKqB3qllNBcqpG_CG013qhyBhAykvjzA5pqEx7sKEdLw=s36-c-rp-mo-br100",
    date: "2025-03-11"
  },
  {
    id: "mason-1",
    name: "Mason",
    text: "De sessies bij Tim waren heel prettig. Hij neemt echt de tijd om te luisteren en voelt goed aan wat je nodig hebt. Ik voelde me na afloop enorm ontspannen!",
    textEn: "The sessions with Tim were very pleasant. He really takes the time to listen and has a good sense of what you need. I felt extremely relaxed afterwards!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJ8cfxWSnTztU_g63_t8S6i0qyKS77-FlYCKntvnQ4sHWNFHw=s36-c-rp-mo-br100",
    date: "2025-04-17"
  },
  {
    id: "jorn-1",
    name: "Jorn",
    text: "Ik heb zonder specifieke klachten twee behandelingen bij Tim gehad. Ik was vooraf niet bekend met de methode, maar toch heeft het mij geholpen! Tim ontdekte dat er een aantal ruggenwervels van mij scheef stonden. Dit heeft hij met zijn behandeling weer recht kunnen zetten. Verder zijn mijn schouderbladen in een natuurlijkere positie komen te staan. Al met al een aanrader, ook als je niet-specifieke klachten hebt!",
    textEn: "I had two treatments with Tim without specific complaints. I wasn't familiar with the method beforehand, but it still helped me! Tim discovered that some of my vertebrae were crooked. He was able to correct this with his treatment. Furthermore, my shoulder blades have come into a more natural position. All in all, highly recommended, even if you have non-specific complaints!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVsfJlH5MA8KAT_gcwZNKQjk9RgQhpw7IvR-36fu8wNH-MX2ygMzw=s36-c-rp-mo-br100",
    date: "2025-04-17"
  },
  {
    id: "joep-1",
    name: "Joep",
    text: "Mijn behandeling bij Tim heb ik zeer goed ervaren. Tim is vriendelijk en er hangt een fijne sfeer. Na de behandeling kon ik weer een volledige rotatie maken! Daarnaast voelde mijn gewrichten lichter en soepeler.",
    textEn: "I had a very good experience with my treatment at Tim's. Tim is friendly and there's a pleasant atmosphere. After the treatment, I could make a full rotation again! Additionally, my joints felt lighter and more flexible.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIA0E8wWKFSg7GkT4ahDXrcClsGJL2R0FOCB-4VCXg9xZ6CPQ=s36-c-rp-mo-br100",
    date: "2025-04-20"
  },
  {
    id: "delphin-1",
    name: "Delphin",
    text: "Voor de behandeling veel last van mijn rug, maar tijdens de behandelingen werd dat steeds minder. Tim heeft verstand van zaken, en maakt de behandeling op maat naar je lichaam. Na de behandeling nog nooit zo ontspannen geweest, was erg fijn. Tijdens de behandeling leuke gesprekken gehad, en er hing een goede sfeer in de praktijk. Zeker aan te raden!",
    textEn: "Before the treatment, I had a lot of back pain, but during the treatments it gradually decreased. Tim is knowledgeable and customizes the treatment to your body. After the treatment, I've never been so relaxed, it was very pleasant. Had nice conversations during the treatment, and there was a good atmosphere in the practice. Definitely recommended!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocKJP_yTtirO1RWcfEcMxOHGsY6BpRnYUU1ijtbPCuNQsILhqsE=s36-c-rp-mo-br100",
    date: "2025-04-23"
  },
  {
    id: "coen-1",
    name: "Coen",
    text: "Enorm fijne ervaring! In tegenstelling tot veel andere behandelingen die ik wel eens gehad heb merkte ik echt dat er iets gebeurd is. Verder was Tim zeer vriendelijk en open. We hebben dan ook hard gelachen! Zeker aanrader ;)",
    textEn: "Extremely pleasant experience! Unlike many other treatments I've had, I really noticed that something happened. Furthermore, Tim was very friendly and open. We also laughed a lot! Definitely recommended ;)",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUk5Jm4uNM0DhfIDcrQNsw76TKfokmowDEt6RxuIE92LcS0CACS=s36-c-rp-mo-br100",
    date: "2025-04-30"
  },
  {
    id: "ilse-1",
    name: "Ilse",
    text: "Hele fijne behandelingen! Heeft me erg geholpen en ik vond het heel interessant om te horen wat hij allemaal kon vinden bij mijn lichaam. Ik zou het zeker aanraden!",
    textEn: "Very pleasant treatments! It helped me a lot and I found it very interesting to hear what he could find in my body. I would definitely recommend it!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocLqkbWKqB3qllNBcqpG_CG013qhyBhAykvjzA5pqEx7sKEdLw=s36-c-rp-mo-br100",
    date: "2025-05-05"
  },
  {
    id: "joost-2",
    name: "Joost",
    text: "Ik werd gewezen op de praktijk door mijn zoon en ik kan Tim van harte aanraden. Vanaf het begin hebben zijn adviezen en behandeling een zeer positieve invloed gehad. Ik beweeg weer een stuk makkelijker en sta ook veel stabieler. Hartstikke bedankt.",
    textEn: "I was referred to the practice by my son and I can highly recommend Tim. From the beginning, his advice and treatment have had a very positive influence. I move much more easily again and stand much more stable. Thank you very much.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWR_3xz1DaaOrpauE2XOZPMIGTnkUWCyA2IcyEHgYK6X7Ci1FTl=s72-c-rp-mo-br100",
    date: "2025-05-11"
  },
  {
    id: "jessica-1",
    name: "Jessica",
    text: "Tim heeft een rustige aanpak en informeert je tijdens de behandeling goed wat hij gaat doen. De behandeling heeft mij zeker geholpen.",
    textEn: "Tim has a calm approach and informs you well during the treatment about what he is going to do. The treatment has definitely helped me.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJpNTFAutMg2ymBeR9GjUSv3_i7ica_q5JmmPQJhu53pHL0uQ=s72-c-rp-mo-br100",
    date: "2025-05-10"
  },
  {
    id: "cynthia-1",
    name: "Cynthia",
    text: "Tijdje terug 2 behandelingen gehad bij Tim. Goede communicatie vooraf en vragen kunnen stellen. Tim had al snel door waar ik last van had aan de hand van de wervels (wat dus overeen kwam met de lichamelijke/ mentale klachten die ik ervaarde), legde alles goed uit en ging aan de slag met oefeningen/ bewegingen en aanrakingen. Na de 1e behandeling merkte ik al dat ik losser was, minder scheef stond qua heupen, meer ontspannen was en sliep ik beter. De 2e behandeling was wat anders in opzet en ook toen merkte ik dat er veel gebeurde in mijn lijf en spieren (soort spierpijn). Ik heb de behandelingen dan ook als positief ervaren. 😀 Verder is Tim erg professioneel, communicatief en relaxed. Hij kan je ondanks de soms gekke bewegingen/ oefeningen goed op je gemak stellen en bovenal: het helpt!",
    textEn: "A while back I had 2 treatments with Tim. Good communication beforehand and able to ask questions. Tim quickly figured out what was bothering me based on the vertebrae (which matched the physical/mental complaints I was experiencing), explained everything well, and got to work with exercises/movements and touches. After the 1st treatment, I already noticed I was looser, my hips were less crooked, I was more relaxed, and I slept better. The 2nd treatment was somewhat different in approach, and again I noticed a lot happening in my body and muscles (kind of like muscle soreness). I experienced the treatments as positive. 😀 Furthermore, Tim is very professional, communicative, and relaxed. Despite the sometimes strange movements/exercises, he can make you feel at ease and above all: it works!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocIMSPHvunI5Xup_1KbxcasMRzk9Orgi1GONAxYm5axU3OWs3A=s72-c-rp-mo-br100",
    date: "2025-05-18"
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