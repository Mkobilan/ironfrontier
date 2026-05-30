import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { ScheduleTimeline } from './ScheduleClient';
import { WeekJourney } from './WeekJourney';
import styles from './schedule.module.css';

export const metadata: Metadata = {
  title: 'Schedule | Iron Frontier',
  description:
    'Seven days of transformation in Lampang, Thailand. See the daily rhythm — Muay Thai training, mental health workshops, breathwork, brotherhood, and purposeful recovery. 7 days for $1,200 all-inclusive.',
};

const scheduleItems = [
  {
    time: '6:00 AM',
    title: 'Morning Meditation + Breathwork',
    description:
      '30 minutes of guided stillness. Set intention for the day, reconnect with your breath, and quiet the noise.',
  },
  {
    time: '6:30 AM',
    title: 'Yoga Session',
    description:
      '60 minutes of functional yoga — mobility, flexibility, and mind-body connection. All levels welcome.',
  },
  {
    time: '8:00 AM',
    title: 'Healthy Breakfast',
    description:
      "Thai food, protein-focused, clean eating. Fresh ingredients, locally sourced. Fuel for what's ahead.",
  },
  {
    time: '9:30 AM',
    title: 'Muay Thai / MMA Training Session',
    description:
      "90–120 minutes with experienced Thai coaches. Pad work, technique, clinch, sparring progressions. You'll be pushed — and you'll grow.",
  },
  {
    time: '12:00 PM',
    title: 'Lunch + Rest / Pool Time',
    description:
      'Refuel and decompress. Swim, nap, journal, or simply be still. Recovery is part of the work.',
  },
  {
    time: '2:00 PM',
    title: 'Mental Health / Self-Development Workshop',
    description:
      "Group circle, journaling, men's therapy session, or guest speaker. The inner fight matters as much as the outer one.",
  },
  {
    time: '4:00 PM',
    title: 'Physical Challenge or Elective',
    description:
      'Hike, obstacle course, cold plunge, breathwork, or a second fight session. Choose your edge.',
  },
  {
    time: '6:00 PM',
    title: 'Dinner Together',
    description:
      'Communal, family-style. Breaking bread with the brotherhood. No phones, no distractions — just presence.',
  },
  {
    time: '7:30 PM',
    title: 'Evening Integration',
    description:
      'Campfire, reflection journaling, or group debrief. Some nights off — rest is earned and honored.',
  },
  {
    time: '9:00 PM',
    title: 'Lights Out Encouraged',
    description:
      'Recovery is non-negotiable. Sleep is when the body and mind rebuild. Honor it.',
  },
];

const CATEGORIZED_INCLUSIONS = [
  {
    category: "Accommodation",
    items: [
      "Private room or premium shared options",
      "Air conditioning and modern amenities",
      "Dedicated workspace for integration",
      "Access to all compound facilities"
    ]
  },
  {
    category: "Combat Training",
    items: [
      "Twice-daily Muay Thai sessions",
      "Grappling and MMA fundamentals",
      "World-class Thai coaches",
      "Welcome kit with premium gear",
      "All skill levels accommodated"
    ]
  },
  {
    category: "Inner Work",
    items: [
      "Daily men's group circles",
      "1-on-1 coaching session",
      "Breathwork & journaling workshops",
      "Resilience & leadership mapping",
      "30-day post-retreat action plan"
    ]
  },
  {
    category: "Recovery",
    items: [
      "Morning yoga and mobility",
      "Guided meditation sessions",
      "Unlimited ice bath access",
      "Traditional Thai massage",
      "Focus on sleep optimization"
    ]
  },
  {
    category: "Fuel",
    items: [
      "3 high-protein meals daily",
      "Locally sourced Thai and Western food",
      "Post-training protein & supplements",
      "Unlimited hydration and coffee",
      "Completely dry property (no alcohol)"
    ]
  },
  {
    category: "Logistics",
    items: [
      "Airport transfer from Chiang Mai",
      "All local transportation",
      "Cultural temple excursions",
      "Laundry service (twice weekly)",
      "Access to Alumni Network"
    ]
  }
];

