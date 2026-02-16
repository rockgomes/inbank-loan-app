import type { ReactNode } from "react";
import styles from "./RadioCard.module.css";

export interface RadioCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  selected: boolean;
  onChange: (value: string) => void;
  name: string;
}

export function RadioCard({
  value,
  label,
  icon,
  selected,
  onChange,
  name,
}: RadioCardProps) {
  return (
    <label className={`${styles.radioCard} ${selected ? styles.selected : ""}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className={styles.input}
      />
      <div className={styles.radioIndicator}>
        <div className={styles.radioOuter}>
          {selected && <div className={styles.radioInner} />}
        </div>
      </div>
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.label}>{label}</span>
    </label>
  );
}
