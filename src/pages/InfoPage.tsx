import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';
import { Loader2, ChevronRight, BookOpen, Users, Heart } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image_url: string;
  published_at: string;
  language: string;
  tags: string[];
}

interface ClientStory {
  id: string;
  title: string;
  content: string;
  client_name: string;
  image_url: string;
  published_at: string;
  language: string;
  treatment_type: string;
  outcome: string;
}

interface HealthTip {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string;
  published_at: string;
  language: string;
  tags: string[];
}

export function InfoPage() {
  const { t, i18n } = useTranslation();
  const { category } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [clientStories, setClientStories] = React.useState<ClientStory[]>([]);
  const [healthTips, setHealthTips] = React.useState<HealthTip[]>([]);

  React.useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      try {
        // Fetch articles
        const { data: articlesData, error: articlesError } = await supabase
          .from('articles')
          .select('*')
          .eq('status', 'published')
          .eq('language', i18n.language)
          .order('published_at', { ascending: false });

        if (articlesError) throw articlesError;
        setArticles(articlesData);

        // Fetch client stories
        const { data: storiesData, error: storiesError } = await supabase
          .from('client_stories')
          .select('*')
          .eq('status', 'published')
          .eq('language', i18n.language)
          .order('published_at', { ascending: false });

        if (storiesError) throw storiesError;
        setClientStories(storiesData);

        // Fetch health tips
        const { data: tipsData, error: tipsError } = await supabase
          .from('health_tips')
          .select('*')
          .eq('status', 'published')
          .eq('language', i18n.language)
          .order('published_at', { ascending: false });

        if (tipsError) throw tipsError;
        setHealthTips(tipsData);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEO 
        titleKey="meta.info.title"
        descriptionKey="meta.info.description"
        type="website"
      />

      <div className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">{t('info.articles.title')}</h2>
            </div>
            <div className="space-y-6">
              {articles.map(article => (
                <Link 
                  key={article.id}
                  to={`/info/articles/${article.id}`}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {article.image_url && (
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-blue-600 hover:text-blue-800">
                    <span>{t('common.readMore')}</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Client Stories Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">{t('info.clientStories.title')}</h2>
            </div>
            <div className="space-y-6">
              {clientStories.map(story => (
                <Link
                  key={story.id}
                  to={`/info/client-stories/${story.id}`}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {story.image_url && (
                    <img 
                      src={story.image_url} 
                      alt={story.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-2">{story.client_name}</p>
                  <div className="flex items-center text-blue-600 hover:text-blue-800">
                    <span>{t('common.readMore')}</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Health Tips Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">{t('info.healthTips.title')}</h2>
            </div>
            <div className="space-y-6">
              {healthTips.map(tip => (
                <Link
                  key={tip.id}
                  to={`/info/health-tips/${tip.id}`}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {tip.image_url && (
                    <img 
                      src={tip.image_url} 
                      alt={tip.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tip.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 hover:text-blue-800">
                    <span>{t('common.readMore')}</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}