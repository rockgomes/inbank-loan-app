import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Alert.module.css';

export type AlertVariant = 'error' | 'warning' | 'info' | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  icon?: ReactNode;
  children: ReactNode;
}

const AlertCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export function Alert({
  variant = 'error',
  icon,
  children,
  className,
  ...props
}: AlertProps) {
  const classNames = [styles.alert, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" {...props}>
      <span className={styles.icon}>{icon || <AlertCircleIcon />}</span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
