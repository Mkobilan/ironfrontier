import styles from './ScrollIndicator.module.css';

export function ScrollIndicator() {
  return (
    <div className={styles.container} aria-hidden="true">
      <span className={styles.text}>SCROLL</span>
      <div className={styles.line}>
        <div className={styles.chevron}></div>
      </div>
    </div>
  );
}
