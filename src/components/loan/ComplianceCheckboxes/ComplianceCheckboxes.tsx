import { Checkbox } from '../../ui/Checkbox';
import { Alert } from '../../ui/Alert';
import styles from './ComplianceCheckboxes.module.css';

export interface ComplianceCheckboxesProps {
  values: {
    noInfluence: boolean;
    termsAccepted: boolean;
    marketingConsent: boolean;
  };
  onChange: (field: keyof ComplianceCheckboxesProps['values'], value: boolean) => void;
  showErrors?: boolean;
}

export function ComplianceCheckboxes({
  values,
  onChange,
  showErrors = false,
}: ComplianceCheckboxesProps) {
  const showNoInfluenceError = showErrors && !values.noInfluence;
  const showTermsError = showErrors && !values.termsAccepted;

  return (
    <div className={styles.container}>
      <div className={styles.checkboxGroup}>
        <Checkbox
          label="No one else has influenced me to apply for credit."
          checked={values.noInfluence}
          onChange={(e) => onChange('noInfluence', e.target.checked)}
          error={showNoInfluenceError}
        />
        {showNoInfluenceError && (
          <Alert variant="error" className={styles.alert}>
            To continue with the application, confirm that no one has influenced you to apply for credit.
          </Alert>
        )}
      </div>

      <div className={styles.checkboxGroup}>
        <Checkbox
          label={
            <>
              I have read and accept the{' '}
              <a
                href="https://inbank.ee/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions of Digital Channels
              </a>
              .
            </>
          }
          checked={values.termsAccepted}
          onChange={(e) => onChange('termsAccepted', e.target.checked)}
          error={showTermsError}
        />
        {showTermsError && (
          <Alert variant="error" className={styles.alert}>
            To continue with the application, agree to the terms and conditions.
          </Alert>
        )}
      </div>

      <Checkbox
        label="I want to receive news and offers from Inbank and partners."
        checked={values.marketingConsent}
        onChange={(e) => onChange('marketingConsent', e.target.checked)}
      />

      <p className={styles.disclaimer}>
        By continuing, I confirm that I allow AS Inbank Finance to request information about my gross income from AS Pensionikeskus pension registry for the purpose of making a credit decision.
      </p>
    </div>
  );
}
