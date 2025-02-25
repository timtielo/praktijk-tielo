import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/business';
import { useScrollDirection } from '../hooks/useScrollDirection';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const { contact } = businessInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      } ${
        scrollDirection === 'down' && isScrolled
          ? '-translate-y-full'
          : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center py-2"
          >
            <img 
              src="/assets/logos/praktijktielotransparent.svg" 
              alt={businessInfo.name}
              className="h-16 w-auto"
            />
          </Link>

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
                href={`tel:${contact.phone}`} 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </a>
            </div>
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Maak afspraak
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } py-4 space-y-4 bg-white rounded-lg shadow-lg mt-2`}
        >
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 px-4 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="w-4 h-4" />
            <span>{contact.phone}</span>
          </a>
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
              to="/contact"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Maak afspraak
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}