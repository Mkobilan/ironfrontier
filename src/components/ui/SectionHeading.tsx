import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleFont?: 'rye' | 'playfair';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleFont = 'rye',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.container} ${styles[align]} ${className}`}>
      {eyebrow && (
        <div className={styles.eyebrowWrapper}>
          {align === 'center' && <span className={styles.line} />}
          <span className={styles.eyebrow}>{eyebrow}</span>
          <span className={styles.line} />
        </div>
      )}
      
      <h2 className={`${styles.title} ${styles[titleFont]}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
