'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  year: number;
  category: 'kentsel-donusum' | 'insaat' | 'mimarlik';
  image: string;
  area: string;
  description: string;
  slug: string;
  featured: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: '1',
    title: 'Kadıköy Kentsel Dönüşüm Projesi',
    location: 'Kadıköy, İstanbul',
    year: 2023,
    category: 'kentsel-donusum',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
    area: '45.000 m²',
    description: 'Modern yaşam alanları ile tarihî dokuyu harmanlayan öncü kentsel dönüşüm projesi.',
    slug: 'kadikoy-kentsel-donusum',
    featured: true
  },
  {
    id: '2',
    title: 'Beyoğlu Rezidans Kompleksi',
    location: 'Beyoğlu, İstanbul',
    year: 2023,
    category: 'insaat',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
    area: '28.000 m²',
    description: 'Lüks konut ve ticari alanların bir arada bulunduğu modern yaşam kompleksi.',
    slug: 'beyoglu-rezidans',
    featured: true
  },
  {
    id: '3',
    title: 'Ataşehir İş Merkezi',
    location: 'Ataşehir, İstanbul',
    year: 2022,
    category: 'mimarlik',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
    area: '32.000 m²',
    description: 'Sürdürülebilir mimari yaklaşımıyla tasarlanan A+ ofis kompleksi.',
    slug: 'atasehir-is-merkezi',
    featured: true
  },
  {
    id: '4',
    title: 'Üsküdar Sahil Projesi',
    location: 'Üsküdar, İstanbul',
    year: 2024,
    category: 'kentsel-donusum',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center',
    area: '15.000 m²',
    description: 'Boğaz manzaralı sahil şeridinin modern yaşam alanlarına dönüşümü.',
    slug: 'uskudar-sahil',
    featured: true
  }
];

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'kentsel-donusum', label: 'Kentsel Dönüşüm' },
  { id: 'insaat', label: 'İnşaat' },
  { id: 'mimarlik', label: 'Mimarlık' }
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = featuredProjects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'kentsel-donusum':
        return 'bg-orange-100 text-orange-700';
      case 'insaat':
        return 'bg-orange-100 text-orange-700';
      case 'mimarlik':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'kentsel-donusum':
        return 'Kentsel Dönüşüm';
      case 'insaat':
        return 'İnşaat';
      case 'mimarlik':
        return 'Mimarlık';
      default:
        return category;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl font-display mb-4">
            <span className="text-gradient">Öne Çıkan Projelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            İstanbul'un en prestijli lokasyonlarında gerçekleştirdiğimiz öncü projelerle 
            şehrin siluetini değiştiriyoruz.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === category.id
                    ? 'bg-orange-300 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getCategoryColor(project.category)
                  )}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/projeler/${project.slug}`}
                    className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center"
                  >
                    Detayları Görüntüle
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-orange-600">{project.area}</span> Toplam Alan
                  </div>
                  
                  <Link
                    href={`/projeler/${project.slug}`}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 flex items-center"
                  >
                    İncele
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Tüm projelerimizi görmek ve detaylı bilgi almak için portfolyomuzu inceleyin.
          </p>
          <Link href="/projeler">
            <Button variant="orange" size="lg">
              Tüm Projeler
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}