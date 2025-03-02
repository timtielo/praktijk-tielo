import { TestimonialAuthor } from "../components/ui/testimonial-card";

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
    id: "thijs-1",
    name: "Thijs",
    text: "Was echt top, ik heb geen last meer van mijn knie en enkel door Tim. Alle gewrichten zitten weer los en daardoor kost bewegen bijna geen energie meer. Ik kan iedereen aanraden om naar Tim te gaan.",
    textEn: "It was really great, I no longer have any problems with my knee and ankle thanks to Tim. All joints are loose again and therefore moving takes almost no energy. I can recommend everyone to go to Tim.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJGrhTmDSdGYh0dEAkNS7tGE7JEVFL5vYy0VxQiaMz0debENw=w60-h60-p-rp-mo-br100"
  },
  {
    id: "placeholder-1",
    name: "Placeholder 1",
    text: "Placeholder review",
    textEn: "Placeholder review",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "placeholder-2",
    name: "Placeholder 2",
    text: "Placeholder review",
    textEn: "Placeholder review",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "placeholder-3",
    name: "Placeholder 3",
    text: "Placeholder review",
    textEn: "Placeholder review",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
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

// Add more testimonials for the marquee to have a better flow
export const extendedTestimonialsShadcn = [
  ...testimonialsShadcn,
  {
    author: {
      name: "Placeholder 4",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Placeholder review",
    id: "placeholder-4"
  },
  {
    author: {
      name: "Placeholder 5",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Placeholder review",
    id: "placeholder-5"
  },
  {
    author: {
      name: "Placeholder 6",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Placeholder review",
    id: "placeholder-6"
  },
  {
    author: {
      name: "Placeholder 7",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Placeholder review",
    id: "placeholder-7"
  }
];