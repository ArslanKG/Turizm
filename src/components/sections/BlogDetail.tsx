'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Eye, Share2, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
}

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Blog</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-lg">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-gray-600 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-semibold"
            />
          </div>

          {/* Article Footer */}
          <footer className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bu makaleyi paylaş</h3>
                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Paylaş</span>
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-2">Yazar</p>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">Parla Travel Uzmanı</p>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İlgili Yazılar
            </h2>
            <p className="text-gray-600">
              Bu konuyla ilgili diğer yazılarımızı keşfedin.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105"
            >
              <span>Tüm Blog Yazılarını Görüntüle</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}