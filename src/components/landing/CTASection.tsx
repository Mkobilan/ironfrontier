'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './CTASection.module.css';

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Simple fade and scale for the CTA content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <div ref={contentRef} className={styles.content}>
          <div className={styles.glow} />
          
          <SectionHeading 
            eyebrow="The Decision"
            title="Seven days. One frontier. Everything changes."
            align="center"
          />

          <p className={styles.description}>
            Iron Frontier is not for everyone. It requires you to get on a plane to Northern Thailand, train twice a day, sit in uncomfortable conversations, and invest seriously in yourself. The question is not whether you need this. You already know the answer to that. The question is whether you are ready to go.
          </p>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>All-inclusive</div>
            <div className={styles.detailItem}>7-day retreat</div>
            <div className={styles.detailItem}>Lampang, Thailand</div>
            <div className={styles.detailItem}>Limited to 12 men per cohort</div>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" href="/book">
              Begin Your Journey
            </Button>
            <Button variant="ghost" size="lg" href="/schedule">
              View the Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
