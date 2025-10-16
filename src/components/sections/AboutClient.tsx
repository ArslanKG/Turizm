'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, X, Calendar, Target, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutHeroClient() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1920&h=1080&fit=crop&crop=center"
          alt={t('about.hero.alt.turkey')}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 right-40 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
              <span className="block">{t('about.hero.title.turkey')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {t('about.hero.title.discovery')}
              </span>
              <span className="block">{t('about.hero.title.invite')}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('about.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/hakkimizda">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  {t('about.hero.cta.story')}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center !whitespace-nowrap min-w-fit flex-nowrap px-8 py-4 text-lg"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <span className="mr-2 flex-shrink-0">▶</span>
                {t('about.hero.cta.video')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1250+</div>
                <div className="text-sm text-gray-400">{t('about.hero.stats.guests')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">{t('about.hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">350+</div>
                <div className="text-sm text-gray-400">{t('about.hero.stats.tours')}</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop&crop=center"
                    alt={t('about.hero.alt.istanbul')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop&crop=center"
                    alt={t('about.hero.alt.culture')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=200&fit=crop&crop=center"
                    alt={t('about.hero.alt.travel')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                    alt={t('about.hero.alt.destinations')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
              {t('about.hero.badge.experience')}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title={t('about.hero.video.title')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

interface StorySection {
  id: string;
  year: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  stats?: {
    labelKey: string;
    valueKey: string;
  }[];
}

export function CompanyStoryClient() {
  const [activeSection, setActiveSection] = useState(0);
  const { t } = useLanguage();

  const storyData: StorySection[] = [
    {
      id: 'foundation',
      year: t('about.story.foundation.year'),
      titleKey: 'about.story.foundation.title',
      descriptionKey: 'about.story.foundation.description',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop&crop=center',
      icon: Calendar,
      stats: [
        { labelKey: 'about.story.foundation.stat1.label', valueKey: 'about.story.foundation.stat1.value' },
        { labelKey: 'about.story.foundation.stat2.label', valueKey: 'about.story.foundation.stat2.value' }
      ]
    },
    {
      id: 'expansion',
      year: t('about.story.expansion.year'),
      titleKey: 'about.story.expansion.title',
      descriptionKey: 'about.story.expansion.description',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop&crop=center',
      icon: Target,
      stats: [
        { labelKey: 'about.story.expansion.stat1.label', valueKey: 'about.story.expansion.stat1.value' },
        { labelKey: 'about.story.expansion.stat2.label', valueKey: 'about.story.expansion.stat2.value' }
      ]
    },
    {
      id: 'innovation',
      year: t('about.story.innovation.year'),
      titleKey: 'about.story.innovation.title',
      descriptionKey: 'about.story.innovation.description',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
      icon: Lightbulb,
      stats: [
        { labelKey: 'about.story.innovation.stat1.label', valueKey: 'about.story.innovation.stat1.value' },
        { labelKey: 'about.story.innovation.stat2.label', valueKey: 'about.story.innovation.stat2.value' }
      ]
    },
    {
      id: 'leadership',
      year: t('about.story.leadership.year'),
      titleKey: 'about.story.leadership.title',
      descriptionKey: 'about.story.leadership.description',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
      icon: Users,
      stats: [
        { labelKey: 'about.story.leadership.stat1.label', valueKey: 'about.story.leadership.stat1.value' },
        { labelKey: 'about.story.leadership.stat2.label', valueKey: 'about.story.leadership.stat2.value' }
      ]
    }
  ];

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
            <span className="text-gradient">{t('about.story.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.story.description')}
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
                        {t(section.titleKey)}
                      </h3>
                      
                      <p className={`text-sm transition-colors duration-300 ${
                        activeSection === index ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {t(section.descriptionKey)}
                      </p>

                      {/* Stats */}
                      {section.stats && activeSection === index && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {section.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center p-3 bg-white rounded-lg shadow-sm">
                              <div className="text-lg font-bold text-blue-600">{t(stat.valueKey)}</div>
                              <div className="text-xs text-gray-600">{t(stat.labelKey)}</div>
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
                alt={t(storyData[activeSection].titleKey)}
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
                <h3 className="text-xl font-bold mb-2">{t(storyData[activeSection].titleKey)}</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.story.mission.title')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.story.mission.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}