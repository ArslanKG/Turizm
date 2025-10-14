import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/sections/ProjectDetail';

// Sample project data - gerçek uygulamada bu bir API'den gelecek
const projects = {
  'istanbul-kultur-turu': {
    id: '1',
    title: 'İstanbul Kültür ve Tarih Turu',
    location: 'İstanbul',
    year: 2023,
    category: 'Kültür Turları',
    area: 'Tarihi Yarımada',
    status: 'Aktif',
    description: 'İstanbul\'un tarihi ve kültürel zenginliklerini keşfetmek isteyenler için özel olarak tasarlanmış kapsamlı kültür turu. Tarihi yarımadanın en önemli noktalarını uzman rehberler eşliğinde geziyoruz.',
    features: [
      'Ayasofya ve Sultanahmet Camii',
      'Topkapı Sarayı Müzesi',
      'Kapalıçarşı ve Mısır Çarşısı',
      'Boğaz Turu ve Galata Köprüsü',
      'Yerel Lezzet Tadımları',
      'Profesyonel Fotoğraf Çekimi'
    ],
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    client: 'Parla Travel Müşterileri',
    coordinator: 'Parla Travel Tur Planlama',
    partner: 'Parla Travel Rehberlik'
  },
  'kapadokya-macera-turu': {
    id: '2',
    title: 'Kapadokya Balon ve Macera Turu',
    location: 'Kapadokya, Nevşehir',
    year: 2023,
    category: 'Macera Turları',
    area: 'Göreme ve Çevrei',
    status: 'Aktif',
    description: 'Kapadokya\'nın büyülü manzaralarını sıcak hava balonuyla gökyüzünden izleyin ve eşsiz jeolojik oluşumları yakından keşfedin. Macera dolu bir deneyim için tasarlanmış özel tur paketi.',
    features: [
      'Sıcak Hava Balonu Turu',
      'Göreme Açık Hava Müzesi',
      'Yeraltı Şehirleri Keşfi',
      'Valley Trekking',
      'Seramik Atölyesi Ziyareti',
      'Yerel El Sanatları Tanıtımı'
    ],
    images: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop'
    ],
    client: 'Macera Severler',
    coordinator: 'Parla Travel Macera Ekibi',
    partner: 'Parla Travel Balon Ortakları'
  },
  'pamukkale-wellness-turu': {
    id: '3',
    title: 'Pamukkale Termal ve Wellness Turu',
    location: 'Pamukkale, Denizli',
    year: 2022,
    category: 'Wellness Turları',
    area: 'Pamukkale Travertenleri',
    status: 'Aktif',
    description: 'Pamukkale\'nin eşsiz beyaz travertenlerinde dinlendirici bir wellness deneyimi yaşayın. Termal sular ve antik Hierapolis kalıntılarıyla mükemmel bir sağlık ve kültür turu.',
    features: [
      'Termal Havuzlarda Banyo',
      'Pamukkale Travertenleri',
      'Hierapolis Antik Kenti',
      'Spa ve Wellness Hizmetleri',
      'Organik Yerel Ürün Tadımı',
      'Doğa Fotoğrafçılığı'
    ],
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop'
    ],
    client: 'Wellness Meraklıları',
    coordinator: 'Parla Travel Wellness Uzmanları',
    partner: 'Parla Travel Termal Ortakları'
  },
  'antalya-kiyilar-turu': {
    id: '4',
    title: 'Antalya Riviera Kıyıları Turu',
    location: 'Antalya ve Çevresi',
    year: 2024,
    category: 'Deniz Turları',
    area: 'Akdeniz Kıyıları',
    status: 'Yeni Program',
    description: 'Türk Rivierası\'nın en güzel kıyılarını keşfedin. Antalya\'nın tarihi merkezi, antik şehirleri ve muhteşem koylarıyla unutulmaz bir Akdeniz tatili deneyimi.',
    features: [
      'Antalya Kaleiçi Turu',
      'Aspendos ve Perge Antik Kentleri',
      'Kemer ve Olimpos Plajları',
      'Tekne Turu ve Dalış',
      'Likya Yolu Yürüyüşü',
      'Yerel Balık Restoranları'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1471919743851-c4df8b6ee130?w=1200&h=800&fit=crop'
    ],
    client: 'Deniz Severler',
    coordinator: 'Parla Travel Kıyı Uzmanları',
    partner: 'Parla Travel Tekne Ortakları'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'Tur Bulunamadı | Parla Travel'
    };
  }

  return {
    title: `${project.title} | Parla Travel`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}