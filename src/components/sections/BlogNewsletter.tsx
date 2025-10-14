'use client';

import { Mail, Bell, Users, TrendingUp } from 'lucide-react';

export default function BlogNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 80l80-80h-80v80zm80 0v-80h-80l80 80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog Güncellemelerini 
            <span className="block text-orange-300">Kaçırmayın</span>
          </h2>
          
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seyahatteki en güncel destinasyonları, rehber önerilerini ve özel tur fırsatlarını e-posta adresinize gönderiyor,
            <strong className="text-orange-300"> keşifte öncü olmanızı sağlıyoruz</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Newsletter Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">E-Bülten</h3>
                  <p className="text-gray-400">Haftalık güncellemeler</p>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Adınız (İsteğe bağlı)
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-orange-300 border-gray-300 rounded focus:ring-orange-300"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    KVKK kapsamında kişisel verilerimin işlenmesini ve e-posta güncellemeleri almayı kabul ediyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  E-Bültene Abone Ol
                </button>
              </form>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6">
                Neler Kazanacaksınız?
              </h3>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Öncelikli Bilgilendirme
                  </h4>
                  <p className="text-gray-300">
                    Yeni destinasyon rehberleri ve özel tur fırsatlarından ilk siz haberdar olun.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Destinasyon Analizleri
                  </h4>
                  <p className="text-gray-300">
                    Detaylı destinasyon rehberleri ve seyahat önerileri.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Özel Tur Fırsatları
                  </h4>
                  <p className="text-gray-300">
                    Sadece abone olanlara özel tur indirimleri ve erken rezervasyon fırsatları.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">5K+</div>
                <div className="text-gray-400">Aktif Abone</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">%98</div>
                <div className="text-gray-400">Memnuniyet Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}