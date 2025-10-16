import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceDetailClient from '@/components/sections/ServiceDetailClient';

// Service slug configurations
const serviceConfigs = {
  'kultur-turlari': {
    id: '1',
    images: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ]
  },
  'otel-rezervasyonu': {
    id: '2',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop'
    ]
  },
  'rehberlik-hizmetleri': {
    id: '3',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=800&fit=crop'
    ]
  },
  'macera-turlari': {
    id: '4',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464822759844-d150badb3805?w=1200&h=800&fit=crop'
    ]
  }
};

type ServiceSlug = keyof typeof serviceConfigs;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getServiceData(slug: string) {
  const config = serviceConfigs[slug as ServiceSlug];
  if (!config) return null;

  return {
    id: config.id,
    slug: slug,
    images: config.images,
    category: 'service'
  };
}

// Server Component - Default Export
export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = await getServiceData(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

// Static Params Generation
export async function generateStaticParams() {
  return Object.keys(serviceConfigs).map((slug) => ({
    slug,
  }));
}

// Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const config = serviceConfigs[resolvedParams.slug as ServiceSlug];
  
  if (!config) {
    return {
      title: 'Service Not Found | Parla Travel',
      description: 'The requested service could not be found.'
    };
  }

  // Service title mapping for SEO (using English for better SEO)
  const titleMap: Record<ServiceSlug, string> = {
    'kultur-turlari': 'Cultural Tours',
    'otel-rezervasyonu': 'Hotel Reservation',
    'rehberlik-hizmetleri': 'Professional Guide Services',
    'macera-turlari': 'Adventure Tours'
  };

  const title = titleMap[resolvedParams.slug as ServiceSlug] || 'Service';

  return {
    title: `${title} | Parla Travel`,
    description: 'Experience unforgettable travel adventures in Turkey\'s most beautiful destinations.',
    openGraph: {
      title: `${title} | Parla Travel`,
      description: 'Experience unforgettable travel adventures in Turkey\'s most beautiful destinations.',
      images: config.images.slice(0, 1),
    },
  };
}
