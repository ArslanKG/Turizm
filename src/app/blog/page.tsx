'use client';

import { useState } from 'react';
import BlogHero from '@/components/sections/BlogHero';
import BlogGrid from '@/components/sections/BlogGrid';
import BlogCategories from '@/components/sections/BlogCategories';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <BlogHero />
      <BlogCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogGrid activeCategory={activeCategory} />
    </>
  );
}