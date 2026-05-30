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
    quote: "I'm not really a retreat kind of guy.",
    response: "Good. Most of our guys said exactly that. A man who is enthusiastically \"a retreat guy\" is probably not the man who needs Iron Frontier most. We built this for men who are skeptical — because skeptical men are usually the ones who have already tried the easier answers and found them wanting. If the idea makes you uncomfortable, that's information worth listening to."
  },
  {
    quote: "I don't have time to be away for a week.",
    response: "The men who say they can't afford a week away are the men who most need one. Ask yourself honestly: when was the last time you took a week that was genuinely, completely yours? Not a family holiday. Not a work trip. Yours. Seven days. You will not regret spending them on yourself. You may regret spending another year without doing it."
  },
  {
    quote: "I'm not fit enough. I've never done Muay Thai before.",
    response: "Neither had most of our men. Iron Frontier is not a fight camp for professional athletes. It is a transformation retreat that uses combat training as a vehicle — because there is no better one. Our Thai trainers work with every level, every body, every starting point. You will not be judged for where you start. You will be respected for showing up."
  },
  {
    quote: "Thailand is a long way to go.",
    response: "Yes. It is. That is exactly the point. The distance is part of the medicine. When you are far enough from your ordinary life — your routine, your role, your reputation — you finally get access to the parts of yourself that those things have been covering. Lampang is a remote, purposeful destination. It rewards those willing to make the journey."
  },
  {
    quote: "$1,200 is a lot of money.",
    response: "You spend more than $1,200 per year on things that do not change you. Dinners out. Subscriptions. Gear you use twice. This is the most cost-effective transformation available to you anywhere on earth — seven all-inclusive days in Thailand with world-class trainers, coaching, accommodation, food, and cultural immersion. The question is not whether you can afford it. The question is whether you can afford not to."
  },
  {
    quote: "I'm worried it'll be too touchy-feely.",
    response: "You will train Muay Thai twice a day. Your hands will be wrapped. You will sweat through your shirt before breakfast. You will be physically exhausted in the best way possible by Day 3. The inner work at Iron Frontier is done on the other side of that physical effort — and that changes everything. We lead with the body. The rest follows. Not the other way around."
  },
  {
    quote: "What if I'm the only one who feels like this?",
    response: "You won't be. You will sit across a dinner table from eleven men — from different countries, different careers, different life situations — who felt exactly the way you feel right now when they booked. That shared recognition is one of the most powerful parts of the Iron Frontier experience. You came alone. You won't leave that way."
  },
  {
    quote: "Is this safe? What about injuries?",
    response: "Our training sessions are supervised by experienced Thai trainers who work with all fitness levels. Intensity is calibrated to the individual. We have first aid on-site and medical facilities are accessible nearby. Our program is designed to challenge you — not break you. We have never had a serious injury at Iron Frontier. Your safety is part of the design."
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
                    maxHeight: isOpen ? '400px' : '0',
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
