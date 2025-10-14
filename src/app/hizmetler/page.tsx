import ServicesHero from '@/components/sections/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicesCTA from '@/components/sections/ServicesCTA';

export const metadata = {
  title: 'Hizmetlerimiz | Parla Travel',
  description: 'Kültür turları, otel rezervasyonları ve rehberlik hizmetleri alanlarında profesyonel turizm hizmetlerimizi keşfedin.',
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