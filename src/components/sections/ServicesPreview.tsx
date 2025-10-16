'use client';

import Link from 'next/link';
import { MapPin, Hotel, Users, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Service {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  slug: string;
  tours: number;
  color: string;
  gradient: string;
  features: string[];
}


export default function ServicesPreview() {
  const { t } = useLanguage();

  // Dynamic services data using translations
  const services: Service[] = [
    {
      id: '1',
      title: t('services-preview.service.culture-tours.title'),
      description: t('services-preview.service.culture-tours.description'),
      shortDesc: t('services-preview.service.culture-tours.short'),
      icon: MapPin,
      slug: 'kultur-turlari',
      tours: 150,
      color: 'from-blue-500 to-purple-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50',
      features: [
        t('services-preview.service.culture-tours.feature1'),
        t('services-preview.service.culture-tours.feature2'),
        t('services-preview.service.culture-tours.feature3')
      ]
    },
    {
      id: '2',
      title: t('services-preview.service.hotel-reservations.title'),
      description: t('services-preview.service.hotel-reservations.description'),
      shortDesc: t('services-preview.service.hotel-reservations.short'),
      icon: Hotel,
      slug: 'otel-rezervasyonu',
      tours: 200,
      color: 'from-emerald-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      features: [
        t('services-preview.service.hotel-reservations.feature1'),
        t('services-preview.service.hotel-reservations.feature2'),
        t('services-preview.service.hotel-reservations.feature3')
      ]
    },
    {
      id: '3',
      title: t('services-preview.service.guide-services.title'),
      description: t('services-preview.service.guide-services.description'),
      shortDesc: t('services-preview.service.guide-services.short'),
      icon: Users,
      slug: 'rehberlik-hizmetleri',
      tours: 300,
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
      features: [
        t('services-preview.service.guide-services.feature1'),
        t('services-preview.service.guide-services.feature2'),
        t('services-preview.service.guide-services.feature3')
      ]
    }
  ];

  return (
    <section id="services-section" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            {t('services-preview.badge')}
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('services-preview.title.main')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              {t('services-preview.title.highlight')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services-preview.description')}
            <strong className="text-gray-800">{t('services-preview.description.highlight')}</strong>
            {t('services-preview.description.end')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">650+</div>
              <div className="text-gray-600 text-sm">{t('services-preview.stats.tours')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">{t('services-preview.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12000+</div>
              <div className="text-gray-600 text-sm">{t('services-preview.stats.visitors')}</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative h-full"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`
                }}
              >
                {/* Main Card */}
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${service.gradient} group-hover:bg-white overflow-hidden h-full flex flex-col`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-300 min-h-[2.5rem]">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 mb-4 min-h-[1.25rem]">{service.shortDesc}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[4rem]">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 min-h-[4.5rem]">
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-500">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{service.tours}+</div>
                        <div className="text-xs text-gray-500">{t('services-preview.tour-label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">⭐</div>
                        <div className="text-xs text-gray-500">{t('services-preview.premium-label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">✓</div>
                        <div className="text-xs text-gray-500">{t('services-preview.guarantee-label')}</div>
                      </div>
                    </div>

                    {/* CTA Button - pushes to bottom */}
                    <div className="mt-auto">
                      <Link
                        href={`/hizmetler/${service.slug}`}
                        className="group/btn relative inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                      >
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                        
                        <span className="relative mr-2">{t('services-preview.button.explore')}</span>
                        <ArrowRight className="relative w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-orange-500 to-red-600 blur-xl -z-10 transform scale-105"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}