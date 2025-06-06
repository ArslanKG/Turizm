import ServicesHero from '@/components/sections/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicesCTA from '@/components/sections/ServicesCTA';

export const metadata = {
  title: 'Hizmetlerimiz | Parla Group',
  description: 'Kentsel dönüşüm, mimarlık ve inşaat alanlarında profesyonel hizmetlerimizi keşfedin.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesCTA />
    </>
  );
}