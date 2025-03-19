import React from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { User } from 'lucide-react';

interface AuthorProps {
  name: string;
  avatar?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  className?: string;
}

export function Author({ name, avatar, className }: AuthorProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar className="h-10 w-10 border border-gray-100 shadow-sm">
        {avatar ? (
          <AvatarImage 
            src={`https:${avatar.fields.file.url}`}
            alt={name}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/assets/logos/praktijktielotransparent.svg';
            }}
          />
        ) : (
          <AvatarFallback>
            <User className="w-5 h-5 text-gray-400" />
          </AvatarFallback>
        )}
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900">{name}</span>
        <span className="text-xs text-gray-500">Author</span>
      </div>
    </div>
  );
}