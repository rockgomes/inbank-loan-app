import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Tabs.module.css';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultActiveId?: string;
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function Tabs({
  tabs,
  defaultActiveId,
  activeId: controlledActiveId,
  onChange,
  className,
}: TabsProps) {
  const [internalActiveId, setInternalActiveId] = useState(
    defaultActiveId || tabs[0]?.id
  );

  const isControlled = controlledActiveId !== undefined;
  const activeId = isControlled ? controlledActiveId : internalActiveId;

  const handleTabClick = (id: string) => {
    if (!isControlled) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            className={`${styles.tab} ${tab.id === activeId ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab && (
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className={styles.tabPanel}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}
