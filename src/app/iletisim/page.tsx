import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactMap from '@/components/sections/ContactMap';

export const metadata = {
  title: 'İletişim | Parla Travel',
  description: 'Parla Travel ile iletişime geçin. Tur rezervasyonunuz için teklif alın ve uzman ekibimizle görüşün.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </>
  );
}