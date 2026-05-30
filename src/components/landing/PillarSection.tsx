'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { PillarCard } from './PillarCard';
import styles from './PillarSection.module.css';

const PILLARS = [
  {
    id: 'outpost',
    icon: '🏕️',
    name: 'THE OUTPOST',
    tagline: 'This is where you regroup.',
    description: 'You come depleted. You leave ready. The Outpost is our home base — the physical space at Iron Frontier where you eat, rest, recover, and reconnect. It represents the first and most important step: arriving. Stopping. Letting your nervous system catch up with you. Before the work begins, you have to get here. And getting here takes courage.',
    features: ['Comfortable private accommodation', '3 clean meals daily', 'Pool & recovery space', 'Ice bath', 'Community meals', 'Old West property'],
  },
  {
    id: 'deadwood',
    icon: '🪓',
    name: 'DEADWOOD',
    tagline: 'Cut away what no longer serves you.',
    description: 'Deadwood is dead wood — branches on a tree that block the light and drain the energy that living things need to grow. Most men carry it: old identities, buried stress, patterns picked up from fathers and culture and years of keeping it together. This pillar is the mental and emotional work. Group sessions. One-on-one coaching. Journaling. Men\'s circles. Breathwork. No therapy-speak. No judgment. Just honest work in a room full of men who get it.',
    features: ['Men\'s group circles', '1-on-1 coaching sessions', 'Breathwork', 'Journaling workshops', 'Emotional resilience training', 'Stress & burnout work'],
  },
  {
    id: 'still-water',
    icon: '💧',
    name: 'STILL WATER',
    tagline: 'The calm is earned, not given.',
    description: 'Still Water is the body\'s recovery and restoration pillar — the counterbalance to the intensity of combat training. Thai massage. Morning yoga. Meditation sessions at the water\'s edge. You can\'t pour from an empty cup, and you can\'t fight from a broken body. This is where you learn that stillness is not weakness — it is the highest form of discipline. The calm you\'ll carry home is not a gift. You will have earned it, day by day, session by session.',
    features: ['Morning meditation', 'Daily yoga', 'Thai massage (included)', 'Breathwork', 'Sleep optimization', 'Nature walks'],
  },
  {
    id: 'true-north',
    icon: '🧭',
    name: 'TRUE NORTH',
    tagline: 'Find your direction.',
    description: 'True North is the leadership and purpose pillar — the work of figuring out who you actually are when no one is watching, and where you actually want to go. This is not life coaching in a fluorescent-lit office. This is deep personal clarity work done on the other side of the world, stripped of the noise and the obligations and the performance. By the time you leave, you will know what your True North is. And you will have a plan to walk toward it.',
    features: ['Purpose & values workshops', 'Leadership development', 'Vision mapping', 'Temple visits & reflection', 'Cultural immersion', 'Group & solo reflection time'],
  },
  {
    id: 'trailhead',
    icon: '🥊',
    name: 'TRAILHEAD',
    tagline: 'Every journey begins somewhere. This is yours.',
    description: 'Trailhead is the combat training pillar — and the reason Iron Frontier is unlike any other men\'s retreat on earth. Twice-daily Muay Thai and grappling sessions with world-class Thai trainers. No experience necessary. No judgment. What you will discover is that the ring is one of the most honest places on the planet. You cannot fake it. You cannot overthink it. You can only show up and do the work. Many men come to Iron Frontier for the wellness. They stay for the fighting.',
    features: ['Muay Thai — twice daily', 'MMA / grappling', 'Strength & conditioning', 'Pad work with Thai trainers', 'All skill levels welcome', 'Optional sparring'],
  }
];

export function PillarSection() {
  return (
    <section id="pillars" className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Five Pillars"
          title="The Framework"
          subtitle="These are the five areas of work at Iron Frontier."
        />

        <div className={styles.pillarContainer}>
          {PILLARS.map((pillar, index) => (
            <PillarCard 
              key={pillar.id}
              index={index}
              {...pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
