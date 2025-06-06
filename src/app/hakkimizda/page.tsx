import type { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import CompanyStory from '@/components/sections/CompanyStory';
import CompanyValues from '@/components/sections/CompanyValues';
import CompanyTimeline from '@/components/sections/CompanyTimeline';
import TeamSection from '@/components/sections/TeamSection';

export const metadata: Metadata = {
  title: 'Hakkımızda | Parla Group - 15+ Yıllık Deneyim',
  description: 'Parla Group olarak 15+ yıldır kentsel dönüşüm, inşaat ve mimarlık alanlarında öncü projeler gerçekleştiriyoruz. Şirket hikayemiz, değerlerimiz ve ekibimizle tanışın.',
  keywords: ['parla group hakkında', 'kentsel dönüşüm şirketi', 'inşaat firması', 'mimarlık bürosu', 'şirket tarihi'],
  openGraph: {
    title: 'Hakkımızda | Parla Group',
    description: 'Parla Group olarak 15+ yıldır kentsel dönüşüm, inşaat ve mimarlık alanlarında öncü projeler gerçekleştiriyoruz.',
    url: 'https://parlagroup.com/hakkimizda',
    type: 'website',
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <CompanyValues />
      <CompanyTimeline />
      <TeamSection />
    </>
  );
}