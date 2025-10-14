'use client';

import { MapPin, Compass, Hotel, UtensilsCrossed, Users, Camera, Award, Globe } from 'lucide-react';

interface BlogCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  {
    id: 'all',
    name: 'Tümü',
    icon: Globe,
    count: 156,
    description: 'Tüm blog yazıları'
  },
  {
    id: 'destinations',
    name: 'Destinasyonlar',
    icon: MapPin,
    count: 42,
    description: 'Popüler seyahat destinasyonları ve rehberler'
  },
  {
    id: 'travel-guides',
    name: 'Seyahat Rehberleri',
    icon: Compass,
    count: 38,
    description: 'Detaylı gezi planları ve öneriler'
  },
  {
    id: 'accommodation',
    name: 'Konaklama',
    icon: Hotel,
    count: 35,
    description: 'Otel önerileri ve konaklama rehberleri'
  },
  {
    id: 'gastronomy',
    name: 'Gastronomi',
    icon: UtensilsCrossed,
    count: 28,
    description: 'Yerel lezzetler ve kulinarya deneyimleri'
  },
  {
    id: 'team',
    name: 'Ekip & Kariyer',
    icon: Users,
    count: 18,
    description: 'Ekip hikayeleri ve turizm kariyeri'
  },
  {
    id: 'photography',
    name: 'Seyahat Fotoğrafçılığı',
    icon: Camera,
    count: 22,
    description: 'Fotoğraf ipuçları ve en güzel kareler'
  },
  {
    id: 'awards',
    name: 'Ödüller & Başarılar',
    icon: Award,
    count: 15,
    description: 'Aldığımız ödüller ve başarı hikayeleri'
  }
];

export default function BlogCategories({ activeCategory, onCategoryChange }: BlogCategoriesProps) {

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Kategorileri
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İlgi alanınıza göre içerikleri keşfedin ve sektördeki gelişmeleri takip edin.
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
              Seçili kategori:
            </span>
            <span className="font-semibold text-orange-600">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </span>
            <span className="text-gray-500">
              ({categories.find(cat => cat.id === activeCategory)?.count} yazı)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}