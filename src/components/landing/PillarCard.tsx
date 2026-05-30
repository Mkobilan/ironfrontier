'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import styles from './PillarCard.module.css';

interface PillarCardProps {
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  index: number;
}

export function PillarCard({ icon, name, tagline, description, features, index }: PillarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: isEven ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className={`${styles.card} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tagline}>"{tagline}"</p>
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.featureList}>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
