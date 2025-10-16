import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

// Metadata'yı server-side olarak generate ediyoruz
export async function generateMetadata(): Promise<Metadata> {
  // Server-side'da dil tercihini almak için cookie'den okuyoruz
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const language = cookieStore.get('language')?.value || 'tr';
  
  // Çeviri fonksiyonu
  const translations: { [key: string]: { [key: string]: string } } = {
    tr: {
      'contact.meta.title': 'İletişim | Parla Travel',
      'contact.meta.description': 'Parla Travel ile iletişime geçin. Tur rezervasyonunuz için teklif alın ve uzman ekibimizle görüşün.',
    },
    en: {
      'contact.meta.title': 'Contact | Parla Travel',
      'contact.meta.description': 'Contact Parla Travel. Get a quote for your tour reservation and discuss with our expert team.',
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['tr'][key] || key;
  };

  return {
    title: t('contact.meta.title'),
    description: t('contact.meta.description'),
  };
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}