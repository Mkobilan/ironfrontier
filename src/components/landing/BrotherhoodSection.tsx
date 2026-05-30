'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './BrotherhoodSection.module.css';

export function BrotherhoodSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on the background image
    gsap.to('.brotherhood-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Reveal the floating card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.bgWrapper} parallax-wrapper`}>
        <Image 
          src="/images/property/cabin-courtyard.jpg"
          alt="Iron Frontier property courtyard"
          fill
          className="brotherhood-bg parallax-bg"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div ref={cardRef} className={styles.card}>
          <SectionHeading 
            eyebrow="The Brotherhood"
            title="The most dangerous thing a man can be is isolated."
            align="center"
          />
          
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8-12</span>
              <span className={styles.statLabel}>Men maximum per retreat</span>
            </div>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              We keep our groups small. That is not a limitation. That is the design. What happens when a small group of men train together, eat together, challenge themselves together, and sit in honest conversation together is something that does not have a name in most men's lives. 
            </p>
            <p className={styles.paragraph}>
              It is brotherhood. And for many of the men who leave Iron Frontier, it becomes the thing they value most. No performance. No hierarchy. Just men doing the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
