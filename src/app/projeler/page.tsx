import ProjectsHero from '@/components/sections/ProjectsHero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ProjectsFilter from '@/components/sections/ProjectsFilter';
import ProjectsCTA from '@/components/sections/ProjectsCTA';

export const metadata = {
  title: 'Projelerimiz | Parla Group',
  description: 'Kentsel dönüşüm, mimarlık ve inşaat alanlarında gerçekleştirdiğimiz başarılı projelerimizi keşfedin.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
}