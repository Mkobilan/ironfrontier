'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import styles from './HookSection.module.css';

const QUESTIONS = [
  "Be honest with yourself for a moment.",
  "When was the last time you had a conversation — a real one, with another man — about what it actually takes to carry the weight you're carrying?",
  "When was the last time you pushed your body until your mind had no choice but to go completely quiet?"
];

export function HookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (questionsRef.current) {
      const items = questionsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: questionsRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    gsap.fromTo(
      closingRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: closingRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-padding ${styles.section}`}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.content}>
          <div ref={questionsRef} className={styles.questionsContainer}>
            {QUESTIONS.map((question, index) => (
              <blockquote key={index} className={styles.question}>
                {question}
              </blockquote>
            ))}
          </div>

          <div ref={closingRef} className={styles.closingCard}>
            <p className={styles.closingText}>
              The men who arrive at Iron Frontier are not broken. They are overloaded, underlived, and ready — even if they don't know it yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
