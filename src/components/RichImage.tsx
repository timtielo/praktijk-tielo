import React from 'react';
import { cn } from '../lib/utils';

interface RichImageProps {
  image: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
      title: string;
      description?: string;
    };
  };
  caption?: string;
  fullWidth?: boolean;
  className?: string;
}

export function RichImage({ image, caption, fullWidth = false, className }: RichImageProps) {
  return (
    <figure className={cn(
      "my-8",
      fullWidth ? "w-full" : "max-w-3xl mx-auto",
      className
    )}>
      <img
        src={`https:${image.fields.file.url}?fm=webp&q=80`}
        alt={image.fields.title}
        className={cn(
          "rounded-lg shadow-md w-full h-auto",
          fullWidth ? "max-w-none" : "max-w-full"
        )}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        loading="lazy"
      />
      {(caption || image.fields.description) && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption || image.fields.description}
        </figcaption>
      )}
    </figure>
  );
}