'use client';

import { MapPin, Navigation, Car, Train } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizi Ziyaret Edin
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Merkez ofisimiz İstanbul'un kalbinde, ulaşım açısından son derece kolay bir konumda bulunuyor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              {/* Google Maps Embed */}
              <div className="aspect-[4/3] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8944962736677!2d29.013966!3d41.081906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sMaslak%2C%20Maslak%20Meydan%20Sk.%2C%2034485%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1702123456789!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Merkez Ofis Konumu</h4>
                    <p className="text-sm text-gray-600">Maslak Mahallesi, Büyükdere Cad. No:123</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Maslak,+Maslak+Meydan+Sk.,+34485+Sar%C4%B1yer%2F%C4%B0stanbul/@41.081906,29.013966,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-300 text-white font-medium rounded-lg hover:bg-orange-400 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Yol Tarifi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-300 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Tam Adres</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Maslak Mahallesi<br />
                Büyükdere Caddesi No: 123<br />
                Kat: 8, Daire: 15<br />
                34485 Sarıyer/İstanbul
              </p>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ulaşım Seçenekleri</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Train className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Metro</h4>
                    <p className="text-sm text-gray-600">M2 Şişli-Mecidiyeköy Metro</p>
                    <p className="text-xs text-gray-500">5 dakika yürüme mesafesi</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Otomobil</h4>
                    <p className="text-sm text-gray-600">Büyükdere Cad. üzerinden</p>
                    <p className="text-xs text-gray-500">Vale park hizmeti mevcut</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-600">BUS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Otobüs</h4>
                    <p className="text-sm text-gray-600">42T, 42M hatları</p>
                    <p className="text-xs text-gray-500">Maslak durağında inin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Park Bilgileri</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Vale Park</span>
                  <span className="text-sm text-orange-600 font-semibold">Ücretsiz</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Otopark Kapasitesi</span>
                  <span className="text-sm text-gray-600">50 araç</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Çalışma Saatleri</span>
                  <span className="text-sm text-gray-600">24/7</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/60 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Not:</strong> Misafir park alanları mevcut. Ziyaret öncesi arayarak rezervasyon yaptırabilirsiniz.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://www.google.com/maps/dir//Maslak,+Maslak+Meydan+Sk.,+34485+Sar%C4%B1yer%2F%C4%B0stanbul/@41.081906,29.013966,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Navigation className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Google Maps'te Aç</h4>
                <p className="text-sm text-gray-600">Detaylı yol tarifi için</p>
              </div>
            </div>
          </a>

          <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 text-left group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Car className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Park Rezervasyonu</h4>
                <p className="text-sm text-gray-600">Önceden yer ayırtın</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}