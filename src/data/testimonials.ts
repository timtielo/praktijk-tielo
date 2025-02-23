export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Lisa van der Berg",
    text: "Na 5 jaar chronische rugpijn ben ik eindelijk pijnvrij. De behandeling heeft mijn leven compleet veranderd!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Peter de Vries",
    text: "Ze namen echt de tijd om de oorzaak van mijn klachten te vinden. Nu kan ik weer sporten zonder pijn.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Maria Jansen",
    text: "Eindelijk weer een nacht doorslapen zonder pijn. De oefeningen voor thuis maken echt verschil.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  }
];