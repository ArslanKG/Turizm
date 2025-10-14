'use client';

import Link from 'next/link';
import { ArrowRight, Download, Share2 } from 'lucide-react';

export default function ProjectsCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hayalinizdeki Seyahati
            <span className="block text-orange-300">Birlikte Planlayalım</span>
          </h2>
          
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            650'den fazla başarılı tur deneyimimizle sizin de hayalinizdeki seyahati gerçekleştirebiliriz.
            <strong className="text-orange-300"> Unutulmaz anılar yaratıyoruz</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/iletisim" className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="mr-2">Seyahatinizi Planlayın</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <button className="inline-flex items-center justify-center py-4 px-8 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              <Download className="h-5 w-5 mr-2" />
              <span>Tur Kataloğu İndir</span>
            </button>

            <button className="inline-flex items-center justify-center py-4 px-8 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              <Share2 className="h-5 w-5 mr-2" />
              <span>Paylaş</span>
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">650+</div>
              <div className="text-gray-400">Düzenlenen Tur</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">15+</div>
              <div className="text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">12000+</div>
              <div className="text-gray-400">Mutlu Ziyaretçi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">45+</div>
              <div className="text-gray-400">Destinasyon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}