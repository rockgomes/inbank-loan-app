import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
  error?: boolean;
  required?: boolean;
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error = false,
      required = false,
      className,
      id: providedId,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    const containerClasses = [
      styles.container,
      error && styles.error,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClasses}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={styles.input}
          disabled={disabled}
          aria-required={required}
          {...props}
        />
        <label htmlFor={id} className={styles.checkmark}>
          <CheckIcon />
        </label>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                {" "}
                *
              </span>
            )}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
