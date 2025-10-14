'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Kültür Turları', href: '/hizmetler/kultur-turlari' },
      { label: 'Otel Rezervasyonları', href: '/hizmetler/otel-rezervasyonu' },
      { label: 'Rehberlik Hizmetleri', href: '/hizmetler/rehberlik-hizmetleri' }
    ]
  },
  { label: 'Turlarımız', href: '/projeler' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kariyer', href: '/kariyer' },
  { label: 'İletişim', href: '/iletisim' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Ana sayfa dışındaki sayfalarda header her zaman koyu olsun
  const shouldUseTransparentHeader = pathname === '/';
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !shouldUseTransparentHeader
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo with Scroll Animation */}
          <Link href="/" className="flex items-center group ml-4">
            <Image
              src="/images/logo.png"
              alt="Parla Travel Logo"
              width={200}
              height={120}
              className="brightness-0 invert drop-shadow-2xl filter contrast-125 transition-all duration-500 group-hover:scale-105"
              style={{ width: "auto", height: "auto", maxHeight: "100px" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (dropdownTimeout) {
                        clearTimeout(dropdownTimeout);
                        setDropdownTimeout(null);
                      }
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 300);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    <button
                      className={cn(
                        'flex items-center space-x-1 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg relative',
                        isScrolled
                          ? 'text-white hover:text-orange-300 hover:bg-white/10'
                          : 'text-white hover:text-orange-200 hover:bg-white/10'
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-white py-3 shadow-2xl border border-gray-100 animate-fade-in-up group-hover:block">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              "block px-5 py-3 text-sm transition-all duration-200 rounded-lg mx-2 hover:translate-x-1",
                              pathname === child.href
                                ? "text-orange-600 bg-orange-50 font-medium"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-5 py-3 text-sm font-medium transition-all duration-300 rounded-lg relative group',
                      isScrolled
                        ? 'text-white hover:text-orange-300 hover:bg-white/10'
                        : 'text-white hover:text-orange-200 hover:bg-white/10'
                    )}
                  >
                    {item.label}
                    {/* Enhanced Active Page Indicator */}
                    <div
                      className={cn(
                        "absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-300 transition-all duration-300 rounded-full",
                        pathname === item.href ? 'w-8' : 'w-0 group-hover:w-6'
                      )}
                    ></div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'inline-flex items-center justify-center rounded-md p-2 transition-colors',
                isScrolled
                  ? 'text-white hover:bg-white/10 hover:text-orange-300'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMenu}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}