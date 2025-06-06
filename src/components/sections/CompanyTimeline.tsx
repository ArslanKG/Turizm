'use client';

import { Calendar, Building, Award, Globe } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2008',
    title: 'Parla Group Kuruluşu',
    description: 'İstanbul\'da küçük bir ekiple kentsel dönüşüm alanında ilk adımlarımızı attık.',
    icon: Building,
    color: 'bg-blue-500'
  },
  {
    year: '2012',
    title: 'İlk Büyük Proje',
    description: 'Kadıköy bölgesinde 15.000 m² alanlı ilk büyük kentsel dönüşüm projemizi tamamladık.',
    icon: Award,
    color: 'bg-green-500'
  },
  {
    year: '2016',
    title: 'Hizmet Portföyü Genişlemesi',
    description: 'İnşaat ve mimarlık hizmetlerini de bünyemize katarak tam entegre çözümler sunmaya başladık.',
    icon: Globe,
    color: 'bg-purple-500'
  },
  {
    year: '2020',
    title: 'Sürdürülebilirlik Odağı',
    description: 'LEED sertifikasyonu aldık ve tüm projelerimizde çevre dostu yaklaşımları benimsedik.',
    icon: Award,
    color: 'bg-emerald-500'
  },
  {
    year: '2024',
    title: 'Sektör Liderliği',
    description: 'İstanbul\'un en prestijli kentsel dönüşüm projelerinde öncü konuma geldik.',
    icon: Building,
    color: 'bg-yellow-500'
  }
];

export default function CompanyTimeline() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
            <span className="text-gradient">Kilometre Taşlarımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            16 yıllık yolculuğumuzda attığımız önemli adımlar ve kazandığımız başarılar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.year} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    {isEven ? (
                      <>
                        {/* Content Left */}
                        <div className="w-1/2 pr-12 text-right">
                          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                            <div className="inline-block text-3xl font-bold text-gray-900 mb-2">
                              {event.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Icon Center */}
                        <div className="relative z-10">
                          <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Empty Right */}
                        <div className="w-1/2 pl-12" />
                      </>
                    ) : (
                      <>
                        {/* Empty Left */}
                        <div className="w-1/2 pr-12" />
                        
                        {/* Icon Center */}
                        <div className="relative z-10">
                          <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Content Right */}
                        <div className="w-1/2 pl-12">
                          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                            <div className="inline-block text-3xl font-bold text-gray-900 mb-2">
                              {event.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${event.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            {event.year}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}