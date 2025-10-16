import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Teddy Travel - Türkiye Turları & Seyahat Hizmetleri",
    template: "%s | Teddy Travel"
  },
  description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Teddy Travel ile tanışın. Kültür turları, otel rezervasyonları ve rehberlik hizmetleri.",
  keywords: [
    "türkiye turları", "kültür gezileri", "otel rezervasyonu", "rehberlik hizmeti", "seyahat acentesi",
    "tatil paketleri", "istanbul turları", "kapadokya turları", "pamukkale", "efes",
    "türkiye seyahat", "grup turları", "teddy travel", "turizm"
  ],
  authors: [{ name: "Teddy Travel", url: "https://www.teddytravel.net" }],
  creator: "Teddy Travel",
  publisher: "Teddy Travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.teddytravel.net",
    languages: {
      'tr-TR': 'https://www.teddytravel.net',
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.teddytravel.net",
    title: "Teddy Travel - Türkiye Turları & Seyahat Hizmetleri",
    description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Teddy Travel ile tanışın.",
    siteName: "Teddy Travel",
    images: [
      {
        url: "https://www.teddytravel.net/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teddy Travel - Türkiye Turları ve Seyahat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy Travel - Türkiye Turları & Seyahat Hizmetleri",
    description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Teddy Travel ile tanışın.",
    images: ["https://www.teddytravel.net/images/og-image.jpg"],
    creator: "@teddytravel",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "travel",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
