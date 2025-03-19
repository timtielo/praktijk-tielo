import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Author } from './Author';
import { cn } from '../lib/utils';
import type { BlogPost } from '../lib/contentful';

interface BlogCardProps {
  post: BlogPost;
  locale: string;
  className?: string;
}

export function BlogCard({ post, locale, className }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(dateString));
  };

  return (
    <article 
      className={cn(
        "group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Image */}
      {post.fields.featuredImage && (
        <Link to={`/blog/${post.fields.slug}`} className="block relative aspect-[16/9] overflow-hidden">
          <img
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.featuredImage.fields.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.fields.publishedDate}>
            {formatDate(post.fields.publishedDate)}
          </time>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.fields.slug}`}>
          <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.fields.title}
          </h2>
        </Link>

        {/* Description */}
        {post.fields.shortDescription && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.fields.shortDescription}
          </p>
        )}

        {/* Author */}
        {post.fields.author && (
          <div className="pt-4 border-t border-gray-100">
            <Author 
              name={post.fields.author.fields.name}
              avatar={post.fields.author.fields.avatar}
            />
          </div>
        )}
      </div>
    </article>
  );
}