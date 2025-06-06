import BlogHero from '@/components/sections/BlogHero';
import BlogGrid from '@/components/sections/BlogGrid';
import BlogCategories from '@/components/sections/BlogCategories';
import BlogNewsletter from '@/components/sections/BlogNewsletter';

export const metadata = {
  title: 'Blog | Parla Group',
  description: 'Kentsel dönüşüm, mimarlık ve inşaat sektöründeki güncel gelişmeler ve uzman görüşlerimizi okuyun.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </>
  );
}