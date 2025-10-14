'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function CareerApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      cv: file
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Başvurunuz başarıyla gönderildi! Size en kısa sürede dönüş yapacağız.')
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      cv: null
    })
    
    setIsSubmitting(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Application Process */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Başvuru Süreci
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Parla Travel ailesine katılmak için basit adımları takip edin.
              Başvuru süreciniz boyunca sizinle iletişimde olacağız.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Online Başvuru
                  </h3>
                  <p className="text-gray-600">
                    Formu doldurun ve CV'nizi yükleyin. Başvurunuz insan kaynakları ekibimize iletilecek.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    İlk Değerlendirme
                  </h3>
                  <p className="text-gray-600">
                    CV'niz ve başvuru bilgileriniz pozisyon gereksinimleri doğrultusunda değerlendirilir.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Telefon Görüşmesi
                  </h3>
                  <p className="text-gray-600">
                    Uygun görülen adaylarla telefon üzerinden ön görüşme gerçekleştirilir.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Yüz Yüze Mülakat
                  </h3>
                  <p className="text-gray-600">
                    Ofisimizde teknik ve kişisel yetkinliklerinizi değerlendireceğimiz detaylı mülakat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Karar & Teklif
                  </h3>
                  <p className="text-gray-600">
                    Başarılı adaylara iş teklifi sunulur ve işe başlangıç süreci planlanır.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                İletişim Bilgileri
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">kariyer@parlatravel.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+90 (212) 555-0123</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Başvuru Formu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Soyad *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Başvurduğunuz Pozisyon *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Pozisyon Seçin</option>
                  <option value="tur-rehberi">Profesyonel Tur Rehberi</option>
                  <option value="rezervasyon-uzmanı">Rezervasyon Uzmanı</option>
                  <option value="seyahat-danısmani">Seyahat Danışmanı</option>
                  <option value="operasyon-uzmanı">Operasyon Uzmanı</option>
                  <option value="satis-temsilcisi">Satış Temsilcisi</option>
                  <option value="musteri-hizmetleri">Müşteri Hizmetleri</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Deneyim Süresi
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Seçin</option>
                  <option value="0-1">0-1 yıl</option>
                  <option value="1-3">1-3 yıl</option>
                  <option value="3-5">3-5 yıl</option>
                  <option value="5-10">5-10 yıl</option>
                  <option value="10+">10+ yıl</option>
                </select>
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  CV Yükle (PDF, DOC, DOCX) *
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Ek Bilgiler
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Kendinizi tanıtın ve neden Parla Travel'da çalışmak istediğinizi belirtin..."
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuru Gönder'}
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * ile işaretli alanlar zorunludur. Kişisel verileriniz KVKK kapsamında korunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}