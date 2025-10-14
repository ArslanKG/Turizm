'use client';

import { useState } from 'react';
import ProjectsHero from '@/components/sections/ProjectsHero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ProjectsFilter from '@/components/sections/ProjectsFilter';
import ProjectsCTA from '@/components/sections/ProjectsCTA';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <ProjectsHero />
      <ProjectsFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectsCTA />
    </>
  );
}