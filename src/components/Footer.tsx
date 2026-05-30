import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>IRON FRONTIER</h2>
            <p className={styles.tagline}>Where men are forged.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3>Retreat</h3>
              <Link href="/#about">About</Link>
              <Link href="/#pillars">The Pillars</Link>
              <Link href="/#property">Property</Link>
            </div>
            <div className={styles.linkColumn}>
              <h3>Join Us</h3>
              <Link href="/schedule">Schedule & Pricing</Link>
              <Link href="/book">Reserve Spot</Link>
            </div>
            <div className={styles.linkColumn}>
              <h3>Location</h3>
              <p>Lampang, Northern Thailand</p>
              <p>1 hour from Chiang Mai</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Iron Frontier. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
