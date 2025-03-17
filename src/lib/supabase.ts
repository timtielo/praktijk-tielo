// Mock data and types for blog functionality
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: {
    name: string;
    avatar_url: string;
    bio?: string;
  };
  published_at: string;
  tags: string[];
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Mock articles data
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Natuurlijke manieren om je immuunsysteem te versterken',
    slug: 'natuurlijke-manieren-immuunsysteem-versterken',
    content: '# Natuurlijke manieren om je immuunsysteem te versterken\n\nJe immuunsysteem is je natuurlijke verdediging tegen ziekten en infecties...',
    excerpt: 'Ontdek natuurlijke manieren om je immuunsysteem te versterken. Tips voor een betere weerstand door voeding, beweging en leefstijl.',
    category: 'health',
    image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    author: {
      name: 'Tim Tielkemeijer',
      avatar_url: '/assets/photos/Profielfoto.jpg',
      bio: 'Oprichter van Praktijk Tielo'
    },
    published_at: '2025-03-17T12:00:00Z',
    tags: ['immuunsysteem', 'weerstand', 'gezondheid', 'natuurlijk'],
    meta: {
      title: 'Versterk je immuunsysteem natuurlijk | Praktijk Tielo',
      description: 'Ontdek natuurlijke manieren om je immuunsysteem te versterken. Tips voor een betere weerstand door voeding, beweging en leefstijl.',
      keywords: ['immuunsysteem', 'weerstand', 'gezondheid', 'natuurlijk']
    }
  }
];

// Mock API functions
export const supabaseApi = {
  async fetchArticles(language: string, pagination?: { page: number; perPage: number }) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const total = mockArticles.length;
    const totalPages = pagination ? Math.ceil(total / pagination.perPage) : 1;
    
    return {
      data: mockArticles,
      total,
      totalPages
    };
  },

  async fetchArticleBySlug(slug: string, language: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockArticles.find(article => article.slug === slug) || null;
  }
};