export default function SchedulePage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>YOUR SEVEN DAYS</h1>
          <p className={styles.heroSubtitle}>
            A daily rhythm designed to break you open and build you back —
            stronger, clearer, connected.
          </p>
          <span className={styles.heroAccent} aria-hidden="true" />
        </div>
      </section>

      {/* Daily Schedule Timeline */}
      <section className={`${styles.scheduleSection} section-padding`}>
        <div className="container">
          <SectionHeading
            eyebrow="A Sample Day"
            title="DAILY RHYTHM"
            subtitle="Every day is intentionally structured — but never rigid. Here's what a typical day looks like at Iron Frontier."
          />
          <ScheduleTimeline items={scheduleItems} />
          
          <div className={styles.scheduleNote}>
            Note: 1–2 days per week would include cultural excursions (Lampang temples, elephant center, Chae Son hot springs) in place of afternoon sessions.
          </div>
        </div>
      </section>

      <WeekJourney />

      <Divider />

      {/* Pricing Section */}
      <section className={`${styles.pricingSection} section-padding`}>
        <div className="container">
          <SectionHeading
            eyebrow="Investment"
            title="THE COST OF CHANGE"
            subtitle="This is not a vacation. It's seven days that will reshape the next chapter of your life."
          />

          <div className={styles.pricingGrid}>
            
            {/* The Taster */}
            <div className={styles.priceCard}>
              <div className={styles.priceEyebrow}>The Taster</div>
              <div className={styles.priceTitle}>Weekend</div>
              <div className={styles.priceAmount}>$500</div>
              <div className={styles.priceDuration}>3 Nights / 4 Days</div>
              <ul className={styles.pricingList}>
                <li>Introduction to the pillars</li>
                <li>4x Muay Thai sessions</li>
                <li>1x Men's Circle</li>
                <li>All meals & recovery access</li>
                <li>Ideal for Chiang Mai expats</li>
              </ul>
            </div>

            {/* The Full Frontier */}
            <div className={`${styles.priceCard} ${styles.priceCardPopular}`}>
              <div className={styles.priceEyebrow}>★ Most Popular</div>
              <div className={styles.priceTitle}>The Full Frontier</div>
              <div className={styles.priceAmount}>$1,200</div>
              <div className={styles.priceDuration}>7 Nights / 8 Days</div>
              <ul className={styles.pricingList}>
                <li>The complete transformation arc</li>
                <li>12x Muay Thai sessions</li>
                <li>Daily Inner Work & Brotherhood</li>
                <li>1-on-1 coaching & mapping</li>
                <li>30-day integration plan</li>
              </ul>
            </div>

            {/* The Deep Dive */}
            <div className={styles.priceCard}>
              <div className={styles.priceEyebrow}>The Deep Dive</div>
              <div className={styles.priceTitle}>14 Days</div>
              <div className={styles.priceAmount}>$2,200</div>
              <div className={styles.priceDuration}>14 Nights / 15 Days</div>
              <ul className={styles.pricingList}>
                <li>Sustained lifestyle reset</li>
                <li>Discounted daily rate</li>
                <li>Advanced combat progression</li>
                <li>Deepest resilience building</li>
                <li>2x Thai Massages included</li>
              </ul>
            </div>

          </div>

          <div className={styles.scheduleNote} style={{ marginTop: '0', marginBottom: 'var(--space-4xl)' }}>
            <strong>Group Booking:</strong> 10% off for cohorts of 4+ men. <br/>
            <strong>Early Commitment:</strong> $100 off when booked 90+ days in advance. <br/>
            Secure your spot with a $300 deposit.
          </div>

          <SectionHeading
            eyebrow="The Details"
            title="What's Included"
            align="center"
          />

          <div className={styles.detailsCard}>
            {CATEGORIZED_INCLUSIONS.map((category, idx) => (
              <div key={idx} className={styles.detailBlock}>
                <div className={styles.detailLabel}>{category.category}</div>
                <ul className={styles.detailList}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.detailBlock} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className={styles.detailLabelExcluded} style={{ marginBottom: 'var(--space-sm)' }}>What&apos;s Not Included</div>
            <p style={{ color: 'var(--color-sandstone)', fontSize: 'var(--text-sm)', margin: '0' }}>
              Flights to Chiang Mai, required travel insurance, and personal souvenirs.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className={`${styles.ctaSection} section-padding`}>
        <div className="container">
          <p className={styles.ctaQuestion}>
            Ready to commit your seven days?
          </p>
          <Button href="/book" size="lg">
            Reserve Your Spot
          </Button>
        </div>
      </section>
    </main>
  );
}
