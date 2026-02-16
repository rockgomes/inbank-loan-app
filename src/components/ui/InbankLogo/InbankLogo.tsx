import type { HTMLAttributes } from 'react';
import logoFull from '../../../assets/inbank-logo-full.svg';
import logoSmall from '../../../assets/inbank-logo-small.svg';
import styles from './InbankLogo.module.css';

export type LogoVariant = 'full' | 'small' | 'responsive';

export interface InbankLogoProps extends HTMLAttributes<HTMLDivElement> {
  variant?: LogoVariant;
  height?: number;
}

export function InbankLogo({
  variant = 'responsive',
  height,
  className,
  ...props
}: InbankLogoProps) {
  const containerClasses = [
    styles.container,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const imgStyle = height ? { height: `${height}px`, width: 'auto' } : undefined;

  if (variant === 'full') {
    return (
      <div className={containerClasses} {...props}>
        <img
          src={logoFull}
          alt="Inbank"
          className={styles.logo}
          style={imgStyle}
        />
      </div>
    );
  }

  if (variant === 'small') {
    return (
      <div className={containerClasses} {...props}>
        <img
          src={logoSmall}
          alt="Inbank"
          className={styles.logo}
          style={imgStyle}
        />
      </div>
    );
  }

  return (
    <div className={containerClasses} {...props}>
      <img
        src={logoFull}
        alt="Inbank"
        className={`${styles.logo} ${styles.logoFull}`}
        style={imgStyle}
      />
      <img
        src={logoSmall}
        alt="Inbank"
        className={`${styles.logo} ${styles.logoSmall}`}
        style={imgStyle}
      />
    </div>
  );
}
