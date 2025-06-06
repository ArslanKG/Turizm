'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Yaşam Kompleksi',
    category: 'Kentsel Dönüşüm',
    location: 'Maslak, İstanbul',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Şehrin merkezinde sürdürülebilir yaşam alanları oluşturduk, modern mimari çözümler sunduk.'
  },
  {
    id: 2,
    title: 'Luxury Residence Tower',
    category: 'Mimari Tasarım',
    location: 'Bebek, İstanbul',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Boğaz manzaralı lüks konut projesi ile estetik tasarım sunuyoruz, özgün çözümler üretiyoruz.'
  },
  {
    id: 3,
    title: 'İş Merkezi Kompleksi',
    category: 'İnşaat',
    location: 'Levent, İstanbul',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Modern iş dünyasının ihtiyaçlarını karşılayan yapılar inşa ediyoruz, kaliteli çözümler sunuyoruz.'
  },
  {
    id: 4,
    title: 'Aile Konutu Projesi',
    category: 'Konut',
    location: 'Etiler, İstanbul',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Aile yaşamına uygun konforlu mekanlar tasarlıyoruz, yaşanabilir alanlar yaratıyoruz.'
  },
  {
    id: 5,
    title: 'Kültür ve Sanat Merkezi',
    category: 'Mimari Tasarım',
    location: 'Beyoğlu, İstanbul',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Kültürel miras ile modern tasarımı harmanlayan projeler üretiyoruz, yaratıcı çözümler sunuyoruz.'
  },
  {
    id: 6,
    title: 'Yeşil Konut Kompleksi',
    category: 'Kentsel Dönüşüm',
    location: 'Kadıköy, İstanbul',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'Çevre dostu teknolojilerle sürdürülebilir projeler geliştiriyoruz, yeşil çözümler üretiyoruz.'
  }
];

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <div className="inline-block bg-orange-300/90 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center animate-fade-in-up">
                    <div className="text-center text-white">
                      <Eye className="h-12 w-12 mx-auto mb-4" />
                      <div className="font-medium">Projeyi İncele</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">Detayları Gör</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center py-4 px-8 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            <span className="mr-2">Daha Fazla Proje</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}