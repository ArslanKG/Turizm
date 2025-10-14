'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Eşsiz Türkiye Turları',
    subtitle: '',
    description: 'Türkiye\'nin zengin kültürel mirasını keşfedin, unutulmaz anılar biriktirin.',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&h=1080&fit=crop&crop=center&q=90',
    cta: {
      primary: 'Turlarımız',
      secondary: 'Hizmetlerimiz'
    }
  },
  {
    id: '2',
    title: 'Lüks Otel Rezervasyonları',
    subtitle: '',
    description: 'Konforlu konaklama seçenekleri ile tatil deneyiminizi mükemmel hale getiriyoruz.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&crop=center&q=90',
    cta: {
      primary: 'Oteller',
      secondary: 'Hizmetlerimiz'
    }
  },
  {
    id: '3',
    title: 'Kültür Gezileri ve Rehberlik',
    subtitle: '',
    description: 'Uzman rehberlerimiz eşliğinde tarihi ve kültürel zenginlikleri keşfedin.',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&h=1080&fit=crop&crop=center&q=90',
    cta: {
      primary: 'Kültür Turları',
      secondary: 'Hizmetlerimiz'
    }
  },
  {
    id: '4',
    title: 'Özel Tatil Paketleri',
    subtitle: '',
    description: 'Size özel hazırladığımız tatil paketleri ile hayalinizdeki seyahati yaşayın.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&crop=center&q=90',
    cta: {
      primary: 'Paketler',
      secondary: 'Hizmetlerimiz'
    }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images with True Crossfade */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: index === currentSlide ? 2 : 1,
              willChange: 'opacity'
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="100vw"
            />
            {/* Enhanced gradient overlay - bottom to top for text readability */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Company Established Year - minimal design */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-white/50 text-xs font-normal tracking-wider">
          EST. 2008
        </div>
      </div>

      {/* Content - Sabit Pozisyon */}
      <div className="absolute inset-0 z-20 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-[10%] sm:px-[10%] lg:px-[10%] w-full">
          <div className="max-w-none w-full text-left">
            {/* Sabit Pozisyon Container */}
            <div className="fixed-content-area">
              
              {/* Başlık - Sabit Yükseklik Artırıldı */}
              <div className="mb-6" style={{ height: '160px' }}>
                <h1 className="font-display" style={{
                    lineHeight: '1.2',
                    color: 'white',
                    fontWeight: '400'
                  }}>
                  <span className="block mb-3"
                        style={{
                          fontSize: 'clamp(32px, 4vw, 48px)',
                          letterSpacing: '1.2px',
                          fontWeight: '400'
                        }}>
                    {currentSlideData.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <span className="block"
                        style={{
                          fontSize: 'clamp(36px, 5vw, 60px)',
                          color: 'white',
                          fontWeight: '700'
                        }}>
                    {currentSlideData.title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>
              </div>
              
              {/* Beyaz Çizgi - Sabit */}
              <div className="mb-8">
                <div style={{
                    width: '50%',
                    height: '2px',
                    background: 'white',
                    borderRadius: '1px'
                  }}>
                </div>
              </div>
              
              {/* Açıklama - Sabit Yükseklik */}
              <div className="mb-10" style={{ height: '80px' }}>
                <p style={{
                     fontSize: 'clamp(16px, 1.2vw, 18px)',
                     color: '#E5E7EB',
                     fontWeight: '400',
                     lineHeight: '1.6',
                     maxWidth: '50%'
                   }}
                   className="w-full md:max-w-[50%] max-w-[80%]">
                  {(() => {
                    if (currentSlideData.description.includes('unutulmaz anılar biriktirin')) {
                      return (
                        <>
                          {currentSlideData.description.split(', unutulmaz anılar biriktirin')[0]},
                          <strong className="font-medium text-orange-300"> unutulmaz anılar biriktirin</strong>.
                        </>
                      );
                    } else if (currentSlideData.description.includes('mükemmel hale getiriyoruz')) {
                      return (
                        <>
                          {currentSlideData.description.split(' mükemmel hale getiriyoruz')[0]},
                          <strong className="font-medium text-orange-300"> mükemmel hale getiriyoruz</strong>.
                        </>
                      );
                    } else if (currentSlideData.description.includes('zenginlikleri keşfedin')) {
                      return (
                        <>
                          {currentSlideData.description.split(' zenginlikleri keşfedin')[0]},
                          <strong className="font-medium text-orange-300"> zenginlikleri keşfedin</strong>.
                        </>
                      );
                    } else if (currentSlideData.description.includes('seyahati yaşayın')) {
                      return (
                        <>
                          {currentSlideData.description.split(' seyahati yaşayın')[0]},
                          <strong className="font-medium text-orange-300"> seyahati yaşayın</strong>.
                        </>
                      );
                    } else {
                      return currentSlideData.description;
                    }
                  })()}
                </p>
              </div>
              
              {/* Butonlar - Sabit Pozisyon ve Tek Satır */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-4 w-full md:w-auto">
                <Link
                  href="/turlar"
                  className="group inline-flex items-center justify-center transition-all duration-200 ease-out hover:-translate-y-.5 whitespace-nowrap"
                  style={{
                    width: '200px',
                    height: '56px',
                    padding: '16px 20px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: '500',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    fontSize: '15px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                  }}
                >
                  <span style={{ marginRight: '6px' }}>
                    {currentSlideData.cta.primary}
                  </span>
                  <ArrowRight style={{ width: '16px', height: '16px', color: 'white' }} />
                </Link>
                
                <button
                  onClick={() => {
                    // Video modal açılacak
                    console.log('Tanıtım videosu açılacak');
                  }}
                  className="group inline-flex items-center justify-center transition-all duration-200 ease-out whitespace-nowrap"
                  style={{
                    width: '200px',
                    height: '56px',
                    padding: '16px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '15px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <Play style={{
                    marginRight: '6px',
                    width: '16px',
                    height: '16px',
                    color: 'white'
                  }} />
                  <span>
                    Keşif Videosu
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls - oval shaped */}
      <div className="absolute z-20 left-1/2 -translate-x-1/2" style={{ bottom: '32px' }}>
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-500 cursor-pointer rounded-full"
              style={{
                width: index === currentSlide ? '32px' : '16px',
                height: '8px',
                backgroundColor: index === currentSlide ? '#2D8EFF' : 'rgba(255, 255, 255, 0.5)',
                padding: '8px'
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Arrow Controls - 44px for touch */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center rounded-full text-white transition-all duration-300"
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft style={{ width: '20px', height: '20px' }} />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center rounded-full text-white transition-all duration-300"
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }}
        aria-label="Next slide"
      >
        <ChevronRight style={{ width: '20px', height: '20px' }} />
      </button>

      {/* Enhanced Scroll Indicator - minimal with down arrow */}
      <div
        className="absolute bottom-8 right-8 z-20 cursor-pointer group"
        onClick={() => {
          const nextSection = document.querySelector('#services-section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center text-white transition-all duration-300"
             style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          <span className="mb-2 text-sm font-normal">Kaydır</span>
          <ChevronDown className="animate-bounce" style={{ width: '20px', height: '20px' }} />
        </div>
      </div>
    </section>
  );
}