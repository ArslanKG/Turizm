'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const services = [
  { label: 'Kültür Turları', href: '/hizmetler/kultur-turlari' },
  { label: 'Otel Rezervasyonları', href: '/hizmetler/otel-rezervasyonu' },
  { label: 'Rehberlik Hizmetleri', href: '/hizmetler/rehberlik-hizmetleri' },
  { label: 'Macera Turları', href: '/hizmetler/macera-turlari' }
];

const quickLinks = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Turlarımız', href: '/projeler' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kariyer', href: '/kariyer' },
  { label: 'İletişim', href: '/iletisim' }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <p className="text-gray-300 leading-relaxed">
                Turizm ve seyahat alanlarında 15+ yıllık deneyimle,
                Türkiye'nin en güzel destinasyonlarını keşfetmeniz için unutulmaz turlar düzenliyoruz.
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
                  Taksim Meydanı, İstiklal Caddesi<br />
                  No: 250, Beyoğlu/İstanbul
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {link.label}
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
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 sm:text-right">
              <p>© {currentYear} Parla Travel. Tüm hakları saklıdır.</p>
              <div className="mt-1 space-x-4 text-sm">
                <Link href="/gizlilik" className="hover:text-blue-400">
                  Gizlilik Politikası
                </Link>
                <Link href="/kullanim-kosullari" className="hover:text-blue-400">
                  Kullanım Koşulları
                </Link>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Designed & Developed by{' '}
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