'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AboutHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center"
          alt="Modern Architecture"
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
              <span className="block">Şehirlerin</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Geleceğini
              </span>
              <span className="block">Şekillendiriyoruz</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              15+ yıldır kentsel dönüşüm, inşaat ve mimarlık alanlarında 
              öncü projeler gerçekleştiren güçlü bir ekibiz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/hakkimizda">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Hikayemizi Keşfedin
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center !whitespace-nowrap min-w-fit flex-nowrap px-8 py-4 text-lg"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <span className="mr-2 flex-shrink-0">▶</span>
                Tanıtım Videosu
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">125+</div>
                <div className="text-sm text-gray-400">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5000+</div>
                <div className="text-sm text-gray-400">Mutlu Müşteri</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center"
                    alt="Modern Building"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop&crop=center"
                    alt="Construction Site"
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
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=200&fit=crop&crop=center"
                    alt="Urban Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center"
                    alt="Architecture"
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
              15+ Yıl Deneyim
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
                title="Parla Group Tanıtım Videosu"
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