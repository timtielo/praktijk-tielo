import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contentfulApi, type BlogPost } from '../lib/contentful';
import { SEO } from '../components/SEO';
import { Calendar, User, Tag, ChevronLeft, Loader2 } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { RichImage } from '../components/RichImage';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const locale = isEnglish ? 'en-US' : 'nl-NL';
        const data = await contentfulApi.fetchPostBySlug(slug!, locale);
        
        if (!data) {
          throw new Error('Post not found');
        }
        
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error instanceof Error ? error.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, isEnglish]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Rich text renderer options
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-100 rounded px-1 py-0.5">{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3 className="text-2xl font-bold mb-3">{children}</h3>,
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => <h4 className="text-xl font-bold mb-2">{children}</h4>,
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => <h5 className="text-lg font-bold mb-2">{children}</h5>,
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => <h6 className="text-base font-bold mb-2">{children}</h6>,
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li className="mb-2">{children}</li>,
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-blue-600 pl-4 italic my-4">{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-200" />,
      [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200">
            {children}
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
        <tr className="bg-white even:bg-gray-50">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{children}</td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: React.ReactNode) => (
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        if (node.data.target.sys.contentType.sys.id === 'componentRichImage') {
          return (
            <RichImage
              image={node.data.target.fields.image}
              caption={node.data.target.fields.caption}
              fullWidth={node.data.target.fields.fullWidth}
            />
          );
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichImage
          image={node.data.target}
          className="my-8"
        />
      ),
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a 
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: React.ReactNode) => {
        if (node.data.target.sys.contentType.sys.id === 'pageBlogPost') {
          return (
            <Link
              to={`/blog/${node.data.target.fields.slug}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {children}
            </Link>
          );
        }
        return null;
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !post) {
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
        contentfulSeo={post.fields.seoFields?.fields}
        title={post.fields.title}
        description={post.fields.shortDescription}
        type="article"
        alternateUrls={{
          nl: `https://www.praktijk-tielo.nl/blog/${slug}`,
          en: `https://www.praktijk-tielo.nl/en/blog/${slug}`
        }}
        image={`https:${post.fields.featuredImage.fields.file.url}`}
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
                <time dateTime={post.fields.publishedDate}>
                  {formatDate(post.fields.publishedDate)}
                </time>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.fields.title}
            </h1>

            {/* Author info */}
            {post.fields.author && (
              <div className="flex items-center gap-4">
                {post.fields.author.fields.avatar && (
                  <img
                    src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
                    alt={post.fields.author.fields.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = '/assets/logos/praktijktielotransparent.svg';
                    }}
                  />
                )}
                <div>
                  <p className="font-semibold">{post.fields.author.fields.name}</p>
                  <p className="text-sm text-gray-500">{post.fields.author.fields.bio}</p>
                </div>
              </div>
            )}
          </header>

          {/* Featured image */}
          {post.fields.featuredImage && (
            <div className="max-w-4xl mx-auto mb-12">
              <RichImage
                image={post.fields.featuredImage}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
          )}

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            {documentToReactComponents(post.fields.content, options)}
          </div>

          {/* Related posts */}
          {post.fields.relatedBlogPosts && post.fields.relatedBlogPosts.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">
                {isEnglish ? "Related Articles" : "Gerelateerde Artikelen"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.fields.relatedBlogPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.sys.id}
                    to={`/blog/${relatedPost.fields.slug}`}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold mb-2">{relatedPost.fields.title}</h3>
                    {relatedPost.fields.shortDescription && (
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.fields.shortDescription}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}