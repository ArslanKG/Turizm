import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone for Plesk hosting
  output: 'standalone',
  
  // Trailing slash configuration
  trailingSlash: false,

  // Image optimization - unoptimized for Plesk
  images: {
    // Plesk hosting için image optimization devre dışı
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental features - Plesk hosting optimizations
  experimental: {
    // Webpack build worker devre dışı - Plesk ve Windows için gerekli
    webpackBuildWorker: false,
  },

  // Server external packages (moved from experimental)
  serverExternalPackages: [],
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/turlar',
        permanent: true,
      },
      {
        source: '/projeler',
        destination: '/turlar',
        permanent: true,
      },
      {
        source: '/projeler/:slug*',
        destination: '/turlar/:slug*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/hakkimizda',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/career',
        destination: '/kariyer',
        permanent: true,
      }
    ];
  },


  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/types': './src/types',
    },
  },

  // Webpack configuration - Plesk hosting için cache devre dışı
  webpack: (config, { dev, isServer }) => {
    // Webpack cache'i tamamen devre dışı bırak - Plesk ve Windows için kritik
    config.cache = false;
    
    // File system snapshot devre dışı - cache hatalarını önler
    if (config.snapshot) {
      config.snapshot.managedPaths = [];
      config.snapshot.immutablePaths = [];
    }
    
    // Memory cache de devre dışı
    if (config.infrastructureLogging) {
      config.infrastructureLogging.level = 'error';
    }

    // Windows-specific optimizations
    if (process.platform === 'win32') {
      // Windows path handling
      config.resolve = config.resolve || {};
      config.resolve.symlinks = false;
      
      // Windows file watching optimizations (avoid readonly property error)
      const ignoredPaths = ['**/node_modules/**', '**/.git/**', '**/.next/**', '**/dist/**'];
      
      if (config.watchOptions) {
        // Create new watchOptions object to avoid readonly property issues
        config.watchOptions = {
          ...config.watchOptions,
          ignored: [
            ...(Array.isArray(config.watchOptions.ignored) ? config.watchOptions.ignored : []),
            ...ignoredPaths
          ],
          poll: 1000
        };
      } else {
        config.watchOptions = {
          ignored: ignoredPaths,
          poll: 1000
        };
      }
    }

    // Production builds için optimizasyonlar
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }

    return config;
  },
};

export default nextConfig;
