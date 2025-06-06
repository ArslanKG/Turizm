import { notFound } from 'next/navigation';
import BlogDetail from '@/components/sections/BlogDetail';

// Blog verilerini simüle ediyoruz
const blogPosts = {
  '1': {
    id: '1',
    title: '2024 Kentsel Dönüşüm Trendleri ve Gelecek Perspektifleri',
    excerpt: 'Kentsel dönüşüm projelerinde 2024 yılında öne çıkan trendler ve gelecek dönemde beklenen gelişmeler hakkında detaylı analiz.',
    content: `
      <h2>Kentsel Dönüşümün Yeni Yüzü</h2>
      <p>2024 yılı kentsel dönüşüm projelerinde yeni bir dönemin başlangıcını işaret ediyor. Şehircilik anlayışındaki köklü değişimler, teknolojik gelişmeler ve sürdürülebilirlik odaklı yaklaşımlar, kentsel dönüşüm projelerinin şeklini değiştiriyor.</p>
      
      <h3>Öne Çıkan Trendler</h3>
      <ul>
        <li><strong>Akıllı Şehir Entegrasyonu:</strong> IoT teknolojileri ve akıllı sensörlerin kentsel alanlara entegrasyonu</li>
        <li><strong>Yeşil İnşaat:</strong> Çevre dostu malzemeler ve enerji verimli yapılar</li>
        <li><strong>Sosyal Sürdürülebilirlik:</strong> Toplumsal ihtiyaçları ön planda tutan tasarım yaklaşımları</li>
        <li><strong>Karma Kullanım:</strong> Konut, iş ve sosyal alanların entegre edilmesi</li>
      </ul>
      
      <h3>Gelecek Perspektifleri</h3>
      <p>Önümüzdeki dönemde kentsel dönüşüm projelerinin daha da kapsamlı ve entegre bir yaklaşım benimseceği öngörülüyor. Özellikle pandemi sonrası değişen yaşam tarzları, ev-ofis hibrit çalışma modelleri ve dijital dönüşüm ihtiyaçları, kentsel alanların yeniden tasarlanmasını gerektiriyor.</p>
    `,
    category: 'Kentsel Dönüşüm',
    author: 'Ahmet Parla',
    date: '15 Mayıs 2024',
    readTime: '8 dk',
    views: '1.2K',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
  },
  '2': {
    id: '2',
    title: 'Sürdürülebilir Mimarlık: Çevre Dostu Yapı Malzemeleri',
    excerpt: 'Modern mimaride çevre bilinci ve sürdürülebilirlik kavramlarının önemi artıyor. Eco-friendly yapı malzemelerinin avantajları.',
    content: `
      <h2>Çevre Dostu Mimari Yaklaşımlar</h2>
      <p>Günümüz mimarisinde sürdürülebilirlik sadece bir trend değil, zorunluluk haline gelmiştir. İklim değişikliği ve çevresel kaygıların artması, yapı sektörünü daha sorumlu yaklaşımlar benimsemeye yönlendirmiştir.</p>
      
      <h3>Eco-Friendly Malzemeler</h3>
      <ul>
        <li><strong>Bambu:</strong> Hızla yenilenebilen ve dayanıklı alternatif</li>
        <li><strong>Geri Dönüştürülmüş Çelik:</strong> Enerji tasarrufu sağlayan metal kullanımı</li>
        <li><strong>Ahşap Kompozitler:</strong> Doğal ahşabın geliştirilmiş versiyonları</li>
        <li><strong>Yeşil Çatı Sistemleri:</strong> Isı yalıtımı ve estetik değer</li>
      </ul>
      
      <p>Bu malzemelerin kullanımı hem çevresel etkileri azaltır hem de uzun vadede maliyet avantajı sağlar.</p>
    `,
    category: 'Mimarlık',
    author: 'Zeynep Demir',
    date: '12 Mayıs 2024',
    readTime: '6 dk',
    views: '890',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
  },
  // Diğer blog yazıları için de benzer yapı...
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | Parla Group'
    };
  }

  return {
    title: `${post.title} | Parla Group Blog`,
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