'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WhoSection.module.css';

const FOR_YOU = [
  "You are a man between 30 and 60 who is ready to invest seriously in yourself",
  "Executives and entrepreneurs who have built something great — and forgotten themselves in the process",
  "Men going through a transition — divorce, loss, career change, a decade that didn't go the way they planned",
  "Athletes and fitness-focused men who want to push their bodies and their minds at the same time",
  "Veterans and first responders carrying weight that doesn't have a name yet",
  "Men who have tried therapy, meditation apps, and self-help books — and want something that actually works",
  "Men who would never call this a \"wellness retreat\" — but know they need exactly this"
];

const NOT_FOR_YOU = [
  "You are looking for a beach vacation with a yoga class bolted on",
  "You are not willing to do uncomfortable inner work alongside the physical training",
  "You have serious untreated mental health conditions that require clinical supervision — we are a retreat, not a medical facility",
  "You are not willing to be in a small group and engage honestly with other men"
];

export function WhoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listRefNegative = useRef<HTMLUListElement>(null);

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
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    
    if (listRefNegative.current) {
      const itemsNegative = listRefNegative.current.children;
      gsap.fromTo(
        itemsNegative,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: listRefNegative.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <SectionHeading 
            eyebrow="Who This Is For"
            title="You came alone. You won't leave that way."
            align="center"
            subtitle="Iron Frontier was built for men who arrive solo and leave with brothers. Most of our guests have never done anything like this before. They are:"
          />
        </div>

        <div className={styles.listGrid}>
          <div className={styles.listCard}>
            <h3 className={styles.listHeader}>Iron Frontier is for you if:</h3>
            <ul ref={listRef} className={styles.list}>
              {FOR_YOU.map((audience, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.check}>✓</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`${styles.listCard} ${styles.listCardNegative}`}>
            <h3 className={styles.listHeader}>Iron Frontier is NOT for you if:</h3>
            <ul ref={listRefNegative} className={styles.list}>
              {NOT_FOR_YOU.map((audience, i) => (
                <li key={i} className={`${styles.listItem} ${styles.listItemNegative}`}>
                  <span className={styles.cross}>✗</span>
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
