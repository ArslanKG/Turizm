'use client';

import { useState } from 'react';
import { Building, Hammer, PenTool, TrendingUp, Users, Lightbulb, Award, Globe } from 'lucide-react';

const categories = [
  { 
    id: 'all', 
    name: 'Tümü', 
    icon: Globe, 
    count: 156,
    description: 'Tüm blog yazıları'
  },
  { 
    id: 'urban-transformation', 
    name: 'Kentsel Dönüşüm', 
    icon: Building, 
    count: 42,
    description: 'Kentsel dönüşüm projeleri ve stratejileri'
  },
  { 
    id: 'architecture', 
    name: 'Mimarlık', 
    icon: PenTool, 
    count: 38,
    description: 'Modern mimarlık trendleri ve tasarım'
  },
  { 
    id: 'construction', 
    name: 'İnşaat', 
    icon: Hammer, 
    count: 35,
    description: 'İnşaat teknolojileri ve uygulamalar'
  },
  { 
    id: 'trends', 
    name: 'Sektör Trendleri', 
    icon: TrendingUp, 
    count: 28,
    description: 'Güncel sektör gelişmeleri'
  },
  { 
    id: 'team', 
    name: 'Ekip & Kariyer', 
    icon: Users, 
    count: 18,
    description: 'Ekip hikayeleri ve kariyer fırsatları'
  },
  { 
    id: 'innovation', 
    name: 'İnovasyon', 
    icon: Lightbulb, 
    count: 22,
    description: 'Teknolojik yenilikler ve gelecek'
  },
  { 
    id: 'awards', 
    name: 'Ödüller & Başarılar', 
    icon: Award, 
    count: 15,
    description: 'Aldığımız ödüller ve başarı hikayeleri'
  }
];

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('all');

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
                onClick={() => setActiveCategory(category.id)}
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