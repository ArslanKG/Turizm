'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesHero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&crop=center&q=90"
          alt="Hizmetlerimiz"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-[10%] w-full">
          <div className="max-w-4xl text-left">
            {/* Breadcrumb */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <span>{t('nav.home')}</span>
                <span>/</span>
                <span className="text-orange-300">{t('nav.services')}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="font-display mb-4" style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  lineHeight: '1.1',
                  color: 'white',
                  fontWeight: '700'
                }}>
                <span className="block mb-2">{t('services-hero.professional')}</span>
                <span className="block">{t('services-hero.services')}</span>
              </h1>
              
              {/* Accent Line */}
              <div style={{
                  width: '50%',
                  height: '3px',
                  background: 'white',
                  borderRadius: '2px'
                }}>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p style={{
                   fontSize: 'clamp(18px, 1.5vw, 24px)',
                   color: '#E5E7EB',
                   fontWeight: '400',
                   lineHeight: '1.6',
                   maxWidth: '70%'
                 }}
                 className="max-w-[70%]">
                {t('services-hero.description')}
                <strong className="font-medium text-orange-300"> {t('services-hero.description.highlight')}</strong>.
              </p>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-white/70">{t('stats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">650+</div>
                <div className="text-sm text-white/70">{t('services-hero.stats.tours')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">12000+</div>
                <div className="text-sm text-white/70">{t('services-hero.stats.visitors')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Established Year */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-white/50 text-xs font-normal tracking-wider">
          {t('services-hero.established')}
        </div>
      </div>
    </section>
  );
}