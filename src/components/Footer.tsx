import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/business';

export function Footer() {
  const { openingHours, contact, socialMedia } = businessInfo;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Openingstijden
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.weekdays.days}</span>
                  <span>{openingHours.weekdays.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.saturday.days}</span>
                  <span>{openingHours.saturday.hours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">{openingHours.sunday.days}</span>
                  <span>{openingHours.sunday.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
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
        </div>

        {/* Footer bottom */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} {businessInfo.name}.</span>
              <span>Alle rechten voorbehouden.</span>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
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