'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Hotel, Users, Compass, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'kultur-turlari',
    title: 'Kültür Turları',
    description: 'Türkiye\'nin zengin tarihî ve kültürel mirasını keşfedin, uzman rehberlerimiz eşliğinde unutulmaz deneyimler yaşayın.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Tarihî Mekanlar', 'Müze Gezileri', 'Antik Şehirler', 'Yerel Kültür'],
    process: '1-15 Gün'
  },
  {
    id: 'otel-rezervasyonu',
    title: 'Otel Rezervasyonları',
    description: 'Konforlu konaklama deneyimi için en iyi otellerde rezervasyon hizmeti sunuyoruz, her bütçeye uygun seçenekler.',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Lüks Oteller', 'Boutique Hotels', 'Butik Pansiyonlar', 'Özel Villalar'],
    process: '1-7 Gün'
  },
  {
    id: 'rehberlik-hizmetleri',
    title: 'Rehberlik Hizmetleri',
    description: 'Profesyonel ve deneyimli rehberlerimiz ile Türkiye\'nin her köşesini keşfedin, kişisel ve grup turları.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['Kişisel Rehberlik', 'Grup Rehberliği', 'Çok Dilli Hizmet', 'Özel İlgi Alanları'],
    process: '1-30 Gün'
  },
  {
    id: 'macera-turlari',
    title: 'Macera Turları',
    description: 'Size özel hazırladığımız tatil paketleri ile hayalinizdeki seyahati yaşayın, tamamen kişiselleştirilebilir.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop&crop=center&q=90',
    features: ['VIP Turlar', 'Romantik Geziler', 'Macera Turları', 'Gastronomi Turları'],
    process: '3-21 Gün'
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
            15 yıllık deneyimimizle turizm, seyahat ve rehberlik alanlarında
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
                  <Link
                    href={`/hizmetler/${service.id}`}
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 group-hover:translate-y-0 translate-y-2"
                  >
                    <span className="mr-2">Detayları İncele</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
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
              Hayalinizdeki Tur İçin Teklif Alın
            </h3>
            <p className="text-gray-600 mb-6">
              Uzman ekibimizle seyahat planınızı değerlendirin ve size özel turlar keşfedin.
            </p>
            <button className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105">
              <span className="mr-2">Ücretsiz Danışmanlık</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}