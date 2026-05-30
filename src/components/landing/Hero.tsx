'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import styles from './Hero.module.css';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in location and brand
    tl.fromTo(
      locationRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    );

    // Fade in title line by line (using simple opacity/y for now without SplitText)
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.5'
    );

    // Fade in subtitle text
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' },
      '-=0.5'
    );

    // Parallax effect on background
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={`${styles.bgWrapper} parallax-wrapper`}>
        {/* We'll use the provided frontier-entrance image as the hero bg */}
        <Image
          src="/images/property/frontier-entrance.jpg"
          alt="Iron Frontier compound in Northern Thailand"
          fill
          priority
          className="hero-bg parallax-bg"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div ref={locationRef} className={styles.eyebrow}>
          Lampang, Northern Thailand
        </div>
        
        <h1 ref={titleRef} className={styles.title}>
          You did everything right. <br />
          <span className={styles.titleHighlight}>So why does something feel wrong?</span>
        </h1>
        
        <p ref={textRef} className={styles.subtitle}>
          You built the career. You showed up. You kept it together when things got hard. But somewhere in the last few years, something shifted — a quiet restlessness, a body that's tired in a way sleep doesn't fix, a life that looks right from the outside and feels hollow from the inside. Iron Frontier is seven days in Northern Thailand that will change that.
        </p>
      </div>

      <div className={styles.scrollIndicatorWrapper}>
        <ScrollIndicator />
      </div>
    </section>
  );
}
