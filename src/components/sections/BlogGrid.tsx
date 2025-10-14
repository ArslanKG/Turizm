'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Eye, ArrowRight, Clock } from 'lucide-react';

interface BlogGridProps {
  activeCategory: string;
}

// Category mapping function
const getCategoryId = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    'Seyahat Rehberi': 'travel-guides',
    'Destinasyon': 'destinations',
    'Şehir Turları': 'destinations',
    'Konaklama': 'accommodation',
    'Gastronomi': 'gastronomy',
    'Mavi Tur': 'destinations',
    'Ekip & Kariyer': 'team',
    'Seyahat Fotoğrafçılığı': 'photography',
    'Ödüller & Başarılar': 'awards'
  };
  return categoryMap[category] || 'destinations';
};

const blogPosts = [
  {
    id: 1,
    title: '2024 Seyahat Trendleri ve Destinasyon Rehberi',
    excerpt: '2024 yılının en popüler destinasyonları ve seyahat trendleri hakkında uzman rehberlerimizin detaylı analizi ve önerileri.',
    category: 'Seyahat Rehberi',
    author: 'Mehmet Seyhan',
    date: '15 Mayıs 2024',
    readTime: '8 dk',
    views: '1.2K',
    featured: true,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Kapadokya Gezi Rehberi: Balon Turu ve Gizli Güzellikler',
    excerpt: 'Kapadokya\'nın eşsiz güzelliklerini keşfedin. Balon turları, yeraltı şehirleri ve yerel lezzetler için kapsamlı rehber.',
    category: 'Destinasyon',
    author: 'Ayşe Kaya',
    date: '12 Mayıs 2024',
    readTime: '6 dk',
    views: '890',
    featured: false,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'İstanbul\'un Saklı Cenneti: Boğaziçi Kıyıları Turu',
    excerpt: 'Boğaziçi\'nin en güzel noktalarını keşfedin. Tarihi yapılar, yerel kafeler ve nefes kesen manzaralar.',
    category: 'Şehir Turları',
    author: 'Can Demir',
    date: '10 Mayıs 2024',
    readTime: '12 dk',
    views: '1.5K',
    featured: false,
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Antalya\'da Lüks Otel Deneyimi: En İyi Tatil Köyleri',
    excerpt: 'Antalya\'nın en prestijli otellerinde unutulmaz bir tatil için rehber. Lüks konaklama ve aktivite önerileri.',
    category: 'Konaklama',
    author: 'Zeynep Özkan',
    date: '8 Mayıs 2024',
    readTime: '7 dk',
    views: '740',
    featured: false,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Türk Mutfağı Keşfi: Yerel Lezzetler Turu',
    excerpt: 'Türkiye\'nin farklı bölgelerindeki otantik lezzetleri keşfedin. Yerel restoranlar ve sokak yemekleri rehberi.',
    category: 'Gastronomi',
    author: 'Ali Şahin',
    date: '5 Mayıs 2024',
    readTime: '9 dk',
    views: '920',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Ege Sahillerinde Tekne Turu: Mavi Yolculuk Rehberi',
    excerpt: 'Ege\'nin berrak sularında unutulmaz bir tekne turu deneyimi. En güzel koylar ve antik şehirler.',
    category: 'Mavi Tur',
    author: 'Berat Toprak',
    date: '3 Mayıs 2024',
    readTime: '11 dk',
    views: '1.1K',
    featured: false,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
  }
];

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => getCategoryId(post.category) === activeCategory);
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {activeCategory === 'all' ? 'Son Blog Yazıları' : 'Filtrelenmiş Yazılar'}
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {filteredPosts.length === 0
              ? 'Bu kategoride henüz yazı bulunmuyor.'
              : `${filteredPosts.length} yazı bulundu.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, _index) => (
            <article
              key={post.id}
              className={`group relative bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 ${
                post.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-orange-300 text-white text-sm font-medium rounded-lg">
                    Öne Çıkan
                  </span>
                </div>
              )}

              {/* Image */}
              <div className={`relative overflow-hidden ${
                post.featured ? 'aspect-video' : 'aspect-video'
              }`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className={`font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 ${
                    post.featured ? 'text-xl lg:text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="pt-2">
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors duration-300 group">
                      <span>Devamını Oku</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center justify-center py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="mr-2">Daha Fazla Yükle</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}