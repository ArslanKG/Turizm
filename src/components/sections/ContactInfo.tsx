'use client';

import { MapPin, Clock, Users, Award, Target, Zap } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ofislerimiz & İletişim Bilgileri
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İstanbul merkezli ofisimizden Türkiye genelinde hizmet veriyoruz. 
            Size en yakın iletişim kanalını tercih edebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Office */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Merkez Ofis</h3>
                  <p className="text-orange-600 font-medium">İstanbul</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Maslak Mahallesi, Büyükdere Cad.<br />
                    No:123 Kat:8, Sarıyer/İstanbul
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:+902125550123" className="text-orange-600 hover:text-orange-700 transition-colors">
                    +90 212 555 0123
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <a href="mailto:info@parlatravel.com" className="text-orange-600 hover:text-orange-700 transition-colors">
                    info@parlatravel.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 09:00 - 14:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Office */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Rezervasyon Ofisi</h3>
                  <p className="text-gray-600 font-medium">Levent</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Levent Mahallesi, Büyükdere Cad.<br />
                    No:456 Kat:12, Beşiktaş/İstanbul
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:+902125550124" className="text-gray-600 hover:text-gray-800 transition-colors">
                    +90 212 555 0124
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <a href="mailto:rezervasyon@parlatravel.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                    rezervasyon@parlatravel.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Özel Saatler</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Pazartesi - Cumartesi: 10:00 - 19:00</p>
                    <p>Pazar: 11:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Office */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tur Operasyon Ofisi</h3>
                  <p className="text-gray-600 font-medium">Şişli</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Mecidiyeköy Mahallesi, Büyükdere Cad.<br />
                    No:789 Kat:5, Şişli/İstanbul
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:+902125550125" className="text-gray-600 hover:text-gray-800 transition-colors">
                    +90 212 555 0125
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <a href="mailto:operasyon@parlatravel.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                    operasyon@parlatravel.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Pazartesi - Cuma: 08:30 - 17:30</p>
                    <p>Cumartesi: Randevulu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Yanıt</h3>
            <p className="text-gray-600 text-sm">
              Tüm rezervasyon taleplerinize 1 saat içinde yanıt verme garantisi
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzman Rehberler</h3>
            <p className="text-gray-600 text-sm">
              Profesyonel turist rehberleri ve tur operasyon uzmanları
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenilir Hizmet</h3>
            <p className="text-gray-600 text-sm">
              15+ yıllık turizm deneyimi ve %98 misafir memnuniyeti
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">7/24 Seyahat Desteği</h3>
            <p className="text-gray-600 text-sm">
              Seyahatiniz boyunca kesintisiz destek hizmetimiz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}