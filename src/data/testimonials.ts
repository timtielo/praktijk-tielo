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
    date: "2025-14-10"
  },
  {
    id: "floor-1",
    name: "Floor",
    text: "Ik had al lange tijd last van pijn en spanning in de schouders, nek en kaakregio. Na de behandeling heb ik duidelijk minder last! Tim creëert een gezellige sfeer waardoor ik de behandeling zelf als erg prettig ervaren heb. Hij heeft ook een simpele oefening voor thuis meegegeven. De eerste dag na de behandeling wel wat pijntjes, maar sindsdien heb ik merkbaar minder spanning!",
    textEn: "I had been suffering from pain and tension in the shoulders, neck and jaw region for a long time. After the treatment I have clearly less trouble! Tim creates a pleasant atmosphere which made me experience the treatment itself as very pleasant. He also gave a simple exercise for at home. The first day after the treatment some pain, but since then I have noticeably less tension!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocLqkbWKqB3qllNBcqpG_CG013qhyBhAykvjzA5pqEx7sKEdLw=s36-c-rp-mo-br100",
    date: "2025-03-11"
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
