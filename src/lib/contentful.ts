import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Check if environment variables are set
const requiredEnvVars = [
  'VITE_CONTENTFUL_SPACE_ID',
  'VITE_CONTENTFUL_ACCESS_TOKEN',
  'VITE_CONTENTFUL_ENVIRONMENT'
];

const missingEnvVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

// Create Contentful client with error handling
let client: ReturnType<typeof createClient>;

try {
  client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
    retryOnError: true,
    retryLimit: 3
  });
} catch (error) {
  console.error('Failed to initialize Contentful client:', error);
  throw new Error('Failed to initialize Contentful client');
}

export interface SEOFields {
  internalName: string;
  pageTitle: string;
  pageDescription?: string;
  canonicalUrl?: string;
  nofollow: boolean;
  noindex: boolean;
  shareImages?: Array<{
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
      title: string;
      description?: string;
    };
  }>;
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    internalName: string;
    seoFields?: {
      fields: SEOFields;
    };
    slug: string;
    author?: {
      fields: {
        name: string;
        avatar?: {
          fields: {
            file: {
              url: string;
            };
          };
        };
        bio?: string;
      };
    };
    publishedDate: string;
    title: string;
    shortDescription?: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
    content: Document;
    relatedBlogPosts?: BlogPost[];
  };
}

export const contentfulApi = {
  async fetchPosts(locale: string = 'nl-NL', { skip = 0, limit = 9 } = {}) {
    try {
      if (!client) {
        throw new Error('Contentful client not initialized');
      }

      const response = await client.getEntries<BlogPost>({
        content_type: 'pageBlogPost',
        locale,
        order: '-fields.publishedDate',
        skip,
        limit,
        include: 2
      });

      return {
        items: response.items as unknown as BlogPost[],
        total: response.total,
        skip: response.skip,
        limit: response.limit
      };
    } catch (error) {
      console.error('Error fetching posts from Contentful:', error);
      throw new Error('Failed to fetch posts from Contentful');
    }
  },

  async fetchPostBySlug(slug: string, locale: string = 'nl-NL') {
    try {
      if (!client) {
        throw new Error('Contentful client not initialized');
      }

      const response = await client.getEntries<BlogPost>({
        content_type: 'pageBlogPost',
        'fields.slug': slug,
        locale,
        include: 2
      });

      if (!response.items.length) {
        throw new Error('Post not found');
      }

      return response.items[0] as unknown as BlogPost;
    } catch (error) {
      console.error('Error fetching post from Contentful:', error);
      throw new Error('Failed to fetch post from Contentful');
    }
  },

  async searchPosts(query: string, locale: string = 'nl-NL') {
    try {
      if (!client) {
        throw new Error('Contentful client not initialized');
      }

      const response = await client.getEntries<BlogPost>({
        content_type: 'pageBlogPost',
        locale,
        query,
        include: 2
      });

      return {
        items: response.items as unknown as BlogPost[],
        total: response.total
      };
    } catch (error) {
      console.error('Error searching posts in Contentful:', error);
      throw new Error('Failed to search posts in Contentful');
    }
  }
};