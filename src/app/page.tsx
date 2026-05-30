import Image from 'next/image';
import { Hero } from '@/components/landing/Hero';
import { AboutSection } from '@/components/landing/AboutSection';
import { PillarSection } from '@/components/landing/PillarSection';
import { PropertySection } from '@/components/landing/PropertySection';
import { WhoSection } from '@/components/landing/WhoSection';
import { BrotherhoodSection } from '@/components/landing/BrotherhoodSection';
import { CTASection } from '@/components/landing/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--space-6xl) 0 var(--space-2xl)', backgroundColor: 'var(--color-void)' }}>
        <Image 
          src="/images/property/iron_frontier_brand_logo_1780129626942.png" 
          alt="Iron Frontier Brand" 
          width={160} 
          height={160} 
          style={{ 
            opacity: 0.9, 
            objectFit: 'contain'
          }}
        />
      </div>

      <AboutSection />
      <PillarSection />
      <PropertySection />
      <WhoSection />
      <BrotherhoodSection />
      <CTASection />
    </main>
  );
}
