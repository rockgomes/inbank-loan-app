import type { HTMLAttributes } from 'react';
import { Separator } from '../../ui/Separator';
import styles from './LegalConsent.module.css';

export interface LegalConsentProps extends HTMLAttributes<HTMLDivElement> {
  privacyPolicyUrl?: string;
}

export function LegalConsent({
  privacyPolicyUrl = '#',
  className,
  ...props
}: LegalConsentProps) {
  const classNames = [styles.legalConsent, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      <Separator />
      <p className={styles.text}>
        By continuing I confirm that I have read the{' '}
        <a href={privacyPolicyUrl} className={styles.link}>
          Principles of Processing Client Data
        </a>{' '}
        and agree that my data is sent to AS Inbank.
      </p>
    </div>
  );
}
