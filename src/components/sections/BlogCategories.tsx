'use client';

import { MapPin, Compass, Hotel, UtensilsCrossed, Users, Camera, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogCategories({ activeCategory, onCategoryChange }: BlogCategoriesProps) {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'all',
      name: t('blog.categories.all.name'),
      icon: Globe,
      count: 156,
      description: t('blog.categories.all.description')
    },
    {
      id: 'destinations',
      name: t('blog.categories.destinations.name'),
      icon: MapPin,
      count: 42,
      description: t('blog.categories.destinations.description')
    },
    {
      id: 'travel-guides',
      name: t('blog.categories.travel-guides.name'),
      icon: Compass,
      count: 38,
      description: t('blog.categories.travel-guides.description')
    },
    {
      id: 'accommodation',
      name: t('blog.categories.accommodation.name'),
      icon: Hotel,
      count: 35,
      description: t('blog.categories.accommodation.description')
    },
    {
      id: 'gastronomy',
      name: t('blog.categories.gastronomy.name'),
      icon: UtensilsCrossed,
      count: 28,
      description: t('blog.categories.gastronomy.description')
    },
    {
      id: 'team',
      name: t('blog.categories.team.name'),
      icon: Users,
      count: 18,
      description: t('blog.categories.team.description')
    },
    {
      id: 'photography',
      name: t('blog.categories.photography.name'),
      icon: Camera,
      count: 22,
      description: t('blog.categories.photography.description')
    },
    {
      id: 'awards',
      name: t('blog.categories.awards.name'),
      icon: Award,
      count: 15,
      description: t('blog.categories.awards.description')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('blog.categories.title')}
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.categories.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 text-left ${
                  isActive 
                    ? 'border-orange-300 bg-orange-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-orange-200 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                    isActive 
                      ? 'bg-orange-300 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Category Info */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isActive ? 'text-orange-700' : 'text-gray-900 group-hover:text-orange-600'
                      }`}>
                        {category.name}
                      </h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded-lg transition-colors duration-300 ${
                        isActive 
                          ? 'bg-orange-200 text-orange-700' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-4 h-4 bg-orange-300 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Category Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-gray-600">
              {t('blog.categories.selected')}:
            </span>
            <span className="font-semibold text-orange-600">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </span>
            <span className="text-gray-500">
              ({categories.find(cat => cat.id === activeCategory)?.count} {t('blog.categories.posts')})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}