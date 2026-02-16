import type { HTMLAttributes } from 'react';
import styles from './OrderInfoSection.module.css';

export interface OrderInfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  amount: number;
  merchant: string;
  paymentMethod: string;
}

export function OrderInfoSection({
  amount,
  merchant,
  paymentMethod,
  className,
  ...props
}: OrderInfoSectionProps) {
  const classNames = [styles.orderInfoSection, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <span className={styles.label}>Amount</span>
          <span className={styles.value}>{amount.toFixed(2)} €</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Merchant</span>
          <span className={styles.value}>{merchant}</span>
        </div>
      </div>
      <div className={styles.field}>
        <span className={styles.label}>Payment method</span>
        <span className={styles.value}>{paymentMethod}</span>
      </div>
    </div>
  );
}
