'use client';

import Image from 'next/image';

export default function ProjectsHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&h=1080&fit=crop&crop=center&q=90"
          alt="Turlarımız"
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
                <span>Ana Sayfa</span>
                <span>/</span>
                <span className="text-orange-300">Turlarımız</span>
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
                <span className="block mb-2">Popüler</span>
                <span className="block">Turlarımız</span>
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
                650'den fazla başarılı tur deneyimimizle kültür gezilerinden doğa turlarına kadar geniş bir portföy sunuyoruz,
                <strong className="font-medium text-orange-300"> unutulmaz anılar yaratıyoruz</strong>.
              </p>
            </div>

            {/* Project Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏢</span>
                </div>
                <div className="text-white font-medium mb-1">Kültür Turları</div>
                <div className="text-sm text-white/70">220+ Tur</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏨</span>
                </div>
                <div className="text-white font-medium mb-1">Konaklama</div>
                <div className="text-sm text-white/70">180+ Tur</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧭</span>
                </div>
                <div className="text-white font-medium mb-1">Rehberlik</div>
                <div className="text-sm text-white/70">150+ Tur</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✈️</span>
                </div>
                <div className="text-white font-medium mb-1">Özel Turlar</div>
                <div className="text-sm text-white/70">100+ Tur</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Established Year */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-white/50 text-xs font-normal tracking-wider">
          EST. 2008
        </div>
      </div>
    </section>
  );
}