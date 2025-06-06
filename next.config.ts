import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
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
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
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
        destination: '/projeler',
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

  // Only use webpack for production builds
  // Turbopack handles development builds automatically
  webpack: (config, { dev }) => {
    // Skip webpack configuration for development when using Turbopack
    if (dev) {
      return config;
    }

    // Apply optimizations only for production builds
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

    return config;
  },
};

export default nextConfig;
