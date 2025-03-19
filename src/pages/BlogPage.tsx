import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contentfulApi, type BlogPost } from '../lib/contentful';
import { SEO } from '../components/SEO';
import { Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';

interface PaginationState {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export function BlogPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    perPage: 9,
    total: 0,
    totalPages: 0
  });

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const locale = isEnglish ? 'en-US' : 'nl-NL';
        const skip = (pagination.page - 1) * pagination.perPage;
        
        let response;
        if (searchQuery) {
          response = await contentfulApi.searchPosts(searchQuery, locale);
        } else {
          response = await contentfulApi.fetchPosts(locale, { skip, limit: pagination.perPage });
        }
        
        if (!isMounted) return;

        setPosts(response.items);
        setPagination(prev => ({
          ...prev,
          total: response.total,
          totalPages: Math.ceil(response.total / pagination.perPage)
        }));
      } catch (error) {
        if (!isMounted) return;
        console.error('Error fetching posts:', error);
        setError(isEnglish ? 'Failed to load blog posts' : 'Kon blogartikelen niet laden');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [isEnglish, searchQuery, pagination.page, pagination.perPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        titleKey="meta.blog.title"
        descriptionKey="meta.blog.description"
        canonicalPath={isEnglish ? "/en/blog" : "/blog"}
        alternateUrls={{
          nl: 'https://www.praktijk-tielo.nl/blog',
          en: 'https://www.praktijk-tielo.nl/en/blog'
        }}
      />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {isEnglish ? "Knowledge Base" : "Kennisbank"}
          </h1>
          <p className="text-xl text-gray-600">
            {isEnglish 
              ? "Discover articles, health tips, and insights about natural treatments and well-being."
              : "Ontdek artikelen, gezondheidstips en inzichten over natuurlijke behandelingen en welzijn."}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={isEnglish ? "Search articles..." : "Zoek artikelen..."}
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
            />
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
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <BlogCard
                    key={post.sys.id}
                    post={post}
                    locale={isEnglish ? 'en-US' : 'nl-NL'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {isEnglish ? "No articles found" : "Geen artikelen gevonden"}
                </p>
              </div>
            )}

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
      </div>
    </>
  );
}