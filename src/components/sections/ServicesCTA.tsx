'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonialsConfig = [
  {
    nameKey: 'services-cta.testimonial1.name',
    companyKey: 'services-cta.testimonial1.company',
    rating: 5,
    commentKey: 'services-cta.testimonial1.comment'
  },
  {
    nameKey: 'services-cta.testimonial2.name',
    companyKey: 'services-cta.testimonial2.company',
    rating: 5,
    commentKey: 'services-cta.testimonial2.comment'
  }
];

export default function ServicesCTA() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services-cta.title')}
              <span className="block text-orange-300">{t('services-cta.title.highlight')}</span>
            </h2>
            
            <div className="w-24 h-1 bg-white mb-8"></div>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('services-cta.description')}
              <strong className="text-orange-300"> {t('services-cta.description.highlight')}</strong>.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">{t('services-cta.contact.phone')}</div>
                  <div className="text-orange-300">{t('services-cta.contact.phone.number')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">{t('services-cta.contact.email')}</div>
                  <div className="text-orange-300">{t('services-cta.contact.email.address')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">{t('services-cta.contact.address')}</div>
                  <div className="text-orange-300">{t('services-cta.contact.address.location')}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="mr-2">{t('services-cta.cta.get-prices')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a href="tel:+902125550156" className="inline-flex items-center justify-center py-4 px-8 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Phone className="h-5 w-5 mr-2" />
                <span>{t('services-cta.cta.call-now')}</span>
              </a>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              {t('services-cta.testimonials.title')} <span className="text-orange-300">{t('services-cta.testimonials.title.highlight')}</span>
            </h3>
            
            {testimonialsConfig.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "{t(testimonial.commentKey)}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white">{t(testimonial.nameKey)}</div>
                    <div className="text-sm text-orange-300">{t(testimonial.companyKey)}</div>
                  </div>
                  <div className="w-12 h-12 bg-orange-300/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 font-bold text-lg">
                      {t(testimonial.nameKey).charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">650+</div>
                <div className="text-sm text-blue-200">{t('services-cta.stats.tours')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">15+</div>
                <div className="text-sm text-blue-200">{t('stats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">12000+</div>
                <div className="text-sm text-blue-200">{t('services-cta.stats.visitors')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-bold text-white mb-2">
              {t('services-cta.support.title')}
            </h4>
            <p className="text-blue-200">
              {t('services-cta.support.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}