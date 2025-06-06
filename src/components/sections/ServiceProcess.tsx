'use client';

import { useState } from 'react';
import { ClipboardList, Users, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Analiz & Planlama',
    description: 'Projenizin gereksinimlerini detaylı olarak analiz ediyor, kapsamlı planlamalar yapıyoruz.',
    icon: ClipboardList,
    duration: '1-2 Hafta',
    details: [
      'İhtiyaç analizi ve fizibilite çalışması',
      'Bütçe planlaması ve zaman çizelgesi',
      'Risk analizi ve önlem planları',
      'Yasal süreçlerin değerlendirilmesi'
    ]
  },
  {
    id: 2,
    title: 'Tasarım & Konsept',
    description: 'Uzman tasarım ekibimizle projenize özel çözümler geliştiriyor, modern tasarımlar sunuyoruz.',
    icon: Users,
    duration: '2-6 Hafta',
    details: [
      'Konsept tasarım ve 3D görselleştirme',
      'Malzeme seçimi ve teknik detaylar',
      'Revizyon ve optimizasyon süreci',
      'Nihai tasarımın onaylanması'
    ]
  },
  {
    id: 3,
    title: 'Uygulama & İnşaat',
    description: 'Kaliteli işçilik ve modern teknolojilerle projelerinizi hayata geçiriyor, güvenli inşaatlar yapıyoruz.',
    icon: Cog,
    duration: '3-18 Ay',
    details: [
      'İnşaat ekiplerinin sahaya yerleşimi',
      'Günlük ilerleme takibi ve raporlama',
      'Kalite kontrol ve güvenlik önlemleri',
      'Müşteri ile düzenli bilgilendirme'
    ]
  },
  {
    id: 4,
    title: 'Teslim & Garanti',
    description: 'Projelerinizi zamanında teslim ediyor ve kapsamlı garanti hizmetleri sağlıyoruz.',
    icon: CheckCircle,
    duration: '1 Hafta',
    details: [
      'Final kontrol ve kalite testi',
      'Resmi teslim ve dokümantasyon',
      'Kullanım eğitimi ve rehberlik',
      '2 yıl kapsamlı garanti hizmeti'
    ]
  }
];

export default function ServiceProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Çalışma <span className="text-orange-300">Sürecimiz</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her projede sistematik bir yaklaşım benimsiyor, kaliteli sonuçlar için 
            dört aşamalı süreç takip ediyoruz.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;

              return (
                <div 
                  key={step.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200"></div>
                  )}

                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-blue-500 shadow-2xl' 
                      : isCompleted
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    {/* Step Number & Icon */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-600 text-white' 
                          : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${
                            isActive ? 'text-blue-600' : 'text-gray-900'
                          }`}>
                            {step.title}
                          </h3>
                          <span className="bg-orange-300/20 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Details - Show when active */}
                    {isActive && (
                      <div className="mt-6 animate-fade-in-up">
                        <h4 className="font-semibold text-gray-900 mb-3">Bu Aşamada:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Arrow for active step */}
                    {isActive && (
                      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-blue-600 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Visualization */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Adım {activeStep}: {processSteps[activeStep - 1]?.title}
                  </h3>
                  <p className="text-gray-600">
                    {processSteps[activeStep - 1]?.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Proje İlerlemesi</span>
                    <span className="text-sm font-medium text-blue-600">
                      {Math.round((activeStep / processSteps.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(activeStep / processSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Duration Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Tahmini Süre</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {processSteps[activeStep - 1]?.duration}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-orange-300/20 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    disabled={activeStep === 1}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors duration-300"
                  >
                    Önceki Adım
                  </button>
                  <button 
                    onClick={() => setActiveStep(Math.min(processSteps.length, activeStep + 1))}
                    disabled={activeStep === processSteps.length}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-300"
                  >
                    Sonraki Adım
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}