import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/sections/ServiceDetail';

// Hizmet detay verileri
const services = {
  'kultur-turlari': {
    id: '1',
    title: 'Kültür Turları',
    subtitle: 'Tarihi ve Kültürel Zenginlikleri Keşfedin',
    description: 'Türkiye\'nin tarihi ve kültürel zenginliklerini keşfetmek isteyenlere özel olarak tasarlanmış rehberli kültür turları sunuyoruz.',
    detailedDescription: 'Kültür turlarımızda, Türkiye\'nin binlerce yıllık tarihi mirasını uzman rehberler eşliğinde keşfedeceksiniz. Antik şehirlerden Osmanlı saraylarına, müzelerden arkeolojik alanlarına kadar geniş bir yelpazede kültürel deneyimler sunuyoruz. Her turumuzu küçük gruplar halinde organize ederek, daha kişisel ve derinlemesine bir deneyim yaşatıyoruz.',
    features: [
      'Uzman Rehber Eşliğinde Geziler',
      'Müze ve Antik Alan Ziyaretleri',
      'Yerel Kültür Deneyimleri',
      'Küçük Grup Turları',
      'Özel Tema Turları',
      'Fotoğraf ve Video Çekimi'
    ],
    stats: [
      { label: 'Tamamlanan Tur', value: '250+' },
      { label: 'Ziyaret Edilen Yer', value: '50+' },
      { label: 'Mutlu Müşteri', value: '1200+' },
      { label: 'Rehber Deneyimi', value: '15+ Yıl' }
    ],
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    category: 'Kültür Turları'
  },
  'otel-rezervasyonu': {
    id: '2',
    title: 'Otel Rezervasyonu',
    subtitle: 'En İyi Konaklama Seçenekleri ile Konforlu Tatil',
    description: 'Türkiye\'nin en güzel destinasyonlarında seçkin otellerde konaklama rezervasyonu hizmetimizle tatil planınızı kolaylaştırıyoruz.',
    detailedDescription: 'Otel rezervasyon hizmetimizde, butik otellerden lüks resort\'lara kadar geniş bir yelpazede konaklama seçenekleri sunuyoruz. Müşterilerimizin bütçe ve tercihlerine uygun en iyi fiyat garantisi vererek, tatillerini unutulmaz kılıyoruz. Özel anlaşmalarımız sayesinde eksklüzif fırsatlar ve erken rezervasyon indirimleri sunuyoruz.',
    features: [
      'Boutique ve Lüks Oteller',
      'En İyi Fiyat Garantisi',
      'Özel Anlaşmalar ve İndirimler',
      'Ücretsiz İptal Seçenekleri',
      '7/24 Rezervasyon Desteği',
      'Özel İstekler ve Düzenlemeler'
    ],
    stats: [
      { label: 'Tamamlanan Rezervasyon', value: '400+' },
      { label: 'Partner Otel', value: '75+' },
      { label: 'Müşteri Memnuniyeti', value: '%98' },
      { label: 'Ortalama İndirim', value: '%15' }
    ],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop'
    ],
    category: 'Otel Rezervasyonu'
  },
  'rehberlik-hizmetleri': {
    id: '3',
    title: 'Profesyonel Rehberlik',
    subtitle: 'Deneyimli Rehberlerle Unutulmaz Geziler',
    description: 'Lisanslı ve deneyimli rehberlerimizle Türkiye\'nin her köşesini keşfedin. Kişiselleştirilmiş tur deneyimleri sunuyoruz.',
    detailedDescription: 'Rehberlik hizmetlerimizde, alanında uzman ve çok dilli rehberlerimizle en kaliteli gezi deneyimini yaşatıyoruz. Her rehberimiz, bölgenin tarihini, kültürünü ve özel hikayelerini en iyi şekilde anlatabilecek deneyime sahiptir. Özel ilgi alanlarınıza göre kişiselleştirilmiş tur programları hazırlayarak, unutulmaz anılar biriktirmenizi sağlıyoruz.',
    features: [
      'Lisanslı Profesyonel Rehberler',
      'Çoklu Dil Desteği',
      'Kişiselleştirilmiş Tur Programları',
      'Özel İlgi Alanları Turları',
      'Hikaye Anlatıcılığı',
      'Fotoğraf Çekim Yardımı'
    ],
    stats: [
      { label: 'Rehber Sayısı', value: '25+' },
      { label: 'Dil Seçeneği', value: '8' },
      { label: 'Tur Deneyimi', value: '500+' },
      { label: 'Müşteri Puanı', value: '4.9/5' }
    ],
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop'
    ],
    category: 'Rehberlik Hizmetleri'
  },
  'macera-turlari': {
    id: '4',
    title: 'Macera Turları',
    subtitle: 'Adrenalin Dolu Deneyimler ve Doğa Sporları',
    description: 'Doğa severlere özel macera turları ile Türkiye\'nin eşsiz doğasında heyecan verici deneyimler yaşayın.',
    detailedDescription: 'Macera turlarımızda, trekking\'den rafting\'e, yamaç paraşütünden kaya tırmanışına kadar geniş bir aktivite yelpazesi sunuyoruz. Güvenlik önlemlerini en üst düzeyde tutarak, adrenalin dolu ama güvenli maceralar yaşatıyoruz. Deneyimli guide\'larımız ve kaliteli ekipmanlarımızla, her seviyeden katılımcı için uygun programlar hazırlıyoruz.',
    features: [
      'Trekking ve Doğa Yürüyüşleri',
      'Rafting ve Su Sporları',
      'Yamaç Paraşütü Deneyimi',
      'Kaya Tırmanışı ve Abseiling',
      'Kamp ve Doğa Deneyimi',
      'Güvenlik Ekipmanları Dahil'
    ],
    stats: [
      { label: 'Macera Turu', value: '150+' },
      { label: 'Aktivite Çeşidi', value: '20+' },
      { label: 'Güvenlik Skoru', value: '%100' },
      { label: 'Tekrar Ziyaret', value: '%85' }
    ],
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759844-d150badb3805?w=1200&h=800&fit=crop'
    ],
    category: 'Macera Turları'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı | Parla Travel'
    };
  }

  return {
    title: `${service.title} | Parla Travel`,
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