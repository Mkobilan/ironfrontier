'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ObjectionsSection.module.css';

interface Objection {
  quote: string;
  response: string;
}

const OBJECTIONS: Objection[] = [
  {
    quote: "I'm not in good enough shape for this.",
    response: "The training is scaled to you. We've had competitive athletes and men who haven't worked out in a decade. You do not need to be in shape. You need to be willing to sweat, fail, and get up."
  },
  {
    quote: "I don't do therapy or sit in circles crying.",
    response: "Neither do we. We sit in circles and tell the truth. No clinical language, no manufactured drama. Just honest conversations between men carrying real weight."
  },
  {
    quote: "I don't have time to take 7 days off.",
    response: "You are taking the time eventually — either on your own terms to rebuild, or on a doctor's terms when the burnout catches you. This is an investment that buys you back years of clarity."
  },
  {
    quote: "I'm not a fighter.",
    response: "Good. The ring isn't about becoming a fighter. It's about discovering what happens when you can't delegate the hard part, when you can't talk your way out, and when you just have to do the work."
  },
  {
    quote: "Is this a spiritual retreat?",
    response: "No. No gurus, no dogmas, no preaching. We use what works: physical exhaustion, brotherhood, and stillness. You find your own True North."
  },
  {
    quote: "I can just go to a nice resort and relax.",
    response: "A resort numbs you for a week so you can tolerate returning to a life you're exhausted by. We rebuild you so you can return to your life and actually lead it."
  },
  {
    quote: "I don't know anyone else going.",
    response: "Every man who arrives here came alone. The shared friction of training and honest work builds a brotherhood in three days that most men haven't found in three decades."
  }
];

export function ObjectionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleObjection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Voice In Your Head"
          title="We know what you're thinking."
          subtitle="Every man who has ever attended Iron Frontier had at least one of these thoughts before booking."
        />

        <div className={styles.list}>
          {OBJECTIONS.map((obj, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.card} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleObjection(index)}
              >
                <button 
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                >
                  <span className={styles.quoteText}>"{obj.quote}"</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={styles.answerWrapper}
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className={styles.answerContent}>
                    <p className={styles.responseText}>{obj.response}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
