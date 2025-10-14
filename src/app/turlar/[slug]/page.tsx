import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/sections/ProjectDetail';

// Tur slug mapping - ProjectsGrid'deki projelerle eşleştirmek için
const tourSlugs: Record<string, string> = {
  'istanbul-kultur-turu': 'istanbul-kultur-turu',
  'kapadokya-balon-turu': 'kapadokya-macera-turu', 
  'pamukkale-doga-turu': 'pamukkale-wellness-turu',
  'antalya-sehir-turu': 'antalya-kiyilar-turu',
  'efes-antik-kenti-turu': 'istanbul-kultur-turu', // Fallback
  'karadeniz-yaylalar-turu': 'pamukkale-wellness-turu' // Fallback
};

// Sample tour data - ProjectsGrid'deki verilerle uyumlu
const tours = {
  'istanbul-kultur-turu': {
    id: '1',
    title: 'İstanbul Kültür Turu',
    location: 'İstanbul, Türkiye',
    year: 2024,
    category: 'Kültür Turları',
    area: 'Tarihi Yarımada',
    status: 'Aktif',
    description: 'Tarihi Sultanahmet\'ten modern Beyoğlu\'na kadar İstanbul\'un tüm güzelliklerini keşfediyoruz. Osmanlı mimarisi, Bizans kalıntıları ve modern İstanbul\'un mükemmel sentezini yaşayın.',
    features: [
      'Ayasofya ve Sultanahmet Camii',
      'Topkapı Sarayı Müzesi', 
      'Kapalıçarşı ve Mısır Çarşısı',
      'Boğaz Turu ve Galata Köprüsü',
      'Yerel Lezzet Tadımları',
      'Profesyonel Fotoğraf Çekimi'
    ],
    images: [
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop'
    ],
    client: 'Kültür Severler',
    coordinator: 'Parla Travel Kültür Uzmanları',
    partner: 'İstanbul Rehberler Birliği'
  },
  'kapadokya-balon-turu': {
    id: '2', 
    title: 'Kapadokya Balon Turu',
    location: 'Kapadokya, Nevşehir',
    year: 2024,
    category: 'Macera Turları',
    area: 'Göreme ve Çevresi',
    status: 'Aktif',
    description: 'Kapadokya\'nın eşsiz peyzajını sıcak hava balon turu ile keşfetmenin unutulmaz deneyimi. Gökyüzünden peri bacalarını ve vadileri seyredin.',
    features: [
      'Sıcak Hava Balonu Turu',
      'Göreme Açık Hava Müzesi', 
      'Yeraltı Şehirleri Keşfi',
      'Valley Trekking',
      'Seramik Atölyesi Ziyareti',
      'Yerel El Sanatları Tanıtımı'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop'
    ],
    client: 'Macera Severler',
    coordinator: 'Parla Travel Macera Ekibi',  
    partner: 'Kapadokya Balon Operatörleri'
  },
  'pamukkale-doga-turu': {
    id: '3',
    title: 'Pamukkale Doğa Turu',
    location: 'Pamukkale, Denizli',
    year: 2024,
    category: 'Doğa Turları',
    area: 'Pamukkale Travertenleri',
    status: 'Aktif', 
    description: 'Beyaz travertenler ve antik Hierapolis kalıntıları ile doğa harikası Pamukkale keşfi. Termal sular ve antik tarihle dolu bir deneyim.',
    features: [
      'Termal Havuzlarda Banyo',
      'Pamukkale Travertenleri',
      'Hierapolis Antik Kenti',
      'Doğa Yürüyüşleri', 
      'Organik Yerel Ürün Tadımı',
      'Doğa Fotoğrafçılığı'
    ],
    images: [
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop'
    ],
    client: 'Doğa Severler',
    coordinator: 'Parla Travel Doğa Uzmanları',
    partner: 'Pamukkale Rehberler Kooperatifi'
  },
  'antalya-sehir-turu': {
    id: '4',
    title: 'Antalya Şehir Turu', 
    location: 'Antalya, Türkiye',
    year: 2024,
    category: 'Şehir Turları',
    area: 'Antalya Merkez ve Çevresi',
    status: 'Aktif',
    description: 'Akdeniz\'in turkuaz suları ve tarihi Kaleiçi ile Antalya\'nın eşsiz güzelliklerini yaşayın. Modern şehir yaşamı ve antik tarih mükemmel uyumu.',
    features: [
      'Antalya Kaleiçi Turu',
      'Düden ve Karpuzkaldıran Şelaleleri', 
      'Antalya Müzesi',
      'Marina ve Eski Liman',
      'Yerel Pazarlar',
      'Akdeniz Mutfağı Tanıtımı'
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop'
    ],
    client: 'Şehir Keşifçileri',
    coordinator: 'Parla Travel Şehir Uzmanları',
    partner: 'Antalya Turist Rehberleri Odası'
  },
  'efes-antik-kenti-turu': {
    id: '5',
    title: 'Efes Antik Kenti Turu',
    location: 'Efes, İzmir',
    year: 2024,
    category: 'Kültür Turları', 
    area: 'Efes Antik Kenti',
    status: 'Aktif',
    description: 'Antik dünyanın en iyi korunmuş şehirlerinden Efes\'in tarihî atmosferinde yolculuk. Roma dönemi mimarisi ve antik yaşam izlerini keşfedin.',
    features: [
      'Efes Antik Kenti Turu',
      'Celsus Kütüphanesi',
      'Büyük Tiyatro',
      'Artemis Tapınağı Kalıntıları',
      'Selçuk Arkeoloji Müzesi', 
      'Şirince Köyü Ziyareti'
    ],
    images: [
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=1200&h=800&fit=crop'
    ],
    client: 'Tarih Meraklıları',
    coordinator: 'Parla Travel Kültür Uzmanları',
    partner: 'Efes Arkeologları Derneği'
  },
  'karadeniz-yaylalar-turu': {
    id: '6',
    title: 'Karadeniz Yaylalar Turu',
    location: 'Karadeniz Bölgesi', 
    year: 2024,
    category: 'Doğa Turları',
    area: 'Karadeniz Yaylaları',
    status: 'Aktif',
    description: 'Karadeniz\'in yemyeşil yaylaları ve doğal güzellikleri ile huzurlu bir kaçış deneyimi. Temiz hava, doğal yaşam ve yerel kültür keşfi.',
    features: [
      'Ayder ve Pokut Yaylaları',
      'Doğa Yürüyüşleri', 
      'Yerel Yayla Kültürü',
      'Organik Tarım Ziyaretleri',
      'Geleneksel El Sanatları',
      'Karadeniz Mutfağı Tanıtımı'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1471919743851-c4df8b6ee130?w=1200&h=800&fit=crop'
    ],
    client: 'Doğa ve Huzur Arayanlar',
    coordinator: 'Parla Travel Doğa Uzmanları', 
    partner: 'Karadeniz Ekoturizm Birliği'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours[slug as keyof typeof tours];
  
  if (!tour) {
    return {
      title: 'Tur Bulunamadı | Parla Travel'
    };
  }

  return {
    title: `${tour.title} | Parla Travel`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours[slug as keyof typeof tours];

  if (!tour) {
    notFound();
  }

  return <ProjectDetail project={tour} />;
}

export async function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({
    slug,
  }));
}