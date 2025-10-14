'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Target, Lightbulb, Users } from 'lucide-react';

interface StorySection {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  stats?: {
    label: string;
    value: string;
  }[];
}

const storyData: StorySection[] = [
  {
    id: 'foundation',
    year: '2008',
    title: 'Turizm Yolculuğumuzun Başlangıcı',
    description: 'İstanbul\'da profesyonel turizm rehberliği alanında ilk adımlarımızı attık. Vizyonumuz Türkiye\'nin kültürel zenginliklerini dünyaya tanıtmak ve unutulmaz seyahat deneyimleri yaratmaktı.',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop&crop=center',
    icon: Calendar,
    stats: [
      { label: 'İlk Tur', value: 'İstanbul' },
      { label: 'Ekip Büyüklüğü', value: '5 Kişi' }
    ]
  },
  {
    id: 'expansion',
    year: '2015',
    title: 'Hizmet Çeşitliliği',
    description: 'Ekibimizi genişlettik ve hizmet portföyümüze otel rezervasyonu ile kültür turlarını ekledik. Türkiye\'nin dört bir yanında rehberlik hizmeti vermeye başladık.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop&crop=center',
    icon: Target,
    stats: [
      { label: 'Tur Destinasyonu', value: '25+' },
      { label: 'Ekip Büyüklüğü', value: '20 Kişi' }
    ]
  },
  {
    id: 'innovation',
    year: '2020',
    title: 'Dijital Dönüşüm',
    description: 'Dijital teknolojileri benimser, online rezervasyon sistemi ve mobil rehberlik uygulamaları geliştirerek müşteri deneyimini dijitalleştirdik.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
    icon: Lightbulb,
    stats: [
      { label: 'Online Rezervasyon', value: '%85' },
      { label: 'Mobil App İndirme', value: '10K+' }
    ]
  },
  {
    id: 'leadership',
    year: '2024',
    title: 'Turizm Sektöründe Öncülük',
    description: 'Bugün Türkiye turizminin en güvenilir markalarından biriyiz ve sürdürülebilir turizm anlayışıyla geleceğin seyahat deneyimlerini şekillendirmeye devam ediyoruz.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
    icon: Users,
    stats: [
      { label: 'Yıllık Misafir', value: '5000+' },
      { label: 'Ekip Büyüklüğü', value: '45 Kişi' }
    ]
  }
];

export default function CompanyStory() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
            <span className="text-gradient">Hikayemiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2008'den bu yana Türkiye turizminde öncülük eden bir yolculuk.
            Her adımda kalite, güven ve misafir memnuniyeti odaklı büyüdük.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            {storyData.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    activeSection === index
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      activeSection === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-2xl font-bold transition-colors duration-300 ${
                          activeSection === index ? 'text-blue-600' : 'text-gray-400'
                        }`}>
                          {section.year}
                        </span>
                        <div className={`h-px flex-1 transition-colors duration-300 ${
                          activeSection === index ? 'bg-blue-200' : 'bg-gray-200'
                        }`} />
                      </div>
                      
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        activeSection === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {section.title}
                      </h3>
                      
                      <p className={`text-sm transition-colors duration-300 ${
                        activeSection === index ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {section.description}
                      </p>

                      {/* Stats */}
                      {section.stats && activeSection === index && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {section.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center p-3 bg-white rounded-lg shadow-sm">
                              <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                              <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Image Display */}
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={storyData[activeSection].image}
                alt={storyData[activeSection].title}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-3xl font-bold">{storyData[activeSection].year}</span>
                  <div className="h-px bg-white/30 flex-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">{storyData[activeSection].title}</h3>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Türkiye'nin eşsiz güzelliklerini, zengin kültürünü ve tarihini tüm dünyaya tanıtarak,
              unutulmaz seyahat deneyimleri yaşatmaktır.
              Her turumuzda kalite, güven ve profesyonellik ilkelerini benimser,
              misafirlerimizin hayallerindeki tatili gerçeğe dönüştürürüz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}