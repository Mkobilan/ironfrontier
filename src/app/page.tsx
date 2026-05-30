import Image from 'next/image';
import { Hero } from '@/components/landing/Hero';
import { AboutSection } from '@/components/landing/AboutSection';
import { PillarSection } from '@/components/landing/PillarSection';
import { PropertySection } from '@/components/landing/PropertySection';
import { WhoSection } from '@/components/landing/WhoSection';
import { BrotherhoodSection } from '@/components/landing/BrotherhoodSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTASection } from '@/components/landing/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh', 
        backgroundColor: 'var(--color-void)',
        padding: 'var(--space-4xl) var(--space-xl)'
      }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', aspectRatio: '1/1' }}>
          <Image 
            src="/images/property/iron_frontier_brand_logo_1780129626942.png" 
            alt="Iron Frontier Brand" 
            fill
            style={{ 
              opacity: 0.9, 
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(200, 149, 108, 0.15))'
            }}
          />
        </div>
      </div>

      <AboutSection />
      <PillarSection />
      <PropertySection />
      <WhoSection />
      <BrotherhoodSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

