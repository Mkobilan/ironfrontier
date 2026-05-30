'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { PillarCard } from './PillarCard';
import styles from './PillarSection.module.css';

const PILLARS = [
  {
    id: 'trailhead',
    icon: '🥊',
    name: 'TRAILHEAD',
    tagline: 'Every journey begins somewhere. This is yours.',
    description: 'The combat training pillar. The reason Iron Frontier is unlike anything else. Twice-daily Muay Thai and grappling sessions with world-class Thai trainers. Strength and conditioning. Pad work. Optional sparring. You do not need experience. You do not need to be in shape. You need to show up and be willing. What you will discover inside that ring is something no boardroom, no gym, and no therapist\'s office has ever shown you: you cannot fake it in there. You cannot check your phone. You cannot delegate the hard part. It is just you, your body, and the work. And most men find that the ring is where they start telling the truth — to themselves, and to the men beside them.',
    features: ['Muay Thai — twice daily', 'MMA / grappling', 'Strength & conditioning', 'Pad work with Thai trainers', 'All skill levels welcome', 'Optional sparring'],
  },
  {
    id: 'outpost',
    icon: '🏕️',
    name: 'THE OUTPOST',
    tagline: 'This is where you regroup.',
    description: 'The home base. The first step is simply arriving. Before any work begins, you have to get here. Stop. Let your nervous system catch up to your body. The Outpost is Iron Frontier\'s physical home — the place where you eat, sleep, recover, and begin to breathe differently. Private rooms with air conditioning. Three clean, nourishing Thai meals every day. Pool. Ice bath. Space. There is no itinerary in the world that works if a man is still running on the fumes of his ordinary life. The Outpost exists to land you. To give your body and your mind permission to stop performing. You came depleted. This is where you regroup.',
    features: ['Comfortable private accommodation', '3 clean meals daily', 'Pool & recovery space', 'Ice bath', 'Community meals', 'Old West property'],
  },
  {
    id: 'deadwood',
    icon: '🪓',
    name: 'DEADWOOD',
    tagline: 'Cut away what no longer serves you.',
    description: 'The mental and emotional work. No therapy-speak. No judgment. Deadwood is the dead weight on a living tree — the old growth that blocks the light and drains the energy that new things need to flourish. Most men carry it in silence. Old versions of themselves they never chose to become. Stress they absorbed and never processed. Patterns inherited from fathers and culture and years of keeping it together when no one asked if they were okay. This pillar is where that weight gets named and set down. Men\'s group circles. One-on-one coaching sessions. Journaling workshops. Breathwork. Honest conversation in a room full of men who are doing the same work. There is no clinical atmosphere here. No couch. No diagnosis. Just men, doing the work that actually matters.',
    features: ['Men\'s group circles', '1-on-1 coaching sessions', 'Breathwork', 'Journaling workshops', 'Emotional resilience training', 'Stress & burnout work'],
  },
  {
    id: 'still-water',
    icon: '💧',
    name: 'STILL WATER',
    tagline: 'The calm is earned, not given.',
    description: 'Recovery, restoration, and the discipline of stillness. You cannot pour from an empty cup. You cannot fight from a broken body. You cannot think clearly from a mind that has not been quiet in years. Still Water is the counterweight to everything else at Iron Frontier — the morning yoga session, the guided meditation, the Thai massage, the evening walk to the water. Most men arrive thinking the physical training will be the hardest part. They are wrong. Sitting still is harder. Being quiet is harder. Letting the body actually rest, rather than just stopping temporarily — that is the real discipline. The calm you carry home from Iron Frontier is not a gift. You will have earned it, session by session, morning by morning.',
    features: ['Morning meditation', 'Daily yoga', 'Thai massage (included)', 'Breathwork', 'Sleep optimization', 'Nature walks'],
  },
  {
    id: 'true-north',
    icon: '🧭',
    name: 'TRUE NORTH',
    tagline: 'Find your direction.',
    description: 'The purpose and leadership pillar. Who are you when no one is watching? True North is the leadership concept that refers to a man\'s core values and authentic direction — the compass point that does not shift with trends, opinions, or pressure. Most men have never sat down long enough, quietly enough, and honestly enough to find theirs. This pillar is the work of figuring out who you actually are when the performance stops, and where you actually want to go next. Vision mapping. Values workshops. Purpose-finding sessions in the hills of Northern Thailand, at temple grounds that have been helping people find clarity for centuries. You will not leave Iron Frontier without a direction. And you will not leave without a plan to walk toward it.',
    features: ['Purpose & values workshops', 'Leadership development', 'Vision mapping', 'Temple visits & reflection', 'Cultural immersion', 'Group & solo reflection time'],
  }
];

export function PillarSection() {
  return (
    <section id="pillars" className={`section-padding ${styles.section}`}>
      <div className="container">
        <SectionHeading 
          eyebrow="The Five Pillars"
          title="The Framework"
          subtitle="This is not a retreat with one thing to offer. It is a complete recalibration — in five parts."
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
