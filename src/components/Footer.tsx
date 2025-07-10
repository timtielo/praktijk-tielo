import React from 'react';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Clock, Star, Users, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { businessInfo } from '../data/business';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { openingHours, contact, socialMedia } = businessInfo;
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
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

  // Get the correct Solutions path based on language
  const getSolutionsPath = () => {
    return isEnglish ? '/en/solutions' : '/oplossingen';
  };

  // Landing page paths
  const landingPages = isEnglish ? [
    { path: '/en/back-pain-treatment', label: 'Back Pain Treatment' },
    { path: '/en/alternative-to-chiropractic', label: 'Alternative to Chiropractic' },
    { path: '/en/sports-injury-treatment', label: 'Sports Injury Treatment' },
    { path: '/en/burnout-stress-treatment', label: 'Burnout & Stress Treatment' },
    { path: '/en/blood-type-diet', label: 'Blood Type Diet & Lifestyle' }
  ] : [
    { path: '/rugpijn-en-lage-rugklachten', label: 'Rugpijn behandeling' },
    { path: '/alternatief-voor-chiropractor', label: 'Alternatief voor chiropractor' },
    { path: '/sportblessures-behandeling', label: 'Sportblessures behandeling' },
    { path: '/burnout-stress-behandeling', label: 'Burn-out & stress behandeling' },
    { path: '/bloedgroepen-dieet', label: 'Bloedgroepen dieet & lifestyle' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-4 gap-12">
          {/* Opening Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                {t('footer.openingHours.title')}
              </h3>
              <ul className="space-y-3">
                {/* Weekdays */}
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.monday.days}</span>
                  <span>{openingHours.weekdays.monday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.tuesday.days}</span>
                  <span>{openingHours.weekdays.tuesday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.wednesday.days}</span>
                  <span>{openingHours.weekdays.wednesday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.thursday.days}</span>
                  <span>{openingHours.weekdays.thursday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.friday.days}</span>
                  <span>{openingHours.weekdays.friday.hours}</span>
                </li>
                {/* Weekend */}
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekend.saturday.days}</span>
                  <span>{openingHours.weekend.saturday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekend.sunday.days}</span>
                  <span>{openingHours.weekend.sunday.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://maps.google.com/?q=${contact.address.street},${contact.address.postalCode},${contact.address.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>
                      {contact.address.street}<br />
                      {contact.address.postalCode} {contact.address.city}
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/message/YGHG6MZEMBOIM1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.links.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to={getSolutionsPath()}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Star className="w-4 h-4 text-blue-400" />
                    {t('footer.links.allSolutions')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={getAboutUsPath()}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Users className="w-4 h-4 text-blue-400" />
                    {t('footer.links.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={getLocalizedPath('/reviews')} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Star className="w-4 h-4 text-blue-400" />
                    {t('footer.links.reviews')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={getLocalizedPath('/contact')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    {t('footer.links.contact')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={getLocalizedPath('/disclaimer')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {t('footer.links.disclaimer')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Treatment Pages */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{isEnglish ? 'Solutions' : 'Oplossingen'}</h3>
              <ul className="space-y-3">
                {landingPages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>&copy; {currentYear} {businessInfo.name}.</span>
              <span>{t('footer.copyright')}</span>
              <Link to={getLocalizedPath('/disclaimer')} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.disclaimer')}
              </Link>
              <span className="mx-2">|</span>
              <Link to={getLocalizedPath('/privacybeleid')} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}