import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { TestimonialsSection } from '../components/blocks/testimonials-with-marquee';
import { extendedTestimonialsShadcn } from '../data/testimonials';
import { businessInfo } from '../data/business';
import { Facebook, Instagram, Linkedin, MessageSquare, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { trackPageView } from '../utils/analytics';
import { Helmet } from 'react-helmet-async';

export function ThankYouPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = location.pathname.startsWith('/en');
  
  // Helper function to get language-aware paths
  const getLocalizedPath = (path: string) => {
    return isEnglish ? `/en${path === '/' ? '' : path}` : path;
  };

  // Get the correct About Us path based on language
  const getAboutUsPath = () => {
    return isEnglish ? '/en/about-us' : '/over-ons';
  };

  // Track page view
  useEffect(() => {
    trackPageView({
      path: location.pathname,
      title: isEnglish ? 'Thank You | Praktijk Tielo' : 'Bedankt | Praktijk Tielo',
      language: isEnglish ? 'en' : 'nl'
    });
  }, [location.pathname, isEnglish]);

  // Redirect to home after 60 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate(isEnglish ? '/en' : '/');
    }, 60000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, isEnglish]);

  return (
    <>
      <SEO 
        title={isEnglish ? "Thank You | Praktijk Tielo" : "Bedankt | Praktijk Tielo"}
        description={isEnglish 
          ? "Thank you for contacting Praktijk Tielo. We will get back to you within 24 hours."
          : "Bedankt voor je bericht aan Praktijk Tielo. We nemen binnen 24 uur contact met je op."}
        canonicalPath={isEnglish ? "/en/thank-you" : "/bedankt"}
      />
      
      {/* Add no-index meta tags to prevent search engine indexing */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? "Thank you for your message!" : "Bedankt voor je bericht!"}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isEnglish 
                  ? "Tim will contact you within 24 hours to discuss your request."
                  : "Tim neemt binnen 24 uur contact met je op om je aanvraag te bespreken."}
              </p>
              
              <Link 
                to={isEnglish ? "/en" : "/"}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {isEnglish ? "Return to homepage" : "Terug naar de homepage"}
              </Link>
            </div>
            
            {/* Testimonials Section - Now first as requested */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isEnglish ? "What our clients say" : "Wat onze klanten zeggen"}
              </h2>
              
              <TestimonialsSection
                title=""
                description=""
                testimonials={extendedTestimonialsShadcn}
                className="bg-transparent py-0"
              />
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isEnglish ? "Connect with us" : "Volg ons"}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href={businessInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                  href={businessInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>
                
                <a 
                  href={businessInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://wa.me/message/YGHG6MZEMBOIM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  to={getAboutUsPath()}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Users className="w-5 h-5" />
                  {isEnglish ? "Learn more about us and the treatment" : "Leer meer over ons en de behandeling"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}