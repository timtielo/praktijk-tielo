import React from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { User } from 'lucide-react';

interface AuthorWithBioProps {
  name: string;
  bio?: string;
  avatar?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  className?: string;
}

export function AuthorWithBio({ name, bio, avatar, className }: AuthorWithBioProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Avatar className="h-12 w-12 border border-gray-100 shadow-sm">
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
            <User className="w-6 h-6 text-gray-400" />
          </AvatarFallback>
        )}
      </Avatar>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{name}</span>
        {bio && <p className="text-sm text-gray-500">{bio}</p>}
      </div>
    </div>
  );
}