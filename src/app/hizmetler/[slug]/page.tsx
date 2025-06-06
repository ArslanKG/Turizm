import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/sections/ServiceDetail';

// Hizmet detay verileri
const services = {
  'kentsel-donusum': {
    id: '1',
    title: 'Kentsel Dönüşüm',
    subtitle: 'Şehrin Dokusunu Koruyarak Modern Yaşam Alanları',
    description: 'Kentsel dönüşüm projelerinde 15+ yıllık deneyimimizle, şehirlerin tarihi dokusunu koruyarak modern yaşam standartlarına uygun projeler gerçekleştiriyoruz.',
    detailedDescription: 'Kentsel dönüşüm, sadece eski binaları yıkıp yenisini yapmak değildir. Bizim yaklaşımımız, mevcut dokuyu analiz ederek, sosyal yaşamı destekleyen, çevre dostu ve sürdürülebilir çözümler üretmektir. Her proje için detaylı fizibilite çalışmaları yaparak, bölgenin karakterini koruyacak tasarım anlayışını benimseriz.',
    features: [
      'Sosyal Donatı Alanları Tasarımı',
      'Çevre Düzenlemesi ve Peyzaj',
      'Tarihî Doku Koruma Çalışmaları',
      'Modern Yaşam Standartları',
      'Sürdürülebilir Mimari Çözümler',
      'Trafik ve Ulaşım Planlaması'
    ],
    stats: [
      { label: 'Tamamlanan Proje', value: '25+' },
      { label: 'Dönüştürülen Alan', value: '500K m²' },
      { label: 'Konut Birimi', value: '1200+' },
      { label: 'Yeşil Alan', value: '150K m²' }
    ],
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    category: 'Kentsel Dönüşüm'
  },
  'insaat': {
    id: '2',
    title: 'İnşaat Projeleri',
    subtitle: 'Kaliteli İnşaat Hizmetleri ile Güvenilir Projeler',
    description: 'Konut, ticari ve karma kullanım projeleri için modern teknolojiler kullanarak kaliteli inşaat hizmetleri sunuyoruz.',
    detailedDescription: 'İnşaat projelerimizde, en son teknolojileri kullanarak hem kaliteli hem de zamanında teslim garantisi veriyoruz. Deneyimli ekibimiz ve güvenilir tedarikçi ağımızla, konut projelerinden büyük ölçekli ticari komplekslere kadar her türlü inşaat ihtiyacınızı karşılıyoruz.',
    features: [
      'Konut Projeleri',
      'Ticari Kompleksler',
      'Karma Kullanım Projeleri',
      'Zamanında Teslim Garantisi',
      'Kalite Kontrol Sistemleri',
      'Modern İnşaat Teknolojileri'
    ],
    stats: [
      { label: 'Tamamlanan Proje', value: '40+' },
      { label: 'İnşa Edilen Alan', value: '750K m²' },
      { label: 'Konut Birimi', value: '2000+' },
      { label: 'Ticari Alan', value: '200K m²' }
    ],
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
    ],
    category: 'İnşaat'
  },
  'mimarlik': {
    id: '3',
    title: 'Mimari Tasarım',
    subtitle: 'Fonksiyonel ve Estetik Mimari Çözümler',
    description: 'Sürdürülebilir tasarım anlayışımızla hayallerinizi gerçeğe dönüştürüyoruz. Modern mimari çözümlerle fark yaratıyoruz.',
    detailedDescription: 'Mimari tasarım sürecimizde, fonksiyonellik ve estetiği harmanlayarak, yaşam kalitesini artıran mekanlar tasarlıyoruz. Sürdürülebilir mimari yaklaşımımızla, çevre dostu ve enerji verimli yapılar üretiyoruz. Her projede müşteri ihtiyaçlarını ön planda tutarak, özgün ve yenilikçi çözümler sunuyoruz.',
    features: [
      'Sürdürülebilir Tasarım',
      'Fonksiyonel Mekan Planlaması',
      'Estetik Mimari Çözümler',
      'Çevre Dostu Malzemeler',
      'Enerji Verimli Tasarım',
      'Yenilikçi Tasarım Yaklaşımları'
    ],
    stats: [
      { label: 'Tamamlanan Proje', value: '60+' },
      { label: 'Tasarlanan Alan', value: '1M m²' },
      { label: 'Mimari Çizim', value: '500+' },
      { label: 'Ödül', value: '15+' }
    ],
    images: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    category: 'Mimarlık'
  },
  'proje-yonetimi': {
    id: '4',
    title: 'Proje Yönetimi',
    subtitle: 'Profesyonel Proje Yönetimi ve Koordinasyon Hizmetleri',
    description: 'Proje yönetimi deneyimimizle, başlangıçtan teslime kadar tüm süreçleri titizlikle koordine ediyoruz.',
    detailedDescription: 'Proje yönetimi hizmetlerimizde, modern proje yönetimi metodolojilerini kullanarak, zaman, bütçe ve kalite hedeflerinizi başarıyla gerçekleştiriyoruz. Deneyimli proje yöneticilerimiz, tüm paydaşların koordinasyonunu sağlayarak, projenizin başından sonuna kadar her aşamada yanınızda.',
    features: [
      'Proje Planlama ve Programlama',
      'Kaynak Yönetimi ve Optimizasyonu',
      'Risk Analizi ve Yönetimi',
      'Kalite Kontrol ve Güvence',
      'Paydaş Koordinasyonu',
      'İlerleme Takibi ve Raporlama'
    ],
    stats: [
      { label: 'Yönetilen Proje', value: '50+' },
      { label: 'Toplam Proje Değeri', value: '2B TL' },
      { label: 'Başarı Oranı', value: '%98' },
      { label: 'Ortalama Tasarruf', value: '%15' }
    ],
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop'
    ],
    category: 'Proje Yönetimi'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı | Parla Group'
    };
  }

  return {
    title: `${service.title} | Parla Group`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}