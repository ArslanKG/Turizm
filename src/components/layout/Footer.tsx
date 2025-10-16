'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Facebook, href: '#', labelKey: 'footer.social.facebook' },
  { icon: Instagram, href: '#', labelKey: 'footer.social.instagram' },
  { icon: Linkedin, href: '#', labelKey: 'footer.social.linkedin' },
  { icon: Twitter, href: '#', labelKey: 'footer.social.twitter' }
];

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const services = [
    { labelKey: 'footer.services.culture-tours', href: '/hizmetler/kultur-turlari' },
    { labelKey: 'footer.services.hotel-reservations', href: '/hizmetler/otel-rezervasyonu' },
    { labelKey: 'footer.services.guide-services', href: '/hizmetler/rehberlik-hizmetleri' },
    { labelKey: 'footer.services.adventure-tours', href: '/hizmetler/macera-turlari' }
  ];

  const quickLinks = [
    { labelKey: 'footer.quick-links.about', href: '/hakkimizda' },
    { labelKey: 'footer.quick-links.tours', href: '/turlar' },
    { labelKey: 'footer.quick-links.blog', href: '/blog' },
    { labelKey: 'footer.quick-links.career', href: '/kariyer' },
    { labelKey: 'footer.quick-links.contact', href: '/iletisim' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <p className="text-gray-300 leading-relaxed">
                {t('footer.company.description')}
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+90 212 555 0156</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@parlatravel.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  {t('footer.address.street')}<br />
                  {t('footer.address.details')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t(service.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t('footer.quick-links.title')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label={t(social.labelKey)}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 sm:text-right">
              <p>© {currentYear} {t('footer.copyright')}</p>
              <div className="mt-1 space-x-4 text-sm">
                <Link href="/gizlilik" className="hover:text-blue-400">
                  {t('footer.privacy-policy')}
                </Link>
                <Link href="/kullanim-kosullari" className="hover:text-blue-400">
                  {t('footer.terms-of-service')}
                </Link>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                {t('footer.developed-by')}{' '}
                <Link
                  href="https://arkegu-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors font-medium"
                >
                  Arslan Kemal GÜNDÜZ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}