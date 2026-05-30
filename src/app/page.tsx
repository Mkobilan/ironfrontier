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
      <AboutSection />
      <PillarSection />
      <PropertySection />
      <WhoSection />
      <BrotherhoodSection />
      <CTASection />
    </main>
  );
}
