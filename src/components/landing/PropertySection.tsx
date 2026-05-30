'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './PropertySection.module.css';

export function PropertySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useGSAP(() => {
    // Reveal gallery items with stagger
    if (galleryRef.current) {
      const items = galleryRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // Reveal quote
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="property" ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Setting"
          title="There is a reason this place looks like the frontier."
          align="left"
          subtitle="Iron Frontier is set on a two-acre property in Lampang, Northern Thailand — one hour from Chiang Mai, surrounded by mountains, rice fields, temples, and the kind of quiet that city life has made most men forget existed."
        />

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              The property has the character of an Old West frontier town — weathered wood, open land, buildings with history and personality. It is not a resort with a pool bar and a gift shop. It is a place that has earned its feel — and when you arrive, you will understand immediately why it works.
            </p>
            <p className={styles.paragraph}>
              While the rest of the world crowds into Bali and Koh Samui, Lampang sits largely undiscovered — one of the last truly authentic corners of Northern Thai culture. Horse-drawn carriages still move through the streets. Monks still walk at dawn. The mountains are close enough to feel and the river runs through the city like it has for a thousand years.
            </p>
            <p className={styles.paragraph}>
              Getting here takes intention. That is part of the design. Everything worth having costs something.
            </p>

            <blockquote ref={quoteRef} className={styles.quote}>
              "Lampang is not on the tourist trail. That is the point."
            </blockquote>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2</span>
                <span className={styles.statLabel}>Acres of private property</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1hr</span>
                <span className={styles.statLabel}>From Chiang Mai</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12</span>
                <span className={styles.statLabel}>Men max per cohort</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>7</span>
                <span className={styles.statLabel}>Days that will change you</span>
              </div>
            </div>
          </div>

          <div ref={galleryRef} className={styles.gallery}>
            <div className={`${styles.imageWrapper} ${styles.tall}`}>
              <Image 
                src="/images/property/outlaw-building.jpg"
                alt="The Out Law building at Iron Frontier"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/property/saloon.jpg"
                alt="Frontier saloon building"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/property/texas-rodeo.jpg"
                alt="Texas Rodeo building at sunset"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
