'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WhoSection.module.css';

const AUDIENCES = [
  "Executives and entrepreneurs who have built something great — and forgotten themselves in the process",
  "Men going through a transition — divorce, loss, career change, a decade that didn't go the way they planned",
  "Athletes and fitness-focused men who want to push their bodies and their minds at the same time",
  "Veterans and first responders carrying weight that doesn't have a name yet",
  "Men who have tried therapy, meditation apps, and self-help books — and want something that actually works",
  "Men who would never call this a \"wellness retreat\" — but know they need exactly this"
];

export function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (listRef.current) {
      const items = listRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <SectionHeading 
              eyebrow="Who This Is For"
              title="You came alone. You won't leave that way."
              align="left"
              subtitle="Iron Frontier was built for men who arrive solo and leave with brothers. Most of our guests have never done anything like this before. They are:"
            />
          </div>

          <div className={styles.listContent}>
            <ul ref={listRef} className={styles.list}>
              {AUDIENCES.map((audience, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.check}>✓</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
