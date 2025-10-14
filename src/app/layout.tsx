import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Parla Travel - Türkiye Turları & Seyahat Hizmetleri",
    template: "%s | Parla Travel"
  },
  description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Parla Travel ile tanışın. Kültür turları, otel rezervasyonları ve rehberlik hizmetleri.",
  keywords: [
    "türkiye turları", "kültür gezileri", "otel rezervasyonu", "rehberlik hizmeti", "seyahat acentesi",
    "tatil paketleri", "istanbul turları", "kapadokya turları", "pamukkale", "efes",
    "türkiye seyahat", "grup turları", "parla travel", "turizm"
  ],
  authors: [{ name: "Parla Travel", url: "https://www.parlatravel.com" }],
  creator: "Parla Travel",
  publisher: "Parla Travel",
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
    canonical: "https://www.parlagroup.com",
    languages: {
      'tr-TR': 'https://www.parlagroup.com',
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.parlatravel.com",
    title: "Parla Travel - Türkiye Turları & Seyahat Hizmetleri",
    description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Parla Travel ile tanışın.",
    siteName: "Parla Travel",
    images: [
      {
        url: "https://www.parlagroup.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parla Travel - Türkiye Turları ve Seyahat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parla Travel - Türkiye Turları & Seyahat Hizmetleri",
    description: "15+ yıllık deneyimle Türkiye'nin en güzel destinasyonlarını keşfetmeniz için özel turlar düzenleyen Parla Travel ile tanışın.",
    images: ["https://www.parlatravel.com/images/og-image.jpg"],
    creator: "@parlagroup",
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
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
