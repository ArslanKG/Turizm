// Parla Travel Kurumsal Portfolyo - TypeScript Type Definitions

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'kultur-turlari' | 'ozel-turlar' | 'macera-turlari';
  images: ProjectImage[];
  location: string;
  year: number;
  area?: string;
  status: 'tamamlandi' | 'devam-ediyor' | 'planlama';
  slug: string;
  featured: boolean;
  beforeAfter?: {
    before: string;
    after: string;
  };
  tags: string[];
  content: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
  projects: Project[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedIn?: string;
  email?: string;
}

export interface CompanyStats {
  toursCompleted: number;
  yearsExperience: number;
  clientsSatisfied: number;
  destinationsVisited: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  image: string;
  readTime: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}