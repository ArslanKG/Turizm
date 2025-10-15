'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Star, Shield, Clock, Users, Sparkles, Phone } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  features: string[];
  stats: Array<{ label: string; value: string }>;
  images: string[];
  category: string;
}

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(service.stats.map(() => '0'));

  // Animate stats on mount
  useEffect(() => {
    const timers = service.stats.map((stat, index) => {
      const targetValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
      let current = 0;
      const increment = targetValue / 50;
      
      return setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = stat.value;
            return newStats;
          });
          clearInterval(timers[index]);
        } else {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current).toString() + (stat.value.includes('+') ? '+' : '') + (stat.value.includes('%') ? '%' : '');
            return newStats;
          });
        }
      }, 30);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, [service.stats]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-amber-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400/20 to-amber-600/20 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                    {service.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-amber-300 font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.subtitle}
                </h2>
                
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/50"></div>
                
                <p className="text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Image with Glassmorphism */}
            <div className="relative lg:col-span-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Glassmorphism Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl z-10" />
                <Image
                  src={service.images[activeImageIndex]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Soft Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex gap-3 mt-6 justify-center">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                      activeImageIndex === index
                        ? 'border-amber-400 shadow-lg shadow-amber-500/50'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Floating Sparkle Effects */}
              <div className="absolute -top-8 -right-8 w-16 h-16 opacity-60">
                <Sparkles className="w-16 h-16 text-amber-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hizmet Özellikleri
              </h2>
              
              <div className="prose prose-xl mb-12">
                <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.detailedDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Info - Right Side */}
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Neden Bizi Seçmelisiniz?
              </h3>
              
              <div className="space-y-6">
                <div className="p-8 bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Star className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>15+ Yıl Deneyim</div>
                        <div className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>Turizm sektöründe kanıtlanmış başarı</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Uzman Rehber Ekibi</div>
                        <div className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>Profesyonel turizm uzmanları</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>7/24 Destek</div>
                        <div className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>Seyahatiniz boyunca kesintisiz hizmet</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Güvenlik Garantisi</div>
                        <div className="text-sm text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>Sigortalı ve güvenli seyahat deneyimi</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-3xl shadow-2xl shadow-slate-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5" />
                  <div className="relative">
                    <h4 className="text-2xl font-serif font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Premium Teklif Alın
                    </h4>
                    <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.title} hizmetimiz için özel fiyat teklifi ve detaylı program bilgisi alın.
                    </p>
                    <Link
                      href="/iletisim"
                      className="group relative inline-flex items-center gap-3 w-full justify-center py-4 px-8 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold rounded-2xl hover:from-amber-400 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Ücretsiz Teklif Al</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-300 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Diğer Premium Hizmetlerimiz
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Kapsamlı lüks turizm portföyümüzle tüm seyahat ihtiyaçlarınızı karşılıyoruz.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/hizmetler"
              className="group inline-flex items-center gap-4 py-6 px-12 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold rounded-2xl hover:from-amber-400 hover:to-amber-600 transition-all duration-500 transform hover:scale-105 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>Tüm Hizmetleri Keşfedin</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}