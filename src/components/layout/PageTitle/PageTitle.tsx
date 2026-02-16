import type { HTMLAttributes } from 'react';
import styles from './PageTitle.module.css';

export interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  titleItalic?: string;
  subtitle?: string;
}

export function PageTitle({
  title,
  titleItalic,
  subtitle,
  className,
  ...props
}: PageTitleProps) {
  const classNames = [styles.pageTitle, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      <h1 className={styles.title}>
        {titleItalic && <em className={styles.italic}>{titleItalic}</em>}
        {title && <span className={styles.regular}>{title}</span>}
      </h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
