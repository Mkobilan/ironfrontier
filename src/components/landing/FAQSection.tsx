'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './FAQSection.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Where exactly is Iron Frontier located?",
    answer: "We are located in Lampang, a peaceful and culturally rich province in Northern Thailand, one hour outside of Chiang Mai and free from the heavy tourist crowds. All guests receive complimentary private airport transfers from Chiang Mai International Airport (CNX). We handle your travel from the moment you land until the moment you depart."
  },
  {
    question: "Do I need any Muay Thai or martial arts experience?",
    answer: "Absolutely not. Our training is fully customized. Whether you are a complete beginner who has never wrapped your hands, or an active competitive athlete, our expert Thai coaches design the sessions to meet you at your current level and push your boundaries safely."
  },
  {
    question: "What fitness level do I need?",
    answer: "You do not need to be in peak physical condition to attend, but you do need to be medically cleared for strenuous exercise. The training is scaled to your abilities, but it will be physically demanding. If you show up willing to work, you will be fine."
  },
  {
    question: "What is the group like? Who else will be there?",
    answer: "Cohorts are strictly capped at 12 men. Our guests are typically between 30 and 60 years old—executives, entrepreneurs, veterans, and capable men going through a transition. They are men who want to push themselves physically and engage honestly mentally. We vet every application to ensure group cohesion."
  },
  {
    question: "Is this therapy? Do you have licensed therapists?",
    answer: "No, this is not therapy and we are not a medical facility. We provide structured coaching, resilience workshops, and peer-led men's circles. If you are experiencing a severe mental health crisis or require clinical supervision, Iron Frontier is not the right fit for you."
  },
  {
    question: "What if I have a physical injury or health condition?",
    answer: "You must disclose all injuries and health conditions in your application. While our coaches are experts at modifying training around minor injuries, you must be physically capable of participating in daily athletic activity. We recommend consulting your physician before applying."
  },
  {
    question: "Is alcohol available?",
    answer: "No. Iron Frontier is a completely dry property. The work we do here requires a clear mind and optimal physical recovery. If you cannot go seven days without a drink, this is not the retreat for you."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We require a $300 non-refundable deposit to secure your spot. The remaining balance is due 30 days before the retreat begins. Cancellations made 30+ days in advance will receive a full refund minus the deposit. Cancellations made within 30 days are non-refundable but can be credited toward a future retreat."
  },
  {
    question: "Will I have free time?",
    answer: "Yes. While the schedule is intentionally structured, we build in dedicated time for recovery, journaling, and stillness. You will have time to read, use the pool and ice bath, or simply rest. Recovery is a non-negotiable part of the process."
  },
  {
    question: "What happens after the retreat?",
    answer: "The real work begins when you go home. Every guest leaves with a 30-day integration plan to bridge the gap between the retreat and their daily life. You also gain lifetime access to the Iron Frontier Alumni Network—a private community of men who have completed the program."
  },
  {
    question: "How do I get to Lampang?",
    answer: "You will fly into Chiang Mai International Airport (CNX). Our team will greet you at the airport and provide private transport directly to the Iron Frontier compound in Lampang. The drive takes approximately one hour. We handle everything from the moment you land."
  },
  {
    question: "Can I bring a friend or group?",
    answer: "Yes. While most men attend solo, we welcome pairs or small groups who are committed to the same work. We offer a 10% discount for groups of 4 or more booking together. However, you will still be expected to engage fully with the rest of the cohort."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section-padding ${styles.section}`}>
      {/* Schema Markup for GEO / Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="container">
        <SectionHeading 
          eyebrow="Common Questions"
          title="CLARITY BEFORE COMMITMENT"
          subtitle="Everything you need to know about embarking on the Iron Frontier journey."
        />

        <div className={styles.faqList}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <button 
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={styles.answerWrapper}
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{faq.answer}</p>
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
