'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Tur Operasyon Uzmanı',
    department: 'Tur Operasyon',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    experience: '3+ yıl',
    description: 'Kültür turları ve özel tur organizasyonlarının planlama, koordinasyon ve operasyon süreçlerini yönetecek deneyimli tur operasyon uzmanı aranmaktadır.',
    requirements: [
      'Turizm İşletmeciliği veya İşletme mezunu',
      'Minimum 3 yıl tur operasyonu deneyimi',
      'Turizm acentesi operasyonları bilgisi',
      'İleri düzey MS Office ve rezervasyon sistemleri',
      'Güçlü organizasyon ve iletişim becerileri'
    ],
    responsibilities: [
      'Tur programlarının planlanması ve koordinasyonu',
      'Otel ve ulaşım rezervasyonları',
      'Rehber atamaları ve program takibi',
      'Misafir memnuniyeti kontrolü',
      'Operasyon raporları hazırlama'
    ]
  },
  {
    id: '2',
    title: 'Profesyonel Turist Rehberi',
    department: 'Rehberlik Hizmetleri',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    experience: '2+ yıl',
    description: 'İstanbul ve çevresinde kültür turları düzenleyecek, çoklu dil bilen profesyonel turist rehberi aranmaktadır.',
    requirements: [
      'Turist Rehberliği sertifikası',
      'Minimum 2 yıl rehberlik deneyimi',
      'İngilizce ve bir yabancı dil (Almanca/Fransızca/İspanyolca)',
      'Türk tarihi ve kültürü konularında bilgi',
      'Sunum ve grup yönetimi becerileri'
    ],
    responsibilities: [
      'Kültür turları rehberliği',
      'Müze ve tarihi alan gezileri',
      'Misafir güvenliği ve memnuniyeti',
      'Tur programlarına uyum',
      'Acil durum yönetimi'
    ]
  },
  {
    id: '3',
    title: 'Rezervasyon Uzmanı',
    department: 'Rezervasyon Hizmetleri',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    experience: '1-3 yıl',
    description: 'Otel rezervasyonları ve seyahat planlaması konularında uzman rezervasyon uzmanı aranmaktadır.',
    requirements: [
      'Turizm, İşletme veya ilgili bölüm mezunu',
      '1-3 yıl rezervasyon deneyimi',
      'Amadeus, Sabre gibi GDS sistemleri bilgisi',
      'Müşteri hizmetleri odaklı yaklaşım',
      'Detaycı ve dikkatli çalışma'
    ],
    responsibilities: [
      'Otel ve ulaşım rezervasyonları',
      'Fiyat araştırması ve teklif hazırlama',
      'Rezervasyon onayları ve iptal işlemleri',
      'Müşteri talep takibi',
      'Tedarikçi ilişkileri yönetimi'
    ]
  },
  {
    id: '4',
    title: 'Turizm Pazarlama Uzmanı',
    department: 'Pazarlama & Satış',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    experience: '2-4 yıl',
    description: 'Turizm hizmetlerinin pazarlanması ve satış süreçlerinde yer alacak dinamik pazarlama uzmanı aranmaktadır.',
    requirements: [
      'Pazarlama, İşletme veya Turizm mezunu',
      '2-4 yıl pazarlama deneyimi',
      'Dijital pazarlama ve sosyal medya bilgisi',
      'Google Analytics ve SEO temel bilgisi',
      'Yaratıcı düşünce ve analitik beceriler'
    ],
    responsibilities: [
      'Dijital pazarlama kampanyaları yönetimi',
      'Sosyal medya içerik üretimi',
      'Müşteri segmentasyonu ve hedefleme',
      'Turizm fuarları ve etkinlik organizasyonu',
      'Marka bilinirliği artırma çalışmaları'
    ]
  }
]

export default function CareerPositions() {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const departments = ['all', ...Array.from(new Set(jobPositions.map(job => job.department)))]
  
  const filteredPositions = filter === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.department === filter)

  return (
    <section id="positions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Açık Pozisyonlar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parla Travel ailesi olarak turizm sektöründe yetenekli profesyonelleri aramaktayız.
            Size uygun pozisyonu bulun ve kariyerinizi bizimle şekillendirin.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === dept
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {dept === 'all' ? 'Tümü' : dept}
            </button>
          ))}
        </div>

        {/* Job Positions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Positions List */}
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div
                key={position.id}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  selectedPosition?.id === position.id
                    ? 'border-orange-500'
                    : 'border-transparent hover:border-orange-200'
                }`}
                onClick={() => setSelectedPosition(position)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Deneyim</div>
                    <div className="font-semibold text-gray-900">{position.experience}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  Detayları Görüntüle
                </Button>
              </div>
            ))}
          </div>

          {/* Position Details */}
          <div className="lg:sticky lg:top-8">
            {selectedPosition ? (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedPosition.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Departman</div>
                    <div className="font-semibold">{selectedPosition.department}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Lokasyon</div>
                    <div className="font-semibold">{selectedPosition.location}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Çalışma Tipi</div>
                    <div className="font-semibold">{selectedPosition.type}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Deneyim</div>
                    <div className="font-semibold">{selectedPosition.experience}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Aranan Özellikler</h4>
                  <ul className="space-y-2">
                    {selectedPosition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sorumluluklar</h4>
                  <ul className="space-y-2">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  Bu Pozisyona Başvur
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v10m8-10v10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pozisyon Seçin
                </h3>
                <p className="text-gray-600">
                  Detayları görmek için soldaki pozisyonlardan birini seçin.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}