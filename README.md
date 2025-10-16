# 🏖️ Teddy Travel - Türkiye Turizm Website'i

Modern, responsive ve kullanıcı dostu turizm website'i. Next.js 15, React 19 ve TypeScript ile geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Next.js 15.3.3** - En güncel framework
- ⚛️ **React 19.0.0** - Modern React hooks ve features  
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS 4.x** - Modern CSS framework
- 📱 **Responsive Design** - Tüm cihazlarda uyumlu
- 🔍 **SEO Optimized** - Search engine friendly
- 🌐 **Multi-language Support** - Türkçe/İngilizce (hazır)
- ⚡ **Performance Optimized** - Fast loading times

## 💻 Windows Kurulum & Geliştirme

### 📋 Ön Koşullar

```powershell
# Node.js 18.20.6 (Önemli: Tam bu versiyon gerekli)
node --version  # v18.20.6 çıktısı vermeli

# npm 9.0.0+
npm --version   # 9.0.0+ çıktısı vermeli

# Git (Windows)
git --version
```

### 📥 Node.js 18.20.6 Kurulumu (Windows)

1. **Resmi Website'den İndir:**
   - https://nodejs.org/download/release/v18.20.6/
   - `node-v18.20.6-x64.msi` dosyasını indir

2. **Kurulumu Doğrula:**
   ```powershell
   node --version  # v18.20.6
   npm --version   # 9.8.1 (veya üstü)
   ```

### 🛠️ Proje Kurulumu

```powershell
# 1. Repository'yi klonla
git clone https://github.com/username/teddy-travel-website.git
cd teddy-travel-website

# 2. Bağımlılıkları kur (Windows optimize)
npm install --no-cache

# 3. Environment dosyasını hazırla
copy .env.example .env.local

# 4. Development server'ı başlat
npm run dev

# 5. Browser'da aç: http://localhost:3000
```

### 🔧 Windows-Specific Komutlar

```powershell
# Development (Windows optimize)
npm run dev:windows

# Production build (Windows optimize)  
npm run build:windows

# Cache temizleme (Windows)
npm run clean:windows

# Cross-platform temizleme
npm run clean
```

### 📁 Proje Yapısı

```
teddy-travel-website/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📄 layout.tsx      # Root layout
│   │   ├── 📄 page.tsx        # Ana sayfa
│   │   ├── 📁 blog/           # Blog sayfaları
│   │   ├── 📁 turlar/         # Tur sayfaları
│   │   ├── 📁 hizmetler/      # Hizmetler
│   │   ├── 📁 hakkimizda/     # Hakkımızda
│   │   └── 📁 iletisim/       # İletişim
│   ├── 📁 components/         # React bileşenleri
│   │   ├── 📁 layout/         # Layout bileşenleri
│   │   ├── 📁 sections/       # Sayfa bölümleri
│   │   └── 📁 ui/            # UI bileşenleri
│   ├── 📁 contexts/          # React contexts
│   ├── 📁 lib/               # Utility functions
│   └── 📁 types/             # TypeScript types
├── 📁 public/                # Static assets
├── 📄 package.json           # Dependencies
├── 📄 next.config.ts         # Next.js config
├── 📄 tsconfig.json          # TypeScript config
├── 📄 server.js              # Custom server
├── 📄 web.config             # IIS configuration
└── 📄 .env.local             # Environment variables
```

## 🚀 Development Scripts

```powershell
# Development server
npm run dev                    # Standard development
npm run dev:windows           # Windows optimize development

# Production build
npm run build                 # Standard production build
npm run build:production      # Production optimized
npm run build:windows        # Windows optimize build

# Testing & Quality
npm run lint                  # ESLint check
npm run type-check           # TypeScript check
npm run validate             # Lint + type check

# Deployment
npm run start                # Production server
npm run plesk-deploy        # Plesk hosting deploy

# Maintenance  
npm run clean               # Cross-platform cache clean
npm run clean:windows      # Windows specific clean
```

## 🌐 Environment Variables

Geliştirme için `.env.local` dosyasını düzenleyin:

```bash
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Windows Optimizations
UV_THREADPOOL_SIZE=16
NODE_OPTIONS=--max-old-space-size=4096

# Analytics (Production için)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Social Media Links
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/teddytravel
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/teddytravel
```

## 🔧 Windows Troubleshooting

### Yaygın Problemler ve Çözümler

#### 1. Port zaten kullanımda (EADDRINUSE)
```powershell
# Port'u kullanan process'i bul
netstat -ano | findstr :3000

# Process'i sonlandır (PID ile)
taskkill /PID <PID_NUMBER> /F
```

#### 2. Node.js versiyon uyumsuzluğu
```powershell
# Mevcut versiyon kontrolü
node --version

# Node.js 18.20.6 indirmek için:
# https://nodejs.org/download/release/v18.20.6/
```

#### 3. npm install hataları
```powershell
# Cache temizle ve tekrar kur
npm cache clean --force
rd /s /q node_modules
del package-lock.json
npm install --no-cache
```

#### 4. Build hataları
```powershell
# Tam temizleme
npm run clean:windows
npm install --no-cache
npm run build:windows
```

### Windows Performance Tips

```powershell
# Memory artırma (büyük projeler için)
set NODE_OPTIONS=--max-old-space-size=8192
npm run build

# Multi-core compilation
set UV_THREADPOOL_SIZE=16
npm run dev
```

## 📦 Production Deployment

### Plesk Hosting

```bash
# 1. Build production files
npm run build:production

# 2. Upload files to Plesk:
# - .next/ (build output)
# - public/ (static assets)  
# - package.json
# - server.js
# - web.config
# - .env.local (production values)

# 3. Plesk'te Node.js ayarları:
# - Node.js Version: 18.20.6
# - Application startup file: server.js
# - Application mode: Production
```

### Windows IIS

```powershell
# iisnode modülü gerekli
# web.config otomatik yapılandırılmış
# server.js IIS handler olarak ayarlanmış
```

## 🎨 Customization

### Tema Değişiklikleri
- `src/app/globals.css` - Global stiller
- `tailwind.config.js` - Tailwind ayarları
- `src/components/` - Component'ler

### İçerik Yönetimi
- `src/app/` - Sayfa yapısı
- `src/components/sections/` - Sayfa bölümleri
- `public/images/` - Görseller

## 📱 Responsive Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Telefon (büyük) */
md: 768px   /* Tablet */
lg: 1024px  /* Laptop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large Desktop */
```

## 🔒 Security Features

- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Secure environment variables
- ✅ Input validation
- ✅ SQL injection prevention

## 📊 Performance Metrics

Target performance goals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 800ms

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📞 Support

- **Website**: https://www.teddytravel.net
- **Email**: info@teddytravel.net
- **Support**: destek@teddytravel.net

## 📄 License

MIT License - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## ⚡ Quick Start (Windows)

```powershell
# Hızlı başlangıç (3 komut)
git clone <repo-url> && cd teddy-travel-website
npm install --no-cache
npm run dev

# Browser: http://localhost:3000 🚀
```

**Developed with ❤️ for Teddy Travel**
