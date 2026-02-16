import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant = "default" | "bordered" | "selected";
export type CardRadius = "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "none" | "small" | "default" | "large";
  radius?: CardRadius;
  gap?: boolean;
  children: ReactNode;
}

export function Card({
  variant = "default",
  padding = "default",
  radius = "lg",
  gap = false,
  children,
  className,
  ...props
}: CardProps) {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    styles[`radius-${radius}`],
    gap && styles.gap,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
