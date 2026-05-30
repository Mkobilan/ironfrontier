import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { ScheduleTimeline } from './ScheduleClient';
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

const included = [
  'Accommodation — private and shared options',
  'All meals — breakfast, lunch, dinner',
  'Muay Thai & MMA training with Thai coaches',
  'Mental health & self-development workshops',
  'Supplements & recovery essentials',
  'Welcome kit with training gear',
  'Airport transfers from Chiang Mai',
];

const notIncluded = [
  'Flights to Chiang Mai',
  'Travel insurance',
  'Personal spending & souvenirs',
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
            {/* Price Card */}
            <div className={styles.priceCard}>
              <div className={styles.priceEyebrow}>All-Inclusive Packages</div>
              <ul className={styles.pricingList}>
                <li>
                  <div className={styles.priceHeader}>
                    <span className={styles.priceDuration}>7 days:</span> <span className={styles.priceValue}>$1,200</span>
                  </div>
                  <div className={styles.priceDesc}>Most popular, entry point for international travelers</div>
                </li>
                <li>
                  <div className={styles.priceHeader}>
                    <span className={styles.priceDuration}>14 days:</span> <span className={styles.priceValue}>$2,000</span>
                  </div>
                  <div className={styles.priceDesc}>Deep transformation, discounted daily rate</div>
                </li>
                <li>
                  <div className={styles.priceHeader}>
                    <span className={styles.priceDuration}>30 days:</span> <span className={styles.priceValue}>$3,500</span>
                  </div>
                  <div className={styles.priceDesc}>Full lifestyle reset, serious commitment</div>
                </li>
                <li>
                  <div className={styles.priceHeader}>
                    <span className={styles.priceDuration}>Weekend (3-4 days):</span> <span className={styles.priceValue}>$500</span>
                  </div>
                  <div className={styles.priceDesc}>Local Thai/expat market, Chiang Mai day-trippers</div>
                </li>
              </ul>
              <div className={styles.priceDivider} />
              <div className={styles.priceFeature}>
                Lampang, Northern Thailand
              </div>
            </div>

            {/* Details */}
            <div className={styles.detailsCard}>
              <div className={styles.detailBlock}>
                <div className={styles.detailLabel}>What&apos;s Included</div>
                <ul className={styles.detailList}>
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailBlock}>
                <div className={styles.detailLabelExcluded}>
                  What&apos;s Not Included
                </div>
                <ul className={styles.detailList}>
                  {notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
