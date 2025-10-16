'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const tours = [
  {
    id: 1,
    title: 'tours-page.tour.istanbul-culture.title',
    category: 'tours-page.tour.istanbul-culture.category',
    categoryId: 'cultural',
    slug: 'istanbul-kultur-turu',
    location: 'tours-page.tour.istanbul-culture.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.istanbul-culture.description'
  },
  {
    id: 2,
    title: 'tours-page.tour.cappadocia-balloon.title',
    category: 'tours-page.tour.cappadocia-balloon.category',
    categoryId: 'adventure',
    slug: 'kapadokya-balon-turu',
    location: 'tours-page.tour.cappadocia-balloon.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.cappadocia-balloon.description'
  },
  {
    id: 3,
    title: 'tours-page.tour.pamukkale-nature.title',
    category: 'tours-page.tour.pamukkale-nature.category',
    categoryId: 'nature',
    slug: 'pamukkale-doga-turu',
    location: 'tours-page.tour.pamukkale-nature.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.pamukkale-nature.description'
  },
  {
    id: 4,
    title: 'tours-page.tour.antalya-city.title',
    category: 'tours-page.tour.antalya-city.category',
    categoryId: 'city',
    slug: 'antalya-sehir-turu',
    location: 'tours-page.tour.antalya-city.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.antalya-city.description'
  },
  {
    id: 5,
    title: 'tours-page.tour.ephesus-ancient.title',
    category: 'tours-page.tour.ephesus-ancient.category',
    categoryId: 'cultural',
    slug: 'efes-antik-kenti-turu',
    location: 'tours-page.tour.ephesus-ancient.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.ephesus-ancient.description'
  },
  {
    id: 6,
    title: 'tours-page.tour.blacksea-highlands.title',
    category: 'tours-page.tour.blacksea-highlands.category',
    categoryId: 'nature',
    slug: 'karadeniz-yaylalar-turu',
    location: 'tours-page.tour.blacksea-highlands.location',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=90',
    description: 'tours-page.tour.blacksea-highlands.description'
  }
];

interface ToursGridProps {
  activeCategory: string;
}

export default function ToursGrid({ activeCategory }: ToursGridProps) {
  const { t } = useLanguage();
  const [hoveredTour, setHoveredTour] = useState<number | null>(null);

  // Filter tours based on active category
  const filteredTours = activeCategory === 'all'
    ? tours
    : tours.filter(tour => tour.categoryId === activeCategory);

  // Get category label for display
  const getCategoryLabel = (categoryId: string) => {
    const categoryMap = {
      'all': t('tours-page.grid.category.all'),
      'cultural': t('tours-page.grid.category.cultural'),
      'nature': t('tours-page.grid.category.nature'),
      'adventure': t('tours-page.grid.category.adventure'),
      'city': t('tours-page.grid.category.city')
    };
    return categoryMap[categoryId as keyof typeof categoryMap] || t('tours-page.grid.category.tours');
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {getCategoryLabel(activeCategory)}
          </h2>
          <p className="text-gray-600">
            {filteredTours.length} {t('tours-page.grid.tours-found')}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/turlar/${tour.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <div className="inline-block bg-orange-300/90 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {t(tour.category)}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredTour === tour.id && (
                  <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center animate-fade-in-up">
                    <div className="text-center text-white">
                      <Eye className="h-12 w-12 mx-auto mb-4" />
                      <div className="font-medium">{t('tours-page.grid.view-tour')}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {t(tour.title)}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(tour.description)}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{t(tour.location)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.year}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">{t('tours-page.grid.tour-details')}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center py-4 px-8 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            <span className="mr-2">{t('tours-page.grid.load-more')}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}