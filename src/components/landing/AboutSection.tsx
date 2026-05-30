'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './AboutSection.module.css';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal section quote
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
      }
    );

    // Stagger grid items
    if (gridRef.current) {
      const items = gridRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Truth"
          title="Iron Frontier was built for men who are ready."
          titleFont="playfair"
          align="center"
          subtitle="Not men who have it all figured out. Not men who are falling apart. Men who are somewhere in between — capable, driven, and quietly carrying more than they let on. Men who have built careers, relationships, and reputations. Men who know, deep down, that something is missing. Men who are ready to find out what that is."
        />

        <div className={styles.quoteWrapper}>
          <blockquote ref={quoteRef} className={styles.quote}>
            "We are not a spa. We are not a therapy office. We are not a Muay Thai camp."
          </blockquote>
        </div>

        <div ref={gridRef} className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.weAre}>We Are</span>
            </div>
            <ul className={styles.list}>
              <li>Direct & honest</li>
              <li>Bold but not aggressive</li>
              <li>Earned, not given</li>
              <li>Brotherhood-focused</li>
              <li>Premium but purposeful</li>
            </ul>
          </div>

          <div className={styles.cardCenter}>
            <p className={styles.centerText}>
              We are all three — and none of them. Iron Frontier is the only men's retreat in Northern Thailand that combines serious combat sports training with mental resilience work, body recovery, and genuine brotherhood.
            </p>
            <p className={styles.centerText}>
              It is intense and it is restorative. It is challenging and it is peaceful. It is the kind of experience that does not fit neatly into a category — because the men who need it don't fit neatly into one either.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.not}>We Are Not</span>
            </div>
            <ul className={styles.list}>
              <li>Soft or spa-like</li>
              <li>Clinical or therapy-speak</li>
              <li>Preachy or spiritual</li>
              <li>Apologetic about men</li>
              <li>Loud or chest-thumping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
