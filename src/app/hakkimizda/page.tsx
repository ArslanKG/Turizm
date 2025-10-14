import type { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import CompanyStory from '@/components/sections/CompanyStory';
import CompanyValues from '@/components/sections/CompanyValues';
import CompanyTimeline from '@/components/sections/CompanyTimeline';
import TeamSection from '@/components/sections/TeamSection';

export const metadata: Metadata = {
  title: 'Hakkımızda | Parla Travel - 15+ Yıllık Deneyim',
  description: 'Parla Travel olarak 15+ yıldır turizm, kültür turları ve rehberlik hizmetleri alanlarında öncü projeler gerçekleştiriyoruz. Şirket hikayemiz, değerlerimiz ve ekibimizle tanışın.',
  keywords: ['parla travel hakkında', 'turizm şirketi', 'kültür turları', 'rehberlik hizmetleri', 'şirket tarihi'],
  openGraph: {
    title: 'Hakkımızda | Parla Travel',
    description: 'Parla Travel olarak 15+ yıldır turizm, kültür turları ve rehberlik hizmetleri alanlarında öncü projeler gerçekleştiriyoruz.',
    url: 'https://parlatravel.com/hakkimizda',
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