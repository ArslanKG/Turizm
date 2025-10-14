import { notFound } from 'next/navigation';
import BlogDetail from '@/components/sections/BlogDetail';

// Blog verilerini simüle ediyoruz
const blogPosts = {
  '1': {
    id: '1',
    title: '2024 Türkiye Turizm Trendleri ve Gelecek Perspektifleri',
    excerpt: 'Türkiye turizminde 2024 yılında öne çıkan trendler ve gelecek dönemde beklenen gelişmeler hakkında detaylı analiz.',
    content: `
      <h2>Türkiye Turizminin Yeni Yüzü</h2>
      <p>2024 yılı Türkiye turizmi için yeni bir dönemin başlangıcını işaret ediyor. Sürdürülebilir turizm anlayışındaki köklü değişimler, teknolojik gelişmeler ve deneyim odaklı yaklaşımlar, turizm sektörünün şeklini değiştiriyor.</p>
      
      <h3>Öne Çıkan Trendler</h3>
      <ul>
        <li><strong>Dijital Turizm Entegrasyonu:</strong> AR/VR teknolojileri ve akıllı tur rehberlik sistemleri</li>
        <li><strong>Ekoturizm:</strong> Çevre dostu seyahat ve sürdürülebilir turizm deneyimleri</li>
        <li><strong>Kültürel Zenginlik:</strong> Yerel kültürü ön planda tutan otantik deneyimler</li>
        <li><strong>Karma Deneyimler:</strong> Tarih, doğa ve gastronomi turlarının entegre edilmesi</li>
      </ul>
      
      <h3>Gelecek Perspektifleri</h3>
      <p>Önümüzdeki dönemde Türkiye turizminin daha da kapsamlı ve sürdürülebilir bir yaklaşım benimseceği öngörülüyor. Özellikle pandemi sonrası değişen seyahat alışkanlıkları, dijital nomad akımı ve deneyim odaklı seyahat ihtiyaçları, turizm hizmetlerinin yeniden şekillenmesini gerektiriyor.</p>
    `,
    category: 'Turizm Trendleri',
    author: 'Ahmet Parla',
    date: '15 Mayıs 2024',
    readTime: '8 dk',
    views: '1.2K',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop'
  },
  '2': {
    id: '2',
    title: 'Sürdürülebilir Turizm: Çevre Dostu Seyahat İpuçları',
    excerpt: 'Modern turizmde çevre bilinci ve sürdürülebilirlik kavramlarının önemi artıyor. Eco-friendly seyahat deneyimlerinin avantajları.',
    content: `
      <h2>Çevre Dostu Seyahat Yaklaşımları</h2>
      <p>Günümüz turizminde sürdürülebilirlik sadece bir trend değil, zorunluluk haline gelmiştir. İklim değişikliği ve çevresel kaygıların artması, turizm sektörünü daha sorumlu yaklaşımlar benimsemeye yönlendirmiştir.</p>
      
      <h3>Eco-Friendly Seyahat İpuçları</h3>
      <ul>
        <li><strong>Yerel Ulaşım:</strong> Toplu taşıma ve bisiklet kullanımını tercih etme</li>
        <li><strong>Eco-Friendly Konaklama:</strong> Çevre sertifikalı otelleri seçme</li>
        <li><strong>Yerel Ürünler:</strong> Bölgesel lezzetleri deneyimleme ve yerel ekonomiyi destekleme</li>
        <li><strong>Doğa Koruma:</strong> Doğal alanları koruyarak gezme ve fotoğraf çekme</li>
      </ul>
      
      <p>Bu yaklaşımların benimsenmesi hem çevresel etkileri azaltır hem de daha anlamlı seyahat deneyimleri yaşatır.</p>
    `,
    category: 'Sürdürülebilir Turizm',
    author: 'Zeynep Demir',
    date: '12 Mayıs 2024',
    readTime: '6 dk',
    views: '890',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
  },
  // Diğer blog yazıları için de benzer yapı...
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | Parla Travel'
    };
  }

  return {
    title: `${post.title} | Parla Travel Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }));
}