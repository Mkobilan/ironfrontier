'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

const links = [
  { name: 'About', href: '/#about' },
  { name: 'The Pillars', href: '/#pillars' },
  { name: 'Property', href: '/#property' },
  { name: 'Schedule', href: '/schedule' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          IRON FRONTIER
        </Link>

        <nav className={styles.desktopNav}>
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <Link href="/book" className={styles.bookButton}>
            Reserve
          </Link>
        </nav>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineTop : ''}`} />
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineMiddle : ''}`} />
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineBottom : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.mobileNav}
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book" 
              className={styles.mobileBookButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve Your Spot
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
