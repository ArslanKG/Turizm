'use client';

import { useState } from 'react';
import ToursHero from '@/components/sections/ToursHero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ProjectsFilter from '@/components/sections/ProjectsFilter';
import ProjectsCTA from '@/components/sections/ProjectsCTA';

export default function TurlarPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <ToursHero />
      <ProjectsFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectsCTA />
    </>
  );
}