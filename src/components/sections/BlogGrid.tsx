'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Eye, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const { t } = useLanguage();

  // Category mapping function
  const getCategoryId = (category: string): string => {
    const categoryMap: { [key: string]: string } = {
      [t('blog.posts.category.travel-guide')]: 'travel-guides',
      [t('blog.posts.category.destination')]: 'destinations',
      [t('blog.posts.category.city-tours')]: 'destinations',
      [t('blog.posts.category.accommodation')]: 'accommodation',
      [t('blog.posts.category.gastronomy')]: 'gastronomy',
      [t('blog.posts.category.blue-tour')]: 'destinations',
      [t('blog.posts.category.team')]: 'team',
      [t('blog.posts.category.photography')]: 'photography',
      [t('blog.posts.category.awards')]: 'awards'
    };
    return categoryMap[category] || 'destinations';
  };

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.post1.title'),
      excerpt: t('blog.posts.post1.excerpt'),
      category: t('blog.posts.category.travel-guide'),
      author: t('blog.posts.post1.author'),
      date: t('blog.posts.post1.date'),
      readTime: t('blog.posts.post1.readTime'),
      views: t('blog.posts.post1.views'),
      featured: true,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: t('blog.posts.post2.title'),
      excerpt: t('blog.posts.post2.excerpt'),
      category: t('blog.posts.category.destination'),
      author: t('blog.posts.post2.author'),
      date: t('blog.posts.post2.date'),
      readTime: t('blog.posts.post2.readTime'),
      views: t('blog.posts.post2.views'),
      featured: false,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: t('blog.posts.post3.title'),
      excerpt: t('blog.posts.post3.excerpt'),
      category: t('blog.posts.category.city-tours'),
      author: t('blog.posts.post3.author'),
      date: t('blog.posts.post3.date'),
      readTime: t('blog.posts.post3.readTime'),
      views: t('blog.posts.post3.views'),
      featured: false,
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: t('blog.posts.post4.title'),
      excerpt: t('blog.posts.post4.excerpt'),
      category: t('blog.posts.category.accommodation'),
      author: t('blog.posts.post4.author'),
      date: t('blog.posts.post4.date'),
      readTime: t('blog.posts.post4.readTime'),
      views: t('blog.posts.post4.views'),
      featured: false,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: t('blog.posts.post5.title'),
      excerpt: t('blog.posts.post5.excerpt'),
      category: t('blog.posts.category.gastronomy'),
      author: t('blog.posts.post5.author'),
      date: t('blog.posts.post5.date'),
      readTime: t('blog.posts.post5.readTime'),
      views: t('blog.posts.post5.views'),
      featured: false,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: t('blog.posts.post6.title'),
      excerpt: t('blog.posts.post6.excerpt'),
      category: t('blog.posts.category.blue-tour'),
      author: t('blog.posts.post6.author'),
      date: t('blog.posts.post6.date'),
      readTime: t('blog.posts.post6.readTime'),
      views: t('blog.posts.post6.views'),
      featured: false,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    }
  ];

  // Filter blog posts based on active category
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => getCategoryId(post.category) === activeCategory);
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {activeCategory === 'all' ? t('blog.grid.title.all') : t('blog.grid.title.filtered')}
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {filteredPosts.length === 0
              ? t('blog.grid.no-posts')
              : `${filteredPosts.length} ${t('blog.grid.posts-found')}.`}
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
                    {t('blog.grid.featured')}
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
                      <span>{t('blog.grid.read-more')}</span>
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
            <span className="mr-2">{t('blog.grid.load-more')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}