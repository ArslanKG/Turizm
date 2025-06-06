'use client';

import { useState, useEffect, useRef } from 'react';
import { Building, Users, Award, MapPin } from 'lucide-react';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: 125,
    label: 'Tamamlanan Proje',
    suffix: '+',
    icon: Building,
    color: 'text-blue-600'
  },
  {
    id: '2',
    value: 15,
    label: 'Yıllık Deneyim',
    suffix: '+',
    icon: Award,
    color: 'text-green-600'
  },
  {
    id: '3',
    value: 5000,
    label: 'Mutlu Müşteri',
    suffix: '+',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    id: '4',
    value: 2500000,
    label: 'Dönüştürülen Alan',
    suffix: ' m²',
    icon: MapPin,
    color: 'text-orange-600'
  }
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);

  const startAnimation = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(target * easeOutQuart);
      
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { count, startAnimation };
}

function StatCard({ stat, inView }: { stat: Stat; inView: boolean }) {
  const { count, startAnimation } = useCountUp(stat.value);
  const Icon = stat.icon;

  useEffect(() => {
    if (inView) {
      startAnimation();
    }
  }, [inView, startAnimation]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1);
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0);
    }
    return num.toString();
  };

  const getFormattedSuffix = (num: number, suffix: string) => {
    if (num >= 1000000 && suffix === ' m²') {
      return 'M m²';
    }
    if (num >= 1000 && suffix === '+') {
      return 'K+';
    }
    return suffix;
  };

  return (
    <div className="group text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
        <Icon className={`h-8 w-8 ${stat.color}`} />
      </div>
      
      <div className="mb-2">
        <span className={`text-4xl font-bold ${stat.color} font-display`}>
          {formatNumber(count)}
          <span className="text-2xl">{getFormattedSuffix(stat.value, stat.suffix)}</span>
        </span>
      </div>
      
      <p className="text-gray-300 font-medium">{stat.label}</p>
    </div>
  );
}

export default function CompanyStats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [inView]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl font-display mb-4">
            Sayılarla <span className="text-blue-300">Parla Group</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            15+ yıllık deneyimimiz ve başarılarımızla İstanbul'un dönüşümüne 
            öncülük eden güçlü bir ekibiz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-blue-100 leading-relaxed">
              Her projemizde kaliteyi, güveni ve yeniliği bir araya getirerek, 
              müşterilerimizin hayallerini gerçeğe dönüştürüyor, 
              şehirlerin geleceğini şekillendiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}