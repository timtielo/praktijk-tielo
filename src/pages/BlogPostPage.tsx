import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabaseApi } from '../lib/supabase';
import { SEO } from '../components/SEO';
import { Calendar, User, Tag, ChevronLeft, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string;
  author: {
    name: string;
    avatar_url: string;
    bio: string;
  };
  published_at: string;
  tags: string[];
  metadata: {
    readingTime?: number;
    references?: string[];
  };
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');
  
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await supabaseApi.fetchArticleBySlug(slug!, currentLanguage);
        
        if (!data) {
          throw new Error('Article not found');
        }
        
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(error instanceof Error ? error.message : 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug, currentLanguage]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const getCanonicalUrl = () => {
    const baseUrl = 'https://www.praktijk-tielo.nl';
    const path = isEnglish ? `/en/blog/${slug}` : `/blog/${slug}`;
    return `${baseUrl}${path}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {currentLanguage.startsWith('nl') ? 'Artikel niet gevonden' : 'Article not found'}
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            {currentLanguage.startsWith('nl') ? 'Ga terug' : 'Go back'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        titleKey={article?.title || 'Blog Post'}
        descriptionKey={article?.meta?.description || ''}
        type="article"
        canonicalUrl={getCanonicalUrl()}
        alternateUrls={{
          nl: `https://www.praktijk-tielo.nl/blog/${slug}`,
          en: `https://www.praktijk-tielo.nl/en/blog/${slug}`
        }}
        keywords={article?.meta?.keywords || []}
      />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            {currentLanguage.startsWith('nl') ? 'Terug naar overzicht' : 'Back to overview'}
          </Link>

          {/* Article header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.published_at}>
                  {formatDate(article.published_at)}
                </time>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{article.category}</span>
              </div>
              {article.metadata?.readingTime && (
                <>
                  <span className="text-gray-300">•</span>
                  <span>{article.metadata.readingTime} min read</span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar_url}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/assets/logos/praktijktielotransparent.svg';
                }}
              />
              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="text-sm text-gray-500">{article.author.bio}</p>
              </div>
            </div>
          </header>

          {/* Featured image */}
          {article.image_url && (
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
          )}

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {article.metadata?.references && article.metadata.references.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-4">
                {currentLanguage.startsWith('nl') ? 'Bronnen' : 'References'}
              </h2>
              <ul className="space-y-2 text-gray-600">
                {article.metadata.references.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </>
  );
}