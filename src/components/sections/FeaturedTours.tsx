'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturedTour {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
  category: string;
  slug: string;
  area: string;
}

const featuredTours: FeaturedTour[] = [
  {
    id: '1',
    title: 'Kapadokya Büyülü Vadiler Turu',
    description: 'Kapadokya\'nın büyülü vadilerini keşfederken, tarihi kilise ve yeraltı şehirlerini gezin. Peri bacalarının arasında unutulmaz anlar yaşayın.',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d34f51?w=800&h=600&fit=crop&crop=center&q=90',
    location: 'Kapadokya, Nevşehir',
    year: '2024',
    category: 'kulturel',
    slug: 'kapadokya-vadiler-turu',
    area: '3 Gün',
  },
  {
    id: '2',
    title: 'İstanbul Tarih ve Kültür Turu',
    description: 'Osmanlı ve Bizans medeniyetlerinin izlerini takip ederek İstanbul\'un tarihi yarımadasını keşfedin. Ayasofya, Sultanahmet ve Kapalıçarşı gezisi.',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop&crop=center&q=90',
    location: 'İstanbul, Fatih',
    year: '2024',
    category: 'kulturel',
    slug: 'istanbul-tarih-kulturu',
    area: '2 Gün',
  },
  {
    id: '3',
    title: 'Pamukkale ve Hierapolis Antik Kenti',
    description: 'Beyaz traverten terasları ve antik şehir kalıntılarının eşsiz güzelliği. Doğal termal havuzlarda rahatlama ve tarih keşfi.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center&q=90',
    location: 'Pamukkale, Denizli',
    year: '2024',
    category: 'dogal',
    slug: 'pamukkale-hierapolis',
    area: '2 Gün',
  },
  {
    id: '4',
    title: 'Efes Antik Kenti ve Selçuk',
    description: 'Dünyanın en iyi korunmuş antik şehirlerinden Efes\'i keşfedin. Artemis Tapınağı, Celsus Kütüphanesi ve antik tiyatro gezisi.',
    image: 'https://images.unsplash.com/photo-1605706849405-765688a1de59?w=800&h=600&fit=crop&crop=center&q=90',
    location: 'Selçuk, İzmir',
    year: '2024',
    category: 'kulturel',
    slug: 'efes-antik-kenti',
    area: '1 Gün',
  }
];

const getCategories = (t: (key: string) => string) => [
  { id: 'all', label: t('featured-tours.filter.all'), color: 'bg-gray-100 text-gray-700' },
  { id: 'kulturel', label: t('featured-tours.filter.cultural'), color: 'bg-blue-100 text-blue-700' },
  { id: 'dogal', label: t('featured-tours.filter.natural'), color: 'bg-green-100 text-green-700' },
  { id: 'macera', label: t('featured-tours.filter.adventure'), color: 'bg-orange-100 text-orange-700' }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'kulturel': return 'bg-blue-100 text-blue-700';
    case 'dogal': return 'bg-green-100 text-green-700';
    case 'macera': return 'bg-orange-100 text-orange-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getCategoryLabel = (category: string, t: (key: string) => string) => {
  switch (category) {
    case 'kulturel': return t('featured-tours.category.cultural');
    case 'dogal': return t('featured-tours.category.natural');
    case 'macera': return t('featured-tours.category.adventure');
    default: return t('featured-tours.category.general');
  }
};

export default function FeaturedTours() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = getCategories(t);
  const filteredTours = featuredTours.filter(
    tour => activeCategory === 'all' || tour.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl font-display mb-4">
            {t('featured-tours.title')} <span className="text-orange-600">{t('featured-tours.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featured-tours.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredTours.map((tour, index) => (
            <div
              key={tour.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tour Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getCategoryColor(tour.category)
                  )}>
                    {getCategoryLabel(tour.category, t)}
                  </span>
                </div>

                {/* Tour Details Button */}
                <div className="absolute bottom-4 left-4">
                  <Link
                    href={`/turlar/${tour.slug}`}
                    className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center"
                  >
                    <span>{t('featured-tours.view-details')}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Tour Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {tour.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-orange-600">{tour.area}</span> {t('featured-tours.tour-duration')}
                  </div>
                  
                  <Link
                    href={`/turlar/${tour.slug}`}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 flex items-center"
                  >
                    <span>{t('featured-tours.explore')}</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            {t('featured-tours.cta.description')}
          </p>
          <Link href="/turlar">
            <Button variant="orange" size="lg">
              {t('featured-tours.view-all')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}