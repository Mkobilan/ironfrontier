'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './book.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xYOURFORMID';

export function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={styles.formInner}>
      <h2 className={styles.formHeading}>Begin Your Application</h2>
      <p className={styles.formSubheading}>
        Fill out the form below and we&rsquo;ll be in touch.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            className={styles.successWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Application Received</h3>
            <p className={styles.successMessage}>
              Thank you. We&rsquo;ll be in touch within 48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.fieldGroup}>
              <label htmlFor="booking-name" className={styles.label}>
                Full Name
              </label>
              <input
                id="booking-name"
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={styles.input}
                autoComplete="name"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="booking-email" className={styles.label}>
                Email Address
              </label>
              <input
                id="booking-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.input}
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="booking-message" className={styles.label}>
                What Brought You Here{' '}
                <span style={{ opacity: 0.5, fontWeight: 400, letterSpacing: '0.05em' }}>
                  (Optional)
                </span>
              </label>
              <textarea
                id="booking-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about yourself and what you're looking for…"
                className={styles.textarea}
              />
            </div>

            {status === 'error' && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                Something went wrong. Please try again, or email us directly.
              </motion.div>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <span className={styles.spinner} />
                  Submitting…
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
