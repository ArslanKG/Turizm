'use client';

import { MapPin, Camera, Mountain, Compass, Grid3X3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ToursFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ToursFilter({ activeCategory, onCategoryChange }: ToursFilterProps) {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('tours-page.filter.all'), icon: Grid3X3, count: 250 },
    { id: 'cultural', label: t('tours-page.filter.cultural'), icon: Camera, count: 85 },
    { id: 'nature', label: t('tours-page.filter.nature'), icon: Mountain, count: 70 },
    { id: 'adventure', label: t('tours-page.filter.adventure'), icon: Compass, count: 45 },
    { id: 'city', label: t('tours-page.filter.city'), icon: MapPin, count: 50 }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}