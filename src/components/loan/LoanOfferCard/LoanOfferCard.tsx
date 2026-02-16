import { Icon } from "../../ui/Icon";
import styles from "./LoanOfferCard.module.css";

export interface LoanOfferCardProps {
  monthlyPayment: number;
  downPayment: number;
  loanAmount: number;
  financedAmount: number;
}

export function LoanOfferCard({
  monthlyPayment,
  downPayment,
  loanAmount,
  financedAmount,
}: LoanOfferCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.checkmark}>
        <Icon name="check" size="md" />
      </div>

      <div className={styles.topSection}>
        <div className={styles.field}>
          <span className={styles.label}>Monthly payment</span>
          <span className={styles.value}>{monthlyPayment.toFixed(2)} €</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Down payment</span>
          <span className={styles.value}>{downPayment.toFixed(2)} €</span>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.bottomSection}>
        <div className={styles.field}>
          <span className={styles.label}>Loan amount</span>
          <span className={styles.value}>{loanAmount.toFixed(2)} €</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Financed amount</span>
          <span className={styles.value}>{financedAmount.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
}
