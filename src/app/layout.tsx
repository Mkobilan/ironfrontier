import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { fontVariables } from "@/lib/fonts";
import { ReactLenis } from "lenis/react";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ironfrontier.vercel.app'),
  title: {
    default: "Iron Frontier | Premium Men's Transformation Retreat Thailand",
    template: "%s | Iron Frontier"
  },
  description: "An exclusive all-inclusive men's transformation retreat in Lampang, Northern Thailand. Combining Muay Thai & MMA training, deep mental resilience workshops, recovery, and genuine brotherhood.",
  keywords: ["mens retreat", "transformation retreat", "Muay Thai retreat Thailand", "mens mental health retreat", "fitness retreat Lampang", "mens brotherhood", "all-inclusive fitness camp"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Iron Frontier | Premium Men's Transformation Retreat Thailand",
    description: "An exclusive all-inclusive men's transformation retreat in Lampang, Northern Thailand. Muay Thai training, mental resilience workshops, and purposeful recovery.",
    url: 'https://ironfrontier.vercel.app',
    siteName: 'Iron Frontier',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Iron Frontier | Premium Men's Transformation Retreat Thailand",
    description: "An exclusive all-inclusive men's transformation retreat in Lampang, Northern Thailand. Muay Thai training, mental resilience workshops, and purposeful recovery.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'wnwX0v0OGT7E25CuYA6r3_NjExggVU9PFITJXnpMp8U',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Iron Frontier",
  "image": "https://ironfrontier.vercel.app/images/property/iron_frontier_brand_logo_1780129626942.png",
  "description": "An exclusive all-inclusive men's transformation retreat in Lampang, Northern Thailand. We combine elite Muay Thai/MMA physical training with structured mental resilience workshops, professional body recovery, and genuine life-long brotherhood.",
  "@id": "https://ironfrontier.vercel.app/#organization",
  "url": "https://ironfrontier.vercel.app",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lampang",
    "addressLocality": "Lampang",
    "addressRegion": "Northern Thailand",
    "postalCode": "52000",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.2855",
    "longitude": "99.4929"
  },
  "priceRange": "$$$$"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <GrainOverlay />
          <Navigation />
          {children}
          <Footer />
        </ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}

