import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./TextField.module.css";

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
> {
  label?: string;
  error?: string;
  helperText?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      helperText,
      prefix,
      suffix,
      fullWidth = false,
      className,
      id: providedId,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    const hasError = Boolean(error);
    const hasValue = Boolean(props.value || props.defaultValue);

    const containerClasses = [
      styles.container,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inputWrapperClasses = [
      styles.inputWrapper,
      hasError && styles.error,
      disabled && styles.disabled,
      hasValue && styles.hasValue,
      prefix && styles.hasPrefix,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClasses}>
        <div className={inputWrapperClasses}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <input
            ref={ref}
            id={id}
            className={styles.input}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${id}-error` : helperText ? `${id}-helper` : undefined
            }
            {...props}
          />
          {label && (
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
          )}
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </div>
        {error && (
          <span id={`${id}-error`} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${id}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
