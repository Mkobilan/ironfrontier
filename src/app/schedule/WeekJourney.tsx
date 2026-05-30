'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WeekJourney.module.css';

const JOURNEY_DAYS = [
  {
    day: "Day 1",
    title: "Arrival",
    description: "You arrive. You stop performing. You let your nervous system catch up to your body. Welcome to the Outpost."
  },
  {
    day: "Day 2",
    title: "The Body Wakes Up",
    description: "First sessions on the mats. The body remembers what it feels like to move with purpose. The noise starts to quiet."
  },
  {
    day: "Day 3",
    title: "The Friction",
    description: "The physical fatigue sets in, and the mental defenses drop. This is where the real work begins."
  },
  {
    day: "Day 4",
    title: "Going Deeper",
    description: "Cutting away the deadwood. Honest conversation in the circles. Naming the weight you've been carrying."
  },
  {
    day: "Day 5",
    title: "The Turning Point",
    description: "The shift happens. The exhaustion turns into clarity. You begin mapping your True North."
  },
  {
    day: "Day 6",
    title: "Forge It",
    description: "You are stronger than when you arrived. The brotherhood is solidified. The vision for what comes next is clear."
  },
  {
    day: "Day 7",
    title: "Carry It Home",
    description: "You don't leave Iron Frontier behind. You take it with you. You leave as a more complete version of the man you already are."
  }
];

export function WeekJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scrollRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Arc"
          title="The Seven Day Journey"
          subtitle="Transformation doesn't happen by accident. It follows a specific, intentional rhythm."
        />

        <div className={styles.scrollWrapper}>
          <div ref={scrollRef} className={styles.cardsContainer}>
            {JOURNEY_DAYS.map((day, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.dayNumber}>{day.day}</span>
                  <div className={styles.line}></div>
                </div>
                <h4 className={styles.cardTitle}>{day.title}</h4>
                <p className={styles.cardDescription}>{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
