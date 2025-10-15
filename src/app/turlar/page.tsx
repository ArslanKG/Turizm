'use client';

import { useState } from 'react';
import ToursHero from '@/components/sections/ToursHero';
import ToursGrid from '@/components/sections/ToursGrid';
import ToursFilter from '@/components/sections/ToursFilter';
import ToursCTA from '@/components/sections/ToursCTA';

export default function TurlarPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <ToursHero />
      <ToursFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ToursGrid activeCategory={activeCategory} />
      <ToursCTA />
    </>
  );
}