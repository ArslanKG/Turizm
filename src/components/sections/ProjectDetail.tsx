'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, User, Building, CheckCircle, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: string;
  area: string;
  status: string;
  description: string;
  features: string[];
  images: string[];
  client: string;
  coordinator: string;
  partner: string;
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tamamlandı':
        return 'bg-green-100 text-green-700';
      case 'Devam Ediyor':
        return 'bg-orange-100 text-orange-700';
      case 'Planlama Aşamasında':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/projeler"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Projeler</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                    {project.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
                
                <div className="w-24 h-1 bg-orange-300"></div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">{project.area}</div>
                  <div className="text-gray-400 text-sm">Tur Süresi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">{project.year}</div>
                  <div className="text-gray-400 text-sm">Tamamlanma Yılı</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={project.images[activeImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex gap-2 mt-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index ? 'border-orange-300' : 'border-white/20'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proje Özellikleri</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proje Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Konum</div>
                        <div className="text-gray-600">{project.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Yıl</div>
                        <div className="text-gray-600">{project.year}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Müşteri</div>
                        <div className="text-gray-600">{project.client}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Koordinatör</div>
                        <div className="text-gray-600">{project.coordinator}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">İş Ortağı</div>
                        <div className="text-gray-600">{project.partner}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Benzer Bir Proje mi İstiyorsunuz?
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Bu projeye benzer bir çalışma için bizimle iletişime geçin.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 w-full justify-center py-3 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-colors"
                  >
                    <span>İletişime Geç</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diğer Projelerimiz
            </h2>
            <p className="text-gray-600">
              Portfolyomuzdaki diğer başarılı projeleri keşfedin.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105"
            >
              <span>Tüm Projeleri Görüntüle</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}