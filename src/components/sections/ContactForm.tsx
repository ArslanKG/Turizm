'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Building, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seyahat Talebi Oluşturun
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unutulmaz bir seyahat deneyimi için aşağıdaki formu doldurun.
            Uzman ekibimiz 24 saat içinde sizinle iletişime geçerek kişiselleştirilmiş seyahat planınızı hazırlayacak.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Ad Soyad *
                      </div>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        E-posta *
                      </div>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Telefon *
                      </div>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Şirket/Kurum
                      </div>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder="Şirket Adı"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="kultur-turu">Kültür Turları</option>
                      <option value="ozel-tur">Özel Tur Organizasyonu</option>
                      <option value="otel-rezervasyon">Otel Rezervasyonu</option>
                      <option value="grup-turu">Grup Turları</option>
                      <option value="rehberlik">Profesyonel Rehberlik</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Bütçe Aralığı
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Bütçe seçiniz</option>
                      <option value="5k-15k">5.000 - 15.000 TL</option>
                      <option value="15k-30k">15.000 - 30.000 TL</option>
                      <option value="30k-50k">30.000 - 50.000 TL</option>
                      <option value="50k+">50.000 TL+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Seyahat Zamanı
                    </div>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Zaman seçiniz</option>
                    <option value="asap">En kısa sürede</option>
                    <option value="1-month">1 ay içinde</option>
                    <option value="3-months">3 ay içinde</option>
                    <option value="6-months">6 ay içinde</option>
                    <option value="flexible">Esnek</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Seyahat Detayları *
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Seyahat planınızın detaylarını, gitmek istediğiniz yerleri, özel taleplerinizi ve beklentilerinizi açıklayın..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-orange-300 border-gray-300 rounded focus:ring-orange-300"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    KVKK kapsamında kişisel verilerimin işlenmesini ve tarafımla iletişime geçilmesini kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Seyahat Talebini Gönder</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Form Gönderildikten Sonra
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Onay E-postası</h4>
                    <p className="text-sm text-gray-600">Talebiniz alındı mesajı anında e-postanıza gelir</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">İlk İletişim</h4>
                    <p className="text-sm text-gray-600">24 saat içinde uzman ekibimiz sizinle görüşür</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Detaylı Teklif</h4>
                    <p className="text-sm text-gray-600">3-5 gün içinde kapsamlı teklifimizi sunarız</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hızlı İletişim
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Acil durumlar için doğrudan aramayı tercih ediyorsanız:
                </p>
                <div className="space-y-2">
                  <a href="tel:+902125550123" className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Phone className="h-4 w-4" />
                    +90 212 555 0123
                  </a>
                  <a href="mailto:info@parlatravel.com" className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Mail className="h-4 w-4" />
                    info@parlatravel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}