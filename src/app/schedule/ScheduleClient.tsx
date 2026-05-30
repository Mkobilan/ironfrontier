'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsapConfig';
import styles from './schedule.module.css';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

interface ScheduleTimelineProps {
  items: ScheduleItem[];
}

export function ScheduleTimeline({ items }: ScheduleTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!timelineRef.current) return;

      const timelineItems =
        timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);

      gsap.set(timelineItems, {
        opacity: 0,
        x: -40,
      });

      ScrollTrigger.batch(timelineItems, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
          });
        },
        start: 'top 85%',
        once: true,
      });
    },
    { scope: timelineRef }
  );

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timeLabel}>{item.time}</div>
          <div className={styles.activityTitle}>{item.title}</div>
          {item.description && (
            <div className={styles.activityDescription}>
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
