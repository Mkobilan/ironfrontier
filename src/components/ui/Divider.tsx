import styles from './Divider.module.css';

interface DividerProps {
  withOrnament?: boolean;
  className?: string;
}

export function Divider({ withOrnament = true, className = '' }: DividerProps) {
  return (
    <div className={`${styles.container} ${className}`} aria-hidden="true">
      <div className={styles.line} />
      {withOrnament && <div className={styles.ornament}>◆</div>}
      {withOrnament && <div className={styles.line} />}
    </div>
  );
}
