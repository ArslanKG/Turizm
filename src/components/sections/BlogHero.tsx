'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Eye } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Blog &{' '}
                <span className="text-orange-300">Haberler</span>
              </h1>
              
              <div className="w-24 h-1 bg-white"></div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Seyahat, turizm ve keşif dünyasındaki güncel gelişmeleri takip edin.
                <strong className="text-orange-300"> Uzman rehber önerilerimizi keşfedin</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">150+</div>
                <div className="text-gray-400 text-sm">Blog Yazısı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">25K+</div>
                <div className="text-gray-400 text-sm">Okuyucu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Kategori</div>
              </div>
            </div>
          </div>

          {/* Right Featured Article */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="aspect-video rounded-xl relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                  alt="2024 Seyahat Trendleri ve Destinasyon Rehberi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-orange-300 text-white text-sm font-medium rounded-lg">
                    Öne Çıkan
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  2024 Seyahat Trendleri ve Destinasyon Rehberi
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  2024 yılının en popüler destinasyonları ve seyahat trendleri hakkında
                  uzman rehberlerimizin detaylı analizi ve önerileri.
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>15 Mayıs 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Mehmet Seyhan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>1.2K</span>
                  </div>
                </div>
                
                <Link href="/blog/1" className="inline-flex items-center justify-center py-3 px-6 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105">
                  Devamını Oku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}