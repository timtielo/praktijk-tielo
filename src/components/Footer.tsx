import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/business';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { openingHours, contact, socialMedia } = businessInfo;
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                {t('footer.openingHours.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">{t('footer.openingHours.weekdays')}</span>
                  <span>{t('footer.openingHours.byAppointment')}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{t('footer.openingHours.saturday')}</span>
                  <span>{t('footer.openingHours.byAppointment')}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{t('footer.openingHours.sunday')}</span>
                  <span>{t('footer.openingHours.byAppointment')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    {contact.phone}
                  </a>
                </li>
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
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.links.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/reviews"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Star className="w-4 h-4 text-blue-400" />
                    {t('footer.links.reviews')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    {t('footer.links.contact')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/disclaimer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {t('footer.links.disclaimer')}
                  </Link>
                </li>
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
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.disclaimer')}
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