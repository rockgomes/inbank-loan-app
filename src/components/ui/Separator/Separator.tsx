import type { HTMLAttributes } from 'react';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) {
  const classNames = [styles.separator, styles[orientation], className]
    .filter(Boolean)
    .join(' ');

  return (
    <hr
      className={classNames}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
}
