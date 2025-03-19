import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabaseApi } from '../lib/supabase';
import { Search, Tag, Calendar, User, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: {
    name: string;
    avatar_url: string;
  };
  published_at: string;
  tags: string[];
}

interface FilterState {
  search: string;
  category: string;
  tag: string;
}

interface PaginationState {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export function BlogPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    tag: ''
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    perPage: 9,
    total: 0,
    totalPages: 0
  });

  // Get canonical URL
  const getCanonicalUrl = () => {
    const baseUrl = 'https://www.praktijk-tielo.nl';
    const path = isEnglish ? '/en/blog' : '/blog';
    return `${baseUrl}${path}`;
  };

  // Fetch articles and metadata
  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await supabaseApi.fetchArticles(currentLanguage, {
          page: pagination.page,
          perPage: pagination.perPage
        });
        
        if (!isMounted) return;

        if (result) {
          const { data, total, totalPages } = result;
          
          // Extract unique categories and tags
          const uniqueCategories = [...new Set(data.map(article => article.category))];
          const uniqueTags = [...new Set(data.flatMap(article => article.tags || []))];
          
          setArticles(data);
          setCategories(uniqueCategories);
          setTags(uniqueTags);
          setPagination(prev => ({
            ...prev,
            total,
            totalPages
          }));
        } else {
          setError(currentLanguage.startsWith('nl') ? 
            'Kon artikelen niet laden' : 
            'Unable to load articles'
          );
        }
      } catch (error) {
        if (!isMounted) return;
        console.error('Error fetching articles:', error);
        setError(currentLanguage.startsWith('nl') ? 
          'Fout bij het laden van artikelen' : 
          'Failed to load articles'
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, [currentLanguage, pagination.page, pagination.perPage]);

  // Filter articles based on search, category, and tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch = filters.search === '' || 
      article.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = filters.category === '' || article.category === filters.category;
    
    const matchesTag = filters.tag === '' || (article.tags && article.tags.includes(filters.tag));
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({
      ...prev,
      page: newPage
    }));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        titleKey="meta.blog.title"
        descriptionKey="meta.blog.description"
        canonicalUrl={getCanonicalUrl()}
        alternateUrls={{
          nl: 'https://www.praktijk-tielo.nl/blog',
          en: 'https://www.praktijk-tielo.nl/en/blog'
        }}
        keywords={[
          'gezondheid blog',
          'alternatieve geneeswijze',
          'gezondheidsartikelen',
          'praktijk tielo blog',
          'natuurlijke behandeling',
          'gezondheidstips',
          'wellness blog'
        ]}
      />
      
      {/* Blog Hero */}
      <section className="min-h-[300px] bg-gradient-to-br from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage.startsWith('nl') ? "Kennisbank" : "Knowledge Base"}
            </h1>
            <p className="text-gray-600 text-xl">
              {currentLanguage.startsWith('nl') 
                ? "Ontdek artikelen, gezondheidstips en klantenverhalen"
                : "Discover articles, health tips, and client stories"}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={currentLanguage.startsWith('nl') ? "Zoek artikelen..." : "Search articles..."}
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Category and Tag Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Categories */}
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">
                {currentLanguage.startsWith('nl') ? "Alle Categorieën" : "All Categories"}
              </option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Tags */}
            <select
              value={filters.tag}
              onChange={(e) => setFilters(prev => ({ ...prev, tag: e.target.value }))}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">
                {currentLanguage.startsWith('nl') ? "Alle Tags" : "All Tags"}
              </option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.published_at)}</span>
                      <span className="mx-2">•</span>
                      <Tag className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <img
                        src={article.author.avatar_url}
                        alt={article.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/assets/logos/praktijktielotransparent.svg';
                        }}
                      />
                      <span className="text-sm text-gray-600">
                        {article.author.name}
                      </span>
                    </div>
                    
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg ${
                      page === pagination.page
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {!loading && !error && filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {currentLanguage.startsWith('nl') 
                ? "Geen artikelen gevonden die aan je criteria voldoen."
                : "No articles found matching your criteria."}
            </p>
          </div>
        )}
      </div>
    </>
  );
}