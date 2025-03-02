import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  text_en?: string; // English translation
  time: number;
  profile_photo_url: string;
}

interface GoogleReviewsProps {
  placeId: string;
  apiKey?: string;
  className?: string;
  limit?: number;
}

export function GoogleReviews({ 
  placeId, 
  apiKey, 
  className,
  limit = 5
}: GoogleReviewsProps) {
  const { t, i18n } = useTranslation();
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const currentLanguage = i18n.language;

  // For demo purposes, we'll use mock data since we don't have a real API key
  const mockReviews: GoogleReview[] = [
    {
      author_name: "Thijs",
      rating: 5,
      text: "Was echt top, ik heb geen last meer van mijn knie en enkel door Tim. Alle gewrichten zitten weer los en daardoor kost bewegen bijna geen energie meer. Ik kan iedereen aanraden om naar Tim te gaan.",
      text_en: "It was really great, I no longer have any problems with my knee and ankle thanks to Tim. All joints are loose again and therefore moving takes almost no energy. I can recommend everyone to go to Tim.",
      time: new Date().getTime() / 1000 - 86400 * 7, // 7 days ago
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJGrhTmDSdGYh0dEAkNS7tGE7JEVFL5vYy0VxQiaMz0debENw=w60-h60-p-rp-mo-br100"
    },
    {
      author_name: "Placeholder",
      rating: 5,
      text: "Placeholder review",
      text_en: "Placeholder review",
      time: new Date().getTime() / 1000 - 86400 * 14, // 14 days ago
      profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      author_name: "Placeholder",
      rating: 5,
      text: "Placeholder review",
      text_en: "Placeholder review",
      time: new Date().getTime() / 1000 - 86400 * 21, // 21 days ago
      profile_photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      author_name: "Placeholder",
      rating: 5,
      text: "Placeholder review",
      text_en: "Placeholder review",
      time: new Date().getTime() / 1000 - 86400 * 28, // 28 days ago
      profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      author_name: "Placeholder",
      rating: 5,
      text: "Placeholder review",
      text_en: "Placeholder review",
      time: new Date().getTime() / 1000 - 86400 * 35, // 35 days ago
      profile_photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  useEffect(() => {
    // In a real implementation, we would fetch from the Google Places API
    // For now, we'll simulate an API call with our mock data
    const fetchReviews = async () => {
      try {
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Use mock data
        const data = mockReviews;
        
        // Calculate average rating
        const avgRating = data.reduce((acc, review) => acc + review.rating, 0) / data.length;
        
        setReviews(data.slice(0, limit));
        setAverageRating(avgRating);
        setTotalReviews(data.length);
        setLoading(false);
      } catch (err) {
        setError(currentLanguage.startsWith('nl') 
          ? 'Er is een fout opgetreden bij het ophalen van de reviews.' 
          : 'An error occurred while fetching the reviews.');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey, limit, currentLanguage]);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const locale = i18n.language === 'nl' ? 'nl-NL' : 'en-US';
    return new Intl.DateTimeFormat(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  // Get the appropriate review text based on the current language
  const getReviewText = (review: GoogleReview) => {
    return currentLanguage.startsWith('nl') ? review.text : (review.text_en || review.text);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-5 h-5", 
                    i < Math.round(averageRating) 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  )} 
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            {totalReviews} {currentLanguage.startsWith('nl') ? 'reviews op Google' : 'reviews on Google'}
          </p>
        </div>
        <a 
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>{t('reviewsPage.googleReviews.viewAll')}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Reviews list */}
      <div className="grid gap-4">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img 
                src={review.profile_photo_url} 
                alt={review.author_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <span className="text-gray-500 text-sm">{formatDate(review.time)}</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-4 h-4", 
                        i < review.rating 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-gray-700">{getReviewText(review)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google attribution */}
      <div className="text-center text-sm text-gray-500">
        <p>{t('reviewsPage.googleReviews.attribution')}</p>
      </div>
    </div>
  );
}