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
  emoji: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: 220,
    label: 'Kültür Turları',
    suffix: '+',
    icon: Building,
    color: 'text-blue-600',
    emoji: '🏢'
  },
  {
    id: '2',
    value: 180,
    label: 'Özel Turlar',
    suffix: '+',
    icon: Award,
    color: 'text-green-600',
    emoji: '✈️'
  },
  {
    id: '3',
    value: 150,
    label: 'Rehberlik',
    suffix: '+',
    icon: Users,
    color: 'text-purple-600',
    emoji: '🧭'
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
    <div className="text-center">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
        <span className="text-2xl">{stat.emoji}</span>
      </div>
      <div className="text-white font-medium mb-1">{stat.label}</div>
      <div className="text-sm text-white/70">{formatNumber(count)}{getFormattedSuffix(stat.value, stat.suffix)} Tur</div>
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
            Sayılarla <span className="text-blue-300">Parla Travel</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            15+ yıllık deneyimimiz ve başarılarımızla Türkiye turizminde
            öncülük eden güçlü bir ekibiz.
          </p>
        </div>

        {/* Stats Grid - Ortalanmış ve responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-blue-100 leading-relaxed">
              Her turumuzda kaliteyi, güveni ve profesyonelliği bir araya getirerek, 
              müşterilerimizin seyahat hayallerini gerçeğe dönüştürüyor, 
              unutulmaz anılar yaratıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}