import { useState } from "react";
import { InbankLogo } from "../../ui/InbankLogo";
import styles from "./Header.module.css";

export type Language = "ET" | "RU" | "EN";

export interface HeaderProps {
  currentLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
  phoneNumber?: string;
}

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function Header({
  currentLanguage = "EN",
  onLanguageChange,
  phoneNumber = "640 8080",
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const languages: Language[] = ["ET", "RU", "EN"];

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange?.(language);
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: Phone */}
        <div className={styles.phone}>
          <PhoneIcon />
          <span className={styles.phoneNumberDesktop}>{phoneNumber}</span>
          <span className={styles.phoneTextMobile}>Call us</span>
        </div>

        {/* Center: Logo */}
        <div className={styles.logo}>
          <InbankLogo variant="responsive" />
        </div>

        {/* Right: Language Selector */}
        <div className={styles.languageSelector}>
          {/* Desktop: Horizontal tabs */}
          <div className={styles.languageTabsDesktop}>
            {languages.map((lang) => (
              <button
                key={lang}
                className={`${styles.languageTab} ${lang === currentLanguage ? styles.active : ""}`}
                onClick={() => handleLanguageSelect(lang)}
                aria-pressed={lang === currentLanguage}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile: Dropdown */}
          <div className={styles.languageDropdownMobile}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              {currentLanguage}
              <ChevronDownIcon />
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu} role="listbox">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      className={`${styles.dropdownItem} ${lang === currentLanguage ? styles.active : ""}`}
                      onClick={() => handleLanguageSelect(lang)}
                      role="option"
                      aria-selected={lang === currentLanguage}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
