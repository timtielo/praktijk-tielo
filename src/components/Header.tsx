import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Star, Users, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { businessInfo } from '../data/business';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { NavBar } from './ui/tubelight-navbar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const { contact } = businessInfo;
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  // Get the correct About Us path based on language
  const getAboutUsPath = () => {
    return isEnglish ? '/en/about-us' : '/over-ons';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items for the tubelight navbar
  const navItems = [
    { 
      name: t('header.aboutUs'), 
      url: getAboutUsPath(), 
      icon: Users 
    },
    { 
      name: t('header.reviews'), 
      url: getLocalizedPath('/reviews'), 
      icon: Star 
    },
    { 
      name: isEnglish ? "Knowledge Base" : "Kennisbank", 
      url: getLocalizedPath('/blog'), 
      icon: BookOpen 
    }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      } ${
        scrollDirection === 'down' && isScrolled
          ? '-translate-y-full'
          : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              to={getLocalizedPath('/')} 
              className="flex items-center py-2"
            >
              <img 
                src="/assets/logos/praktijktielotransparent.svg" 
                alt={businessInfo.name}
                className="h-16 w-auto"
              />
            </Link>
            
            {/* Language switcher moved next to logo */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Desktop navigation using tubelight navbar */}
          <div className="hidden md:block">
            <NavBar items={navItems} className="relative !fixed:none !bottom-auto !top-auto !mb-0 !pt-0" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </button>

          {/* Desktop contact info */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </a>
            </div>
            <Link 
              to={getLocalizedPath('/contact')}
              className="btn-cta bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {t('header.makeAppointment')}
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } py-4 space-y-4 bg-white rounded-lg shadow-lg mt-2`}
        >
          <Link
            to={getAboutUsPath()}
            className="flex items-center gap-2 px-4 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Users className="w-4 h-4" />
            <span>{t('header.aboutUs')}</span>
          </Link>
          <Link
            to={getLocalizedPath('/reviews')}
            className="flex items-center gap-2 px-4 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Star className="w-4 h-4" />
            <span>{t('header.reviews')}</span>
          </Link>
          <Link
            to={getLocalizedPath('/blog')}
            className="flex items-center gap-2 px-4 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isEnglish ? "Knowledge Base" : "Kennisbank"}</span>
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 px-4 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail className="w-4 h-4" />
            <span>{contact.email}</span>
          </a>
          <div className="px-4 pb-2">
            <Link
              to={getLocalizedPath('/contact')}
              className="btn-cta block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.makeAppointment')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}