import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"
import { Star, Quote } from "lucide-react"
import { useTranslation } from "react-i18next"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
  rating?: number
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  textEn?: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  textEn,
  href,
  className
}: TestimonialCardProps) {
  const { t, i18n } = useTranslation();
  const Card = href ? 'a' : 'div'
  const rating = author.rating || 5;
  const currentLanguage = i18n.language;
  
  // Get localized text
  const localizedText = currentLanguage.startsWith('nl') ? text : (textEn || text);
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-gray-200",
        "bg-white shadow-sm hover:shadow-md",
        "p-4 text-start",
        "w-[280px] h-[220px]", // Fixed dimensions
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-2">
        <Avatar className="h-10 w-10 border border-gray-100 shadow-sm">
          <AvatarImage 
            src={author.avatar} 
            alt={author.name}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/assets/logos/praktijktielotransparent.svg';
              img.classList.add('error-fallback');
            }}
          />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none text-gray-800">
            {author.name}
          </h3>
          <p className="text-xs text-gray-500">
            {t('testimonials.satisfiedClient')}
          </p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <div className="relative flex-grow">
        <Quote className="absolute -left-1 -top-1 w-5 h-5 text-blue-100 rotate-180" />
        <p className="text-sm text-gray-600 pl-4 line-clamp-4">
          {localizedText}
        </p>
      </div>
    </Card>
  )
}