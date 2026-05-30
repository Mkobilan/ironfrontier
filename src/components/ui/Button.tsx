import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', href, children, className = '', ...props }: ButtonProps) {
  const btnClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={btnClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
