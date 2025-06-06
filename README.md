# Parla Group Corporate Website

Modern, responsive corporate website for Parla Group - a leading construction and urban transformation company in Turkey.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Complete meta tags, structured data, and performance optimization
- **Fast Performance**: Next.js 15 with Turbopack for lightning-fast development
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Multi-language Ready**: Turkish content with structure for internationalization

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Build Tool**: Turbopack

## 📱 Pages

- **Homepage** (`/`) - Hero section, services preview, featured projects
- **About** (`/hakkimizda`) - Company story, values, timeline, team
- **Services** (`/hizmetler`) - Service grid with detailed pages:
  - Urban Transformation (`/hizmetler/kentsel-donusum`)
  - Construction (`/hizmetler/insaat`)
  - Architecture (`/hizmetler/mimarlik`)
  - Project Management (`/hizmetler/proje-yonetimi`)
- **Projects** (`/projeler`) - Project showcase with filtering
- **Blog** (`/blog`) - News and insights with categories
- **Career** (`/kariyer`) - Job positions, benefits, application form
- **Contact** (`/iletisim`) - Contact form, map, company information

## 🏗 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with meta tags
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── [pages]/           # Individual page routes
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, About, etc.)
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/parlagroup/website.git
cd parla-group-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3002](http://localhost:3002) in your browser.

## 📋 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.parlagroup.com
NEXT_PUBLIC_SITE_NAME="Parla Group"

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
NEXT_PUBLIC_GOOGLE_TAG_MANAGER=your-gtm-id

# Contact Form
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

### SEO Configuration

The website includes comprehensive SEO optimization:

- **Meta Tags**: Complete Open Graph and Twitter Card tags
- **Structured Data**: JSON-LD for organization and services
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization

## 🎨 Customization

### Colors & Branding

Primary brand colors are defined in `tailwind.config.js`:
- Primary: Orange (#f97316)
- Secondary: Gray (#64748b)
- Accent: Blue (#3b82f6)

### Content Updates

1. **Company Information**: Update in `src/components/sections/`
2. **Services**: Modify service data in respective section files
3. **Projects**: Update project data in `src/components/sections/ProjectsGrid.tsx`
4. **Team**: Update team information in `src/components/sections/TeamSection.tsx`

## 📊 Performance

The website is optimized for performance:

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Tree shaking and dead code elimination

## 🔒 Security

Security headers are configured in `next.config.ts`:

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

## 📱 Responsive Design

Responsive breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Manual Deployment

```bash
npm run build
npm run start
```

## 📞 Support

For technical support or questions:

- **Email**: info@parlagroup.com
- **Phone**: +90 (212) 555-0123
- **Website**: [www.parlagroup.com](https://www.parlagroup.com)

## 📄 License

© 2024 Parla Group. All rights reserved.

---

**Built with ❤️ by Parla Group Development Team**
