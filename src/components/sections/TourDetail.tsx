'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Users, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Tour {
  id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  year: number;
  area: string;
  category: string;
  status: string;
  features: string[];
  client: string;
  coordinator: string;
  partner: string;
  slug: string;
}

interface TourDetailProps {
  project: Tour; // Keeping 'project' prop name for compatibility
}

export default function TourDetail({ project: tour }: TourDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktif': return 'bg-green-100 text-green-700';
      case 'Planlanan': return 'bg-blue-100 text-blue-700';
      case 'Tamamlanan': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <div className="relative z-20 flex h-full items-end">
          <div className="mx-auto max-w-7xl px-4 pb-32 w-full sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center space-x-2 text-sm">
              <Link
                href="/turlar"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('tour-detail.breadcrumb.tours')}</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{tour.title}</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                {/* Status & Category */}
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tour.status)}`}>
                    {tour.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                    {tour.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {tour.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Tour Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">{tour.area}</div>
                  <div className="text-gray-400 text-sm">{t('tour-detail.tour-duration')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">{tour.year}</div>
                  <div className="text-gray-400 text-sm">{t('tour-detail.season')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Thumbnails */}
        <div className="absolute bottom-4 right-4 z-30">
          <div className="relative h-64 w-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={tour.images[activeImageIndex]}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {tour.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-16 w-20 rounded-lg overflow-hidden ${
                  activeImageIndex === index ? 'ring-2 ring-orange-400' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`${tour.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('tour-detail.features-title')}</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {tour.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('tour-detail.info-title')}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('tour-detail.location')}</div>
                    <div className="text-gray-600">{tour.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('tour-detail.season')}</div>
                    <div className="text-gray-600">{tour.year}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('tour-detail.tour-organizer')}</div>
                    <div className="text-gray-600">{tour.client}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('tour-detail.guide')}</div>
                    <div className="text-gray-600">{tour.coordinator}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('tour-detail.partner')}</div>
                    <div className="text-gray-600">{tour.partner}</div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white">
                <h4 className="text-lg font-bold text-white mb-4">
                  {t('tour-detail.cta.title')}
                </h4>
                <p className="text-orange-100 mb-4 text-sm">
                  {t('tour-detail.cta.description')}
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-white text-orange-600 font-medium rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <span>{t('tour-detail.cta.button')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('tour-detail.other-tours.title')}
            </h2>
            <p className="text-gray-600">
              {t('tour-detail.other-tours.description')}
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/turlar"
              className="inline-flex items-center gap-2 py-4 px-8 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105"
            >
              <span>{t('tour-detail.other-tours.button')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}