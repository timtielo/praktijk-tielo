import { TestimonialAuthor } from "../components/ui/testimonial-card";

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Lisa",
    text: "Blij",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Peter",
    text: "Super",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Maria",
    text: "Geweldig",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
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
  text: testimonial.text
}));

// Add more testimonials for the marquee to have a better flow
export const extendedTestimonialsShadcn = [
  ...testimonialsShadcn,
  {
    author: {
      name: "Thomas Bakker",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Zeer tevreden!"
  },
  {
    author: {
      name: "Emma Visser",
      handle: "Tevreden klant",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    text: "Top."
  }
];