'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mehmet Demir',
    company: 'Ankara',
    rating: 5,
    comment: 'Parla Travel ile Kapadokya turumuza katıldık. Profesyonel rehberlik hizmetleri ve mükemmel organizasyon ile unutulmaz bir deneyim yaşadık.'
  },
  {
    name: 'Ayşe Çelik',
    company: 'İzmir',
    rating: 5,
    comment: 'İstanbul kültür turumuzda gösterdikleri özen ve bilgi birikimi gerçekten takdire şayan. Her detay düşünülmüş, harika bir seyahatti.'
  }
];

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seyahatinizi Birlikte
              <span className="block text-orange-300">Planlayalım</span>
            </h2>
            
            <div className="w-24 h-1 bg-white mb-8"></div>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              15 yıllık deneyimimiz ve uzman ekibimizle seyahatinizi en iyi şekilde organize ediyoruz.
              <strong className="text-orange-300"> Unutulmaz deneyimler yaşatıyoruz</strong>.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Telefon</div>
                  <div className="text-orange-300">+90 212 555 0156</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">E-posta</div>
                  <div className="text-orange-300">info@parlagroup.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium">Adres</div>
                  <div className="text-orange-300">Taksim, İstanbul</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="mr-2">Tur Fiyatları Al</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a href="tel:+902125550156" className="inline-flex items-center justify-center py-4 px-8 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Phone className="h-5 w-5 mr-2" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Müşteri <span className="text-orange-300">Yorumları</span>
            </h3>
            
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-blue-100 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-sm text-orange-300">{testimonial.company}</div>
                  </div>
                  <div className="w-12 h-12 bg-orange-300/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">650+</div>
                <div className="text-sm text-blue-200">Düzenlenen Tur</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">15+</div>
                <div className="text-sm text-blue-200">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">12000+</div>
                <div className="text-sm text-blue-200">Mutlu Ziyaretçi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-bold text-white mb-2">
              24/7 Müşteri Desteği
            </h4>
            <p className="text-blue-200">
              Seyahatinizle ilgili her konuda size destek olmaya hazırız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}