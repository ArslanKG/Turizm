'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Building, Users, Target, Award } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  features: string[];
  stats: Array<{ label: string; value: string }>;
  images: string[];
  category: string;
}

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Hizmetler</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                    {service.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-orange-300 font-medium">
                  {service.subtitle}
                </h2>
                
                <div className="w-24 h-1 bg-orange-300"></div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Stats */}
              <div className="grid grid-cols-2 gap-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-orange-300 mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={service.images[activeImageIndex]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex gap-2 mt-4">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index ? 'border-orange-300' : 'border-white/20'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Hizmet Özellikleri</h2>
              
              <div className="prose prose-lg mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Neden Bizi Seçmelisiniz?</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">15+ Yıl Deneyim</div>
                        <div className="text-sm text-gray-600">Sektörde kanıtlanmış başarı</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Uzman Ekip</div>
                        <div className="text-sm text-gray-600">Alanında uzman profesyoneller</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Zamanında Teslim</div>
                        <div className="text-sm text-gray-600">Proje takvimlerine sadakat</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Kalite Garantisi</div>
                        <div className="text-sm text-gray-600">Uluslararası standartlarda hizmet</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Bu Hizmet İçin Teklif Alın
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.title} hizmetimiz hakkında detaylı bilgi ve fiyat teklifi için bizimle iletişime geçin.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 w-full justify-center py-3 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-colors"
                  >
                    <span>Teklif Al</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diğer Hizmetlerimiz
            </h2>
            <p className="text-gray-600">
              Kapsamlı hizmet portföyümüzle tüm ihtiyaçlarınızı karşılıyoruz.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105"
            >
              <span>Tüm Hizmetleri Görüntüle</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}