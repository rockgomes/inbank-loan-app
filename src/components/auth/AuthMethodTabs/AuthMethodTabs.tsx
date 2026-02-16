import styles from "./AuthMethodTabs.module.css";

export interface AuthMethodTabsProps {
  methods: string[];
  activeMethod: string;
  onSelect: (method: string) => void;
  className?: string;
}

export function AuthMethodTabs({
  methods,
  activeMethod,
  onSelect,
  className,
  ...props
}: AuthMethodTabsProps) {
  const classNames = [styles.tabs, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} {...props}>
      {methods.map((method) => {
        const isActive = method === activeMethod;
        return (
          <button
            key={method}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            onClick={() => onSelect(method)}
            type="button"
          >
            <span className={styles.tabText}>{method}</span>
            {isActive && <div className={styles.activeIndicator} />}
          </button>
        );
      })}
    </div>
  );
}
