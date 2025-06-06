import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/sections/ProjectDetail';

// Sample project data - gerçek uygulamada bu bir API'den gelecek
const projects = {
  'kadikoy-kentsel-donusum': {
    id: '1',
    title: 'Kadıköy Kentsel Dönüşüm Projesi',
    location: 'Kadıköy, İstanbul',
    year: 2023,
    category: 'Kentsel Dönüşüm',
    area: '45.000 m²',
    status: 'Tamamlandı',
    description: 'Modern yaşam alanları ile tarihî dokuyu harmanlayan öncü kentsel dönüşüm projesi. Bu proje ile Kadıköy\'ün merkezinde bulunan eski sanayi alanları, çağdaş yaşam standartlarına uygun konut ve ticari alanlarına dönüştürüldü.',
    features: [
      '450 adet konut birimi',
      '25.000 m² yeşil alan',
      '5.000 m² ticari alan',
      'Sosyal tesis alanları',
      'Yer altı otoparkı',
      'Çocuk oyun alanları'
    ],
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    client: 'Kadıköy Belediyesi',
    architect: 'Parla Group Mimarlık',
    contractor: 'Parla Group İnşaat'
  },
  'beyoglu-rezidans': {
    id: '2',
    title: 'Beyoğlu Rezidans Kompleksi',
    location: 'Beyoğlu, İstanbul',
    year: 2023,
    category: 'İnşaat',
    area: '28.000 m²',
    status: 'Devam Ediyor',
    description: 'Lüks konut ve ticari alanların bir arada bulunduğu modern yaşam kompleksi. İstanbul\'un tarihi yarımadasında konumlanan bu proje, modern mimarinin en güzel örneklerinden birini oluşturuyor.',
    features: [
      '280 adet lüks daire',
      'Spa & Wellness merkezi',
      '3.000 m² AVM',
      'Kapalı yüzme havuzu',
      'Fitness merkezi',
      'Konferans salonları'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
    ],
    client: 'Özel Yatırımcı',
    architect: 'Parla Group Mimarlık',
    contractor: 'Parla Group İnşaat'
  },
  'atasehir-is-merkezi': {
    id: '3',
    title: 'Ataşehir İş Merkezi',
    location: 'Ataşehir, İstanbul',
    year: 2022,
    category: 'Mimarlık',
    area: '32.000 m²',
    status: 'Tamamlandı',
    description: 'Sürdürülebilir mimari yaklaşımıyla tasarlanan A+ ofis kompleksi. Enerji verimliliği ve çevre dostu teknolojilerle donatılan bu proje, modern iş dünyasının ihtiyaçlarını karşılıyor.',
    features: [
      'LEED Gold sertifikası',
      '50 adet ofis birimi',
      'Konferans ve toplantı salonları',
      'Cafeterya ve restoranlar',
      'Yer altı otoparkı',
      'Güvenlik sistemleri'
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop'
    ],
    client: 'Ataşehir Holding',
    architect: 'Parla Group Mimarlık',
    contractor: 'Parla Group İnşaat'
  },
  'uskudar-sahil': {
    id: '4',
    title: 'Üsküdar Sahil Projesi',
    location: 'Üsküdar, İstanbul',
    year: 2024,
    category: 'Kentsel Dönüşüm',
    area: '15.000 m²',
    status: 'Planlama Aşamasında',
    description: 'Boğaz manzaralı sahil şeridinin modern yaşam alanlarına dönüşümü. Bu özel proje ile Üsküdar sahilinde eşsiz bir yaşam deneyimi sunulacak.',
    features: [
      '120 adet lüks rezidans',
      'Özel marina',
      'Sahil yürüyüş yolu',
      'Yeşil teraslar',
      'Su sporları merkezi',
      'Restoran ve kafeler'
    ],
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
    ],
    client: 'Üsküdar Belediyesi',
    architect: 'Parla Group Mimarlık',
    contractor: 'Parla Group İnşaat'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı | Parla Group'
    };
  }

  return {
    title: `${project.title} | Parla Group`,
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