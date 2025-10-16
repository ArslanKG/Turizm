'use client';

import { Shield, Heart, Lightbulb, Users, Leaf, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Value {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

export default function CompanyValues() {
  const { t } = useLanguage();

  const values: Value[] = [
    {
      id: 'quality',
      titleKey: 'about.values.quality.title',
      descriptionKey: 'about.values.quality.description',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 'trust',
      titleKey: 'about.values.trust.title',
      descriptionKey: 'about.values.trust.description',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'innovation',
      titleKey: 'about.values.innovation.title',
      descriptionKey: 'about.values.innovation.description',
      icon: Lightbulb,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 'teamwork',
      titleKey: 'about.values.teamwork.title',
      descriptionKey: 'about.values.teamwork.description',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 'sustainability',
      titleKey: 'about.values.sustainability.title',
      descriptionKey: 'about.values.sustainability.description',
      icon: Leaf,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      id: 'passion',
      titleKey: 'about.values.passion.title',
      descriptionKey: 'about.values.passion.description',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-3000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
            <span className="text-gradient">{t('about.values.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.values.description')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {t(value.titleKey)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(value.descriptionKey)}
                </p>

                {/* Hover Effect Lines */}
                <div className="mt-6 space-y-1">
                  <div className={`h-1 ${value.bgColor} rounded-full w-0 group-hover:w-full transition-all duration-500 delay-100`} />
                  <div className={`h-0.5 ${value.bgColor} rounded-full w-0 group-hover:w-3/4 transition-all duration-500 delay-200`} />
                  <div className={`h-0.5 ${value.bgColor} rounded-full w-0 group-hover:w-1/2 transition-all duration-500 delay-300`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Culture Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                  {t('about.values.culture.title')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t('about.values.culture.description')}
                </p>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{t('about.values.culture.stat1.value')}</div>
                    <div className="text-sm text-gray-600">{t('about.values.culture.stat1.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{t('about.values.culture.stat2.value')}</div>
                    <div className="text-sm text-gray-600">{t('about.values.culture.stat2.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{t('about.values.culture.stat3.value')}</div>
                    <div className="text-sm text-gray-600">{t('about.values.culture.stat3.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}