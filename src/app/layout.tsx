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
    default: "Parla Group - Kentsel Dönüşüm, İnşaat & Mimarlık",
    template: "%s | Parla Group"
  },
  description: "15+ yıllık deneyimle kentsel dönüşüm, inşaat ve mimarlık alanlarında öncü projeler gerçekleştiren Parla Group ile tanışın. İstanbul'da konut, ticari ve kentsel dönüşüm projeleri.",
  keywords: [
    "kentsel dönüşüm", "inşaat", "mimarlık", "istanbul", "proje geliştirme",
    "konut projeleri", "ticari kompleks", "yapı denetim", "mimari tasarım",
    "sürdürülebilir inşaat", "modern mimarlık", "parla group", "türkiye"
  ],
  authors: [{ name: "Parla Group", url: "https://www.parlagroup.com" }],
  creator: "Parla Group",
  publisher: "Parla Group",
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
    url: "https://www.parlagroup.com",
    title: "Parla Group - Kentsel Dönüşüm, İnşaat & Mimarlık",
    description: "15+ yıllık deneyimle kentsel dönüşüm, inşaat ve mimarlık alanlarında öncü projeler gerçekleştiren Parla Group ile tanışın.",
    siteName: "Parla Group",
    images: [
      {
        url: "https://www.parlagroup.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parla Group - Kentsel Dönüşüm ve İnşaat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parla Group - Kentsel Dönüşüm, İnşaat & Mimarlık",
    description: "15+ yıllık deneyimle kentsel dönüşüm, inşaat ve mimarlık alanlarında öncü projeler gerçekleştiren Parla Group ile tanışın.",
    images: ["https://www.parlagroup.com/images/og-image.jpg"],
    creator: "@parlagroup",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "construction",
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
