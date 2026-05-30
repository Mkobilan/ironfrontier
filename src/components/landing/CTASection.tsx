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
            title="This is seven days for you."
            align="center"
            subtitle="You don't need to be ready. You just need to be willing."
          />

          <p className={styles.description}>
            You have been doing the right things for everyone else for a long time. Seven days to train something real, cut away what you've been carrying, find your direction, and come home as a more complete version of the man you already are.
          </p>
          <p className={styles.description}>
            If something on this page made you stop and think — that is not an accident.
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
