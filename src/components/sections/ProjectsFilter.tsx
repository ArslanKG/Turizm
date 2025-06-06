'use client';

import { useState } from 'react';
import { Building2, Hammer, PaintBucket, Home, Grid3X3 } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Tümü', icon: Grid3X3, count: 500 },
  { id: 'urban', label: 'Kentsel Dönüşüm', icon: Building2, count: 120 },
  { id: 'construction', label: 'İnşaat', icon: Hammer, count: 200 },
  { id: 'architecture', label: 'Mimari Tasarım', icon: PaintBucket, count: 150 },
  { id: 'residential', label: 'Konut', icon: Home, count: 80 }
];

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState('all');

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
                onClick={() => setActiveCategory(category.id)}
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