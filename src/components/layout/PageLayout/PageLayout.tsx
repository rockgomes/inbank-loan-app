import type { HTMLAttributes, ReactNode } from 'react';
import { Header } from '../Header';
import styles from './PageLayout.module.css';

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showHeader?: boolean;
}

export function PageLayout({
  children,
  showHeader = true,
  className,
  ...props
}: PageLayoutProps) {
  const classNames = [styles.pageLayout, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {showHeader && <Header />}
      <div className={styles.background} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}
