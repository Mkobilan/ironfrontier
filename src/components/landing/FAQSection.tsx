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
    question: "What is Iron Frontier and who is it designed for?",
    answer: "Iron Frontier is an exclusive men's transformation retreat based in Lampang, Northern Thailand. It is specifically designed for driven, capable men—executives, entrepreneurs, veterans, and individuals going through major life transitions—who are ready to step away from daily distractions, push their physical limits, and cultivate deep mental resilience alongside a trusted brotherhood."
  },
  {
    question: "Do I need prior Muay Thai or martial arts experience?",
    answer: "Absolutely not. Our training is fully customized. Whether you are a complete beginner who has never wrapped your hands, or an active competitive athlete, our expert Thai coaches design the sessions to meet you at your current level and push your boundaries safely."
  },
  {
    question: "Where is the retreat located and how do I get there?",
    answer: "We are located in Lampang, a peaceful and culturally rich province in Northern Thailand, free from the heavy tourist crowds. All guests receive complimentary private airport transfers from Chiang Mai International Airport (CNX). We handle your travel from the moment you land until the moment you depart."
  },
  {
    question: "What is included in the all-inclusive investment?",
    answer: "Your investment covers everything once you arrive in Thailand: private or premium shared accommodation on our dedicated compound, three high-protein chef-prepared Thai and Western meals daily, all daily training sessions and mental development workshops, physical recovery facilities (including ice baths and saunas), a welcome training gear kit, airport transfers, and curated cultural excursions."
  },
  {
    question: "How does the mental resilience aspect work?",
    answer: "Unlike traditional fitness camps or retreats, we dedicatedly focus on the inner fight. Each afternoon includes structured mental health and self-development workshops, journaling, group integration circles, and guided reflection. We address the silent pressure men carry, offering practical frameworks to navigate stress, transitions, and purpose."
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
