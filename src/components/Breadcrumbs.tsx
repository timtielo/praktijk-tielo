import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            to={isEnglish ? "/en" : "/"} 
            className="text-gray-500 hover:text-blue-600"
          >
            {isEnglish ? "Home" : "Home"}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {item.href ? (
              <Link 
                to={item.href}
                className="text-gray-500 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}