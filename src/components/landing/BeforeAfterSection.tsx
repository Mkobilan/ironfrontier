'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './BeforeAfterSection.module.css';

const BEFORE_ITEMS = [
  {
    time: "6:00 AM",
    title: "Waking Up Behind",
    description: "The alarm goes off. You hit snooze twice. You wake up already feeling behind on a day that hasn't started yet. You check your phone before your feet hit the floor."
  },
  {
    time: "9:00 AM",
    title: "The Performance",
    description: "You walk into the office, the meeting, the role you play. You put the armor on. Everyone thinks you have it together. You make sure they keep thinking that."
  },
  {
    time: "2:00 PM",
    title: "The Fog",
    description: "The caffeine wears off. The low-grade hum of anxiety sets in. You push through it, because that is what you do. You ignore the tension in your shoulders and the quiet voice asking 'is this it?'"
  },
  {
    time: "8:00 PM",
    title: "Numbing Out",
    description: "You're home, but you're not present. You pour a drink, or open an app, or turn on a screen to turn off your brain. You fall asleep exhausted, but not rested."
  }
];

const AFTER_ITEMS = [
  {
    time: "6:00 AM",
    title: "Waking Up Clear",
    description: "You wake up before the alarm. Your body feels heavy from yesterday's work, but your mind is sharp. You step outside, breathe the cool morning air, and realize you are exactly where you are supposed to be."
  },
  {
    time: "9:00 AM",
    title: "The Honest Work",
    description: "You are on the mats. You are sweating. You are failing. You are getting up. There is no armor here, no title to protect you. Just you, your breath, and a room full of men doing the exact same thing."
  },
  {
    time: "2:00 PM",
    title: "The Realization",
    description: "You sit in a circle and say a true thing you haven't said in a decade. No one tries to fix you. No one judges you. The weight you've been carrying gets just a little bit lighter."
  },
  {
    time: "8:00 PM",
    title: "True Rest",
    description: "You eat dinner with brothers. You laugh from your gut. You go to sleep with a tired body, a quiet mind, and a clear direction for the man you are going to be tomorrow."
  }
];

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const beforeTimelineRef = useRef<HTMLDivElement>(null);
  const afterTimelineRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Before Items
    if (beforeTimelineRef.current) {
      const items = beforeTimelineRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, x: -30, filter: 'grayscale(100%)' },
        {
          opacity: 1,
          x: 0,
          filter: 'grayscale(0%)',
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: beforeTimelineRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // Reveal Divider
    gsap.fromTo(
      dividerRef.current,
      { opacity: 0, scaleX: 0 },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 85%',
        },
      }
    );

    // Reveal After Items
    if (afterTimelineRef.current) {
      const items = afterTimelineRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: afterTimelineRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="A Day In His Life"
          title="Before. After."
          subtitle="The difference between surviving the day and actually living it."
        />

        <div className={styles.timelineContainer}>
          {/* Before Section */}
          <div className={styles.timelineHalf}>
            <h3 className={styles.halfTitle}>Before Iron Frontier</h3>
            <div ref={beforeTimelineRef} className={`${styles.timeline} ${styles.beforeTimeline}`}>
              {BEFORE_ITEMS.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timeLineMarker}></div>
                  <div className={styles.timeText}>{item.time}</div>
                  <div className={styles.itemContent}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div ref={dividerRef} className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerText}>THE TURNING POINT</div>
            <div className={styles.dividerLine}></div>
          </div>

          {/* After Section */}
          <div className={styles.timelineHalf}>
            <h3 className={`${styles.halfTitle} ${styles.afterTitle}`}>After Iron Frontier</h3>
            <div ref={afterTimelineRef} className={`${styles.timeline} ${styles.afterTimeline}`}>
              {AFTER_ITEMS.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timeLineMarker}></div>
                  <div className={styles.timeText}>{item.time}</div>
                  <div className={styles.itemContent}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
