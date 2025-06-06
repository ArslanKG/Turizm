'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building2, Hammer, PaintBucket, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'kentsel-donusum',
    title: 'Kentsel Dönüşüm',
    description: 'Şehrin dokusunu koruyarak modern yaşam alanları yaratıyor, sürdürülebilir projeler geliştiriyoruz.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Sürdürülebilir Tasarım', 'Kentsel Planlama', 'Yenileme Projeleri', 'Çevre Dostu Çözümler'],
    process: '6-24 Ay'
  },
  {
    id: 'mimarlik',
    title: 'Mimari Tasarım',
    description: 'Estetik ve fonksiyonu mükemmel dengede buluşturan tasarımlar sunuyoruz, özgün çözümler üretiyoruz.',
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Konsept Tasarım', '3D Görselleştirme', 'İç Mekan Tasarımı', 'Peyzaj Mimarlığı'],
    process: '3-12 Ay'
  },
  {
    id: 'insaat',
    title: 'İnşaat Hizmetleri',
    description: 'En yüksek kalite standartlarında yapılar inşa ediyoruz, dayanıklı çözümler sunuyoruz.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Yapı İnşaatı', 'Renovasyon', 'Altyapı Çalışmaları', 'Kalite Kontrol'],
    process: '12-36 Ay'
  },
  {
    id: 'proje-yonetimi',
    title: 'Proje Yönetimi',
    description: 'Fonksiyonel ve profesyonel proje yönetimi hizmetleri sunuyoruz, başarılı sonuçlar garantiliyoruz.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Planlama', 'Koordinasyon', 'Risk Yönetimi', 'Kalite Güvencesi'],
    process: '1-6 Ay'
  }
];

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hizmet <span className="text-orange-300">Alanlarımız</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15 yıllık deneyimimizle mimarlık, inşaat ve kentsel dönüşüm alanlarında 
            kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <div 
                key={service.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isActive ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Process Duration */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-orange-300/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                      {service.process}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                    <span className="mr-2">Detayları İncele</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-blue-600/5 transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Projeniz İçin Teklif Alın
            </h3>
            <p className="text-gray-600 mb-6">
              Uzman ekibimizle projenizi değerlendirin ve size özel çözümler keşfedin.
            </p>
            <button className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105">
              <span className="mr-2">Ücretsiz Konsültasyon</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}