import type { HTMLAttributes, ReactNode } from 'react';
import styles from './InfoRow.module.css';

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  helperText?: string;
  layout?: 'horizontal' | 'vertical';
}

export function InfoRow({
  label,
  value,
  helperText,
  layout = 'vertical',
  className,
  ...props
}: InfoRowProps) {
  const classNames = [
    styles.infoRow,
    styles[layout],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      <div className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.valueWrapper}>
        <div className={styles.value}>{value}</div>
        {helperText && (
          <span className={styles.helperText}>{helperText}</span>
        )}
      </div>
    </div>
  );
}
