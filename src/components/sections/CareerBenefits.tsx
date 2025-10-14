'use client'

const benefits = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Rekabetçi Maaş',
    description: 'Sektör standartlarının üzerinde maaş ve performans primi'
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Sağlık Sigortası',
    description: 'Kapsamlı özel sağlık sigortası ve aile üyelerine kapsam'
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Eğitim & Gelişim',
    description: 'Sürekli eğitim programları ve kişisel gelişim desteği'
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Esnek Çalışma',
    description: 'Hybrid çalışma modeli ve esnek mesai saatleri'
  },
  {
    id: 5,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Yemek & Ulaşım',
    description: 'Yemek kartı ve ulaşım desteği'
  },
  {
    id: 6,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Kariyer Fırsatları',
    description: 'Hızlı terfi imkanları ve liderlik programları'
  },
  {
    id: 7,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Takım Ruhu',
    description: 'Güçlü takım kültürü ve sosyal etkinlikler'
  },
  {
    id: 8,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Modern Ofis',
    description: 'Teknoloji ile donatılmış modern çalışma alanları'
  }
]

export default function CareerBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Çalışan Avantajları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parla Travel ailesi olmanın ayrıcalıklarını keşfedin.
            Çalışanlarımızın mutluluğu ve gelişimi bizim için öncelik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">45+</div>
              <div className="text-orange-100">Mutlu Çalışan</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">%98</div>
              <div className="text-orange-100">Çalışan Memnuniyeti</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">%85</div>
              <div className="text-orange-100">İç Terfi Oranı</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Çalışanlarımız Ne Diyor?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AS
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Ahmet Şahin</div>
                  <div className="text-gray-600 text-sm">Tur Operasyon Uzmanı</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Parla Travel'da çalışmaya başladığımdan beri hem profesyonel hem de kişisel gelişimimi destekleyen bir ortamda bulunuyorum. Turizm sektöründeki deneyimim burada katlanarak arttı!"
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  ZK
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Zeynep Kaya</div>
                  <div className="text-gray-600 text-sm">Turist Rehberi</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Rehberlik yeteneğimi sergileyebileceğim turlar ve destekleyici yönetim anlayışı sayesinde kendimi sürekli geliştiriyorum. Her gün farklı insanlarla tanışmak harika!"
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MT
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Mehmet Türk</div>
                  <div className="text-gray-600 text-sm">Rezervasyon Uzmanı</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Teknoloji ile donatılmış ofisimiz ve esnek çalışma saatleri sayesinde iş-yaşam dengemizi çok iyi kurabiliyoruz. Turizm sektöründe çalışmak gerçekten keyifli!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}