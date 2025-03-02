import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"
import { Star } from "lucide-react"
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
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const { t } = useTranslation();
  const Card = href ? 'a' : 'div'
  const rating = author.rating || 5;
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-gray-200",
        "bg-white shadow-sm hover:shadow-md",
        "p-5 text-start",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-gray-100 shadow-sm">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-gray-800">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500">
            {t('testimonials.satisfiedClient')}
          </p>
        </div>
      </div>
      
      <div className="flex gap-1 my-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="sm:text-md text-sm text-gray-600">
        {text}
      </p>
    </Card>
  )
}