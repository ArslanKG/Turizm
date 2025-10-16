import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { AboutHeroClient, CompanyStoryClient } from '@/components/sections/AboutClient';
import CompanyValues from '@/components/sections/CompanyValues';

// Server-side metadata generation using existing translation keys
export async function generateMetadata(): Promise<Metadata> {
  // Try to get language from headers or default to Turkish
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  const lang = acceptLanguage.includes('en') ? 'en' : 'tr';
  
  // Use the same translation keys that already exist in LanguageContext
  const metadataKeys = {
    tr: {
      title: 'Hakkımızda | Parla Travel - 15+ Yıllık Deneyim',
      description: 'Parla Travel olarak 15+ yıldır turizm, kültür turları ve rehberlik hizmetleri alanlarında öncü turlar gerçekleştiriyoruz. Şirket hikayemiz ve değerlerimizle tanışın.',
      keywords: 'parla travel hakkında, turizm şirketi, kültür turları, rehberlik hizmetleri, şirket tarihi',
      ogTitle: 'Hakkımızda | Parla Travel',
      ogDescription: 'Parla Travel olarak 15+ yıldır turizm, kültür turları ve rehberlik hizmetleri alanlarında öncü turlar gerçekleştiriyoruz.'
    },
    en: {
      title: 'About Us | Parla Travel - 15+ Years Experience',
      description: 'As Parla Travel, we have been organizing pioneering tours in tourism, cultural tours and guide services for 15+ years. Meet our company story and values.',
      keywords: 'about parla travel, tourism company, cultural tours, guide services, company history',
      ogTitle: 'About Us | Parla Travel',
      ogDescription: 'As Parla Travel, we have been organizing pioneering tours in tourism, cultural tours and guide services for 15+ years.'
    }
  };

  const t = metadataKeys[lang];

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.split(', '),
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: `https://parlatravel.com/${lang === 'tr' ? 'hakkimizda' : 'about'}`,
      type: 'website',
    },
  };
}

export default function About() {
  return (
    <>
      <AboutHeroClient />
      <CompanyStoryClient />
      <CompanyValues />
    </>
  );
}