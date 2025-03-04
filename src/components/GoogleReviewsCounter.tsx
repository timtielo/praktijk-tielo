import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

interface GoogleReviewsCounterProps {
  rating: number;
  reviewCount: number;
  className?: string;
}

export function GoogleReviewsCounter({ rating, reviewCount, className }: GoogleReviewsCounterProps) {
  const { t } = useTranslation();
  
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-white rounded-lg px-4 py-2 shadow-sm max-w-xs",
        className
      )}
    >
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-4 h-4", 
              i < Math.round(rating) 
                ? "text-yellow-400 fill-current" 
                : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-800">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-600">
          ({reviewCount} {t('reviewsPage.googleReviews.reviewsOnGoogle')})
        </span>
      </div>
    </div>
  );
}