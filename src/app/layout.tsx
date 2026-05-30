import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { ReactLenis } from "lenis/react";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  title: "Iron Frontier | Men's Transformation Retreat in Thailand",
  description: "A men's transformation retreat in Northern Thailand. Seven days of Muay Thai training, mental resilience work, brotherhood, and purposeful stillness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <GrainOverlay />
          <Navigation />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
