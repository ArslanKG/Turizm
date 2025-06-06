'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function CareerHero() {
  const scrollToPositions = () => {
    const positionsSection = document.getElementById('positions')
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop"
          alt="Parla Group Kariyer"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-700/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Geleceği Birlikte
            <span className="block text-orange-400">İnşa Edelim</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Parla Group olarak kentsel dönüşüm ve inşaat sektöründe öncü 
            projelerimizle gelecek nesillere yaşanabilir şehirler bırakıyoruz. 
            Profesyonel ekibimize katılın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={scrollToPositions}
            >
              Açık Pozisyonlar
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
            >
              CV Gönder
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-400">150+</div>
              <div className="text-sm text-gray-300">Çalışan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-300">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}