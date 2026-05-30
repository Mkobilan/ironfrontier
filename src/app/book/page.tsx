import type { Metadata } from 'next';
import { Divider } from '@/components/ui/Divider';
import { BookingForm } from './BookingForm';
import styles from './book.module.css';

export const metadata: Metadata = {
  title: 'Reserve Your Spot | Iron Frontier',
  description:
    'Applications are now open for upcoming Iron Frontier cohorts. Join 12 men for a 7-day transformation retreat in Northern Thailand.',
};

const recapItems = [
  '7-day all-inclusive transformation retreat',
  'Lampang, Northern Thailand',
  'Limited to 12 men per cohort',
  '$1,200 all-inclusive',
  'Muay Thai, mental resilience, brotherhood, purposeful stillness',
];

const trustItems = [
  { icon: '✦', text: 'No payment required to apply' },
  { icon: '✦', text: 'We review every application personally' },
  { icon: '✦', text: "You'll hear back within 48 hours" },
];

export default function BookPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>RESERVE YOUR SPOT</h1>
          <p className={styles.heroSubtitle}>
            Applications are now open for upcoming cohorts.
          </p>
        </div>
      </section>

      {/* ── What You're Signing Up For ── */}
      <section className={`${styles.recapSection} section-padding`}>
        <div className="container">
          <div className={styles.recapInner}>
            <h2 className={styles.recapHeading}>
              What You&rsquo;re Signing Up For
            </h2>
            <ul className={styles.recapList}>
              {recapItems.map((item) => (
                <li key={item} className={styles.recapItem}>
                  <span className={styles.recapMarker} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Application Form ── */}
      <section className={`${styles.formSection} section-padding`}>
        <div className="container">
          <BookingForm />
        </div>
      </section>

      <Divider />

      {/* ── Trust / FAQ ── */}
      <section className={`${styles.trustSection} section-padding`}>
        <div className="container">
          <div className={styles.trustInner}>
            <h2 className={styles.trustHeading}>Before You Apply</h2>
            <ul className={styles.trustList}>
              {trustItems.map((item) => (
                <li key={item.text} className={styles.trustItem}>
                  <span className={styles.trustIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
